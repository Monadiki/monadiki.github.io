(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-381beb18"],{1079:function(e,t,a){"use strict";var n=a("541c");t["a"]=n["a"]},"1cef":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{md:"6"}},[a("sidebar-basic")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-placement")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-variant")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-header")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-footer")],1),a("b-col",{attrs:{md:"6"}},[a("sidebar-without-backdrop")],1)],1)},r=[],i=a("a15b7"),o=a("b28b"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Sidebar Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("BootstrapVue's custom ")]),a("code",[e._v("<b-sidebar>")]),a("span",[e._v(" component is a fixed-position toggleable slide out box, which can be used for navigation, menus, details, etc.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-1",modifiers:{"sidebar-1":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-1",shadow:"","bg-variant":"white",backdrop:""}},[a("sidebar-content")],1)],1)],1)},l=[],d=a("1079"),c=a("1947"),u=a("baa4"),p=a("d6e4"),b=a("39ba"),g=a("e009"),m="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-1\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-1\"\n      shadow\n      bg-variant=\"white\"\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BImg,\n    SidebarContent\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",f='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      v-b-toggle.sidebar-no-header\n      variant="outline-primary"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id="sidebar-no-header"\n      aria-labelledby="sidebar-no-header-title"\n      no-header\n      bg-variant="white"\n      shadow\n      backdrop\n    >\n      <sidebar-content class="pt-2" />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport SidebarContent from \'./SidebarContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    \'b-toggle\': VBToggle,\n     Ripple,\n  },\n}\n<\/script>\n',v="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-right\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-right\"\n      bg-variant=\"white\"\n      right\n      backdrop\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n  },\n}\n<\/script>\n",h="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-variant\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-variant\"\n      bg-variant=\"dark\"\n      text-variant=\"light\"\n      shadow\n      backdrop\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",y="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-backdrop\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar Without Backdrop\n    </b-button>\n\n    <b-sidebar\n      id=\"sidebar-backdrop\"\n      bg-variant=\"white\"\n      shadow\n    >\n      <sidebar-content />\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport {BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport { codeBackdrop } from './code'\nimport SidebarContent from './SidebarContent.vue'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    BSidebar,\n    SidebarContent,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",_="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      v-b-toggle.sidebar-footer\n      variant=\"outline-primary\"\n    >\n      Toggle Sidebar\n    </b-button>\n    <b-sidebar\n      id=\"sidebar-footer\"\n      aria-label=\"Sidebar with custom footer\"\n      shadow\n      backdrop\n      bg-variant=\"white\"\n    >\n      <sidebar-content />\n      <template #footer>\n        <sidebar-content-footer />\n      </template>\n    </b-sidebar>\n  </div>\n</template>\n\n<script>\nimport { BButton, BSidebar, VBToggle} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\nimport SidebarContent from './SidebarContent.vue'\nimport SidebarContentFooter from './SidebarContentFooter.vue'\n\nexport default {\n  components: {\n    BButton,\n    BSidebar,\n    BCardText,\n    SidebarContent,\n    SidebarContentFooter,\n  },\n  directives: {\n    'b-toggle': VBToggle,\n    Ripple,\n  },\n}\n<\/script>\n",w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-center"},[n("b-avatar",{staticClass:"mr-1",attrs:{size:"72px",src:a("ed5f")}}),n("b-card-text",{staticClass:"mt-2 h4 color-inherit text-reset"},[e._v(" Black Widow ")])],1),n("b-list-group",{staticClass:"mt-3 rounded-0"},e._l(e.sidebarItems,(function(t){return n("b-list-group-item",{key:t.title,staticClass:"bg-transparent"},[n("feather-icon",{staticClass:"align-text-bottom",attrs:{icon:t.icon}}),n("span",{staticClass:"ml-1",domProps:{textContent:e._s(t.title)}})],1)})),1)],1)},k=[],x=a("e8a3"),S=a("3135"),B=a("d247"),C={components:{BAvatar:x["a"],BListGroup:S["a"],BListGroupItem:B["a"],BCardText:p["a"]},data:function(){return{sidebarItems:[{title:"Dashboard",icon:"GridIcon"},{title:"Analytics",icon:"ActivityIcon"},{title:"History",icon:"RefreshCwIcon"},{title:"Configuration",icon:"SettingsIcon"},{title:"Profile",icon:"UserIcon"}]}}},F=C,A=a("2877"),T=Object(A["a"])(F,w,k,!1,null,null,null),$=T.exports,j={components:{BCardCode:d["a"],BButton:c["a"],BSidebar:u["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":b["a"],Ripple:g["a"]},data:function(){return{codeBasic:m}}},E=j,N=Object(A["a"])(E,s,l,!1,null,null,null),O=N.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Sidebar Placement"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codePlacement)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("By default the sidebar will be placed on the left side fo the viewport. Set the ")]),a("code",[e._v("right")]),a("span",[e._v(" prop to ")]),a("code",[e._v("true")]),a("span",[e._v(" to have the sidebar appear on the right side of the viewport.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-right",modifiers:{"sidebar-right":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-right","bg-variant":"white",right:"",backdrop:"",shadow:""}},[a("sidebar-content")],1)],1)],1)},I=[],R={components:{BCardCode:d["a"],BButton:c["a"],BSidebar:u["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":b["a"],Ripple:g["a"]},data:function(){return{codePlacement:v}}},L=R,V=Object(A["a"])(L,P,I,!1,null,null,null),D=V.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Sidebar Variant"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVariant)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use the props ")]),a("code",[e._v("bg-variant")]),a("span",[e._v(" and ")]),a("code",[e._v("text-variant")]),a("span",[e._v(" to control the theme color variant of the background and text, respectively. Alternatively, you can apply styles or classes to specify the background and text colors. ")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-variant",modifiers:{"sidebar-variant":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-variant","bg-variant":"dark","text-variant":"light",shadow:"",backdrop:""}},[a("sidebar-content")],1)],1)],1)},H=[],M={components:{BCardCode:d["a"],BButton:c["a"],BSidebar:u["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":b["a"],Ripple:g["a"]},data:function(){return{codeVariant:h}}},W=M,G=Object(A["a"])(W,z,H,!1,null,null,null),Z=G.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Hiding the default header"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeHeader)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("You can disable the default header (including the close button) via the ")]),a("code",[e._v("no-header")]),a("span",[e._v(" prop. Note that you will need to provide a method of closing the sidebar. The ")]),a("code",[e._v("default")]),a("span",[e._v(" slot is scoped, which includes a")]),a("code",[e._v("hide()")]),a("span",[e._v(" method that can be used to close the sidebar.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-no-header",modifiers:{"sidebar-no-header":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-no-header","aria-labelledby":"sidebar-no-header-title","no-header":"","bg-variant":"white",shadow:"",backdrop:""}},[a("sidebar-content",{staticClass:"pt-2"})],1)],1)],1)},J=[],U={components:{BCardCode:d["a"],BButton:c["a"],BSidebar:u["a"],SidebarContent:$,BCardText:p["a"]},directives:{"b-toggle":b["a"],Ripple:g["a"]},data:function(){return{codeHeader:f}}},Y=U,X=Object(A["a"])(Y,q,J,!1,null,null,null),K=X.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Footer"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFooter)+" ")]},proxy:!0}])},[a("b-card-text",[a("code",[e._v("<b-sidebar>")]),a("span",[e._v(" provides a ")]),a("code",[e._v("footer")]),a("span",[e._v(" slot (optionally scoped), to allow you to provide content that appears at the bottom of the sidebar. The ")]),a("code",[e._v("footer")]),a("span",[e._v(" slot is scoped, which includes a")]),e._v(" "),a("code",[e._v("hide()")]),a("span",[e._v(" method that can be used to close the sidebar.")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-footer",modifiers:{"sidebar-footer":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar ")]),a("b-sidebar",{attrs:{id:"sidebar-footer","aria-label":"Sidebar with custom footer",shadow:"",backdrop:"","bg-variant":"white"},scopedSlots:e._u([{key:"footer",fn:function(){return[a("sidebar-content-footer")]},proxy:!0}])},[a("sidebar-content")],1)],1)],1)},ee=[],te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-2 border-top text-danger cursor-pointer"},[a("feather-icon",{attrs:{icon:"LogOutIcon"}}),a("span",{staticClass:"ml-1"},[e._v("Logout")])],1)},ae=[],ne={},re=Object(A["a"])(ne,te,ae,!1,null,null,null),ie=re.exports,oe={components:{BCardCode:d["a"],BButton:c["a"],BSidebar:u["a"],BCardText:p["a"],SidebarContent:$,SidebarContentFooter:ie},directives:{"b-toggle":b["a"],Ripple:g["a"]},data:function(){return{codeFooter:_}}},se=oe,le=Object(A["a"])(se,Q,ee,!1,null,null,null),de=le.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Backdrop"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBackdrop)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Sidebar component don't have backdrop by default. You can add it using ")]),a("code",[e._v("backdrop")]),a("span",[e._v(" prop. Below demo shows sidebar "),a("strong",[e._v("without")]),e._v(" backdrop")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-backdrop",modifiers:{"sidebar-backdrop":!0}}],attrs:{variant:"outline-primary"}},[e._v(" Toggle Sidebar Without Backdrop ")]),a("b-sidebar",{attrs:{id:"sidebar-backdrop","bg-variant":"white",shadow:""}},[a("sidebar-content")],1)],1)],1)},ue=[],pe={components:{BCardCode:d["a"],BButton:c["a"],BCardText:p["a"],BSidebar:u["a"],SidebarContent:$},directives:{"b-toggle":b["a"],Ripple:g["a"]},data:function(){return{codeBackdrop:y}}},be=pe,ge=Object(A["a"])(be,ce,ue,!1,null,null,null),me=ge.exports,fe={components:{BRow:i["a"],BCol:o["a"],SidebarBasic:O,SidebarPlacement:D,SidebarVariant:Z,SidebarHeader:K,SidebarFooter:de,SidebarWithoutBackdrop:me}},ve=fe,he=Object(A["a"])(ve,n,r,!1,null,null,null);t["default"]=he.exports},"541c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},r=[],i=(a("e9c4"),a("205f")),o=a("4968"),s=a("ba06"),l=a("6197"),d=a("5843"),c=(a("c197"),a("84bf"),a("8d51")),u=a.n(c),p={components:{BCard:i["a"],BCardTitle:o["a"],BCardSubTitle:s["a"],BCardBody:l["a"],BCollapse:d["a"],Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=p,g=(a("8d54"),a("2877")),m=Object(g["a"])(b,n,r,!1,null,"aa799a9e",null);t["a"]=m.exports},"84bf":function(e,t,a){},"8d51":function(e,t,a){"use strict";function n(e){for(var t=arguments,a=1;a<arguments.length;a++)for(var n in arguments[a])e[n]=t[a][n];return e}var r={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,t){var a=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),r=t.props.inline,i=t.props.language,o=Prism.languages[i],s="language-"+i;return r?e("code",n({},t.data,{class:[t.data.class,s],domProps:n({},t.data.domProps,{innerHTML:Prism.highlight(a,o)})})):e("pre",n({},t.data,{class:[t.data.class,s]}),[e("code",{class:s,domProps:{innerHTML:Prism.highlight(a,o)}})])}};e.exports=r},"8d54":function(e,t,a){"use strict";a("ecda")},c197:function(e,t,a){(function(t){var a="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++a}),e["__id"]},clone:function e(t,a){var r,i,o=n.util.type(t);switch(a=a||{},o){case"Object":if(i=n.util.objId(t),a[i])return a[i];for(var s in r={},a[i]=r,t)t.hasOwnProperty(s)&&(r[s]=e(t[s],a));return r;case"Array":return i=n.util.objId(t),a[i]?a[i]:(r=[],a[i]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var i=r[e],o={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in a)a.hasOwnProperty(l)&&(o[l]=a[l]);a.hasOwnProperty(s)||(o[s]=i[s])}var d=r[e];return r[e]=o,n.languages.DFS(n.languages,(function(t,a){a===d&&t!=e&&(this[t]=o)})),o},DFS:function e(t,a,r,i){i=i||{};var o=n.util.objId;for(var s in t)if(t.hasOwnProperty(s)){a.call(t,s,t[s],r||s);var l=t[s],d=n.util.type(l);"Object"!==d||i[o(l)]?"Array"!==d||i[o(l)]||(i[o(l)]=!0,e(l,a,s,i)):(i[o(l)]=!0,e(l,a,null,i))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)n.highlightElement(i,!0===t,r.callback)},highlightElement:function(a,r,i){var o=n.util.getLanguage(a),s=n.languages[o];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+o;var l=a.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+o);var d=a.textContent,c={element:a,language:o,grammar:s,code:d};function u(e){c.highlightedCode=e,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,n.hooks.run("after-highlight",c),n.hooks.run("complete",c),i&&i.call(c.element)}if(n.hooks.run("before-sanity-check",c),!c.code)return n.hooks.run("complete",c),void(i&&i.call(c.element));if(n.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){u(e.data)},p.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(n.highlight(c.code,c.grammar,c.language));else u(n.util.encode(c.code))},highlight:function(e,t,a){var i={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",i),i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),r.stringify(n.util.encode(i.tokens),i.language)},matchGrammar:function(e,t,a,i,o,s,l){for(var d in a)if(a.hasOwnProperty(d)&&a[d]){var c=a[d];c=Array.isArray(c)?c:[c];for(var u=0;u<c.length;++u){if(l&&l==d+","+u)return;var p=c[u],b=p.inside,g=!!p.lookbehind,m=!!p.greedy,f=0,v=p.alias;if(m&&!p.pattern.global){var h=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,h+"g")}p=p.pattern||p;for(var y=i,_=o;y<t.length;_+=t[y].length,++y){var w=t[y];if(t.length>e.length)return;if(!(w instanceof r)){if(m&&y!=t.length-1){p.lastIndex=_;var k=p.exec(e);if(!k)break;for(var x=k.index+(g&&k[1]?k[1].length:0),S=k.index+k[0].length,B=y,C=_,F=t.length;B<F&&(C<S||!t[B].type&&!t[B-1].greedy);++B)C+=t[B].length,x>=C&&(++y,_=C);if(t[y]instanceof r)continue;A=B-y,w=e.slice(_,C),k.index-=_}else{p.lastIndex=0;k=p.exec(w);var A=1}if(k){g&&(f=k[1]?k[1].length:0);x=k.index+f,k=k[0].slice(f),S=x+k.length;var T=w.slice(0,x),$=w.slice(S),j=[y,A];T&&(++y,_+=T.length,j.push(T));var E=new r(d,b?n.tokenize(k,b):k,v,k,m);if(j.push(E),$&&j.push($),Array.prototype.splice.apply(t,j),1!=A&&n.matchGrammar(e,t,a,y,_,!0,d+","+u),s)break}else if(s)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var i=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,i)}n.hooks.run("wrap",a);var o=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(o?" "+o:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,i=a.code,o=a.immediateClose;e.postMessage(n.highlight(i,n.languages[r],r)),o&&e.close()}),!1),n):n;var i=n.util.currentScript();if(i&&(n.filename=i.src,i.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){function o(){n.manual||n.highlightAll()}var s=document.readyState;"loading"===s||"interactive"===s&&i&&i.defer?document.addEventListener("DOMContentLoaded",o):window.requestAnimationFrame?window.requestAnimationFrame(o):window.setTimeout(o,16)}return n}(a);e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"],n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var i={};i[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",i)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var a,r=e.getAttribute("data-src"),i=e,o=/\blang(?:uage)?-([\w-]+)\b/i;while(i&&!o.test(i.className))i=i.parentNode;if(i&&(a=(e.className.match(o)||[,""])[1]),!a){var s=(r.match(/\.(\w+)$/)||[,""])[1];a=t[s]||s}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading…",e.appendChild(l);var d=new XMLHttpRequest;d.open("GET",r,!0),d.onreadystatechange=function(){4==d.readyState&&(d.status<400&&d.responseText?(l.textContent=d.responseText,n.highlightElement(l),e.setAttribute("data-src-loaded","")):d.status>=400?l.textContent="✖ Error "+d.status+" while fetching file: "+d.statusText:l.textContent="✖ Error: File does not exist or is empty")},d.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,a("c8ba"))},ecda:function(e,t,a){}}]);