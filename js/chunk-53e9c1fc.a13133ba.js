(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53e9c1fc"],{1079:function(e,t,a){"use strict";var n=a("541c");t["a"]=n["a"]},"541c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},r=[],s=a("205f"),i=a("4968"),o=a("ba06"),l=a("6197"),c=a("5843"),u=(a("c197"),a("84bf"),a("8d51")),d=a.n(u),p={components:{BCard:s["a"],BCardTitle:i["a"],BCardSubTitle:o["a"],BCardBody:l["a"],BCollapse:c["a"],Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data(){return{parentID:"",code_visible:!1}},computed:{cardAttrs(){const e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created(){this.parentID=String(Math.floor(10*Math.random())+1)}},g=p,f=(a("8d54"),a("2877")),m=Object(f["a"])(g,n,r,!1,null,"aa799a9e",null);t["a"]=m.exports},"6d61":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("aspect-default")],1)],1)},r=[],s=a("a15b"),i=a("b28b"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAspectDefaut)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("The default ")]),a("b-link",{attrs:{href:"https://en.wikipedia.org/wiki/Aspect_ratio_(image)"}},[e._v(" aspect ")]),a("span",[e._v(" ratio is ")]),a("code",[e._v("1:1")]),a("span",[e._v(" (ratio of ")]),a("code",[e._v("1")]),a("span",[e._v(" ), which makes the height always be at least the same as the width. The ")]),a("code",[e._v("aspect")]),a("span",[e._v(" prop can be used to specify an arbitrary aspect ratio (i.e. ")]),a("code",[e._v("1.5")]),a("span",[e._v(" ) or a ratio as a string such as ")]),a("code",[e._v("'16:9'")]),a("span",[e._v(" or ")]),a("code",[e._v("'4:3'")]),a("span",[e._v(".")])],1),a("b-card-text",[e._v(" The width will always be 100% of the available width in the parent element/component. ")]),a("b-alert",{attrs:{show:"",variant:"success"}},[a("div",{staticClass:"alert-body"},[a("feather-icon",{staticClass:"mr-50 mt-25",attrs:{icon:"InfoIcon"}}),e._v(" Change width of your browser window to see effect ")],1)]),a("b-form-group",{staticClass:"mb-3",attrs:{label:"Aspect ratio","label-for":"ratio","label-cols-md":"auto"}},[a("b-form-select",{attrs:{id:"ratio",options:e.aspects},model:{value:e.aspect,callback:function(t){e.aspect=t},expression:"aspect"}})],1),a("b-aspect",{attrs:{aspect:e.aspect}},[a("p",[e._v('This will always be an aspect of "'+e._s(e.aspect)+'", except when the content is too tall.')])])],1)},l=[],c=a("1079"),u=a("5fda"),d=a("2b0e"),p=a("c637"),g=a("a723"),f=a("992e"),m=a("a8c8"),h=a("3a58"),b=a("cf75"),v=a("8c18");function y(e,t){return A(e)||F(e,t)||w(e,t)||x()}function x(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function w(e,t){if(e){if("string"===typeof e)return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function F(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],n=!0,r=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0)if(a.push(i.value),t&&a.length===t)break}catch(l){r=!0,s=l}finally{try{n||null==o["return"]||o["return"]()}finally{if(r)throw s}}return a}}function A(e){if(Array.isArray(e))return e}var _="b-aspect",S=Object(b["d"])({aspect:Object(b["c"])(g["p"],"1:1"),tag:Object(b["c"])(g["u"],"div")},p["b"]),$=d["default"].extend({name:p["b"],mixins:[v["a"]],props:S,computed:{padding:function(){var e=this.aspect,t=1;if(f["b"].test(e)){var a=e.split(f["c"]).map((function(e){return Object(h["b"])(e)||1})),n=y(a,2),r=n[0],s=n[1];t=r/s}else t=Object(h["b"])(e)||1;return"".concat(100/Object(m["a"])(t),"%")}},render:function(e){var t=e("div",{staticClass:"".concat(_,"-sizer flex-grow-1"),style:{paddingBottom:this.padding,height:0}}),a=e("div",{staticClass:"".concat(_,"-content flex-grow-1 w-100 mw-100"),style:{marginLeft:"-100%"}},this.normalizeSlot());return e(this.tag,{staticClass:"".concat(_," d-flex")},[t,a])}}),C=a("8226"),j=a("d6e4"),B=a("aa59"),O=a("8361");const P="\n<template>\n  <div>\n   \x3c!-- alert --\x3e\n    <b-alert\n      show\n      variant=\"success\"\n    >\n      <div class=\"alert-body\">\n        <feather-icon\n          icon=\"InfoIcon\"\n          class=\"mr-50 mt-25\"\n        />\n        Change width of your browser window to see effect\n      </div>\n    </b-alert>\n\n    \x3c!-- select --\x3e\n    <b-form-group\n      label=\"Aspect ratio\"\n      label-for=\"ratio\"\n      label-cols-md=\"auto\"\n      class=\"mb-3\"\n    >\n      <b-form-select\n        id=\"ratio\"\n        v-model=\"aspect\"\n        :options=\"aspects\"\n      />\n    </b-form-group>\n\n    \x3c!-- aspect --\x3e\n    <b-aspect :aspect=\"aspect\">\n      <p>This will always be an aspect of \"{{ aspect }}\", except when the content is too tall.</p>\n    </b-aspect>\n  </div>\n</template>\n\n<script>\nimport { BAlert, BAspect, BFormGroup, BFormSelect, BLink} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BAlert,\n    BAspect,\n    BFormGroup,\n    BLink,\n    BFormSelect,\n  },\n  data: () => ({\n    aspect: '16:9',\n    aspects: [\n      { text: '4:3 (SD)', value: '4:3' },\n      { text: '1:1 (Square)', value: '1:1' },\n      { text: '16:9 (HD)', value: '16:9' },\n      { text: '1.85:1 (Widescreen)', value: '1.85:1' },\n      { text: '2:1 (Univisium/Superscope)', value: '2:1' },\n      { text: '21:9 (Anamorphic)', value: '21:9' },\n      { text: '1.43:1 (IMAX)', value: '1.43:1' },\n      { text: '3:2 (35mm Film)', value: '3:2' },\n      { text: '3:1 (APS-P)', value: '3:1' },\n      { text: '4/3 (Same as 4:3)', value: 4 / 3 },\n      { text: '16/9 (Same as 16:9)', value: 16 / 9 },\n      { text: '3 (Same as 3:1)', value: 3 },\n      { text: '2 (Same as 2:1)', value: 2 },\n      { text: '1.85 (Same as 1.85:1)', value: 1.85 },\n      { text: '1.5', value: 1.5 },\n      { text: '1 (Same as 1:1)', value: 1 },\n    ],\n  }),\n}\n<\/script>\n";var E=P,T={components:{BCardCode:c["a"],BAlert:u["a"],BAspect:$,BFormGroup:C["a"],BCardText:j["a"],BLink:B["a"],BFormSelect:O["a"]},data(){return{aspect:"16:9",aspects:[{text:"4:3 (SD)",value:"4:3"},{text:"1:1 (Square)",value:"1:1"},{text:"16:9 (HD)",value:"16:9"},{text:"1.85:1 (Widescreen)",value:"1.85:1"},{text:"2:1 (Univisium/Superscope)",value:"2:1"},{text:"21:9 (Anamorphic)",value:"21:9"},{text:"1.43:1 (IMAX)",value:"1.43:1"},{text:"3:2 (35mm Film)",value:"3:2"},{text:"3:1 (APS-P)",value:"3:1"},{text:"4/3 (Same as 4:3)",value:4/3},{text:"16/9 (Same as 16:9)",value:16/9},{text:"3 (Same as 3:1)",value:3},{text:"2 (Same as 2:1)",value:2},{text:"1.85 (Same as 1.85:1)",value:1.85},{text:"1.5",value:1.5},{text:"1 (Same as 1:1)",value:1}],codeAspectDefaut:E}}},I=T,D=(a("b635"),a("2877")),L=Object(D["a"])(I,o,l,!1,null,"2f2d7150",null),N=L.exports,z={components:{BRow:s["a"],BCol:i["a"],AspectDefault:N}},M=z,H=Object(D["a"])(M,n,r,!1,null,null,null);t["default"]=H.exports},"84bf":function(e,t,a){},"8d51":function(e,t,a){"use strict";function n(e){for(var t=arguments,a=1;a<arguments.length;a++)for(var n in arguments[a])e[n]=t[a][n];return e}var r={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,t){var a=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),r=t.props.inline,s=t.props.language,i=Prism.languages[s],o="language-"+s;return r?e("code",n({},t.data,{class:[t.data.class,o],domProps:n({},t.data.domProps,{innerHTML:Prism.highlight(a,i)})})):e("pre",n({},t.data,{class:[t.data.class,o]}),[e("code",{class:o,domProps:{innerHTML:Prism.highlight(a,i)}})])}};e.exports=r},"8d54":function(e,t,a){"use strict";a("ecda")},b635:function(e,t,a){"use strict";a("caf5")},c197:function(e,t,a){(function(t){var a="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++a}),e["__id"]},clone:function e(t,a){var r,s,i=n.util.type(t);switch(a=a||{},i){case"Object":if(s=n.util.objId(t),a[s])return a[s];for(var o in r={},a[s]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],a));return r;case"Array":return s=n.util.objId(t),a[s]?a[s]:(r=[],a[s]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var s=r[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in a)a.hasOwnProperty(l)&&(i[l]=a[l]);a.hasOwnProperty(o)||(i[o]=s[o])}var c=r[e];return r[e]=i,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,a,r,s){s=s||{};var i=n.util.objId;for(var o in t)if(t.hasOwnProperty(o)){a.call(t,o,t[o],r||o);var l=t[o],c=n.util.type(l);"Object"!==c||s[i(l)]?"Array"!==c||s[i(l)]||(s[i(l)]=!0,e(l,a,o,s)):(s[i(l)]=!0,e(l,a,null,s))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var s,i=0;s=r.elements[i++];)n.highlightElement(s,!0===t,r.callback)},highlightElement:function(a,r,s){var i=n.util.getLanguage(a),o=n.languages[i];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=a.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var c=a.textContent,u={element:a,language:i,grammar:o,code:c};function d(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),s&&s.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(s&&s.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){d(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else d(n.highlight(u.code,u.grammar,u.language));else d(n.util.encode(u.code))},highlight:function(e,t,a){var s={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",s),s.tokens=n.tokenize(s.code,s.grammar),n.hooks.run("after-tokenize",s),r.stringify(n.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,a,s,i,o,l){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var u=a[c];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(l&&l==c+","+d)return;var p=u[d],g=p.inside,f=!!p.lookbehind,m=!!p.greedy,h=0,b=p.alias;if(m&&!p.pattern.global){var v=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,v+"g")}p=p.pattern||p;for(var y=s,x=i;y<t.length;x+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof r)){if(m&&y!=t.length-1){p.lastIndex=x;var k=p.exec(e);if(!k)break;for(var F=k.index+(f&&k[1]?k[1].length:0),A=k.index+k[0].length,_=y,S=x,$=t.length;_<$&&(S<A||!t[_].type&&!t[_-1].greedy);++_)S+=t[_].length,F>=S&&(++y,x=S);if(t[y]instanceof r)continue;C=_-y,w=e.slice(x,S),k.index-=x}else{p.lastIndex=0;k=p.exec(w);var C=1}if(k){f&&(h=k[1]?k[1].length:0);F=k.index+h,k=k[0].slice(h),A=F+k.length;var j=w.slice(0,F),B=w.slice(A),O=[y,C];j&&(++y,x+=j.length,O.push(j));var P=new r(c,g?n.tokenize(k,g):k,b,k,m);if(O.push(P),B&&O.push(B),Array.prototype.splice.apply(t,O),1!=C&&n.matchGrammar(e,t,a,y,x,!0,c+","+d),o)break}else if(o)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,s=0;r=a[s++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}n.hooks.run("wrap",a);var i=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(i?" "+i:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,s=a.code,i=a.immediateClose;e.postMessage(n.highlight(s,n.languages[r],r)),i&&e.close()}),!1),n):n;var s=n.util.currentScript();if(s&&(n.filename=s.src,s.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){function i(){n.manual||n.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&s&&s.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return n}(a);e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"],n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",s)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var a,r=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;while(s&&!i.test(s.className))s=s.parentNode;if(s&&(a=(e.className.match(i)||[,""])[1]),!a){var o=(r.match(/\.(\w+)$/)||[,""])[1];a=t[o]||o}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,a("c8ba"))},caf5:function(e,t,a){},ecda:function(e,t,a){}}]);