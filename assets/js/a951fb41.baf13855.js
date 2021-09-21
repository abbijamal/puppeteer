"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48220],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4264:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),p=["components"],i={},u=void 0,c={unversionedId:"puppeteer.browsercontextemittedevents",id:"puppeteer.browsercontextemittedevents",isDocsHomePage:!1,title:"puppeteer.browsercontextemittedevents",description:"Home &gt; puppeteer &gt; BrowserContextEmittedEvents",source:"@site/docs/puppeteer.browsercontextemittedevents.md",sourceDirName:".",slug:"/puppeteer.browsercontextemittedevents",permalink:"/puppeteer/docs/next/puppeteer.browsercontextemittedevents",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.browsercontextemittedevents.md",version:"current",frontMatter:{}},l=[{value:"BrowserContextEmittedEvents enum",id:"browsercontextemittedevents-enum",children:[]},{value:"Enumeration Members",id:"enumeration-members",children:[]}],s={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.browsercontextemittedevents"},"BrowserContextEmittedEvents")),(0,o.kt)("h2",{id:"browsercontextemittedevents-enum"},"BrowserContextEmittedEvents enum"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare const enum BrowserContextEmittedEvents \n")),(0,o.kt)("h2",{id:"enumeration-members"},"Enumeration Members"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Member"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TargetChanged"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,'"',"targetchanged",'"')),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when the url of a target inside the browser context changes. Contains a ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TargetCreated"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,'"',"targetcreated",'"')),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when a target is created within the browser context, for example when a new page is opened by ",(0,o.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/open"},"window.open")," or by ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.browsercontext.newpage"},"browserContext.newPage"),"Contains a ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"TargetDestroyed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,'"',"targetdestroyed",'"')),(0,o.kt)("td",{parentName:"tr",align:null},"Emitted when a target is destroyed within the browser context, for example when a page is closed. Contains a ",(0,o.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.target"},"Target")," instance.")))))}d.isMDXComponent=!0}}]);