"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[8949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=u(n),k=o,b=i["".concat(c,".").concat(k)]||i[k]||d[k]||l;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[i]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={sidebar_position:3},a="Basic cluster operations",s={unversionedId:"kubernetes/cluster-operations",id:"kubernetes/cluster-operations",title:"Basic cluster operations",description:"Basic Kubernetes cluster operations",source:"@site/docs/kubernetes/cluster-operations.md",sourceDirName:"kubernetes",slug:"/kubernetes/cluster-operations",permalink:"/docs/docs/kubernetes/cluster-operations",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Introduction to Kubernetes",permalink:"/docs/docs/kubernetes/intro-to-kubernetes"},next:{title:"Install cluster extension",permalink:"/docs/docs/kubernetes/install-plugins"}},c={},u=[{value:"Check the <strong>Kubernets</strong> cluster status",id:"check-the-kubernets-cluster-status",level:2},{value:"Change a role description for nodes",id:"change-a-role-description-for-nodes",level:2},{value:"Configure node taints",id:"configure-node-taints",level:2},{value:"Annotate nodes",id:"annotate-nodes",level:2}],p={toc:u};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basic-cluster-operations"},"Basic cluster operations"),(0,o.kt)("p",null,"Basic ",(0,o.kt)("strong",{parentName:"p"},"Kubernetes")," cluster operations"),(0,o.kt)("h2",{id:"check-the-kubernets-cluster-status"},"Check the ",(0,o.kt)("strong",{parentName:"h2"},"Kubernets")," cluster status"),(0,o.kt)("p",null,"Get the Kubernetes cluster nodes list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,o.kt)("p",null,"Run again the previous command with a new option ",(0,o.kt)("inlineCode",{parentName:"p"},"-o wide")," and compare outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes -o wide\n")),(0,o.kt)("p",null,"Check the node description for the control plane node ",(0,o.kt)("inlineCode",{parentName:"p"},"cp1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe node cp1\n")),(0,o.kt)("p",null,"Check the node description for ",(0,o.kt)("inlineCode",{parentName:"p"},"worker1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe node worker1\n")),(0,o.kt)("h2",{id:"change-a-role-description-for-nodes"},"Change a role description for nodes"),(0,o.kt)("p",null,"Show labels for nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes --show-labels\n")),(0,o.kt)("p",null,"Change a role name for data plane nodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl label node worker1 node-role.kubernetes.io/worker=\nkubectl label node worker2 node-role.kubernetes.io/worker=\n")),(0,o.kt)("p",null,"or use a simple script to do this change for all workers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"for SRV in worker{1,2,3}; do\nkubectl label node $SRV node-role.kubernetes.io/worker=\ndone\n")),(0,o.kt)("p",null,"Check nodes labels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\nkubectl get nodes --show-labels\n")),(0,o.kt)("h2",{id:"configure-node-taints"},"Configure node taints"),(0,o.kt)("p",null,"Check node taints for a cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe nodes | grep Taints\n")),(0,o.kt)("p",null,"Disable worker1 from scheduling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl taint node worker1 node-role.kubernetes.io/worker=:NoSchedule\n")),(0,o.kt)("p",null,"Check node taints once again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe nodes | grep Taints\n")),(0,o.kt)("p",null,"Check the cluster status:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes\n")),(0,o.kt)("p",null,"Remove the node taint from worker1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl taint node worker1 node-role.kubernetes.io/worker-\n")),(0,o.kt)("p",null,"Repeat this opeation but this time use the ",(0,o.kt)("inlineCode",{parentName:"p"},"cordon")," subcommand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl cordon worker1\nkubectl describe nodes | grep Taints\nkubectl get nodes\n")),(0,o.kt)("p",null,"Revert changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl uncordon worker1\n")),(0,o.kt)("h2",{id:"annotate-nodes"},"Annotate nodes"),(0,o.kt)("p",null,"Annotate the ",(0,o.kt)("inlineCode",{parentName:"p"},"cp1")," node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl annotate node cp1 description="This is Kubernetes control plane node!"\n')),(0,o.kt)("p",null,"Check the annotations section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe node cp1\n")),(0,o.kt)("p",null,"Remove the annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl annotate node cp1 description-\n")))}i.isMDXComponent=!0}}]);