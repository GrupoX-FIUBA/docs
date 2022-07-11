"use strict";(self.webpackChunkspotifiuby=self.webpackChunkspotifiuby||[]).push([[199],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return a?r.createElement(f,n(n({ref:t},c),{},{components:a})):r.createElement(f,n({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,n=new Array(o);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var u=2;u<o;u++)n[u]=a[u];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6935:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),i=(a(7294),a(3905));const o={sidebar_position:2,description:"Kubernetes, microservices, API Gateway"},n="Backend",s={unversionedId:"arquitectura/backend",id:"arquitectura/backend",title:"Backend",description:"Kubernetes, microservices, API Gateway",source:"@site/docs/arquitectura/backend.md",sourceDirName:"arquitectura",slug:"/arquitectura/backend",permalink:"/arquitectura/backend",draft:!1,editUrl:"https://github.com/GrupoX-FIUBA/docs/docs/arquitectura/backend.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Kubernetes, microservices, API Gateway"},sidebar:"tutorialSidebar",previous:{title:"Modelo",permalink:"/arquitectura/model"},next:{title:"Backoffice",permalink:"/arquitectura/backoffice"}},l={},u=[{value:"Kubernetes",id:"kubernetes",level:2},{value:"Microservicios",id:"microservicios",level:2},{value:"\ud83d\udc64 Usuarios",id:"-usuarios",level:3},{value:"\ud83c\udfb5 M\xfasica",id:"-m\xfasica",level:3},{value:"\ud83d\udcb0 Pagos",id:"-pagos",level:3},{value:"\u2b50 Feedback",id:"-feedback",level:3},{value:"API Gateway",id:"api-gateway",level:2},{value:"Monitoreo",id:"monitoreo",level:2},{value:"Referencias",id:"referencias",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"backend"},"Backend"),(0,i.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,i.kt)("p",null,"Para el despliegue del ",(0,i.kt)("em",{parentName:"p"},"backend"),", se opt\xf3 por utilizar la tecnolog\xeda Kubernetes. El proveedor del ",(0,i.kt)("em",{parentName:"p"},"cluster")," elegido fue ",(0,i.kt)("a",{parentName:"p",href:"https://www.okteto.com/"},"Okteto Cloud")," por su capa gratuita, aunque los manifiestos son agn\xf3sticos a este y se puede desplegar en cualquier otro proveedor."),(0,i.kt)("p",null,"La metodolog\xeda utilizada para el desarollo de la red fue que cada microservicio tenga sus propios manifiestos, los cuales contienen un ",(0,i.kt)("em",{parentName:"p"},"deployment")," para ese servicio. A su vez, existe un ",(0,i.kt)("em",{parentName:"p"},"deployment")," para la base de datos y un ",(0,i.kt)("em",{parentName:"p"},"persistent volume claim")," para persistir la misma. Estos \xfaltimos manifiestos, junto con sus instrucciones, se encuentran en el siguiente ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GrupoX-FIUBA/kubernetes"},"repositorio"),"."),(0,i.kt)("p",null,"Con el fin de generalizar, automatizar y abstraer lo mayor posible la infraestructura del programador, se intent\xf3 utilizar al m\xe1ximo las variables de entorno para la configuraci\xf3n de los servicios."),(0,i.kt)("h2",{id:"microservicios"},"Microservicios"),(0,i.kt)("p",null,"Los microservicios se desarrollaron utilizando ",(0,i.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},"FastAPI")," (Python) y ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify")," (Javascript). Para ambos casos, se tienen plantillas",(0,i.kt)("a",{parentName:"p",href:"#referencias"},"\xb9")," en el Github de la organizaci\xf3n, las cuales poseen un c\xf3digo esqueleto, los manifiestos necesarios para CI/CD en Github Actions y Kubernetes, y un Readme con instrucciones de configuraci\xf3n y ejecuci\xf3n local."),(0,i.kt)("h3",{id:"-usuarios"},"\ud83d\udc64 Usuarios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://users-service-manuelbilbao.cloud.okteto.net/docs"},"API Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/users-service"},"Github Repo"))),(0,i.kt)("h3",{id:"-m\xfasica"},"\ud83c\udfb5 M\xfasica"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://music-service-manuelbilbao.cloud.okteto.net/docs"},"API Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/music-service"},"Github Repo"))),(0,i.kt)("h3",{id:"-pagos"},"\ud83d\udcb0 Pagos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://payments-service-manuelbilbao.cloud.okteto.net/docs"},"API Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/payments-service"},"Github Repo"))),(0,i.kt)("h3",{id:"-feedback"},"\u2b50 Feedback"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://feedback-service-manuelbilbao.cloud.okteto.net/docs"},"API Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/feedback-service"},"Github Repo"))),(0,i.kt)("h2",{id:"api-gateway"},"API Gateway"),(0,i.kt)("p",null,"La misma sirve como intermediaria entre los microservicios y los usuarios (clientes y administradores) a fin de mantenerlos aislados. De esta forma, no es necesario exponer los microservicios a internet y se puede conseguir una mayor seguridad. Est\xe1 desarrollado con ",(0,i.kt)("a",{parentName:"p",href:"https://www.fastify.io/"},"Fastify"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://api-gateway-manuelbilbao.cloud.okteto.net/docs"},"API Docs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/api-gateway-mobile"},"Github Repo"))),(0,i.kt)("h2",{id:"monitoreo"},"Monitoreo"),(0,i.kt)("p",null,"Para monitorear las peticiones y respuestas de los microservicios y el API Gateway, utilizamos el servicio de ",(0,i.kt)("a",{parentName:"p",href:"https://www.datadoghq.com/"},"Datadog"),", el cual nos brinda un poderoso ",(0,i.kt)("em",{parentName:"p"},"log"),", adem\xe1s de m\xe9tricas muy \xfatiles."),(0,i.kt)("p",null,"Tambi\xe9n usamos ",(0,i.kt)("a",{parentName:"p",href:"https://upptime.js.org/"},"Upptime")," para tener un seguimiento del estado de los microservicios, verificando que los servidores est\xe9n activos y guardando su tiempo de respuesta. Esta herramienta tambi\xe9n nos permite configurar el env\xedo de notificaciones en caso de detectar la baja de un microservicio, y su subsiguiente alta. En nuestro caso, utilizamos esta funci\xf3n para enviar notificaciones a nuestro servidor de Discord."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Captura de Discord donde se ven las notificaciones de Upptime",src:a(3544).Z,width:"1054",height:"500"})),(0,i.kt)("h2",{id:"referencias"},"Referencias"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plantilla FastAPI: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/template-fastapi"},"Github Repo")),(0,i.kt)("li",{parentName:"ul"},"Plantilla Fastify: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GrupoX-FIUBA/template-fastify"},"Github Repo"))))}p.isMDXComponent=!0},3544:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/upptime-f7a72b3d9c80c8d599bb0b6278dbdb4d.png"}}]);