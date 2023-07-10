"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45641],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(t),f=o,w=b["".concat(i,".").concat(f)]||b[f]||u[f]||s;return t?n.createElement(w,a(a({ref:r},c),{},{components:t})):n.createElement(w,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=b;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<s;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},84818:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>c});t(67294);var n=t(3905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const a={sidebar_label:"InstalledBrowser"},l="InstalledBrowser type",i={unversionedId:"browsers-api/browsers.installedbrowser",id:"browsers-api/browsers.installedbrowser",title:"InstalledBrowser type",description:"Signature:",source:"@site/../docs/browsers-api/browsers.installedbrowser.md",sourceDirName:"browsers-api",slug:"/browsers-api/browsers.installedbrowser",permalink:"/next/browsers-api/browsers.installedbrowser",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"InstalledBrowser"},sidebar:"browsersApi",previous:{title:"GetInstalledBrowsersOptions",permalink:"/next/browsers-api/browsers.getinstalledbrowsersoptions"},next:{title:"InstallOptions",permalink:"/next/browsers-api/browsers.installoptions"}},p={},c=[{value:"Signature:",id:"signature",level:4}],u={toc:c};function b(e){var{components:r}=e,t=s(e,["components"]);return(0,n.kt)("wrapper",o({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"installedbrowser-type"}),"InstalledBrowser type"),(0,n.kt)("h4",o({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"export type InstalledBrowser = {\n  path: string;\n  browser: Browser;\n  buildId: string;\n  platform: BrowserPlatform;\n};\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"References:")," ",(0,n.kt)("a",o({parentName:"p"},{href:"/next/browsers-api/browsers.browser"}),"Browser"),", ",(0,n.kt)("a",o({parentName:"p"},{href:"/next/browsers-api/browsers.browserplatform"}),"BrowserPlatform")))}b.isMDXComponent=!0}}]);