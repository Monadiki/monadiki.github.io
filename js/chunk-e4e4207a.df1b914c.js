(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e4e4207a"],{1079:function(e,a,r){"use strict";var n=r("541c");a["a"]=n["a"]},"541c":function(e,a,r){"use strict";var n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?r("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),r("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(a){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[r("b-card-body",[r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:r("b-card-body",[e._t("default"),r("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[r("div",{staticClass:"p-1"}),r("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},s=[],t=r("205f"),i=r("4968"),o=r("ba06"),l=r("6197"),c=r("5843"),u=(r("c197"),r("84bf"),r("8d51")),d=r.n(u),p={components:{BCard:t["a"],BCardTitle:i["a"],BCardSubTitle:o["a"],BCardBody:l["a"],BCollapse:c["a"],Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data(){return{parentID:"",code_visible:!1}},computed:{cardAttrs(){const e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created(){this.parentID=String(Math.floor(10*Math.random())+1)}},g=p,v=(r("8d54"),r("2877")),b=Object(v["a"])(g,n,s,!1,null,"aa799a9e",null);a["a"]=b.exports},"84bf":function(e,a,r){},"8d51":function(e,a,r){"use strict";function n(e){for(var a=arguments,r=1;r<arguments.length;r++)for(var n in arguments[r])e[n]=a[r][n];return e}var s={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,a){var r=a.props.code||(a.children&&a.children.length>0?a.children[0].text:""),s=a.props.inline,t=a.props.language,i=Prism.languages[t],o="language-"+t;return s?e("code",n({},a.data,{class:[a.data.class,o],domProps:n({},a.data.domProps,{innerHTML:Prism.highlight(r,i)})})):e("pre",n({},a.data,{class:[a.data.class,o]}),[e("code",{class:o,domProps:{innerHTML:Prism.highlight(r,i)}})])}};e.exports=s},"8d54":function(e,a,r){"use strict";r("ecda")},c197:function(e,a,r){(function(a){var r="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(e){var a=/\blang(?:uage)?-([\w-]+)\b/i,r=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof s?new s(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++r}),e["__id"]},clone:function e(a,r){var s,t,i=n.util.type(a);switch(r=r||{},i){case"Object":if(t=n.util.objId(a),r[t])return r[t];for(var o in s={},r[t]=s,a)a.hasOwnProperty(o)&&(s[o]=e(a[o],r));return s;case"Array":return t=n.util.objId(a),r[t]?r[t]:(s=[],r[t]=s,a.forEach((function(a,n){s[n]=e(a,r)})),s);default:return a}},getLanguage:function(e){while(e&&!a.test(e.className))e=e.parentElement;return e?(e.className.match(a)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var a=document.getElementsByTagName("script");for(var r in a)if(a[r].src==e)return a[r]}return null}}},languages:{extend:function(e,a){var r=n.util.clone(n.languages[e]);for(var s in a)r[s]=a[s];return r},insertBefore:function(e,a,r,s){s=s||n.languages;var t=s[e],i={};for(var o in t)if(t.hasOwnProperty(o)){if(o==a)for(var l in r)r.hasOwnProperty(l)&&(i[l]=r[l]);r.hasOwnProperty(o)||(i[o]=t[o])}var c=s[e];return s[e]=i,n.languages.DFS(n.languages,(function(a,r){r===c&&a!=e&&(this[a]=i)})),i},DFS:function e(a,r,s,t){t=t||{};var i=n.util.objId;for(var o in a)if(a.hasOwnProperty(o)){r.call(a,o,a[o],s||o);var l=a[o],c=n.util.type(l);"Object"!==c||t[i(l)]?"Array"!==c||t[i(l)]||(t[i(l)]=!0,e(l,r,o,t)):(t[i(l)]=!0,e(l,r,null,t))}}},plugins:{},highlightAll:function(e,a){n.highlightAllUnder(document,e,a)},highlightAllUnder:function(e,a,r){var s={callback:r,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",s),s.elements=Array.prototype.slice.apply(s.container.querySelectorAll(s.selector)),n.hooks.run("before-all-elements-highlight",s);for(var t,i=0;t=s.elements[i++];)n.highlightElement(t,!0===a,s.callback)},highlightElement:function(r,s,t){var i=n.util.getLanguage(r),o=n.languages[i];r.className=r.className.replace(a,"").replace(/\s+/g," ")+" language-"+i;var l=r.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(a,"").replace(/\s+/g," ")+" language-"+i);var c=r.textContent,u={element:r,language:i,grammar:o,code:c};function d(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),t&&t.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(t&&t.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(s&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){d(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else d(n.highlight(u.code,u.grammar,u.language));else d(n.util.encode(u.code))},highlight:function(e,a,r){var t={code:e,grammar:a,language:r};return n.hooks.run("before-tokenize",t),t.tokens=n.tokenize(t.code,t.grammar),n.hooks.run("after-tokenize",t),s.stringify(n.util.encode(t.tokens),t.language)},matchGrammar:function(e,a,r,t,i,o,l){for(var c in r)if(r.hasOwnProperty(c)&&r[c]){var u=r[c];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(l&&l==c+","+d)return;var p=u[d],g=p.inside,v=!!p.lookbehind,b=!!p.greedy,m=0,f=p.alias;if(b&&!p.pattern.global){var h=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,h+"g")}p=p.pattern||p;for(var x=t,y=i;x<a.length;y+=a[x].length,++x){var _=a[x];if(a.length>e.length)return;if(!(_ instanceof s)){if(b&&x!=a.length-1){p.lastIndex=y;var w=p.exec(e);if(!w)break;for(var k=w.index+(v&&w[1]?w[1].length:0),C=w.index+w[0].length,F=x,B=y,A=a.length;F<A&&(B<C||!a[F].type&&!a[F-1].greedy);++F)B+=a[F].length,k>=B&&(++x,y=B);if(a[x]instanceof s)continue;P=F-x,_=e.slice(y,B),w.index-=y}else{p.lastIndex=0;w=p.exec(_);var P=1}if(w){v&&(m=w[1]?w[1].length:0);k=w.index+m,w=w[0].slice(m),C=k+w.length;var S=_.slice(0,k),$=_.slice(C),j=[x,P];S&&(++x,y+=S.length,j.push(S));var E=new s(c,g?n.tokenize(w,g):w,f,w,b);if(j.push(E),$&&j.push($),Array.prototype.splice.apply(a,j),1!=P&&n.matchGrammar(e,a,r,x,y,!0,c+","+d),o)break}else if(o)break}}}}},tokenize:function(e,a){var r=[e],s=a.rest;if(s){for(var t in s)a[t]=s[t];delete a.rest}return n.matchGrammar(e,r,a,0,0,!1),r},hooks:{all:{},add:function(e,a){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(a)},run:function(e,a){var r=n.hooks.all[e];if(r&&r.length)for(var s,t=0;s=r[t++];)s(a)}},Token:s};function s(e,a,r,n,s){this.type=e,this.content=a,this.alias=r,this.length=0|(n||"").length,this.greedy=!!s}if(e.Prism=n,s.stringify=function(e,a){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return s.stringify(e,a)})).join("");var r={type:e.type,content:s.stringify(e.content,a),tag:"span",classes:["token",e.type],attributes:{},language:a};if(e.alias){var t=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,t)}n.hooks.run("wrap",r);var i=Object.keys(r.attributes).map((function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(i?" "+i:"")+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(a){var r=JSON.parse(a.data),s=r.language,t=r.code,i=r.immediateClose;e.postMessage(n.highlight(t,n.languages[s],s)),i&&e.close()}),!1),n):n;var t=n.util.currentScript();if(t&&(n.filename=t.src,t.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){function i(){n.manual||n.highlightAll()}var o=document.readyState;"loading"===o||"interactive"===o&&t&&t.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return n}(r);e.exports&&(e.exports=n),"undefined"!==typeof a&&(a.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"],n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,a){var r={};r["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[a]},r["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};s["language-"+a]={pattern:/[\s\S]+/,inside:n.languages[a]};var t={};t[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",t)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var a=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+a.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+a.source+")*?(?=\\s*\\{)"),string:{pattern:a,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:r.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},r.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var r,s=e.getAttribute("data-src"),t=e,i=/\blang(?:uage)?-([\w-]+)\b/i;while(t&&!i.test(t.className))t=t.parentNode;if(t&&(r=(e.className.match(i)||[,""])[1]),!r){var o=(s.match(/\.(\w+)$/)||[,""])[1];r=a[o]||o}var l=document.createElement("code");l.className="language-"+r,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",s,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,r("c8ba"))},ecda:function(e,a,r){},f87c:function(e,a,r){"use strict";r.r(a);var n=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("progress-basic"),r("progress-colored"),r("progress-label"),r("progress-label-custom"),r("progress-stripped"),r("progress-multiple-bar"),r("progress-animated")],1)],1)},s=[],t=r("a15b"),i=r("b28b"),o=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Basic Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[r("div",{staticClass:"demo-vertical-spacing"},[r("div",{staticClass:"progress-wrapper"},[r("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value+"%")+" ")]),r("b-progress",{attrs:{max:"100"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),r("div",{staticClass:"progress-wrapper"},[r("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value1+"%")+" ")]),r("b-progress",{attrs:{max:"100"},model:{value:e.value1,callback:function(a){e.value1=a},expression:"value1"}})],1),r("div",{staticClass:"progress-wrapper"},[r("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value2+"%")+" ")]),r("b-progress",{attrs:{max:"100"},model:{value:e.value2,callback:function(a){e.value2=a},expression:"value2"}})],1),r("div",{staticClass:"progress-wrapper"},[r("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value3+"%")+" ")]),r("b-progress",{attrs:{max:"100"},model:{value:e.value3,callback:function(a){e.value3=a},expression:"value3"}})],1),r("div",{staticClass:"progress-wrapper"},[r("b-card-text",{staticClass:"mb-0"},[e._v(" Reticulating splines… "+e._s(e.value4+"%")+" ")]),r("b-progress",{attrs:{max:"100"},model:{value:e.value4,callback:function(a){e.value4=a},expression:"value4"}})],1)])])},l=[],c=r("1079"),u=r("d6e4"),d=r("49f5");const p='\n<template>\n  <div class="demo-vertical-spacing">\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value"\n        max="100"\n      />\n    </div>\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value1+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value1"\n        max="100"\n      />\n    </div>\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value2+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value2"\n        max="100"\n      />\n    </div>\n\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value3+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value3"\n        max="100"\n      />\n    </div>\n\n    <div class="progress-wrapper">\n      <b-card-text class="mb-0">\n        Reticulating splines… {{ value4+\'%\' }}\n      </b-card-text>\n      <b-progress\n        v-model="value4"\n        max="100"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n  data() {\n    return {\n      value: 0,\n      value1: 25,\n      value2: 50,\n      value3: 75,\n      value4: 100,\n    }\n  },\n}\n<\/script>\n',g='\n<template>\n  <b-row\n    v-for="bar in bars"\n    :key="bar.variant"\n  >\n    <b-col\n      md="2"\n      class="pt-2"\n    >\n      {{ bar.variant }}:\n    </b-col>\n    <b-col\n      md="10"\n      class="pt-md-2"\n    >\n      <b-progress\n        :key="bar.variant"\n        animated\n        :value="bar.value"\n        :variant="bar.variant"\n        :class="\'progress-bar-\'+bar.variant"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BProgress, BRow, BCol} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n  data: () => ({\n    bars: [\n      { variant: \'success\', value: 75 },\n      { variant: \'info\', value: 75 },\n      { variant: \'warning\', value: 75 },\n      { variant: \'danger\', value: 75 },\n      { variant: \'primary\', value: 75 },\n      { variant: \'secondary\', value: 75 },\n    ],\n    timer: null,\n  }),\n  mounted() {\n    this.timer = setInterval(() => {\n      // eslint-disable-next-line\n      this.bars.forEach(bar => (bar.value = 25 + Math.random() * 75))\n    }, 2000)\n  },\n  beforeDestroy() {\n    clearInterval(this.timer)\n    this.timer = null\n  },\n}\n<\/script>\n',v='\n<template>\n  <div class="demo-vertical-spacing">\n    <div>\n      <label>No label</label>\n      <b-progress\n        value="25"\n        max="100"\n      />\n    </div>\n\n    <div>\n      <label>Value label</label>\n      <b-progress\n        value="35"\n        max="100"\n        show-value\n        variant="secondary"\n        class="progress-bar-secondary"\n      />\n    </div>\n\n    <div>\n      <label>Progress label</label>\n      <b-progress\n        value="45"\n        max="100"\n        show-progress\n        variant="success"\n        class="progress-bar-success"\n      />\n    </div>\n\n    <div>\n      <label>Value label with precision</label>\n      <b-progress\n        value="55"\n        max="100"\n        precision="2"\n        show-value\n        variant="danger"\n        class="progress-bar-danger"\n      />\n    </div>\n\n    <div>\n      <label>Progress label with precision</label>\n      <b-progress\n        value="65"\n        max="100"\n        precision="2"\n        show-progress\n        variant="warning"\n        class="progress-bar-warning"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n',b='\n<template>\n  <b-progress :max="max">\n    <b-progress-bar\n      variant="danger"\n      :value="values[0]"\n      show-progress\n    />\n    <b-progress-bar\n      variant="warning"\n      :value="values[1]"\n      show-progress\n    />\n    <b-progress-bar\n      variant="primary"\n      :value="values[2]"\n      show-progress\n    />\n  </b-progress>\n</template>\n\n<script>\nimport { BProgressBar, BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgressBar,\n    BProgress,\n  },\n  data() {\n    return {\n      values: [15, 50, 10],\n      max: 100,\n    }\n  },\n}\n<\/script>\n',m='\n<template>\n  <div class="demo-vertical-spacing">\n    <b-progress\n      value="25"\n      max="100"\n      striped\n    />\n    <b-progress\n      value="35"\n      max="100"\n      striped\n      class="progress-bar-secondary"\n      variant="secondary"\n    />\n    <b-progress\n      value="45"\n      max="100"\n      striped\n      variant="success"\n      class="progress-bar-success"\n    />\n    <b-progress\n      value="55"\n      max="100"\n      striped\n      variant="danger"\n      class="progress-bar-danger"\n    />\n    <b-progress\n      value="65"\n      max="100"\n      striped\n      variant="warning"\n      class="progress-bar-warning"\n    />\n    <b-progress\n      value="75"\n      max="100"\n      striped\n      variant="info"\n      class="progress-bar-info"\n    />\n    <b-progress\n      value="85"\n      max="100"\n      striped\n      variant="dark"\n      class="progress-bar-dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n\n',f='\n<template>\n  <div class="demo-vertical-spacing">\n    <div>\n      <label>Custom label via default slot</label>\n      <b-progress\n        :max="max"\n      >\n        <b-progress-bar :value="value">\n          <strong>{{ value.toFixed(2) }} / {{ max }}</strong>\n        </b-progress-bar>\n      </b-progress>\n    </div>\n\n    <div>\n      <label>Custom label via property</label>\n      <b-progress\n        :max="max"\n        class="progress-bar-info"\n      >\n        <b-progress-bar\n          :value="value"\n          :label="`${((value / max) * 100).toFixed(2)}%`"\n          variant="info"\n        />\n      </b-progress>\n    </div>\n\n    <div>\n      <label>Custom label via property (HTML support)</label>\n      <b-progress\n        :max="max"\n        class="progress-bar-warning"\n      >\n        <b-progress-bar\n          :value="value"\n          :label-html="`<del>${value}</del>`"\n          variant="warning"\n        />\n      </b-progress>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BProgress, BProgressBar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n    BProgressBar,\n  },\n  data() {\n    return {\n      value: 33.333333333,\n      max: 50,\n    }\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="demo-vertical-spacing">\n    <b-progress\n      value="25"\n      max="100"\n    />\n    <b-progress\n      value="35"\n      max="100"\n      class="progress-bar-secondary"\n      variant="secondary"\n    />\n    <b-progress\n      value="45"\n      max="100"\n      class="progress-bar-success"\n      variant="success"\n    />\n    <b-progress\n      value="55"\n      max="100"\n      class="progress-bar-danger"\n      variant="danger"\n    />\n    <b-progress\n      value="65"\n      max="100"\n      class="progress-bar-warning"\n      variant="warning"\n    />\n    <b-progress\n      value="75"\n      max="100"\n      class="progress-bar-info"\n      variant="info"\n    />\n    <b-progress\n      value="85"\n      max="100"\n      class="progress-bar-dark"\n      variant="dark"\n    />\n  </div>\n</template>\n\n<script>\nimport { BProgress } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BProgress,\n  },\n}\n<\/script>\n';var x={components:{BCardCode:c["a"],BCardText:u["a"],BProgress:d["a"]},data(){return{value:0,value1:25,value2:50,value3:75,value4:100,codeBasic:p}}},y=x,_=r("2877"),w=Object(_["a"])(y,o,l,!1,null,null,null),k=w.exports,C=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Colored Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeColored)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Use")]),r("code",[e._v("variant")]),r("span",[e._v("prop to add different colors to progressbar and add ")]),r("code",[e._v(".progress-bar-{color_name}")]),e._v(". ")]),r("div",{staticClass:"demo-vertical-spacing"},[r("b-progress",{attrs:{value:"25",max:"100"}}),r("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100",variant:"secondary"}}),r("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100",variant:"success"}}),r("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",variant:"danger"}}),r("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",variant:"warning"}}),r("b-progress",{staticClass:"progress-bar-info",attrs:{value:"75",max:"100",variant:"info"}}),r("b-progress",{staticClass:"progress-bar-dark",attrs:{value:"85",max:"100",variant:"dark"}})],1)],1)},F=[],B={components:{BCardCode:c["a"],BProgress:d["a"],BCardText:u["a"]},data(){return{codeColored:h}}},A=B,P=Object(_["a"])(A,C,F,!1,null,null,null),S=P.exports,$=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Labeled Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeLabel)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Add labels to your progress bars by either enabling")]),r("code",[e._v("show-progress")]),r("span",[e._v("(percentage of max) or")]),r("code",[e._v("show-value")]),r("span",[e._v(" for the current absolute value. You may also set the precision (number of digits after the decimal) via the ")]),r("code",[e._v("precision")]),r("span",[e._v("prop (default is 0digits after the decimal).")])]),r("div",{staticClass:"demo-vertical-spacing"},[r("div",[r("label",[e._v("No label")]),r("b-progress",{attrs:{value:"25",max:"100"}})],1),r("div",[r("label",[e._v("Value label")]),r("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100","show-value":"",variant:"secondary"}})],1),r("div",[r("label",[e._v("Progress label")]),r("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100","show-progress":"",variant:"success"}})],1),r("div",[r("label",[e._v("Value label with precision")]),r("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",precision:"2","show-value":"",variant:"danger"}})],1),r("div",[r("label",[e._v("Progress label with precision")]),r("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",precision:"2","show-progress":"",variant:"warning"}})],1)])],1)},j=[],E={components:{BCardCode:c["a"],BProgress:d["a"],BCardText:u["a"]},data(){return{codeLabel:v}}},O=E,L=Object(_["a"])(O,$,j,!1,null,null,null),T=L.exports,N=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Striped Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeStripped)+" ")]},proxy:!0}])},[r("b-card-text",[e._v("Set striped to apply a stripe via CSS gradient over the progress bar's background variant.")]),r("div",{staticClass:"demo-vertical-spacing"},[r("b-progress",{attrs:{value:"25",max:"100",striped:""}}),r("b-progress",{staticClass:"progress-bar-secondary",attrs:{value:"35",max:"100",striped:"",variant:"secondary"}}),r("b-progress",{staticClass:"progress-bar-success",attrs:{value:"45",max:"100",striped:"",variant:"success"}}),r("b-progress",{staticClass:"progress-bar-danger",attrs:{value:"55",max:"100",striped:"",variant:"danger"}}),r("b-progress",{staticClass:"progress-bar-warning",attrs:{value:"65",max:"100",striped:"",variant:"warning"}}),r("b-progress",{staticClass:"progress-bar-info",attrs:{value:"75",max:"100",striped:"",variant:"info"}}),r("b-progress",{staticClass:"progress-bar-dark",attrs:{value:"85",max:"100",striped:"",variant:"dark"}})],1)],1)},M=[],I={components:{BCardCode:c["a"],BProgress:d["a"],BCardText:u["a"]},data(){return{codeStripped:m}}},R=I,D=Object(_["a"])(R,N,M,!1,null,null,null),z=D.exports,H=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Animated Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAnimated)+" ")]},proxy:!0}])},[r("b-card-text",{staticClass:"mb-0"},[r("span",[e._v("The striped gradient can also be animated by setting the")]),r("code",[e._v("animated")]),r("span",[e._v("prop.")])]),e._l(e.bars,(function(a){return r("b-row",{key:a.variant},[r("b-col",{staticClass:"pt-2",attrs:{md:"2"}},[e._v(" "+e._s(a.variant)+": ")]),r("b-col",{staticClass:"pt-md-2",attrs:{md:"10"}},[r("b-progress",{key:a.variant,class:"progress-bar-"+a.variant,attrs:{animated:"",value:a.value,variant:a.variant}})],1)],1)}))],2)},Z=[],q={components:{BRow:t["a"],BCol:i["a"],BCardCode:c["a"],BProgress:d["a"],BCardText:u["a"]},data(){return{codeAnimated:g,bars:[{variant:"primary",value:75},{variant:"secondary",value:75},{variant:"success",value:75},{variant:"info",value:75},{variant:"danger",value:75},{variant:"warning",value:75}],timer:null}},mounted(){this.timer=setInterval(()=>{this.bars.forEach(e=>e.value=25+75*Math.random())},2e3)},beforeDestroy(){clearInterval(this.timer),this.timer=null}},W=q,G=Object(_["a"])(W,H,Z,!1,null,null,null),J=G.exports,V=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Multiple bars"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeMultipleBar)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Include multiple")]),r("code",[e._v("<b-progress-bar>")]),r("span",[e._v("sub-components in a")]),r("code",[e._v("<b-progress>")]),r("span",[e._v("component to build a horizontally stacked set of progress bars.")])]),r("b-progress",{attrs:{max:e.max}},[r("b-progress-bar",{attrs:{variant:"danger",value:e.values[0],"show-progress":""}}),r("b-progress-bar",{attrs:{variant:"warning",value:e.values[1],"show-progress":""}}),r("b-progress-bar",{attrs:{variant:"primary",value:e.values[2],"show-progress":""}})],1)],1)},U=[],X=r("cf07"),Y={components:{BCardCode:c["a"],BProgressBar:X["a"],BCardText:u["a"],BProgress:d["a"]},data(){return{values:[15,50,10],max:100,codeMultipleBar:b}}},K=Y,Q=Object(_["a"])(K,V,U,!1,null,null,null),ee=Q.exports,ae=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("b-card-code",{attrs:{title:"Custom Labeled Progress"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustomLabel)+" ")]},proxy:!0}])},[r("b-card-text",[r("span",[e._v("Need more control over the label? Provide your own label by using the default slot within a")]),r("code",[e._v("<b-progress-bar>")]),r("span",[e._v("sub-component, or by using the")]),r("code",[e._v("label")]),r("span",[e._v("or")]),r("code",[e._v("label-html")]),r("span",[e._v(" property on ")]),r("code",[e._v("<b-progress-bar>")]),e._v(": ")]),r("div",{staticClass:"demo-vertical-spacing"},[r("div",[r("label",[e._v("Custom label via default slot")]),r("b-progress",{attrs:{max:e.max}},[r("b-progress-bar",{attrs:{value:e.value}},[r("strong",[e._v(e._s(e.value.toFixed(2))+" / "+e._s(e.max))])])],1)],1),r("div",[r("label",[e._v("Custom label via property")]),r("b-progress",{staticClass:"progress-bar-info",attrs:{max:e.max}},[r("b-progress-bar",{attrs:{value:e.value,label:(e.value/e.max*100).toFixed(2)+"%",variant:"info"}})],1)],1),r("div",[r("label",[e._v("Custom label via property (HTML support)")]),r("b-progress",{staticClass:"progress-bar-warning",attrs:{max:e.max}},[r("b-progress-bar",{attrs:{value:e.value,"label-html":"<del>"+e.value+"</del>",variant:"warning"}})],1)],1)])],1)},re=[],ne={components:{BCardCode:c["a"],BProgress:d["a"],BProgressBar:X["a"],BCardText:u["a"]},data(){return{codeCustomLabel:f,value:33.333333333,max:50}}},se=ne,te=Object(_["a"])(se,ae,re,!1,null,null,null),ie=te.exports,oe={components:{BRow:t["a"],BCol:i["a"],ProgressBasic:k,ProgressColored:S,ProgressLabel:T,ProgressAnimated:J,ProgressStripped:z,ProgressMultipleBar:ee,ProgressLabelCustom:ie}},le=oe,ce=Object(_["a"])(le,n,s,!1,null,null,null);a["default"]=ce.exports}}]);