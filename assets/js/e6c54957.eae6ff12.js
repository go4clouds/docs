"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[632],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>h});var l=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var m=l.createContext({}),o=function(e){var a=l.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},i=function(e){var a=o(e.components);return l.createElement(m.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},d=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=o(t),d=n,h=c["".concat(m,".").concat(d)]||c[d]||u[d]||r;return t?l.createElement(h,p(p({ref:a},i),{},{components:t})):l.createElement(h,p({ref:a},i))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,p=new Array(r);p[0]=d;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s[c]="string"==typeof e?e:n,p[1]=s;for(var o=2;o<r;o++)p[o]=t[o];return l.createElement.apply(null,p)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5020:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var l=t(7462),n=(t(7294),t(3905));const r={sidebar_position:20},p="Learn Helm",s={unversionedId:"kubernetes/learn-helm",id:"kubernetes/learn-helm",title:"Learn Helm",description:"Learn how to use Helm to install any application on Kubernetes",source:"@site/docs/kubernetes/learn-helm.md",sourceDirName:"kubernetes",slug:"/kubernetes/learn-helm",permalink:"/docs/kubernetes/learn-helm",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/kubernetes/troubleshooting"},next:{title:"Congratulations!",permalink:"/docs/kubernetes/congratulations"}},m={},o=[{value:"Install Helm",id:"install-helm",level:2},{value:"Generate Helm chart template",id:"generate-helm-chart-template",level:2},{value:"Develop simple Helm chart",id:"develop-simple-helm-chart",level:2}],i={toc:o};function c(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"learn-helm"},"Learn Helm"),(0,n.kt)("p",null,"Learn how to use Helm to install any application on Kubernetes"),(0,n.kt)("h2",{id:"install-helm"},"Install Helm"),(0,n.kt)("p",null,"Install ",(0,n.kt)("strong",{parentName:"p"},"Helm")," client on your workstation"),(0,n.kt)("p",null,"Every ",(0,n.kt)("strong",{parentName:"p"},"Helm")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"release")," provides command line binary for any operating system. These versions can be manually downloaded and installed."),(0,n.kt)("p",null,"Get your desired ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"latest")," version of Helm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.helm.sh/helm-v3.10.3-linux-amd64.tar.gz\n")),(0,n.kt)("p",null,"Extract tarball archive to your local filesystem:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xvzf helm-v3.10.3-linux-amd64.tar.gz\n")),(0,n.kt)("p",null,"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"helm")," client in ",(0,n.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -m 755 linux-amd64/helm /usr/local/bin/helm\n")),(0,n.kt)("p",null,"Check ",(0,n.kt)("inlineCode",{parentName:"p"},"helm")," command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm version\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'version.BuildInfo{Version:"v3.10.3", GitCommit:"835b7334cfe2e5e27870ab3ed4135f136eecc704", GitTreeState:"clean", GoVersion:"go1.18.9"}\n')),(0,n.kt)("p",null,"As the last step add autocompletion bash functions to your shell:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'helm completion bash\nsource <(helm completion bash)\necho "source <(helm completion bash)" >> ~/.bashrc\n')),(0,n.kt)("h2",{id:"generate-helm-chart-template"},"Generate Helm chart template"),(0,n.kt)("p",null,"Helm can be used also for generating charts templates."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm create example\n")),(0,n.kt)("p",null,"Check Helm chart package directory structure:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install tree\ntree example\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"example/\n\u251c\u2500\u2500 charts\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u251c\u2500\u2500 deployment.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 _helpers.tpl\n\u2502\xa0\xa0 \u251c\u2500\u2500 hpa.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 ingress.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 NOTES.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 serviceaccount.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 service.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0     \u2514\u2500\u2500 test-connection.yaml\n\u2514\u2500\u2500 values.yaml\n\n3 directories, 10 files\n")),(0,n.kt)("p",null,"To get more info about Helm Chart Templates you go to ",(0,n.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/getting_started/"},"official documentation")),(0,n.kt)("p",null,"Verify Helm lint for ",(0,n.kt)("inlineCode",{parentName:"p"},"example")," package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm lint example/\n")),(0,n.kt)("p",null,"Test example Helm Chart installation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace test example ./example/ --dry-run --debug\n")),(0,n.kt)("p",null,"Then we can try to install it on Kubernetes cluster:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace test example ./example/\n")),(0,n.kt)("p",null,"Verify status example application on Kubernetes:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n test\nkubectl get svc -n test\n")),(0,n.kt)("p",null,"Now we can check ",(0,n.kt)("inlineCode",{parentName:"p"},"example")," application release using Helm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n test\nhelm status -n test example\nhelm history -n test example\n")),(0,n.kt)("p",null,"Because NGiNX image used in this example is outdated let's upgrade example app with new image:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'helm upgrade -n test example ./example/ --set image.tag="1.23.2"\n')),(0,n.kt)("p",null,"Let's verify once again application release:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n test\nhelm status -n test example\nhelm history -n test example\n")),(0,n.kt)("p",null,"To check image version and status application we can use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n test -o wide\n")),(0,n.kt)("h2",{id:"develop-simple-helm-chart"},"Develop simple Helm chart"),(0,n.kt)("p",null,"Generate new Helm chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm create myapp\n")),(0,n.kt)("p",null,"Remove not needed files:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"rm myapp/charts myapp/templates/* myapp/values.yaml -r\n")),(0,n.kt)("p",null,"Go into ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," directory and edit ",(0,n.kt)("inlineCode",{parentName:"p"},"Chart.yaml")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Chart.yaml"',title:'"Chart.yaml"'},'apiVersion: v2\nname: myapp\ndescription: A Helm chart for Kubernetes\n\ntype: application\n\nversion: 0.1.0\n\nappVersion: "v1.0"\n')),(0,n.kt)("p",null,"Go into ",(0,n.kt)("inlineCode",{parentName:"p"},"templates")," subdirectory and generate ",(0,n.kt)("inlineCode",{parentName:"p"},"delployment.yaml")," manifest:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd templates\nkubectl create deployment myapp --image=ghcr.io/mjura/myapp:v1.0 --replicas=3 --dry-run -o yaml > deployment.yaml\n")),(0,n.kt)("p",null,"Edit ",(0,n.kt)("inlineCode",{parentName:"p"},"deployment.yaml")," manifest:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deployment.yaml"',title:'"deployment.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: myapp\n  name: {{ .Release.Name }}\nspec:\n  replicas: {{ .Values.replicaCount }}\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - image: "{{ .Values.image }}:{{ .Chart.AppVersion }}"\n        name: myapp\n')),(0,n.kt)("p",null,"Go to main ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\n")),(0,n.kt)("p",null,"and create ",(0,n.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'},"replicaCount: 3\n\nimage: ghcr.io/mjura/myapp\n")),(0,n.kt)("p",null,"Check ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," Helm chart directory tree:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\ntree myapp\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"myapp/\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u2514\u2500\u2500 deployment.yaml\n\u2514\u2500\u2500 values.yaml\n")),(0,n.kt)("p",null,"Validate ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," Helm chart:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm lint ./myapp\n")),(0,n.kt)("p",null,"Output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"==> Linting ./myapp/\n[INFO] Chart.yaml: icon is recommended\n\n1 chart(s) linted, 0 chart(s) failed\n")),(0,n.kt)("p",null,"Try to generate and dry run ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," installation:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace myapp release-name ./myapp --debug --dry-run\n")),(0,n.kt)("p",null,"To install ",(0,n.kt)("inlineCode",{parentName:"p"},"myapp")," just execute:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace myapp release-name ./myapp\n")),(0,n.kt)("p",null,"Check application installation status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n myapp\nhelm status -n myapp release-name\nhelm history -n myapp release-name\n")),(0,n.kt)("p",null,"Check list deployment and pod list:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n myapp\nkubectl logs -n myapp -l app=myapp\n")))}c.isMDXComponent=!0}}]);