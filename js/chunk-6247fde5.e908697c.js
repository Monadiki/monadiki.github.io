(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6247fde5"],{1079:function(e,t,a){"use strict";var n=a("541c");t["a"]=n["a"]},"541c":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},r=[],o=a("205f"),s=a("4968"),l=a("ba06"),i=a("6197"),c=a("5843"),u=(a("c197"),a("84bf"),a("8d51")),d=a.n(u),p={components:{BCard:o["a"],BCardTitle:s["a"],BCardSubTitle:l["a"],BCardBody:i["a"],BCollapse:c["a"],Prism:d.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data(){return{parentID:"",code_visible:!1}},computed:{cardAttrs(){const e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created(){this.parentID=String(Math.floor(10*Math.random())+1)}},m=p,f=(a("8d54"),a("2877")),x=Object(f["a"])(m,n,r,!1,null,"aa799a9e",null);t["a"]=x.exports},"84bf":function(e,t,a){},8822:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("form-text-area-default"),a("form-text-area-rows"),a("form-text-area-floating-label"),a("form-text-area-states"),a("form-text-area-size"),a("form-text-area-disable-resize"),a("form-text-area-auto-height"),a("formatter-text-area"),a("form-text-area-readonly"),a("form-text-area-debounce"),a("form-text-area-counter")],1)],1)},r=[],o=a("a15b"),s=a("b28b"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDefault)+" ")]},proxy:!0}])},[a("b-card-text",[e._v(" Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states. ")]),a("label",{attrs:{for:"textarea-default"}},[e._v("Textarea")]),a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Textarea",rows:"3"}})],1)},i=[],c=a("1079"),u=a("d6e4"),d=a("9c7d");const p='\n<template>\n  <b-row>\n    <b-col\n      xl="6"\n      cols="12"\n    >\n      <label for="textarea-auto-height">Auto height:</label>\n      <b-form-textarea\n        id="textarea-auto-height"\n        placeholder="Auto height textarea"\n        rows="3"\n        max-rows="8"\n      />\n    </b-col>\n    <b-col\n      xl="6"\n      cols="12"\n    >\n      <label for="textarea-no-auto-shrink">No auto-shrink:</label>\n      <b-form-textarea\n        id="textarea-no-auto-shrink"\n        placeholder="Auto height (no-shrink) textarea"\n        rows="3"\n        max-rows="8"\n        no-auto-shrink\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormTextarea, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',m='\n<template>\n  <div>\n    <b-form-textarea\n      v-model="value"\n      debounce="500"\n      rows="3"\n      max-rows="5"\n    />\n    <pre class="mt-1">{{ value }}</pre>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    value: \'\',\n  }),\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <label for="textarea-default">Textarea</label>\n    <b-form-textarea\n      id="textarea-default"\n      placeholder="Textarea"\n      rows="3"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardText,\n    BFormTextarea,\n  },\n}\n<\/script>\n\n',x='\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-no-resize"\n      placeholder="Fixed height textarea"\n      rows="3"\n      no-resize\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n',g='\n<template>\n  <div class="form-label-group">\n    <b-form-textarea\n      id="textarea"\n      rows="3"\n      placeholder="Label in Textarea"\n    />\n    <label for="label-textarea">Label in Textarea</label>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n',b='\n<template>\n  <div>\n    <b-form-group\n      class="mb-0"\n      label="Textarea with formatter (on input)"\n      label-for="textarea-formatter"\n      description="We will convert your text to lowercase instantly"\n    >\n      <b-form-textarea\n        id="textarea-formatter"\n        v-model="text1"\n        placeholder="Enter your text"\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <p><b>Value:</b> {{ text1 }}</p>\n\n    <b-form-group\n      class="mb-0"\n      label="Textarea with lazy formatter (on blur)"\n      label-for="textarea-lazy"\n      description="This one is a little lazy!"\n    >\n      <b-form-textarea\n        id="textarea-lazy"\n        v-model="text2"\n        placeholder="Enter your text"\n        lazy-formatter\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <p><b>Value:</b> {{ text2 }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BFormGroup,\n  },\n  data: () => ({\n    text1: \'\',\n    text2: \'\',\n  }),\n  methods: {\n    formatter(value) {\n      return value.toLowerCase()\n    },\n  },\n}\n<\/script>\n',h='\n<template>\n  <b-form-textarea\n    id="textarea-rows"\n    placeholder="Tall textarea"\n    rows="8"\n  />\n</template>\n\n<script>\nimport { BFormTextarea} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-plaintext"\n      plaintext\n      :value="text"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    text: "This is some text.\nIt is read only and doesn\'t look like an input.",\n  }),\n}\n<\/script>\n',_='\n<template>\n  <b-row>\n    <b-col sm="2">\n      <label\n        for="textarea-small"\n        class="text-nowrap"\n      >Small:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-small"\n        size="sm"\n        placeholder="Small textarea"\n      />\n    </b-col>\n    <b-col sm="2">\n      <label\n        for="textarea-default"\n        class="text-nowrap"\n      >Default:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-default"\n        placeholder="Default textarea"\n      />\n    </b-col>\n    <b-col sm="2">\n      <label\n        for="textarea-large"\n        class="text-nowrap"\n      >Large:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-large"\n        size="lg"\n        placeholder="Large textarea"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormTextarea, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',y='\n<template>\n  <b-form-textarea\n    id="textarea-state"\n    v-model="text"\n    :state="text.length <= 10"\n    placeholder="Enter only 10 characters"\n    rows="3"\n  />\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data() {\n    return {\n      text: \'\',\n    }\n  },\n}\n<\/script>\n',w='\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-state"\n      v-model="text"\n      :state="text.length <= 10"\n      placeholder="Enter only 10 characters"\n      rows="3"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    value: \'\',\n    maxChar: 20,\n  }),\n}\n<\/script>\n';var F={components:{BCardCode:c["a"],BCardText:u["a"],BFormTextarea:d["a"]},data(){return{codeDefault:f}}},k=F,T=a("2877"),C=Object(T["a"])(k,l,i,!1,null,null,null),A=C.exports,B=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Displayed rows"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeRows)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To set the height of ")]),a("code",[e._v("<b-form-textarea>")]),a("span",[e._v(", set the ")]),a("code",[e._v("rows")]),a("span",[e._v(" prop to the desired number of rows. If no value is provided to rows, then it will default to 2.")])]),a("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"Tall textarea",rows:"8"}})],1)},S=[],$={components:{BCardCode:c["a"],BFormTextarea:d["a"],BCardText:u["a"]},data(){return{codeRows:h}}},z=$,E=Object(T["a"])(z,B,S,!1,null,null,null),j=E.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Floating Label"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFloatingLabel)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use ")]),a("code",[e._v(".form-label-group")]),a("span",[e._v(" to add a Floating Label with Textarea.")])]),a("div",{staticClass:"form-label-group mt-2 mb-0"},[a("b-form-textarea",{attrs:{id:"textarea",rows:"3",placeholder:"Label in Textarea"}}),a("label",{attrs:{for:"label-textarea"}},[e._v("Label in Textarea")])],1)],1)},O=[],D={components:{BCardCode:c["a"],BCardText:u["a"],BFormTextarea:d["a"]},data(){return{codeFloatingLabel:g}}},P=D,R=Object(T["a"])(P,L,O,!1,null,null,null),N=R.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeStates)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Bootstrap includes validation styles for ")]),a("code",[e._v("valid")]),a("span",[e._v(" and ")]),a("code",[e._v("invalid")]),a("span",[e._v(" states on most form controls.")])]),a("b-form-textarea",{attrs:{id:"textarea-state",state:e.text.length<=10,placeholder:"Enter only 10 characters",rows:"3"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},M=[],H={components:{BCardCode:c["a"],BFormTextarea:d["a"],BCardText:u["a"]},data(){return{text:"",codeStates:y}}},G=H,W=Object(T["a"])(G,I,M,!1,null,null,null),q=W.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSize)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Set text height using the ")]),a("code",[e._v("size")]),a("span",[e._v(" prop to ")]),a("code",[e._v("sm")]),a("span",[e._v(" or ")]),a("code",[e._v("lg")]),a("span",[e._v(" for small or large respectively.")])]),a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-small"}},[e._v("Small:")])]),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-small",size:"sm",placeholder:"Small textarea"}})],1),a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-default"}},[e._v("Default:")])]),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Default textarea"}})],1),a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-large"}},[e._v("Large:")])]),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-large",size:"lg",placeholder:"Large textarea"}})],1)],1)],1)},J=[],V={components:{BCardCode:c["a"],BFormTextarea:d["a"],BRow:o["a"],BCardText:u["a"],BCol:s["a"]},data(){return{codeSize:_}}},U=V,X=Object(T["a"])(U,Z,J,!1,null,null,null),Y=X.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Disable resize handle"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDisableResize)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v(" Some web browsers will allow the user to re-size the height of the textarea. To disable this feature, set the ")]),a("code",[e._v("no-resize")]),a("span",[e._v(" prop to ")]),a("code",[e._v("true")]),a("span",[e._v(".")])]),a("b-form-textarea",{attrs:{id:"textarea-no-resize",placeholder:"Fixed height textarea",rows:"3","no-resize":""}})],1)},Q=[],ee={components:{BCardCode:c["a"],BFormTextarea:d["a"],BCardText:u["a"]},data(){return{codeDisableResize:x}}},te=ee,ae=Object(T["a"])(te,K,Q,!1,null,null,null),ne=ae.exports,re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Auto height"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAutoHeight)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To set the initial minimum height (in rows), set the")]),a("code",[e._v("rows")]),a("span",[e._v(" prop to the desired number of lines (or leave it at the default of ")]),a("code",[e._v("2")]),a("span",[e._v("), And then set maximum rows that the text area will grow to (before showing a scrollbar) by setting the ")]),a("code",[e._v("max-rows")]),a("span",[e._v("prop to the maximum number of lines of text.")])]),a("b-card-text",[a("span",[e._v("To make the height ")]),a("code",[e._v("sticky")]),a("span",[e._v(" (i.e. never shrink), set the ")]),a("code",[e._v("no-auto-shrink")]),a("span",[e._v(" prop to ")]),a("code",[e._v("true")]),a("span",[e._v(". The ")]),a("code",[e._v("no-auto-shrink")]),a("span",[e._v(" props has no effect if ")]),a("code",[e._v("max-rows")]),a("span",[e._v(" is not set or is equal to or less than rows.")])]),a("b-row",[a("b-col",{attrs:{xl:"6",cols:"12"}},[a("label",{attrs:{for:"textarea-auto-height"}},[e._v("Auto height:")]),a("b-form-textarea",{staticClass:"mb-1 mb-xl-0",attrs:{id:"textarea-auto-height",placeholder:"Auto height textarea",rows:"3","max-rows":"8"}})],1),a("b-col",{attrs:{xl:"6",cols:"12"}},[a("label",{attrs:{for:"textarea-no-auto-shrink"}},[e._v("No auto-shrink:")]),a("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:"Auto height (no-shrink) textarea",rows:"3","max-rows":"8","no-auto-shrink":""}})],1)],1)],1)},oe=[],se={components:{BCardCode:c["a"],BCardText:u["a"],BFormTextarea:d["a"],BRow:o["a"],BCol:s["a"]},data(){return{codeAutoHeight:p}}},le=se,ie=Object(T["a"])(le,re,oe,!1,null,null,null),ce=ie.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Formatter support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFormatter)+" ")]},proxy:!0}])},[a("b-card-text",[a("code",[e._v("<b-form-textarea>")]),a("span",[e._v("optionally supports formatting by passing a function reference to the ")]),a("code",[e._v("formatter")]),a("span",[e._v(" prop.")])]),a("div",[a("b-form-group",{attrs:{label:"Textarea with formatter (on input)","label-for":"textarea-formatter",description:"We will convert your text to lowercase instantly"}},[a("b-form-textarea",{attrs:{id:"textarea-formatter",placeholder:"Enter your text",formatter:e.formatter},model:{value:e.text1,callback:function(t){e.text1=t},expression:"text1"}})],1),a("b-card-text",[a("strong",[e._v("Value:")]),e._v(" "+e._s(e.text1))]),a("b-form-group",{attrs:{label:"Textarea with lazy formatter (on blur)","label-for":"textarea-lazy",description:"This one is a little lazy!"}},[a("b-form-textarea",{attrs:{id:"textarea-lazy",placeholder:"Enter your text","lazy-formatter":"",formatter:e.formatter},model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),a("b-card-text",[a("strong",[e._v("Value:")]),e._v(" "+e._s(e.text2))])],1)],1)},de=[],pe=a("8226"),me={components:{BCardCode:c["a"],BFormTextarea:d["a"],BCardText:u["a"],BFormGroup:pe["a"]},data(){return{text1:"",text2:"",codeFormatter:b}},methods:{formatter(e){return e.toLowerCase()}}},fe=me,xe=Object(T["a"])(fe,ue,de,!1,null,null,null),ge=xe.exports,be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Readonly plain text"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeReadonly)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("If you want to have ")]),a("code",[e._v("<b-form-textarea readonly>")]),a("span",[e._v(" elements in your form styled as plain text, set the ")]),a("code",[e._v("plaintext")]),a("span",[e._v(" prop (no need to set ")]),a("code",[e._v("readonly")]),a("span",[e._v(" as it will be set automatically) to remove the default form field styling and preserve the correct text size, margin, padding and height. ")])]),a("b-form-textarea",{attrs:{id:"textarea-plaintext",readonly:"",value:e.text}})],1)},he=[],ve={components:{BCardCode:c["a"],BFormTextarea:d["a"],BCardText:u["a"]},data(){return{text:"This is some text.\nIt is read only and doesn't look like an input.",codeReadonly:v}}},_e=ve,ye=Object(T["a"])(_e,be,he,!1,null,null,null),we=ye.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Debounce support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDebounce)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To enable debouncing, set the prop ")]),a("code",[e._v("debounce")]),a("span",[e._v(" to any integer greater than zero. The value is specified in milliseconds. Setting ")]),a("code",[e._v("debounce")]),a("span",[e._v(" to ")]),a("code",[e._v("0")]),a("span",[e._v(" will disable debouncing.")])]),a("b-form-textarea",{attrs:{debounce:"500",rows:"3","max-rows":"5"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("b-card-text",{staticClass:"mt-1 mb-0"},[e._v(" "+e._s(e.value)+" ")])],1)},ke=[],Te={components:{BCardCode:c["a"],BFormTextarea:d["a"],BCardText:u["a"]},data(){return{value:"",codeDebounce:m}}},Ce=Te,Ae=Object(T["a"])(Ce,Fe,ke,!1,null,null,null),Be=Ae.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Counter"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCounter)+" ")]},proxy:!0}])},[a("b-card-text",[e._v(" There are times when we need the user to only enter a certain number of characters for it, we have the property counter, the value is a number and determines the maximum. ")]),a("b-form-textarea",{staticClass:"char-textarea",class:e.value.length>=e.maxChar?"text-danger":"",attrs:{placeholder:"Counter",rows:"3",state:e.value.length<=e.maxChar},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("small",{staticClass:"textarea-counter-value float-right",class:e.value.length>=e.maxChar?"bg-danger":""},[a("span",{staticClass:"char-count"},[e._v(e._s(e.value.length))]),e._v(" / "+e._s(e.maxChar)+" ")])],1)},$e=[],ze={components:{BCardCode:c["a"],BCardText:u["a"],BFormTextarea:d["a"]},data(){return{value:"",maxChar:20,codeCounter:w}}},Ee=ze,je=Object(T["a"])(Ee,Se,$e,!1,null,null,null),Le=je.exports,Oe={components:{BRow:o["a"],BCol:s["a"],FormTextAreaDefault:A,FormTextAreaRows:j,FormTextAreaFloatingLabel:N,FormTextAreaStates:q,FormTextAreaSize:Y,FormTextAreaDisableResize:ne,FormTextAreaAutoHeight:ce,FormatterTextArea:ge,FormTextAreaReadonly:we,FormTextAreaDebounce:Be,FormTextAreaCounter:Le}},De=Oe,Pe=Object(T["a"])(De,n,r,!1,null,null,null);t["default"]=Pe.exports},"8d51":function(e,t,a){"use strict";function n(e){for(var t=arguments,a=1;a<arguments.length;a++)for(var n in arguments[a])e[n]=t[a][n];return e}var r={functional:!0,props:{code:{type:String},inline:{type:Boolean,default:!1},language:{type:String,default:"markup"}},render:function(e,t){var a=t.props.code||(t.children&&t.children.length>0?t.children[0].text:""),r=t.props.inline,o=t.props.language,s=Prism.languages[o],l="language-"+o;return r?e("code",n({},t.data,{class:[t.data.class,l],domProps:n({},t.data.domProps,{innerHTML:Prism.highlight(a,s)})})):e("pre",n({},t.data,{class:[t.data.class,l]}),[e("code",{class:l,domProps:{innerHTML:Prism.highlight(a,s)}})])}};e.exports=r},"8d54":function(e,t,a){"use strict";a("ecda")},c197:function(e,t,a){(function(t){var a="undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,a=0,n={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):Array.isArray(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e["__id"]||Object.defineProperty(e,"__id",{value:++a}),e["__id"]},clone:function e(t,a){var r,o,s=n.util.type(t);switch(a=a||{},s){case"Object":if(o=n.util.objId(t),a[o])return a[o];for(var l in r={},a[o]=r,t)t.hasOwnProperty(l)&&(r[l]=e(t[l],a));return r;case"Array":return o=n.util.objId(t),a[o]?a[o]:(r=[],a[o]=r,t.forEach((function(t,n){r[n]=e(t,a)})),r);default:return t}},getLanguage:function(e){while(e&&!t.test(e.className))e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(n){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var a in t)if(t[a].src==e)return t[a]}return null}}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var o=r[e],s={};for(var l in o)if(o.hasOwnProperty(l)){if(l==t)for(var i in a)a.hasOwnProperty(i)&&(s[i]=a[i]);a.hasOwnProperty(l)||(s[l]=o[l])}var c=r[e];return r[e]=s,n.languages.DFS(n.languages,(function(t,a){a===c&&t!=e&&(this[t]=s)})),s},DFS:function e(t,a,r,o){o=o||{};var s=n.util.objId;for(var l in t)if(t.hasOwnProperty(l)){a.call(t,l,t[l],r||l);var i=t[l],c=n.util.type(i);"Object"!==c||o[s(i)]?"Array"!==c||o[s(i)]||(o[s(i)]=!0,e(i,a,l,o)):(o[s(i)]=!0,e(i,a,null,o))}}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,a){var r={callback:a,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),n.hooks.run("before-all-elements-highlight",r);for(var o,s=0;o=r.elements[s++];)n.highlightElement(o,!0===t,r.callback)},highlightElement:function(a,r,o){var s=n.util.getLanguage(a),l=n.languages[s];a.className=a.className.replace(t,"").replace(/\s+/g," ")+" language-"+s;var i=a.parentNode;i&&"pre"===i.nodeName.toLowerCase()&&(i.className=i.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c=a.textContent,u={element:a,language:s,grammar:l,code:c};function d(e){u.highlightedCode=e,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,n.hooks.run("after-highlight",u),n.hooks.run("complete",u),o&&o.call(u.element)}if(n.hooks.run("before-sanity-check",u),!u.code)return n.hooks.run("complete",u),void(o&&o.call(u.element));if(n.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var p=new Worker(n.filename);p.onmessage=function(e){d(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else d(n.highlight(u.code,u.grammar,u.language));else d(n.util.encode(u.code))},highlight:function(e,t,a){var o={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",o),o.tokens=n.tokenize(o.code,o.grammar),n.hooks.run("after-tokenize",o),r.stringify(n.util.encode(o.tokens),o.language)},matchGrammar:function(e,t,a,o,s,l,i){for(var c in a)if(a.hasOwnProperty(c)&&a[c]){var u=a[c];u=Array.isArray(u)?u:[u];for(var d=0;d<u.length;++d){if(i&&i==c+","+d)return;var p=u[d],m=p.inside,f=!!p.lookbehind,x=!!p.greedy,g=0,b=p.alias;if(x&&!p.pattern.global){var h=p.pattern.toString().match(/[imsuy]*$/)[0];p.pattern=RegExp(p.pattern.source,h+"g")}p=p.pattern||p;for(var v=o,_=s;v<t.length;_+=t[v].length,++v){var y=t[v];if(t.length>e.length)return;if(!(y instanceof r)){if(x&&v!=t.length-1){p.lastIndex=_;var w=p.exec(e);if(!w)break;for(var F=w.index+(f&&w[1]?w[1].length:0),k=w.index+w[0].length,T=v,C=_,A=t.length;T<A&&(C<k||!t[T].type&&!t[T-1].greedy);++T)C+=t[T].length,F>=C&&(++v,_=C);if(t[v]instanceof r)continue;B=T-v,y=e.slice(_,C),w.index-=_}else{p.lastIndex=0;w=p.exec(y);var B=1}if(w){f&&(g=w[1]?w[1].length:0);F=w.index+g,w=w[0].slice(g),k=F+w.length;var S=y.slice(0,F),$=y.slice(k),z=[v,B];S&&(++v,_+=S.length,z.push(S));var E=new r(c,m?n.tokenize(w,m):w,b,w,x);if(z.push(E),$&&z.push($),Array.prototype.splice.apply(t,z),1!=B&&n.matchGrammar(e,t,a,v,_,!0,c+","+d),l)break}else if(l)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var o in r)t[o]=r[o];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,o=0;r=a[o++];)r(t)}},Token:r};function r(e,t,a,n,r){this.type=e,this.content=t,this.alias=a,this.length=0|(n||"").length,this.greedy=!!r}if(e.Prism=n,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var a={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var o=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,o)}n.hooks.run("wrap",a);var s=Object.keys(a.attributes).map((function(e){return e+'="'+(a.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(s?" "+s:"")+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(n.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var a=JSON.parse(t.data),r=a.language,o=a.code,s=a.immediateClose;e.postMessage(n.highlight(o,n.languages[r],r)),s&&e.close()}),!1),n):n;var o=n.util.currentScript();if(o&&(n.filename=o.src,o.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){function s(){n.manual||n.highlightAll()}var l=document.readyState;"loading"===l||"interactive"===l&&o&&o.defer?document.addEventListener("DOMContentLoaded",s):window.requestAnimationFrame?window.requestAnimationFrame(s):window.setTimeout(s,16)}return n}(a);e.exports&&(e.exports=n),"undefined"!==typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.languages.markup["tag"].inside["attr-value"].inside["entity"]=n.languages.markup["entity"],n.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes["title"]=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(e,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[t]},a["cdata"]=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:n.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},n.languages.insertBefore("markup","cdata",o)}}),n.languages.xml=n.languages.extend("markup",{}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css["atrule"].inside.rest=e.languages.css;var a=e.languages.markup;a&&(a.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:a.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},a.tag))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.markup.tag.addInlined("script","javascript"),n.languages.js=n.languages.javascript,function(){"undefined"!==typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){var a,r=e.getAttribute("data-src"),o=e,s=/\blang(?:uage)?-([\w-]+)\b/i;while(o&&!s.test(o.className))o=o.parentNode;if(o&&(a=(e.className.match(s)||[,""])[1]),!a){var l=(r.match(/\.(\w+)$/)||[,""])[1];a=t[l]||l}var i=document.createElement("code");i.className="language-"+a,e.textContent="",i.textContent="Loading…",e.appendChild(i);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(i.textContent=c.responseText,n.highlightElement(i),e.setAttribute("data-src-loaded","")):c.status>=400?i.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:i.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}()}).call(this,a("c8ba"))},ecda:function(e,t,a){}}]);