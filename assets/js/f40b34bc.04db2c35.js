"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[4237],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),i=c(t),k=r,d=i["".concat(o,".").concat(k)]||i[k]||m[k]||l;return t?a.createElement(d,s(s({ref:n},u),{},{components:t})):a.createElement(d,s({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,s=new Array(l);s[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[i]="string"==typeof e?e:r,s[1]=p;for(var c=2;c<l;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>i,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:9},s="Create Persistent Volume",p={unversionedId:"kubernetes/persistent-volume",id:"kubernetes/persistent-volume",title:"Create Persistent Volume",description:"Learn how to use PersistentVolume with NFS as a backend",source:"@site/docs/kubernetes/persistent-volume.md",sourceDirName:"kubernetes",slug:"/kubernetes/persistent-volume",permalink:"/docs/kubernetes/persistent-volume",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Create ConfigMap and Secret",permalink:"/docs/kubernetes/configmaps-and-secrets"},next:{title:"Using Service concept",permalink:"/docs/kubernetes/service-concept"}},o={},c=[{value:"Deploy and configure NFS server",id:"deploy-and-configure-nfs-server",level:2}],u={toc:c};function i(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-persistent-volume"},"Create Persistent Volume"),(0,r.kt)("p",null,"Learn how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"PersistentVolume")," with NFS as a backend"),(0,r.kt)("h2",{id:"deploy-and-configure-nfs-server"},"Deploy and configure NFS server"),(0,r.kt)("p",null,"Install NFS server on ",(0,r.kt)("strong",{parentName:"p"},"cp1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install -y nfs-kernel-server\n")),(0,r.kt)("p",null,"Create NFS export directory and set proper perimissions on ",(0,r.kt)("strong",{parentName:"p"},"cp1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'sudo mkdir /srv/share\nsudo chmod 1777 /srv/share\necho "Hello World Simple Website" > /srv/share/index.html\n')),(0,r.kt)("p",null,"Export NFS directory to Kubernetes cluster nodes on ",(0,r.kt)("strong",{parentName:"p"},"cp1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo vim /etc/exports\n/srv/share/ *(rw,sync,no_root_squash,subtree_check)\n")),(0,r.kt)("p",null,"On ",(0,r.kt)("strong",{parentName:"p"},"cp1")," trigger volume export to worker nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo exportfs -ra\n")),(0,r.kt)("p",null,"On ",(0,r.kt)("strong",{parentName:"p"},"all*")," Kubernetes nodes install ",(0,r.kt)("inlineCode",{parentName:"p"},"nfs-common")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"for SRV in cp{1,2,3} worker{1,2,3} ; do\nssh root@$SRV apt-get install nfs-common -y\ndone\n")),(0,r.kt)("p",null,"Check if nodes can connect to shares:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"for SRV in cp{1,2,3} worker{1,2,3}; do\nssh root@$SRV showmount -e k8scp\ndone\n")),(0,r.kt)("p",null,"Prepare PersistentVolume YAML manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pv-nfs.yaml"',title:'"pv-nfs.yaml"'},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: pv-nfs\nspec:\n  capacity:\n    storage: 10Gi\n  accessModes:\n    - ReadWriteMany\n  persistentVolumeReclaimPolicy: Retain\n  nfs:\n    path: /srv/share\n    server: k8scp\n    readOnly: false\n")),(0,r.kt)("p",null,"Apply PersistentVolume YAML manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pv-nfs.yaml\n")),(0,r.kt)("p",null,"Check list PersistentVolumes in the cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pv\n")),(0,r.kt)("p",null,"Create new Namespace for service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create namespace webapp\n")),(0,r.kt)("p",null,"To use PersisentVolume it is required create PersistentVolumeClaim YAML manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="pvc-nfs.yaml"',title:'"pvc-nfs.yaml"'},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: pvc-nfs\n  namespace: webapp\nspec:\n  accessModes:\n    - ReadWriteMany\n  resources:\n    requests:\n      storage: 1Gi\n")),(0,r.kt)("p",null,"Apply PersistentVolumeClaim manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f pvc-nfs.yaml\n")),(0,r.kt)("p",null,"Get list of PersistentVolumeClaims:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pvc -n webapp\n")),(0,r.kt)("p",null,"Let's create new applica which will use the PVC:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-webapp-nfs.yaml"',title:'"deploy-webapp-nfs.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: webapp-nfs\n  name: webapp\n  namespace: webapp\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: webapp-nfs\n  template:\n    metadata:\n      labels:\n        app: webapp-nfs\n    spec:\n      containers:\n      - image: nginx:1.23.2\n        name: nginx\n        volumeMounts:\n          - mountPath: "/usr/share/nginx/html"\n            name: vol-nfs\n      volumes:\n        - name: vol-nfs\n          persistentVolumeClaim:\n            claimName: pvc-nfs\n')),(0,r.kt)("p",null,"Deploy web application with nfs volume mounted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-webapp-nfs.yaml\n")),(0,r.kt)("p",null,"Check Deployment status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n webapp\n")),(0,r.kt)("p",null,"Verify PersistentVolume and PersisentVolumeClaim:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pvc,pv -n webapp\n")),(0,r.kt)("p",null,"Get Events messages from Namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get events --sort-by='.lastTimestamp' -n webapp\n")),(0,r.kt)("p",null,"Get pod description:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl describe pod -n webapp webapp-nfs-<Tab>\n")),(0,r.kt)("p",null,"Open port tunnel to any Pod instance from webapp Deployment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n webapp pod/webapp-<Tab> 8080:80 &\n")),(0,r.kt)("p",null,"Check webapp response on localhost:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080\n")),(0,r.kt)("p",null,"To cleanup remove ",(0,r.kt)("inlineCode",{parentName:"p"},"webapp")," Namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete namespace webapp\n")))}i.isMDXComponent=!0}}]);