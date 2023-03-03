"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[1380],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>g});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function p(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?p(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),i=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},m=function(e){var a=i(e.components);return t.createElement(s.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,p=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=i(n),d=l,g=c["".concat(s,".").concat(d)]||c[d]||u[d]||p;return n?t.createElement(g,r(r({ref:a},m),{},{components:n})):t.createElement(g,r({ref:a},m))}));function g(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var p=n.length,r=new Array(p);r[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[c]="string"==typeof e?e:l,r[1]=o;for(var i=2;i<p;i++)r[i]=n[i];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2291:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>i});var t=n(7462),l=(n(7294),n(3905));const p={sidebar_position:8},r="Create ConfigMap and Secret",o={unversionedId:"kubernetes/configmaps-and-secrets",id:"kubernetes/configmaps-and-secrets",title:"Create ConfigMap and Secret",description:"Learn how to use ConfigMap and Secret",source:"@site/docs/kubernetes/configmaps-and-secrets.md",sourceDirName:"kubernetes",slug:"/kubernetes/configmaps-and-secrets",permalink:"/docs/kubernetes/configmaps-and-secrets",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Use ReplicaSet and Deployment",permalink:"/docs/kubernetes/replicaset-and-deployment"},next:{title:"Create Persistent Volume",permalink:"/docs/kubernetes/persistent-volume"}},s={},i=[{value:"Use ConfigMap as env variables",id:"use-configmap-as-env-variables",level:2},{value:"Store configuration files as ConfigMap",id:"store-configuration-files-as-configmap",level:2},{value:"Use Secret object",id:"use-secret-object",level:2}],m={toc:i};function c(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-configmap-and-secret"},"Create ConfigMap and Secret"),(0,l.kt)("p",null,"Learn how to use ",(0,l.kt)("inlineCode",{parentName:"p"},"ConfigMap")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Secret")),(0,l.kt)("h2",{id:"use-configmap-as-env-variables"},"Use ConfigMap as env variables"),(0,l.kt)("p",null,"Check the list of Namespaces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get ns\n")),(0,l.kt)("p",null,"Create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Namespace for a Pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns myapp\n")),(0,l.kt)("p",null,"Create ConfigMap with application data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl create configmap -n myapp myapp \\\n        --from-literal=port="8083" \\\n        --from-literal=message="This is my own MyAPP message v2.X!" \\\n        --dry-run -o yaml > cm-myapp.yaml\n')),(0,l.kt)("p",null,"Check the ConfigMap ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="cm-myapp.yaml"',title:'"cm-myapp.yaml"'},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: myapp\n  namespace: myapp\ndata:\n  port: "8083"\n  message: This is my own MyAPP message v2.X!\n')),(0,l.kt)("p",null,"Apply the ConfigMap manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f cm-myapp.yaml\n")),(0,l.kt)("p",null,"Generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp")," Deployment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create deployment -n myapp myapp \\\n        --image=ghcr.io/go4clouds/myapp:v2.0 \\\n        --replicas=3 --dry-run -o yaml > deploy-myapp.yaml\n")),(0,l.kt)("p",null,"Edit the Deployment template manifest for ",(0,l.kt)("inlineCode",{parentName:"p"},"myapp"),": "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-myapp.yaml"',title:'"deploy-myapp.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\n  namespace: myapp\nspec:\n  selector:\n    matchLabels:\n      app: myapp\n  replicas: 3\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - name: myapp\n        image: ghcr.io/go4clouds/myapp:v2.0\n        env:\n        - name: MYAPP_PORT\n          valueFrom:\n            configMapKeyRef:\n              name: myapp\n              key: port\n        - name: MYAPP_MESSAGE\n          valueFrom:\n            configMapKeyRef:\n              name: myapp\n              key: message\n")),(0,l.kt)("p",null,"Apply the Deployment ",(0,l.kt)("inlineCode",{parentName:"p"},"deploy-myapp.yaml")," manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-myapp.yaml\n")),(0,l.kt)("p",null,"Check the Deploymnet,ReplicaSet and Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n myapp -o wide\n")),(0,l.kt)("p",null,"Open a tunnel connection to any Pod instance:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n myapp pod/myapp-<POD_ID> 8083:8083\n")),(0,l.kt)("p",null,"In a new terminal check the application response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8083\n")),(0,l.kt)("p",null,"To cleanup remove the whole Namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns myapp\n")),(0,l.kt)("h2",{id:"store-configuration-files-as-configmap"},"Store configuration files as ConfigMap"),(0,l.kt)("p",null,"Check the list of Namespaces:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get ns\n")),(0,l.kt)("p",null,"Create a new ",(0,l.kt)("inlineCode",{parentName:"p"},"webapp")," Namespace for a web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns webapp\n")),(0,l.kt)("p",null,"Create a virtual host configuration for NGINX server: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf",metastring:'title="webapp.conf"',title:'"webapp.conf"'},"server {\n    listen 80 default_server;\n\n    root /srv/webapp;\n    index index.html;\n\n    server_name _;\n\n    access_log /var/log/nginx/webapp.access_log main;\n    error_log /var/log/nginx/webapp.error_log;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n}\n")),(0,l.kt)("p",null,"Create the ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html")," file for the web application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="index.html"',title:'"index.html"'},"<html>\n    <head>\n        <title>Welcome to WebAPP!</title>\n    </head>\n    <body>\n        <h1>Success! The WebAPP application is working!</h1>\n    </body>\n</html>\n")),(0,l.kt)("p",null,"Create ConfigMap with a vhost configuration and ",(0,l.kt)("inlineCode",{parentName:"p"},"index.html"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create configmap -n webapp webapp-conf --from-file=webapp.conf\nkubectl create configmap -n webapp webapp-html --from-file=index.html\n")),(0,l.kt)("p",null,"Prepare the webapp Deployment manifest:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-webapp.yaml"',title:'"deploy-webapp.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: webapp\n  namespace: webapp\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: webapp\n  template:\n    metadata:\n      labels:\n        app: webapp\n    spec:\n      containers:\n      - name: nginx\n        image: docker.io/library/nginx:1.23.2\n        ports:\n        - containerPort: 80\n        volumeMounts:\n        - mountPath: /etc/nginx/conf.d\n          readOnly: true\n          name: webapp-conf\n        - mountPath: /srv/webapp\n          readOnly: true\n          name: webapp-html\n        - mountPath: /var/log/nginx\n          name: nginx-log\n      volumes:\n      - name: webapp-conf\n        configMap:\n          name: webapp-conf\n      - name: webapp-html\n        configMap:\n          name: webapp-html\n      - name: nginx-log\n        emptyDir: {}\n")),(0,l.kt)("p",null,"Create a webapp Deployment which is relying on previous ConfigMap's:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-webapp.yaml\n")),(0,l.kt)("p",null,"Check the Deployment, ReplicaSet and Pod status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get events --sort-by='.lastTimestamp' -n webapp\nkubectl get deploy,rs,pods -n webapp -o wide\n")),(0,l.kt)("p",null,"To test the webapp open a tunnel connection to it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n webapp pod/webapp-<POD_ID> 8080:80\n")),(0,l.kt)("p",null,"In a new terminal test the application:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:8080\n")),(0,l.kt)("p",null,"To cleanup remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"webapp")," Namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns webapp\n")),(0,l.kt)("h2",{id:"use-secret-object"},"Use Secret object"),(0,l.kt)("p",null,"Create the ",(0,l.kt)("inlineCode",{parentName:"p"},"database")," Namespace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace database\n")),(0,l.kt)("p",null,"Create a Secret object which will store the MariaDB administrator password:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl create secret -n database generic mariadb --from-literal=password="dbpassword"\n')),(0,l.kt)("p",null,"Deploy the MariaDB instance which will use the administrator password:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="deploy-mariadb.yaml"',title:'"deploy-mariadb.yaml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mariadb\n  namespace: database\n  labels:\n    app: mariadb\nspec:\n  selector:\n    matchLabels:\n      app: mariadb\n  template:\n    metadata:\n      labels:\n        app: mariadb\n    spec:\n      containers:\n      - image: docker.io/library/mariadb:10.10\n        name: mariadb\n        env:\n        - name: MYSQL_ROOT_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: mariadb\n              key: password\n        ports:\n        - containerPort: 3306\n          name: mysql\n        volumeMounts:\n        - name: var-lib-mysql\n          mountPath: /var/lib/mysql\n      volumes:\n      - name: var-lib-mysql\n        emptyDir: {}\n")),(0,l.kt)("p",null,"Apply a manifest on Kubernetes cluster:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f deploy-mariadb.yaml\n")),(0,l.kt)("p",null,"Check the Deployment status:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get deploy,rs,pods -n database\n")),(0,l.kt)("p",null,"Open a terminal to a Pod container:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl exec -ti -n database mariadb-<POD_ID> -- bash\n  # env\n  # echo $MYSQL_ROOT_PASSWORD\n  # mysql -u root -p$MYSQL_ROOT_PASSWORD\n")),(0,l.kt)("p",null,"Output:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Welcome to the MariaDB monitor.  Commands end with ; or \\g.\nYour MariaDB connection id is 7\nServer version: 10.10.2-MariaDB-1:10.10.2+maria~ubu2204 mariadb.org binary distribution\n\nCopyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.\n\nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.\n\nMariaDB [(none)]> \n")),(0,l.kt)("p",null,"Clean up:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete ns database\n")))}c.isMDXComponent=!0}}]);