(this["webpackJsonpneiderruizz-portafolio"]=this["webpackJsonpneiderruizz-portafolio"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(14),r=n.n(a),l=(n(20),n(6)),s=n(2),o=(n(21),n(13)),d=n(9),x=n(0),j=function(e){var t=e.icon,n=e.link;return Object(x.jsx)("a",{href:n,className:"text-lg",target:"_blank",rel:"noopener noreferrer",children:Object(x.jsx)(d.a,{icon:t})})},p=n(7),b=[{icon:p.a,link:"https://www.facebook.com/neiderruizz/"},{icon:p.f,link:"https://www.tiktok.com/@neiderruiz_"},{icon:p.e,link:"https://t.me/neiderruiz"},{icon:p.b,link:"https://github.com/neiderruiz"},{icon:p.g,link:"https://www.youtube.com/channel/UCo44eEtlEssCZAdAbnxeqFQ"},{icon:p.c,link:"https://www.instagram.com/neiderruiz_/"},{icon:p.d,link:"https://www.linkedin.com/in/neiderruiz"}],h=function(){return Object(x.jsxs)("footer",{className:"mt-20 space-y-5 py-10",children:[Object(x.jsx)("div",{className:"flex justify-between lg:w-2/12 w-2/3 mx-auto text-purple-800",children:b.map((function(e,t){return Object(x.jsx)(j,{icon:e.icon,link:e.link},t)}))}),Object(x.jsxs)("div",{className:"text-center",children:["\xa9 Neider Ruiz ",(new Date).getFullYear()]})]})},u=n(5),m=n(15),g=[{name:"Inicio",path:"/",exact:!0},{name:"Blog",path:"https://neiderruiz.com",exact:!0,external:!0}],f=function(){var e=Object(i.useState)(),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(u.a)(a,2),s=r[0],o=r[1],j=Object(i.useState)(!1),p=Object(u.a)(j,2),b=p[0],h=p[1];return Object(i.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>0?c(window.scrollY):c(0),window.innerWidth>800?o(!1):o(!0)}))}),[]),Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"".concat(n?"lg:bg-purple-600 shadow-lg transition delay-50 duration-50 ease-in-out":null," flex fixed lg:justify-between flex-wrap lg:px-40 px-5 py-2 bg-purple-600 lg:bg-transparent w-full lg:h-20 items-center text-white"),children:[Object(x.jsx)(l.b,{to:"/",children:Object(x.jsx)("h1",{className:"lg:text-3xl text-2xl font-bold ".concat(n?"lg:text-white":"lg:text-purple-600"),children:"Neider Ruiz"})}),Object(x.jsx)("div",{className:"w-3/6 lg:hidden text-right",children:Object(x.jsx)("button",{role:"navigation",onClick:function(){return h(!b)},children:Object(x.jsx)(d.a,{icon:m.a,className:"".concat(s?"lg:hidden":"lg:block"," text-2xl")})})}),Object(x.jsx)("div",{className:"w-1/6 px-10 lg:flex justify-between font-bold lg:show hidden",children:g.map((function(e,t){return(null===e||void 0===e?void 0:e.external)?Object(x.jsx)("a",{href:e.path,className:"text-white",children:e.name},t):Object(x.jsx)(l.b,{className:"text-white capitalize",to:e.path,children:e.name},t)}))}),b?Object(x.jsx)("div",{className:"w-full font-bold space-y-5 mt-5",children:g.map((function(e,t){return Object(x.jsx)("div",{children:Object(x.jsx)(l.b,{className:"text-white capitalize w-full",to:e.path,children:e.name})},t)}))}):null]})})},w=function(e){var t=e.children;return Object(x.jsxs)("div",{className:"bg-background",children:[Object(x.jsx)(f,{}),t,Object(x.jsx)(h,{})]})},O=n.p+"static/media/hero-neider.9a5f1617.png",v=n.p+"static/media/hero-mobile.88e306c4.png",y=function(e){var t,n=e.text,i=e.to,c=e.type,a=e.external;if("secondary"===c)t="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white text-white py-2 px-4 border-2";else t="bg-purple-600 hover:bg-purple-700 text-white";return Object(x.jsx)("div",{children:a?Object(x.jsx)("a",{href:i,target:"_blank",rel:"noreferrer",className:"".concat(t," button py-3 px-6 rounded-lg font-bold transition delay-150 duration-300 ease-in-out"),children:n}):Object(x.jsx)(l.b,{rel:"noopener noreferrer",to:i||"/",className:"".concat(t," button py-3 px-6 rounded-lg font-bold transition delay-150 duration-300 ease-in-out"),children:n})})},k=function(){return Object(x.jsxs)("div",{className:"lg:grid lg:grid-cols-3 lg:h-screen lg:pl-40 flex flex-wrap-reverse",children:[Object(x.jsxs)("div",{className:"lg:col-span-1 lg:space-y-10 space-y-10 lg:my-auto lg:mx-0 mt-10 mx-3",children:[Object(x.jsx)("h3",{className:"text-purple-600 lg:text-3xl lg:text-left text-center",children:"Desarrollador web"}),Object(x.jsx)("h2",{className:"font-bold lg:text-5xl text-3xl",children:"Hola,  Mi nombre es Neider Ruiz"}),Object(x.jsx)("p",{className:"text-gray-800 text-2xl",children:"Soy un apasionado por la programaci\xf3n, con muchas ganas de mejorar y aprender d\xeda tras d\xeda con el objetivo de aportar valor a mi equipo de trabajo, ser mejor persona y ser mejor en mi profesi\xf3n."}),Object(x.jsxs)("div",{className:"space-x-4 lg:text-left flex lg:justify-start justify-center",children:[Object(x.jsx)(y,{text:"Projectos",to:"#"}),Object(x.jsx)(y,{text:"LinkedIn",to:"https://www.linkedin.com/in/neiderruiz",type:"secondary",external:!0})]})]}),Object(x.jsx)("div",{className:"lg:col-span-2 flex justify-end lg:mt-0 mt-5",children:Object(x.jsx)("img",{srcSet:"".concat(v," 320w,\n             ").concat(v," 480w,\n             ").concat(O," 900w"),sizes:"(max-width: 480px) 480px, (max-width: 900px) 900px, 900px",src:O,alt:"hero neider"})})]})},N=function(e){var t=e.text;return Object(x.jsxs)("div",{className:"my-10",children:[Object(x.jsx)("h3",{className:"text-center font-bold text-4xl capitalize",children:t}),Object(x.jsx)("hr",{className:"h-1 mt-2 bg-red-400 w-12 mx-auto rounded-full"})]})},z=n.p+"static/media/akunaipa-web.0509a8dc.png",A=n.p+"static/media/landing-page-one.8f0876be.png",F=function(e){var t=e.title,n=e.description,i=e.image,c=e.link;e.linkText;return Object(x.jsxs)("div",{className:"lg:w-8/12 h-auto mx-auto lg:grid lg:grid-cols-2 bg-white rounded-2xl shadow-sm flex flex-wrap-reverse",children:[Object(x.jsxs)("div",{className:"my-auto space-y-5 px-10",children:[Object(x.jsx)("h3",{className:"text-2xl text-purple-600 font-bold",children:t}),Object(x.jsx)("p",{className:"",children:n}),Object(x.jsx)("div",{children:Object(x.jsx)(y,{external:!0,type:"secondary",text:"Ver web",to:c})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"lg:h-72 w-full",src:i,alt:"lo"})})]})},S=[{title:"Akunaipa",description:"A web application for the Akunaipa project, a non-profit organization that provides education and health services to the people of the country.",image:z,link:"https://akunaipa.com.co/",linkText:"Visit the website"},{title:"LandingPage",description:"A web application for the Akunaipa project, a non-profit organization that provides education and health services to the people of the country.",image:A,link:"https://neiderruiz.github.io/landing-page/",linkText:"Visit the website"}],C=function(){return Object(x.jsxs)(w,{children:[Object(x.jsx)(k,{}),Object(x.jsx)(N,{text:"Projects"}),Object(x.jsx)("div",{className:"space-y-14",children:S.map((function(e,t){return Object(i.createElement)(F,Object(o.a)(Object(o.a)({},e),{},{key:t}))}))})]})},E=function(){return Object(x.jsx)(l.a,{children:Object(x.jsx)(s.c,{children:Object(x.jsx)(s.a,{path:"/",element:Object(x.jsx)(C,{})})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(E,{})}),document.getElementById("root")),L()}},[[28,1,2]]]);
//# sourceMappingURL=main.fd83a947.chunk.js.map