(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d2fe786","chunk-64e3590e"],{"0e20":function(t,a,e){"use strict";e.d(a,"e",(function(){return s})),e.d(a,"f",(function(){return n})),e.d(a,"a",(function(){return o})),e.d(a,"c",(function(){return i})),e.d(a,"d",(function(){return c})),e.d(a,"b",(function(){return A}));e("b680"),e("d3b7"),e("25f0"),e("ac1f"),e("1276"),e("159b"),e("fb6a"),e("a15b"),e("d81d"),e("5319");var r=e("ca6e"),s=function(t){return t>999?"".concat((t/1e3).toFixed(1),"k"):t},n=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if(!t)return"";var e=t.toString(),r=e.split(a),s=[];return r.forEach((function(t){var a=t.charAt(0).toUpperCase()+t.slice(1);s.push(a)})),s.join(" ")},o=function(t){if(!t)return"";var a=t.split(" ");return a.map((function(t){return t.charAt(0).toUpperCase()})).join("")},i=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{month:"short",day:"numeric",year:"numeric"};return t?new Intl.DateTimeFormat("en-US",a).format(new Date(t)):t},c=function(t){var a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=new Date(t),s={month:"short",day:"numeric"};return a&&Object(r["c"])(e)&&(s={hour:"numeric",minute:"numeric"}),new Intl.DateTimeFormat("en-US",s).format(new Date(t))},A=function(t){return t.replace(/<\/?[^>]+(>|$)/g,"")}},1321:function(t,a,e){(function(a,r){t.exports=r(e("3d1e"))})(0,(function(t){"use strict";function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function e(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}t=t&&t.hasOwnProperty("default")?t["default"]:t;var r={props:{options:{type:Object},type:{type:String},series:{type:Array,required:!0,default:function(){return[]}},width:{default:"100%"},height:{default:"auto"}},data:function(){return{chart:null}},beforeMount:function(){window.ApexCharts=t},mounted:function(){this.init()},created:function(){var t=this;this.$watch("options",(function(a){!t.chart&&a?t.init():t.chart.updateOptions(t.options)})),this.$watch("series",(function(a){!t.chart&&a?t.init():t.chart.updateSeries(t.series)}));var a=["type","width","height"];a.forEach((function(a){t.$watch(a,(function(){t.refresh()}))}))},beforeDestroy:function(){this.chart&&this.destroy()},render:function(t){return t("div")},methods:{init:function(){var a=this,e={chart:{type:this.type||this.options.chart.type||"line",height:this.height,width:this.width,events:{}},series:this.series};Object.keys(this.$listeners).forEach((function(t){e.chart.events[t]=a.$listeners[t]}));var r=this.extend(this.options,e);return this.chart=new t(this.$el,r),this.chart.render()},isObject:function(t){return t&&"object"===a(t)&&!Array.isArray(t)&&null!=t},extend:function(t,a){var r=this;"function"!==typeof Object.assign&&function(){Object.assign=function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var a=Object(t),e=1;e<arguments.length;e++){var r=arguments[e];if(void 0!==r&&null!==r)for(var s in r)r.hasOwnProperty(s)&&(a[s]=r[s])}return a}}();var s=Object.assign({},t);return this.isObject(t)&&this.isObject(a)&&Object.keys(a).forEach((function(n){r.isObject(a[n])&&n in t?s[n]=r.extend(t[n],a[n]):Object.assign(s,e({},n,a[n]))})),s},refresh:function(){return this.destroy(),this.init()},destroy:function(){this.chart.destroy()},updateSeries:function(t,a){return this.chart.updateSeries(t,a)},updateOptions:function(t,a,e,r){return this.chart.updateOptions(t,a,e,r)},toggleSeries:function(t){return this.chart.toggleSeries(t)},showSeries:function(t){this.chart.showSeries(t)},hideSeries:function(t){this.chart.hideSeries(t)},appendSeries:function(t,a){return this.chart.appendSeries(t,a)},resetSeries:function(){this.chart.resetSeries()},zoomX:function(t,a){this.chart.zoomX(t,a)},toggleDataPointSelection:function(t,a){this.chart.toggleDataPointSelection(t,a)},appendData:function(t){return this.chart.appendData(t)},addText:function(t){this.chart.addText(t)},addImage:function(t){this.chart.addImage(t)},addShape:function(t){this.chart.addShape(t)},dataURI:function(){return this.chart.dataURI()},setLocale:function(t){return this.chart.setLocale(t)},addXaxisAnnotation:function(t,a){this.chart.addXaxisAnnotation(t,a)},addYaxisAnnotation:function(t,a){this.chart.addYaxisAnnotation(t,a)},addPointAnnotation:function(t,a){this.chart.addPointAnnotation(t,a)},removeAnnotation:function(t,a){this.chart.removeAnnotation(t,a)},clearAnnotations:function(){this.chart.clearAnnotations()}}},s=r;return window.ApexCharts=t,s.install=function(a){a.ApexCharts=t,window.ApexCharts=t,Object.defineProperty(a.prototype,"$apexcharts",{get:function(){return t}})},s}))},2642:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-alert",{attrs:{variant:"primary",show:""}},[e("div",{staticClass:"alert-body"},[e("p",[e("strong",[t._v("Info: ")]),e("span",[t._v("Please check the ")]),e("b-link",{staticClass:"alert-link",attrs:{href:"https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation/guide/layout/page-layout-examples.html#layout-without-menu",target:"blank"}},[t._v("Layout Without Navigation Menu documentation")]),e("span",[t._v(" for more details.")])],1)])]),e("ecommerce")],1)},s=[],n=e("e3d8"),o=e("5fda"),i=e("aa59"),c={components:{BAlert:o["a"],BLink:i["a"],Ecommerce:n["default"]},data:function(){return{menuHidden:this.$store.state.appConfig.layout.menu.hidden}},created:function(){this.$store.commit("appConfig/UPDATE_NAV_MENU_HIDDEN",!0)},destroyed:function(){this.$store.commit("appConfig/UPDATE_NAV_MENU_HIDDEN",this.menuHidden)}},A=c,l=e("2877"),d=Object(l["a"])(A,r,s,!1,null,null,null);a["default"]=d.exports},"2fad":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHAAAAACwgWRlAAAFXklEQVRIx52X+4tVVRTHv2vtfc6Ze2+lZr7KcsxCogiDREfLwcZBKxIiepFhkEQJ/dgvkVTUL/kHyBD1Sz+lEFZQ9pB+KEXzkYqOWqnR06zJeThzH+fstVY/nHOvY5ozzrpsuNy77/rs79pnPS5hnHa0e+m6pJQ8nyTl+XEcJZ7IMxNCmkqWhbRRq50KaX3zvP7sLdq/PxvLH4214diDy9+eMmXq2lISxQAA1XwRAFHAFNb8HEBIMxkZ6v/0pjZ+ij7eee6KwUe7FnVPmXnD1nKlXIEZIJLvNpx/r4Z6o4H+Wh01CUjTDATAA2hjOutqI+vnf/3d5nGDj67s3DBj9vWveecYZi01o9X2DY/gp4FBjDRSQBVqhtYBAZApHDAUk6xduefYh2OCj6/s3DBr7k2vA0QtqBmsgKeNuvx8pu+z4Xq1B7XsROrdjeZsRQZeo2rXU3FAotw5A6FC8kjn7t6P/xfc29WxatbN8z5xzjFMAQNMBEa5s9q5oaG+M7/ec+fXhw//98A/3n9L8svQVe80wGsI+f0TAaQKz26wbFlHx+4jx5r7efSPr5194wfsHAOAmcFMASbAFPWR4Vr59FD7paAAcOu2E42unQefroB7PAiRc/BMiLwDwSYFF28Zvb8F/mF117ulcqkMWPEiGAiqBsmC+f6Beyfv2NE/VhZ07tz3Qsm7vZFjxMTwzIiYAdAd3y5dsO4i8KRpM55WELSAqRkUgBJQ7Tv75bQvduwfb863pfJsRKTOOUTsCjjBef/KBeAjD3Wuj5IkMiuABCgAEYFkQW0ofQJXYHfv2n84ifgbTwQmwDPBMwGGOceWLVjSApfbrnpOzWBFmppafsdESIfP/TZnHCG+SLXi/cg7RMz5fRPDE4E4ehRFriNuK88TMwCAqQAgmCrMDFla/xITsIrXz4MymBlmBmYDgUFmi1uKOfaJmUFFoAaoGQR52CmTbyYCbv9iz0/e+RGmXJ0nhiOGYz+zpRjsfK64UC3hfLgb9YOYoEWwQQNVmDn3rQLAprfAolbUYStCnFc/AMgwcSMDnGNQIQJE4EIdA4CELIgqgiqkWEEFQQQuihZMFOwdT2I1EABHXIQcf50HZ6GhplBViBmCKEQNogp1ftlEoKdXLW53hAozwxHgYHBEYLXT58G1kZPShFm+csWK4HjFRMCKuIvVcqAZHADHhJh5RwvskPWEApZlGUQCVBRBAoJPZvd2dFx7xQ+Wp8eYcphjhgPAogiSftACz9v6VY+maSZFqcxDLRBRZDBOE918JdC+FctuM8MKB4A1V8wEREwnZn21b88FtdpXh98LIbSgQRTBFCEEpKW2+w4svH3heMEWUw8bmIu7hTUHCHv1kv344OruaoNdyczyXDaDiMAM8GljxJ0emLPo+PF/LgcdWN21MUh4CdqcSPK+DNV9U7fvWnjJflyp1h82CRpChkwMWSiUh4AqqJJNv/rUoSW33XFJlY/eHg+svm+TiLxERRtnUxAZnOlZ7/DkZUef3u7FL/f5tjeDKmkQmClUBKYGVUUESHs53jqtdM0mYv6FNcxU006DrlOzuXmxUIyaQjKR9IHrtu/dPuaw19u9+OU/jd9Ig7JqE5w3DZUAUcO0JEH7pDKuidta3xEMpgZq3ilwliGPT/589/Zxj7ffL+/o+kOyjwYzqTQdw7RVw5tDYEyEqUmMxDMSZkAUtRCQhfC3SfbiPYdOjn+8HW377r1rU1/As9UQYphCLa/pUM1nsuIAWjxI3plMJrdNq/1ruk/1D074n0TTDixZ8EzNZH1VbH4jWClV8WoCB1MPalSYTsZBtvx++OTGx4B0LH//Aov+V9ynxDiVAAAAAElFTkSuQmCC"},4011:function(t,a,e){"use strict";e("666e")},"4f49":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAMAAAB61OwbAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAHgAAAACyl2QUAAAAbFBMVEUAAAD///+A//9An/8imfslmvkjmfkjm/kjmfkjmvkjmfojmfkjmvgimvkjmfgjmfgjmvkjmfkimfg0kug0ofhofblpfbhquvmxYXez2/q02/rVUlbY7Pvlc3PmS0fq9PzuaGL4RDf88vL8/PxrgQw9AAAAEnRSTlMAAQIIPFN2hIWLjKi/2eLp8vNALlxxAAAA+0lEQVQoz5VT7ZKDIAzUitZa0DOi6N31g+P937HRUhsMnfb2hyOzm9mwCUmyYicqqdpWyUrsEo6saGBFU2RbPq8hQJ0HdFoCwz4l/BEiOD4VJURRrv4Rsuvx4/vIas73P93c6f0uBS8f7bD8FEs+zZYfznb0ecyJCV5uz50/CBRUrNx6A0SFArkttw8DhESBIrw+zfxqAKBQ0BLB9HelBgBtKDDOoWIkFV+Bhb44VJw6IlBBkxPy7lvTpiW9Jhq4iwkvfSBBzQaT3qQmSNQTK/dR+2EZXu6HdR+3/jV86H7cy8IYHdma/M3K7T9f2ujal+l/Hs4HT+/l470BD/Y004J14jYAAAAASUVORK5CYII="},"57a0":function(t,a,e){},"666e":function(t,a,e){},"6ca7":function(t,a,e){t.exports=e.p+"img/badge.0fa134b5.svg"},"9fa4":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHqADAAQAAAABAAAAHAAAAACwgWRlAAAHJElEQVRIx52Xe4xdVRXGf/uce2dup0Nn+mJaaGlpOy11qpEWqMGYFJFo6cMQMUQDEiNolfYPJD6QaFHAKGLTxGIfJGBjQMUiWhVQIBBCyysQ29rWlpbWYh/T1zzvuefsx1r+se/cUqFS3cnN2efcffd3vrW+9a19DWc5uv749mUVDZ8N1l8uWTFOXegQH/BZrdv7cEitbMoGsseO/Gj+a2ezn3m/BZc88a8vJCrLxbop4jxiPcEF1Hl8rUC8IM7haxZxnibs3u9ftumpz882PzQX3HvoTPsm77zp+ebcK4bmM365ZcacDW++kea19ZrnU7RwaOFQa8Fa1DtQRUUQ60ACqoFaLlPv2jTrln0D7s0Xn7v2pvcFrn73qpvKI0Z+D2DGmtc/1W7MyyVnL9bCooWlwx5kdthKKCyhKAhFgdgCbB5BnQXnURF6sworn29r+cgUu27Do/Pu/u+M09I1STn52K0r1nzxnDRsVOvaJcsJ1YyFxbOsNvdwpFoC7zGqIII6Twy/Q0RQCeAd4hy/emMyB6tjzaKuPd9Zte7qr58R2CRpRVXTxfx97Vh7onx+cYjx7hCfDC/zrabf8OvBy9nvOpCiIGQ1pLAQPGptna2rv0AADQTnWfviuZRaWs31s7f95KEHrrj6PcVVu2fx8pC6O00i0BQgEUzFQ6okFc9nupexP3QQnEe8RxXEB4J1p65O4tx7JATGVAbZecdjMLCXt4+15pM6Km2ma7s9jfETfaOmGgXQUx9VDIqqcknzXkKtFhlaR8jiXJxFnEODIHk/YfA4mvWj1X66TyTsOjYSVWFCe39l48ttD74r1NPKA9dpqAPrqZDEd1FuH72RDZ2r+OmFj7Dsgr/QQpVQy1HnUecQW6CuwKigLkfront1z1jUAc4w+7zD16nemTSA7//akpunNtWaomgU9REMH3Oh3oDCtNJRqjXLQztmMjDoUR9BQ56hWS9iHcF5JrX38olZDlMMcrA7clNrGFeplh752TNLG8AXDutfioCiaACDQjAx4C6GfcA2s2zLldy+bT69oQ0NBvEOsRZDgpKCCDjPvuNtLJrxCnNnjKB7oAWcQT1IobQk9voG8LiynYKeCnFkKOBARBisKgd6U549eREqhpAXaHDRRLwn5DliLUoZTZvAF2zeOYIvzXmdk4MJ1BKwCiFhYmXgIoASQEepGAZgPKgqNCkaDCZRDvaVuevElbw0MAHFIz6gAhICIhrviwx8gWoCaiB4dh9p476FW9j61jTUaT3P0FHOhzWAW41P0KheUgNBIREI8PCJWWzuHY9qqIPFlIgLqCoaBA3Eq3rUCxKEw31NNPt+Fkzag1rAJ+CU9iRPG8C5GIYn9RLyoInW2RvKRmPZKIjENeoFlejT6j24HIKLzzXmq6Olig5aLm7vRmtJLEsHtTw5VU49ruRRiflVwXgD3mBUuXHkLsaawahgX7dH7yF4RqeDdA0/TCIF4gNDUVMRLh9/AqzDOB+1UjXg4Gj/cN9gfNIltQlNlKPATNwgBTyMSgsen/5XHjjayUs9ozlQG86wsmP+uAPcOvNviCl49cgobnjuo6jElzcqfK5zH5KZyE0FPEhhON5XyRrAu6tNuz40vHppDJOiAiaJwABtieMb47bB+QqlAGmgpkJ3X8La3bN45vA4VEP8rSpLPrCHzuZBcDRq2CDgDLt62rY3gN8qhq2GnksbVqWCeoVEMQqkoKnBoFStkgn89tgUfr5vJn3W1HuzRVWZP7Gb5R/eiVpQZ6IBKahLwMKbfSNXn9Yktt22oJjcXGuKqzSGxwgmUUgDpAKJsP7YRFbun06vSxFRlFharSZj2fRd3NK5FwMYBEWjhdroiP/oG2Hn/Hhnc4MxwJPH2x786nm1JXWFxYdiUInGYiQyv7H9n3R2DvB872h6fEp7ydJ1zkmuGnOE1pJH8wRKgtik4fuqMcwbD01aAzvffebavHR+9YOttZYG4wbzeqcqBTCCphKjoAqpYjSgJcVIONVkVOLuwaPe8Hp/W3Xeqq2t73nm+t3RkZ/ucakMtcTGCPXm4YgNJBg0N1F8ebRYkxs0T9CagaL+fQaaJ5zImuTRQ5MXvRMrPY3x9m37WifOcXPbso8nqGnke2iIQgB8fGaCQTWaTVSwghDXSFxvHbryQOe3Vz7+54fPCAzwwvYdm8vnX+K6hmfzhiViGl25bjCxZGIUjADeRBTROPfxapxyLCvJiren3XHfH5669z9x0vc4AOoLO3ZudmO7Xjm3mWs6yq7cYD3k50OpGDqs+BgJIxoFGYTX+kdkaw+eu2jVk0+v/38O9OUfXLtwzeIxvTdMrRRltO7FQ8IDkLrIUIIP7M0r7vc9Y39x95+e+QqnnWX+x38S9VG6bdGCL3e2FDdPa86mjSwXlTGpT1HlmE9Djy3nu2uV3Xuz5nUrnnp67dls+G/KAOhrdkwZgQAAAABJRU5ErkJggg=="},b83c:function(t,a,e){"use strict";e("57a0")},ca6e:function(t,a,e){"use strict";e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return c})),e.d(a,"a",(function(){return A})),e.d(a,"d",(function(){return l}));var r=e("5530"),s=e("53ca"),n=e("a18c"),o=e("ed09"),i=function(t){return"object"===Object(s["a"])(t)&&null!==t},c=function(t){var a=new Date;return t.getDate()===a.getDate()&&t.getMonth()===a.getMonth()&&t.getFullYear()===a.getFullYear()},A=function(t){var a=n["a"].resolve(t),e=a.route;return e.path===n["a"].currentRoute.path},l=function(){var t=Object(o["getCurrentInstance"])().proxy,a=Object(o["reactive"])({route:t.$route});return Object(o["watch"])((function(){return t.$route}),(function(t){a.route=t})),Object(r["a"])(Object(r["a"])({},Object(o["toRefs"])(a)),{},{router:t.$router})}},d7bc:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAdCAMAAABluEcAAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAH6ADAAQAAAABAAAAHQAAAAAKR4aWAAABrVBMVEUAAAAA//8A//8A//8AzP8A1f8A2/8Av/8Axv8A0f8Av/8Au/8Axv8AvP8Av/8Awv8Awv8AvfYAwfYAu/cAvfcAv/cAvPgAwfgAv/kAvvkAvPkAv/oAu/oAvvUAv/UAvfYAvvYAv/YAvvYAu/cAvPcAvfcAvvcAu/cAvPcAvPgAvfgAvvgAu/gAvvUAu/UAvPUAvvYAu/YAvfYAvvYAvPYAvfYAu/cAvPcAvfcAvPcAvfcAu/cAvPcAvfcAvfcAvPUAu/UAvPUAu/YAvPYAvPYAvfYAvPYAvfYAvPcAu/cAvPcAvPcAvfcAvPUAvPUAu/YAvPYAvfYAvPYAvPYAvfYAvPYAu/cAvPUAvPUAu/UAvPUAu/YAvPYAu/YAvPYAvPYAvPYAu/UAvPUAvPUAvPYAvPYAvPYAu/YAvPYAu/YAvPYAu/YAvPUAvPUAu/UAvPUAu/UAvPUAu/YAvPYAu/YAvPYAvPYAvPYAvPYAu/YAu/UAvPUAvPUAvPUAvPUAu/UAvPUAu/UAu/UAvPYAvPYAu/YAu/YAu/YAu/YAvPYAvPYAu/YAu/YAvPYAu/Usg2eMAAAAjnRSTlMAAQIDBQYHCAkLDA8SExQVGRsdHh8gIiUoKy4wMTM0Njc4Ozw9Pj9AQUVGSktOT1BSU1VWWFlaXF1fYGJjZGVmaWttbm9wcnR5fH1+f4GGi4yOkJGSlJaZnJ6hoqOmqKuwtLa7vb/CxMbHysvMzs/R09XX2Nvf4OPk5ebn6Ovs7e7w8fLz9PX4+fr7/P3+32gvlAAAAYFJREFUKM9jYCAdsGkHZJS3V6dbsmBIMQvLaAbU9YFBV18kqiS3c2IjRKqvN0qVjVmrXhlJliuguQ8OOn3ZgEL+jghpldI+FFAozsDg7AOX1u3oQwMNSgzB5jBpjc6+0mx0BZL6glBp/qp2T6tukGBxfFI13ApWmPbwalmbHqBIhSaIp1YCVeABlRYtEnHsBfJLeCB8zkKIfA3UACcJdZDuXiWYedK9EAX6EK4gXyWIl4fwbQFEPhTKTQTzcr3gIB8inwmRdunDAarA0gKtuOTbwfIRuKT7OkDSwl1QXpwCOpAHyQfCVKdhTS0s9XDbxOCC8qpgIAFk6iCsS2GEShtCBayB7JC+viZY1CXwQqShHqpmB3Ky+vr0hJugCqr9jI3cM2DmmYAU1/alMzDYYvNdHNiwzj4HIBmEKZ3KBpav6FMHUa49aNLRHBC3xvbZg2mdImTZMlOYV6Vamuzkpc3CVJkMc6CSXckWbIgAkkusaSuIMQAZJ2Tk6u1mpciOkAQAdXQF0tDLauQAAAAASUVORK5CYII="},d8dc:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAMAAACqEUSYAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHaADAAQAAAABAAAAHAAAAADjGz/hAAACalBMVEUAAAD///+A/4BVqqr/Zmb/VVX/1VX/SUn/20n/41Uas2b/1VX/10Mapmb/0UbeTkP/2EXjTEL/1kreTkEXpGD1xL9YhlPkaWAWo1zdSD3/zkQWoF/meHEVn1x8qvjeS0HfST3/z0YWoV7fST4Un13/z0T84+P/z0NTkfT/z0MVoFz/zkYUoV4WoV7/z0X////eST250/3cSjzdSD3cSj342tgVoV7Wq5//z0RHiPP/0EXeTz7/////z0PdSjzeSD2Wu/ncSTzdSD3cST0Vn1wUoF4kp2j/8ML3/PpHiPPcST3dSD3/z0MVoF3E2fzdSj3/z0PS7ODf6f0Vn13cST0Vn13dSDzshD//z0TzpEH/zkRRjfT///7/++z/zkTynUJVg1FpslRzdk0VoF3dSTz/z0Q5p1jD2PvP4Pz/01IxlFeBb0z/z0MVoFykvU4Un1wrpFqLs/jcSD3j7P7/z0SjY0bdSDz7/f+9wU3/zkQXoV5Hh/TI2/vcSDyu38cem1v/56PVx0ndST3//fZHh/P///8aomBJiPT/z0MZoFzp9/D/9+DS7d/DVEAoqGqyzfsWnVvkyka70/vdST3/z0MVoF1HiPRiwJPdSDwWn122z/v+//8VoFzdSTz/z0YUoF3dST1wwY0Un13//PEVoFwVoF1CsnxKifRPjPR1pffG2vzUTT0VoFzV4/2L0bAVn135zkX/z0R8yqXo24j/0EjcSDz/0U/cSD1IiPRPjfRfl/Wdv/ndST3/zkQUn12ArPepyPrcSjzr8v7+z0T/z0RHiPTdSDz/z0MUn1xHh/PcSDz/zkP/67D/+eX3Y1OKAAAAyHRSTlMAAQIDBQYGBwcJCgwTFBYXGhsfJy00Nzg6Q0RGRkhOTlBQUVdYWltbX19hY2Rna2tsbW5xdXV6fYCBgoSEhYeKi4yNk5WWlpaZmpqfn6Gjo6OlpaioqqqqqrCxs7W7vL6/v8HDw8PExMTExcXFx8jKzMzNzs7P0NDS0tPT1NTV19jZ2dnb3N7f3+Hh4eLj5OTm5ufn6Onp6enq6urr7u7v7/Hy8vP09PT09PX19vb3+Pj4+fn5+vr7/Pz8/Pz8/f39/f39/f7+/onfHhMAAAGeSURBVCjPY2CAAVZl/9q52xc0hRjwM6ADQbsZp2Bge5gwqqTC3FPIYI8xkhyL8yl04M0Kl/U6hQlS2KGSRqewASeIpNh2rLLHJEGSjPnZMIEiRxPr8HgYiOQEysqemLAaLDdZXr941dpy98rTUKAOlA0+cSIBJFkmWrPr5MmTKyY1Z0Jl4xgYmBadOLGm99SpreKzjp4Eg8LF8yCyxwUYRE4AQdapU/ZBOyGSJ3dkNEA1SzEogWRPlJ6SOXASBqLPQmW1GXTAsvUH1fbDZVtat0BkrRi0wLInkkxXwmWrY6CytkAPgcFM891wWc9uqMl6EFcBgduh5TBXyZ2ByioyMM2ByK4P7If6yDJ2G0TyCB8Dgy9Uc1VXejtQbpqGx2ao1lRgWElDZU+01c32czC06Vl4GG4tECTDpE/0TV+3adm+CqhkBxtIVmLfCWSQBosEVUgEmyFLLp0IlfSBpg3GUCTZRKhkDgcsXTG7wCU7N0Ako7iRUqXufKhsHlhuowUjSoLmdV0CkiwAye0NEMLIDVwqvrlTG6eURGjywMUA8rmxs40KLQEAAAAASUVORK5CYII="},e3d8:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"dashboard-ecommerce"}},[e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{xl:"4",md:"6"}},[e("ecommerce-medal",{attrs:{data:t.data.congratulations}})],1),e("b-col",{attrs:{xl:"8",md:"6"}},[e("ecommerce-statistics",{attrs:{data:t.data.statisticsItems}})],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"4"}},[e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"6",md:"3",cols:"6"}},[e("ecommerce-order-chart",{attrs:{data:t.data.statisticsOrder}})],1),e("b-col",{attrs:{lg:"6",md:"3",cols:"6"}},[e("ecommerce-profit-chart",{attrs:{data:t.data.statisticsProfit}})],1),e("b-col",{attrs:{lg:"12",md:"6"}},[e("ecommerce-earnings-chart",{attrs:{data:t.data.earningsChart}})],1)],1)],1),e("b-col",{attrs:{lg:"8"}},[e("ecommerce-revenue-report",{attrs:{data:t.data.revenue}})],1)],1),e("b-row",{staticClass:"match-height"},[e("b-col",{attrs:{lg:"8"}},[e("ecommerce-company-table",{attrs:{"table-data":t.data.companyTable}})],1),e("b-col",{attrs:{lg:"4",md:"6"}},[e("ecommerce-meetup",{attrs:{data:t.data.meetup}})],1),e("b-col",{attrs:{lg:"4",md:"6"}},[e("ecommerce-browser-states")],1),e("b-col",{attrs:{lg:"4",md:"6"}},[e("ecommerce-goal-overview",{attrs:{data:t.data.goalOverview}})],1),e("b-col",{attrs:{lg:"4",md:"6"}},[e("ecommerce-transactions",{attrs:{data:t.data.transactionData}})],1)],1)],1)},s=[],n=(e("b0c0"),e("ac1f"),e("1276"),e("a15b7")),o=e("b28b"),i=e("8b71"),c=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.data?r("b-card",{staticClass:"card-congratulation-medal"},[r("h5",[t._v("Congratulations 🎉 "+t._s(t.data.name)+"!")]),r("b-card-text",{staticClass:"font-small-3"},[t._v(" You have won gold medal ")]),r("h3",{staticClass:"mb-75 mt-2 pt-50"},[r("b-link",[t._v("$"+t._s(t.kFormatter(t.data.saleToday)))])],1),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v(" View Sales ")]),r("b-img",{staticClass:"congratulation-medal",attrs:{src:e("6ca7"),alt:"Medal Pic"}})],1):t._e()},A=[],l=e("205f"),d=e("d6e4"),u=e("aa59"),p=e("4918"),m=e("1947"),f=e("e009"),h=e("0e20"),v={components:{BCard:l["a"],BCardText:d["a"],BLink:u["a"],BImg:p["a"],BButton:m["a"]},directives:{Ripple:f["a"]},props:{data:{type:Object,default:function(){}}},methods:{kFormatter:h["e"]}},b=v,g=e("2877"),C=Object(g["a"])(b,c,A,!1,null,null,null),w=C.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{staticClass:"card-statistics",attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v("Statistics")]),e("b-card-text",{staticClass:"font-small-2 mr-25 mb-0"},[t._v(" Updated 1 month ago ")])],1),e("b-card-body",{staticClass:"statistics-body"},[e("b-row",t._l(t.data,(function(a){return e("b-col",{key:a.icon,class:a.customClass,attrs:{xl:"3",sm:"6"}},[e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",{staticClass:"mr-2"},[e("b-avatar",{attrs:{size:"48",variant:a.color}},[e("feather-icon",{attrs:{size:"24",icon:a.icon}})],1)],1),e("b-media-body",{staticClass:"my-auto"},[e("h4",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(a.title)+" ")]),e("b-card-text",{staticClass:"font-small-3 mb-0"},[t._v(" "+t._s(a.subtitle)+" ")])],1)],1)],1)})),1)],1)],1):t._e()},y=[],x=e("b885"),P=e("4968"),E=e("6197"),k=e("34b6"),D=e("e8a3"),U=e("7c32"),S=e("7fa6"),z={components:{BRow:n["a"],BCol:o["a"],BCard:l["a"],BCardHeader:x["a"],BCardTitle:P["a"],BCardText:d["a"],BCardBody:E["a"],BMedia:k["a"],BAvatar:D["a"],BMediaAside:U["a"],BMediaBody:S["a"]},props:{data:{type:Array,default:function(){return[]}}}},O=z,j=Object(g["a"])(O,B,y,!1,null,null,null),Y=j.exports,R=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{staticClass:"card-revenue-budget",attrs:{"no-body":""}},[e("b-row",{staticClass:"mx-0"},[e("b-col",{staticClass:"revenue-report-wrapper",attrs:{md:"8"}},[e("div",{staticClass:"d-sm-flex justify-content-between align-items-center mb-3"},[e("h4",{staticClass:"card-title mb-50 mb-sm-0"},[t._v(" Revenue Report ")]),e("div",{staticClass:"d-flex align-items-center"},[e("div",{staticClass:"d-flex align-items-center mr-2"},[e("span",{staticClass:"bullet bullet-primary svg-font-small-3 mr-50 cursor-pointer"}),e("span",[t._v("Earning")])]),e("div",{staticClass:"d-flex align-items-center ml-75"},[e("span",{staticClass:"bullet bullet-warning svg-font-small-3 mr-50 cursor-pointer"}),e("span",[t._v("Expense")])])])]),e("vue-apex-charts",{attrs:{id:"revenue-report-chart",type:"bar",height:"230",options:t.revenueReport.chartOptions,series:t.data.revenueReport.series}})],1),e("b-col",{staticClass:"budget-wrapper",attrs:{md:"4"}},[e("b-dropdown",{staticClass:"budget-dropdown",attrs:{text:"2020",size:"sm",variant:"outline-primary"}},t._l(t.data.years,(function(a){return e("b-dropdown-item",{key:a},[t._v(" "+t._s(a)+" ")])})),1),e("h2",{staticClass:"mb-25"},[t._v(" $"+t._s(t.data.price)+" ")]),e("div",{staticClass:"d-flex justify-content-center"},[e("span",{staticClass:"font-weight-bolder mr-25"},[t._v("Budget:")]),e("span",[t._v("56,800")])]),e("vue-apex-charts",{attrs:{id:"budget-chart",type:"line",height:"80",options:t.budgetChart.options,series:t.data.budgetChart.series}}),e("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v(" Increase Budget ")])],1)],1)],1):t._e()},T=[],I=e("dd9a"),M=e("9eaa"),Q=e("1321"),V=e.n(Q),F=e("1dff"),_={components:{VueApexCharts:V.a,BDropdown:I["a"],BDropdownItem:M["a"],BCard:l["a"],BButton:m["a"],BRow:n["a"],BCol:o["a"]},directives:{Ripple:f["a"]},props:{data:{type:Object,default:function(){}}},data:function(){return{revenue_report:{},revenueReport:{chartOptions:{chart:{stacked:!0,type:"bar",toolbar:{show:!1}},grid:{padding:{top:-20,bottom:-10},yaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"],labels:{style:{colors:"#6E6B7B",fontSize:"0.86rem",fontFamily:"Montserrat"}},axisTicks:{show:!1},axisBorder:{show:!1}},legend:{show:!1},dataLabels:{enabled:!1},colors:[F["b"].primary,F["b"].warning],plotOptions:{bar:{columnWidth:"17%",endingShape:"rounded"},distributed:!0},yaxis:{labels:{style:{colors:"#6E6B7B",fontSize:"0.86rem",fontFamily:"Montserrat"}}}}},budgetChart:{options:{chart:{height:80,toolbar:{show:!1},zoom:{enabled:!1},type:"line",sparkline:{enabled:!0}},stroke:{curve:"smooth",dashArray:[0,5],width:[2]},colors:[F["b"].primary,"#dcdae3"],tooltip:{enabled:!1}}}}}},H=_,q=Object(g["a"])(H,R,T,!1,null,null,null),X=q.exports,K=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{attrs:{"body-class":"pb-50"}},[e("h6",[t._v("Orders")]),e("h2",{staticClass:"font-weight-bolder mb-1"},[t._v(" 2,76k ")]),e("vue-apex-charts",{attrs:{height:"70",options:t.statisticsOrder.chartOptions,series:t.data.series}})],1):t._e()},W=[],G="#f3f3f3",L={components:{BCard:l["a"],VueApexCharts:V.a},props:{data:{type:Object,default:function(){}}},data:function(){return{statisticsOrder:{chartOptions:{chart:{type:"bar",stacked:!0,toolbar:{show:!1}},grid:{show:!1,padding:{left:0,right:0,top:-15,bottom:-15}},plotOptions:{bar:{horizontal:!1,columnWidth:"20%",startingShape:"rounded",colors:{backgroundBarColors:[G,G,G,G,G],backgroundBarRadius:5}}},legend:{show:!1},dataLabels:{enabled:!1},colors:[F["b"].warning],xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}}}}}},N=L,Z=Object(g["a"])(N,K,W,!1,null,null,null),J=Z.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{staticClass:"card-tiny-line-stats",attrs:{"body-class":"pb-50"}},[e("h6",[t._v("Profit")]),e("h2",{staticClass:"font-weight-bolder mb-1"},[t._v(" 6,24k ")]),e("vue-apex-charts",{attrs:{height:"70",options:t.statisticsProfit.chartOptions,series:t.data.series}})],1):t._e()},tt=[],at="#EBEBEB",et={components:{BCard:l["a"],VueApexCharts:V.a},props:{data:{type:Object,default:function(){}}},data:function(){return{statisticsProfit:{chartOptions:{chart:{type:"line",toolbar:{show:!1},zoom:{enabled:!1}},grid:{borderColor:at,strokeDashArray:5,xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}},padding:{top:-30,bottom:-10}},stroke:{width:3},colors:[F["b"].info],markers:{size:2,colors:F["b"].info,strokeColors:F["b"].info,strokeWidth:2,strokeOpacity:1,strokeDashArray:0,fillOpacity:1,discrete:[{seriesIndex:0,dataPointIndex:5,fillColor:"#ffffff",strokeColor:F["b"].info,size:5}],shape:"circle",radius:2,hover:{size:3}},xaxis:{labels:{show:!0,style:{fontSize:"0px"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{show:!1},tooltip:{x:{show:!1}}}}}}},rt=et,st=Object(g["a"])(rt,$,tt,!1,null,null,null),nt=st.exports,ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{staticClass:"earnings-card"},[e("b-row",[e("b-col",{attrs:{cols:"6"}},[e("b-card-title",{staticClass:"mb-1"},[t._v(" Earnings ")]),e("div",{staticClass:"font-small-2"},[t._v(" This Month ")]),e("h5",{staticClass:"mb-1"},[t._v(" $4055.56 ")]),e("b-card-text",{staticClass:"text-muted font-small-2"},[e("span",{staticClass:"font-weight-bolder"},[t._v("68.2%")]),e("span",[t._v(" more earnings than last month.")])])],1),e("b-col",{attrs:{cols:"6"}},[e("vue-apex-charts",{attrs:{height:"120",options:t.earningsChart.chartOptions,series:t.data.series}})],1)],1)],1):t._e()},it=[],ct="#28c76f66",At="#28c76f33",lt={components:{BCard:l["a"],BRow:n["a"],BCol:o["a"],BCardTitle:P["a"],BCardText:d["a"],VueApexCharts:V.a},props:{data:{type:Object,default:function(){}}},data:function(){return{earningsChart:{chartOptions:{chart:{type:"donut",toolbar:{show:!1}},dataLabels:{enabled:!1},legend:{show:!1},comparedResult:[2,-3,8],labels:["App","Service","Product"],stroke:{width:0},colors:[ct,At,F["b"].success],grid:{padding:{right:-20,bottom:-8,left:-20}},plotOptions:{pie:{startAngle:-10,donut:{labels:{show:!0,name:{offsetY:15},value:{offsetY:-15,formatter:function(t){return"".concat(parseInt(t),"%")}},total:{show:!0,offsetY:15,label:"App",formatter:function(){return"53%"}}}}}},responsive:[{breakpoint:1325,options:{chart:{height:100}}},{breakpoint:1200,options:{chart:{height:120}}},{breakpoint:1045,options:{chart:{height:100}}},{breakpoint:992,options:{chart:{height:120}}}]}}}}},dt=lt,ut=Object(g["a"])(dt,ot,it,!1,null,null,null),pt=ut.exports,mt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.tableData?e("b-card",{staticClass:"card-company-table",attrs:{"no-body":""}},[e("b-table",{staticClass:"mb-0",attrs:{items:t.tableData,responsive:"",fields:t.fields},scopedSlots:t._u([{key:"cell(company)",fn:function(a){return[e("div",{staticClass:"d-flex align-items-center"},[e("b-avatar",{attrs:{rounded:"",size:"32",variant:"light-company"}},[e("b-img",{attrs:{src:a.item.avatarImg,alt:"avatar img"}})],1),e("div",[e("div",{staticClass:"font-weight-bolder"},[t._v(" "+t._s(a.item.title)+" ")]),e("div",{staticClass:"font-small-2 text-muted"},[t._v(" "+t._s(a.item.subtitle)+" ")])])],1)]}},{key:"cell(category)",fn:function(a){return[e("div",{staticClass:"d-flex align-items-center"},[e("b-avatar",{staticClass:"mr-1",attrs:{variant:a.item.avatarColor}},[e("feather-icon",{attrs:{size:"18",icon:a.item.avatarIcon}})],1),e("span",[t._v(t._s(a.item.avatarTitle))])],1)]}},{key:"cell(views)",fn:function(a){return[e("div",{staticClass:"d-flex flex-column"},[e("span",{staticClass:"font-weight-bolder mb-25"},[t._v(t._s(a.item.viewTitle))]),e("span",{staticClass:"font-small-2 text-muted text-nowrap"},[t._v(t._s(a.item.viewsub))])])]}},{key:"cell(revenue)",fn:function(a){return[t._v(" "+t._s("$"+a.item.revenue)+" ")]}},{key:"cell(sales)",fn:function(a){return[e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"font-weight-bolder mr-1"},[t._v(t._s(a.item.sales+"%"))]),e("feather-icon",{class:a.item.loss?"text-danger":"text-success",attrs:{icon:a.item.loss?"TrendingDownIcon":"TrendingUpIcon"}})],1)]}}],null,!1,2516755900)})],1):t._e()},ft=[],ht=e("29a1"),vt={components:{BCard:l["a"],BTable:ht["a"],BAvatar:D["a"],BImg:p["a"]},props:{tableData:{type:Array,default:function(){return[]}}},data:function(){return{fields:[{key:"company",label:"COMPANY"},{key:"category",label:"CATEGORY"},{key:"views",label:"VIEWS"},{key:"revenue",label:"REVENUE"},{key:"sales",label:"SALES"}]}}},bt=vt,gt=(e("b83c"),Object(g["a"])(bt,mt,ft,!1,null,"254b7dbb",null)),Ct=gt.exports,wt=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.data?r("b-card",{staticClass:"card-developer-meetup",attrs:{"no-body":""}},[r("div",{staticClass:"bg-light-primary rounded-top text-center"},[r("b-img",{attrs:{src:e("9da9"),alt:"Meeting Pic",height:"170"}})],1),r("b-card-body",[r("div",{staticClass:"meetup-header d-flex align-items-center"},[r("div",{staticClass:"meetup-day"},[r("h6",{staticClass:"mb-0"},[t._v(" THU ")]),r("h3",{staticClass:"mb-0"},[t._v(" 24 ")])]),r("div",{staticClass:"my-auto"},[r("b-card-title",{staticClass:"mb-25"},[t._v(" Developer Meetup ")]),r("b-card-text",{staticClass:"mb-0"},[t._v(" Meet world popular developers ")])],1)]),t._l(t.data.mediaData,(function(a){return r("b-media",{key:a.avatar,attrs:{"no-body":""}},[r("b-media-aside",{staticClass:"mr-1"},[r("b-avatar",{attrs:{rounded:"",variant:"light-primary",size:"34"}},[r("feather-icon",{attrs:{icon:a.avatar,size:"18"}})],1)],1),r("b-media-body",[r("h6",{staticClass:"mb-0"},[t._v(" "+t._s(a.title)+" ")]),r("small",[t._v(t._s(a.subtitle))])])],1)})),r("b-avatar-group",{staticClass:"mt-2 pt-50",attrs:{size:"34px"}},[t._l(t.data.avatars,(function(t){return r("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.bottom",value:t.fullName,expression:"avatar.fullName",modifiers:{hover:!0,bottom:!0}}],key:t.avatar,staticClass:"pull-up",attrs:{src:t.avatar}})})),r("h6",{staticClass:"align-self-center cursor-pointer ml-1 mb-0"},[t._v(" +42 ")])],2)],2)],1):t._e()},Bt=[],yt=e("3985"),xt=e("2616"),Pt={components:{BCard:l["a"],BImg:p["a"],BCardBody:E["a"],BCardText:d["a"],BCardTitle:P["a"],BMedia:k["a"],BMediaAside:U["a"],BAvatar:D["a"],BAvatarGroup:yt["a"],BMediaBody:S["a"]},directives:{"b-tooltip":xt["a"]},props:{data:{type:Object,default:function(){}}}},Et=Pt,kt=Object(g["a"])(Et,wt,Bt,!1,null,null,null),Dt=kt.exports,Ut=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"card-browser-states",attrs:{"no-body":""}},[e("b-card-header",[e("div",[e("b-card-title",[t._v("Browser States")]),e("b-card-text",{staticClass:"font-small-2"},[t._v(" Counter August 2020 ")])],1),e("b-dropdown",{staticClass:"chart-dropdown",attrs:{variant:"link","no-caret":"","toggle-class":"p-0"},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("feather-icon",{staticClass:"text-body cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})]},proxy:!0}])},[e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Last 28 Days ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Last Month ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Last Year ")])],1)],1),e("b-card-body",t._l(t.browserData,(function(a,r){return e("div",{key:a.browserImg,staticClass:"browser-states"},[e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",{staticClass:"mr-1"},[e("b-img",{attrs:{src:a.browserImg,alt:"browser img"}})],1),e("b-media-body",[e("h6",{staticClass:"align-self-center my-auto"},[t._v(" "+t._s(a.name)+" ")])])],1),e("div",{staticClass:"d-flex align-items-center"},[e("span",{staticClass:"font-weight-bold text-body-heading mr-1"},[t._v(t._s(a.usage))]),e("vue-apex-charts",{attrs:{type:"radialBar",height:"30",width:"30",options:t.chartData[r].options,series:t.chartData[r].series}})],1)],1)})),0)],1)},St=[],zt=(e("e9c4"),"#e9ecef"),Ot={components:{BCard:l["a"],BCardHeader:x["a"],BCardTitle:P["a"],BCardText:d["a"],BCardBody:E["a"],BMedia:k["a"],BMediaAside:U["a"],BMediaBody:S["a"],BImg:p["a"],BDropdown:I["a"],BDropdownItem:M["a"],VueApexCharts:V.a},data:function(){return{chartData:[],chartClone:{},chartColor:[F["b"].primary,F["b"].warning,F["b"].secondary,F["b"].info,F["b"].danger],chartSeries:[54.4,6.1,14.6,4.2,8],browserData:[{browserImg:e("d8dc"),name:"Google Chrome",usage:"54.4%"},{browserImg:e("9fa4"),name:"Mozila Firefox",usage:"6.1%"},{browserImg:e("4f49"),name:"Apple Safari",usage:"14.6%"},{browserImg:e("d7bc"),name:"Internet Explorer",usage:"4.2%"},{browserImg:e("2fad"),name:"Opera Mini",usage:"8.%"}],chart:{series:[65],options:{grid:{show:!1,padding:{left:-15,right:-15,top:-12,bottom:-15}},colors:[F["b"].primary],plotOptions:{radialBar:{hollow:{size:"22%"},track:{background:zt},dataLabels:{showOn:"always",name:{show:!1},value:{show:!1}}}},stroke:{lineCap:"round"}}}}},created:function(){for(var t=0;t<this.browserData.length;t+=1){var a=JSON.parse(JSON.stringify(this.chart));a.options.colors[0]=this.chartColor[t],a.series[0]=this.chartSeries[t],this.chartData.push(a)}}},jt=Ot,Yt=Object(g["a"])(jt,Ut,St,!1,null,null,null),Rt=Yt.exports,Tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{attrs:{"no-body":""}},[e("b-card-header",[e("h4",{staticClass:"mb-0"},[t._v(" Goal Overview ")]),e("b-card-text",{staticClass:"font-medium-5 mb-0"},[e("feather-icon",{staticClass:"text-muted cursor-pointer",attrs:{icon:"HelpCircleIcon",size:"21"}})],1)],1),e("vue-apex-charts",{staticClass:"my-2",attrs:{type:"radialBar",height:"245",options:t.goalOverviewRadialBar,series:t.data.series}}),e("b-row",{staticClass:"text-center mx-0"},[e("b-col",{staticClass:"border-top border-right d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" Completed ")]),e("h3",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(t.data.completed)+" ")])],1),e("b-col",{staticClass:"border-top d-flex align-items-between flex-column py-1",attrs:{cols:"6"}},[e("b-card-text",{staticClass:"text-muted mb-0"},[t._v(" In Progress ")]),e("h3",{staticClass:"font-weight-bolder mb-0"},[t._v(" "+t._s(t.data.inProgress)+" ")])],1)],1)],1):t._e()},It=[],Mt="#ebe9f1",Qt="#5e5873",Vt="#51e5a8",Ft={components:{VueApexCharts:V.a,BCard:l["a"],BCardHeader:x["a"],BRow:n["a"],BCardText:d["a"],BCol:o["a"]},props:{data:{type:Object,default:function(){}}},data:function(){return{goalOverviewRadialBar:{chart:{height:245,type:"radialBar",sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}},colors:[Vt],plotOptions:{radialBar:{offsetY:-10,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:Mt,strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{color:Qt,fontSize:"2.86rem",fontWeight:"600"}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[F["b"].success],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},grid:{padding:{bottom:30}}}}}},_t=Ft,Ht=Object(g["a"])(_t,Tt,It,!1,null,null,null),qt=Ht.exports,Xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.data?e("b-card",{staticClass:"card-transaction",attrs:{"no-body":""}},[e("b-card-header",[e("b-card-title",[t._v("Transactions")]),e("b-dropdown",{staticClass:"chart-dropdown",attrs:{variant:"link","no-caret":"","toggle-class":"p-0",right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("feather-icon",{staticClass:"text-body cursor-pointer",attrs:{icon:"MoreVerticalIcon",size:"18"}})]},proxy:!0}],null,!1,592634808)},[e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Last 28 Days ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Last Month ")]),e("b-dropdown-item",{attrs:{href:"#"}},[t._v(" Last Year ")])],1)],1),e("b-card-body",t._l(t.data,(function(a){return e("div",{key:a.mode,staticClass:"transaction-item"},[e("b-media",{attrs:{"no-body":""}},[e("b-media-aside",[e("b-avatar",{attrs:{rounded:"",size:"42",variant:a.avatarVariant}},[e("feather-icon",{attrs:{size:"18",icon:a.avatar}})],1)],1),e("b-media-body",[e("h6",{staticClass:"transaction-title"},[t._v(" "+t._s(a.mode)+" ")]),e("small",[t._v(t._s(a.types))])])],1),e("div",{staticClass:"font-weight-bolder",class:a.deduction?"text-danger":"text-success"},[t._v(" "+t._s(a.payment)+" ")])],1)})),0)],1):t._e()},Kt=[],Wt={components:{BCard:l["a"],BCardHeader:x["a"],BCardTitle:P["a"],BCardBody:E["a"],BMediaBody:S["a"],BMedia:k["a"],BMediaAside:U["a"],BAvatar:D["a"],BDropdown:I["a"],BDropdownItem:M["a"]},props:{data:{type:Array,default:function(){return[]}}}},Gt=Wt,Lt=Object(g["a"])(Gt,Xt,Kt,!1,null,null,null),Nt=Lt.exports,Zt={components:{BRow:n["a"],BCol:o["a"],EcommerceMedal:w,EcommerceStatistics:Y,EcommerceRevenueReport:X,EcommerceOrderChart:J,EcommerceProfitChart:nt,EcommerceEarningsChart:pt,EcommerceCompanyTable:Ct,EcommerceMeetup:Dt,EcommerceBrowserStates:Rt,EcommerceGoalOverview:qt,EcommerceTransactions:Nt},data:function(){return{data:{}}},created:function(){var t=this;this.$http.get("/ecommerce/data").then((function(a){t.data=a.data;var e=Object(i["b"])();t.data.congratulations.name=e.fullName.split(" ")[0]||e.username}))}},Jt=Zt,$t=(e("4011"),Object(g["a"])(Jt,r,s,!1,null,null,null));a["default"]=$t.exports}}]);