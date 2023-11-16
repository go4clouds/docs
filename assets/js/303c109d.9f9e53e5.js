"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[7136],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),d=l,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:l,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1031:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const s={sidebar_position:4},a="Install cluster extension",o={unversionedId:"kubernetes/install-plugins",id:"kubernetes/install-plugins",title:"Install cluster extension",description:"Install Kubernetes cluster extension Metrics-server",source:"@site/docs/kubernetes/install-plugins.md",sourceDirName:"kubernetes",slug:"/kubernetes/install-plugins",permalink:"/docs/kubernetes/install-plugins",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Basic cluster operations",permalink:"/docs/kubernetes/cluster-operations"},next:{title:"Basic Pods operations",permalink:"/docs/kubernetes/basic-pod-operations"}},i={},c=[{value:"Install Helm",id:"install-helm",level:2},{value:"Install metrics-server",id:"install-metrics-server",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-cluster-extension"},"Install cluster extension"),(0,l.kt)("p",null,"Install Kubernetes cluster extension ",(0,l.kt)("strong",{parentName:"p"},"Metrics-server")),(0,l.kt)("p",null,"As first Kubernetes cluster extension we will install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/metrics-server"},"metrics-server"),". The easiest way to get it working is to use helm project."),(0,l.kt)("h2",{id:"install-helm"},"Install Helm"),(0,l.kt)("p",null,"Install ",(0,l.kt)("strong",{parentName:"p"},"Helm")," client on your workstation"),(0,l.kt)("p",null,"Every ",(0,l.kt)("strong",{parentName:"p"},"Helm")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"release")," provides command line binary for any operating system. These versions can be manually downloaded and installed."),(0,l.kt)("p",null,"Get your desired ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"latest")," version of Helm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.helm.sh/helm-v3.10.3-linux-amd64.tar.gz\n")),(0,l.kt)("p",null,"Extract tarball archive to your local filesystem:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xvzf helm-v3.10.3-linux-amd64.tar.gz\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," client in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -m 755 linux-amd64/helm /usr/local/bin/helm\n")),(0,l.kt)("p",null,"Check ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm version\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'version.BuildInfo{Version:"v3.10.3", GitCommit:"835b7334cfe2e5e27870ab3ed4135f136eecc704", GitTreeState:"clean", GoVersion:"go1.18.9"}\n')),(0,l.kt)("p",null,"As the last step add autocompletion bash functions to your shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm completion bash\nsource <(helm completion bash)\necho "source <(helm completion bash)" >> ~/.bashrc\n')),(0,l.kt)("h2",{id:"install-metrics-server"},"Install metrics-server"),(0,l.kt)("p",null,"After ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command is working we can finally install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/metrics-server"},"metrics-server")," on ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes")," cluster."),(0,l.kt)("p",null,"First add Helm chart repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add metrics-server https://kubernetes-sigs.github.io/metrics-server/\nhelm repo update\n")),(0,l.kt)("p",null,"Install the chart on ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes")," cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace -n metrics-server \\\n                metrics-server \\\n                metrics-server/metrics-server \\\n                --set args={--kubelet-insecure-tls}\n")),(0,l.kt)("p",null,"Wait few seconds until ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install")," finish and then check status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n metrics-server\nhelm status -n metrics-server metrics-server\n")),(0,l.kt)("p",null,"Now, you can observer ",(0,l.kt)("strong",{parentName:"p"},"Kubernetes")," cluster resources usage in a real-time:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl top nodes\nkubectl top pods -n metrics-server\nkubectl top pods -n kube-system\nkubectl top pods -A\n")))}u.isMDXComponent=!0}}]);