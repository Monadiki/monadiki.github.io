(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96277a4c"],{"2f73":function(e,t,n){},"541c":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?n("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:n("b-card-body",[e._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),n("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},a=[],l=(n("e9c4"),n("205f")),r=n("4968"),s=n("ba06"),o=n("6197"),c=n("5843"),u=(n("c197"),n("84bf"),n("8d51")),d=n.n(u),p={components:{BCard:l["a"],BCardTitle:r["a"],BCardSubTitle:s["a"],BCardBody:o["a"],BCollapse:c["a"],Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},f=p,h=(n("8d54"),n("2877")),g=Object(h["a"])(f,i,a,!1,null,"aa799a9e",null);t["a"]=g.exports},"84bf":function(e,t,n){},"895b":function(e,t,n){"use strict";n("2f73")},"8d51":function(e,t,n){"use strict";function i(e){for(var t=arguments,n=1;n<arguments.length;n++)for(var i in arguments[n])e[i]=t[n][i];return e}var a={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,t){var n=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),a=t.props.inline,l=t.props.language,r=Prism.languages[l],s="language-"+l;return a?e("code",i({},t.data,{class:[t.data.class,s],domProps:i({},t.data.domProps,{innerHTML:Prism.highlight(n,r)})})):e("pre",i({},t.data,{class:[t.data.class,s]}),[e("code",{class:s,domProps:{innerHTML:Prism.highlight(n,r)}})])}};e.exports=a},"8d54":function(e,t,n){"use strict";n("ecda")},"953d":function(e,t,n){!function(t,i){e.exports=i(n("9339"))}(0,(function(e){return function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=2)}([function(t,n){t.exports=e},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),a=n.n(i),l=n(6),r=n(5),s=r(a.a,l.a,!1,null,null,null);t.default=s.exports},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.quillEditor=t.Quill=void 0;var a=n(0),l=i(a),r=n(1),s=i(r),o=window.Quill||l.default,c=function(e,t){t&&(s.default.props.globalOptions.default=function(){return t}),e.component(s.default.name,s.default)},u={Quill:o,quillEditor:s.default,install:c};t.default=u,t.Quill=o,t.quillEditor=s.default,t.install=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={theme:"snow",boundary:document.body,modules:{toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},placeholder:"Insert text here ...",readOnly:!1}},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),l=i(a),r=n(3),s=i(r),o=window.Quill||l.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),i=1;i<arguments.length;i++){var a=arguments[i];if(null!=a)for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(n[l]=a[l])}return n},writable:!0,configurable:!0}),t.default={name:"quill-editor",data:function(){return{_options:{},_content:"",defaultOptions:s.default}},props:{content:String,value:String,disabled:{type:Boolean,default:!1},options:{type:Object,required:!1,default:function(){return{}}},globalOptions:{type:Object,required:!1,default:function(){return{}}}},mounted:function(){this.initialize()},beforeDestroy:function(){this.quill=null,delete this.quill},methods:{initialize:function(){var e=this;this.$el&&(this._options=Object.assign({},this.defaultOptions,this.globalOptions,this.options),this.quill=new o(this.$refs.editor,this._options),this.quill.enable(!1),(this.value||this.content)&&this.quill.pasteHTML(this.value||this.content),this.disabled||this.quill.enable(!0),this.quill.on("selection-change",(function(t){t?e.$emit("focus",e.quill):e.$emit("blur",e.quill)})),this.quill.on("text-change",(function(t,n,i){var a=e.$refs.editor.children[0].innerHTML,l=e.quill,r=e.quill.getText();"<p><br></p>"===a&&(a=""),e._content=a,e.$emit("input",e._content),e.$emit("change",{html:a,text:r,quill:l})})),this.$emit("ready",this.quill))}},watch:{content:function(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},value:function(e,t){this.quill&&(e&&e!==this._content?(this._content=e,this.quill.pasteHTML(e)):e||this.quill.setText(""))},disabled:function(e,t){this.quill&&this.quill.enable(!e)}}}},function(e,t){e.exports=function(e,t,n,i,a,l){var r,s=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(r=e,s=e.default);var c,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId=a),l?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},u._ssrRegister=c):i&&(c=i),c){var d=u.functional,p=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:r,exports:s,options:u}}},function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"quill-editor"},[e._t("toolbar"),e._v(" "),n("div",{ref:"editor"})],2)},a=[],l={render:i,staticRenderFns:a};t.a=l}])}))},a395:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("quill-editor-snow"),n("quill-editor-bubble"),n("quill-editor-custom")],1)],1)},a=[],l=n("a15b7"),r=n("b28b"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Snow Editor"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSnow)+" ")]},proxy:!0}])},[n("b-card-text",[e._v("Snow is a clean, flat toolbar theme")]),n("quill-editor",{attrs:{options:e.snowOption},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},o=[],c=n("d6e4"),u=n("541c"),d=n("953d"),p='\n<template>\n  <div>\n    <quill-editor\n      v-model="content"\n      :options="editorOption"\n    />\n  </div>\n</template>\n\n<script>\nimport { quillEditor } from \'vue-quill-editor\'\n\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      theme: \'bubble\',\n    },\n    content: `<h2><span>Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>.</p><br />\n<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>`,\n  }),\n}\n<\/script>\n',f='\n<template>\n  <quill-editor\n    v-model="content"\n    :options="snowOption"\n  />\n</template>\n\n<script>\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\n\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    content: `<h1>Quill Rich Text Editor</h1>\n  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p>\n  <iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\n  <p><br></p>\n  <h2>Getting Started is Easy</h2>\n  <p><br></p>\n  <pre>\n// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\n  var quill = new Quill(\'#editor\', {\n  modules: {\n  toolbar: \'#toolbar\'\n  },\n  theme: \'snow\'\n  });\n// Open your browser\'s developer console to try out the API!</pre>  `,\n  }),\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <quill-editor\n      v-model="content"\n      :options="editorOption"\n      >\n      <div\n        id="toolbar"\n        slot="toolbar"\n      >\n        \x3c!-- Add a bold button --\x3e\n        <button class="ql-bold">\n          Bold\n        </button>\n        <button class="ql-italic">\n          Italic\n        </button>\n\n        \x3c!-- Add font size dropdown --\x3e\n        <select class="ql-size">\n          <option value="small" />\n          \x3c!-- Note a missing, thus falsy value, is used to reset to default --\x3e\n          <option selected />\n          <option value="large" />\n          <option value="huge" />\n        </select>\n\n        <select class="ql-font">\n          <option selected="selected" />\n          <option value="serif" />\n          <option value="monospace" />\n        </select>\n\n        \x3c!-- Add subscript and superscript buttons --\x3e\n        <button\n          class="ql-script"\n          value="sub"\n        />\n        <button\n          class="ql-script"\n          value="super"\n        />\n\n        \x3c!-- You can also add your own --\x3e\n        <button\n          style="width:auto"\n          @click="customButtonClick"\n        >\n          Click here\n        </button>\n      </div>\n    </quill-editor>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport \'quill/dist/quill.core.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.snow.css\'\n// eslint-disable-next-line\nimport \'quill/dist/quill.bubble.css\'\nimport { quillEditor } from \'vue-quill-editor\'\n\nexport default {\n  components: {\n    quillEditor,\n  },\n  data: () => ({\n    editorOption: {\n      modules: {\n        toolbar: \'#toolbar\',\n      },\n    },\n    content: `<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />\n<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />\n<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>`,\n  }),\n  methods: {\n    customButtonClick() {\n      alert(\'Button clicked!\')\n    },\n  },\n}\n<\/script>\n',g={components:{quillEditor:d["quillEditor"],BCardCode:u["a"],BCardText:c["a"]},data:function(){return{codeSnow:f,snowOption:{theme:"snow"},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'snow\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}}},b=g,m=n("2877"),v=Object(m["a"])(b,s,o,!1,null,null,null),y=v.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Bubble Editor"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBubble)+" ")]},proxy:!0}])},[n("b-card-text",[e._v("Bubble is a simple tooltip based theme.")]),n("quill-editor",{attrs:{options:e.editorOption},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},x=[],q={components:{quillEditor:d["quillEditor"],BCardCode:u["a"],BCardText:c["a"]},data:function(){return{codeBubble:p,editorOption:{theme:"bubble",syntax:!1,modules:{toolbar:[["bold","italic"],[{header:[1,2,3,4,5,6,!1]}],["link","image"]]}},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'bubble\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}}},_=q,k=Object(m["a"])(_,w,x,!1,null,null,null),F=k.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Custom Toolbar"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustom)+" ")]},proxy:!0}])},[n("b-card-text",[e._v("You have freedom to create your own custom toolbar")]),n("quill-editor",{attrs:{options:e.editorOption},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}},[n("div",{attrs:{slot:"toolbar",id:"toolbar"},slot:"toolbar"},[n("button",{staticClass:"ql-bold"},[e._v(" Bold ")]),n("button",{staticClass:"ql-italic"},[e._v(" Italic ")]),n("select",{staticClass:"ql-size"},[n("option",{attrs:{value:"small"}}),n("option",{attrs:{selected:""}}),n("option",{attrs:{value:"large"}}),n("option",{attrs:{value:"huge"}})]),n("select",{staticClass:"ql-font"},[n("option",{attrs:{selected:"selected"}}),n("option",{attrs:{value:"serif"}}),n("option",{attrs:{value:"monospace"}})]),n("button",{staticClass:"ql-script",attrs:{value:"sub"}}),n("button",{staticClass:"ql-script",attrs:{value:"super"}}),n("button",{staticClass:"w-auto btn btn-primary",on:{click:e.customButtonClick}},[e._v(" Click here ")])])])],1)},A=[],S={components:{quillEditor:d["quillEditor"],BCardCode:u["a"],BCardText:c["a"]},data:function(){return{codeCustom:h,editorOption:{modules:{toolbar:"#toolbar"}},content:'<h1 class="ql-align-center">Quill Rich Text Editor</h1>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text">\n                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built\n                      for the modern web. With its\n                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive\n                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.\n                    </p>\n                    <p class="card-text"><br /></p>\n                    <iframe\n                      class="ql-video ql-align-center"\n                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"\n                      width="560"\n                      height="238"\n                    ></iframe>\n                    <p class="card-text"><br /></p>\n                    <p class="card-text"><br /></p>\n                    <h2 class="ql-align-center">Getting Started is Easy</h2>\n                    <p class="card-text"><br /></p>\n                    <pre>\n// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;\n// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;\nvar quill = new Quill(\'#editor\', {\n    modules: {\n        toolbar: \'#toolbar\'\n    },\n    theme: \'snow\'\n});\n// Open your browser\'s developer console to try out the API!</pre>'}},methods:{customButtonClick:function(){alert("Button clicked!")}}},C=S,O=Object(m["a"])(C,j,A,!1,null,null,null),E=O.exports,$={components:{BRow:l["a"],BCol:r["a"],QuillEditorSnow:y,QuillEditorBubble:F,QuillEditorCustom:E}},B=$,P=(n("895b"),Object(m["a"])(B,i,a,!1,null,null,null));t["default"]=P.exports},c197:function(e,t,n){(function(t){var n="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},i=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,i={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,i.util.encode(e.content),e.alias):Array.isArray(e)?e.map(i.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++n}),e["__id"]},clone:function e(t,n){var a,l,r=i.util.type(t);switch(n=n||{},r){case"Object":if(l=i.util.objId(t),n[l])return n[l];for(var s in a={},n[l]=a,t)t.hasOwnProperty(s)&&(a[s]=e(t[s],n));return a;case"Array":return l=i.util.objId(t),n[l]?n[l]:(a=[],n[l]=a,t.forEach((function(t,i){a[i]=e(t,n)})),a);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(i.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=i.util.clone(i.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){a=a||i.languages;var l=a[e],r={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var o in n)n.hasOwnProperty(o)&&(r[o]=n[o]);n.hasOwnProperty(s)||(r[s]=l[s])}var c=a[e];return a[e]=r,i.languages.DFS(i.languages,(function(t,n){n===c&&t!=e&&(this[t]=r)})),r},DFS:function e(t,n,a,l){l=l||{};var r=i.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var o=t[s],c=i.util.type(o);"Object"!==c||l[r(o)]?"Array"!==c||l[r(o)]||(l[r(o)]=!0,e(o,n,s,l)):(l[r(o)]=!0,e(o,n,null,l))}}},plugins:{},highlightAll:function(e,t){i.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};i.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),i.hooks.run("before-all-elements-highlight",a);for(var l,r=0;l=a.elements[r++];)i.highlightElement(l,!0===t,a.callback)},highlightElement:function(n,a,l){var r=i.util.getLanguage(n),s=i.languages[r];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+r;var o=n.parentNode;o&&"pre"===o.nodeName.toLowerCase()&&(o.className=o.className.replace(t,"").replace(/\s+/g," ")+" language-"+r);var c=n.textContent,u={element:n,language:r,grammar:s,code:c};function d(e){u.highlightedCode=e,i.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,i.hooks.run("after-highlight",u),i.hooks.run("complete",u),l&&l.call(u.element)}if(i.hooks.run("before-sanity-check",u),!u.code)return i.hooks.run("complete",u),void(l&&l.call(u.element));if(i.hooks.run("before-highlight",u),u.grammar)if(a&&e.Worker){var p=new Worker(i.filename);p.onmessage=function(e){d(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else d(i.highlight(u.code,u.grammar,u.language));else d(i.util.encode(u.code))},highlight:function(e,t,n){var l={code:e,grammar:t,language:n};return i.hooks.run("before-tokenize",l),l.tokens=i.tokenize(l.code,l.grammar),i.hooks.run("after-tokenize",l),a.stringify(i.util.encode(l.tokens),l.language)},matchGrammar:function(e,t,n,l,r,s,o){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){var u=n[c];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(o&&o==c+","+d)return;var p=u[d],f=p.inside,h=!!p.lookbehind,g=!!p.greedy,b=0,m=p.alias;if(g&&!p.pattern.global){var v=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,v+"g")}p=p.pattern||p;for(var y=l,w=r;y<t.length;w+=t[y].length,++y){var x=t[y];if(t.length>e.length)return;if(!(x instanceof a)){if(g&&y!=t.length-1){p.lastIndex=w;var q=p.exec(e);if(!q)break;for(var _=q.index+(h&&q[1]?q[1].length:0),k=q.index+q[0].length,F=y,j=w,A=t.length;F<A&&(j<k||!t[F].type&&!t[F-1].greedy);++F)j+=t[F].length,_>=j&&(++y,w=j);if(t[y]instanceof a)continue;S=F-y,x=e.slice(w,j),q.index-=w}else{p.lastIndex=0;q=p.exec(x);var S=1}if(q){h&&(b=q[1]?q[1].length:0);_=q.index+b,q=q[0].slice(b),k=_+q.length;var C=x.slice(0,_),O=x.slice(k),E=[y,S];C&&(++y,w+=C.length,E.push(C));var $=new a(c,f?i.tokenize(q,f):q,m,q,g);if(E.push($),O&&E.push(O),Array.prototype.splice.apply(t,E),1!=S&&i.matchGrammar(e,t,n,y,w,!0,c+","+d),s)break}else if(s)break}}}}},tokenize:function(e,t){var n=[e],a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}return i.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=i.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=i.hooks.all[e];if(n&&n.length)for(var a,l=0;a=n[l++];)a(t)}},Token:a};function a(e,t,n,i,a){this.type=e,this.content=t,this.alias=n,this.length=0|(i||"").length,this.greedy=!!a}if(e.Prism=i,a.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return a.stringify(e,t)})).join("");var n={type:e.type,content:a.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var l=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,l)}i.hooks.run("wrap",n);var r=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(r?" "+r:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(i.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),a=n.language,l=n.code,r=n.immediateClose;e.postMessage(i.highlight(l,i.languages[a],a)),r&&e.close()}),!1),i):i;var l=i.util.currentScript();if(l&&(i.filename=l.src,l.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){function r(){i.manual||i.highlightAll()}var s=document.readyState;"loading"===s||"interactive"===s&&l&&l.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return i}(n);e.exports&&(e.exports=i),"undefined"!==typeof t&&(t.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},i.languages.markup["tag"].inside["attr-value"].inside["entity"]=i.languages.markup["entity"],i.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[t]},n["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:i.languages[t]};var l={};l[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:a},i.languages.insertBefore("markup","cdata",l)}}),i.languages.xml=i.languages.extend("markup",{}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.markup.tag.addInlined("script","javascript"),i.languages.js=i.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var n,a=e.getAttribute("data-src"),l=e,r=/\blang(?:uage)?-([\w-]+)\b/i;while(l&&!r.test(l.className))l=l.parentNode;if(l&&(n=(e.className.match(r)||[,""])[1]),!n){var s=(a.match(/\.(\w+)$/)||[,""])[1];n=t[s]||s}var o=document.createElement("code");o.className="language-"+n,e.textContent="",o.textContent="Loading…",e.appendChild(o);var c=new XMLHttpRequest;c.open("GET",a,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(o.textContent=c.responseText,i.highlightElement(o),e.setAttribute("data-src-loaded","")):c.status>=400?o.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:o.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,n("c8ba"))},ecda:function(e,t,n){}}]);