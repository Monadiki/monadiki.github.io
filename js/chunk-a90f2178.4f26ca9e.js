(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a90f2178"],{"0661":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"inherit"}},[a("section",{attrs:{id:"ecommerce-header"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"ecommerce-header-items"},[a("div",{staticClass:"result-toggler"},[a("feather-icon",{staticClass:"d-block d-lg-none",attrs:{icon:"MenuIcon",size:"21"},on:{click:function(e){t.mqShallShowLeftSidebar=!0}}}),a("div",{staticClass:"search-results"},[t._v(" "+t._s(t.totalProducts)+" results found ")])],1),a("div",{staticClass:"view-options d-flex"},[a("b-dropdown",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{text:t.sortBy.text,right:"",variant:"outline-primary"}},t._l(t.sortByOptions,(function(e){return a("b-dropdown-item",{key:e.value,on:{click:function(a){t.sortBy=e}}},[t._v(" "+t._s(e.text)+" ")])})),1),a("b-form-radio-group",{staticClass:"ml-1 list item-view-radio-group",attrs:{buttons:"",size:"sm","button-variant":"outline-primary"},model:{value:t.itemView,callback:function(e){t.itemView=e},expression:"itemView"}},t._l(t.itemViewOptions,(function(t){return a("b-form-radio",{key:t.value,attrs:{value:t.value}},[a("feather-icon",{attrs:{icon:t.icon,size:"18"}})],1)})),1)],1)])])])]),a("div",{staticClass:"body-content-overlay"}),a("div",{staticClass:"ecommerce-searchbar mt-1"},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-input-group",{staticClass:"input-group-merge"},[a("b-form-input",{staticClass:"search-product",attrs:{placeholder:"Search Product"},model:{value:t.filters.q,callback:function(e){t.$set(t.filters,"q",e)},expression:"filters.q"}}),a("b-input-group-append",{attrs:{"is-text":""}},[a("feather-icon",{staticClass:"text-muted",attrs:{icon:"SearchIcon"}})],1)],1)],1)],1)],1),a("section",{class:t.itemView},t._l(t.products,(function(e){return a("b-card",{key:e.id,staticClass:"ecommerce-card",attrs:{"no-body":""}},[a("div",{staticClass:"item-img text-center"},[a("b-link",{attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:e.slug}}}},[a("b-img",{staticClass:"card-img-top",attrs:{alt:e.name+"-"+e.id,fluid:"",src:e.image}})],1)],1),a("b-card-body",[a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"item-rating"},[a("ul",{staticClass:"unstyled-list list-inline"},t._l(5,(function(t){return a("li",{key:t,staticClass:"ratings-list-item",class:{"ml-25":t-1}},[a("feather-icon",{class:[{"fill-current":t<=e.rating},t<=e.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"16"}})],1)})),0)]),a("div",[a("h6",{staticClass:"item-price"},[t._v(" $"+t._s(e.price)+" ")])])]),a("h6",{staticClass:"item-name"},[a("b-link",{staticClass:"text-body",attrs:{to:{name:"apps-e-commerce-product-details",params:{slug:e.slug}}}},[t._v(" "+t._s(e.name)+" ")]),a("b-card-text",{staticClass:"item-company"},[t._v(" By "),a("b-link",{staticClass:"ml-25"},[t._v(" "+t._s(e.brand)+" ")])],1)],1),a("b-card-text",{staticClass:"item-description"},[t._v(" "+t._s(e.description)+" ")])],1),a("div",{staticClass:"item-options text-center"},[a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"item-cost"},[a("h4",{staticClass:"item-price"},[t._v(" $"+t._s(e.price)+" ")])])]),a("b-button",{staticClass:"btn-wishlist",attrs:{variant:"light",tag:"a"},on:{click:function(a){return t.toggleProductInWishlist(e)}}},[a("feather-icon",{staticClass:"mr-50",class:{"text-danger":e.isInWishlist},attrs:{icon:"HeartIcon"}}),a("span",[t._v("Wishlist")])],1),a("b-button",{staticClass:"btn-cart",attrs:{variant:"primary",tag:"a"},on:{click:function(a){return t.handleCartActionClick(e)}}},[a("feather-icon",{staticClass:"mr-50",attrs:{icon:"ShoppingCartIcon"}}),a("span",[t._v(t._s(e.isInCart?"View In Cart":"Add to Cart"))])],1)],1)],1)})),1),a("section",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-pagination",{attrs:{"total-rows":t.totalProducts,"per-page":t.filters.perPage,"first-number":"",align:"center","last-number":"","prev-class":"prev-item","next-class":"next-item"},scopedSlots:t._u([{key:"prev-text",fn:function(){return[a("feather-icon",{attrs:{icon:"ChevronLeftIcon",size:"18"}})]},proxy:!0},{key:"next-text",fn:function(){return[a("feather-icon",{attrs:{icon:"ChevronRightIcon",size:"18"}})]},proxy:!0}]),model:{value:t.filters.page,callback:function(e){t.$set(t.filters,"page",e)},expression:"filters.page"}})],1)],1)],1),a("portal",{attrs:{to:"content-renderer-sidebar-detached-left"}},[a("shop-left-filter-sidebar",{attrs:{filters:t.filters,"filter-options":t.filterOptions,"mq-shall-show-left-sidebar":t.mqShallShowLeftSidebar},on:{"update:mqShallShowLeftSidebar":function(e){t.mqShallShowLeftSidebar=e},"update:mq-shall-show-left-sidebar":function(e){t.mqShallShowLeftSidebar=e}}})],1)],1)},i=[],r=a("dd9a"),o=a("9eaa"),c=a("2924"),n=a("9e14e"),l=a("a15b"),d=a("b28b"),u=a("5e12"),p=a("ccc0"),m=a("4797"),f=a("205f"),h=a("6197"),b=a("aa59"),g=a("4918"),v=a("d6e4"),C=a("1947"),w=a("26d2"),S=a("e009"),I=a("ed09"),x=a("1bd7"),_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar-detached sidebar-left"},[a("div",{staticClass:"sidebar"},[a("div",{staticClass:"sidebar-shop",class:{show:t.mqShallShowLeftSidebar}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("h6",{staticClass:"filter-heading d-none d-lg-block"},[t._v(" Filters ")])])],1),a("b-card",[a("div",{staticClass:"multi-range-price"},[a("h6",{staticClass:"filter-title mt-0"},[t._v(" Multi Range ")]),a("b-form-radio-group",{staticClass:"price-range-defined-radio-group",attrs:{stacked:"",options:t.filterOptions.priceRangeDefined},model:{value:t.filters.priceRangeDefined,callback:function(e){t.$set(t.filters,"priceRangeDefined",e)},expression:"filters.priceRangeDefined"}})],1),a("div",{staticClass:"price-slider"},[a("h6",{staticClass:"filter-title"},[t._v(" Price Range ")]),a("vue-slider",{attrs:{direction:t.$store.state.appConfig.isRTL?"rtl":"ltr"},model:{value:t.filters.priceRange,callback:function(e){t.$set(t.filters,"priceRange",e)},expression:"filters.priceRange"}})],1),a("div",{staticClass:"product-categories"},[a("h6",{staticClass:"filter-title"},[t._v(" Categories ")]),a("b-form-radio-group",{staticClass:"categories-radio-group",attrs:{stacked:"",options:t.filterOptions.categories},model:{value:t.filters.categories,callback:function(e){t.$set(t.filters,"categories",e)},expression:"filters.categories"}})],1),a("div",{staticClass:"brands"},[a("h6",{staticClass:"filter-title"},[t._v(" Brands ")]),a("b-form-radio-group",{staticClass:"brands-radio-group",attrs:{stacked:"",options:t.filterOptions.brands},model:{value:t.filters.brands,callback:function(e){t.$set(t.filters,"brands",e)},expression:"filters.brands"}})],1),a("div",{staticClass:"ratings"},[a("h6",{staticClass:"filter-title"},[t._v(" Ratings ")]),t._l(t.filterOptions.ratings,(function(e){return a("div",{key:e.rating,staticClass:"ratings-list"},[a("b-link",[a("div",{staticClass:"d-flex"},[t._l(5,(function(t){return a("feather-icon",{key:t,class:[{"fill-current":t<=e.rating},t<=e.rating?"text-warning":"text-muted"],attrs:{icon:"StarIcon",size:"17"}})})),a("span",{staticClass:"ml-25"},[t._v("& up")])],2)]),a("div",{staticClass:"stars-received"},[a("span",[t._v(t._s(e.count))])])],1)}))],2)])],1)]),a("div",{staticClass:"body-content-overlay",class:{show:t.mqShallShowLeftSidebar},on:{click:function(e){return t.$emit("update:mq-shall-show-left-sidebar",!1)}}})])},k=[],y=a("4971"),O=a.n(y),B={components:{BRow:l["a"],BCol:d["a"],BFormRadioGroup:c["a"],BLink:b["a"],BCard:f["a"],VueSlider:O.a},props:{filters:{type:Object,required:!0},filterOptions:{type:Object,required:!0},mqShallShowLeftSidebar:{type:Boolean,required:!0}}},P=B,R=(a("9e41"),a("fc05"),a("2877")),q=Object(R["a"])(P,_,k,!1,null,"0f9303ea",null),$=q.exports,j=a("4360");const W=()=>{const t=Object(I["ref"])({q:"",priceRangeDefined:"all",priceRange:[0,100],categories:[],brands:[],ratings:null,page:1,perPage:9}),e={priceRangeDefined:[{text:"All",value:"all"},{text:"<= $10",value:"<=10"},{text:"$10 - $100",value:"10-100"},{text:"$100 - $500",value:"100-500"},{text:">= $500",value:">=500"}],categories:["Appliances","Audio","Cameras & Camcorders","Car Electronics & GPS","Cell Phones","Computers & Tablets","Health, Fitness & Beauty","Office & School Supplies","TV & Home Theater","Video Games"],brands:["Insignia™","Samsung","Metra","HP","Apple","GE","Sony","Incipio","KitchenAid","Whirlpool"],ratings:[{rating:4,count:160},{rating:3,count:176},{rating:2,count:291},{rating:1,count:190}]},a=Object(I["ref"])({text:"Featured",value:"featured"}),s=[{text:"Featured",value:"featured"},{text:"Lowest",value:"price-asc"},{text:"Highest",value:"price-desc"}];return{filters:t,filterOptions:e,sortBy:a,sortByOptions:s}},L=()=>{const t="grid-view",e=[{icon:"GridIcon",value:"grid-view"},{icon:"ListIcon",value:"list-view"}],a=Object(I["ref"])(null);return{itemView:t,itemViewOptions:e,totalProducts:a}},F=()=>{const t=Object(I["ref"])([]),e=(...t)=>j["a"].dispatch("app-ecommerce/fetchProducts",...t);return{products:t,fetchProducts:e}};var A=a("e316"),V={directives:{Ripple:S["a"]},components:{BDropdown:r["a"],BDropdownItem:o["a"],BFormRadioGroup:c["a"],BFormRadio:n["a"],BRow:l["a"],BCol:d["a"],BInputGroup:u["a"],BInputGroupAppend:p["a"],BFormInput:m["a"],BCard:f["a"],BCardBody:h["a"],BLink:b["a"],BImg:g["a"],BCardText:v["a"],BButton:C["a"],BPagination:w["a"],ShopLeftFilterSidebar:$},setup(){const{filters:t,filterOptions:e,sortBy:a,sortByOptions:s}=W(),{handleCartActionClick:i,toggleProductInWishlist:r}=Object(A["b"])(),{itemView:o,itemViewOptions:c,totalProducts:n}=L(),{products:l,fetchProducts:d}=F(),{mqShallShowLeftSidebar:u}=Object(x["a"])(),p=()=>{d({q:t.value.q,sortBy:a.value.value,page:t.value.page,perPage:t.value.perPage}).then(t=>{l.value=t.data.products,n.value=t.data.total})};return p(),Object(I["watch"])([t,a],()=>{p()},{deep:!0}),{filters:t,filterOptions:e,sortBy:a,sortByOptions:s,itemView:o,itemViewOptions:c,totalProducts:n,toggleProductInWishlist:r,handleCartActionClick:i,products:l,mqShallShowLeftSidebar:u}}},D=V,T=(a("8330"),a("06e9"),Object(R["a"])(D,s,i,!1,null,"15eba8c6",null));e["default"]=T.exports},"06e9":function(t,e,a){"use strict";a("c67d")},"195a":function(t,e,a){},"1bd7":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("4360"),i=a("ed09");const r=()=>{const t=Object(i["ref"])(!1),e=Object(i["computed"])(()=>s["a"].getters["app/currentBreakPoint"]);return Object(i["watch"])(e,(e,a)=>{"md"===a&&"lg"===e&&(t.value=!1)}),{mqShallShowLeftSidebar:t}}},8330:function(t,e,a){"use strict";a("b9a2")},"9e41":function(t,e,a){"use strict";a("c789")},b9a2:function(t,e,a){},c67d:function(t,e,a){},c789:function(t,e,a){},ca6e:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return n}));var s=a("a18c"),i=a("ed09");const r=t=>"object"===typeof t&&null!==t,o=t=>{const e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()},c=t=>{const{route:e}=s["a"].resolve(t);return e.path===s["a"].currentRoute.path},n=()=>{const t=Object(i["getCurrentInstance"])().proxy,e=Object(i["reactive"])({route:t.$route});return Object(i["watch"])(()=>t.$route,t=>{e.route=t}),{...Object(i["toRefs"])(e),router:t.$router}}},e316:function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return o}));var s=a("4360"),i=a("ca6e");const r=()=>{const t=t=>s["a"].dispatch("app-ecommerce/addProductInWishlist",{productId:t}),e=t=>s["a"].dispatch("app-ecommerce/removeProductFromWishlist",{productId:t}),a=t=>s["a"].dispatch("app-ecommerce/addProductInCart",{productId:t}),i=t=>s["a"].dispatch("app-ecommerce/removeProductFromCart",{productId:t});return{addProductInWishlist:t,removeProductFromWishlist:e,addProductInCart:a,removeProductFromCart:i}},o=()=>{const{router:t}=Object(i["d"])(),e=t=>{const{addProductInWishlist:e,removeProductFromWishlist:a}=r();t.isInWishlist?a(t.id).then(()=>{t.isInWishlist=!1}):e(t.id).then(()=>{t.isInWishlist=!0})},a=e=>{const{addProductInCart:a}=r();e.isInCart?t.push({name:"apps-e-commerce-checkout"}):a(e.id).then(()=>{e.isInCart=!0,s["a"].commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",s["a"].state["app-ecommerce"].cartItemsCount+1)})},o=(e,a)=>{const{addProductInCart:i,removeProductFromWishlist:o}=r();e.isInCart?t.push({name:"apps-e-commerce-checkout"}):i(e.id).then(()=>{e.isInCart=!0,o(e.id),s["a"].commit("app-ecommerce/UPDATE_CART_ITEMS_COUNT",s["a"].state["app-ecommerce"].cartItemsCount+1)}).then(()=>{e.isInWishlist=!1,a(e)})};return{toggleProductInWishlist:e,handleCartActionClick:a,handleWishlistCartActionClick:o}}},fc05:function(t,e,a){"use strict";a("195a")}}]);