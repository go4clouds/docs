"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[2168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>m});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,l=e.originalType,s=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=p,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,r(r({ref:t},i),{},{components:n})):a.createElement(m,r({ref:t},i))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var l=n.length,r=new Array(l);r[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:p,r[1]=o;for(var c=2;c<l;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),p=(n(7294),n(3905));const l={sidebar_position:5},r="Basic pod operations",o={unversionedId:"kubernetes/basic-pod-operations",id:"kubernetes/basic-pod-operations",title:"Basic pod operations",description:"Basic operations with pods",source:"@site/docs/kubernetes/basic-pod-operations.md",sourceDirName:"kubernetes",slug:"/kubernetes/basic-pod-operations",permalink:"/docs/kubernetes/basic-pod-operations",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Install cluster extension",permalink:"/docs/kubernetes/install-plugins"},next:{title:"Advanced pod operations",permalink:"/docs/kubernetes/advanced-pods"}},s={},c=[{value:"Check pod status",id:"check-pod-status",level:2},{value:"Create basic pod application",id:"create-basic-pod-application",level:2},{value:"Generate pod template",id:"generate-pod-template",level:2}],i={toc:c};function u(e){let{components:t,...n}=e;return(0,p.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"basic-pod-operations"},"Basic pod operations"),(0,p.kt)("p",null,"Basic operations with pods"),(0,p.kt)("h2",{id:"check-pod-status"},"Check pod status"),(0,p.kt)("p",null,"Check list of namespaces:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get namespaces\nkubectl get ns\n")),(0,p.kt)("p",null,"List pods in ",(0,p.kt)("inlineCode",{parentName:"p"},"default")," namespace:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods\n")),(0,p.kt)("p",null,"List pods in ",(0,p.kt)("inlineCode",{parentName:"p"},"kube-system")," namespace:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n kube-system\nkubectl get pods -n kube-system -o wide\n")),(0,p.kt)("p",null,"List pods in all namespaces:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -A\nkubectl get pods -A -o wide\n")),(0,p.kt)("p",null,"Check pod details:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe pod -n kube-system kube-apiserver-cp1\n")),(0,p.kt)("h2",{id:"create-basic-pod-application"},"Create basic pod application"),(0,p.kt)("p",null,"Create ",(0,p.kt)("inlineCode",{parentName:"p"},"app")," namespace:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns app\n")),(0,p.kt)("p",null,"Create basic pod in ",(0,p.kt)("inlineCode",{parentName:"p"},"app")," namespace:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run -n app app --image=nginx:1.23.3\n")),(0,p.kt)("p",null,"Check pod status and wait until it will have ",(0,p.kt)("inlineCode",{parentName:"p"},"Running")," status:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n app app -o wide -w\n")),(0,p.kt)("p",null,"Check logs of ",(0,p.kt)("inlineCode",{parentName:"p"},"app")," pod container;"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n app app\n")),(0,p.kt)("p",null,"Open terminal  to ",(0,p.kt)("inlineCode",{parentName:"p"},"app")," pod container:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n app -ti app -- sh\n# ls\n# exit\n")),(0,p.kt)("p",null,"Cleanup ",(0,p.kt)("inlineCode",{parentName:"p"},"app")," pod:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pod -n app app\nkubectl delete ns app\n")),(0,p.kt)("h2",{id:"generate-pod-template"},"Generate pod template"),(0,p.kt)("p",null,"Create new namespace:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns frontend\nkubectl get ns\n")),(0,p.kt)("p",null,"Generate ",(0,p.kt)("inlineCode",{parentName:"p"},"webapp")," pod template:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run webapp -n frontend --image=nginx:1.22 --dry-run=client -o yaml\n")),(0,p.kt)("p",null,"Save pod template as a ",(0,p.kt)("inlineCode",{parentName:"p"},"yaml")," manifest:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl run webapp -n frontend --image=nginx:1.22 --dry-run=client -o yaml > pod-webapp.yaml\n")),(0,p.kt)("p",null,"Apply pod manifest to cluster:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pod-webapp.yaml\n")),(0,p.kt)("p",null,'Verify operation on cluster"'),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n frontend -o wide\n")),(0,p.kt)("p",null,"Cleanup environment "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace frontend\n")))}u.isMDXComponent=!0}}]);