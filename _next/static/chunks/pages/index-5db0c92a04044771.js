(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(85)}])},5677:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let r=o.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=n({},a,e)),a=n({},a,t);let s=a.loader,u=()=>null!=s?s().then(i):Promise.resolve(i(()=>null));return(a.loadableGenerated&&(a=n({},a,a.loadableGenerated),delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r(n({},a,{loader:u})):(delete a.webpack,delete a.modules,l(r,a))},t.noSSR=l;var n=r(6495).Z,a=r(2648).Z,o=(a(r(7294)),a(r(8976)));function i(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},438:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var n=(0,r(2648).Z)(r(7294));let a=n.default.createContext(null);t.LoadableContext=a},8976:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(6495).Z,a=(0,r(2648).Z)(r(7294)),o=r(438);let i=[],l=[],s=!1;function u(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class c{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),n=null;function i(){if(!n){let t=new c(e,r);n={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return n.promise()}if(!s){let e=r.webpack?r.webpack():r.modules;e&&l.push(t=>{for(let r of e)if(-1!==t.indexOf(r))return i()})}function u(e,t){!function(){i();let e=a.default.useContext(o.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let l=a.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:n.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(r.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:n.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return u.preload=()=>i(),u.displayName="LoadableComponent",a.default.forwardRef(u)}(u,e)}function f(e,t){let r=[];for(;e.length;){let n=e.pop();r.push(n(t))}return Promise.all(r).then(()=>{if(e.length)return f(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{f(i).then(e,t)}),d.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let r=()=>(s=!0,t());f(l,e).then(r,r)})},window.__NEXT_PRELOADREADY=d.preloadReady,t.default=d},8425:function(e,t,r){"use strict";var n=r(5893),a=r(9008),o=r.n(a);r(7294);var i=r(1864),l=r.n(i);let s=e=>{let{title:t,description:r,imageUrl:a,pageUrl:i}=e;return a=a&&""!==a?l().join("/assets/",a):"",(0,n.jsxs)(o(),{children:[(0,n.jsx)("title",{children:"".concat(t," | ").concat("Dryadsoft")}),(0,n.jsx)("meta",{name:"title",content:"".concat(t," | ").concat("Dryadsoft")}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, height=device-height, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0"}),(0,n.jsx)("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge, chrome=1"}),(0,n.jsx)("meta",{httpEquiv:"imagetoolbar",content:"no"}),(0,n.jsx)("link",{rel:"sitemap",type:"application/xml",href:"/sitemap.xml"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"image_src",href:a}),(0,n.jsx)("meta",{itemProp:"image",content:a}),(0,n.jsx)("link",{rel:"icon",type:"image/png",href:"/favicon.ico"}),(0,n.jsx)("link",{rel:"apple-touch-icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"referrer",content:"always"}),(0,n.jsx)("link",{rel:"canonical",href:i}),(0,n.jsx)("meta",{name:"robots",content:"all"}),(0,n.jsx)("meta",{name:"by",content:"Admin"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:i})," /",(0,n.jsx)("meta",{property:"og:article:author",content:"Admin"}),(0,n.jsx)("meta",{property:"og:site_name",content:"Dryadsoft"}),(0,n.jsx)("meta",{property:"og:image",content:a}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(t," | ").concat("Dryadsoft")}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:"".concat(t," | ").concat("Dryadsoft")}),(0,n.jsx)("meta",{name:"twitter:description",content:r}),(0,n.jsx)("meta",{name:"twitter:image",content:a}),(0,n.jsx)("meta",{name:"twitter:creator",content:"Admin"}),(0,n.jsx)("meta",{name:"twitter:site",content:i}),(0,n.jsx)("meta",{property:"fb:pages",content:"Dryadsoft"})]})};t.Z=s},85:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c}});var n=r(5893),a=r(8425),o=r(5152),i=r.n(o);let l=i()(()=>r.e(135).then(r.bind(r,3135)),{loadableGenerated:{webpack:()=>[3135]},ssr:!1}),s=i()(()=>Promise.all([r.e(755),r.e(713)]).then(r.bind(r,2713)),{loadableGenerated:{webpack:()=>[2713]},ssr:!1}),u=e=>{let{list:t,metaData:r,navList:o}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{title:"Home",description:"This site provides Dryadsoft's apps information.",pageUrl:r.pageUrl}),1===o.length?(0,n.jsx)(l,{list:t}):t.map((e,t)=>(0,n.jsx)(s,{datas:e},t))]})};var c=!0;t.default=u},1864:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",a=0,o=-1,i=0,l=0;l<=e.length;++l){if(l<e.length)r=e.charCodeAt(l);else if(47===r)break;else r=47;if(47===r){if(o===l-1||1===i);else if(o!==l-1&&2===i){if(n.length<2||2!==a||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",a=0):a=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),o=l,i=0;continue}}else if(2===n.length||1===n.length){n="",a=0,o=l,i=0;continue}}t&&(n.length>0?n+="/..":n="..",a=2)}else n.length>0?n+="/"+e.slice(o+1,l):n=e.slice(o+1,l),a=l-o-1;o=l,i=0}else 46===r&&-1!==i?++i:i=-1}return n}var n={resolve:function(){for(var e,n,a="",o=!1,i=arguments.length-1;i>=-1&&!o;i--)i>=0?n=arguments[i]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(a=n+"/"+a,o=47===n.charCodeAt(0));return(a=r(a,!o),o)?a.length>0?"/"+a:"/":a.length>0?a:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),a=47===e.charCodeAt(e.length-1);return(0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&a&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var a=arguments[r];t(a),a.length>0&&(void 0===e?e=a:e+="/"+a)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var a=1;a<e.length&&47===e.charCodeAt(a);++a);for(var o=e.length,i=o-a,l=1;l<r.length&&47===r.charCodeAt(l);++l);for(var s=r.length-l,u=i<s?i:s,c=-1,d=0;d<=u;++d){if(d===u){if(s>u){if(47===r.charCodeAt(l+d))return r.slice(l+d+1);if(0===d)return r.slice(l+d)}else i>u&&(47===e.charCodeAt(a+d)?c=d:0===d&&(c=0));break}var f=e.charCodeAt(a+d);if(f!==r.charCodeAt(l+d))break;47===f&&(c=d)}var h="";for(d=a+c+1;d<=o;++d)(d===o||47===e.charCodeAt(d))&&(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(l+c):(l+=c,47===r.charCodeAt(l)&&++l,r.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,a=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(r=e.charCodeAt(i))){if(!o){a=i;break}}else o=!1;return -1===a?n?"/":".":n&&1===a?"//":e.slice(0,a)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,a=0,o=-1,i=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var l=r.length-1,s=-1;for(n=e.length-1;n>=0;--n){var u=e.charCodeAt(n);if(47===u){if(!i){a=n+1;break}}else -1===s&&(i=!1,s=n+1),l>=0&&(u===r.charCodeAt(l)?-1==--l&&(o=n):(l=-1,o=s))}return a===o?o=s:-1===o&&(o=e.length),e.slice(a,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!i){a=n+1;break}}else -1===o&&(i=!1,o=n+1);return -1===o?"":e.slice(a,o)},extname:function(e){t(e);for(var r=-1,n=0,a=-1,o=!0,i=0,l=e.length-1;l>=0;--l){var s=e.charCodeAt(l);if(47===s){if(!o){n=l+1;break}continue}-1===a&&(o=!1,a=l+1),46===s?-1===r?r=l:1!==i&&(i=1):-1!==r&&(i=-1)}return -1===r||-1===a||0===i||1===i&&r===a-1&&r===n+1?"":e.slice(r,a)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var a=e.charCodeAt(0),o=47===a;o?(n.root="/",r=1):r=0;for(var i=-1,l=0,s=-1,u=!0,c=e.length-1,d=0;c>=r;--c){if(47===(a=e.charCodeAt(c))){if(!u){l=c+1;break}continue}-1===s&&(u=!1,s=c+1),46===a?-1===i?i=c:1!==d&&(d=1):-1!==i&&(d=-1)}return -1===i||-1===s||0===d||1===d&&i===s-1&&i===l+1?-1!==s&&(0===l&&o?n.base=n.name=e.slice(1,s):n.base=n.name=e.slice(l,s)):(0===l&&o?(n.name=e.slice(1,i),n.base=e.slice(1,s)):(n.name=e.slice(l,i),n.base=e.slice(l,s)),n.ext=e.slice(i,s)),l>0?n.dir=e.slice(0,l-1):o&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}},i=!0;try{t[e](o,o.exports,n),i=!1}finally{i&&delete r[e]}return o.exports}n.ab="//";var a=n(114);e.exports=a}()},5152:function(e,t,r){e.exports=r(5677)},9008:function(e,t,r){e.exports=r(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);