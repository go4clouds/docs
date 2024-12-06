"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[632],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>d});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=n.createContext({}),o=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},i=function(e){var a=o(e.components);return n.createElement(m.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,p=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=o(t),h=l,d=c["".concat(m,".").concat(h)]||c[h]||u[h]||p;return t?n.createElement(d,r(r({ref:a},i),{},{components:t})):n.createElement(d,r({ref:a},i))}));function d(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=t.length,r=new Array(p);r[0]=h;var s={};for(var m in a)hasOwnProperty.call(a,m)&&(s[m]=a[m]);s.originalType=e,s[c]="string"==typeof e?e:l,r[1]=s;for(var o=2;o<p;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},5020:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>o});var n=t(7462),l=(t(7294),t(3905));const p={sidebar_position:20},r="Learn Helm",s={unversionedId:"kubernetes/learn-helm",id:"kubernetes/learn-helm",title:"Learn Helm",description:"Learn how to use Helm to install any application on Kubernetes.",source:"@site/docs/kubernetes/learn-helm.md",sourceDirName:"kubernetes",slug:"/kubernetes/learn-helm",permalink:"/docs/kubernetes/learn-helm",draft:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/kubernetes/troubleshooting"},next:{title:"Congratulations!",permalink:"/docs/kubernetes/congratulations"}},m={},o=[{value:"Install Helm",id:"install-helm",level:2},{value:"Generate Helm chart template",id:"generate-helm-chart-template",level:2},{value:"Develop simple Helm chart",id:"develop-simple-helm-chart",level:2}],i={toc:o};function c(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"learn-helm"},"Learn Helm"),(0,l.kt)("p",null,"Learn how to use Helm to install any application on Kubernetes."),(0,l.kt)("h2",{id:"install-helm"},"Install Helm"),(0,l.kt)("p",null,"Install ",(0,l.kt)("strong",{parentName:"p"},"Helm")," client on your workstation"),(0,l.kt)("p",null,"Every ",(0,l.kt)("strong",{parentName:"p"},"Helm")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"release")," provides command line binary for any operating system. These versions can be manually downloaded and installed."),(0,l.kt)("p",null,"Get your desired ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/helm/helm/releases"},"latest")," version of Helm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://get.helm.sh/helm-v3.10.3-linux-amd64.tar.gz\n")),(0,l.kt)("p",null,"Extract the tarball archive to your local filesystem:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"tar -xvzf helm-v3.10.3-linux-amd64.tar.gz\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," client in ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/bin"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -m 755 linux-amd64/helm /usr/local/bin/helm\n")),(0,l.kt)("p",null,"Check ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm version\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'version.BuildInfo{Version:"v3.10.3", GitCommit:"835b7334cfe2e5e27870ab3ed4135f136eecc704", GitTreeState:"clean", GoVersion:"go1.18.9"}\n')),(0,l.kt)("p",null,"As the last step add autocompletion bash functions to your shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm completion bash\nsource <(helm completion bash)\necho "source <(helm completion bash)" >> ~/.bashrc\n')),(0,l.kt)("h2",{id:"generate-helm-chart-template"},"Generate Helm chart template"),(0,l.kt)("p",null,"Helm can also be used for generating chart templates:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm create example\n")),(0,l.kt)("p",null,"Check the structure of the Helm chart package directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install tree\ntree example\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"example/\n\u251c\u2500\u2500 charts\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u251c\u2500\u2500 deployment.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 _helpers.tpl\n\u2502\xa0\xa0 \u251c\u2500\u2500 hpa.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 ingress.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 NOTES.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 serviceaccount.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 service.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tests\n\u2502\xa0\xa0     \u2514\u2500\u2500 test-connection.yaml\n\u2514\u2500\u2500 values.yaml\n\n3 directories, 10 files\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"To get more info about Helm Chart Templates you go to ",(0,l.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_template_guide/getting_started/"},"official documentation"))),(0,l.kt)("p",null,"Verify Helm lint for ",(0,l.kt)("inlineCode",{parentName:"p"},"example")," package:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm lint example/\n")),(0,l.kt)("p",null,"Test example Helm Chart installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace test example ./example/ --dry-run --debug\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See created Deployment "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: example\n  labels:\n    helm.sh/chart: example-0.1.0\n    app.kubernetes.io/name: example\n    app.kubernetes.io/instance: example\n    app.kubernetes.io/version: "1.16.0"\n    app.kubernetes.io/managed-by: Helm\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: example\n      app.kubernetes.io/instance: example\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: example\n        app.kubernetes.io/instance: example\n    spec:\n      serviceAccountName: example\n      securityContext:\n        {}\n      containers:\n        - name: example\n          securityContext:\n            {}\n          image: "nginx:1.16.0"\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 80\n              protocol: TCP\n          livenessProbe:\n            httpGet:\n              path: /\n              port: http\n          readinessProbe:\n            httpGet:\n              path: /\n              port: http\n          resources:\n            {}\n\n'))),(0,l.kt)("p",null,"Then we can try to install it on the Kubernetes cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace test example ./example/\n")),(0,l.kt)("p",null,"Verify the status of the example application on Kubernetes:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n test\nkubectl get svc -n test\n")),(0,l.kt)("p",null,"Now we can check the ",(0,l.kt)("inlineCode",{parentName:"p"},"example")," application release using Helm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n test\nhelm status -n test example\nhelm history -n test example\n")),(0,l.kt)("p",null,"Since the NGiNX image used in this example is outdated, let's upgrade the example app with a new image:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'helm upgrade -n test example ./example/ --set image.tag="1.23.2"\n')),(0,l.kt)("p",null,"Let's verify the application release once again:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n test\nhelm status -n test example\nhelm history -n test example\n")),(0,l.kt)("p",null,"To check image version and status application we can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n test -o wide\n")),(0,l.kt)("h2",{id:"develop-simple-helm-chart"},"Develop simple Helm chart"),(0,l.kt)("p",null,"Generate new Helm chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm create myapp\n")),(0,l.kt)("p",null,"Remove unnecessary files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"rm myapp/charts myapp/templates/* myapp/values.yaml -r\n")),(0,l.kt)("p",null,"Go into ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," directory and edit ",(0,l.kt)("inlineCode",{parentName:"p"},"Chart.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Chart.yaml"',title:'"Chart.yaml"'},'apiVersion: v2\nname: myapp\ndescription: A Helm chart for Kubernetes\n\ntype: application\n\nversion: 0.1.0\n\nappVersion: "v1.0"\n')),(0,l.kt)("p",null,"Go into the ",(0,l.kt)("inlineCode",{parentName:"p"},"templates")," subdirectory and generate the ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.yaml")," manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd templates\nkubectl create deployment myapp --image=ghcr.io/mjura/myapp:v1.0 --replicas=3 --dry-run=client -o yaml > deployment.yaml\n")),(0,l.kt)("p",null,"Edit ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment.yaml")," manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deployment.yaml"',title:'"deployment.yaml"'},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: myapp\n  name: {{ .Release.Name }}\nspec:\n  replicas: {{ .Values.replicaCount }}\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - image: "{{ .Values.image }}:{{ .Chart.AppVersion }}"\n        name: myapp\n')),(0,l.kt)("p",null,"Go to main ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\n")),(0,l.kt)("p",null,"and create ",(0,l.kt)("inlineCode",{parentName:"p"},"values.yaml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="values.yaml"',title:'"values.yaml"'},"replicaCount: 3\n\nimage: ghcr.io/mjura/myapp\n")),(0,l.kt)("p",null,"Check the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Helm chart directory tree:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd ..\ntree myapp\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"myapp/\n\u251c\u2500\u2500 Chart.yaml\n\u251c\u2500\u2500 templates\n\u2502\xa0\xa0 \u2514\u2500\u2500 deployment.yaml\n\u2514\u2500\u2500 values.yaml\n")),(0,l.kt)("p",null,"Validate the  ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Helm chart:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm lint ./myapp\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"==> Linting ./myapp/\n[INFO] Chart.yaml: icon is recommended\n\n1 chart(s) linted, 0 chart(s) failed\n")),(0,l.kt)("p",null,"Try to generate and perform a dry run of the ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace myapp release-name ./myapp --debug --dry-run\n")),(0,l.kt)("details",null,(0,l.kt)("summary",null,"See created Deployment "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: myapp\n  name: release-name\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - image: "ghcr.io/mjura/myapp:v1.0"\n        name: myapp\n'))),(0,l.kt)("p",null,"To install ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),", just execute:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm install --create-namespace --namespace myapp release-name ./myapp\n")),(0,l.kt)("p",null,"Check the status of the application installation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"helm list -n myapp\nhelm status -n myapp release-name\nhelm history -n myapp release-name\n")),(0,l.kt)("p",null,"Check the list of Deployments and Pods:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n myapp\nkubectl logs -n myapp -l app=myapp\n")),(0,l.kt)("p",null,"Clean up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns test myapp\n")))}c.isMDXComponent=!0}}]);