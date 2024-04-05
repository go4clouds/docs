"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[7262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,d=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(d,o(o({ref:t},i),{},{components:n})):a.createElement(d,o({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:15},o="Troubleshooting",s={unversionedId:"kubernetes/troubleshooting",id:"kubernetes/troubleshooting",title:"Troubleshooting",description:"Debug any application",source:"@site/docs/kubernetes/troubleshooting.md",sourceDirName:"kubernetes",slug:"/kubernetes/troubleshooting",permalink:"/docs/kubernetes/troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"Using Network Policy",permalink:"/docs/kubernetes/network-policy"},next:{title:"Learn Helm",permalink:"/docs/kubernetes/learn-helm"}},p={},c=[{value:"Debug any application",id:"debug-any-application",level:2}],i={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h2",{id:"debug-any-application"},"Debug any application"),(0,r.kt)("p",null,"Create test Namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns test\n")),(0,r.kt)("p",null,"Deploy the backend application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create deployment -n test backend --image=k8s.gcr.io/pause:3.1 --replicas=3\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See created Deployment "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: backend\n  name: backend\n  namespace: test\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: backend\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: backend\n    spec:\n      containers:\n      - image: k8s.gcr.io/pause:3.1\n        name: pause\n        resources: {}\nstatus: {}\n"))),(0,r.kt)("p",null,"Check the application status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n test -o wide\n")),(0,r.kt)("p",null,"Check the Events in the test Namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get events --sort-by=.metadata.creationTimestamp -n test\n")),(0,r.kt)("p",null,"Expose test application with Service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n test backend --port=80 --target-port=8080\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"See created Service "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: backend\n  name: backend\n  namespace: test\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 8080\n  selector:\n    app: backend\nstatus:\n  loadBalancer: {}\n\n"))),(0,r.kt)("p",null,"Now we can start verifying if the test application works properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n test -l app=backend\n")),(0,r.kt)("p",null,"Try open the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n test -ti POD_NAME -- bash\nkubectl exec -n test -ti POD_NAME -- sh\nkubectl exec -n test -ti POD_NAME -- zsh\n")),(0,r.kt)("p",null,"Try to open the port and make a test connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n test pod/POD_NAME 8080:80 &\n")),(0,r.kt)("p",null,"Test with curl:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080\n")),(0,r.kt)("p",null,"Since we've observed that the application isn't working, and we can't connect to it, we need to attach our own debug container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl debug -n test -ti --image=debian POD_NAME --target=pause -- bash\n# apt update\n# apt install procps iproute2 dnsutils\n# ps faxuw\n# ip a\n# ip r\n# cat /etc/resolv.conf\n# nslookup backend 10.96.0.10\n# cd /proc/1/root\n# ls\n")),(0,r.kt)("p",null,"Clean up"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns test\n")))}u.isMDXComponent=!0}}]);