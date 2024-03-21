"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[2811],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||l;return t?a.createElement(g,i(i({ref:n},s),{},{components:t})):a.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:3},i="Create python application",p={unversionedId:"containers/create-python-app",id:"containers/create-python-app",title:"Create python application",description:"Create a simple Python application with Flask",source:"@site/docs/containers/create-python-app.md",sourceDirName:"containers",slug:"/containers/create-python-app",permalink:"/docs/containers/create-python-app",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Create first application",permalink:"/docs/containers/create-first-webapp"},next:{title:"Create base image",permalink:"/docs/containers/create-base-image"}},o={},c=[{value:"Create a simple Python application with Flask",id:"create-a-simple-python-application-with-flask",level:2},{value:"Create a simple container that includes your application",id:"create-a-simple-container-that-includes-your-application",level:2},{value:"Running the container",id:"running-the-container",level:2},{value:"Publish the image of the container",id:"publish-the-image-of-the-container",level:2}],s={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-python-application"},"Create python application"),(0,r.kt)("h2",{id:"create-a-simple-python-application-with-flask"},"Create a simple Python application with Flask"),(0,r.kt)("p",null,"Install required packages:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt install python3 python3-pip git-core\n")),(0,r.kt)("p",null,"Set the working directory for an application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p myapp/src\ncd myapp\n")),(0,r.kt)("p",null,"Write the main application into the file ",(0,r.kt)("inlineCode",{parentName:"p"},"main.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="src/main.py"',title:'"src/main.py"'},'from flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello from my application v1.0 !!!"\n\nif __name__ == "__main__":\n    app.run(host=\'0.0.0.0\',port=8081)\n')),(0,r.kt)("p",null,"Create a requirements file that includes all necessary dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/requirements.txt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-txt",metastring:'title="src/requirements.txt"',title:'"src/requirements.txt"'},"Flask\n")),(0,r.kt)("p",null,"Install Python required modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install -r src/requirements.txt\n")),(0,r.kt)("p",null,"Start the application and then test it locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"python3 src/main.py\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," * Serving Flask app 'main' (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on all addresses.\n   WARNING: This is a development server. Do not use it in a production deployment.\n * Running on http://172.16.4.253:8081/ (Press CTRL+C to quit)\n"))),(0,r.kt)("p",null,"In another terminal, test the HTTP response of the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://0.0.0.0:8081\n")),(0,r.kt)("h2",{id:"create-a-simple-container-that-includes-your-application"},"Create a simple container that includes your application"),(0,r.kt)("p",null,"Create a container file manifest in the ",(0,r.kt)("inlineCode",{parentName:"p"},"myapp")," directory.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile",metastring:'title="./Dockerfile"',title:'"./Dockerfile"'},'FROM registry.opensuse.org/opensuse/leap:15.3\n\nRUN zypper ref && zypper install -y python3 python3-pip\n\nRUN mkdir /app\nWORKDIR /app\nCOPY src/* /app/\nRUN pip3 install -r requirements.txt\n\nEXPOSE 8081\nCMD ["python3", "/app/main.py"]\n')),(0,r.kt)("p",null,"Initialize a git repository and add application files to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.email "your@example-email.com"\ngit config --global user.name "Your Name"\n\ngit init\ngit add Dockerfile src\ngit commit -m "Initial commit" -a\ngit log\n')),(0,r.kt)("p",null,"Finally, build a cointainer image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -f Dockerfile -t myapp:v1.0 .\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'Sending build context to Docker daemon  4.096kB\nStep 1/7 : FROM python:3.8\n3.8: Pulling from library/python\n0bc3020d05f1: Pull complete \na110e5871660: Pull complete \n83d3c0fa203a: Pull complete \na8fd09c11b02: Pull complete \n14feb89c4a52: Pull complete \n70752631d778: Pull complete \n2273412836af: Pull complete \n5f59e94255df: Pull complete \nc95f8c6e2e3a: Pull complete \nDigest: sha256:83d2246349a8b864288bf9c0b193ce640b08889c14961b1925b47a9e5c9911b4\nStatus: Downloaded newer image for python:3.8\n ---\x3e b716d5a96fde\nStep 2/7 : RUN mkdir /app\n ---\x3e Running in 6fda343c0718\nRemoving intermediate container 6fda343c0718\n ---\x3e 8557623c2a88\nStep 3/7 : WORKDIR /app\n ---\x3e Running in 5e718f2b7448\nRemoving intermediate container 5e718f2b7448\n ---\x3e d0856bab751c\nStep 4/7 : ADD . /app/\n ---\x3e 404b1b40ef8f\nStep 5/7 : RUN pip install -r requirements.txt\n ---\x3e Running in e7d57084bfda\nCollecting Flask\n  Downloading Flask-2.0.1-py3-none-any.whl (94 kB)\nCollecting click>=7.1.2\n  Downloading click-8.0.1-py3-none-any.whl (97 kB)\nCollecting Werkzeug>=2.0\n  Downloading Werkzeug-2.0.1-py3-none-any.whl (288 kB)\nCollecting itsdangerous>=2.0\n  Downloading itsdangerous-2.0.1-py3-none-any.whl (18 kB)\nCollecting Jinja2>=3.0\n  Downloading Jinja2-3.0.1-py3-none-any.whl (133 kB)\nCollecting MarkupSafe>=2.0\n  Downloading MarkupSafe-2.0.1-cp38-cp38-manylinux2010_x86_64.whl (30 kB)\nInstalling collected packages: MarkupSafe, Werkzeug, Jinja2, itsdangerous, click, Flask\nSuccessfully installed Flask-2.0.1 Jinja2-3.0.1 MarkupSafe-2.0.1 Werkzeug-2.0.1 click-8.0.1 itsdangerous-2.0.1\nWARNING: Running pip as the \'root\' user can result in broken permissions and conflicting behaviour with the system package manager. It is recommended to use a virtual environment instead: https://pip.pypa.io/warnings/venv\nRemoving intermediate container e7d57084bfda\n ---\x3e 79909887eefe\nStep 6/7 : EXPOSE 8081\n ---\x3e Running in 83423f716ff5\nRemoving intermediate container 83423f716ff5\n ---\x3e 51a186e4dc5b\nStep 7/7 : CMD ["python", "/app/main.py"]\n ---\x3e Running in 16e8e13f9a28\nRemoving intermediate container 16e8e13f9a28\n ---\x3e 14303156d868\nSuccessfully built 14303156d868\nSuccessfully tagged myapp:v1.0\n'))),(0,r.kt)("h2",{id:"running-the-container"},"Running the container"),(0,r.kt)("p",null,"Start the container that has the Python application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -p 8081:8081 myapp:v1.0\n")),(0,r.kt)("h2",{id:"publish-the-image-of-the-container"},"Publish the image of the container"),(0,r.kt)("p",null,"Prepare the container image for publishing by updating its tag and adding a repository name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker tag myapp:v1.0 ttl.sh/myapp-v1.0:8h\n")),(0,r.kt)("p",null,"Push the container image to ",(0,r.kt)("a",{parentName:"p",href:"https://ttl.sh"},"ttl.sh"),", which is an anonymous container registry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker push ttl.sh/myapp-v1.0:8h\n")),(0,r.kt)("p",null,"Now that the container image has been published, it can be used anywhere. The container can be started with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run ttl.sh/myapp-v1.0:8h\n")))}u.isMDXComponent=!0}}]);