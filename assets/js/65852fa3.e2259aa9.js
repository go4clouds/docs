"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[4233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=l.createContext({}),i=function(e){var n=l.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=i(e.components);return l.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=a,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?l.createElement(k,r(r({ref:n},c),{},{components:t})):l.createElement(k,r({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var i=2;i<o;i++)r[i]=t[i];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var l=t(7462),a=(t(7294),t(3905));const o={sidebar_position:13},r="Using Network Policy",s={unversionedId:"kubernetes/network-policy",id:"kubernetes/network-policy",title:"Using Network Policy",description:"Simple Network Policy",source:"@site/docs/kubernetes/network-policy.md",sourceDirName:"kubernetes",slug:"/kubernetes/network-policy",permalink:"/docs/kubernetes/network-policy",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Install Load Balancer",permalink:"/docs/kubernetes/loadbalancer-installation"},next:{title:"Congratulations!",permalink:"/docs/kubernetes/congratulations"}},p={},i=[{value:"Simple Network Policy",id:"simple-network-policy",level:2},{value:"Advanced Network Policy for guestbook with Redis and PHP",id:"advanced-network-policy-for-guestbook-with-redis-and-php",level:2}],c={toc:i};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-network-policy"},"Using Network Policy"),(0,a.kt)("h2",{id:"simple-network-policy"},"Simple Network Policy"),(0,a.kt)("p",null,"Create test Namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace test\n")),(0,a.kt)("p",null,"Create an nginx Deployment and expose it via a service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create deployment -n test nginx --image=nginx:1.23 --replicas=3\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deployment.apps/nginx created\n")),(0,a.kt)("p",null,"Expose the Deployment through a Service called nginx:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n test nginx --port=8080 --target-port=80\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"service/nginx exposed\n")),(0,a.kt)("p",null,"The above commands create a Deployment with an nginx Pod and expose the Deployment through a Service named nginx. The nginx Pod and Deployment are found in the default namespace."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc,pod -n test\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                        CLUSTER-IP    EXTERNAL-IP   PORT(S)    AGE\nservice/kubernetes          10.100.0.1    <none>        443/TCP    46m\nservice/nginx               10.100.0.16   <none>        8080/TCP     33s\n\nNAME                        READY         STATUS        RESTARTS   AGE\npod/nginx-701339712-e0qfq   1/1           Running       0          35s\n")),(0,a.kt)("p",null,"Test the service by accessing it from another Pod\nYou should be able to access the new nginx service from other Pods. To access the nginx Service from another Pod in the default namespace, start a busybox container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run busybox -n test --rm -ti --image=k8s.gcr.io/busybox -- /bin/sh\n")),(0,a.kt)("p",null,"In your shell, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget --spider --timeout=1 http://nginx:8080\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Connecting to nginx:8080 (10.101.252.93:8080)\n")),(0,a.kt)("p",null,"Limit access to the nginx service\nTo limit the access to the nginx service so that only Pods with the label ",(0,a.kt)("inlineCode",{parentName:"p"},"access: enabled")," can query it, create a NetworkPolicy object as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="access-nginx.yaml"',title:'"access-nginx.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: access-nginx\nspec:\n  podSelector:\n    matchLabels:\n      app: nginx\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          access: enabled\n")),(0,a.kt)("p",null,"The name of a NetworkPolicy object must be a valid DNS subdomain name."),(0,a.kt)("p",null,"Note: NetworkPolicy includes a podSelector which selects the grouping of Pods to which the policy applies. You can see this policy selects Pods with the label app=nginx. The label was automatically added to the Pod in the nginx Deployment. An empty podSelector selects all pods in the namespace.\nAssign the policy to the service\nUse kubectl to create a NetworkPolicy from the above access-nginx.yaml file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f access-nginx.yaml\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"networkpolicy.networking.k8s.io/access-nginx created\n")),(0,a.kt)("p",null,"Test access to the service when access label is not defined\nWhen you attempt to access the nginx Service from a Pod without the correct labels, the request times out:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run busybox -n test --rm -ti --image=k8s.gcr.io/busybox -- /bin/sh\n")),(0,a.kt)("p",null,"In your shell, run the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget --spider --timeout=1 http://nginx:8080\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Connecting to nginx (10.100.0.16:80)\nwget: download timed out\n")),(0,a.kt)("p",null,"Define access label and test again\nYou can create a Pod with the correct labels to see that the request is allowed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl run busybox -n test --rm -ti --labels="access=enabled" --image=k8s.gcr.io/busybox -- /bin/sh\n')),(0,a.kt)("p",null,"In your shell, run the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget --spider --timeout=1 http://nginx:8080\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Connecting to nginx (10.100.0.16:8080)\nremote file exists\n")),(0,a.kt)("h2",{id:"advanced-network-policy-for-guestbook-with-redis-and-php"},"Advanced Network Policy for guestbook with Redis and PHP"),(0,a.kt)("p",null,"This task is based on documentation ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tutorials/stateless-application/guestbook/"},"example")),(0,a.kt)("p",null,"Create guestbook namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace guestbook\n")),(0,a.kt)("p",null,"Deny all ingress and egress traffic for namespace ",(0,a.kt)("inlineCode",{parentName:"p"},"guestbook"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="guestbook-deny-all.yaml"',title:'"guestbook-deny-all.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: guestbook-deny-all\n  namespace: guestbook\nspec:\n  podSelector: {}\n  policyTypes:\n  - Ingress\n  - Egress\n")),(0,a.kt)("p",null,"Apply deny all NetworkPolicy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f guestbook-deny-all.yaml\n")),(0,a.kt)("p",null,"Allow DNS traffic for all pods in ",(0,a.kt)("inlineCode",{parentName:"p"},"guestbook")," namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="guestbook-allow-dns.yaml"',title:'"guestbook-allow-dns.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: guestbook-allow-dns\n  namespace: guestbook\nspec:\n  podSelector: {}\n  policyTypes:\n  - Egress\n  egress:\n  # allow DNS resolution\n  - ports:\n    - port: 53\n      protocol: UDP\n    - port: 53\n      protocol: TCP\n")),(0,a.kt)("p",null,"Apply DNS Network Policy rules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f guestbook-allow-dns.yaml\n")),(0,a.kt)("p",null,"Create Redis leader service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-redis-leader.yaml"',title:'"deploy-redis-leader.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis-leader\n  namespace: guestbook\n  labels:\n    app: redis\n    role: leader\n    tier: backend\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: redis\n  template:\n    metadata:\n      labels:\n        app: redis\n        role: leader\n        tier: backend\n    spec:\n      containers:\n      - name: leader\n        image: "redis:6.0.5"\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 6379\n')),(0,a.kt)("p",null,"Apply readis-leader manifest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-redis-leader.yaml\n")),(0,a.kt)("p",null,"Verify that Redis leader pod is running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n guestbook\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                           READY     STATUS    RESTARTS   AGE\nredis-leader-343230949-qfvrq   1/1       Running   0          43s\n")),(0,a.kt)("p",null,"Check logs from Redis leader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n guestbook deployment/redis-leader\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1:C 15 Jul 2021 14:23:25.535 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo\n1:C 15 Jul 2021 14:23:25.535 # Redis version=6.0.5, bits=64, commit=00000000, modified=0, pid=1, just started\n1:C 15 Jul 2021 14:23:25.535 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf\n1:M 15 Jul 2021 14:23:25.536 * Running mode=standalone, port=6379.\n1:M 15 Jul 2021 14:23:25.537 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.\n1:M 15 Jul 2021 14:23:25.537 # Server initialized\n1:M 15 Jul 2021 14:23:25.537 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.\n1:M 15 Jul 2021 14:23:25.537 * Ready to accept connections\n")),(0,a.kt)("p",null,"Expose Redis leader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n guestbook redis-leader --port=6379\n")),(0,a.kt)("p",null,"Verify service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n guestbook redis-leader\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nredis-leader   ClusterIP   10.110.99.222   <none>        6379/TCP   20s\n")),(0,a.kt)("p",null,"Define Redis followers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-redis-follower.yaml"',title:'"deploy-redis-follower.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: redis-follower\n  namespace: guestbook\n  labels:\n    app: redis\n    role: follower\n    tier: backend\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: redis\n  template:\n    metadata:\n      labels:\n        app: redis\n        role: follower\n        tier: backend\n    spec:\n      containers:\n      - name: follower\n        image: gcr.io/google_samples/gb-redis-follower:v2\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 6379\n")),(0,a.kt)("p",null,"Create Redis follower deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-redis-follower.yaml\n")),(0,a.kt)("p",null,"Check logs for Redis follower pods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n guestbook redis-follower-<Tab>\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10:S 27 Jul 2021 10:15:23.836 * Ready to accept connections\n10:S 27 Jul 2021 10:15:23.836 * Connecting to MASTER redis-leader:6379\n10:S 27 Jul 2021 10:15:23.843 * MASTER <-> REPLICA sync started\n10:S 27 Jul 2021 10:16:24.068 # Timeout connecting to the MASTER...\n10:S 27 Jul 2021 10:16:24.068 * Connecting to MASTER redis-leader:6379\n10:S 27 Jul 2021 10:16:24.069 * MASTER <-> REPLICA sync started\n10:S 27 Jul 2021 10:17:25.313 # Timeout connecting to the MASTER...\n")),(0,a.kt)("p",null,"Wait and look for:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Timeout connecting to the MASTER...\n")),(0,a.kt)("p",null,"Allow traffic from Redis follower to Redis leader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="guestbook-allow-redis-sync.yaml"',title:'"guestbook-allow-redis-sync.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: guestobook-allow-redis-sync\n  namespace: guestbook\nspec:\n  podSelector:\n    matchLabels:\n      app: redis\n      role: leader\n  ingress:\n  - from:\n    - namespaceSelector:\n        matchLabels:\n          name: guestbook\n    - podSelector:\n        matchLabels:\n          app: redis\n          role: follower\n    ports:\n    - protocol: TCP\n      port: 6379\n")),(0,a.kt)("p",null,"Check once again logs from Redis followers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n guestbook redis-follower-<Tab>\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10:S 15 Jul 2021 14:53:07.966 * Connecting to MASTER redis-leader:6379\n10:S 15 Jul 2021 14:53:07.970 * MASTER <-> REPLICA sync started\n")),(0,a.kt)("p",null,"Expose Redis follower service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n guestbook redis-follower --port=6379\n")),(0,a.kt)("p",null,"Check list of services:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n guestbook\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME             TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\nredis-follower   ClusterIP   10.98.8.13      <none>        6379/TCP   53s\nredis-leader     ClusterIP   10.110.99.222   <none>        6379/TCP   49m\n")),(0,a.kt)("p",null,"Define frontend YAML manifest application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-frontend.yaml"',title:'"deploy-frontend.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: frontend\n  namespace: guestbook\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n        app: guestbook\n        tier: frontend\n  template:\n    metadata:\n      labels:\n        app: guestbook\n        tier: frontend\n    spec:\n      containers:\n      - name: php-redis\n        image: gcr.io/google_samples/gb-frontend:v5\n        env:\n        - name: GET_HOSTS_FROM\n          value: "dns"\n        resources:\n          requests:\n            cpu: 100m\n            memory: 100Mi\n        ports:\n        - containerPort: 80\n')),(0,a.kt)("p",null,"Apply YAML deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-frontend.yaml\n")),(0,a.kt)("p",null,"Check pods status for frontend deployment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -l app=guestbook -l tier=frontend -n guestbook\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME                        READY   STATUS    RESTARTS   AGE\nfrontend-85595f5bf9-2lmnb   1/1     Running   0          7m20s\nfrontend-85595f5bf9-bv9sx   1/1     Running   0          7m19s\nfrontend-85595f5bf9-p974r   1/1     Running   0          7m19s\n")),(0,a.kt)("p",null,"Expose frontend application with LoadBalancer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n guestbook frontend --port=80 --type=LoadBalancer\n")),(0,a.kt)("p",null,"Check service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n guestbook\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME             TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE\nfrontend         LoadBalancer   10.106.92.142   10.168.0.50   80:30547/TCP   7m22s\nredis-follower   ClusterIP      10.98.8.13      <none>        6379/TCP       15h\nredis-leader     ClusterIP      10.110.99.222   <none>        6379/TCP       16h\n")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNALIP")," and try to connect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'EXTERNALIP=`kubectl get svc -n guestbook frontend -o jsonpath="{.status.loadBalancer.ingress[0].ip}"`\ncurl --connect-timeout 5 http://$EXTERNALIP\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl: (28) Connection timed out after 5001 milliseconds\n")),(0,a.kt)("p",null,"Prepare Network Policy to allow connection to frontend:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="allow-frontend.yaml"',title:'"allow-frontend.yaml"'},"kind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: allow-frontend\n  namespace: guestbook\nspec:\n  podSelector:\n    matchLabels:\n      app: guestbook\n      tier: frontend\n  ingress:\n  - ports:\n    - port: 80\n")),(0,a.kt)("p",null,"Apply frontend NetworkPolicy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f allow-frontend.yaml\n")),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNALIP")," and try to connect once again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'EXTERNALIP=`kubectl get svc -n guestbook frontend -o jsonpath="{.status.loadBalancer.ingress[0].ip}"`\ncurl --connect-timeout 5 http://$EXTERNALIP\n')),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<html ng-app="redis">\n  <head>\n    <title>Guestbook</title>\n    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">\n    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.12/angular.min.js"><\/script>\n    <script src="controllers.js"><\/script>\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.13.0/ui-bootstrap-tpls.js"><\/script>\n  </head>\n  <body ng-controller="RedisCtrl">\n    <div style="width: 50%; margin-left: 20px">\n      <h2>Guestbook</h2>\n    <form>\n    <fieldset>\n    <input ng-model="msg" placeholder="Messages" class="form-control" type="text" name="input"><br>\n    <button type="button" class="btn btn-primary" ng-click="controller.onRedis()">Submit</button>\n    </fieldset>\n    </form>\n    <div>\n      <div ng-repeat="msg in messages track by $index">\n        {{msg}}\n      </div>\n    </div>\n    </div>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Last step is to allow connection from frontend application to redis instances:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="allow-fronted-redis.yaml"',title:'"allow-fronted-redis.yaml"'},"apiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-frontend-redis\n  namespace: guestbook\nspec:\n  ingress:\n  - from:\n    - podSelector:\n        matchLabels:\n          app: guestbook\n    ports:\n    - port: 6380\n      protocol: TCP\n    - port: 6379\n      protocol: TCP\n  podSelector:\n    matchLabels:\n      app: redis\n  policyTypes:\n  - Ingress\n---\napiVersion: networking.k8s.io/v1\nkind: NetworkPolicy\nmetadata:\n  name: allow-redis-frontend\n  namespace: guestbook\nspec:\n  egress:\n  - to:\n    - podSelector:\n        matchLabels:\n          app: redis\n  - ports:\n    - port: 6380\n      protocol: TCP\n    - port: 6379\n      protocol: TCP\n  podSelector:\n    matchLabels:\n      app: guestbook\n  policyTypes:\n  - Egress\n")),(0,a.kt)("p",null,"Apply Network Policy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f allow-fronted-redis.yaml\n")),(0,a.kt)("p",null,"Check connection using Webrowser:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://<EXTERNALIP>\n")))}u.isMDXComponent=!0}}]);