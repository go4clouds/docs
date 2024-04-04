"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[7968],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=d(t),u=l,k=i["".concat(o,".").concat(u)]||i[u]||m[u]||r;return t?a.createElement(k,p(p({ref:n},c),{},{components:t})):a.createElement(k,p({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,p=new Array(r);p[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[i]="string"==typeof e?e:l,p[1]=s;for(var d=2;d<r;d++)p[d]=t[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9649:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>i,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:6},p="Advanced Pod operations",s={unversionedId:"kubernetes/advanced-pods",id:"kubernetes/advanced-pods",title:"Advanced Pod operations",description:"Advanced operations with pods",source:"@site/docs/kubernetes/advanced-pods.md",sourceDirName:"kubernetes",slug:"/kubernetes/advanced-pods",permalink:"/docs/kubernetes/advanced-pods",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Basic Pods operations",permalink:"/docs/kubernetes/basic-pod-operations"},next:{title:"Use ReplicaSet and Deployment",permalink:"/docs/kubernetes/replicaset-and-deployment"}},o={},d=[{value:"Adding resource requests and limits",id:"adding-resource-requests-and-limits",level:2},{value:"Add a named port to Pod",id:"add-a-named-port-to-pod",level:2},{value:"Add liveness and readiness probes",id:"add-liveness-and-readiness-probes",level:2}],c={toc:d};function i(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"advanced-pod-operations"},"Advanced Pod operations"),(0,l.kt)("p",null,"Advanced operations with pods"),(0,l.kt)("h2",{id:"adding-resource-requests-and-limits"},"Adding resource requests and limits"),(0,l.kt)("p",null,"Check the list of namespaces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get ns\n")),(0,l.kt)("p",null,"Create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"benchmark")," Namespace for the Pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns benchmark\n")),(0,l.kt)("p",null,"Create a Pod template manifest with a stress tool included: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run -n benchmark stress --image=vish/stress --dry-run=client -o yaml \\\n                                -- -cpus 1 -mem-total 350Mi -mem-alloc-size 100Mi -mem-alloc-sleep 5s > pod-stress.yaml\n")),(0,l.kt)("p",null,"Edit the ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-stress.yaml")," manifest to get:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: stress\n  namespace: benchmark\nspec:\n  containers:\n  - name: stress\n    args: \n    - -cpus\n    - "1"\n    - -mem-total\n    - "350Mi"\n    - -mem-alloc-size\n    - "100Mi" \n    - -mem-alloc-sleep\n    - "5s"\n    image: vish/stress\n    resources:\n      requests:\n        cpu: "500m"\n        memory: "100Mi"\n      limits:\n        cpu: "1"\n        memory: "300Mi"\n')),(0,l.kt)("p",null,"Apply the Pod manifest and create it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pod-stress.yaml\n")),(0,l.kt)("p",null,"View detailed information about the Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n benchmark stress -o wide\n")),(0,l.kt)("p",null,"Check resource usage after a few seconds:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl top pods -n benchmark\n")),(0,l.kt)("p",null,"Check the Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n benchmark\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"NAME     READY   STATUS    RESTARTS      AGE\nstress   1/1     Running   1 (25s ago)   95s\n")),(0,l.kt)("p",null,"Now, check the Pod details and try to find out why it was restarted:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe pod -n benchmark stress\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"Name:         stress\nNamespace:    benchmark\n\n...\n\n    State:          Running\n      Started:      Wed, 28 Dec 2022 12:12:52 +0000\n    Last State:     Terminated\n      Reason:       OOMKilled\n      Exit Code:    1\n      Started:      Wed, 28 Dec 2022 12:11:42 +0000\n      Finished:     Wed, 28 Dec 2022 12:12:50 +0000\n\n...\n\n")),(0,l.kt)("p",null,"Clean up the environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns benchmark\n")),(0,l.kt)("h2",{id:"add-a-named-port-to-pod"},"Add a named port to Pod"),(0,l.kt)("p",null,"Add a named port for the container in Pod manifests:"),(0,l.kt)("p",null,"Create the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns myapp\n")),(0,l.kt)("p",null,"Create the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Pod manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pod-myapp.yaml"',title:'"pod-myapp.yaml"'},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp\n  namespace: myapp\nspec:\n  containers:\n  - name: myapp\n    image: ghcr.io/go4clouds/myapp:v1.0\n    resources:\n      limits:\n        cpu: "500m"\n        memory: "200Mi"\n      requests:\n        cpu: "150m"\n        memory: "100Mi"\n    ports:\n    - name: http\n      containerPort: 8081\n      protocol: TCP\n')),(0,l.kt)("p",null,"Apply the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Pod manifest to the cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pod-myapp.yaml\n")),(0,l.kt)("p",null,"Check the Pod status and wait until the status changes to ",(0,l.kt)("inlineCode",{parentName:"p"},"Running"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n myapp myapp -o wide\n")),(0,l.kt)("p",null,"Check the logs of the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Pod container:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n myapp myapp\n")),(0,l.kt)("p",null,"Open a tunnel connection to the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," pod container:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n myapp pod/myapp 8081:8081\n")),(0,l.kt)("p",null,"Test the connection in another terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8081\n")),(0,l.kt)("h2",{id:"add-liveness-and-readiness-probes"},"Add liveness and readiness probes"),(0,l.kt)("p",null,"We would like to extend the previous example and add liveness and readiness probes to it."),(0,l.kt)("p",null,"Update the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Pod manifest example with a liveness probe:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pod-myapp.yaml"',title:'"pod-myapp.yaml"'},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp\n  namespace: myapp\nspec:\n  containers:\n  - name: myapp\n    image: ghcr.io/go4clouds/myapp:v1.0\n    resources:\n      limits:\n        cpu: "500m"\n        memory: "200Mi"\n      requests:\n        cpu: "150m"\n        memory: "100Mi"\n    ports:\n    - name: http\n      containerPort: 8081\n      protocol: TCP\n    livenessProbe:\n      httpGet:\n          path: /\n          port: 8080\n      failureThreshold: 1\n      initialDelaySeconds: 3\n      periodSeconds: 5\n')),(0,l.kt)("p",null,"Save the changes and clean up the already running Pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete -f pod-myapp.yaml\n")),(0,l.kt)("p",null,"Apply the changes and start a new Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pod-myapp.yaml\n")),(0,l.kt)("p",null,"Wait a few seconds and check the Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe pod -n myapp myapp\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'\n...\n\nEvents:\n  Type     Reason     Age                From               Message\n  ----     ------     ----               ----               -------\n  Normal   Scheduled  52s                default-scheduler  Successfully assigned myapp/myapp to worker1\n  Normal   Pulled     17s (x2 over 51s)  kubelet            Container image "ghcr.io/go4clouds/myapp:v1.0" already present on machine\n  Normal   Created    17s (x2 over 51s)  kubelet            Created container myapp\n  Normal   Started    17s (x2 over 51s)  kubelet            Started container myapp\n  Warning  Unhealthy  12s (x2 over 47s)  kubelet            Liveness probe failed: Get "http://192.168.235.155:8080/": dial tcp 192.168.235.155:8080: connect: connection refused\n  Normal   Killing    12s (x2 over 47s)  kubelet            Container myapp failed liveness probe, will be restarted\n')),(0,l.kt)("p",null,"The pod was restarted because the check couldn't succeed since the application is listening on port ",(0,l.kt)("inlineCode",{parentName:"p"},"8081"),"."),(0,l.kt)("p",null,"Let's fix the configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pod-myapp.yaml"',title:'"pod-myapp.yaml"'},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: myapp\n  namespace: myapp\nspec:\n  containers:\n  - name: myapp\n    image: ghcr.io/go4clouds/myapp:v1.0\n    resources:\n      limits:\n        cpu: "500m"\n        memory: "200Mi"\n      requests:\n        cpu: "150m"\n        memory: "100Mi"\n    ports:\n    - name: http\n      containerPort: 8081\n      protocol: TCP\n    livenessProbe:\n      httpGet:\n          path: /\n          port: http\n      failureThreshold: 1\n      initialDelaySeconds: 3\n      periodSeconds: 5\n')),(0,l.kt)("p",null,"Save the changes and clean up the already running Pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete -f pod-myapp.yaml\n")),(0,l.kt)("p",null,"Apply the changes and start a new Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pod-myapp.yaml\n")),(0,l.kt)("p",null,"Now check the Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n myapp\nkubectl describe pod -n myapp myapp\n")),(0,l.kt)("p",null,"Clean up the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Pod:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns myapp\n")))}i.isMDXComponent=!0}}]);