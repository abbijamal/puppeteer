"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75993],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||p;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},26045:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=r(87462),a=r(63366),p=(r(67294),r(3905)),o=["components"],i={},l=void 0,c={unversionedId:"puppeteer.frame.click",id:"version-10.0.0/puppeteer.frame.click",isDocsHomePage:!1,title:"puppeteer.frame.click",description:"Home &gt; puppeteer &gt; Frame &gt; click",source:"@site/versioned_docs/version-10.0.0/puppeteer.frame.click.md",sourceDirName:".",slug:"/puppeteer.frame.click",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.click",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.0.0/puppeteer.frame.click.md",version:"10.0.0",frontMatter:{},sidebar:"version-10.0.0/docs",previous:{title:"puppeteer.frame.childframes",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.childframes"},next:{title:"puppeteer.frame.content",permalink:"/puppeteer/docs/10.0.0/puppeteer.frame.content"}},u=[{value:"Frame.click() method",id:"frameclick-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],m={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/index"},"Home")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer"},"puppeteer")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame"},"Frame")," ",">"," ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.frame.click"},"click")),(0,p.kt)("h2",{id:"frameclick-method"},"Frame.click() method"),(0,p.kt)("p",null,"This method clicks the first element found that matches ",(0,p.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,p.kt)("b",null,"Signature:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"click(selector: string, options?: {\n        delay?: number;\n        button?: MouseButton;\n        clickCount?: number;\n    }): Promise<void>;\n")),(0,p.kt)("h2",{id:"parameters"},"Parameters"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,p.kt)("th",{parentName:"tr",align:null},"Type"),(0,p.kt)("th",{parentName:"tr",align:null},"Description"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"selector"),(0,p.kt)("td",{parentName:"tr",align:null},"string"),(0,p.kt)("td",{parentName:"tr",align:null},"the selector to search for to click. If there are multiple elements, the first will be clicked.")),(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:null},"options"),(0,p.kt)("td",{parentName:"tr",align:null},"{ delay?: number; button?: ",(0,p.kt)("a",{parentName:"td",href:"/puppeteer/docs/10.0.0/puppeteer.mousebutton"},"MouseButton"),"; clickCount?: number; }"),(0,p.kt)("td",{parentName:"tr",align:null})))),(0,p.kt)("b",null,"Returns:"),(0,p.kt)("p",null,"Promise","<","void",">"),(0,p.kt)("h2",{id:"remarks"},"Remarks"),(0,p.kt)("p",null,"This method scrolls the element into view if needed, and then uses ",(0,p.kt)("a",{parentName:"p",href:"/puppeteer/docs/10.0.0/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If there's no element matching ",(0,p.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,p.kt)("p",null,"Bear in mind that if ",(0,p.kt)("inlineCode",{parentName:"p"},"click()")," triggers a navigation event and there's a separate ",(0,p.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-javascript"},"const [response] = await Promise.all([\n  page.waitForNavigation(waitOptions),\n  frame.click(selector, clickOptions),\n]);\n\n")))}s.isMDXComponent=!0}}]);