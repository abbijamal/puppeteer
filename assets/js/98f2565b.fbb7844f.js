"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62613],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),f=u(r),s=a,d=f["".concat(l,".").concat(s)]||f[s]||c[s]||p;return r?n.createElement(d,o(o({ref:t},m),{},{components:r})):n.createElement(d,o({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},78309:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},l=void 0,u={unversionedId:"puppeteer.frame.waitforxpath",id:"puppeteer.frame.waitforxpath",isDocsHomePage:!1,title:"puppeteer.frame.waitforxpath",description:"Home &gt; puppeteer &gt; Frame &gt; waitForXPath",source:"@site/docs/puppeteer.frame.waitforxpath.md",sourceDirName:".",slug:"/puppeteer.frame.waitforxpath",permalink:"/puppeteer/docs/next/puppeteer.frame.waitforxpath",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/docs/puppeteer.frame.waitforxpath.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"puppeteer.frame.waitfortimeout",permalink:"/puppeteer/docs/next/puppeteer.frame.waitfortimeout"},next:{title:"puppeteer.filechooser",permalink:"/puppeteer/docs/next/puppeteer.filechooser"}},m=[{value:"Frame.waitForXPath() method",id:"framewaitforxpath-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],c={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.waitforxpath"},"waitForXPath")),(0,p.kt)("h2",{id:"framewaitforxpath-method"},"Frame.waitForXPath() method"),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"waitForXPath(xpath: string, options?: WaitForSelectorOptions): Promise<ElementHandle | null>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"xpath"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"the XPath expression to wait for.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/next/puppeteer.waitforselectoroptions"},"WaitForSelectorOptions")),(0,p.kt)("td",{parentName:"tr",align:null},"options to configure the visiblity of the element and how long to wait before timing out.")))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.elementhandle"},"ElementHandle")," ","|"," null",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"Wait for the ",(0,p.kt)("inlineCode",{parentName:"p"},"xpath")," to appear in page. If at the moment of calling the method the ",(0,p.kt)("inlineCode",{parentName:"p"},"xpath")," already exists, the method will return immediately. If the xpath doesn't appear after the ",(0,p.kt)("inlineCode",{parentName:"p"},"timeout")," milliseconds of waiting, the function will throw."),(0,p.kt)("p",null,"For a code example, see the example for ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/next/puppeteer.frame.waitforselector"},"Frame.waitForSelector()"),". That function behaves identically other than taking a CSS selector rather than an XPath."))}f.isMDXComponent=!0}}]);