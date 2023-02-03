"use strict";(self.webpackChunkgo_4_clouds=self.webpackChunkgo_4_clouds||[]).push([[8007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5405:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},i="Create base image",o={unversionedId:"containers/create-base-image",id:"containers/create-base-image",title:"Create base image",description:"Create simple base image with minimal Linux",source:"@site/docs/containers/create-base-image.md",sourceDirName:"containers",slug:"/containers/create-base-image",permalink:"/docs/containers/create-base-image",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Create python application",permalink:"/docs/containers/create-python-app"},next:{title:"Congratulations!",permalink:"/docs/containers/congratulations"}},p={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-base-image"},"Create base image"),(0,a.kt)("p",null,"Create simple base image with minimal Linux"),(0,a.kt)("p",null,"Create project work directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p webapp/src\ncd webapp\n")),(0,a.kt)("p",null,"Create index website at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/index.html"',title:'"src/index.html"'},"<h1>Hello world!</h1>\n")),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," manifest:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-docker",metastring:'title="./Dockerfile"',title:'"./Dockerfile"'},"FROM busybox\n\nADD src/index.html /www/index.html\n\nEXPOSE 8080\n\nCMD httpd -p 8080 -h /www; tail -f /dev/null\n")),(0,a.kt)("p",null,"Build container image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker build -f Dockerfile -t webapp .\n")),(0,a.kt)("p",null,"Start container with ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," website:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 80:8080 webapp\n")),(0,a.kt)("p",null,"Test ",(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," website using ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hello-world")," page is now available at ",(0,a.kt)("a",{parentName:"p",href:"http://127.0.0.1"},"http://127.0.0.1")))}u.isMDXComponent=!0}}]);