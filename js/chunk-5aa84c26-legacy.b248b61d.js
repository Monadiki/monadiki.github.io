(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5aa84c26"],{"223c":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"toastification"},[e("div",{staticClass:"d-flex align-items-start"},[e("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[e("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),e("div",{staticClass:"d-flex flex-grow-1"},[e("div",[t.title?e("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?e("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),e("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(n){return t.$emit("close-toast")}}},[t.hideClose?t._e():e("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},i=[],o=e("e8a3"),r={components:{BAvatar:o["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=r,c=(e("b549"),e("2877")),l=Object(c["a"])(s,a,i,!1,null,"55dd3057",null);n["a"]=l.exports},"2e1f":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-row",[e("b-col",{attrs:{cols:"12"}},[e("toastification-variant"),e("toastification-position"),e("toastification-icon"),e("toastification-timeout")],1)],1)},i=[],o=e("a15b7"),r=e("b28b"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Variant"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeVariant)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("You can use ")]),e("code",[t._v("variant")]),e("span",[t._v(" prop for color variant.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v(" Primary ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(n){return t.showToast("secondary")}}},[t._v(" Secondary ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(n){return t.showToast("success")}}},[t._v(" Success ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(234, 84, 85, 0.15)",expression:"'rgba(234, 84, 85, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(n){return t.showToast("danger")}}},[t._v(" Danger ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(n){return t.showToast("warning")}}},[t._v(" Warning ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(n){return t.showToast("info")}}},[t._v(" Info ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(30, 30, 30, 0.15)",expression:"'rgba(30, 30, 30, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-dark"},on:{click:function(n){return t.showToast("dark")}}},[t._v(" Dark ")])],1)],1)},c=[],l=e("1947"),u=e("d6e4"),p=e("541c"),d=e("e009"),g=e("223c"),m='\n<template>\n  <div class="demo-inline-spacing">\n    \x3c!-- primary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="showToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="showToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- success trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="showToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- danger trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(234, 84, 85, 0.15)\'"\n      variant="outline-danger"\n      @click="showToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- warning trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="showToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- info trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="showToast(\'info\')"\n    >\n      Info\n    </b-button>\n\n    \x3c!-- dark trigger button --\x3e\n    <b-button\n      v-ripple.400="\'rgba(30, 30, 30, 0.15)\'"\n      variant="outline-dark"\n      @click="showToast(\'dark\')"\n    >\n      Dark\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\nimport ToastificationContent from \'@core/components/toastification/ToastificationContent.vue\'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: \'Notification\',\n          icon: \'BellIcon\',\n          text: \'👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.\',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n',b="\n<template>\n  <div>\n    <h5 class=\"mb-0\">Top Positions</h5>\n    <div class=\"demo-inline-spacing\">\n\n      \x3c!-- Top right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('primary','top-right')\"\n      >\n        Top Right\n      </b-button>\n\n      \x3c!-- Top left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('secondary','top-left')\"\n      >\n        Top Left\n      </b-button>\n\n      \x3c!-- top center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('success','top-center')\"\n      >\n        Top Center\n      </b-button>\n    </div>\n\n    <h5 class=\"mt-2 mb-0\">\n      Bottom Positions\n    </h5>\n    <div class=\"demo-inline-spacing\">\n      \x3c!-- bottom right --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('danger','bottom-right')\"\n      >\n        Bottom Right\n      </b-button>\n\n      \x3c!-- bottom left --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('warning','bottom-left')\"\n      >\n        Bottom Left\n      </b-button>\n\n      \x3c!-- bottom center --\x3e\n      <b-button\n        v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n        variant=\"outline-primary\"\n        @click=\"showToast('info','bottom-center')\"\n      >\n        Bottom Center\n      </b-button>\n    </div>\n  </div>\n</template>\n\n<script>\nimport { BButton, BCardText } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, position) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'InfoIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        position,\n      })\n    },\n  },\n}\n<\/script>\n",f="\n<template>\n  <div class=\"demo-inline-spacing\">\n\n    \x3c!-- default time trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary')\"\n    >\n      Time Default\n    </b-button>\n\n    \x3c!-- 4s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',4000)\"\n    >\n      Time 4s(4000)\n    </b-button>\n\n    \x3c!-- 8s delay trigger button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary',8000)\"\n    >\n      Time 8s(8000)\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, timeout) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon: 'BellIcon',\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      },\n      {\n        timeout,\n      })\n    },\n  },\n}\n<\/script>\n",v="\n<template>\n  <div class=\"demo-inline-spacing\">\n    \x3c!-- mail icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('primary','MailIcon')\"\n    >\n      Icon Mail\n    </b-button>\n\n    \x3c!-- Inbox icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('secondary','InboxIcon')\"\n    >\n      Icon Inbox\n    </b-button>\n\n    \x3c!-- Check icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('success','CheckIcon')\"\n    >\n      Icon Check\n    </b-button>\n\n    \x3c!-- heart icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('danger','HeartIcon')\"\n    >\n      Icon Heart\n    </b-button>\n\n    \x3c!-- favorite icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('warning','StarIcon')\"\n    >\n      Icon Favorite\n    </b-button>\n\n    \x3c!-- slack icon --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"showToast('info','SlackIcon')\"\n    >\n      Icon Slack\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BCardCode,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    showToast(variant, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Notification',\n          icon,\n          text: 'I do not think that word means what you think it means.',\n          variant,\n        },\n      })\n    },\n  },\n}\n<\/script>\n",h={components:{BButton:l["a"],BCardCode:p["a"],BCardText:u["a"],ToastificationContent:g["a"]},directives:{Ripple:d["a"]},data:function(){return{codeVariant:m}},methods:{showToast:function(t){this.$toast({component:g["a"],props:{title:"Notification",icon:"BellIcon",text:"👋 Chocolate oat cake jelly oat cake candy jelly beans pastry.",variant:t}})}}},y=h,x=e("2877"),w=Object(x["a"])(y,s,c,!1,null,null,null),k=w.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Position"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codePosition)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Position of the toast on the screen. Can be any of ")]),e("code",[t._v("top-right")]),e("span",[t._v(" , ")]),e("code",[t._v("top-center")]),e("span",[t._v(" , ")]),e("code",[t._v("top-left")]),e("span",[t._v(" , ")]),e("code",[t._v("bottom-right")]),e("span",[t._v(" , ")]),e("code",[t._v("bottom-center")]),e("span",[t._v(" , ")]),e("code",[t._v("bottom-left")]),t._v(". ")]),e("h5",{staticClass:"mb-0"},[t._v(" Top Positions ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","top-right")}}},[t._v(" Top Right ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","top-left")}}},[t._v(" Top Left ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","top-center")}}},[t._v(" Top Center ")])],1),e("h5",{staticClass:"mt-2 mb-0"},[t._v(" Bottom Positions ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","bottom-right")}}},[t._v(" Bottom Right ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","bottom-left")}}},[t._v(" Bottom Left ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","bottom-center")}}},[t._v(" Bottom Center ")])],1)],1)},T=[],C={components:{BButton:l["a"],BCardCode:p["a"],BCardText:u["a"],ToastificationContent:g["a"]},directives:{Ripple:d["a"]},data:function(){return{codePosition:b}},methods:{showToast:function(t,n){this.$toast({component:g["a"],props:{title:"Notification",icon:"InfoIcon",text:"I do not think that word means what you think it means.",variant:t}},{position:n})}}},F=C,A=Object(x["a"])(F,_,T,!1,null,null,null),B=A.exports,I=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Icon"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeIcon)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[e("span",[t._v("Custom icon class to be used. Use ")]),e("code",[t._v("icon")]),e("span",[t._v(" prop to set icon.")])]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary","MailIcon")}}},[t._v(" Icon Mail ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("secondary","InboxIcon")}}},[t._v(" Icon Inbox ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("success","CheckIcon")}}},[t._v(" Icon Check ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("danger","HeartIcon")}}},[t._v(" Icon Heart ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("warning","StarIcon")}}},[t._v(" Icon Favorite ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("info","SlackIcon")}}},[t._v(" Icon Slack ")])],1)],1)},S=[],$={components:{BButton:l["a"],BCardCode:p["a"],BCardText:u["a"],ToastificationContent:g["a"]},directives:{Ripple:d["a"]},data:function(){return{codeIcon:v}},methods:{showToast:function(t,n){this.$toast({component:g["a"],props:{title:"Notification",icon:n,text:"I do not think that word means what you think it means.",variant:t}})}}},N=$,j=Object(x["a"])(N,I,S,!1,null,null,null),P=j.exports,E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card-code",{attrs:{title:"Timeout"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTime)+" ")]},proxy:!0}])},[e("b-card-text",{staticClass:"mb-0"},[t._v(" How many milliseconds for the toast to be auto dismissed, or false to disable. ")]),e("div",{staticClass:"demo-inline-spacing"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary")}}},[t._v(" Time Default ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",4e3)}}},[t._v(" Time 4s(4000) ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(n){return t.showToast("primary",8e3)}}},[t._v(" Time 8s(8000) ")])],1)],1)},O=[],L={components:{BButton:l["a"],BCardCode:p["a"],BCardText:u["a"],ToastificationContent:g["a"]},directives:{Ripple:d["a"]},data:function(){return{codeTime:f}},methods:{showToast:function(t,n){this.$toast({component:g["a"],props:{title:"Notification",icon:"BellIcon",text:"I do not think that word means what you think it means.",variant:t}},{timeout:n})}}},R=L,D=Object(x["a"])(R,E,O,!1,null,null,null),M=D.exports,z={components:{BRow:o["a"],BCol:r["a"],ToastificationVariant:k,ToastificationPosition:B,ToastificationIcon:P,ToastificationTimeout:M}},H=z,W=Object(x["a"])(H,a,i,!1,null,null,null);n["default"]=W.exports},"541c":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[e("div",{staticClass:"card-header"},[e("div",[e("b-card-title",[t._v(t._s(t.$attrs.title))]),t.$attrs["sub-title"]?e("b-card-sub-title",[t._v(" "+t._s(t.$attrs["sub-title"])+" ")]):t._e()],1),e("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(n){t.code_visible=!t.code_visible}}})]),void 0!==t.$attrs["no-body"]?[t._t("default"),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("b-card-body",[e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:e("b-card-body",[t._t("default"),e("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(n){t.code_visible=n},expression:"code_visible"}},[e("div",{staticClass:"p-1"}),e("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)},i=[],o=(e("e9c4"),e("205f")),r=e("4968"),s=e("ba06"),c=e("6197"),l=e("5843"),u=(e("c197"),e("84bf"),e("8d51")),p=e.n(u),d={components:{BCard:o["a"],BCardTitle:r["a"],BCardSubTitle:s["a"],BCardBody:c["a"],BCollapse:l["a"],Prism:p.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},g=d,m=(e("8d54"),e("2877")),b=Object(m["a"])(g,a,i,!1,null,"aa799a9e",null);n["a"]=b.exports},"84bf":function(t,n,e){},"8d51":function(t,n,e){"use strict";function a(t){for(var n=arguments,e=1;e<arguments.length;e++)for(var a in arguments[e])t[a]=n[e][a];return t}var i={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(t,n){var e=n.props.code||(n.children&&n.children.length>0?n.children[0].text:""),i=n.props.inline,o=n.props.language,r=Prism.languages[o],s="language-"+o;return i?t("code",a({},n.data,{class:[n.data.class,s],domProps:a({},n.data.domProps,{innerHTML:Prism.highlight(e,r)})})):t("pre",a({},n.data,{class:[n.data.class,s]}),[t("code",{class:s,domProps:{innerHTML:Prism.highlight(e,r)}})])}};t.exports=i},"8d54":function(t,n,e){"use strict";e("ecda")},"8d81":function(t,n,e){},b549:function(t,n,e){"use strict";e("8d81")},c197:function(t,n,e){(function(n){var e="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},a=function(t){var n=/\blang(?:uage)?-([\w-]+)\b/i,e=0,a={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function(t){return t instanceof i?new i(t.type,a.util.encode(t.content),t.alias):Array.isArray(t)?t.map(a.util.encode):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t["__id"]||Object.defineProperty(t,"__id",{value:++e}),t["__id"]},clone:function t(n,e){var i,o,r=a.util.type(n);switch(e=e||{},r){case"Object":if(o=a.util.objId(n),e[o])return e[o];for(var s in i={},e[o]=i,n)n.hasOwnProperty(s)&&(i[s]=t(n[s],e));return i;case"Array":return o=a.util.objId(n),e[o]?e[o]:(i=[],e[o]=i,n.forEach((function(n,a){i[a]=t(n,e)})),i);default:return n}},getLanguage:function(t){while(t&&!n.test(t.className))t=t.parentElement;return t?(t.className.match(n)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var e in n)if(n[e].src==t)return n[e]}return null}}},languages:{extend:function(t,n){var e=a.util.clone(a.languages[t]);for(var i in n)e[i]=n[i];return e},insertBefore:function(t,n,e,i){i=i||a.languages;var o=i[t],r={};for(var s in o)if(o.hasOwnProperty(s)){if(s==n)for(var c in e)e.hasOwnProperty(c)&&(r[c]=e[c]);e.hasOwnProperty(s)||(r[s]=o[s])}var l=i[t];return i[t]=r,a.languages.DFS(a.languages,(function(n,e){e===l&&n!=t&&(this[n]=r)})),r},DFS:function t(n,e,i,o){o=o||{};var r=a.util.objId;for(var s in n)if(n.hasOwnProperty(s)){e.call(n,s,n[s],i||s);var c=n[s],l=a.util.type(c);"Object"!==l||o[r(c)]?"Array"!==l||o[r(c)]||(o[r(c)]=!0,t(c,e,s,o)):(o[r(c)]=!0,t(c,e,null,o))}}},plugins:{},highlightAll:function(t,n){a.highlightAllUnder(document,t,n)},highlightAllUnder:function(t,n,e){var i={callback:e,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),a.hooks.run("before-all-elements-highlight",i);for(var o,r=0;o=i.elements[r++];)a.highlightElement(o,!0===n,i.callback)},highlightElement:function(e,i,o){var r=a.util.getLanguage(e),s=a.languages[r];e.className=e.className.replace(n,"").replace(/\s+/g," ")+" language-"+r;var c=e.parentNode;c&&"pre"===c.nodeName.toLowerCase()&&(c.className=c.className.replace(n,"").replace(/\s+/g," ")+" language-"+r);var l=e.textContent,u={element:e,language:r,grammar:s,code:l};function p(t){u.highlightedCode=t,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),o&&o.call(u.element)}if(a.hooks.run("before-sanity-check",u),!u.code)return a.hooks.run("complete",u),void(o&&o.call(u.element));if(a.hooks.run("before-highlight",u),u.grammar)if(i&&t.Worker){var d=new Worker(a.filename);d.onmessage=function(t){p(t.data)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else p(a.highlight(u.code,u.grammar,u.language));else p(a.util.encode(u.code))},highlight:function(t,n,e){var o={code:t,grammar:n,language:e};return a.hooks.run("before-tokenize",o),o.tokens=a.tokenize(o.code,o.grammar),a.hooks.run("after-tokenize",o),i.stringify(a.util.encode(o.tokens),o.language)},matchGrammar:function(t,n,e,o,r,s,c){for(var l in e)if(e.hasOwnProperty(l)&&e[l]){var u=e[l];u=Array.isArray(u)?u:[u];for(var p=0;p<u.length;++p){if(c&&c==l+","+p)return;var d=u[p],g=d.inside,m=!!d.lookbehind,b=!!d.greedy,f=0,v=d.alias;if(b&&!d.pattern.global){var h=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,h+"g")}d=d.pattern||d;for(var y=o,x=r;y<n.length;x+=n[y].length,++y){var w=n[y];if(n.length>t.length)return;if(!(w instanceof i)){if(b&&y!=n.length-1){d.lastIndex=x;var k=d.exec(t);if(!k)break;for(var _=k.index+(m&&k[1]?k[1].length:0),T=k.index+k[0].length,C=y,F=x,A=n.length;C<A&&(F<T||!n[C].type&&!n[C-1].greedy);++C)F+=n[C].length,_>=F&&(++y,x=F);if(n[y]instanceof i)continue;B=C-y,w=t.slice(x,F),k.index-=x}else{d.lastIndex=0;k=d.exec(w);var B=1}if(k){m&&(f=k[1]?k[1].length:0);_=k.index+f,k=k[0].slice(f),T=_+k.length;var I=w.slice(0,_),S=w.slice(T),$=[y,B];I&&(++y,x+=I.length,$.push(I));var N=new i(l,g?a.tokenize(k,g):k,v,k,b);if($.push(N),S&&$.push(S),Array.prototype.splice.apply(n,$),1!=B&&a.matchGrammar(t,n,e,y,x,!0,l+","+p),s)break}else if(s)break}}}}},tokenize:function(t,n){var e=[t],i=n.rest;if(i){for(var o in i)n[o]=i[o];delete n.rest}return a.matchGrammar(t,e,n,0,0,!1),e},hooks:{all:{},add:function(t,n){var e=a.hooks.all;e[t]=e[t]||[],e[t].push(n)},run:function(t,n){var e=a.hooks.all[t];if(e&&e.length)for(var i,o=0;i=e[o++];)i(n)}},Token:i};function i(t,n,e,a,i){this.type=t,this.content=n,this.alias=e,this.length=0|(a||"").length,this.greedy=!!i}if(t.Prism=a,i.stringify=function(t,n){if("string"==typeof t)return t;if(Array.isArray(t))return t.map((function(t){return i.stringify(t,n)})).join("");var e={type:t.type,content:i.stringify(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n};if(t.alias){var o=Array.isArray(t.alias)?t.alias:[t.alias];Array.prototype.push.apply(e.classes,o)}a.hooks.run("wrap",e);var r=Object.keys(e.attributes).map((function(t){return t+'="'+(e.attributes[t]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+e.tag+' class="'+e.classes.join(" ")+'"'+(r?" "+r:"")+">"+e.content+"</"+e.tag+">"},!t.document)return t.addEventListener?(a.disableWorkerMessageHandler||t.addEventListener("message",(function(n){var e=JSON.parse(n.data),i=e.language,o=e.code,r=e.immediateClose;t.postMessage(a.highlight(o,a.languages[i],i)),r&&t.close()}),!1),a):a;var o=a.util.currentScript();if(o&&(a.filename=o.src,o.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){function r(){a.manual||a.highlightAll()}var s=document.readyState;"loading"===s||"interactive"===s&&o&&o.defer?document.addEventListener("DOMContentLoaded",r):window.requestAnimationFrame?window.requestAnimationFrame(r):window.setTimeout(r,16)}return a}(e);t.exports&&(t.exports=a),"undefined"!==typeof n&&(n.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup["tag"].inside["attr-value"].inside["entity"]=a.languages.markup["entity"],a.hooks.add("wrap",(function(t){"entity"===t.type&&(t.attributes["title"]=t.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(t,n){var e={};e["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[n]},e["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:e}};i["language-"+n]={pattern:/[\s\S]+/,inside:a.languages[n]};var o={};o[t]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,t),"i"),lookbehind:!0,greedy:!0,inside:i},a.languages.insertBefore("markup","cdata",o)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(t){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+n.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},t.languages.css["atrule"].inside.rest=t.languages.css;var e=t.languages.markup;e&&(e.tag.addInlined("style","css"),t.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:e.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:t.languages.css}},alias:"language-css"}},e.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(t){t=t||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(t.querySelectorAll("pre[data-src]")).forEach((function(t){if(!t.hasAttribute("data-src-loaded")){var e,i=t.getAttribute("data-src"),o=t,r=/\blang(?:uage)?-([\w-]+)\b/i;while(o&&!r.test(o.className))o=o.parentNode;if(o&&(e=(t.className.match(r)||[,""])[1]),!e){var s=(i.match(/\.(\w+)$/)||[,""])[1];e=n[s]||s}var c=document.createElement("code");c.className="language-"+e,t.textContent="",c.textContent="Loading…",t.appendChild(c);var l=new XMLHttpRequest;l.open("GET",i,!0),l.onreadystatechange=function(){4==l.readyState&&(l.status<400&&l.responseText?(c.textContent=l.responseText,a.highlightElement(c),t.setAttribute("data-src-loaded","")):l.status>=400?c.textContent="✖ Error "+l.status+" while fetching file: "+l.statusText:c.textContent="✖ Error: File does not exist or is empty")},l.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,e("c8ba"))},ecda:function(t,n,e){}}]);