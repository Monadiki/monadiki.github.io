(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dd107b3"],{"0e20":function(t,e,a){"use strict";a.d(e,"e",(function(){return s})),a.d(e,"f",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"b",(function(){return l}));a("b680"),a("d3b7"),a("25f0"),a("ac1f"),a("1276"),a("159b"),a("fb6a"),a("a15b"),a("d81d"),a("5319");var r=a("ca6e"),s=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var a=t.toString(),r=a.split(e),s=[];return r.forEach((function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);s.push(e)})),s.join(" ")},o=function(t){if(!t)return"";var e=t.split(" ");return e.map((function(t){return t.charAt(0).toUpperCase()})).join("")},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",e).format(new Date(t)):t},c=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=new Date(t),s={month:"short",day:"numeric"};return e&&Object(r["c"])(a)&&(s={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",s).format(new Date(t))},l=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}},1321:function(t,e,a){(function(e,r){t.exports=r(a("3d1e"))})(0,(function(t){"use strict";function e(t){return e="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function a(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}t=t&&t.hasOwnProperty("default")?t["default"]:t;var r={props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0,default:function(){return[]}},width:{default:"100%"},height:{default:"auto"}},data:function(){return{chart:null}},beforeMount:function(){window.ApexCharts=t},mounted:function(){this.init()},created:function(){var t=this;this.$watch("options",(function(e){!t.chart&&e?t.init():t.chart.updateOptions(t.options)})),this.$watch("series",(function(e){!t.chart&&e?t.init():t.chart.updateSeries(t.series)}));var e=["type","width","height"];e.forEach((function(e){t.$watch(e,(function(){t.refresh()}))}))},beforeDestroy:function(){this.chart&&this.destroy()},render:function(t){return t("div")},methods:{init:function(){var e=this,a={chart:{type:this.type||this.options.chart.type||"line",height:this.height,width:this.width,events:{}},series:this.series};Object.keys(this.$listeners).forEach((function(t){a.chart.events[t]=e.$listeners[t]}));var r=this.extend(this.options,a);return this.chart=new t(this.$el,r),this.chart.render()},isObject:function(t){return t&&"object"===e(t)&&!Array.isArray(t)&&null!=t},extend:function(t,e){var r=this;"function"!==typeof Object.assign&&function(){Object.assign=function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),a=1;a<arguments.length;a++){var r=arguments[a];if(void 0!==r&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(e[s]=r[s])}return e}}();var s=Object.assign({},t);return this.isObject(t)&&this.isObject(e)&&Object.keys(e).forEach((function(n){r.isObject(e[n])&&n in t?s[n]=r.extend(t[n],e[n]):Object.assign(s,a({},n,e[n]))})),s},refresh:function(){return this.destroy(),this.init()},destroy:function(){this.chart.destroy()},updateSeries:function(t,e){return this.chart.updateSeries(t,e)},updateOptions:function(t,e,a,r){return this.chart.updateOptions(t,e,a,r)},toggleSeries:function(t){return this.chart.toggleSeries(t)},showSeries:function(t){this.chart.showSeries(t)},hideSeries:function(t){this.chart.hideSeries(t)},appendSeries:function(t,e){return this.chart.appendSeries(t,e)},resetSeries:function(){this.chart.resetSeries()},zoomX:function(t,e){this.chart.zoomX(t,e)},toggleDataPointSelection:function(t,e){this.chart.toggleDataPointSelection(t,e)},appendData:function(t){return this.chart.appendData(t)},addText:function(t){this.chart.addText(t)},addImage:function(t){this.chart.addImage(t)},addShape:function(t){this.chart.addShape(t)},dataURI:function(){return this.chart.dataURI()},setLocale:function(t){return this.chart.setLocale(t)},addXaxisAnnotation:function(t,e){this.chart.addXaxisAnnotation(t,e)},addYaxisAnnotation:function(t,e){this.chart.addYaxisAnnotation(t,e)},addPointAnnotation:function(t,e){this.chart.addPointAnnotation(t,e)},removeAnnotation:function(t,e){this.chart.removeAnnotation(t,e)},clearAnnotations:function(){this.chart.clearAnnotations()}}},s=r;return window.ApexCharts=t,s.install=function(e){e.ApexCharts=t,window.ApexCharts=t,Object.defineProperty(e.prototype,"$apexcharts",{get:function(){return t}})},s}))},"30b1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{lg:"6"}},[a("card-analytic-support-tracker")],1),a("b-col",{attrs:{lg:"6"}},[a("card-analytic-avg-sessions")],1),a("b-col",{attrs:{lg:"8"}},[a("card-analytic-revenue-report")],1),a("b-col",{attrs:{lg:"4"}},[a("card-analytic-goal-overview")],1),a("b-col",{attrs:{lg:"8"}},[a("card-analytic-revenue")],1),a("b-col",{attrs:{lg:"4"}},[a("card-analytic-sales-radar-chart")],1)],1),a("b-row",[a("b-col",{attrs:{lg:"8"}},[a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{cols:"12"}},[a("card-analytic-sale-line-chart")],1),a("b-col",{attrs:{md:"6"}},[a("card-analytic-sessions-by-device")],1),a("b-col",{attrs:{md:"6"}},[a("card-analytic-customers")],1)],1)],1),a("b-col",{attrs:{lg:"4"}},[a("card-analytic-product-orders"),a("card-analytic-earnings-chart")],1)],1)],1)},s=[],n=a("a15b7"),o=a("b28b"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Sessions By Device")]),a("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0 mb-25",size:"sm"}},t._l(t.chartData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("vue-apex-charts",{staticClass:"my-1",attrs:{type:"donut",height:"300",options:t.sessionsByDeviceDonut.chartOptions,series:t.sessionsByDeviceDonut.series}}),t._l(t.chartData.chartInfo,(function(e,r){return a("div",{key:e.name,staticClass:"d-flex justify-content-between",class:r===t.chartData.chartInfo.length-1?"mb-0":"mb-1"},[a("div",{staticClass:"series-info d-flex align-items-center"},[a("feather-icon",{class:e.iconColor,attrs:{icon:e.icon,size:"16"}}),a("span",{staticClass:"font-weight-bolder ml-75 mr-25"},[t._v(t._s(e.name))]),a("span",[t._v("- "+t._s(e.usage)+"%")])],1),a("div",[a("span",[t._v(t._s(e.upDown)+"%")]),a("feather-icon",{staticClass:"mb-25 ml-25",class:e.upDown>0?"text-success":"text-danger",attrs:{icon:e.upDown>0?"ArrowUpIcon":"ArrowDownIcon"}})],1)])}))],2)],1)},c=[],l=a("205f"),d=a("b885"),u=a("4968"),h=a("dd9a"),p=a("9eaa"),b=a("6197"),f=a("1321"),m=a.n(f),v=a("1dff"),g={components:{BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:h["a"],BDropdownItem:p["a"],BCardBody:b["a"],VueApexCharts:m.a},data:function(){return{chartData:{},sessionsByDeviceDonut:{series:[58.6,34.9,6.5],chartOptions:{chart:{toolbar:{show:!1}},labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],stroke:{width:0},colors:[v["b"].primary,v["b"].warning,v["b"].danger]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/sessions-device").then((function(e){t.chartData=e.data}))}},C=g,y=a("2877"),w=Object(y["a"])(C,i,c,!1,null,null,null),x=w.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Product Orders")]),a("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0",size:"sm"}},t._l(t.chartInfo.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"radialBar",height:"325",options:t.productOrdersRadialBar.chartOptions,series:t.productOrdersRadialBar.series}}),t._l(t.chartInfo.chartInfo,(function(e,r,s){return a("div",{key:r,staticClass:"d-flex justify-content-between",class:s===Object.keys(t.chartInfo.chartInfo).length-1?"":"mb-1"},[a("div",{staticClass:"series-info d-flex align-items-center"},[a("feather-icon",{class:"finished"===r?"text-primary":"pending"===r?"text-warning":"text-danger",attrs:{icon:"CircleIcon",size:"16"}}),a("span",{staticClass:"font-weight-bold text-capitalize ml-75"},[t._v(t._s(r))])],1),a("span",[t._v(t._s(e))])])}))],2)],1)},B=[],k={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:h["a"],BDropdownItem:p["a"],BCardBody:b["a"]},data:function(){return{chartInfo:{},productOrdersRadialBar:{series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{strokeWidth:"100%",margin:15},dataLabels:{value:{fontSize:"1rem",colors:"#5e5873",fontWeight:"500",offsetY:5},total:{show:!0,label:"Total",fontSize:"1.286rem",colors:"#5e5873",fontWeight:"500",formatter:function(){return 42459}}}}},colors:[v["b"].primary,v["b"].warning,v["b"].danger],stroke:{lineCap:"round"},chart:{height:355,dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/product-orders").then((function(e){t.chartInfo=e.data}))}},O=k,D=Object(y["a"])(O,_,B,!1,null,null,null),A=D.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Customers")]),a("b-dropdown",{staticClass:"chart-dropdown ",attrs:{text:"Last 7 Days",variant:"transparent",right:"","no-caret":"","toggle-class":"p-0 mb-25",size:"sm"}},t._l(t.chartData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("vue-apex-charts",{staticClass:"mt-2 mb-1",attrs:{type:"pie",height:"325",options:t.customersPie.chartOptions,series:t.customersPie.series}}),a("div",{staticClass:"pt-25"},t._l(t.chartData.listData,(function(e,r){return a("div",{key:r,staticClass:"d-flex justify-content-between",class:r===Object.keys(t.chartData.listData).length-1?"":"mb-1"},[a("div",{staticClass:"series-info"},[a("feather-icon",{staticClass:"mr-50",class:e.iconColor,attrs:{icon:e.icon,size:"16"}}),a("span",{staticClass:"font-weight-bolder"},[t._v(t._s(e.text))])],1),a("span",[t._v(t._s(e.result))])])})),0)],1)],1)},j=[],T={components:{BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:h["a"],BDropdownItem:p["a"],BCardBody:b["a"],VueApexCharts:m.a},data:function(){return{chartData:{},customersPie:{series:[690,258,149],chartOptions:{chart:{toolbar:{show:!1}},labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},stroke:{width:4},colors:[v["b"].primary,v["b"].warning,v["b"].danger]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/customers").then((function(e){t.chartData=e.data}))}},z=T,R=Object(y["a"])(z,S,j,!1,null,null,null),I=R.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"align-items-baseline pb-1"},[a("div",[a("b-card-title",{staticClass:"mb-25"},[t._v(" Sales ")]),a("b-card-text",{staticClass:"mb-0"},[t._v(" Last 6 months ")])],1),a("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})],1),a("b-card-body",[a("div",{staticClass:"d-inline-flex align-items-center mr-2"},[a("feather-icon",{staticClass:"text-primary mr-50",attrs:{icon:"CircleIcon"}}),a("h6",{staticClass:"mb-0"},[t._v(" Sales ")])],1),a("div",{staticClass:"d-inline-flex align-items-center"},[a("feather-icon",{staticClass:"text-info mr-50",attrs:{icon:"CircleIcon"}}),a("h6",{staticClass:"mb-0"},[t._v(" Visits ")])],1),a("vue-apex-charts",{attrs:{type:"radar",height:"300",options:t.statisticsRadar.chartOptions,series:t.statisticsRadar.series}})],1)],1)},L=[],E=a("d6e4"),P={components:{VueApexCharts:m.a,BCardText:E["a"],BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BCardBody:b["a"]},data:function(){return{statisticsRadar:{series:[{name:"Sales",data:[90,50,86,40,100,20]},{name:"Visit",data:[70,75,70,76,20,85]}],chartOptions:{chart:{type:"radar",dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1},offsetY:5},stroke:{width:0},dataLabels:{background:{foreColor:["#ebe9f1"]}},legend:{show:!1},colors:[v["b"].primary,v["b"].info],plotOptions:{radar:{polygons:{strokeColors:["#ebe9f1","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:[v["b"].primary,v["b"].info],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},labels:["Jan","Feb","Mar","Apr","May","Jun"],markers:{size:0},yaxis:{show:!1},grid:{show:!1,padding:{bottom:-27}}}}}}},F=P,M=Object(y["a"])(F,$,L,!1,null,null,null),V=M.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"pb-0"},[a("b-card-title",[t._v(t._s(t.trackerData.title))]),a("b-dropdown",{staticClass:"chart-dropdown",attrs:{"no-caret":"",right:"",text:"Last 7 Days",variant:"transparent","toggle-class":"p-50",size:"sm"}},t._l(t.trackerData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("b-card-body",[a("b-row",[a("b-col",{staticClass:"d-flex flex-column flex-wrap text-center",attrs:{sm:"2"}},[a("h1",{staticClass:"font-large-2 font-weight-bolder mt-2 mb-0"},[t._v(" "+t._s(t.trackerData.totalTicket)+" ")]),a("b-card-text",[t._v("Tickets")])],1),a("b-col",{staticClass:"d-flex justify-content-center",attrs:{sm:"10"}},[a("vue-apex-charts",{attrs:{type:"radialBar",height:"270",options:t.supportTrackerRadialBar.chartOptions,series:t.supportTrackerRadialBar.series}})],1)],1),a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"text-center"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" New Tickets ")]),a("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.newTicket))])],1),a("div",{staticClass:"text-center"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Open Tickets ")]),a("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.openTicket))])],1),a("div",{staticClass:"text-center"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Response Time ")]),a("span",{staticClass:"font-large-1 font-weight-bold"},[t._v(t._s(t.trackerData.responseTime)+"d")])],1)])],1)],1)},J=[],H={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BDropdown:h["a"],BDropdownItem:p["a"],BCardText:E["a"],BCardBody:b["a"],BRow:n["a"],BCol:o["a"]},data:function(){return{trackerData:{},supportTrackerRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,color:"#5e5873",fontSize:"1rem"},value:{offsetY:15,color:"#5e5873",fontSize:"1.714rem"}}}},colors:[v["b"].danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[v["b"].primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Completed Tickets"]}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/support-tracker").then((function(e){t.trackerData=e.data}))}},U=H,W=Object(y["a"])(U,Y,J,!1,null,null,null),X=W.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[t._v("Revenue")]),a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"SettingsIcon",size:"18"}})],1),a("b-card-body",{staticClass:"pb-0"},[a("div",{staticClass:"d-flex justify-content-start mb-3"},[a("div",{staticClass:"mr-2"},[a("b-card-text",{staticClass:"mb-50"},[t._v(" This Month ")]),a("h3",{staticClass:"font-weight-bolder"},[a("sup",{staticClass:"font-medium-1"},[t._v("$ ")]),a("span",{staticClass:"text-primary"},[t._v(t._s(t.revenue.thisMonth))])])],1),a("div",[a("b-card-text",{staticClass:"mb-50"},[t._v(" Last Month ")]),a("h3",{staticClass:"font-weight-bolder"},[a("sup",{staticClass:"font-medium-1"},[t._v("$ ")]),a("span",[t._v(t._s(t.revenue.lastMonth))])])],1)]),a("vue-apex-charts",{attrs:{type:"line",height:"240",options:t.revenueComparisonLine.chartOptions,series:t.revenueComparisonLine.series}})],1)],1)},G=[],q=(a("b680"),{components:{VueApexCharts:m.a,BCardText:E["a"],BCard:l["a"],BCardHeader:d["a"],BCardTitle:u["a"],BCardBody:b["a"]},data:function(){return{revenue:{},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",offsetX:-10},stroke:{curve:"smooth",dashArray:[0,12],width:[4,3]},legend:{show:!1},colors:["#d0ccff","#ebe9f1"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[v["b"].primary,"#ebe9f1"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"1rem"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"1rem"},formatter:function(t){return t>999?"".concat((t/1e3).toFixed(0),"k"):t}}},grid:{borderColor:"#e7eef7",padding:{top:-20,bottom:-10,left:20}},tooltip:{x:{show:!1}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/revenue").then((function(e){t.revenue=e.data}))}}),K=q,Q=Object(y["a"])(K,N,G,!1,null,null,null),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("h4",{staticClass:"mb-0"},[t._v(" Goal Overview ")]),a("b-card-text",{staticClass:"font-medium-5 mb-0"},[a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"HelpCircleIcon",size:"21"}})],1)],1),a("vue-apex-charts",{attrs:{type:"radialBar",height:"245",options:t.goalOverviewRadialBar.chartOptions,series:t.goalOverviewRadialBar.series}}),a("b-row",{staticClass:"text-center mx-0"},[a("b-col",{staticClass:"border-top border-right d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" Completed ")]),a("h3",{staticClass:"font-weight-bolder mb-50"},[t._v(" "+t._s(t.goal_overview.completed)+" ")])],1),a("b-col",{staticClass:"border-top d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" In Progress ")]),a("h3",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(t.goal_overview.inProgress)+" ")])],1)],1)],1)},et=[],at={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BRow:n["a"],BCardText:E["a"],BCol:o["a"]},data:function(){return{goal_overview:{},goalOverviewRadialBar:{series:[83],chartOptions:{chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:["#51e5a8"],plotOptions:{radialBar:{offsetY:-10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#ebe9f1",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{color:"#5e5873",fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[v["b"].success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/goal-overview").then((function(e){t.goal_overview=e.data}))}},rt=at,st=Object(y["a"])(rt,tt,et,!1,null,null,null),nt=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",[a("b-row",{staticClass:"pb-50"},[a("b-col",{staticClass:"d-flex justify-content-between flex-column",attrs:{lg:"6","order-lg":"1",order:"2"}},[a("div",{staticClass:"mt-1 mt-lg-0"},[a("h2",{staticClass:"font-weight-bolder mb-25"},[t._v(" "+t._s(t.kFormatter(t.avgData.sessions))+" ")]),a("b-card-text",{staticClass:"font-weight-bold mb-2"},[t._v(" Avg Sessions ")]),a("div",{staticClass:"font-medium-2 mb-1 mb-lg-0"},[a("span",{staticClass:"text-success mr-50"},[t._v(t._s(t.avgData.growth))]),a("span",[t._v("vs last 7 days")])])],1),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"shadow",attrs:{variant:"primary"}},[t._v(" View Details ")])],1),a("b-col",{staticClass:"d-flex justify-content-between flex-column text-right",attrs:{lg:"6",cols:"12","order-lg":"2",order:"1"}},[a("div",[a("b-dropdown",{staticClass:"chart-dropdown",attrs:{text:"Last 7 Days",variant:"transparent",left:"","no-caret":"",size:"sm"}},t._l(t.avgData.lastDays,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1)],1),a("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.salesBar.chartOptions,series:t.salesBar.series}})],1)],1),a("hr"),a("b-row",{staticClass:"avg-sessions pt-50"},[a("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Goal: $"+t._s(t.avgData.goal)+" ")]),a("b-progress",{attrs:{value:"50",max:"100",height:"6px"}})],1),a("b-col",{staticClass:"mb-2",attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Users: "+t._s(t.kFormatter(t.avgData.users))+" ")]),a("b-progress",{attrs:{value:"60",max:"100",height:"6px",variant:"warning"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Retention: "+t._s(t.avgData.retention)+"% ")]),a("b-progress",{staticClass:"mt-25",attrs:{value:"70",max:"100",height:"6px",variant:"danger"}})],1),a("b-col",{attrs:{cols:"6"}},[a("b-card-text",{staticClass:"mb-50"},[t._v(" Duration: "+t._s(t.avgData.duration)+"yr ")]),a("b-progress",{staticClass:"mt-25",attrs:{value:"90",max:"100",variant:"success",height:"6px"}})],1)],1)],1)},it=[],ct=a("1947"),lt=a("49f5"),dt=a("e009"),ut=a("0e20"),ht={components:{VueApexCharts:m.a,BCard:l["a"],BRow:n["a"],BCol:o["a"],BButton:ct["a"],BCardText:E["a"],BDropdown:h["a"],BDropdownItem:p["a"],BProgress:lt["a"]},directives:{Ripple:dt["a"]},data:function(){return{avgData:{},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{chart:{sparkline:{enabled:!0},toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0}},states:{hover:{filter:"none"}},colors:["#ebf0f7","#ebf0f7",v["b"].primary,"#ebf0f7","#ebf0f7","#ebf0f7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0,endingShape:"rounded"}},tooltip:{x:{show:!1}},xaxis:{type:"numeric"}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/avg-sessions").then((function(e){t.avgData=e.data}))},methods:{kFormatter:ut["e"]}},pt=ht,bt=Object(y["a"])(pt,ot,it,!1,null,null,null),ft=bt.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",{staticClass:"align-items-baseline"},[a("div",[a("b-card-title",{staticClass:"mb-25"},[t._v(" Sales ")]),a("b-card-text",{staticClass:"mb-0"},[t._v(" 2020 Total Sales: 12.84k ")])],1),a("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"SettingsIcon",size:"18"}})],1),a("b-card-body",{staticClass:"pb-0"},[a("vue-apex-charts",{attrs:{type:"line",height:"240",options:t.salesLine.chartOptions,series:t.salesLine.series}})],1)],1)},vt=[],gt={components:{VueApexCharts:m.a,BCard:l["a"],BCardHeader:d["a"],BCardText:E["a"],BCardTitle:u["a"],BCardBody:b["a"]},data:function(){return{salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},zoom:{enabled:!1},type:"line",dropShadow:{enabled:!0,top:18,left:2,blur:5,opacity:.2},offsetX:-10},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebe9f1",padding:{top:-20,bottom:5,left:20}},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:[v["b"].primary],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{offsetY:5,style:{colors:"#b9b9c3",fontSize:"0.857rem"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1},tickPlacement:"on"},yaxis:{tickAmount:5,labels:{style:{colors:"#b9b9c3",fontSize:"0.857rem"},formatter:function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t}}},tooltip:{x:{show:!1}}}}}}},Ct=gt,yt=Object(y["a"])(Ct,mt,vt,!1,null,null,null),wt=yt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"card-revenue-budget",attrs:{"no-body":""}},[a("b-row",{staticClass:"mx-0"},[a("b-col",{staticClass:"revenue-report-wrapper",attrs:{md:"8"}},[a("div",{staticClass:"d-sm-flex justify-content-between align-items-center mb-3"},[a("h4",{staticClass:"card-title mb-50 mb-sm-0"},[t._v(" Revenue Report ")]),a("div",{staticClass:"d-flex align-items-center"},[a("div",{staticClass:"d-flex align-items-center mr-2"},[a("span",{staticClass:"bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer"}),a("span",[t._v("Earning")])]),a("div",{staticClass:"d-flex align-items-center"},[a("span",{staticClass:"bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer"}),a("span",[t._v("Expense")])])])]),a("vue-apex-charts",{attrs:{id:"revenue-report-chart",type:"bar",height:"230",options:t.revenueReport.chartOptions,series:t.revenueReport.series}})],1),a("b-col",{staticClass:"budget-wrapper",attrs:{md:"4"}},[a("b-dropdown",{staticClass:"budget-dropdown",attrs:{text:"2020",size:"sm",variant:"outline-primary"}},t._l(t.revenue_report.years,(function(e){return a("b-dropdown-item",{key:e},[t._v(" "+t._s(e)+" ")])})),1),a("h2",{staticClass:"mb-25"},[t._v(" $"+t._s(t.revenue_report.price)+" ")]),a("div",{staticClass:"d-flex justify-content-center"},[a("span",{staticClass:"font-weight-bolder mr-25"},[t._v("Budget:")]),a("span",[t._v("56,800")])]),a("vue-apex-charts",{attrs:{id:"budget-chart",type:"line",height:"80",options:t.budgetChart.options,series:t.budgetChart.series}}),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v(" Increase Budget ")])],1)],1)],1)},_t=[],Bt={components:{VueApexCharts:m.a,BDropdown:h["a"],BDropdownItem:p["a"],BCard:l["a"],BButton:ct["a"],BRow:n["a"],BCol:o["a"]},directives:{Ripple:dt["a"]},data:function(){return{revenue_report:{},revenueReport:{series:[{name:"Earning",data:[95,177,284,256,105,63,168,218,72]},{name:"Expense",data:[-145,-80,-60,-180,-100,-60,-85,-75,-100]}],chartOptions:{chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[v["b"].primary,v["b"].warning],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{labels:{style:{colors:"#b9b9c3",fontSize:"0.86rem"}}}}},budgetChart:{series:[{data:[61,48,69,52,60,40,79,60,59,43,62]},{data:[20,10,30,15,23,0,25,15,20,5,27]}],options:{chart:{height:80,toolbar:{show:!1},zoom:{enabled:!1},type:"line",sparkline:{enabled:!0}},stroke:{curve:"smooth",dashArray:[0,5],width:[2]},colors:[v["b"].primary,"#dcdae3"],tooltip:{enabled:!1}}}}},created:function(){var t=this;this.$http.get("/card/card-analytics/revenue-report").then((function(e){t.revenue_report=e.data}))}},kt=Bt,Ot=Object(y["a"])(kt,xt,_t,!1,null,null,null),Dt=Ot.exports,At=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"earnings-card"},[a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("b-card-title",{staticClass:"mb-1"},[t._v(" Earnings ")]),a("div",{staticClass:"font-small-2"},[t._v(" This Month ")]),a("h5",{staticClass:"mb-1"},[t._v(" $4055.56 ")]),a("b-card-text",{staticClass:"text-muted font-small-2"},[a("span",{staticClass:"font-weight-bolder"},[t._v("68.2%")]),a("span",[t._v(" more earnings than last month.")])])],1),a("b-col",{attrs:{cols:"6"}},[a("vue-apex-charts",{attrs:{height:"120",options:t.earningsChart.chartOptions,series:t.earningsChart.series}})],1)],1)],1)},St=[],jt="#28c76f66",Tt="#28c76f33",zt={components:{BCard:l["a"],BRow:n["a"],BCol:o["a"],BCardTitle:u["a"],BCardText:E["a"],VueApexCharts:m.a},data:function(){return{earningsChart:{series:[53,16,31],chartOptions:{chart:{type:"donut",toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["App","Service","Product"],stroke:{width:0},colors:[jt,Tt,v["b"].success],grid:{padding:{right:-20,bottom:-8,left:-20}},plotOptions:{pie:{startAngle:-10,donut:{labels:{show:!0,name:{offsetY:15},value:{offsetY:-15,formatter:function(t){return"".concat(parseInt(t),"%")}},total:{show:!0,offsetY:15,label:"App",formatter:function(){return"53%"}}}}}},responsive:[{breakpoint:1325,options:{chart:{height:100}}},{breakpoint:1200,options:{chart:{height:120}}},{breakpoint:1045,options:{chart:{height:100}}},{breakpoint:992,options:{chart:{height:120}}}]}}}}},Rt=zt,It=Object(y["a"])(Rt,At,St,!1,null,null,null),$t=It.exports,Lt={components:{BRow:n["a"],BCol:o["a"],CardAnalyticSessionsByDevice:x,CardAnalyticProductOrders:A,CardAnalyticCustomers:I,CardAnalyticSalesRadarChart:V,CardAnalyticSupportTracker:X,CardAnalyticRevenue:Z,CardAnalyticGoalOverview:nt,CardAnalyticAvgSessions:ft,CardAnalyticSaleLineChart:wt,CardAnalyticRevenueReport:Dt,CardAnalyticEarningsChart:$t}},Et=Lt,Pt=(a("d7ab"),Object(y["a"])(Et,r,s,!1,null,null,null));e["default"]=Pt.exports},ca6e:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return l})),a.d(e,"d",(function(){return d}));var r=a("5530"),s=a("53ca"),n=a("a18c"),o=a("ed09"),i=function(t){return"object"===Object(s["a"])(t)&&null!==t},c=function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},l=function(t){var e=n["a"].resolve(t),a=e.route;return a.path===n["a"].currentRoute.path},d=function(){var t=Object(o["getCurrentInstance"])().proxy,e=Object(o["reactive"])({route:t.$route});return Object(o["watch"])((function(){return t.$route}),(function(t){e.route=t})),Object(r["a"])(Object(r["a"])({},Object(o["toRefs"])(e)),{},{router:t.$router})}},d7ab:function(t,e,a){"use strict";a("fa61")},fa61:function(t,e,a){}}]);