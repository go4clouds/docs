"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[7842],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=l,k=u["".concat(s,".").concat(d)]||u[d]||i[d]||p;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var p=a.length,r=new Array(p);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:l,r[1]=o;for(var c=2;c<p;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2909:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>o,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const p={sidebar_position:7},r="Use ReplicaSet and Deployment",o={unversionedId:"kubernetes/replicaset-and-deployment",id:"kubernetes/replicaset-and-deployment",title:"Use ReplicaSet and Deployment",description:"Orchestrating application with ReplicaSet and Deployment mechanism",source:"@site/docs/kubernetes/replicaset-and-deployment.md",sourceDirName:"kubernetes",slug:"/kubernetes/replicaset-and-deployment",permalink:"/docs/kubernetes/replicaset-and-deployment",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Advanced Pod operations",permalink:"/docs/kubernetes/advanced-pods"},next:{title:"Create ConfigMap and Secret",permalink:"/docs/kubernetes/configmaps-and-secrets"}},s={},c=[{value:"Use ReplicaSet to start application",id:"use-replicaset-to-start-application",level:2},{value:"Use Deployment to start application",id:"use-deployment-to-start-application",level:2},{value:"Testing rolling update deployment",id:"testing-rolling-update-deployment",level:2},{value:"Enable autoscaling",id:"enable-autoscaling",level:2}],m={toc:c};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"use-replicaset-and-deployment"},"Use ReplicaSet and Deployment"),(0,l.kt)("p",null,"Orchestrating application with ReplicaSet and Deployment mechanism"),(0,l.kt)("h2",{id:"use-replicaset-to-start-application"},"Use ReplicaSet to start application"),(0,l.kt)("p",null,"Check list of namespaces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get ns\n")),(0,l.kt)("p",null,"Create new ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," namespace for pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns myapp\n")),(0,l.kt)("p",null,"Create ReplicaSet template manifest for ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),": "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="rs-myapp.yaml"',title:'"rs-myapp.yaml"'},"apiVersion: apps/v1\nkind: ReplicaSet\nmetadata:\n  name: myapp\n  namespace: myapp\nspec:\n  selector:\n    matchLabels:\n      app: myapp\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - name: myapp\n        image: ghcr.io/go4clouds/myapp:v1.0\n        ports:\n        - name: http\n          containerPort: 8081\n          protocol: TCP\n")),(0,l.kt)("p",null,"Apply ReplicaSet manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f rs-myapp.yaml\n")),(0,l.kt)("p",null,"Check ReplicaSet and Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get replicaset,pods -n myapp -o wide\n")),(0,l.kt)("p",null,"Scale up number of replicas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale -n myapp replicaset myapp --replicas=3\n")),(0,l.kt)("p",null,"Check ReplicaSet and Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get rs,pods -n myapp -o wide\n")),(0,l.kt)("p",null,"To cleanup remove whole namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns myapp\n")),(0,l.kt)("h2",{id:"use-deployment-to-start-application"},"Use Deployment to start application"),(0,l.kt)("p",null,"Check list of namespaces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get ns\n")),(0,l.kt)("p",null,"Create new ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," namespace for pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns myapp\n")),(0,l.kt)("p",null,"Create Deployment template manifest for ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),": "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-myapp.yaml"',title:'"deploy-myapp.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\n  namespace: myapp\nspec:\n  selector:\n    matchLabels:\n      app: myapp\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - name: myapp\n        image: ghcr.io/go4clouds/myapp:v1.0\n        ports:\n        - name: http\n          containerPort: 8081\n          protocol: TCP\n")),(0,l.kt)("p",null,"Apply Deployment manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-myapp.yaml\n")),(0,l.kt)("p",null,"Check Deployment, ReplicaSet and Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get events --sort-by='.lastTimestamp' -n myapp\nkubectl get deploy,rs,pods -n myapp -o wide\n")),(0,l.kt)("p",null,"Scale up number of replicas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale -n myapp deployment myapp --replicas=5\n")),(0,l.kt)("p",null,"Check Deployment, ReplicaSet and Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get events --sort-by='.lastTimestamp' -n myapp\nkubectl get deploy,rs,pods -n myapp -o wide\n")),(0,l.kt)("p",null,"To cleanup remove ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns myapp\n")),(0,l.kt)("h2",{id:"testing-rolling-update-deployment"},"Testing rolling update deployment"),(0,l.kt)("p",null,"Create ",(0,l.kt)("inlineCode",{parentName:"p"},"webapp")," Deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace webapp\nkubectl create deployment -n webapp webapp --image=docker.io/library/nginx:1.16.1\n")),(0,l.kt)("p",null,"Check Deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n webapp\nkubectl rollout history deployment -n webapp webapp\n")),(0,l.kt)("p",null,"Change number of replicas:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl scale deployment -n webapp webapp --replicas=3 --record\n")),(0,l.kt)("p",null,"Check Deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n webapp\n")),(0,l.kt)("p",null,"Update Deployment configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'export CONTAINER_NAME=$(kubectl get deployment -n webapp webapp -o jsonpath="{...name}" | cut -d " " -f2)\nkubectl set image deployment -n webapp webapp $CONTAINER_NAME=docker.io/library/nginx:1.20.2 --record\n')),(0,l.kt)("p",null,"Check Deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n webapp\n")),(0,l.kt)("p",null,"Check Deployment rollout history:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl rollout history --revision=2 -n webapp deployment webapp\n")),(0,l.kt)("p",null,"Change resource limits:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl set resources -n webapp deployment webapp --containers=$CONTAINER_NAME --limits=cpu=200m,memory=512Mi --record\n")),(0,l.kt)("p",null,"Try to break Deployment and use broken container image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl rollout history deployment -n webapp webapp\nkubectl set image deployment -n webapp webapp $CONTAINER_NAME=docker.io/library/nginx:1.24.3-NON-EXISTING --record \n")),(0,l.kt)("p",null,"Check Deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n webapp\nkubectl rollout status deployment -n webapp webapp\n")),(0,l.kt)("p",null,"Rollback changes for Deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl rollout undo deployment -n webapp webapp\n")),(0,l.kt)("h2",{id:"enable-autoscaling"},"Enable autoscaling"),(0,l.kt)("p",null,"As continuation to previous step we can enable HorizontalPodAutoscaler"),(0,l.kt)("p",null,"Enable Horizontal Pod Autoscaler for ",(0,l.kt)("inlineCode",{parentName:"p"},"webapp")," deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl autoscale deployment -n webapp webapp --min=1 --max=5 --cpu-percent=60\n")),(0,l.kt)("p",null," Check HPA status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get hpa webapp -n webapp\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE\nnginx   Deployment/nginx   0%/60%    1         5         1          36m\n")),(0,l.kt)("p",null,"Check HPA event logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe hpa -n webapp webapp\n")),(0,l.kt)("p",null,"To clean up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace webapp \n")))}u.isMDXComponent=!0}}]);