"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88026],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=p,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},l),{},{components:r})):n.createElement(k,o({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45743:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return l},default:function(){return c}});var n=r(87462),p=r(63366),a=(r(67294),r(3905)),o=["components"],i={},s=void 0,u={unversionedId:"puppeteer.keyboard.press",id:"version-10.1.0/puppeteer.keyboard.press",isDocsHomePage:!1,title:"puppeteer.keyboard.press",description:"Home &gt; puppeteer &gt; Keyboard &gt; press",source:"@site/versioned_docs/version-10.1.0/puppeteer.keyboard.press.md",sourceDirName:".",slug:"/puppeteer.keyboard.press",permalink:"/puppeteer/docs/puppeteer.keyboard.press",editUrl:"https://github.com/facebook/puppeteer/edit/main/website/versioned_docs/version-10.1.0/puppeteer.keyboard.press.md",version:"10.1.0",frontMatter:{},sidebar:"version-10.1.0/docs",previous:{title:"puppeteer.keyboard.down",permalink:"/puppeteer/docs/puppeteer.keyboard.down"},next:{title:"puppeteer.keyboard.sendcharacter",permalink:"/puppeteer/docs/puppeteer.keyboard.sendcharacter"}},l=[{value:"Keyboard.press() method",id:"keyboardpress-method",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Remarks",id:"remarks",children:[]}],d={toc:l};function c(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/index"},"Home")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer"},"puppeteer")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard"},"Keyboard")," ",">"," ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.press"},"press")),(0,a.kt)("h2",{id:"keyboardpress-method"},"Keyboard.press() method"),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.down"},"Keyboard.down()")," and ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.up"},"Keyboard.up()"),"."),(0,a.kt)("b",null,"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"press(key: KeyInput, options?: {\n        delay?: number;\n        text?: string;\n    }): Promise<void>;\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"key"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyinput"},"KeyInput")),(0,a.kt)("td",{parentName:"tr",align:null},"Name of key to press, such as ",(0,a.kt)("code",null,"ArrowLeft"),". See ",(0,a.kt)("a",{parentName:"td",href:"/puppeteer/docs/puppeteer.keyinput"},"KeyInput")," for a list of all key names.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ delay?: number; text?: string; }"),(0,a.kt)("td",{parentName:"tr",align:null},"An object of options. Accepts text which, if specified, generates an input event with this text. Accepts delay which, if specified, is the time to wait between ",(0,a.kt)("code",null,"keydown")," and ",(0,a.kt)("code",null,"keyup")," in milliseconds. Defaults to 0.")))),(0,a.kt)("b",null,"Returns:"),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"key")," is a single character and no modifier keys besides ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," are being held down, a ",(0,a.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"input")," event will also generated. The ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," option can be specified to force an input event to be generated."),(0,a.kt)("p",null,"Modifier keys DO effect ",(0,a.kt)("a",{parentName:"p",href:"/puppeteer/docs/puppeteer.keyboard.press"},"Keyboard.press()"),". Holding down ",(0,a.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))}c.isMDXComponent=!0}}]);