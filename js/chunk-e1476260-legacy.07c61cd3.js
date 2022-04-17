(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1476260"],{"0515":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("calendar-basic")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-disable-readonly-states")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-disable-date")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-min-max-range")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-variant")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-width")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-border-padding")],1),t("b-col",{attrs:{cols:"12"}},[t("calendar-string-format")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-slot")],1),t("b-col",{attrs:{md:"6"}},[t("calendar-custom-class")],1),t("b-col",[t("calendar-internationalization")],1)],1)},l=[],o=t("a15b7"),r=t("b28b"),d=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Calendar"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[e._v("BootstrapVue's custom ")]),t("code",[e._v("<b-calendar>")]),t("span",[e._v(" component generates a WAI-ARIA compliant calendar style date selection widget, which can be used to control other components, or can be used to create customized date picker inputs. ")])]),t("b-row",{staticClass:"text-center"},[t("b-col",{staticClass:"mt-1",attrs:{md:"6"}},[t("b-calendar",{attrs:{locale:"en-US"},on:{context:e.onContext},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1),t("b-col",{attrs:{md:"6"}},[t("div",{staticClass:"mt-1"},[t("prism",{staticClass:"rounded mb-0",attrs:{language:"javascript"}},[e._v(" Context: "+e._s(e.context)+" ")])],1)])],1)],1)},s=[],c=t("1079"),i=t("9ed33"),u=t("d6e4"),b=t("8d51"),m=t.n(b),v=(t("c197"),t("84bf"),'\n<template>\n  <b-row class="text-center">\n    <b-col\n      md="6"\n      class="mt-1"\n    >\n\n      \x3c!-- calendar --\x3e\n      <b-calendar\n        v-model="value"\n        locale="en-US"\n        @context="onContext"\n      />\n    </b-col>\n    <b-col md="6">\n\n      \x3c!-- prism --\x3e\n      <div class="mt-1">\n        <prism\n          language="javascript"\n          class="rounded mb-0"\n        >\n          Context: {{ context }}\n        </prism>\n      </div>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BRow, BCol, BCalendar} from \'bootstrap-vue\'\nimport Prism from \'vue-prism-component\'\nimport \'prismjs\'\nimport \'prismjs/themes/prism-tomorrow.css\'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BCalendar,\n    Prism,\n  },\n  data: () => ({\n    value: \'\',\n    context: null,\n  }),\n  methods: {\n    onContext(ctx) {\n      this.context = ctx\n    },\n  },\n}\n<\/script>\n'),p='\n<template>\n  <div class="d-flex justify-content-center">\n    <div>\n\n      \x3c!-- checkbox --\x3e\n      <b-form-group label="Select calendar interactive state">\n        <b-form-radio-group\n          v-model="state"\n          aria-controls="ex-disabled-readonly"\n        >\n          <b-form-radio value="disabled">\n            Disabled\n          </b-form-radio>\n          <b-form-radio value="readonly">\n            Readonly\n          </b-form-radio>\n          <b-form-radio value="normal">\n            Normal\n          </b-form-radio>\n        </b-form-radio-group>\n      </b-form-group>\n\n      \x3c!-- calendar --\x3e\n      <b-calendar\n        id="ex-disabled-readonly"\n        :disabled="disabled"\n        :readonly="readonly"\n      />\n    </div>\n  </div>\n</template>\n\n<script>\nimport {BFormGroup, BFormRadioGroup, BFormRadio, BCalendar} from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BFormGroup,\n    BFormRadioGroup,\n    BFormRadio,\n    BCalendar,\n  },\n  data: () => ({\n    state: \'disabled\',\n  }),\n  computed: {\n    disabled() {\n      return this.state === \'disabled\'\n    },\n    readonly() {\n      return this.state === \'readonly\'\n    },\n  },\n}\n<\/script>\n',h='\n<template>\n  <div class="d-flex align-items-center justify-content-center">\n    <b-calendar\n      v-model="value"\n      :date-disabled-fn="dateDisabled"\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BCalendar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCalendar,\n  },\n  data: () => ({\n    value: \'\',\n  }),\n  methods: {\n    dateDisabled(ymd, date) {\n      const weekday = date.getDay()\n      const day = date.getDate()\n      return weekday === 0 || weekday === 6 || day === 13\n    },\n  },\n}\n<\/script>\n',f='\n<template>\n  <div class="d-flex align-items-center justify-content-center">\n    <b-calendar\n      v-model="value"\n      :min="min"\n      :max="max"\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BCalendar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCalendar,\n  },\n  data() {\n    const now = new Date()\n    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())\n    // 15th two months prior\n    const minDate = new Date(today)\n    minDate.setMonth(minDate.getMonth() - 2)\n    minDate.setDate(15)\n    // 15th in two months\n    const maxDate = new Date(today)\n    maxDate.setMonth(maxDate.getMonth() + 2)\n    maxDate.setDate(15)\n\n    return {\n      value: \'\',\n      min: minDate,\n      max: maxDate,\n    }\n  },\n}\n<\/script>\n',x='\n<template>\n  <div class="d-flex justify-content-center">\n    <b-calendar\n      selected-variant="success"\n      today-variant="info"\n    />\n  </div>\n</template>\n\n<script>\nimport { BCalendar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCalendar,\n  },\n}\n<\/script>\n',_="\n<template>\n  <b-calendar\n    block\n    locale=\"en-US\"\n  />\n</template>\n\n<script>\nimport { BCalendar } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCalendar,\n  },\n}\n<\/script>\n",C='\n<template>\n  <div class="d-flex align-items-center justify-content-center">\n    <b-calendar\n      class="border rounded p-2"\n      locale="en"\n    />\n  </div>\n</template>\n\n<script>\nimport { BCalendar } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCalendar,\n  },\n}\n<\/script>\n',y="\n<template>\n  <b-row class=\"text-center\">\n    <b-col md=\"6\">\n      <h6>Custom date format:</h6>\n      <b-calendar\n        :date-format-options=\"{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }\"\n        locale=\"en\"\n        class=\"mb-1 mb-md-0\"\n      />\n    </b-col>\n    <b-col md=\"6\">\n      <h6>Short date format:</h6>\n      <b-calendar\n        :date-format-options=\"{ year: 'numeric', month: 'numeric', day: 'numeric' }\"\n        locale=\"en\"\n      />\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport { BCalendar, BRow, BCol } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCalendar,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n",g='\n<template>\n  <div class="d-flex align-items-center justify-content-center">\n    <b-calendar\n      v-model="value"\n      value-as-date\n      locale="en"\n    >\n      <div\n        class="d-flex"\n        dir="ltr"\n      >\n        <b-button\n          v-if="value"\n          size="sm"\n          variant="outline-secondary"\n          @click="clearDate"\n        >\n          Clear date\n        </b-button>\n        <b-button\n          size="sm"\n          variant="outline-primary"\n          class="ml-auto"\n          @click="setToday"\n        >\n          Set Today\n        </b-button>\n      </div>\n    </b-calendar>\n  </div>\n</template>\n\n<script>\nimport { BCalendar, BButton } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BCalendar,\n    BButton,\n  },\n  data: () => ({\n    value: null,\n  }),\n  methods: {\n    setToday() {\n      const now = new Date()\n      this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())\n    },\n    clearDate() {\n      this.value = \'\'\n    },\n  },\n}\n<\/script>\n',w="\n<template>\n  <div class=\"d-flex align-items-center justify-content-center\">\n    <b-calendar\n      v-model=\"value\"\n      :date-info-fn=\"dateClass\"\n      locale=\"en\"\n    />\n  </div>\n</template>\n\n<script>\nimport { BCalendar } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCalendar,\n  },\n  data: () => ({\n    value: '',\n  }),\n  methods: {\n    dateClass(ymd, date) {\n      const day = date.getDate()\n      return day >= 10 && day <= 20 ? 'table-info' : ''\n    },\n  },\n}\n<\/script>\n",B="\n<template>\n  <b-row>\n    <b-col cols=\"12\">\n\n      \x3c!-- select locale--\x3e\n      <label for=\"example-locales\">Locale:</label>\n      <b-form-select\n        id=\"example-locales\"\n        v-model=\"locale\"\n        :options=\"locales\"\n      />\n\n      \x3c!-- select weekday--\x3e\n      <label\n        for=\"example-weekdays\"\n        class=\"mt-2\"\n      >Start weekday:</label>\n      <b-form-select\n        id=\"example-weekdays\"\n        v-model=\"weekday\"\n        :options=\"weekdays\"\n      />\n\n      \x3c!-- switch --\x3e\n      <div class=\"demo-inline-spacing\">\n        <div class=\"d-flex align-items-center\">\n          <b-form-checkbox\n            v-model=\"showDecadeNav\"\n            switch\n            inline\n          >\n            Show decade navigation buttons\n          </b-form-checkbox>\n        </div>\n\n        <div class=\"d-flex align-items-center\">\n          <b-form-checkbox\n            v-model=\"hideHeader\"\n            switch\n            inline\n          >\n            Hide the date header\n          </b-form-checkbox>\n        </div>\n      </div>\n    </b-col>\n\n    \x3c!-- calendar --\x3e\n    <b-col\n      md=\"6\"\n      class=\"text-center\"\n    >\n      <b-calendar\n        v-model=\"value\"\n        v-bind=\"labels[locale] || {}\"\n        :locale=\"locale\"\n        :start-weekday=\"weekday\"\n        :hide-header=\"hideHeader\"\n        :show-decade-nav=\"showDecadeNav\"\n        class=\"mt-1\"\n        @context=\"onContext\"\n      />\n    </b-col>\n\n    \x3c!-- prism --\x3e\n    <b-col md=\"6\">\n      <prism\n        language=\"javascript\"\n        class=\"rounded mt-1 mb-0\"\n      >\n        Context: {{ context }}\n      </prism>\n    </b-col>\n  </b-row>\n</template>\n\n<script>\nimport {BCalendar, BRow, BCol, BFormCheckbox, BFormSelect} from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BCalendar,\n    BRow,\n    BCol,\n    BFormCheckbox,\n    BFormSelect,\n  },\n  data: () => ({\n    value: '',\n    context: null,\n    showDecadeNav: false,\n    hideHeader: false,\n    locale: 'en-US',\n    locales: [\n      { value: 'en-US', text: 'English US (en-US)' },\n      { value: 'de', text: 'German (de)' },\n      { value: 'ar-EG', text: 'Arabic Egyptian (ar-EG)' },\n      { value: 'zh', text: 'Chinese (zh)' },\n    ],\n    weekday: 0,\n    weekdays: [\n      { value: 0, text: 'Sunday' },\n      { value: 1, text: 'Monday' },\n      { value: 6, text: 'Saturday' },\n    ],\n    labels: {\n      de: {\n        labelPrevDecade: 'Vorheriges Jahrzehnt',\n        labelPrevYear: 'Vorheriges Jahr',\n        labelPrevMonth: 'Vorheriger Monat',\n        labelCurrentMonth: 'Aktueller Monat',\n        labelNextMonth: 'Nächster Monat',\n        labelNextYear: 'Nächstes Jahr',\n        labelNextDecade: 'Nächstes Jahrzehnt',\n        labelToday: 'Heute',\n        labelSelected: 'Ausgewähltes Datum',\n        labelNoDateSelected: 'Kein Datum gewählt',\n        labelCalendar: 'Kalender',\n        labelNav: 'Kalendernavigation',\n        labelHelp: 'Mit den Pfeiltasten durch den Kalender navigieren',\n      },\n      'ar-EG': {\n        labelPrevDecade: 'العقد السابق',\n        labelPrevYear: 'العام السابق',\n        labelPrevMonth: 'الشهر السابق',\n        labelCurrentMonth: 'الشهر الحالي',\n        labelNextMonth: 'الشهر المقبل',\n        labelNextYear: 'العام المقبل',\n        labelNextDecade: 'العقد القادم',\n        labelToday: 'اليوم',\n        labelSelected: 'التاريخ المحدد',\n        labelNoDateSelected: 'لم يتم اختيار تاريخ',\n        labelCalendar: 'التقويم',\n        labelNav: 'الملاحة التقويم',\n        labelHelp: 'استخدم مفاتيح المؤشر للتنقل في التواريخ',\n      },\n      zh: {\n        labelPrevDecade: '过去十年',\n        labelPrevYear: '上一年',\n        labelPrevMonth: '上个月',\n        labelCurrentMonth: '当前月份',\n        labelNextMonth: '下个月',\n        labelNextYear: '明年',\n        labelNextDecade: '下一个十年',\n        labelToday: '今天',\n        labelSelected: '选定日期',\n        labelNoDateSelected: '未选择日期',\n        labelCalendar: '日历',\n        labelNav: '日历导航',\n        labelHelp: '使用光标键浏览日期',\n      },\n    },\n  }),\n  methods: {\n    onContext(ctx) {\n      this.context = ctx\n    },\n  },\n}\n<\/script>\n",D={components:{BCardCode:c["a"],BRow:o["a"],BCol:r["a"],BCalendar:i["a"],BCardText:u["a"],Prism:m.a},data:function(){return{value:"",context:null,codeBasic:v}},methods:{onContext:function(e){this.context=e}}},k=D,S=t("2877"),M=Object(S["a"])(k,d,s,!1,null,null,null),N=M.exports,T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Disabled and readonly states"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeStates)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Setting the ")]),t("code",[e._v("disabled")]),t("span",[e._v(" prop will remove all interactivity of the ")]),t("code",[e._v("<b-calendar>")]),t("span",[e._v(" component.")]),t("span",[e._v(" Setting the ")]),t("code",[e._v("readonly")]),t("span",[e._v(" prop will disable selecting a date.")])]),t("div",{staticClass:"d-flex justify-content-center"},[t("div",[t("b-form-group",{attrs:{label:"Select calendar interactive state"}},[t("b-form-radio-group",{attrs:{"aria-controls":"ex-disabled-readonly"},model:{value:e.state,callback:function(a){e.state=a},expression:"state"}},[t("b-form-radio",{attrs:{value:"disabled"}},[e._v(" Disabled ")]),t("b-form-radio",{attrs:{value:"readonly"}},[e._v(" Readonly ")]),t("b-form-radio",{attrs:{value:"normal"}},[e._v(" Normal ")])],1)],1),t("b-calendar",{attrs:{id:"ex-disabled-readonly",disabled:e.disabled,readonly:e.readonly}})],1)])],1)},j=[],P=t("8226"),Y=t("2924"),R=t("9e14e"),F={components:{BCardCode:c["a"],BFormGroup:P["a"],BFormRadioGroup:Y["a"],BFormRadio:R["a"],BCalendar:i["a"],BCardText:u["a"]},data:function(){return{state:"disabled",codeStates:p}},computed:{disabled:function(){return"disabled"===this.state},readonly:function(){return"readonly"===this.state}}},E=F,z=Object(S["a"])(E,T,j,!1,null,null,null),$=z.exports,H=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Minimum and maximum dates"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeMinMaxRange)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Restrict the calendar range via the ")]),t("code",[e._v("min")]),t("span",[e._v(" and ")]),t("code",[e._v("max")]),t("span",[e._v(" props. The props accept a date string in the format of ")]),t("code",[e._v("YYYY-MM-DD")]),t("span",[e._v(" or a ")]),t("code",[e._v("Date")]),t("span",[e._v(" object.")])]),t("div",{staticClass:"d-flex align-items-center justify-content-center"},[t("b-calendar",{attrs:{min:e.min,max:e.max,locale:"en"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1)},O=[],I={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"]},data:function(){var e=new Date,a=new Date(e.getFullYear(),e.getMonth(),e.getDate()),t=new Date(a);t.setMonth(t.getMonth()-2),t.setDate(15);var n=new Date(a);return n.setMonth(n.getMonth()+2),n.setDate(15),{value:"",codeMinMaxRange:f,min:t,max:n}}},G=I,A=Object(S["a"])(G,H,O,!1,null,null,null),U=A.exports,J=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Disabling dates"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeDisableDate)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("If you need to disable specific dates within the calendar, specify a function reference to the ")]),t("code",[e._v("date-disabled-fn")]),t("span",[e._v(" prop. The function is passed two arguments: ")]),t("code",[e._v("ymd")]),t("span",[e._v(" The date as a ")]),t("code",[e._v("YYYY-MM-DD")]),t("span",[e._v(" string, ")]),t("code",[e._v("date")]),t("span",[e._v(" The date as a ")]),t("code",[e._v("Date")]),t("span",[e._v(" object")])]),t("div",{staticClass:"d-flex align-items-center justify-content-center"},[t("b-calendar",{attrs:{"date-disabled-fn":e.dateDisabled,locale:"en"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1)},V=[],K={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"]},data:function(){return{value:"",codeDisableDate:h}},methods:{dateDisabled:function(e,a){var t=a.getDay(),n=a.getDate();return 0===t||6===t||13===n}}},L=K,W=Object(S["a"])(L,J,V,!1,null,null,null),q=W.exports,Q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Calendar Variant"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVariant)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("The selected date button (background color) defaults to the ")]),t("code",[e._v("'primary'")]),t("span",[e._v(" theme variant. You can change this to any of the Bootstrap v4 theme variant colors: ")]),t("code",[e._v("'secondary', 'success', 'danger', 'warning', 'info'")]),t("span",[e._v(", etc, via the ")]),t("code",[e._v("selected-variant")]),t("span",[e._v(" prop.")])]),t("div",{staticClass:"d-flex justify-content-center"},[t("b-calendar",{attrs:{"selected-variant":"success","today-variant":"info"}})],1)],1)},X=[],Z={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"]},data:function(){return{codeVariant:x}}},ee=Z,ae=Object(S["a"])(ee,Q,X,!1,null,null,null),te=ae.exports,ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Calendar Width"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeWidth)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To change the width, set the ")]),t("code",[e._v("width")]),t("span",[e._v(" prop to any valid CSS width (including units).")])]),t("b-card-text",[t("span",[e._v("Optionally, make the calendar full width by setting the prop ")]),t("code",[e._v("block")]),t("span",[e._v(", which will make it expand to fit the width of the parent element. The ")]),t("code",[e._v("width")]),t("span",[e._v(" prop has no effect when ")]),t("code",[e._v("block")]),t("span",[e._v(" is set.")])]),t("b-calendar",{attrs:{block:"",locale:"en-US"}})],1)},le=[],oe={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"]},data:function(){return{codeWidth:_}}},re=oe,de=Object(S["a"])(re,ne,le,!1,null,null,null),se=de.exports,ce=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Date string format"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFormat)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("To change format options of the displayed date text inside the component, e.g. in the header, set the ")]),t("code",[e._v("date-format-options")]),t("span",[e._v(" prop to an object containing the requested format properties for the ")]),t("code",[e._v("Intl.DateTimeFormat")]),t("span",[e._v(" object (see also Internationalization).")])]),t("b-row",{staticClass:"text-center"},[t("b-col",{attrs:{md:"6"}},[t("h6",[e._v("Custom date format:")]),t("b-calendar",{staticClass:"mb-1 mb-md-0",attrs:{"date-format-options":{year:"numeric",month:"short",day:"2-digit",weekday:"short"},locale:"en"}})],1),t("b-col",{attrs:{md:"6"}},[t("h6",[e._v("Short date format:")]),t("b-calendar",{attrs:{"date-format-options":{year:"numeric",month:"numeric",day:"numeric"},locale:"en"}})],1)],1)],1)},ie=[],ue={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"],BRow:o["a"],BCol:r["a"]},data:function(){return{codeFormat:y}}},be=ue,me=Object(S["a"])(be,ce,ie,!1,null,null,null),ve=me.exports,pe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Calendar Border & padding"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBorderPadding)+" ")]},proxy:!0}])},[t("b-card-text",[e._v(" Fancy a calendar with a border with padding? Use Bootstrap's border and padding utility classes to add borders and padding: ")]),t("div",{staticClass:"d-flex align-items-center justify-content-center"},[t("b-calendar",{staticClass:"border rounded p-2",attrs:{locale:"en"}})],1)],1)},he=[],fe={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"]},data:function(){return{codeBorderPadding:C}}},xe=fe,_e=Object(S["a"])(xe,pe,he,!1,null,null,null),Ce=_e.exports,ye=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Default slot"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSlot)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Provide optional content at the bottom of the calendar interface via the use of default slot. The slot can be used to add buttons such as ")]),t("code",[e._v("Select Today")]),t("span",[e._v(" or ")]),t("code",[e._v("Reset")]),t("span",[e._v(", etc.")])]),t("div",{staticClass:"d-flex align-items-center justify-content-center"},[t("b-calendar",{attrs:{"value-as-date":"",locale:"en"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},[t("div",{staticClass:"d-flex",attrs:{dir:"ltr"}},[e.value?t("b-button",{attrs:{size:"sm",variant:"outline-secondary"},on:{click:e.clearDate}},[e._v(" Clear date ")]):e._e(),t("b-button",{staticClass:"ml-auto",attrs:{size:"sm",variant:"outline-primary"},on:{click:e.setToday}},[e._v(" Set Today ")])],1)])],1)],1)},ge=[],we=t("1947"),Be={components:{BCardCode:c["a"],BCalendar:i["a"],BButton:we["a"],BCardText:u["a"]},data:function(){return{value:null,codeSlot:g}},methods:{setToday:function(){var e=new Date;this.value=new Date(e.getFullYear(),e.getMonth(),e.getDate())},clearDate:function(){this.value=""}}},De=Be,ke=Object(S["a"])(De,ye,ge,!1,null,null,null),Se=ke.exports,Me=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Adding CSS classes to specific dates"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCustomClass)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("If you need to highlight a specific date or dates, set the ")]),t("code",[e._v("date-info-fn")]),t("span",[e._v(" prop to a reference to a function that returns a CSS class string (or array of strings) to apply to the date's cell. The function is passed two arguments: ")]),t("code",[e._v("ymd")]),t("span",[e._v(" The date as a ")]),t("code",[e._v("YYYY-MM-DD")]),t("span",[e._v(" string, ")]),t("code",[e._v("date")]),t("span",[e._v(" The date as a ")]),t("code",[e._v("Date")]),t("span",[e._v(" object")])]),t("div",{staticClass:"d-flex align-items-center justify-content-center"},[t("b-calendar",{attrs:{"date-info-fn":e.dateClass,locale:"en"},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})],1)],1)},Ne=[],Te={components:{BCardCode:c["a"],BCardText:u["a"],BCalendar:i["a"]},data:function(){return{value:"",codeCustomClass:w}},methods:{dateClass:function(e,a){var t=a.getDate();return t>=10&&t<=20?"table-primary":""}}},je=Te,Pe=Object(S["a"])(je,Me,Ne,!1,null,null,null),Ye=Pe.exports,Re=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Internationalization"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeInternationalization)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("By default ")]),t("code",[e._v("<b-calendar>")]),t("span",[e._v(" will use the browser's default locale, but you can specify the locale (or locales) to use via the ")]),t("code",[e._v("locale")]),t("span",[e._v(" prop. The prop accepts either a single locale string, or an array of locale strings (listed in order of preferred locale). ")])]),t("b-row",[t("b-col",{attrs:{cols:"12"}},[t("label",{attrs:{for:"example-locales"}},[e._v("Locale:")]),t("b-form-select",{attrs:{id:"example-locales",options:e.locales},model:{value:e.locale,callback:function(a){e.locale=a},expression:"locale"}}),t("label",{staticClass:"mt-2",attrs:{for:"example-weekdays"}},[e._v("Start weekday:")]),t("b-form-select",{attrs:{id:"example-weekdays",options:e.weekdays},model:{value:e.weekday,callback:function(a){e.weekday=a},expression:"weekday"}}),t("div",{staticClass:"demo-inline-spacing"},[t("div",{staticClass:"d-flex align-items-center"},[t("b-form-checkbox",{attrs:{switch:"",inline:""},model:{value:e.showDecadeNav,callback:function(a){e.showDecadeNav=a},expression:"showDecadeNav"}},[e._v(" Show decade navigation buttons ")])],1),t("div",{staticClass:"d-flex align-items-center"},[t("b-form-checkbox",{attrs:{switch:"",inline:""},model:{value:e.hideHeader,callback:function(a){e.hideHeader=a},expression:"hideHeader"}},[e._v(" Hide the date header ")])],1)])],1),t("b-col",{staticClass:"text-center",attrs:{md:"6"}},[t("b-calendar",e._b({staticClass:"mt-1",attrs:{locale:e.locale,"start-weekday":e.weekday,"hide-header":e.hideHeader,"show-decade-nav":e.showDecadeNav},on:{context:e.onContext},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},"b-calendar",e.labels[e.locale]||{},!1))],1),t("b-col",{attrs:{md:"6"}},[t("prism",{staticClass:"rounded mt-1 mb-0",attrs:{language:"javascript"}},[e._v(" Context: "+e._s(e.context)+" ")])],1)],1)],1)},Fe=[],Ee=t("c3e6"),ze=t("8361"),$e={components:{BCardCode:c["a"],BCalendar:i["a"],BCardText:u["a"],BRow:o["a"],BCol:r["a"],BFormCheckbox:Ee["a"],BFormSelect:ze["a"],Prism:m.a},data:function(){return{value:"",codeInternationalization:B,context:null,showDecadeNav:!1,hideHeader:!1,locale:"en-US",locales:[{value:"en-US",text:"English US (en-US)"},{value:"de",text:"German (de)"},{value:"ar-EG",text:"Arabic Egyptian (ar-EG)"},{value:"zh",text:"Chinese (zh)"}],weekday:0,weekdays:[{value:0,text:"Sunday"},{value:1,text:"Monday"},{value:6,text:"Saturday"}],labels:{de:{labelPrevDecade:"Vorheriges Jahrzehnt",labelPrevYear:"Vorheriges Jahr",labelPrevMonth:"Vorheriger Monat",labelCurrentMonth:"Aktueller Monat",labelNextMonth:"Nächster Monat",labelNextYear:"Nächstes Jahr",labelNextDecade:"Nächstes Jahrzehnt",labelToday:"Heute",labelSelected:"Ausgewähltes Datum",labelNoDateSelected:"Kein Datum gewählt",labelCalendar:"Kalender",labelNav:"Kalendernavigation",labelHelp:"Mit den Pfeiltasten durch den Kalender navigieren"},"ar-EG":{labelPrevDecade:"العقد السابق",labelPrevYear:"العام السابق",labelPrevMonth:"الشهر السابق",labelCurrentMonth:"الشهر الحالي",labelNextMonth:"الشهر المقبل",labelNextYear:"العام المقبل",labelNextDecade:"العقد القادم",labelToday:"اليوم",labelSelected:"التاريخ المحدد",labelNoDateSelected:"لم يتم اختيار تاريخ",labelCalendar:"التقويم",labelNav:"الملاحة التقويم",labelHelp:"استخدم مفاتيح المؤشر للتنقل في التواريخ"},zh:{labelPrevDecade:"过去十年",labelPrevYear:"上一年",labelPrevMonth:"上个月",labelCurrentMonth:"当前月份",labelNextMonth:"下个月",labelNextYear:"明年",labelNextDecade:"下一个十年",labelToday:"今天",labelSelected:"选定日期",labelNoDateSelected:"未选择日期",labelCalendar:"日历",labelNav:"日历导航",labelHelp:"使用光标键浏览日期"}}}},methods:{onContext:function(e){this.context=e}}},He=$e,Oe=Object(S["a"])(He,Re,Fe,!1,null,null,null),Ie=Oe.exports,Ge={components:{BRow:o["a"],BCol:r["a"],CalendarBasic:N,CalendarDisableReadonlyStates:$,CalendarMinMaxRange:U,CalendarDisableDate:q,CalendarVariant:te,CalendarWidth:se,CalendarStringFormat:ve,CalendarBorderPadding:Ce,CalendarSlot:Se,CalendarCustomClass:Ye,CalendarInternationalization:Ie}},Ae=Ge,Ue=Object(S["a"])(Ae,n,l,!1,null,null,null);a["default"]=Ue.exports},1079:function(e,a,t){"use strict";var n=t("541c");a["a"]=n["a"]},"541c":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card",e._g(e._b({attrs:{"no-body":""}},"b-card",e.cardAttrs,!1),e.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[e._v(e._s(e.$attrs.title))]),e.$attrs["sub-title"]?t("b-card-sub-title",[e._v(" "+e._s(e.$attrs["sub-title"])+" ")]):e._e()],1),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":e.code_visible?"false":"true","aria-controls":e.parentID},on:{click:function(a){e.code_visible=!e.code_visible}}})]),void 0!==e.$attrs["no-body"]?[e._t("default"),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],1)]:t("b-card-body",[e._t("default"),t("b-collapse",{staticClass:"card-code",attrs:{id:e.parentID,visible:e.code_visible},model:{value:e.code_visible,callback:function(a){e.code_visible=a},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),t("prism",{attrs:{language:e.codeLanguage}},[e._t("code")],2)],1)],2)],2)},l=[],o=(t("e9c4"),t("205f")),r=t("4968"),d=t("ba06"),s=t("6197"),c=t("5843"),i=(t("c197"),t("84bf"),t("8d51")),u=t.n(i),b={components:{BCard:o["a"],BCardTitle:r["a"],BCardSubTitle:d["a"],BCardBody:s["a"],BCollapse:c["a"],Prism:u.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var e=JSON.parse(JSON.stringify(this.$attrs));return delete e.title,delete e["sub-title"],e}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},m=b,v=(t("8d54"),t("2877")),p=Object(v["a"])(m,n,l,!1,null,"aa799a9e",null);a["a"]=p.exports},"8d54":function(e,a,t){"use strict";t("ecda")},ecda:function(e,a,t){}}]);