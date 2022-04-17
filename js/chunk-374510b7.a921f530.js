(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-374510b7"],{"050c":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-sidebar",{attrs:{id:"sidebar-invoice-add-payment","sidebar-class":"sidebar-lg","bg-variant":"white",shadow:"",backdrop:"","no-header":"",right:""},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hide;return[e("div",{staticClass:"d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1"},[e("h5",{staticClass:"mb-0"},[t._v(" Add Payment ")]),e("feather-icon",{staticClass:"ml-1 cursor-pointer",attrs:{icon:"XIcon",size:"16"},on:{click:i}})],1),e("b-form",{staticClass:"p-2",on:{submit:function(t){t.preventDefault()}}},[e("b-form-group",{attrs:{label:"Invoice Balance","label-for":"invoice-balance"}},[e("b-form-input",{attrs:{id:"invoice-balance",trim:"",disabled:""},model:{value:t.addPaymentData.invoiceBalance,callback:function(a){t.$set(t.addPaymentData,"invoiceBalance",a)},expression:"addPaymentData.invoiceBalance"}})],1),e("b-form-group",{attrs:{label:"Payment Amount","label-for":"payment-amount"}},[e("b-form-input",{attrs:{id:"payment-amount",placeholder:"$10000",trim:"",type:"number"},model:{value:t.addPaymentData.paymentAmount,callback:function(a){t.$set(t.addPaymentData,"paymentAmount",a)},expression:"addPaymentData.paymentAmount"}})],1),e("b-form-group",{attrs:{label:"Payment Date","label-for":"payment-date"}},[e("flat-pickr",{staticClass:"form-control",model:{value:t.addPaymentData.paymentDate,callback:function(a){t.$set(t.addPaymentData,"paymentDate",a)},expression:"addPaymentData.paymentDate"}})],1),e("b-form-group",{attrs:{label:"Payment Method","label-for":"payment-method"}},[e("v-select",{attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",options:t.paymentMethods,label:"Payment Method",placeholder:"Select Payment Method","input-id":"payment-method",clearable:!1},model:{value:t.addPaymentData.paymentMethod,callback:function(a){t.$set(t.addPaymentData,"paymentMethod",a)},expression:"addPaymentData.paymentMethod"}})],1),e("b-form-group",{attrs:{label:"Internal Payment Note","label-for":"internal-payment-note"}},[e("b-form-textarea",{attrs:{id:"internal-payment-note",placeholder:"Internal Payment Note",rows:"5",trim:""},model:{value:t.addPaymentData.internalPaymentNote,callback:function(a){t.$set(t.addPaymentData,"internalPaymentNote",a)},expression:"addPaymentData.internalPaymentNote"}})],1),e("div",{staticClass:"d-flex mt-2"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-2",attrs:{variant:"primary",type:"submit"},on:{click:i}},[t._v(" Send ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:i}},[t._v(" Cancel ")])],1)],1)]}}])})},s=[],n=e("baa4"),o=e("11de"),r=e("8226"),c=e("4797"),l=e("9c7d"),d=e("1947"),p=e("ed09"),m=e("e009"),v=e("c38f"),b=e.n(v),u=e("4a7a"),f=e.n(u),y={components:{BSidebar:n["a"],BForm:o["a"],BFormGroup:r["a"],BFormInput:c["a"],BFormTextarea:l["a"],BButton:d["a"],flatPickr:b.a,vSelect:f.a},directives:{Ripple:m["a"]},setup(){const t=["Cash","Bank Transfer","Debit","Credit","Paypal"],a=Object(p["ref"])({invoiceBalance:5e3,paymentAmount:"",paymentDate:"2020-11-11",paymentMethod:null,internalPaymentNote:""});return{paymentMethods:t,addPaymentData:a}}},C=y,h=(e("e73b"),e("2877")),g=Object(h["a"])(C,i,s,!1,null,null,null);a["a"]=g.exports},"088b":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("svg",{attrs:{viewBox:"0 0 139 95",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",height:"24"}},[e("defs",[e("linearGradient",{attrs:{id:"linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%"}},[e("stop",{attrs:{"stop-color":"#000000",offset:"0%"}}),e("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1),e("linearGradient",{attrs:{id:"linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%"}},[e("stop",{attrs:{"stop-color":"#EEEEEE","stop-opacity":"0",offset:"0%"}}),e("stop",{attrs:{"stop-color":"#FFFFFF",offset:"100%"}})],1)],1),e("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{id:"Artboard",transform:"translate(-400.000000, -178.000000)"}},[e("g",{attrs:{id:"Group",transform:"translate(400.000000, 178.000000)"}},[e("path",{staticClass:"text-primary",staticStyle:{fill:"currentColor"},attrs:{id:"Path",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"}}),e("path",{attrs:{id:"Path1",d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#linearGradient-1)",opacity:"0.2"}}),e("polygon",{attrs:{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}}),e("polygon",{attrs:{id:"Path-21",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}}),e("polygon",{attrs:{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"}})])])])])},s=[],n=e("2877"),o={},r=Object(n["a"])(o,i,s,!1,null,null,null);a["a"]=r.exports},"3bb1":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-sidebar",{attrs:{id:"sidebar-send-invoice","sidebar-class":"sidebar-lg","bg-variant":"white",shadow:"",backdrop:"","no-header":"",right:""},scopedSlots:t._u([{key:"default",fn:function(a){var i=a.hide;return[e("div",{staticClass:"d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1"},[e("h5",{staticClass:"mb-0"},[t._v(" Send Invoice ")]),e("feather-icon",{staticClass:"ml-1 cursor-pointer",attrs:{icon:"XIcon",size:"16"},on:{click:i}})],1),e("b-form",{staticClass:"p-2",on:{submit:function(t){t.preventDefault()}}},[e("b-form-group",{attrs:{label:"From","label-for":"from"}},[e("b-form-input",{attrs:{id:"from",trim:"",type:"email"},model:{value:t.sendInvoiceData.from,callback:function(a){t.$set(t.sendInvoiceData,"from",a)},expression:"sendInvoiceData.from"}})],1),e("b-form-group",{attrs:{label:"To","label-for":"to"}},[e("b-form-input",{attrs:{id:"to",trim:"",type:"email"},model:{value:t.sendInvoiceData.to,callback:function(a){t.$set(t.sendInvoiceData,"to",a)},expression:"sendInvoiceData.to"}})],1),e("b-form-group",{attrs:{label:"Subject","label-for":"subject"}},[e("b-form-input",{attrs:{id:"subject",trim:""},model:{value:t.sendInvoiceData.subject,callback:function(a){t.$set(t.sendInvoiceData,"subject",a)},expression:"sendInvoiceData.subject"}})],1),e("b-form-group",{attrs:{label:"Message","label-for":"message"}},[e("b-form-textarea",{attrs:{id:"message",rows:"12",trim:""},model:{value:t.sendInvoiceData.message,callback:function(a){t.$set(t.sendInvoiceData,"message",a)},expression:"sendInvoiceData.message"}})],1),e("b-badge",{attrs:{variant:"light-primary"}},[e("feather-icon",{attrs:{icon:"LinkIcon"}}),e("span",{staticClass:"ml-50"},[t._v("Invoice Attached")])],1),e("div",{staticClass:"d-flex mt-2"},[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-2",attrs:{variant:"primary",type:"submit"},on:{click:i}},[t._v(" Send ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-secondary"},on:{click:i}},[t._v(" Cancel ")])],1)],1)]}}])})},s=[],n=e("baa4"),o=e("11de"),r=e("8226"),c=e("4797"),l=e("9c7d"),d=e("1947"),p=e("e98b"),m=e("ed09"),v=e("e009"),b={components:{BSidebar:n["a"],BForm:o["a"],BFormGroup:r["a"],BFormInput:c["a"],BFormTextarea:l["a"],BButton:d["a"],BBadge:p["a"]},directives:{Ripple:v["a"]},setup(){const t=Object(m["ref"])({from:"shelbyComapny@email.com",to:"qConsolidated@email.com",subject:"Invoice of purchased Admin Templates",message:"Dear Queen Consolidated,\n\nThank you for your business, always a pleasure to work with you!\n\nWe have generated a new invoice in the amount of $95.59\n\nWe would appreciate payment of this invoice by 05/11/2019"});return{sendInvoiceData:t}}},u=b,f=e("2877"),y=Object(f["a"])(u,i,s,!1,null,null,null);a["a"]=y.exports},"82ee":function(t,a,e){},8546:function(t,a,e){},"99f0":function(t,a,e){},a29f:function(t,a,e){"use strict";var i=e("7f80");a["a"]={namespaced:!0,state:{},getters:{},mutations:{},actions:{fetchInvoices(t,a){return new Promise((t,e)=>{i["a"].get("/apps/invoice/invoices",{params:a}).then(a=>t(a)).catch(t=>e(t))})},fetchInvoice(t,{id:a}){return new Promise((t,e)=>{i["a"].get("/apps/invoice/invoices/"+a).then(a=>t(a)).catch(t=>e(t))})},fetchClients(){return new Promise((t,a)=>{i["a"].get("/apps/invoice/clients").then(a=>t(a)).catch(t=>a(t))})}}}},b178:function(t,a,e){"use strict";e("99f0")},b8d3:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"invoice-preview-wrapper"},[e("b-alert",{attrs:{variant:"danger",show:void 0===t.invoiceData}},[e("h4",{staticClass:"alert-heading"},[t._v(" Error fetching invoice data ")]),e("div",{staticClass:"alert-body"},[t._v(" No invoice found with this invoice id. Check "),e("b-link",{staticClass:"alert-link",attrs:{to:{name:"apps-invoice-list"}}},[t._v(" Invoice List ")]),t._v(" for other invoices. ")],1)]),t.invoiceData?e("b-row",{staticClass:"invoice-preview"},[e("b-col",{attrs:{cols:"12",xl:"9",md:"8"}},[e("b-card",{staticClass:"invoice-preview-card",attrs:{"no-body":""}},[e("b-card-body",{staticClass:"invoice-padding pb-0"},[e("div",{staticClass:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0"},[e("div",[e("div",{staticClass:"logo-wrapper"},[e("logo"),e("h3",{staticClass:"text-primary invoice-logo"},[t._v(" Vuexy ")])],1),e("p",{staticClass:"card-text mb-25"},[t._v(" Office 149, 450 South Brand Brooklyn ")]),e("p",{staticClass:"card-text mb-25"},[t._v(" San Diego County, CA 91905, USA ")]),e("p",{staticClass:"card-text mb-0"},[t._v(" +1 (123) 456 7891, +44 (876) 543 2198 ")])]),e("div",{staticClass:"mt-md-0 mt-2"},[e("h4",{staticClass:"invoice-title"},[t._v(" Invoice "),e("span",{staticClass:"invoice-number"},[t._v("#"+t._s(t.invoiceData.id))])]),e("div",{staticClass:"invoice-date-wrapper"},[e("p",{staticClass:"invoice-date-title"},[t._v(" Date Issued: ")]),e("p",{staticClass:"invoice-date"},[t._v(" "+t._s(t.invoiceData.issuedDate)+" ")])]),e("div",{staticClass:"invoice-date-wrapper"},[e("p",{staticClass:"invoice-date-title"},[t._v(" Due Date: ")]),e("p",{staticClass:"invoice-date"},[t._v(" "+t._s(t.invoiceData.dueDate)+" ")])])])])]),e("hr",{staticClass:"invoice-spacing"}),t.invoiceData.client?e("b-card-body",{staticClass:"invoice-padding pt-0"},[e("b-row",{staticClass:"invoice-spacing"},[e("b-col",{staticClass:"p-0",attrs:{cols:"12",xl:"6"}},[e("h6",{staticClass:"mb-2"},[t._v(" Invoice To: ")]),e("h6",{staticClass:"mb-25"},[t._v(" "+t._s(t.invoiceData.client.name)+" ")]),e("p",{staticClass:"card-text mb-25"},[t._v(" "+t._s(t.invoiceData.client.company)+" ")]),e("p",{staticClass:"card-text mb-25"},[t._v(" "+t._s(t.invoiceData.client.address)+", "+t._s(t.invoiceData.client.country)+" ")]),e("p",{staticClass:"card-text mb-25"},[t._v(" "+t._s(t.invoiceData.client.contact)+" ")]),e("p",{staticClass:"card-text mb-0"},[t._v(" "+t._s(t.invoiceData.client.companyEmail)+" ")])]),e("b-col",{staticClass:"p-0 mt-xl-0 mt-2 d-flex justify-content-xl-end",attrs:{xl:"6",cols:"12"}},[e("div",[e("h6",{staticClass:"mb-2"},[t._v(" Payment Details: ")]),e("table",[e("tbody",[e("tr",[e("td",{staticClass:"pr-1"},[t._v(" Total Due: ")]),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.paymentDetails.totalDue))])])]),e("tr",[e("td",{staticClass:"pr-1"},[t._v(" Bank name: ")]),e("td",[t._v(t._s(t.paymentDetails.bankName))])]),e("tr",[e("td",{staticClass:"pr-1"},[t._v(" Country: ")]),e("td",[t._v(t._s(t.paymentDetails.country))])]),e("tr",[e("td",{staticClass:"pr-1"},[t._v(" IBAN: ")]),e("td",[t._v(t._s(t.paymentDetails.iban))])]),e("tr",[e("td",{staticClass:"pr-1"},[t._v(" SWIFT code: ")]),e("td",[t._v(t._s(t.paymentDetails.swiftCode))])])])])])])],1)],1):t._e(),e("b-table-lite",{attrs:{responsive:"",items:t.invoiceDescription,fields:["taskDescription","rate","hours","total"]},scopedSlots:t._u([{key:"cell(taskDescription)",fn:function(a){return[e("b-card-text",{staticClass:"font-weight-bold mb-25"},[t._v(" "+t._s(a.item.taskTitle)+" ")]),e("b-card-text",{staticClass:"text-nowrap"},[t._v(" "+t._s(a.item.taskDescription)+" ")])]}}],null,!1,1464498393)}),e("b-card-body",{staticClass:"invoice-padding pb-0"},[e("b-row",[e("b-col",{staticClass:"mt-md-0 mt-3",attrs:{cols:"12",md:"6",order:"2","order-md":"1"}},[e("b-card-text",{staticClass:"mb-0"},[e("span",{staticClass:"font-weight-bold"},[t._v("Salesperson:")]),e("span",{staticClass:"ml-75"},[t._v("Alfie Solomons")])])],1),e("b-col",{staticClass:"mt-md-6 d-flex justify-content-end",attrs:{cols:"12",md:"6",order:"1","order-md":"2"}},[e("div",{staticClass:"invoice-total-wrapper"},[e("div",{staticClass:"invoice-total-item"},[e("p",{staticClass:"invoice-total-title"},[t._v(" Subtotal: ")]),e("p",{staticClass:"invoice-total-amount"},[t._v(" $1800 ")])]),e("div",{staticClass:"invoice-total-item"},[e("p",{staticClass:"invoice-total-title"},[t._v(" Discount: ")]),e("p",{staticClass:"invoice-total-amount"},[t._v(" $28 ")])]),e("div",{staticClass:"invoice-total-item"},[e("p",{staticClass:"invoice-total-title"},[t._v(" Tax: ")]),e("p",{staticClass:"invoice-total-amount"},[t._v(" 21% ")])]),e("hr",{staticClass:"my-50"}),e("div",{staticClass:"invoice-total-item"},[e("p",{staticClass:"invoice-total-title"},[t._v(" Total: ")]),e("p",{staticClass:"invoice-total-amount"},[t._v(" $1690 ")])])])])],1)],1),e("hr",{staticClass:"invoice-spacing"}),e("b-card-body",{staticClass:"invoice-padding pt-0"},[e("span",{staticClass:"font-weight-bold"},[t._v("Note: ")]),e("span",[t._v("It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")])])],1)],1),e("b-col",{staticClass:"invoice-actions",attrs:{cols:"12",md:"4",xl:"3"}},[e("b-card",[e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}},{name:"b-toggle",rawName:"v-b-toggle.sidebar-send-invoice",modifiers:{"sidebar-send-invoice":!0}}],staticClass:"mb-75",attrs:{variant:"primary",block:""}},[t._v(" Send Invoice ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],staticClass:"mb-75",attrs:{variant:"outline-secondary",block:""}},[t._v(" Download ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],staticClass:"mb-75",attrs:{variant:"outline-secondary",block:""},on:{click:t.printInvoice}},[t._v(" Print ")]),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],staticClass:"mb-75",attrs:{variant:"outline-secondary",block:"",to:{name:"apps-invoice-edit",params:{id:t.$route.params.id}}}},[t._v(" Edit ")]),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-invoice-add-payment",modifiers:{"sidebar-invoice-add-payment":!0}},{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mb-75",attrs:{variant:"success",block:""}},[t._v(" Add Payment ")])],1)],1)],1):t._e(),e("invoice-sidebar-send-invoice"),e("invoice-sidebar-add-payment")],1)},s=[],n=e("ed09"),o=e("4360"),r=e("a18c"),c=e("39ba"),l=e("a15b"),d=e("b28b"),p=e("205f"),m=e("6197"),v=e("ce80"),b=e("d6e4"),u=e("1947"),f=e("5fda"),y=e("aa59"),C=e("088b"),h=e("e009"),g=e("a29f"),_=e("3bb1"),D=e("050c"),w={directives:{Ripple:h["a"],"b-toggle":c["a"]},components:{BRow:l["a"],BCol:d["a"],BCard:p["a"],BCardBody:m["a"],BTableLite:v["a"],BCardText:b["a"],BButton:u["a"],BAlert:f["a"],BLink:y["a"],Logo:C["a"],InvoiceSidebarAddPayment:D["a"],InvoiceSidebarSendInvoice:_["a"]},setup(){const t=Object(n["ref"])(null),a=Object(n["ref"])({}),e=[{taskTitle:"Native App Development",taskDescription:"Developed a full stack native app using React Native, Bootstrap & Python",rate:"$60.00",hours:"30",total:"$1,800.00"},{taskTitle:"UI Kit Design",taskDescription:"Designed a UI kit for native app using Sketch, Figma & Adobe XD",rate:"$60.00",hours:"20",total:"$1200.00"}],i="app-invoice";o["a"].hasModule(i)||o["a"].registerModule(i,g["a"]),Object(n["onUnmounted"])(()=>{o["a"].hasModule(i)&&o["a"].unregisterModule(i)}),o["a"].dispatch("app-invoice/fetchInvoice",{id:r["a"].currentRoute.params.id}).then(e=>{t.value=e.data.invoice,a.value=e.data.paymentDetails}).catch(a=>{404===a.response.status&&(t.value=void 0)});const s=()=>{window.print()};return{invoiceData:t,paymentDetails:a,invoiceDescription:e,printInvoice:s}}},x=w,k=(e("b178"),e("e5a0"),e("2877")),P=Object(k["a"])(x,i,s,!1,null,"7749c12c",null);a["default"]=P.exports},e5a0:function(t,a,e){"use strict";e("82ee")},e73b:function(t,a,e){"use strict";e("8546")}}]);