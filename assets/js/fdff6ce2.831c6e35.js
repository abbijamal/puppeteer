"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17805],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,y=m["".concat(u,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<p;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33151:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return l},default:function(){return m}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],c={},u=void 0,i={unversionedId:"puppeteer.executioncontext.queryobjects",id:"version-9.1.1/puppeteer.executioncontext.queryobjects",isDocsHomePage:!1,title:"puppeteer.executioncontext.queryobjects",description:"Home &gt; puppeteer &gt; ExecutionContext &gt; queryObjects",source:"@site/versioned_docs/version-9.1.1/puppeteer.executioncontext.queryobjects.md",sourceDirName:".",slug:"/puppeteer.executioncontext.queryobjects",permalink:"/puppeteer/docs/9.1.1/puppeteer.executioncontext.queryobjects",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-9.1.1/puppeteer.executioncontext.queryobjects.md",version:"9.1.1",frontMatter:{},sidebar:"version-9.1.1/docs",previous:{title:"puppeteer.executioncontext.frame",permalink:"/puppeteer/docs/9.1.1/puppeteer.executioncontext.frame"},next:{title:"puppeteer.jshandle",permalink:"/puppeteer/docs/9.1.1/puppeteer.jshandle"}},l=[{value:"ExecutionContext.queryObjects() method",id:"executioncontextqueryobjects-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.executioncontext"},"ExecutionContext")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.executioncontext.queryobjects"},"queryObjects")),(0,p.kt)("h2",{id:"executioncontextqueryobjects-method"},"ExecutionContext.queryObjects() method"),(0,p.kt)("p",null,"This method iterates the JavaScript heap and finds all the objects with the given prototype."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"queryObjects(prototypeHandle: JSHandle): Promise<JSHandle>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"prototypeHandle"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/9.1.1/puppeteer.jshandle"},"JSHandle")),(0,p.kt)("td",{parentName:"tr",align:null},"a handle to the object prototype")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/9.1.1/puppeteer.jshandle"},"JSHandle"),">"),(0,p.kt)("p",null,"A handle to an array of objects with the given prototype."),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("h2",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"// Create a Map object\nawait page.evaluate(() => window.map = new Map());\n// Get a handle to the Map object prototype\nconst mapPrototype = await page.evaluateHandle(() => Map.prototype);\n// Query all map instances into an array\nconst mapInstances = await page.queryObjects(mapPrototype);\n// Count amount of map objects in heap\nconst count = await page.evaluate(maps => maps.length, mapInstances);\nawait mapInstances.dispose();\nawait mapPrototype.dispose();\n\n")))}m.isMDXComponent=!0}}]);