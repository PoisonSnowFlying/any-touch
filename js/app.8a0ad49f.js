(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],p=0,l=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&l.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-68713e03":"8997c170","chunk-c1e96264":"a625f7ac"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-68713e03":1,"chunk-c1e96264":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-68713e03":"995ac5f3","chunk-c1e96264":"4b005915"}[t]+".css",o=c.p+r,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===r||p===o))return e()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],p=u.getAttribute("data-href");if(p===r||p===o)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],h.parentNode.removeChild(h),n(a)},h.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(h)})).then((function(){i[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=s(t);var l=new Error;u=function(e){p.onerror=p.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var h=p;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("2dad"),i=n.n(r);i.a},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},o=[],a={name:"App"},s=a,c=(n("5c0b"),n("2877")),u=Object(c["a"])(s,i,o,!1,null,null,null),p=u.exports,l=(n("d3b7"),n("8c4f")),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("header",[t._m(0),n("a",{staticClass:"link",attrs:{target:"_new",href:"https://github.com/any86/any-touch"}},[t._v("文档")]),n("router-link",{staticClass:"link",attrs:{to:"/topology"}},[t._v("拓扑图")]),n("router-link",{staticClass:"link",attrs:{to:"/diy"}},[t._v("canvas")])],1),n("article",{ref:"panel",staticClass:"panel"},t._l(t.styles,(function(e,r){var i=e.top,o=e.left,a=e.zIndex,s=e.scale,c=e.angle;return n("div",{key:r,ref:"circle",refInFor:!0,class:["circle"],style:{top:i,left:o,zIndex:a,transform:"scale("+s+") rotate("+c+"deg)"},attrs:{index:r},on:{"at:touch":t.onTouch,"at:after":function(e){return t.onAfter(e,r)},panstart:function(e){return t.onPanstart(e,r)},panmove:function(e){return t.onPanmove(e,r)},pandown:function(e){return t.onPandown(e,r)},swipe:function(e){return t.onSwipe(e,r)},pinch:function(e){e.match()&&t.onPinch(e,r)},rotate:function(e){e.match()&&t.onRotate(e,r)},transitionend:function(e){return t.onTransitionend(e,r)}}},[n("p",{staticStyle:{"font-size":"16px","border-bottom":"1px dashed #fff"}},[t._v("👋可拖拽 / 缩放等...")]),n("p",[t._v("Top: "+t._s(i))]),n("p",[t._v("Left: "+t._s(o))]),n("p",[t._v("Scale: "+t._s(s))]),n("p",[t._v("Angle: "+t._s(c))])])})),0),n("article",{staticClass:"info"},[t.data.type?[n("h1",[t._v(t._s(t.data.type))]),n("table",[t._m(1),t._l(t.map,(function(e){var r=e.key,i=e.desc;return t.data[r]?n("tr",{key:r},[n("td",[t._v(t._s(r))]),n("td",[t._v(t._s(t.data[r]))]),n("td",[t._v(t._s(i))])]):t._e()}))],2)]:n("h1",[t._v("👋请拖拽 / 点击 / 按压 / 划 / 缩放 / 旋转")]),n("span",{staticClass:"btn-add",on:{click:t.add}},[t._v("添加一个(第"+t._s(t.styles.length+1)+"个)")])],2),t._m(2)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{target:"_new",href:"https://github.com/any86/any-touch"}},[n("img",{attrs:{width:"100",src:"https://img.shields.io/github/stars/any86/any-touch?style=social"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{attrs:{align:"left"}},[n("th",[t._v("键值")]),n("th",[t._v("值")]),n("th",[t._v("说明")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"tip"},[t._v(" 👋 支持6类手势: "),n("span",[t._v("tap(点击)")]),n("span",[t._v("press(按)")]),n("span",[t._v("pan(拖拽)")]),n("span",[t._v("swipe(划)")]),n("span",[t._v("pinch(捏合)")]),n("span",[t._v("rotate(旋转)")])])}],f=(n("99af"),n("e02c")),v=n.n(f);function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#000",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#fff";console.log("%c".concat(t),"color:".concat(n,";background-color:").concat(e,";padding:2px 6px;border-radius:4px;"))}var m={name:"Home",data:function(){return{map:[{key:"baseType",desc:"基础事件名"},{key:"x",desc:"触点中心X坐标"},{key:"y",desc:"触点中心Y坐标"},{key:"deltaX",desc:"X轴位移增量"},{key:"deltaY",desc:"Y轴位移增量"},{key:"displacementX",desc:"X轴位移(矢量)"},{key:"displacementY",desc:"Y轴位移(矢量)"},{key:"distanceX",desc:"X轴移动距离"},{key:"distanceY",desc:"Y轴移动距离"},{key:"distance",desc:"X轴Y轴的合距离"},{key:"speedX",desc:"X轴移动速度(矢量)"},{key:"speedY",desc:"Y轴移动速度(矢量)"},{key:"velocityX",desc:"X轴移动速率"},{key:"velocityY",desc:"Y轴移动速率"},{key:"deltaScale",desc:"每次触发pinch的缩放增量"},{key:"scale",desc:"一个识别周期pinch的累计缩放量"},{key:"deltaAngle",desc:"每次触发rotate的选装增量"},{key:"angle",desc:"一个识别周期rotate的累计选装量"}],action:"",data:{},styles:[{left:"50px",top:"160px",zIndex:1,scale:1,angle:0},{left:"50px",top:"320px",zIndex:1,scale:1,angle:0},{left:"50px",top:"480px",zIndex:1,scale:1,angle:0}]}},mounted:function(){var t=new v.a(this.$refs.panel,{isPreventDefault:!0});t.on("at:after",this.afterEach)},methods:{add:function(){var t={left:"50px",top:"160px",zIndex:1,scale:1,angle:0};this.styles.push(t)},onAfter:function(t){t.currentTarget.setAttribute("at",t.baseType)},onTouch:function(t){t.currentTarget.setAttribute("at-stage",t.inputType)},afterEach:function(t){this.action=t.baseType,this.$set(this,"data",t)},onRotate:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.styles[e].angle+=t.deltaAngle},onPinch:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.styles[e].scale=Math.round(this.styles[e].scale*t.deltaScale*100)/100},onRotate1:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.styles[e].angle+=t.deltaAngle},onPinch1:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.styles[e].scale=Math.round(this.styles[e].scale*t.deltaScale*100)/100},onTransitionend:function(t,e){},onTap:function(t){y(t.type,"#f10")},onPress:function(t){y(t.type,"#710")},onSwipe:function(t,e){var n=t.speedX,r=t.speedY;this.styles[e].top=Math.round(parseInt(this.styles[e].top)+120*r)+"px",this.styles[e].left=Math.round(parseInt(this.styles[e].left)+120*n)+"px"},onPanstart:function(t,e){for(var n in this.styles)this.styles[n].zIndex=n==e?2:1},onPanmove:function(t,e){this.styles[e].top=parseInt(this.styles[e].top)+t.deltaY+"px",this.styles[e].left=parseInt(this.styles[e].left)+t.deltaX+"px"},onPandown:function(t,e){console.warn(t)}}},g=m,b=(n("21bb"),Object(c["a"])(g,h,d,!1,null,null,null)),T=b.exports;r["a"].use(l["a"]);var x=[{path:"/",name:"home",component:T},{path:"/diy",name:"diy",component:function(){return n.e("chunk-c1e96264").then(n.bind(null,"35bd"))}},{path:"/topology",name:"Topology",component:function(){return n.e("chunk-68713e03").then(n.bind(null,"2c4c"))}}],_=new l["a"]({routes:x}),w=_;n("b7b3");r["a"].config.productionTip=!1,new r["a"]({router:w,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),i=n.n(r);i.a},"9c0c":function(t,e,n){},e02c:function(t,e,n){var r,i;n("a4d3"),n("e01a"),n("d28b"),n("a623"),n("c740"),n("4160"),n("a630"),n("caad"),n("c975"),n("d81d"),n("13d5"),n("a434"),n("b0c0"),n("a9e3"),n("aff5"),n("dca8"),n("131a"),n("d3b7"),n("ac1f"),n("25f0"),n("3ca3"),n("5319"),n("ddb0");var o=n("7037");(function(a,s){"object"===o(e)&&"undefined"!==typeof t?t.exports=s():(r=s,i="function"===typeof r?r.call(e,n,e,t):r,void 0===i||(t.exports=i))})(0,(function(){"use strict";
/*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)};function e(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}var n=function(){return n=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},n.apply(this,arguments)};function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}function i(t){var e="function"===typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}}function o(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,o=n.call(t),a=[];try{while((void 0===e||e-- >0)&&!(r=o.next()).done)a.push(r.value)}catch(s){i={error:s}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return a}var a=function(){function t(){this.listenersMap={}}return t.prototype.target=function(t){var e=this;return{on:function(n,r){e.on(n,r,{target:t})}}},t.prototype.on=function(t,e,n){var r=(void 0===n?{}:n).target;void 0===this.listenersMap[t]&&(this.listenersMap[t]=[]),void 0!==r&&(e.target=r),this.listenersMap[t].push(e)},t.prototype.off=function(t,e){var n=this.listenersMap[t];if(void 0!==n)if(void 0===e)delete this.listenersMap[t];else{var r=n.findIndex((function(t){return t===e}));n.splice(r,1)}},t.prototype.emit=function(t,e,n){var r,o;void 0===n&&(n=function(){return!0});var a=this.listenersMap[t];if(void 0!==a&&0<a.length)try{for(var s=i(a),c=s.next();!c.done;c=s.next()){var u=c.value,p=u.target;n({target:p})&&u(e)}}catch(l){r={error:l}}finally{try{c&&!c.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}},t.prototype.destroy=function(){this.listenersMap={}},t}(),s=Object.prototype.toString;function c(t){return"[object RegExp]"===s.call(t)}function u(t){return"[object Function]"===s.call(t)}var p="clientX",l="clientY",h=16,d="start",f="move",v="cancel",y="end",m="left",g="right",b="up",T="down",x="none",_="touch",w="mouse",M=_+d,P=_+f,E=_+y,k=_+v,L=w+b,S=w+f,z=w+T,I=window.wx||"on"+M in window||void 0!=window.TouchEvent,O="p",A=d,C=f,X=y,Y="r",j="f",D=v;function F(t){return Math.round(100*t)/100}var V=function(){function t(){}return t}(),N=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return e(n,t),n.prototype.load=function(t){var e=[],n=Array.from(t.touches).map((function(t){var n=t.clientX,r=t.clientY,i=t.target;return e.push(i),{clientX:n,clientY:r,target:i}})),r=Array.from(t.changedTouches).map((function(t){var e=t.clientX,n=t.clientY,r=t.target;return{clientX:e,clientY:n,target:r}}));return{inputType:t.type.replace("touch",""),changedPoints:r,points:n,nativeEvent:t,target:t.target,targets:e}},n}(V),R=function(t){function n(){var e=t.call(this)||this;return e.target=null,e.isPressed=!1,e}return e(n,t),n.prototype.load=function(t){var e,n=t.clientX,r=t.clientY,i=t.type,o=t.button,a=t.target,s=[{clientX:n,clientY:r,target:a}];z===i&&0===o?(this.target=a,this.isPressed=!0,e=d):this.isPressed&&(S===i?e=f:L===i&&(s=[],e=y,this.isPressed=!1));var c=this.prevPoints||[{clientX:n,clientY:r,target:a}];if(this.prevPoints=[{clientX:n,clientY:r,target:a}],void 0!==e)return{inputType:e,changedPoints:c,points:s,target:this.target,targets:[this.target],nativeEvent:t}},n}(V),U=function(){function t(){var t=I?N:R;this.adapter=new t,this.id=0}return t.prototype.transform=function(t){this.prevInput=this.activeInput;var e=this.adapter.load(t);if(void 0!==e){var r=Number.MAX_SAFE_INTEGER>this.id?++this.id:1,i=n(n({},e),{id:r}),o=$(i);this.activeInput=o;var a=o.isStart,s=o.pointLength;return a&&(this.startInput=o,this.prevInput=void 0,this.startMultiInput=1<s?o:void 0),n(n({},o),{prevInput:this.prevInput,startMultiInput:this.startMultiInput,startInput:this.startInput})}},t}();function G(t){var e=t.length;if(0<e){if(1===e){var n=t[0],r=n.clientX,i=n.clientY;return{x:Math.round(r),y:Math.round(i)}}var o=t.reduce((function(t,e){return t.x+=e[p],t.y+=e[l],t}),{x:0,y:0});return{x:Math.round(o.x/e),y:Math.round(o.y/e)}}}function $(t){var e=t.inputType,r=t.points,i=t.changedPoints,o=t.nativeEvent,a=r.length,s=d===e,c=y===e&&0===a||v===e,u=performance.now(),p=G(r)||G(i),l=p.x,h=p.y,f=o.currentTarget;return n(n({},t),{x:l,y:h,timestamp:u,isStart:s,isEnd:c,pointLength:a,currentTarget:f,getOffset:function(t){void 0===t&&(t=f);var e=t.getBoundingClientRect();return{x:l-Math.round(e.left),y:h-Math.round(e.top)}}})}function H(t,e,n){e.target,e.currentTarget;var i,o=e.type,a=r(e,["target","currentTarget","type"]);return document.createEvent?(i=document.createEvent("HTMLEvents"),i.initEvent(o,null===n||void 0===n?void 0:n.bubbles,null===n||void 0===n?void 0:n.cancelable)):i=new Event(o,n),Object.assign(i,a,{match:function(){return e.targets.every((function(t){return i.currentTarget.contains(t)}))}}),t.dispatchEvent(i)}function B(t,e){if(!e.isPreventDefault)return!1;var n=!0;if(null!==t.target){var r=e.preventDefaultExclude;if(c(r)){if("tagName"in t.target){var i=t.target.tagName;n=!r.test(i)}}else u(r)&&(n=!r(t))}return n}var q=[M,P,E,k];function J(t,e,n){return I?(q.forEach((function(r){t.addEventListener(r,e,n)})),function(){q.forEach((function(n){t.removeEventListener(n,e)}))}):(t.addEventListener(z,e,n),window.addEventListener(S,e,n),window.addEventListener(L,e,n),function(){t.removeEventListener(z,e),window.removeEventListener(S,e),window.removeEventListener(L,e)})}function K(t,e,n){var r=null===n||void 0===n?void 0:n.name;if(void 0===r||void 0===t.recognizerMap[r]){var i=new e(n);t.recognizerMap[i.name]=i,i.recognizerMap=t.recognizerMap,t.recognizers.push(t.recognizerMap[i.name])}}function Z(t,e){var n,r;if(void 0===e)t.recognizers=[],t.recognizerMap={};else try{for(var a=i(t.recognizers.entries()),s=a.next();!s.done;s=a.next()){var c=o(s.value,2),u=c[0],p=c[1];if(e===p.options.name){t.recognizers.splice(u,1),delete t.recognizerMap[e];break}}}catch(l){n={error:l}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}}function Q(t,e){var r=e.type,i=e.target,o=e.targets;t.emit(r,e,(function(t){if(void 0!==(null===t||void 0===t?void 0:t.target)){var e=t.target;return o.every((function(t){return e.contains(t)}))}return!0}));var a="at:after";t.emit(a,e),t.options.domEvents&&void 0!==t.el&&null!==i&&(H(i,e,t.options.domEvents),H(i,n(n({},e),{_type:e.type,type:a}),t.options.domEvents))}var W={domEvents:{bubbles:!0,cancelable:!0},isPreventDefault:!0,preventDefaultExclude:/^(?:INPUT|TEXTAREA|BUTTON|SELECT)$/},tt=function(t){function r(e,i){var o=t.call(this)||this;if(o.recognizerMap={},o.recognizers=[],o.cacheComputedFunctionGroup=Object.create(null),o.el=e,o.input=new U,o.options=n(n({},W),i),o.recognizerMap=r.recognizerMap,o.recognizers=r.recognizers,void 0!==e){e.style.webkitTapHighlightColor="rgba(0,0,0,0)";var a=!1;try{var s={};Object.defineProperty(s,"passive",{get:function(){a=!0}}),window.addEventListener("_",(function(){}),s)}catch(c){}o.on("unbind",J(e,o.catchEvent.bind(o),!(o.options.isPreventDefault||!a)&&{passive:!0}))}return o}return e(r,t),r.prototype.use=function(t,e){K(this,t,e)},r.prototype.removeUse=function(t){Z(this,t)},r.prototype.catchEvent=function(t){var e,r,o=this;B(t,this.options)&&t.preventDefault();var a=this.input.transform(t);if(void 0!==a){var s="at:"+_,c=s+a.inputType;this.emit(s,a),this.emit(c,a);var u=this.options.domEvents;if(!1!==u){var p=t.target;null!==p&&(H(p,n(n({},a),{type:s}),u),H(p,n(n({},a),{type:c}),u))}var l=Object.create(null),h=function(t){if(t.disabled)return"continue";t.computedGroup=l,t.computeFunctionMap=d.cacheComputedFunctionGroup,t.recognize(a,(function(e,r){var i=n(n(n({},a),r),{type:e,baseType:t.name});Object.freeze(i),void 0===o.beforeEachHook?Q(o,i):o.beforeEachHook(t,(function(){Q(o,i)}))})),l=t.computedGroup,d.cacheComputedFunctionGroup=t.computeFunctionMap},d=this;try{for(var f=i(this.recognizers),v=f.next();!v.done;v=f.next()){var y=v.value;h(y)}}catch(m){e={error:m}}finally{try{v&&!v.done&&(r=f.return)&&r.call(f)}finally{if(e)throw e.error}}}},r.prototype.beforeEach=function(t){this.beforeEachHook=t},r.prototype.get=function(t){return this.recognizerMap[t]},r.prototype.set=function(t){this.options=n(n({},this.options),t)},r.prototype.destroy=function(){this.emit("unbind"),this.listenersMap={}},r.version="0.7.5",r.recognizers=[],r.recognizerMap={},r.use=function(t,e){K(r,t,e)},r.removeUse=function(t){Z(r,t)},r}(a);function et(t){-1!==[X,D,Y,j].indexOf(t.status)&&(t.status=O)}function nt(t,e,n){var r,i,o,a,s,c,u,p={1:(r={},r[O]=(i={},i[f]=A,i),r[A]=(o={},o[f]=C,o[y]=X,o[v]=D,o),r[C]=(a={},a[f]=C,a[y]=X,a[v]=D,a),r),0:(s={},s[A]=(c={},c[f]=D,c[y]=X,c[v]=D,c),s[C]=(u={},u[d]=j,u[f]=D,u[y]=X,u[v]=D,u),s)};return void 0!==p[Number(t)][e]&&p[Number(t)][e][n]||e}function rt(t,e,n){var r=t.test(e);et(t);var i=e.inputType;t.status=nt(r,t.status,i);var o=t.computed;t.isRecognized=[A,C].includes(t.status);var a=t.name,s=t.status,c=t.isRecognized;return c&&n(a,o),(c||[X,D].includes(t.status))&&n(a+s,o),r}var it=function(){function t(t){this.disabled=!1,this.status=O,this.isRecognized=!1,this.recognizerMap={},this.computedGroup={},this.computed={},this.computeFunctionMap={},this.options=t,this.name=this.options.name}return t.prototype.set=function(t){return void 0!==t&&(this.options=n(n({},this.options),t)),this},t.prototype.isValidPointLength=function(t){return 0===this.options.pointLength||this.options.pointLength===t},t.prototype.compute=function(t,e){var n,r,o=Object.create(null);try{for(var a=i(t),s=a.next();!s.done;s=a.next()){var c=s.value,u=c._id,p=this,l=p.computedGroup,h=p.computeFunctionMap;for(var d in void 0===h[u]&&(h[u]=c()),l[u]=l[u]||h[u](e),l[u])o[d]=l[u][d]}}catch(f){n={error:f}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(n)throw n.error}}return o},t}(),ot=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},at=function(t,e){return t.x*e.x+t.y*e.y},st=function(t,e){var n=ot(t)*ot(e);if(0===n)return 0;var r=at(t,e)/n;return r>1&&(r=1),Math.acos(r)},ct=function(t,e){return t.x*e.y-e.x*t.y},ut=function(t){return t/Math.PI*180},pt=function(t,e){var n=st(t,e);return ct(t,e)>0&&(n*=-1),ut(n)},lt=function(t,e){return t===e?x:Math.abs(t)>Math.abs(e)?0<t?g:m:0<e?T:b};function ht(t){var e=t.startV,n=t.prevV,r=t.activeV,i=Math.round(pt(r,n)),o=Math.round(pt(r,e));return{angle:o,deltaAngle:i}}function dt(){return function(t){var e=t.prevInput,n=0,r=0,i=0;if(void 0!==e&&(n=t.x-e.x,r=t.y-e.y,0!==n||0!==r)){var o=Math.sqrt(Math.pow(n,2)+Math.pow(r,2));i=Math.round(ut(Math.acos(Math.abs(n)/o)))}return{deltaX:n,deltaY:r,deltaXYAngle:i}}}function ft(){var t=0,e=0,n=0,r=0,i=0,o=x;return function(a){var s=a.inputType,c=a.startInput;return d===s?(t=0,e=0,n=0,r=0,i=0,o=x):f===s&&(t=Math.round(a.points[0][p]-c.points[0][p]),e=Math.round(a.points[0][l]-c.points[0][l]),n=Math.abs(t),r=Math.abs(e),i=Math.round(ot({x:n,y:r})),o=lt(t,e)),{displacementX:t,displacementY:e,distanceX:n,distanceY:r,distance:i,overallDirection:o}}}function vt(){var t=0;return function(e){var n=e.inputType;return d===n&&(t=e.pointLength),{maxPointLength:t}}}function yt(t){var e=t.startV,n=t.prevV,r=t.activeV,i=F(ot(r)/ot(n)),o=F(ot(r)/ot(e));return{scale:o,deltaScale:i}}function mt(){var t,e,n=0,r=0,i=0,o=0;return function(a){if(void 0!==a){var s=a.inputType;e=e||a.startInput;var c=a.timestamp-e.timestamp;if(f===s&&h<c){var u=a.x-e.x,p=a.y-e.y;i=Math.round(u/c*100)/100,o=Math.round(p/c*100)/100,n=Math.abs(i),r=Math.abs(o),t=lt(u,p)||t,e=a}}return{velocityX:n,velocityY:r,speedX:i,speedY:o,direction:t}}}function gt(t){return{x:t.points[1][p]-t.points[0][p],y:t.points[1][l]-t.points[0][l]}}function bt(){return function(t){var e=t.prevInput,n=t.startMultiInput;if(void 0!==n&&void 0!==e&&t.id!==n.id&&1<t.pointLength)return{startV:gt(n),prevV:gt(e),activeV:gt(t)}}}dt._id="ComputeDeltaXY",ft._id="computeDistance",vt._id="computeMaxLength",mt._id="ComputeVAndDir",bt._id="ComputeVectorForMutli";var Tt={name:"tap",pointLength:1,tapTimes:1,waitNextTapTime:300,maxDistance:2,maxDistanceFromPrevTap:9,maxPressTime:250},xt=function(t){function r(e){var r=t.call(this,n(n({},Tt),e))||this;return r.tapCount=0,r}return e(r,t),r.prototype._isValidDistanceFromPrevTap=function(t){if(void 0!==this.prevTapPoint){var e=ot({x:t.x-this.prevTapPoint.x,y:t.y-this.prevTapPoint.y});return this.prevTapPoint=t,this.options.maxDistanceFromPrevTap>=e}return this.prevTapPoint=t,!0},r.prototype._isValidInterval=function(){var t=performance.now();if(void 0===this.prevTapTime)return this.prevTapTime=t,!0;var e=t-this.prevTapTime;return this.prevTapTime=t,e<this.options.waitNextTapTime},r.prototype.recognize=function(t,e){var r=t.inputType,i=t.x,o=t.y;this.computed=this.compute([vt,ft],t),y===r&&(this.status=O,this.test(t)?(this.cancelCountDownToFail(),this._isValidDistanceFromPrevTap({x:i,y:o})&&this._isValidInterval()?this.tapCount++:this.tapCount=1,0===this.tapCount%this.options.tapTimes?(this.status=Y,e(this.options.name,n(n({},this.computed),{tapCount:this.tapCount})),this.reset()):this.countDownToFail()):(this.reset(),this.status=j))},r.prototype.countDownToFail=function(){var t=this;this._countDownToFailTimer=setTimeout((function(){t.status=j,t.reset()}),this.options.waitNextTapTime)},r.prototype.cancelCountDownToFail=function(){clearTimeout(this._countDownToFailTimer)},r.prototype.reset=function(){this.tapCount=0,this.prevTapPoint=void 0,this.prevTapTime=void 0},r.prototype.test=function(t){var e=t.startInput,n=t.pointLength,r=t.timestamp-e.timestamp,i=this.computed,o=i.maxPointLength,a=i.distance;return o===this.options.pointLength&&0===n&&this.options.maxDistance>=a&&this.options.maxPressTime>r},r}(it),_t={name:"pan",threshold:10,pointLength:1},wt=function(t){function r(e){return t.call(this,n(n({},_t),e))||this}return e(r,t),r.prototype.test=function(t){var e=t.pointLength,n=this.computed.distance;return(this.isRecognized||this.options.threshold<=n)&&this.isValidPointLength(e)},r.prototype.recognize=function(t,e){this.computed=this.compute([mt,ft,dt],t);var n=void 0!==this.computed.direction&&rt(this,t,e);n&&e(this.options.name+this.computed.direction,this.computed)},r}(it),Mt={name:"swipe",threshold:10,velocity:.3,pointLength:1},Pt=function(t){function r(e){return t.call(this,n(n({},Mt),e))||this}return e(r,t),r.prototype.test=function(t){var e=t.inputType;if(y!==e)return!1;var n=this.computed,r=n.velocityX,i=n.velocityY,o=n.maxPointLength,a=n.distance;return this.options.pointLength===o&&this.options.threshold<a&&this.options.velocity<Math.max(r,i)},r.prototype.recognize=function(t,e){this.computed=this.compute([vt,mt,ft],t),this.test(t)&&(e(this.options.name,this.computed),e(this.options.name+this.computed.direction,this.computed))},r}(it),Et={name:"press",pointLength:1,maxDistance:9,minPressTime:251},kt=function(t){function r(e){return t.call(this,n(n({},Et),e))||this}return e(r,t),r.prototype.recognize=function(t,e){var n=this,r=t.inputType,i=t.startInput,o=t.pointLength;if(d===r&&this.isValidPointLength(o))et(this),this.cancel(),this._timeoutId=setTimeout((function(){n.status=Y,e(n.options.name,t)}),this.options.minPressTime);else if(y===r&&Y===this.status)e(""+this.options.name+b,this.computed);else if(Y!==this.status){var a=t.timestamp-i.timestamp;(!this.test(t)||this.options.minPressTime>a&&[y,v].includes(r))&&(this.cancel(),this.status=j)}},r.prototype.test=function(t){this.computed=this.compute([ft],t);var e=this.computed.distance;return this.options.maxDistance>e},r.prototype.cancel=function(){clearTimeout(this._timeoutId)},r}(it),Lt={name:"pinch",threshold:0,pointLength:2},St=function(t){function r(e){return t.call(this,n(n({},Lt),e))||this}return e(r,t),r.prototype.test=function(t){var e=t.pointLength,n=this.computed.scale;return this.isValidPointLength(e)&&void 0!==n&&(this.options.threshold<Math.abs(n-1)||this.isRecognized)},r.prototype.recognize=function(t,e){var r=this.compute([bt],t);"activeV"in r&&(this.computed=n(n({},this.computed),yt(r))),rt(this,t,e)},r}(it),zt={name:"rotate",threshold:0,pointLength:2},It=function(t){function r(e){return t.call(this,n(n({},zt),e))||this}return e(r,t),r.prototype.test=function(t){var e=t.pointLength,n=this.computed.angle;return this.isValidPointLength(e)&&(this.options.threshold<Math.abs(n)||this.isRecognized)},r.prototype.recognize=function(t,e){var r=this.compute([bt],t);"activeV"in r&&(this.computed=n(n({},this.computed),ht(r))),rt(this,t,e)},r}(it);return tt.use(xt),tt.use(wt),tt.use(Pt),tt.use(kt),tt.use(St),tt.use(It),tt.Tap=xt,tt.Pan=wt,tt.Swipe=Pt,tt.Press=kt,tt.Pinch=St,tt.Rotate=It,tt.STATUS_POSSIBLE=O,tt.STATUS_START=A,tt.STATUS_MOVE=C,tt.STATUS_END=X,tt.STATUS_CANCELLED=D,tt.STATUS_FAILED=j,tt.STATUS_RECOGNIZED=Y,tt}))}});
//# sourceMappingURL=app.8a0ad49f.js.map