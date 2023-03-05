"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[7262],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(s,".").concat(d)]||u[d]||b[d]||o;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:14},l="Troubleshooting",p={unversionedId:"kubernetes/troubleshooting",id:"kubernetes/troubleshooting",title:"Troubleshooting",description:"Debug any application",source:"@site/docs/kubernetes/troubleshooting.md",sourceDirName:"kubernetes",slug:"/kubernetes/troubleshooting",permalink:"/docs/kubernetes/troubleshooting",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Using Network Policy",permalink:"/docs/kubernetes/network-policy"},next:{title:"Helm",permalink:"/docs/kubernetes/helm"}},s={},c=[{value:"Debug any application",id:"debug-any-application",level:2}],i={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h2",{id:"debug-any-application"},"Debug any application"),(0,a.kt)("p",null,"Create test Namespace:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns test\n")),(0,a.kt)("p",null,"Deploy backend application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create deployment -n test backend --image=k8s.gcr.io/pause:3.1 --replicas=3\n")),(0,a.kt)("p",null,"Check application status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n test -o wide\n")),(0,a.kt)("p",null,"Check Events in the Namespace test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get events --sort-by=.metadata.creationTimestamp -n test\n")),(0,a.kt)("p",null,"Expose test application with Service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n test backend --port=80 --target-port=8080\n")),(0,a.kt)("p",null,"Now we can start verify if test application works properly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl logs -n test -l app=backend\n")),(0,a.kt)("p",null,"Try open terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -n test -ti POD_NAME -- bash\nkubectl exec -n test -ti POD_NAME -- sh\nkubectl exec -n test -ti POD_NAME -- zsh\n")),(0,a.kt)("p",null,"Try to open port and make test connection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n test pod/POD_NAME 8080:80 &\n")),(0,a.kt)("p",null,"Test with curl:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080\n")),(0,a.kt)("p",null,"Because we have noticed that application doesn't work and we can't connect to it. We have to attach with our own debug container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl debug -n test -ti --image=debian POD_NAME --target=pause -- bash\n# apt update\n# apt install procps iproute2 dnsutils\n# ps faxuw\n# ip a\n# ip r\n# cat /etc/resolv.conf\n# nslookup backend 10.96.0.10\n# cd /proc/1/root\n# ls\n")))}u.isMDXComponent=!0}}]);