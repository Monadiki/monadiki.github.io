(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3da5bf32"],{"0e20":function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n("ca6e");const o=t=>t>999?(t/1e3).toFixed(1)+"k":t,i=(t,e=" ")=>{if(!t)return"";const n=t.toString(),r=n.split(e),o=[];return r.forEach(t=>{const e=t.charAt(0).toUpperCase()+t.slice(1);o.push(e)}),o.join(" ")},a=t=>{if(!t)return"";const e=t.split(" ");return e.map(t=>t.charAt(0).toUpperCase()).join("")},s=(t,e={month:"short",day:"numeric",year:"numeric"})=>t?new Intl.DateTimeFormat("en-US",e).format(new Date(t)):t,c=(t,e=!0)=>{const n=new Date(t);let o={month:"short",day:"numeric"};return e&&Object(r["c"])(n)&&(o={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",o).format(new Date(t))},l=t=>t.replace(/<\/?[^>]+(>|$)/g,"")},"223c":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toastification"},[n("div",{staticClass:"d-flex align-items-start"},[n("b-avatar",{staticClass:"mr-75 flex-shrink-0",attrs:{variant:t.variant,size:"1.8rem"}},[n("feather-icon",{attrs:{icon:t.icon,size:"15"}})],1),n("div",{staticClass:"d-flex flex-grow-1"},[n("div",[t.title?n("h5",{staticClass:"mb-0 font-weight-bolder toastification-title",class:"text-"+t.variant,domProps:{textContent:t._s(t.title)}}):t._e(),t.text?n("small",{staticClass:"d-inline-block text-body",domProps:{textContent:t._s(t.text)}}):t._e()]),n("span",{staticClass:"cursor-pointer toastification-close-icon ml-auto ",on:{click:function(e){return t.$emit("close-toast")}}},[t.hideClose?t._e():n("feather-icon",{staticClass:"text-body",attrs:{icon:"XIcon"}})],1)])],1)])},o=[],i=n("e8a3"),a={components:{BAvatar:i["a"]},props:{variant:{type:String,default:"primary"},icon:{type:String,default:null},title:{type:String,default:null},text:{type:String,default:null},hideClose:{type:Boolean,default:!1}}},s=a,c=(n("b549"),n("2877")),l=Object(c["a"])(s,r,o,!1,null,"55dd3057",null);e["a"]=l.exports},"54e1":function(t,e,n){"use strict";n("a73e")},"8d81":function(t,e,n){},a29f:function(t,e,n){"use strict";var r=n("7f80");e["a"]={namespaced:!0,state:{},getters:{},mutations:{},actions:{fetchInvoices(t,e){return new Promise((t,n)=>{r["a"].get("/apps/invoice/invoices",{params:e}).then(e=>t(e)).catch(t=>n(t))})},fetchInvoice(t,{id:e}){return new Promise((t,n)=>{r["a"].get("/apps/invoice/invoices/"+e).then(e=>t(e)).catch(t=>n(t))})},fetchClients(){return new Promise((t,e)=>{r["a"].get("/apps/invoice/clients").then(e=>t(e)).catch(t=>e(t))})}}}},a35f:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{attrs:{"no-body":""}},[n("div",{staticClass:"m-2"},[n("b-row",[n("b-col",{staticClass:"d-flex align-items-center justify-content-start mb-1 mb-md-0",attrs:{cols:"12",md:"6"}},[n("label",[t._v("Entries")]),n("v-select",{staticClass:"per-page-selector d-inline-block ml-50 mr-1",attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",options:t.perPageOptions,clearable:!1},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}}),n("b-button",{attrs:{variant:"primary",to:{name:"apps-invoice-add"}}},[t._v(" Add Record ")])],1),n("b-col",{attrs:{cols:"12",md:"6"}},[n("div",{staticClass:"d-flex align-items-center justify-content-end"},[n("b-form-input",{staticClass:"d-inline-block mr-1",attrs:{placeholder:"Search..."},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}}),n("v-select",{staticClass:"invoice-filter-select",attrs:{dir:t.$store.state.appConfig.isRTL?"rtl":"ltr",options:t.statusOptions,placeholder:"Select Status"},scopedSlots:t._u([{key:"selected-option",fn:function(e){var r=e.label;return[n("span",{staticClass:"text-truncate overflow-hidden"},[t._v(" "+t._s(r)+" ")])]}}]),model:{value:t.statusFilter,callback:function(e){t.statusFilter=e},expression:"statusFilter"}})],1)])],1)],1),n("b-table",{ref:"refInvoiceListTable",staticClass:"position-relative",attrs:{items:t.fetchInvoices,responsive:"",fields:t.tableColumns,"primary-key":"id","sort-by":t.sortBy,"show-empty":"","empty-text":"No matching records found","sort-desc":t.isSortDirDesc},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.isSortDirDesc=e},"update:sort-desc":function(e){t.isSortDirDesc=e}},scopedSlots:t._u([{key:"head(invoiceStatus)",fn:function(){return[n("feather-icon",{staticClass:"mx-auto",attrs:{icon:"TrendingUpIcon"}})]},proxy:!0},{key:"cell(id)",fn:function(e){return[n("b-link",{staticClass:"font-weight-bold",attrs:{to:{name:"apps-invoice-preview",params:{id:e.item.id}}}},[t._v(" #"+t._s(e.value)+" ")])]}},{key:"cell(invoiceStatus)",fn:function(e){return[n("b-avatar",{attrs:{id:"invoice-row-"+e.item.id,size:"32",variant:"light-"+t.resolveInvoiceStatusVariantAndIcon(e.item.invoiceStatus).variant}},[n("feather-icon",{attrs:{icon:t.resolveInvoiceStatusVariantAndIcon(e.item.invoiceStatus).icon}})],1),n("b-tooltip",{attrs:{target:"invoice-row-"+e.item.id,placement:"top"}},[n("p",{staticClass:"mb-0"},[t._v(" "+t._s(e.item.invoiceStatus)+" ")]),n("p",{staticClass:"mb-0"},[t._v(" Balance: "+t._s(e.item.balance)+" ")]),n("p",{staticClass:"mb-0"},[t._v(" Due Date: "+t._s(e.item.dueDate)+" ")])])]}},{key:"cell(client)",fn:function(e){return[n("b-media",{attrs:{"vertical-align":"center"},scopedSlots:t._u([{key:"aside",fn:function(){return[n("b-avatar",{attrs:{size:"32",src:e.item.avatar,text:t.avatarText(e.item.client.name),variant:"light-"+t.resolveClientAvatarVariant(e.item.invoiceStatus)}})]},proxy:!0}],null,!0)},[n("span",{staticClass:"font-weight-bold d-block text-nowrap"},[t._v(" "+t._s(e.item.client.name)+" ")]),n("small",{staticClass:"text-muted"},[t._v(t._s(e.item.client.companyEmail))])])]}},{key:"cell(issuedDate)",fn:function(e){return[n("span",{staticClass:"text-nowrap"},[t._v(" "+t._s(e.value)+" ")])]}},{key:"cell(balance)",fn:function(e){return[0===e.value?[n("b-badge",{attrs:{pill:"",variant:"light-success"}},[t._v(" Paid ")])]:[t._v(" "+t._s(e.value)+" ")]]}},{key:"cell(actions)",fn:function(e){return[n("div",{staticClass:"text-nowrap"},[n("feather-icon",{staticClass:"cursor-pointer",attrs:{id:"invoice-row-"+e.item.id+"-send-icon",icon:"SendIcon",size:"16"}}),n("b-tooltip",{staticClass:"cursor-pointer",attrs:{title:"Send Invoice",target:"invoice-row-"+e.item.id+"-send-icon"}}),n("feather-icon",{staticClass:"mx-1",attrs:{id:"invoice-row-"+e.item.id+"-preview-icon",icon:"EyeIcon",size:"16"},on:{click:function(n){return t.$router.push({name:"apps-invoice-preview",params:{id:e.item.id}})}}}),n("b-tooltip",{attrs:{title:"Preview Invoice",target:"invoice-row-"+e.item.id+"-preview-icon"}}),n("b-dropdown",{attrs:{variant:"link","toggle-class":"p-0","no-caret":"",right:t.$store.state.appConfig.isRTL},scopedSlots:t._u([{key:"button-content",fn:function(){return[n("feather-icon",{staticClass:"align-middle text-body",attrs:{icon:"MoreVerticalIcon",size:"16"}})]},proxy:!0}],null,!0)},[n("b-dropdown-item",[n("feather-icon",{attrs:{icon:"DownloadIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Download")])],1),n("b-dropdown-item",{attrs:{to:{name:"apps-invoice-edit",params:{id:e.item.id}}}},[n("feather-icon",{attrs:{icon:"EditIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Edit")])],1),n("b-dropdown-item",[n("feather-icon",{attrs:{icon:"TrashIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Delete")])],1),n("b-dropdown-item",[n("feather-icon",{attrs:{icon:"CopyIcon"}}),n("span",{staticClass:"align-middle ml-50"},[t._v("Duplicate")])],1)],1)],1)]}}])}),n("div",{staticClass:"mx-2 mb-2"},[n("b-row",[n("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-start",attrs:{cols:"12",sm:"6"}},[n("span",{staticClass:"text-muted"},[t._v("Showing "+t._s(t.dataMeta.from)+" to "+t._s(t.dataMeta.to)+" of "+t._s(t.dataMeta.of)+" entries")])]),n("b-col",{staticClass:"d-flex align-items-center justify-content-center justify-content-sm-end",attrs:{cols:"12",sm:"6"}},[n("b-pagination",{staticClass:"mb-0 mt-1 mt-sm-0",attrs:{"total-rows":t.totalInvoices,"per-page":t.perPage,"first-number":"","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[n("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)],1)},o=[],i=n("205f"),a=n("a15b"),s=n("b28b"),c=n("4797"),l=n("1947"),f=n("29a1"),u=n("34b6"),p=n("e8a3"),d=n("aa59"),m=n("e98b"),h=n("dd9a"),v=n("9eaa"),g=n("26d2"),b=n("b4ae"),w=n("0e20"),y=n("4a7a"),x=n.n(y),C=n("ed09"),O=n("4360"),D=n("04b0"),E=n("223c");function I(){const t=Object(D["useToast"])(),e=Object(C["ref"])(null),n=[{key:"id",label:"#",sortable:!0},{key:"invoiceStatus",sortable:!0},{key:"client",sortable:!0},{key:"total",sortable:!0,formatter:t=>"$"+t},{key:"issuedDate",sortable:!0},{key:"balance",sortable:!0},{key:"actions"}],r=Object(C["ref"])(10),o=Object(C["ref"])(0),i=Object(C["ref"])(1),a=[10,25,50,100],s=Object(C["ref"])(""),c=Object(C["ref"])("id"),l=Object(C["ref"])(!0),f=Object(C["ref"])(null),u=Object(C["computed"])(()=>{const t=e.value?e.value.localItems.length:0;return{from:r.value*(i.value-1)+(t?1:0),to:r.value*(i.value-1)+t,of:o.value}}),p=()=>{e.value.refresh()};Object(C["watch"])([i,r,s,f],()=>{p()});const d=(e,n)=>{O["a"].dispatch("app-invoice/fetchInvoices",{q:s.value,perPage:r.value,page:i.value,sortBy:c.value,sortDesc:l.value,status:f.value}).then(t=>{const{invoices:e,total:r}=t.data;n(e),o.value=r}).catch(()=>{t({component:E["a"],props:{title:"Error fetching invoices' list",icon:"AlertTriangleIcon",variant:"danger"}})})},m=t=>"Partial Payment"===t?{variant:"warning",icon:"PieChartIcon"}:"Paid"===t?{variant:"success",icon:"CheckCircleIcon"}:"Downloaded"===t?{variant:"info",icon:"ArrowDownCircleIcon"}:"Draft"===t?{variant:"primary",icon:"SaveIcon"}:"Sent"===t?{variant:"secondary",icon:"SendIcon"}:"Past Due"===t?{variant:"danger",icon:"InfoIcon"}:{variant:"secondary",icon:"XIcon"},h=t=>"Partial Payment"===t?"primary":"Paid"===t?"danger":"Downloaded"===t?"secondary":"Draft"===t?"warning":"Sent"===t?"info":"Past Due"===t?"success":"primary";return{fetchInvoices:d,tableColumns:n,perPage:r,currentPage:i,totalInvoices:o,dataMeta:u,perPageOptions:a,searchQuery:s,sortBy:c,isSortDirDesc:l,refInvoiceListTable:e,statusFilter:f,resolveInvoiceStatusVariantAndIcon:m,resolveClientAvatarVariant:h,refetchData:p}}var S=n("a29f"),k={components:{BCard:i["a"],BRow:a["a"],BCol:s["a"],BFormInput:c["a"],BButton:l["a"],BTable:f["a"],BMedia:u["a"],BAvatar:p["a"],BLink:d["a"],BBadge:m["a"],BDropdown:h["a"],BDropdownItem:v["a"],BPagination:g["a"],BTooltip:b["a"],vSelect:x.a},setup(){const t="app-invoice";O["a"].hasModule(t)||O["a"].registerModule(t,S["a"]),Object(C["onUnmounted"])(()=>{O["a"].hasModule(t)&&O["a"].unregisterModule(t)});const e=["Downloaded","Draft","Paid","Partial Payment","Past Due"],{fetchInvoices:n,tableColumns:r,perPage:o,currentPage:i,totalInvoices:a,dataMeta:s,perPageOptions:c,searchQuery:l,sortBy:f,isSortDirDesc:u,refInvoiceListTable:p,statusFilter:d,refetchData:m,resolveInvoiceStatusVariantAndIcon:h,resolveClientAvatarVariant:v}=I();return{fetchInvoices:n,tableColumns:r,perPage:o,currentPage:i,totalInvoices:a,dataMeta:s,perPageOptions:c,searchQuery:l,sortBy:f,isSortDirDesc:u,refInvoiceListTable:p,statusFilter:d,refetchData:m,statusOptions:e,avatarText:w["a"],resolveInvoiceStatusVariantAndIcon:h,resolveClientAvatarVariant:v}}},P=k,T=(n("d1a3"),n("54e1"),n("2877")),L=Object(T["a"])(P,r,o,!1,null,"9a6e255c",null);e["default"]=L.exports},a73e:function(t,e,n){},b549:function(t,e,n){"use strict";n("8d81")},c4fe:function(t,e,n){},ca6e:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return c}));var r=n("a18c"),o=n("ed09");const i=t=>"object"===typeof t&&null!==t,a=t=>{const e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},s=t=>{const{route:e}=r["a"].resolve(t);return e.path===r["a"].currentRoute.path},c=()=>{const t=Object(o["getCurrentInstance"])().proxy,e=Object(o["reactive"])({route:t.$route});return Object(o["watch"])(()=>t.$route,t=>{e.route=t}),{...Object(o["toRefs"])(e),router:t.$router}}},d1a3:function(t,e,n){"use strict";n("c4fe")},f0bd:function(t,e,n){"use strict";(function(t){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,r=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(n&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();function o(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}function i(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),r))}}var a=n&&window.Promise,s=a?o:i;function c(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function l(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView,r=n.getComputedStyle(t,null);return e?r[e]:r}function f(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function u(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=l(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+r)?t:u(f(t))}function p(t){return t&&t.referenceNode?t.referenceNode:t}var d=n&&!(!window.MSInputMethodContext||!document.documentMode),m=n&&/MSIE 10/.test(navigator.userAgent);function h(t){return 11===t?d:10===t?m:d||m}function v(t){if(!t)return document.documentElement;var e=h(10)?document.body:null,n=t.offsetParent||null;while(n===e&&t.nextElementSibling)n=(t=t.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?v(n):n:t?t.ownerDocument.documentElement:document.documentElement}function g(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||v(t.firstElementChild)===t)}function b(t){return null!==t.parentNode?b(t.parentNode):t}function w(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?t:e,o=n?e:t,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a=i.commonAncestorContainer;if(t!==a&&e!==a||r.contains(o))return g(a)?a:v(a);var s=b(t);return s.host?w(s.host,e):w(t,b(e).host)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",r=t.nodeName;if("BODY"===r||"HTML"===r){var o=t.ownerDocument.documentElement,i=t.ownerDocument.scrollingElement||o;return i[n]}return t[n]}function x(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=y(e,"top"),o=y(e,"left"),i=n?-1:1;return t.top+=r*i,t.bottom+=r*i,t.left+=o*i,t.right+=o*i,t}function C(t,e){var n="x"===e?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+r+"Width"])}function O(t,e,n,r){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],h(10)?parseInt(n["offset"+t])+parseInt(r["margin"+("Height"===t?"Top":"Left")])+parseInt(r["margin"+("Height"===t?"Bottom":"Right")]):0)}function D(t){var e=t.body,n=t.documentElement,r=h(10)&&getComputedStyle(n);return{height:O("Height",e,n,r),width:O("Width",e,n,r)}}var E=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},I=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),S=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},k=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function P(t){return k({},t,{right:t.left+t.width,bottom:t.top+t.height})}function T(t){var e={};try{if(h(10)){e=t.getBoundingClientRect();var n=y(t,"top"),r=y(t,"left");e.top+=n,e.left+=r,e.bottom+=n,e.right+=r}else e=t.getBoundingClientRect()}catch(p){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},i="HTML"===t.nodeName?D(t.ownerDocument):{},a=i.width||t.clientWidth||o.width,s=i.height||t.clientHeight||o.height,c=t.offsetWidth-a,f=t.offsetHeight-s;if(c||f){var u=l(t);c-=C(u,"x"),f-=C(u,"y"),o.width-=c,o.height-=f}return P(o)}function L(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(10),o="HTML"===e.nodeName,i=T(t),a=T(e),s=u(t),c=l(e),f=parseFloat(c.borderTopWidth),p=parseFloat(c.borderLeftWidth);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=P({top:i.top-a.top-f,left:i.left-a.left-p,width:i.width,height:i.height});if(d.marginTop=0,d.marginLeft=0,!r&&o){var m=parseFloat(c.marginTop),v=parseFloat(c.marginLeft);d.top-=f-m,d.bottom-=f-m,d.left-=p-v,d.right-=p-v,d.marginTop=m,d.marginLeft=v}return(r&&!n?e.contains(s):e===s&&"BODY"!==s.nodeName)&&(d=x(d,e)),d}function B(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,r=L(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=e?0:y(n),s=e?0:y(n,"left"),c={top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i};return P(c)}function M(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===l(t,"position"))return!0;var n=f(t);return!!n&&M(n)}function _(t){if(!t||!t.parentElement||h())return document.documentElement;var e=t.parentElement;while(e&&"none"===l(e,"transform"))e=e.parentElement;return e||document.documentElement}function F(t,e,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?_(t):w(t,p(e));if("viewport"===r)i=B(a,o);else{var s=void 0;"scrollParent"===r?(s=u(f(e)),"BODY"===s.nodeName&&(s=t.ownerDocument.documentElement)):s="window"===r?t.ownerDocument.documentElement:r;var c=L(s,a,o);if("HTML"!==s.nodeName||M(a))i=c;else{var l=D(t.ownerDocument),d=l.height,m=l.width;i.top+=c.top-c.marginTop,i.bottom=d+c.top,i.left+=c.left-c.marginLeft,i.right=m+c.left}}n=n||0;var h="number"===typeof n;return i.left+=h?n:n.left||0,i.top+=h?n:n.top||0,i.right-=h?n:n.right||0,i.bottom-=h?n:n.bottom||0,i}function j(t){var e=t.width,n=t.height;return e*n}function A(t,e,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var a=F(n,r,i,o),s={top:{width:a.width,height:e.top-a.top},right:{width:a.right-e.right,height:a.height},bottom:{width:a.width,height:a.bottom-e.bottom},left:{width:e.left-a.left,height:a.height}},c=Object.keys(s).map((function(t){return k({key:t},s[t],{area:j(s[t])})})).sort((function(t,e){return e.area-t.area})),l=c.filter((function(t){var e=t.width,r=t.height;return e>=n.clientWidth&&r>=n.clientHeight})),f=l.length>0?l[0].key:c[0].key,u=t.split("-")[1];return f+(u?"-"+u:"")}function N(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=r?_(e):w(e,p(n));return L(n,o,r)}function W(t){var e=t.ownerDocument.defaultView,n=e.getComputedStyle(t),r=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),o=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),i={width:t.offsetWidth+o,height:t.offsetHeight+r};return i}function H(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function R(t,e,n){n=n.split("-")[0];var r=W(t),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",c=i?"height":"width",l=i?"width":"height";return o[a]=e[a]+e[c]/2-r[c]/2,o[s]=n===s?e[s]-r[l]:e[H(s)],o}function V(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function U(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var r=V(t,(function(t){return t[e]===n}));return t.indexOf(r)}function z(t,e,n){var r=void 0===n?t:t.slice(0,U(t,"name",n));return r.forEach((function(t){t["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t["function"]||t.fn;t.enabled&&c(n)&&(e.offsets.popper=P(e.offsets.popper),e.offsets.reference=P(e.offsets.reference),e=n(e,t))})),e}function $(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=N(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=A(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=R(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=z(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function Y(t,e){return t.some((function(t){var n=t.name,r=t.enabled;return r&&n===e}))}function q(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),r=0;r<e.length;r++){var o=e[r],i=o?""+o+n:t;if("undefined"!==typeof document.body.style[i])return i}return null}function Q(){return this.state.isDestroyed=!0,Y(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[q("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function K(t){var e=t.ownerDocument;return e?e.defaultView:window}function G(t,e,n,r){var o="BODY"===t.nodeName,i=o?t.ownerDocument.defaultView:t;i.addEventListener(e,n,{passive:!0}),o||G(u(i.parentNode),e,n,r),r.push(i)}function X(t,e,n,r){n.updateBound=r,K(t).addEventListener("resize",n.updateBound,{passive:!0});var o=u(t);return G(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function J(){this.state.eventsEnabled||(this.state=X(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(t,e){return K(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function tt(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function et(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function nt(t,e){Object.keys(e).forEach((function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&et(e[n])&&(r="px"),t.style[n]=e[n]+r}))}function rt(t,e){Object.keys(e).forEach((function(n){var r=e[n];!1!==r?t.setAttribute(n,e[n]):t.removeAttribute(n)}))}function ot(t){return nt(t.instance.popper,t.styles),rt(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&nt(t.arrowElement,t.arrowStyles),t}function it(t,e,n,r,o){var i=N(o,e,t,n.positionFixed),a=A(n.placement,i,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",a),nt(e,{position:n.positionFixed?"fixed":"absolute"}),n}function at(t,e){var n=t.offsets,r=n.popper,o=n.reference,i=Math.round,a=Math.floor,s=function(t){return t},c=i(o.width),l=i(r.width),f=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),p=c%2===l%2,d=c%2===1&&l%2===1,m=e?f||u||p?i:a:s,h=e?i:s;return{left:m(d&&!u&&e?r.left-1:r.left),top:h(r.top),bottom:h(r.bottom),right:m(r.right)}}var st=n&&/Firefox/i.test(navigator.userAgent);function ct(t,e){var n=e.x,r=e.y,o=t.offsets.popper,i=V(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:e.gpuAcceleration,s=v(t.instance.popper),c=T(s),l={position:o.position},f=at(t,window.devicePixelRatio<2||!st),u="bottom"===n?"top":"bottom",p="right"===r?"left":"right",d=q("transform"),m=void 0,h=void 0;if(h="bottom"===u?"HTML"===s.nodeName?-s.clientHeight+f.bottom:-c.height+f.bottom:f.top,m="right"===p?"HTML"===s.nodeName?-s.clientWidth+f.right:-c.width+f.right:f.left,a&&d)l[d]="translate3d("+m+"px, "+h+"px, 0)",l[u]=0,l[p]=0,l.willChange="transform";else{var g="bottom"===u?-1:1,b="right"===p?-1:1;l[u]=h*g,l[p]=m*b,l.willChange=u+", "+p}var w={"x-placement":t.placement};return t.attributes=k({},w,t.attributes),t.styles=k({},l,t.styles),t.arrowStyles=k({},t.offsets.arrow,t.arrowStyles),t}function lt(t,e,n){var r=V(t,(function(t){var n=t.name;return n===e})),o=!!r&&t.some((function(t){return t.name===n&&t.enabled&&t.order<r.order}));if(!o){var i="`"+e+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function ft(t,e){var n;if(!lt(t.instance.modifiers,"arrow","keepTogether"))return t;var r=e.element;if("string"===typeof r){if(r=t.instance.popper.querySelector(r),!r)return t}else if(!t.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],i=t.offsets,a=i.popper,s=i.reference,c=-1!==["left","right"].indexOf(o),f=c?"height":"width",u=c?"Top":"Left",p=u.toLowerCase(),d=c?"left":"top",m=c?"bottom":"right",h=W(r)[f];s[m]-h<a[p]&&(t.offsets.popper[p]-=a[p]-(s[m]-h)),s[p]+h>a[m]&&(t.offsets.popper[p]+=s[p]+h-a[m]),t.offsets.popper=P(t.offsets.popper);var v=s[p]+s[f]/2-h/2,g=l(t.instance.popper),b=parseFloat(g["margin"+u]),w=parseFloat(g["border"+u+"Width"]),y=v-t.offsets.popper[p]-b-w;return y=Math.max(Math.min(a[f]-h,y),0),t.arrowElement=r,t.offsets.arrow=(n={},S(n,p,Math.round(y)),S(n,d,""),n),t}function ut(t){return"end"===t?"start":"start"===t?"end":t}var pt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],dt=pt.slice(3);function mt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=dt.indexOf(t),r=dt.slice(n+1).concat(dt.slice(0,n));return e?r.reverse():r}var ht={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function vt(t,e){if(Y(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=F(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),r=t.placement.split("-")[0],o=H(r),i=t.placement.split("-")[1]||"",a=[];switch(e.behavior){case ht.FLIP:a=[r,o];break;case ht.CLOCKWISE:a=mt(r);break;case ht.COUNTERCLOCKWISE:a=mt(r,!0);break;default:a=e.behavior}return a.forEach((function(s,c){if(r!==s||a.length===c+1)return t;r=t.placement.split("-")[0],o=H(r);var l=t.offsets.popper,f=t.offsets.reference,u=Math.floor,p="left"===r&&u(l.right)>u(f.left)||"right"===r&&u(l.left)<u(f.right)||"top"===r&&u(l.bottom)>u(f.top)||"bottom"===r&&u(l.top)<u(f.bottom),d=u(l.left)<u(n.left),m=u(l.right)>u(n.right),h=u(l.top)<u(n.top),v=u(l.bottom)>u(n.bottom),g="left"===r&&d||"right"===r&&m||"top"===r&&h||"bottom"===r&&v,b=-1!==["top","bottom"].indexOf(r),w=!!e.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&m||!b&&"start"===i&&h||!b&&"end"===i&&v),y=!!e.flipVariationsByContent&&(b&&"start"===i&&m||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&h),x=w||y;(p||g||x)&&(t.flipped=!0,(p||g)&&(r=a[c+1]),x&&(i=ut(i)),t.placement=r+(i?"-"+i:""),t.offsets.popper=k({},t.offsets.popper,R(t.instance.popper,t.offsets.reference,t.placement)),t=z(t.instance.modifiers,t,"flip"))})),t}function gt(t){var e=t.offsets,n=e.popper,r=e.reference,o=t.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",c=a?"left":"top",l=a?"width":"height";return n[s]<i(r[c])&&(t.offsets.popper[c]=i(r[c])-n[l]),n[c]>i(r[s])&&(t.offsets.popper[c]=i(r[s])),t}function bt(t,e,n,r){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return t;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}var c=P(s);return c[e]/100*i}if("vh"===a||"vw"===a){var l=void 0;return l="vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),l/100*i}return i}function wt(t,e,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=t.split(/(\+|\-)/).map((function(t){return t.trim()})),s=a.indexOf(V(a,(function(t){return-1!==t.search(/,|\s/)})));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,l=-1!==s?[a.slice(0,s).concat([a[s].split(c)[0]]),[a[s].split(c)[1]].concat(a.slice(s+1))]:[a];return l=l.map((function(t,r){var o=(1===r?!i:i)?"height":"width",a=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,a=!0,t):a?(t[t.length-1]+=e,a=!1,t):t.concat(e)}),[]).map((function(t){return bt(t,o,e,n)}))})),l.forEach((function(t,e){t.forEach((function(n,r){et(n)&&(o[e]+=n*("-"===t[r-1]?-1:1))}))})),o}function yt(t,e){var n=e.offset,r=t.placement,o=t.offsets,i=o.popper,a=o.reference,s=r.split("-")[0],c=void 0;return c=et(+n)?[+n,0]:wt(n,i,a,s),"left"===s?(i.top+=c[0],i.left-=c[1]):"right"===s?(i.top+=c[0],i.left+=c[1]):"top"===s?(i.left+=c[0],i.top-=c[1]):"bottom"===s&&(i.left+=c[0],i.top+=c[1]),t.popper=i,t}function xt(t,e){var n=e.boundariesElement||v(t.instance.popper);t.instance.reference===n&&(n=v(n));var r=q("transform"),o=t.instance.popper.style,i=o.top,a=o.left,s=o[r];o.top="",o.left="",o[r]="";var c=F(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=i,o.left=a,o[r]=s,e.boundaries=c;var l=e.priority,f=t.offsets.popper,u={primary:function(t){var n=f[t];return f[t]<c[t]&&!e.escapeWithReference&&(n=Math.max(f[t],c[t])),S({},t,n)},secondary:function(t){var n="right"===t?"left":"top",r=f[n];return f[t]>c[t]&&!e.escapeWithReference&&(r=Math.min(f[n],c[t]-("right"===t?f.width:f.height))),S({},n,r)}};return l.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";f=k({},f,u[e](t))})),t.offsets.popper=f,t}function Ct(t){var e=t.placement,n=e.split("-")[0],r=e.split("-")[1];if(r){var o=t.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),c=s?"left":"top",l=s?"width":"height",f={start:S({},c,i[c]),end:S({},c,i[c]+i[l]-a[l])};t.offsets.popper=k({},a,f[r])}return t}function Ot(t){if(!lt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=V(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function Dt(t){var e=t.placement,n=e.split("-")[0],r=t.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),t.placement=H(e),t.offsets.popper=P(o),t}var Et={shift:{order:100,enabled:!0,fn:Ct},offset:{order:200,enabled:!0,fn:yt,offset:0},preventOverflow:{order:300,enabled:!0,fn:xt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:gt},arrow:{order:500,enabled:!0,fn:ft,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:vt,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Dt},hide:{order:800,enabled:!0,fn:Ot},computeStyle:{order:850,enabled:!0,fn:ct,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:ot,onLoad:it,gpuAcceleration:void 0}},It={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Et},St=function(){function t(e,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};E(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=s(this.update.bind(this)),this.options=k({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(k({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){r.options.modifiers[e]=k({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return k({name:t},r.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&c(t.onLoad)&&t.onLoad(r.reference,r.popper,r.options,t,r.state)})),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return I(t,[{key:"update",value:function(){return $.call(this)}},{key:"destroy",value:function(){return Q.call(this)}},{key:"enableEventListeners",value:function(){return J.call(this)}},{key:"disableEventListeners",value:function(){return tt.call(this)}}]),t}();St.Utils=("undefined"!==typeof window?window:t).PopperUtils,St.placements=pt,St.Defaults=It,e["a"]=St}).call(this,n("c8ba"))}}]);