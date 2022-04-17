(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07fe6f27"],{1079:function(e,t,a){"use strict";var r=a("541c");t["a"]=r["a"]},"541c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[a("div",{staticClass:"card-header"},[a("div",[a("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?a("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),a("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(t){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("b-card-body",[a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:a("b-card-body",[e._t("default"),a("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(t){e.code_visible=t},expression:"code_visible"}},[a("div",{staticClass:"p-1"}),a("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},n=[],o=a("205f"),l=a("4968"),s=a("ba06"),c=a("6197"),i=a("5843"),d=(a("c197"),a("84bf"),a("8d51")),u=a.n(d),m={components:{BCard:o["a"],BCardTitle:l["a"],BCardSubTitle:s["a"],BCardBody:c["a"],BCollapse:i["a"],Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data(){return{parentID:"",code_visible:!1}},computed:{cardAttrs(){const e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created(){this.parentID=String(Math.floor(10*Math.random())+1)}},x=m,p=(a("8d54"),a("2877")),b=Object(p["a"])(x,r,n,!1,null,"aa799a9e",null);t["a"]=b.exports},8822:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("form-text-area-default"),a("form-text-area-rows"),a("form-text-area-floating-label"),a("form-text-area-states"),a("form-text-area-size"),a("form-text-area-disable-resize"),a("form-text-area-auto-height"),a("formatter-text-area"),a("form-text-area-readonly"),a("form-text-area-debounce"),a("form-text-area-counter")],1)],1)},n=[],o=a("a15b"),l=a("b28b"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Default"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDefault)+" ")]},proxy:!0}])},[a("b-card-text",[e._v(" Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and contextual states. ")]),a("label",{attrs:{for:"textarea-default"}},[e._v("Textarea")]),a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Textarea",rows:"3"}})],1)},c=[],i=a("1079"),d=a("d6e4"),u=a("9c7d");const m='\n<template>\n  <b-row>\n    <b-col\n      xl="6"\n      cols="12"\n    >\n      <label for="textarea-auto-height">Auto height:</label>\n      <b-form-textarea\n        id="textarea-auto-height"\n        placeholder="Auto height textarea"\n        rows="3"\n        max-rows="8"\n      />\n    </b-col>\n    <b-col\n      xl="6"\n      cols="12"\n    >\n      <label for="textarea-no-auto-shrink">No auto-shrink:</label>\n      <b-form-textarea\n        id="textarea-no-auto-shrink"\n        placeholder="Auto height (no-shrink) textarea"\n        rows="3"\n        max-rows="8"\n        no-auto-shrink\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormTextarea, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',x='\n<template>\n  <div>\n    <b-form-textarea\n      v-model="value"\n      debounce="500"\n      rows="3"\n      max-rows="5"\n    />\n    <pre class="mt-1">{{ value }}</pre>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    value: \'\',\n  }),\n}\n<\/script>\n',p='\n<template>\n  <div>\n    <label for="textarea-default">Textarea</label>\n    <b-form-textarea\n      id="textarea-default"\n      placeholder="Textarea"\n      rows="3"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea, BCardText } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCardText,\n    BFormTextarea,\n  },\n}\n<\/script>\n\n',b='\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-no-resize"\n      placeholder="Fixed height textarea"\n      rows="3"\n      no-resize\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="form-label-group">\n    <b-form-textarea\n      id="textarea"\n      rows="3"\n      placeholder="Label in Textarea"\n    />\n    <label for="label-textarea">Label in Textarea</label>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n',v='\n<template>\n  <div>\n    <b-form-group\n      class="mb-0"\n      label="Textarea with formatter (on input)"\n      label-for="textarea-formatter"\n      description="We will convert your text to lowercase instantly"\n    >\n      <b-form-textarea\n        id="textarea-formatter"\n        v-model="text1"\n        placeholder="Enter your text"\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <p><b>Value:</b> {{ text1 }}</p>\n\n    <b-form-group\n      class="mb-0"\n      label="Textarea with lazy formatter (on blur)"\n      label-for="textarea-lazy"\n      description="This one is a little lazy!"\n    >\n      <b-form-textarea\n        id="textarea-lazy"\n        v-model="text2"\n        placeholder="Enter your text"\n        lazy-formatter\n        :formatter="formatter"\n      />\n    </b-form-group>\n    <p><b>Value:</b> {{ text2 }}</p>\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea, BFormGroup } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BFormGroup,\n  },\n  data: () => ({\n    text1: \'\',\n    text2: \'\',\n  }),\n  methods: {\n    formatter(value) {\n      return value.toLowerCase()\n    },\n  },\n}\n<\/script>\n',h='\n<template>\n  <b-form-textarea\n    id="textarea-rows"\n    placeholder="Tall textarea"\n    rows="8"\n  />\n</template>\n\n<script>\nimport { BFormTextarea} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n}\n<\/script>\n',_='\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-plaintext"\n      plaintext\n      :value="text"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    text: "This is some text.\nIt is read only and doesn\'t look like an input.",\n  }),\n}\n<\/script>\n',g='\n<template>\n  <b-row>\n    <b-col sm="2">\n      <label\n        for="textarea-small"\n        class="text-nowrap"\n      >Small:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-small"\n        size="sm"\n        placeholder="Small textarea"\n      />\n    </b-col>\n    <b-col sm="2">\n      <label\n        for="textarea-default"\n        class="text-nowrap"\n      >Default:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-default"\n        placeholder="Default textarea"\n      />\n    </b-col>\n    <b-col sm="2">\n      <label\n        for="textarea-large"\n        class="text-nowrap"\n      >Large:</label>\n    </b-col>\n    <b-col\n      sm="10"\n      class="mb-1"\n    >\n      <b-form-textarea\n        id="textarea-large"\n        size="lg"\n        placeholder="Large textarea"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BFormTextarea, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',w='\n<template>\n  <b-form-textarea\n    id="textarea-state"\n    v-model="text"\n    :state="text.length <= 10"\n    placeholder="Enter only 10 characters"\n    rows="3"\n  />\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data() {\n    return {\n      text: \'\',\n    }\n  },\n}\n<\/script>\n',T='\n<template>\n  <div>\n    <b-form-textarea\n      id="textarea-state"\n      v-model="text"\n      :state="text.length <= 10"\n      placeholder="Enter only 10 characters"\n      rows="3"\n    />\n  </div>\n</template>\n\n<script>\nimport { BFormTextarea } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormTextarea,\n  },\n  data: () => ({\n    value: \'\',\n    maxChar: 20,\n  }),\n}\n<\/script>\n';var B={components:{BCardCode:i["a"],BCardText:d["a"],BFormTextarea:u["a"]},data(){return{codeDefault:p}}},C=B,y=a("2877"),F=Object(y["a"])(C,s,c,!1,null,null,null),k=F.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Displayed rows"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeRows)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To set the height of ")]),a("code",[e._v("<b-form-textarea>")]),a("span",[e._v(", set the ")]),a("code",[e._v("rows")]),a("span",[e._v(" prop to the desired number of rows. If no value is provided to rows, then it will default to 2.")])]),a("b-form-textarea",{attrs:{id:"textarea-rows",placeholder:"Tall textarea",rows:"8"}})],1)},S=[],A={components:{BCardCode:i["a"],BFormTextarea:u["a"],BCardText:d["a"]},data(){return{codeRows:h}}},D=A,E=Object(y["a"])(D,z,S,!1,null,null,null),$=E.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Floating Label"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFloatingLabel)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Use ")]),a("code",[e._v(".form-label-group")]),a("span",[e._v(" to add a Floating Label with Textarea.")])]),a("div",{staticClass:"form-label-group mt-2 mb-0"},[a("b-form-textarea",{attrs:{id:"textarea",rows:"3",placeholder:"Label in Textarea"}}),a("label",{attrs:{for:"label-textarea"}},[e._v("Label in Textarea")])],1)],1)},R=[],O={components:{BCardCode:i["a"],BCardText:d["a"],BFormTextarea:u["a"]},data(){return{codeFloatingLabel:f}}},j=O,I=Object(y["a"])(j,L,R,!1,null,null,null),J=I.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Contextual states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeStates)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Bootstrap includes validation styles for ")]),a("code",[e._v("valid")]),a("span",[e._v(" and ")]),a("code",[e._v("invalid")]),a("span",[e._v(" states on most form controls.")])]),a("b-form-textarea",{attrs:{id:"textarea-state",state:e.text.length<=10,placeholder:"Enter only 10 characters",rows:"3"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1)},V=[],G={components:{BCardCode:i["a"],BFormTextarea:u["a"],BCardText:d["a"]},data(){return{text:"",codeStates:w}}},H=G,M=Object(y["a"])(H,N,V,!1,null,null,null),W=M.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Control sizing"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSize)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("Set text height using the ")]),a("code",[e._v("size")]),a("span",[e._v(" prop to ")]),a("code",[e._v("sm")]),a("span",[e._v(" or ")]),a("code",[e._v("lg")]),a("span",[e._v(" for small or large respectively.")])]),a("b-row",[a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-small"}},[e._v("Small:")])]),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-small",size:"sm",placeholder:"Small textarea"}})],1),a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-default"}},[e._v("Default:")])]),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"Default textarea"}})],1),a("b-col",{attrs:{sm:"2"}},[a("label",{staticClass:"text-nowrap",attrs:{for:"textarea-large"}},[e._v("Large:")])]),a("b-col",{staticClass:"mb-1",attrs:{sm:"10"}},[a("b-form-textarea",{attrs:{id:"textarea-large",size:"lg",placeholder:"Large textarea"}})],1)],1)],1)},P=[],U={components:{BCardCode:i["a"],BFormTextarea:u["a"],BRow:o["a"],BCardText:d["a"],BCol:l["a"]},data(){return{codeSize:g}}},K=U,Q=Object(y["a"])(K,q,P,!1,null,null,null),X=Q.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Disable resize handle"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDisableResize)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v(" Some web browsers will allow the user to re-size the height of the textarea. To disable this feature, set the ")]),a("code",[e._v("no-resize")]),a("span",[e._v(" prop to ")]),a("code",[e._v("true")]),a("span",[e._v(".")])]),a("b-form-textarea",{attrs:{id:"textarea-no-resize",placeholder:"Fixed height textarea",rows:"3","no-resize":""}})],1)},Z=[],ee={components:{BCardCode:i["a"],BFormTextarea:u["a"],BCardText:d["a"]},data(){return{codeDisableResize:b}}},te=ee,ae=Object(y["a"])(te,Y,Z,!1,null,null,null),re=ae.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Auto height"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAutoHeight)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To set the initial minimum height (in rows), set the")]),a("code",[e._v("rows")]),a("span",[e._v(" prop to the desired number of lines (or leave it at the default of ")]),a("code",[e._v("2")]),a("span",[e._v("), And then set maximum rows that the text area will grow to (before showing a scrollbar) by setting the ")]),a("code",[e._v("max-rows")]),a("span",[e._v("prop to the maximum number of lines of text.")])]),a("b-card-text",[a("span",[e._v("To make the height ")]),a("code",[e._v("sticky")]),a("span",[e._v(" (i.e. never shrink), set the ")]),a("code",[e._v("no-auto-shrink")]),a("span",[e._v(" prop to ")]),a("code",[e._v("true")]),a("span",[e._v(". The ")]),a("code",[e._v("no-auto-shrink")]),a("span",[e._v(" props has no effect if ")]),a("code",[e._v("max-rows")]),a("span",[e._v(" is not set or is equal to or less than rows.")])]),a("b-row",[a("b-col",{attrs:{xl:"6",cols:"12"}},[a("label",{attrs:{for:"textarea-auto-height"}},[e._v("Auto height:")]),a("b-form-textarea",{staticClass:"mb-1 mb-xl-0",attrs:{id:"textarea-auto-height",placeholder:"Auto height textarea",rows:"3","max-rows":"8"}})],1),a("b-col",{attrs:{xl:"6",cols:"12"}},[a("label",{attrs:{for:"textarea-no-auto-shrink"}},[e._v("No auto-shrink:")]),a("b-form-textarea",{attrs:{id:"textarea-no-auto-shrink",placeholder:"Auto height (no-shrink) textarea",rows:"3","max-rows":"8","no-auto-shrink":""}})],1)],1)],1)},oe=[],le={components:{BCardCode:i["a"],BCardText:d["a"],BFormTextarea:u["a"],BRow:o["a"],BCol:l["a"]},data(){return{codeAutoHeight:m}}},se=le,ce=Object(y["a"])(se,ne,oe,!1,null,null,null),ie=ce.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Formatter support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFormatter)+" ")]},proxy:!0}])},[a("b-card-text",[a("code",[e._v("<b-form-textarea>")]),a("span",[e._v("optionally supports formatting by passing a function reference to the ")]),a("code",[e._v("formatter")]),a("span",[e._v(" prop.")])]),a("div",[a("b-form-group",{attrs:{label:"Textarea with formatter (on input)","label-for":"textarea-formatter",description:"We will convert your text to lowercase instantly"}},[a("b-form-textarea",{attrs:{id:"textarea-formatter",placeholder:"Enter your text",formatter:e.formatter},model:{value:e.text1,callback:function(t){e.text1=t},expression:"text1"}})],1),a("b-card-text",[a("strong",[e._v("Value:")]),e._v(" "+e._s(e.text1))]),a("b-form-group",{attrs:{label:"Textarea with lazy formatter (on blur)","label-for":"textarea-lazy",description:"This one is a little lazy!"}},[a("b-form-textarea",{attrs:{id:"textarea-lazy",placeholder:"Enter your text","lazy-formatter":"",formatter:e.formatter},model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),a("b-card-text",[a("strong",[e._v("Value:")]),e._v(" "+e._s(e.text2))])],1)],1)},ue=[],me=a("8226"),xe={components:{BCardCode:i["a"],BFormTextarea:u["a"],BCardText:d["a"],BFormGroup:me["a"]},data(){return{text1:"",text2:"",codeFormatter:v}},methods:{formatter(e){return e.toLowerCase()}}},pe=xe,be=Object(y["a"])(pe,de,ue,!1,null,null,null),fe=be.exports,ve=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Readonly plain text"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeReadonly)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("If you want to have ")]),a("code",[e._v("<b-form-textarea readonly>")]),a("span",[e._v(" elements in your form styled as plain text, set the ")]),a("code",[e._v("plaintext")]),a("span",[e._v(" prop (no need to set ")]),a("code",[e._v("readonly")]),a("span",[e._v(" as it will be set automatically) to remove the default form field styling and preserve the correct text size, margin, padding and height. ")])]),a("b-form-textarea",{attrs:{id:"textarea-plaintext",readonly:"",value:e.text}})],1)},he=[],_e={components:{BCardCode:i["a"],BFormTextarea:u["a"],BCardText:d["a"]},data(){return{text:"This is some text.\nIt is read only and doesn't look like an input.",codeReadonly:_}}},ge=_e,we=Object(y["a"])(ge,ve,he,!1,null,null,null),Te=we.exports,Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Debounce support"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDebounce)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[e._v("To enable debouncing, set the prop ")]),a("code",[e._v("debounce")]),a("span",[e._v(" to any integer greater than zero. The value is specified in milliseconds. Setting ")]),a("code",[e._v("debounce")]),a("span",[e._v(" to ")]),a("code",[e._v("0")]),a("span",[e._v(" will disable debouncing.")])]),a("b-form-textarea",{attrs:{debounce:"500",rows:"3","max-rows":"5"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("b-card-text",{staticClass:"mt-1 mb-0"},[e._v(" "+e._s(e.value)+" ")])],1)},Ce=[],ye={components:{BCardCode:i["a"],BFormTextarea:u["a"],BCardText:d["a"]},data(){return{value:"",codeDebounce:x}}},Fe=ye,ke=Object(y["a"])(Fe,Be,Ce,!1,null,null,null),ze=ke.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card-code",{attrs:{title:"Counter"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCounter)+" ")]},proxy:!0}])},[a("b-card-text",[e._v(" There are times when we need the user to only enter a certain number of characters for it, we have the property counter, the value is a number and determines the maximum. ")]),a("b-form-textarea",{staticClass:"char-textarea",class:e.value.length>=e.maxChar?"text-danger":"",attrs:{placeholder:"Counter",rows:"3",state:e.value.length<=e.maxChar},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("small",{staticClass:"textarea-counter-value float-right",class:e.value.length>=e.maxChar?"bg-danger":""},[a("span",{staticClass:"char-count"},[e._v(e._s(e.value.length))]),e._v(" / "+e._s(e.maxChar)+" ")])],1)},Ae=[],De={components:{BCardCode:i["a"],BCardText:d["a"],BFormTextarea:u["a"]},data(){return{value:"",maxChar:20,codeCounter:T}}},Ee=De,$e=Object(y["a"])(Ee,Se,Ae,!1,null,null,null),Le=$e.exports,Re={components:{BRow:o["a"],BCol:l["a"],FormTextAreaDefault:k,FormTextAreaRows:$,FormTextAreaFloatingLabel:J,FormTextAreaStates:W,FormTextAreaSize:X,FormTextAreaDisableResize:re,FormTextAreaAutoHeight:ie,FormatterTextArea:fe,FormTextAreaReadonly:Te,FormTextAreaDebounce:ze,FormTextAreaCounter:Le}},Oe=Re,je=Object(y["a"])(Oe,r,n,!1,null,null,null);t["default"]=je.exports},"8d54":function(e,t,a){"use strict";a("ecda")},ecda:function(e,t,a){}}]);