(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e3512db8"],{1079:function(t,n,e){"use strict";var r=e("541c");n["a"]=r["a"]},"541c":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v(" "+t._s(t.$attrs["sub-title"])+" ")]):t._e()],1),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),void 0!==t.$attrs["no-body"]?[t._t("default"),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)},i=[],o=e("205f"),a=e("4968"),p=e("ba06"),d=e("6197"),s=e("5843"),u=(e("c197"),e("84bf"),e("8d51")),b=e.n(u),l={components:{BCard:o["a"],BCardTitle:a["a"],BCardSubTitle:p["a"],BCardBody:d["a"],BCollapse:s["a"],Prism:b.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data(){return{parentID:"",code_visible:!1}},computed:{cardAttrs(){const t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created(){this.parentID=String(Math.floor(10*Math.random())+1)}},v=l,c=(e("8d54"),e("2877")),m=Object(c["a"])(v,r,i,!1,null,"aa799a9e",null);n["a"]=m.exports},5431:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("button-group-basic"),e("button-group-size"),e("button-group-dropdown-support")],1)],1)},i=[],o=e("a15b"),a=e("b28b"),p=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Basic"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Group a series of buttons together on a single line with ")]),e("code",[t._v("<b-button-group>")]),e("span",[t._v(".")])]),e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)},d=[],s=e("12aa"),u=e("1947"),b=e("d6e4"),l=e("1079"),v=e("e009");const c='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      First\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Second\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Third\n    </b-button>\n  </b-button-group>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div>\n    <div>\n      \x3c!-- large --\x3e\n      <b-button-group\n        size="lg"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n    <div>\n\n      \x3c!-- default --\x3e\n      <b-button-group\n        class="my-1"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n\n    <div>\n\n      \x3c!-- size --\x3e\n      <b-button-group\n        size="sm"\n      >\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          First\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Second\n        </b-button>\n        <b-button\n          v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n          variant="outline-primary"\n        >\n          Third\n        </b-button>\n      </b-button-group>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButtonGroup, BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',g='\n<template>\n  <b-button-group>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n    >\n      Button\n    </b-button>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      right\n      variant="outline-primary"\n      text="Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n    <b-dropdown\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      right\n      split\n      text="Split Menu"\n    >\n      <b-dropdown-item>Item 1</b-dropdown-item>\n      <b-dropdown-item>Item 2</b-dropdown-item>\n      <b-dropdown-divider />\n      <b-dropdown-item>Item 3</b-dropdown-item>\n    </b-dropdown>\n  </b-button-group>\n</template>\n\n<script>\nimport {\n  BButtonGroup, BButton, BDropdown, BDropdownItem, BDropdownDivider, \n} from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButtonGroup,\n    BDropdown,\n    BDropdownItem,\n    BButton,\n    BDropdownDivider,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n';var _={components:{BButtonGroup:s["a"],BButton:u["a"],BCardText:b["a"],BCardCode:l["a"]},directives:{Ripple:v["a"]},data(){return{codeBasic:c}}},w=_,B=e("2877"),f=Object(B["a"])(w,p,d,!1,null,null,null),y=f.exports,x=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Size"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeSize)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Set the size prop to ")]),e("code",[t._v("lg")]),e("span",[t._v(" or ")]),e("code",[t._v("sm")]),e("span",[t._v(" to render larger or smaller, respectively, buttons. There is no need to specify the size on the individual buttons.")])]),e("div",[e("b-button-group",{attrs:{size:"lg"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),e("div",[e("b-button-group",{staticClass:"my-1"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1),e("div",[e("b-button-group",{attrs:{size:"sm"}},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" First ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Second ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Third ")])],1)],1)],1)},h=[],S={components:{BButtonGroup:s["a"],BButton:u["a"],BCardText:b["a"],BCardCode:l["a"]},directives:{Ripple:v["a"]},data(){return{codeSize:m}}},C=S,D=Object(B["a"])(C,x,h,!1,null,null,null),I=D.exports,N=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{staticClass:"mb-0",attrs:{title:"Dropdown menu support"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDropdown)+" ")]},proxy:!0}])},[e("b-card-text",[e("span",[t._v("Add ")]),e("code",[t._v("<b-dropdown>")]),e("span",[t._v(" menus directly inside your ")]),e("code",[t._v("<b-button-group>")]),e("span",[t._v(". Note that split dropdown menus are not supported when prop ")]),e("code",[t._v("vertical")]),e("span",[t._v(" is set.")])]),e("b-button-group",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[t._v(" Button ")]),e("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{right:"",variant:"outline-primary",text:"Menu"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-divider"),e("b-dropdown-item",[t._v("Item 3")])],1),e("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary",right:"",split:"",text:"Split Menu"}},[e("b-dropdown-item",[t._v("Item 1")]),e("b-dropdown-item",[t._v("Item 2")]),e("b-dropdown-divider"),e("b-dropdown-item",[t._v("Item 3")])],1)],1)],1)},T=[],G=e("dd9a"),z=e("9eaa"),$=e("f47c"),k={components:{BButtonGroup:s["a"],BDropdown:G["a"],BDropdownItem:z["a"],BButton:u["a"],BCardCode:l["a"],BDropdownDivider:$["a"],BCardText:b["a"]},directives:{Ripple:v["a"]},data(){return{codeDropdown:g}}},R=k,F=Object(B["a"])(R,N,T,!1,null,null,null),O=F.exports,M={components:{BRow:o["a"],BCol:a["a"],ButtonGroupBasic:y,ButtonGroupSize:I,ButtonGroupDropdownSupport:O}},j=M,E=Object(B["a"])(j,r,i,!1,null,null,null);n["default"]=E.exports},"8d54":function(t,n,e){"use strict";e("ecda")},ecda:function(t,n,e){}}]);