(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f9df2c82"],{1079:function(t,e,n){"use strict";var a=n("541c");e["a"]=a["a"]},"2e40":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("toasts-basic"),n("toasts-translucent"),n("toasts-variants"),n("toasts-delay"),n("toasts-target"),n("toasts-links"),n("toasts-advance")],1)],1)},o=[],r=n("a15b7"),s=n("b28b"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{title:"Basic Toast"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeBasic)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[t._v("Push notifications to your visitors with a ")]),a("code",[t._v("<b-toast>")]),a("span",[t._v(" and ")]),a("code",[t._v("<b-toaster>,")]),a("span",[t._v(" lightweigt components which are easily customizable for generating alert messages.")])]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.$bvToast.show("example-toast")}}},[t._v(" Show toast ")]),a("b-toast",{attrs:{id:"example-toast"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-1"},[a("b-img",{staticClass:"mr-1",attrs:{src:n("a4ef"),height:"18",width:"25",alt:"Toast image"}}),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}])},[a("span",[t._v("Hello, world! This is a toast message. Hope you're doing well.. :)")])])],1)},l=[],c=n("1079"),p=n("1947"),u=n("d6e4"),d=n("59e4"),b=n("4918"),m=n("e009"),v="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"popToast\"\n    >\n      Show Toast with custom content\n    </b-button>\n  </div>\n</template>\n\n<script>\n// eslint-disable-next-line\nimport { BButton, BSpinner } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    // eslint-disable-next-line\n    BSpinner,\n  },\n  directives: {\n    Ripple,\n  },\n  data: () => ({\n    count: 0,\n  }),\n  methods: {\n    popToast() {\n      // Use a shorter name for this.$createElement\n      const h = this.$createElement\n      // Increment the toast count\n      this.count += 1\n      // Create the message\n      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n        ' Flashy ',\n        h('strong', 'toast'),\n        `message #${this.count}`,\n        h('b-spinner', { props: { type: 'grow', small: true } }),\n      ])\n      // Create the title\n      const vNodesTitle = h('div', { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] }, [\n        h('strong', { class: 'mr-2' }, 'The Title'),\n        h('small', { class: 'ml-auto font-italics' }, '5 minutes ago'),\n      ])\n      // Pass the VNodes as an array for message and title\n      this.$bvToast.toast([vNodesMsg], {\n        title: [vNodesTitle],\n        solid: true,\n        variant: 'info',\n      })\n    },\n  },\n}\n<\/script>\n",g='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="$bvToast.show(\'example-toast5\')"\n    >\n      Delay\n    </b-button>\n\n    \x3c!-- toast --\x3e\n    <b-toast\n      id="example-toast5"\n      auto-hide-delay="10000"\n    >\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-25">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="rounded mr-2"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BToast, BButton, BImg } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BToast,\n    BButton,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="$bvToast.show(\'example-toast\')"\n    >\n      Show toast\n    </b-button>\n\n    \x3c!-- toast --\x3e\n    <b-toast id="example-toast">\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-1">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="mr-1"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message. Hope you\'re doing well.. :)</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport { BButton, BToast, BImg } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n    BToast,\n    BImg,\n  },\n  directives: {\n    Ripple,\n  },\n}\n<\/script>\n',h="\n<template>\n  <div>\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @click=\"toast()\"\n    >\n      Toast with link\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast() {\n      this.$bvToast.toast('Toast with action link', {\n        href: '#foo',\n        title: 'Example',\n      })\n    },\n  },\n}\n<\/script>\n",_='\n<template>\n  <div class="demo-inline-spacing">\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-right\')"\n    >\n      b-toaster-top-right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-left\')"\n    >\n      b-toaster-top-left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-center\')"\n    >\n      b-toaster-top-center\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-top-full\')"\n    >\n      b-toaster-top-full\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-right\', true)"\n    >\n      b-toaster-bottom-right\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-left\', true)"\n    >\n      b-toaster-bottom-left\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-center\', true)"\n    >\n      b-toaster-bottom-center\n    </b-button>\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="toast(\'b-toaster-bottom-full\', true)"\n    >\n      b-toaster-bottom-full\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  data: () => ({\n    counter: 0,\n  }),\n  directives: {\n    Ripple,\n  },\n  methods: {\n    toast(toaster, append = false) {\n      this.counter += 1\n      this.$bvToast.toast(`Toast ${this.counter} body content` {\n        title: `Toaster ${toaster}`,\n        toaster,\n        solid: true,\n        appendToast: append,\n      })\n    },\n  },\n}\n<\/script>\n',x='\n<template>\n  <div class="translucent-wrap bg-primary rounded-bottom p-1">\n    <b-toast\n      id="example-toast3"\n      v-model="visible"\n      static\n      no-auto-hide\n    >\n      <template #toast-title>\n        <div class="d-flex flex-grow-1 align-items-center mr-1">\n          <b-img\n            :src="require(\'@/assets/images/logo/logo.png\')"\n            class="mr-1"\n            height="18"\n            width="25"\n            alt="Toast image"\n          />\n          <strong class="mr-auto">Vue Admin</strong>\n          <small class="text-muted">11 mins ago</small>\n        </div>\n      </template>\n      <span>Hello, world! This is a toast message.</span>\n    </b-toast>\n  </div>\n</template>\n\n<script>\nimport {\n  BToast, BImg,\n} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BToast,\n    BImg,\n  },\n   data() {\n    return {\n      visible: true,\n    }\n  },\n}\n<\/script>\n\n<style lang="scss" scoped>\n.translucent-wrap {\n  height: 110px;\n  position: relative;\n}\n</style>\n',y='\n<template>\n  <div class="demo-inline-spacing">\n\n    \x3c!-- default --\x3e\n    <b-button\n      variant="gradient-primary"\n      @click="makeToast()"\n    >\n      Default\n    </b-button>\n\n    \x3c!-- primary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(113, 102, 240, 0.15)\'"\n      variant="outline-primary"\n      @click="makeToast(\'primary\')"\n    >\n      Primary\n    </b-button>\n\n    \x3c!-- secondary --\x3e\n    <b-button\n      v-ripple.400="\'rgba(186, 191, 199, 0.15)\'"\n      variant="outline-secondary"\n      @click="makeToast(\'secondary\')"\n    >\n      Secondary\n    </b-button>\n\n    \x3c!-- warning --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-warning"\n      @click="makeToast(\'warning\')"\n    >\n      Warning\n    </b-button>\n\n    \x3c!-- danger --\x3e\n    <b-button\n      v-ripple.400="\'rgba(255, 159, 67, 0.15)\'"\n      variant="outline-danger"\n      @click="makeToast(\'danger\')"\n    >\n      Danger\n    </b-button>\n\n    \x3c!-- success --\x3e\n    <b-button\n      v-ripple.400="\'rgba(40, 199, 111, 0.15)\'"\n      variant="outline-success"\n      @click="makeToast(\'success\')"\n    >\n      Success\n    </b-button>\n\n    \x3c!-- info --\x3e\n    <b-button\n      v-ripple.400="\'rgba(0, 207, 232, 0.15)\'"\n      variant="outline-info"\n      @click="makeToast(\'info\')"\n    >\n      Info\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BButton } from \'bootstrap-vue\'\nimport Ripple from \'vue-ripple-directive\'\n\nexport default {\n  components: {\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n  methods: {\n    makeToast(variant = null) {\n      this.$bvToast.toast(\'Toast body content\', {\n        title: `Variant ${variant || \'default\'}`,\n        variant,\n        solid: true,\n      })\n    },\n  },\n}\n<\/script>\n',T={components:{BCardCode:c["a"],BButton:p["a"],BCardText:u["a"],BToast:d["a"],BImg:b["a"]},directives:{Ripple:m["a"]},data:function(){return{codeBasic:f}}},B=T,k=n("2877"),w=Object(k["a"])(B,i,l,!1,null,null,null),C=w.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{"no-body":"",title:"Translucent"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTranslucent)+" ")]},proxy:!0}])},[a("b-card-body",[a("b-card-text",[a("span",[t._v("we are using the ")]),a("code",[t._v("static")]),a("span",[t._v(" prop in the above example to render the toast in-place in the document, rather than transporting it to a ")]),a("code",[t._v("<b-toaster>")]),a("span",[t._v(" target container")])])],1),a("div",{staticClass:"translucent-wrap bg-primary rounded-bottom p-1"},[a("b-toast",{attrs:{id:"example-toast3",static:"","no-auto-hide":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-1"},[a("b-img",{staticClass:"mr-1",attrs:{src:n("a4ef"),height:"18",width:"25",alt:"Toast image"}}),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("span",[t._v("Hello, world! This is a toast message.")])])],1)],1)},$=[],N=n("6197"),R={components:{BCardCode:c["a"],BToast:d["a"],BCardBody:N["a"],BImg:b["a"],BCardText:u["a"]},data:function(){return{visible:!0,codeTranslucent:x}}},I=R,V=(n("ddfb"),Object(k["a"])(I,S,$,!1,null,"4609e4e4",null)),D=V.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card-code",{attrs:{title:"Delay"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeToastDelay)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[t._v("Change to auto hide delay time via the ")]),a("code",[t._v("auto-hide-delay")]),a("span",[t._v(" prop (value is in milliseconds), which defaults to ")]),a("code",[t._v("5000")]),a("span",[t._v(" (minimum value ")]),a("code",[t._v("1000")]),a("span",[t._v("). Or, disable the auto-hide feature completely by setting the ")]),a("code",[t._v("no-auto-hide")]),a("span",[t._v(" prop to ")]),a("code",[t._v("true")])]),a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.$bvToast.show("example-toast5")}}},[t._v(" Delay ")]),a("b-toast",{attrs:{id:"example-toast5","auto-hide-delay":"10000"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("div",{staticClass:"d-flex flex-grow-1 align-items-center mr-25"},[a("b-img",{staticClass:"rounded mr-2",attrs:{src:n("a4ef"),height:"18",width:"25",alt:"Toast image"}}),a("strong",{staticClass:"mr-auto"},[t._v("Vue Admin")]),a("small",{staticClass:"text-muted"},[t._v("11 mins ago")])],1)]},proxy:!0}])},[a("span",[t._v("Hello, world! This is a toast message.")])])],1)],1)},E=[],O={components:{BCardCode:c["a"],BToast:d["a"],BButton:p["a"],BImg:b["a"],BCardText:u["a"]},directives:{Ripple:m["a"]},data:function(){return{codeToastDelay:g}}},j=O,H=Object(k["a"])(j,A,E,!1,null,null,null),L=H.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Toaster target"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeTarget)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[n("span",[t._v('BootstrapVue comes with the following "built-in" toaster names (and associated styles defined in SCSS): ')]),n("code",[t._v("b-toaster-top-right, b-toaster-top-left, b-toaster-top-center, b-toaster-top-full, b-toaster-bottom-right, b-toaster-bottom-left, b-toaster-bottom-center, b-toaster-bottom-full ")])]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-right")}}},[t._v(" b-toaster-top-right ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-left")}}},[t._v(" b-toaster-top-left ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-center")}}},[t._v(" b-toaster-top-center ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-top-full")}}},[t._v(" b-toaster-top-full ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-right",!0)}}},[t._v(" b-toaster-bottom-right ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-left",!0)}}},[t._v(" b-toaster-bottom-left ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-center",!0)}}},[t._v(" b-toaster-bottom-center ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast("b-toaster-bottom-full",!0)}}},[t._v(" b-toaster-bottom-full ")])],1)],1)},J=[],M={components:{BCardCode:c["a"],BButton:p["a"],BCardText:u["a"]},directives:{Ripple:m["a"]},data:function(){return{counter:0,codeTarget:_}},methods:{toast:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.counter+=1,this.$bvToast.toast("Toast ".concat(this.counter," body content"),{title:"Toaster ".concat(t),toaster:t,solid:!1,appendToast:e})}}},W=M,q=Object(k["a"])(W,P,J,!1,null,null,null),F=q.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Variants"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeVariant)+" ")]},proxy:!0}])},[n("b-card-text",{staticClass:"mb-0"},[t._v(" BootstrapVue toasts provide custom CSS to define color variants. Variants follow the standard Bootstrap v4 variant names. If you have custom SCSS defined Bootstrap color theme variants, the toast custom SCSS will automatically create toast variants for you (refer to the Theming reference section). ")]),n("div",{staticClass:"demo-inline-spacing"},[n("b-button",{attrs:{variant:"gradient-primary"},on:{click:function(e){return t.makeToast()}}},[t._v(" Default ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.makeToast("primary")}}},[t._v(" Primary ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:function(e){return t.makeToast("secondary")}}},[t._v(" Secondary ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-warning"},on:{click:function(e){return t.makeToast("warning")}}},[t._v(" Warning ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 159, 67, 0.15)",expression:"'rgba(255, 159, 67, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-danger"},on:{click:function(e){return t.makeToast("danger")}}},[t._v(" Danger ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(40, 199, 111, 0.15)",expression:"'rgba(40, 199, 111, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-success"},on:{click:function(e){return t.makeToast("success")}}},[t._v(" Success ")]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(0, 207, 232, 0.15)",expression:"'rgba(0, 207, 232, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-info"},on:{click:function(e){return t.makeToast("info")}}},[t._v(" Info ")])],1)],1)},U=[],G={components:{BCardCode:c["a"],BButton:p["a"],BCardText:u["a"]},directives:{Ripple:m["a"]},data:function(){return{codeVariant:y}},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$bvToast.toast("Toast body content",{title:"Variant ".concat(t||"default"),variant:t,solid:!1})}}},K=G,Q=Object(k["a"])(K,z,U,!1,null,null,null),X=Q.exports,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Links"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeLinks)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("Optionally convert the toast body to a link (")]),n("code",[t._v("<a>")]),n("span",[t._v(") or ")]),n("code",[t._v("<router-link>")]),n("span",[t._v(" (or ")]),n("code",[t._v("<nuxt-link>")]),n("span",[t._v(") via the href and to props respectively. When set, the entire toast body becomes a link.")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:function(e){return t.toast()}}},[t._v(" Toast with link ")])],1)},Z=[],tt={components:{BCardCode:c["a"],BButton:p["a"],BCardText:u["a"]},directives:{Ripple:m["a"]},data:function(){return{codeLinks:h}},methods:{toast:function(){this.$bvToast.toast("Toast with action link",{href:"#foo",title:"Toast Link"})}}},et=tt,nt=Object(k["a"])(et,Y,Z,!1,null,null,null),at=nt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Advanced usage"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeAdvance)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("When using the ")]),n("code",[t._v("this.$bvToast.toast(...)")]),n("span",[t._v(" method for generating toasts, you may want the toast content to be more than just a string message. As mentioned in the Toasts on demand section above, you can pass arrays of ")]),n("code",[t._v("VNodes")]),n("span",[t._v(" as the message and title for more complex content.")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{click:t.popToast}},[t._v(" Show Toast with custom content ")])],1)},rt=[],st=n("01e3"),it={components:{BCardCode:c["a"],BButton:p["a"],BCardText:u["a"],BSpinner:st["a"]},directives:{Ripple:m["a"]},data:function(){return{count:0,codeAdvance:v}},methods:{popToast:function(){var t=this.$createElement;this.count+=1;var e=t("p",{class:["text-center","mb-0"]},[t("b-spinner",{props:{type:"grow",small:!0}})," Flashy ",t("strong","toast")," message #".concat(this.count," "),t("b-spinner",{props:{type:"grow",small:!0}})]),n=t("div",{class:["d-flex","flex-grow-1","align-items-baseline","mr-2"]},[t("strong",{class:"mr-2"},"The Title"),t("small",{class:"ml-auto font-italics"},"5 minutes ago")]);this.$bvToast.toast([e],{title:[n],solid:!1,variant:"info"})}}},lt=it,ct=Object(k["a"])(lt,ot,rt,!1,null,null,null),pt=ct.exports,ut={components:{BRow:r["a"],BCol:s["a"],ToastsBasic:C,ToastsTranslucent:D,ToastsDelay:L,ToastsTarget:F,ToastsVariants:X,ToastsLinks:at,ToastsAdvance:pt}},dt=ut,bt=Object(k["a"])(dt,a,o,!1,null,null,null);e["default"]=bt.exports},"541c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",t._g(t._b({attrs:{"no-body":""}},"b-card",t.cardAttrs,!1),t.$listeners),[n("div",{staticClass:"card-header"},[n("div",[n("b-card-title",[t._v(t._s(t.$attrs.title))]),t.$attrs["sub-title"]?n("b-card-sub-title",[t._v(" "+t._s(t.$attrs["sub-title"])+" ")]):t._e()],1),n("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":t.code_visible?"false":"true","aria-controls":t.parentID},on:{click:function(e){t.code_visible=!t.code_visible}}})]),void 0!==t.$attrs["no-body"]?[t._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("b-card-body",[n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],1)]:n("b-card-body",[t._t("default"),n("b-collapse",{staticClass:"card-code",attrs:{id:t.parentID,visible:t.code_visible},model:{value:t.code_visible,callback:function(e){t.code_visible=e},expression:"code_visible"}},[n("div",{staticClass:"p-1"}),n("prism",{attrs:{language:t.codeLanguage}},[t._t("code")],2)],1)],2)],2)},o=[],r=(n("e9c4"),n("205f")),s=n("4968"),i=n("ba06"),l=n("6197"),c=n("5843"),p=(n("c197"),n("84bf"),n("8d51")),u=n.n(p),d={components:{BCard:r["a"],BCardTitle:s["a"],BCardSubTitle:i["a"],BCardBody:l["a"],BCollapse:c["a"],Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var t=JSON.parse(JSON.stringify(this.$attrs));return delete t.title,delete t["sub-title"],t}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},b=d,m=(n("8d54"),n("2877")),v=Object(m["a"])(b,a,o,!1,null,"aa799a9e",null);e["a"]=v.exports},"8d54":function(t,e,n){"use strict";n("ecda")},a4ef:function(t,e,n){t.exports=n.p+"img/logo.a5d6fa57.png"},c9b3:function(t,e,n){},ddfb:function(t,e,n){"use strict";n("c9b3")},ecda:function(t,e,n){}}]);