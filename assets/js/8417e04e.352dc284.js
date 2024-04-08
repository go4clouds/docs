"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[2642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),i=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=i(t),d=l,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=d;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[m]="string"==typeof e?e:l,o[1]=p;for(var i=2;i<r;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var a=t(7462),l=(t(7294),t(3905));const r={sidebar_position:13},o="Install Load Balancer",p={unversionedId:"kubernetes/loadbalancer-installation",id:"kubernetes/loadbalancer-installation",title:"Install Load Balancer",description:"Install bare-metal Load Balancer service",source:"@site/docs/kubernetes/loadbalancer-installation.md",sourceDirName:"kubernetes",slug:"/kubernetes/loadbalancer-installation",permalink:"/docs/kubernetes/loadbalancer-installation",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Use an Ingress Controller",permalink:"/docs/kubernetes/ingress-controller"},next:{title:"Using Network Policy",permalink:"/docs/kubernetes/network-policy"}},s={},i=[{value:"Install bare-metal Load Balancer service",id:"install-bare-metal-load-balancer-service",level:2},{value:"Intergrate metallb with NGINX Ingress Controller",id:"intergrate-metallb-with-nginx-ingress-controller",level:2},{value:"Deploy test web application",id:"deploy-test-web-application",level:2}],c={toc:i};function m(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"install-load-balancer"},"Install Load Balancer"),(0,l.kt)("h2",{id:"install-bare-metal-load-balancer-service"},"Install bare-metal Load Balancer service"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/baremetal/"},"Bare-metal ingress controller consideration"))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://metallb.universe.tf/concepts/"},"Metallb concept"))),(0,l.kt)("p",null,"Add Helm Chart repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add metallb https://metallb.github.io/metallb\nhelm repo update\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"metallb")," as a Load Balancer service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace metallb metallb metallb/metallb\n")),(0,l.kt)("p",null,"Configure Load Balancer iptool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="metallb-iptool.yaml"',title:'"metallb-iptool.yaml"'},"---\napiVersion: metallb.io/v1beta1\nkind: IPAddressPool\nmetadata:\n  name: default\n  namespace: metallb\nspec:\n  addresses:\n  - 10.10.10.240-10.10.10.245\n  autoAssign: true\n---\napiVersion: metallb.io/v1beta1\nkind: L2Advertisement\nmetadata:\n  name: default\n  namespace: metallb\nspec:\n  ipAddressPools:\n  - default\n")),(0,l.kt)("p",null,"Apply the Load Balancer configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f metallb-iptool.yaml\n")),(0,l.kt)("p",null,"Verify ",(0,l.kt)("inlineCode",{parentName:"p"},"metallb")," deployment installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get -n metallb pods\nkubectl logs -n metallb metallb-controller-<Tab>\nhelm list -n metallb\n")),(0,l.kt)("h2",{id:"intergrate-metallb-with-nginx-ingress-controller"},"Intergrate metallb with NGINX Ingress Controller"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/baremetal"},"Bare-metal consideration"))),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"To complete this task, you need to first install the NGINX Ingress Controller from the previous chapter!")),(0,l.kt)("p",null,"Tell NGINX Ingress Controller to stop using host network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm upgrade -n ingress-nginx ingress-nginx ingress-nginx/ingress-nginx --set controller.hostNetwork=false\n")),(0,l.kt)("p",null,"Check NGINX Ingress Controller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n ingress-nginx\n")),(0,l.kt)("p",null,"Check the External IP of the NGINX Ingress Controller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n ingress-nginx\n")),(0,l.kt)("h2",{id:"deploy-test-web-application"},"Deploy test web application"),(0,l.kt)("p",null,"Create a new namespace for the web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace front-web\n")),(0,l.kt)("p",null,"Create a new application in a specific namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create deployment -n front-web web-app --image=nginx:1.23 --replicas=3\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See created Deployment "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: web-app\n  name: web-app\n  namespace: front-web\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: web-app\n  strategy: {}\n  template:\n    metadata:\n      creationTimestamp: null\n      labels:\n        app: web-app\n    spec:\n      containers:\n      - image: nginx:1.23\n        name: nginx\n        resources: {}\nstatus: {}\n\n"))),(0,l.kt)("p",null,"Check deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -o wide -n front-web\n")),(0,l.kt)("p",null,"Expose fronted application with service in mode ",(0,l.kt)("inlineCode",{parentName:"p"},"LoadBalancer"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n front-web web-app --port=80 --type=LoadBalancer\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See created Service "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: web-app\n  name: web-app\n  namespace: front-web\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: web-app\n  type: LoadBalancer\nstatus:\n  loadBalancer: {}\n"))),(0,l.kt)("p",null,"Check Service status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n front-web web-app\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME      TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE\nweb-app   LoadBalancer   10.106.220.243   10.10.10.241  80:32586/TCP   7s\n")),(0,l.kt)("p",null,"Try to connect from remote host:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://10.10.10.241\n")),(0,l.kt)("p",null,"Delete LoadBalancer service:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete service -n front-web web-app\n")),(0,l.kt)("p",null,"Expose once again ",(0,l.kt)("inlineCode",{parentName:"p"},"web-app")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"ClusterIP"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl expose deployment -n front-web web-app --type=ClusterIP --port=80\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See created Service "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  creationTimestamp: null\n  labels:\n    app: web-app\n  name: web-app\n  namespace: front-web\nspec:\n  ports:\n  - port: 80\n    protocol: TCP\n    targetPort: 80\n  selector:\n    app: web-app\n  type: ClusterIP\nstatus:\n  loadBalancer: {}\n"))),(0,l.kt)("p",null,"Check service object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n front-web\n")),(0,l.kt)("p",null,"Configure Ingress for ",(0,l.kt)("inlineCode",{parentName:"p"},"web-app")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title=front-web.yaml"',title:'front-web.yaml"'},'apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: frontend-ingress\n  namespace: front-web\n  annotations:\n    nginx.ingress.kubernetes.io/rewrite-target: /$1\nspec:\n  ingressClassName: "nginx"\n  rules:\n    - host: front-web.info\n      http:\n        paths:\n          - path: /\n            pathType: Prefix\n            backend:\n              service:\n                name: web-app\n                port:\n                  number: 80\n')),(0,l.kt)("p",null,"Apply Ingress configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f front-web.yaml\n")),(0,l.kt)("p",null,":Check ",(0,l.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," for NGINX Ingress Controller:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get svc -n ingress-nginx ingress-nginx-controller\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"NAME                       TYPE           CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE\ningress-nginx-controller   LoadBalancer   10.109.139.127   10.10.10.240  80:31801/TCP,443:31942/TCP   3h16m\n")),(0,l.kt)("p",null,"Check connection to ",(0,l.kt)("inlineCode",{parentName:"p"},"web-app"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -D- http://10.10.10.240 -H 'Host: front-web.info'\n")),(0,l.kt)("p",null,"Clean up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace front-web\n")))}m.isMDXComponent=!0}}]);