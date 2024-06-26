---
sidebar_position: 13
---

# Install Load Balancer

## Install bare-metal Load Balancer service

:::note

[Bare-metal ingress controller consideration](https://kubernetes.github.io/ingress-nginx/deploy/baremetal/)

:::

:::note

[Metallb concept](https://metallb.universe.tf/concepts/)

:::

Add Helm Chart repository:

```shell
helm repo add metallb https://metallb.github.io/metallb
helm repo update
```

Install `metallb` as a Load Balancer service:

```shell
helm install --create-namespace --namespace metallb metallb metallb/metallb
```

Configure Load Balancer iptool:

```yaml title="metallb-iptool.yaml"
---
apiVersion: metallb.io/v1beta1
kind: IPAddressPool
metadata:
  name: default
  namespace: metallb
spec:
  addresses:
  - 10.10.10.240-10.10.10.245
  autoAssign: true
---
apiVersion: metallb.io/v1beta1
kind: L2Advertisement
metadata:
  name: default
  namespace: metallb
spec:
  ipAddressPools:
  - default
```

Apply the Load Balancer configuration:

```shell
kubectl apply -f metallb-iptool.yaml
```

Verify `metallb` deployment installation:

```shell
kubectl get -n metallb pods
kubectl logs -n metallb metallb-controller-<Tab>
helm list -n metallb
```

## Intergrate metallb with NGINX Ingress Controller

:::note

[Bare-metal consideration](https://kubernetes.github.io/ingress-nginx/deploy/baremetal)

:::

:::warning

To complete this task, you need to first install the NGINX Ingress Controller from the previous chapter!

:::

Tell NGINX Ingress Controller to stop using host network:

```shell
helm upgrade -n ingress-nginx ingress-nginx ingress-nginx/ingress-nginx --set controller.hostNetwork=false
```

Check NGINX Ingress Controller:

```shell
helm list -n ingress-nginx
```

Check the External IP of the NGINX Ingress Controller:

```shell
kubectl get svc -n ingress-nginx
```

## Deploy test web application

Create a new namespace for the web application:

```shell
kubectl create namespace front-web
```

Create a new application in a specific namespace:

```shell
kubectl create deployment -n front-web web-app --image=nginx:1.23 --replicas=3
```
<details>
<summary>See created Deployment </summary>

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  creationTimestamp: null
  labels:
    app: web-app
  name: web-app
  namespace: front-web
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app
  strategy: {}
  template:
    metadata:
      creationTimestamp: null
      labels:
        app: web-app
    spec:
      containers:
      - image: nginx:1.23
        name: nginx
        resources: {}
status: {}

```

</details>

Check deployment status:

```shell
kubectl get deploy,rs,pods -o wide -n front-web
```

Expose fronted application with service in mode `LoadBalancer`:

```shell
kubectl expose deployment -n front-web web-app --port=80 --type=LoadBalancer
```
<details>
<summary>See created Service </summary>

```yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    app: web-app
  name: web-app
  namespace: front-web
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: web-app
  type: LoadBalancer
status:
  loadBalancer: {}
```

</details>

Check Service status:

```shell
kubectl get svc -n front-web web-app
```

Output:

```console
NAME      TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
web-app   LoadBalancer   10.106.220.243   10.10.10.241  80:32586/TCP   7s
```

Try to connect from remote host:

```shell
curl http://10.10.10.241
```

Delete LoadBalancer service:

```shell
kubectl delete service -n front-web web-app
```

Expose once again `web-app` with `ClusterIP`:

```shell
kubectl expose deployment -n front-web web-app --type=ClusterIP --port=80
```

<details>
<summary>See created Service </summary>

```yaml
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: null
  labels:
    app: web-app
  name: web-app
  namespace: front-web
spec:
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
  selector:
    app: web-app
  type: ClusterIP
status:
  loadBalancer: {}
```

</details>

Check service object:

```shell
kubectl get svc -n front-web
```

Configure Ingress for `web-app`

```yaml title=front-web.yaml"
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: frontend-ingress
  namespace: front-web
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /$1
spec:
  ingressClassName: "nginx"
  rules:
    - host: front-web.info
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: web-app
                port:
                  number: 80
```

Apply Ingress configuration:

```shell
kubectl apply -f front-web.yaml
```

:Check `EXTERNAL-IP` for NGINX Ingress Controller:

```shell
kubectl get svc -n ingress-nginx ingress-nginx-controller
```

Output:

```console
NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE
ingress-nginx-controller   LoadBalancer   10.109.139.127   10.10.10.240  80:31801/TCP,443:31942/TCP   3h16m
```

Check connection to `web-app`:

```shell
curl -D- http://10.10.10.240 -H 'Host: front-web.info'
```

Clean up:

```shell
kubectl delete namespace front-web
```
