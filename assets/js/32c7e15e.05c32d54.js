"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[6838],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=c(t),m=l,k=i["".concat(s,".").concat(m)]||i[m]||d[m]||r;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=m;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[i]="string"==typeof e?e:l,o[1]=p;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>i,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:10},o="Using Service concept",p={unversionedId:"kubernetes/service-concept",id:"kubernetes/service-concept",title:"Using Service concept",description:"Exposing Kubernetes application",source:"@site/docs/kubernetes/service-concept.md",sourceDirName:"kubernetes",slug:"/kubernetes/service-concept",permalink:"/docs/kubernetes/service-concept",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Create Persistent Volume",permalink:"/docs/kubernetes/persistent-volume"},next:{title:"Security concept",permalink:"/docs/kubernetes/security-rbac"}},s={},c=[{value:"Expose application Deployment",id:"expose-application-deployment",level:2},{value:"Use Port Forward to access Service applications",id:"use-port-forward-to-access-service-applications",level:2},{value:"Using kubectl proxy",id:"using-kubectl-proxy",level:2}],u={toc:c};function i(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"using-service-concept"},"Using Service concept"),(0,l.kt)("p",null,"Exposing Kubernetes application"),(0,l.kt)("h2",{id:"expose-application-deployment"},"Expose application Deployment"),(0,l.kt)("p",null,"Create new namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace frontend\n")),(0,l.kt)("p",null,"Deploy example frontend application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create deployment web --image=nginx:1.23 -n frontend\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See Deployment YAML "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: web\n  name: web\n  namespace: frontend\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: web\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: web\n    spec:\n      containers:\n      - image: nginx:1.23\n        name: nginx\n        resources: {}\nstatus: {}\n\n"))),(0,l.kt)("p",null,"Check deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n frontend -o wide\n")),(0,l.kt)("p",null,"Scale up application to 3 replicas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale deployment -n frontend web --replicas=3\n")),(0,l.kt)("p",null,"Expose application Deployment with Service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n frontend web --type=ClusterIP --port=8080 --target-port=80\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See Service YAML "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: web\n  name: web\n  namespace: frontend\nspec:\n  ports:\n  - port: 8080\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: web\n  type: ClusterIP\nstatus:\n  loadBalancer: {}\n\n"))),(0,l.kt)("p",null,"Check Service status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n frontend web\n")),(0,l.kt)("p",null,"Open a tunnel connection to the application Service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n frontend svc/web 8080:8080 &\n")),(0,l.kt)("p",null,"Try to connect application on localhost:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080\n")),(0,l.kt)("p",null,"Try to connect application from cluster nodes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"for SRV in cp1 worker{1,2,3}; do\nsudo ssh $SRV curl http://<ClusterIP>:8080;\ndone\n")),(0,l.kt)("p",null,"Display Service Endpoints:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get endpoints -n frontend web\n")),(0,l.kt)("p",null,"Scale up the application once again to 5 replicas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale deployment -n frontend web --replicas=5\n")),(0,l.kt)("p",null,"Check list of Endpoints: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get endpoints -n frontend web\n")),(0,l.kt)("p",null,"Show the properties of Deployment for the web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n frontend -o wide\n")),(0,l.kt)("p",null,"Show labels of Deployment Pods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n frontend --show-labels\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME                  READY   STATUS    RESTARTS   AGE     LABELS\nweb-96d5df5c8-7qqlb   1/1     Running   0          17s     app=web,pod-template-hash=96d5df5c8\nweb-96d5df5c8-b9kng   1/1     Running   0          6m42s   app=web,pod-template-hash=96d5df5c8\nweb-96d5df5c8-hwk9z   1/1     Running   0          17s     app=web,pod-template-hash=96d5df5c8\nweb-96d5df5c8-pzclb   1/1     Running   0          11m     app=web,pod-template-hash=96d5df5c8\nweb-96d5df5c8-qr26w   1/1     Running   0          6m42s   app=web,pod-template-hash=96d5df5c8\n")),(0,l.kt)("p",null,"Remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"app=web")," Label from any Pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label pod -n frontend web-<Tab>-<Tab> app-\n")),(0,l.kt)("p",null,"Check once again list of Pods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n frontend --show-labels\n")),(0,l.kt)("p",null,"List only pods with the Label ",(0,l.kt)("inlineCode",{parentName:"p"},"app=web"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl get pods -n frontend --selector="app=web" -o wide\n')),(0,l.kt)("p",null,"Remove Service object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete service -n frontend web\n")),(0,l.kt)("p",null,"Create the deployment Service once again, but with NodePort:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n frontend web --type=NodePort --port=80\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See Deployment YAML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: web\n  name: web\n  namespace: frontend\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: web\n  type: NodePort\nstatus:\n  loadBalancer: {}\n\n"))),(0,l.kt)("p",null,"Check Service status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n frontend web\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME   TYPE       CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nweb    NodePort   10.96.208.39   <none>        80:30237/TCP   10s\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterIP")," to connect to the Service from outside cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'NODEPORT=`kubectl get svc -n frontend web -o jsonpath="{.spec.ports[0].nodePort}"`\necho "NodePort for web service is $NODEPORT"\ncurl http://cp1:$NODEPORT\n')),(0,l.kt)("p",null,"or on all nodes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'NODEPORT=`kubectl get svc -n frontend web -o jsonpath="{.spec.ports[0].nodePort}"`\nfor SRV in cp1 worker{1,2,3}; do\nsudo curl http://$SRV:$NODEPORT;\ndone\n')),(0,l.kt)("p",null,"Let's clean up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace frontend\n")),(0,l.kt)("h2",{id:"use-port-forward-to-access-service-applications"},"Use Port Forward to access Service applications"),(0,l.kt)("p",null,"This task is based on documentation ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/#creating-mongodb-deployment-and-service"},"example")),(0,l.kt)("p",null,"Create Namespace for database:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace database\n")),(0,l.kt)("p",null,"Create a Deployment that runs MongoDB:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mongo-deployment.yaml"',title:'"mongo-deployment.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: mongo\n  name: mongo\n  namespace: database\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: mongo\n  template:\n    metadata:\n      labels:\n        app: mongo\n    spec:\n      containers:\n      - image: mongo\n        name: mongo\n        ports:\n        - name: mongodbport\n          containerPort: 27017\n          protocol: TCP\n")),(0,l.kt)("p",null,"Apply Kubernetes YAML manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f mongo-deployment.yaml\n")),(0,l.kt)("p",null,"View the Pod status to check that it is ready:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n database\n")),(0,l.kt)("p",null,"View the status of the Deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n database -o wide\n")),(0,l.kt)("p",null,"Create a Service to expose MongoDB:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose -n database deployment mongo --type=ClusterIP --port=27017\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See created Service "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: mongo\n  name: mongo\n  namespace: database\nspec:\n  ports:\n  - port: 27017\n    protocol: TCP\n    targetPort: 27017\n  selector:\n    app: mongo\n  type: ClusterIP\nstatus:\n  loadBalancer: {}\n\n"))),(0,l.kt)("p",null,"Check the Service created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service mongo -n database\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)     AGE\nmongo   ClusterIP   10.96.41.183   <none>        27017/TCP   11s\n")),(0,l.kt)("p",null,"Verify that the MongoDB server is running in the Pod, and listening on port 27017:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get -n database pod mongo-<Tab> --template='{{(index (index .spec.containers 0).ports 0).containerPort}}{{\"\\n\"}}'\n")),(0,l.kt)("p",null,"The output displays the MongoDB port in that Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"27017\n")),(0,l.kt)("p",null,"Forward a local port to a port on the Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n database pod/mongo-<Tab> 28015:27017 &\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n database deployment/mongo 28015:27017 &\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n database replicaset/mongo-<Tab> 28015:27017 &\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n database service/mongo 28015:27017 &\n")),(0,l.kt)("p",null,"Any of the above commands works. The output is similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Forwarding from 127.0.0.1:28015 -> 27017\nForwarding from [::1]:28015 -> 27017\n")),(0,l.kt)("admonition",{title:"Change terminal",type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," does not return. To continue with the exercises, you will need to open another terminal.")),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"mongodb")," client package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install mongodb-clients -y\n")),(0,l.kt)("p",null,"Start the MongoDB command line interface:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mongo --port 28015\n")),(0,l.kt)("p",null,"At the MongoDB command line prompt, enter the ping command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"db.runCommand( { ping: 1 } )\n")),(0,l.kt)("p",null,"A successful ping request returns:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"{ ok: 1 }\n")),(0,l.kt)("p",null,"Optionally let kubectl choose the local port.\nIf you don't need a specific local port, you can let kubectl choose and allocate the local port and thus relieve you from having to manage local port conflicts, with the slightly simpler syntax:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n database deployment/mongo :27017 &\n")),(0,l.kt)("p",null,"The kubectl tool finds a local port number that is not in use (avoiding low ports numbers, because these might be used by other applications). The output is similar to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Forwarding from 127.0.0.1:63753 -> 27017\nForwarding from [::1]:63753 -> 27017\n")),(0,l.kt)("p",null,"Clean up the environment: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace database\n")),(0,l.kt)("h2",{id:"using-kubectl-proxy"},"Using kubectl proxy"),(0,l.kt)("p",null,"This task is based on documentation ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/access-cluster/#using-kubectl-proxy"},"example"),"."),(0,l.kt)("p",null,"The following command runs kubectl in a mode where it acts as a reverse proxy. It handles locating the apiserver and authenticating. Run it like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl proxy --port=8080\n")),(0,l.kt)("p",null,"See kubectl proxy for more details."),(0,l.kt)("p",null,"Then you can explore the API with curl, wget, or a browser, replacing localhost with ","[::1]"," for IPv6, like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://localhost:8080/api/\n")),(0,l.kt)("p",null,"The output is similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "kind": "APIVersions",\n  "versions": [\n    "v1"\n  ],\n  "serverAddressByClientCIDRs": [\n    {\n      "clientCIDR": "0.0.0.0/0",\n      "serverAddress": "10.0.1.149:443"\n    }\n  ]\n}\n')),(0,l.kt)("p",null,"Without kubectl proxy"),(0,l.kt)("p",null,"Use kubectl describe secret... to get the token for the default service account with grep/cut:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")\nSECRET_NAME=$(kubectl get secrets | grep ^default | cut -f1 -d \' \')\nTOKEN=$(kubectl describe secret $SECRET_NAME | grep -E \'^token\' | cut -f2 -d\':\' | tr -d " ")\n\ncurl $APISERVER/api --header "Authorization: Bearer $TOKEN" --insecure\n')),(0,l.kt)("p",null,"The output is similar to this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "kind": "APIVersions",\n  "versions": [\n    "v1"\n  ],\n  "serverAddressByClientCIDRs": [\n    {\n      "clientCIDR": "0.0.0.0/0",\n      "serverAddress": "10.0.1.149:443"\n    }\n  ]\n}\n')))}i.isMDXComponent=!0}}]);