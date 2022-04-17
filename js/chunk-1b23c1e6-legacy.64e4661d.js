(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b23c1e6"],{1079:function(n,e,t){"use strict";var a=t("541c");e["a"]=a["a"]},"541c":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card",n._g(n._b({attrs:{"no-body":""}},"b-card",n.cardAttrs,!1),n.$listeners),[t("div",{staticClass:"card-header"},[t("div",[t("b-card-title",[n._v(n._s(n.$attrs.title))]),n.$attrs["sub-title"]?t("b-card-sub-title",[n._v(" "+n._s(n.$attrs["sub-title"])+" ")]):n._e()],1),t("i",{staticClass:"code-toggler feather icon-code cursor-pointer",attrs:{"aria-expanded":n.code_visible?"false":"true","aria-controls":n.parentID},on:{click:function(e){n.code_visible=!n.code_visible}}})]),void 0!==n.$attrs["no-body"]?[n._t("default"),t("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[t("b-card-body",[t("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],1)]:t("b-card-body",[n._t("default"),t("b-collapse",{staticClass:"card-code",attrs:{id:n.parentID,visible:n.code_visible},model:{value:n.code_visible,callback:function(e){n.code_visible=e},expression:"code_visible"}},[t("div",{staticClass:"p-1"}),t("prism",{attrs:{language:n.codeLanguage}},[n._t("code")],2)],1)],2)],2)},i=[],o=(t("e9c4"),t("205f")),s=t("4968"),r=t("ba06"),l=t("6197"),c=t("5843"),d=(t("c197"),t("84bf"),t("8d51")),m=t.n(d),b={components:{BCard:o["a"],BCardTitle:s["a"],BCardSubTitle:r["a"],BCardBody:l["a"],BCollapse:c["a"],Prism:m.a},inheritAttrs:!1,props:{codeLanguage:{default:"markup",type:String}},data:function(){return{parentID:"",code_visible:!1}},computed:{cardAttrs:function(){var n=JSON.parse(JSON.stringify(this.$attrs));return delete n.title,delete n["sub-title"],n}},created:function(){this.parentID=String(Math.floor(10*Math.random())+1)}},u=b,p=(t("8d54"),t("2877")),g=Object(p["a"])(u,a,i,!1,null,"aa799a9e",null);e["a"]=g.exports},"8d54":function(n,e,t){"use strict";t("ecda")},9535:function(n,e,t){n.exports=t.p+"img/banner-6.8e3bf2b9.jpg"},ecda:function(n,e,t){},f4dd:function(n,e,t){n.exports=t.p+"img/banner-34.61156fc9.jpg"},fbe8:function(n,e,t){"use strict";t.r(e);var a,i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-row",[t("b-col",[t("images-basic"),t("images-responsive"),t("images-thumbnails"),t("images-rounded-corner"),t("images-alignment"),t("images-blank"),t("images-lazy")],1)],1)},o=[],s=t("a15b7"),r=t("b28b"),l=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Images"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBasic)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Documentation and examples for opting images (via ")]),a("code",[n._v("<b-img>")]),a("span",[n._v(" component) into responsive behavior (so they never become larger than their parent elements), optionally adding lightweight styles to them — all via props. ")])]),a("b-img",{staticClass:"w-100",attrs:{src:t("9535"),fluid:"",alt:"Responsive image"}})],1)},c=[],d=t("1079"),m=t("d6e4"),b=t("4918"),u='\n<template>\n  <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n',p='\n<template>\n  <div class="clearfix">\n    <b-img  left class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Left image\')"/>\n    <b-img right class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Right image\')"/>\n    <b-img center class="mb-1 mb-sm-0" height="120" :src="require(\'@/assets/images/banner/banner-34.jpg" alt="Center image\')"/>\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  }\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Transparent image"\n      class="d-inline-block mr-1 mb-1 border"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#5A8DEE"\n      rounded\n      alt="HEX shorthand color image (#777)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#475F7B"\n      rounded\n      alt="Named color image (red)"\n      class="d-inline-block mr-1 mb-1"\n    />\n\n    <b-img\n      v-bind="mainProps"\n      blank-color="#39DA8A"\n      rounded\n      alt="Named color image (black)"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FF5B5C"\n      rounded\n      alt="HEX color image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#FDAC41"\n      alt="RGBa color image"\n      rounded\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      blank-color="#00CFDD"\n      rounded\n      alt="HEX shorthand color (#88f)"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n',h='\n<template>\n  <div>\n    <h6>Small image with <code>fluid</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid alt="Fluid image\')" />\n\n    <h6 class="my-1">Small image with <code>fluid-grow</code>:</h6>\n    <b-img :src="require(\'@/assets/images/water-drop-small.jpg" fluid-grow alt="Fluid-grow image\')" />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n  },\n}\n<\/script>\n',f='\n<template>\n  <div>\n    <b-img\n      v-bind="mainProps"\n      rounded\n      alt="Rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="top"\n      alt="Top-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="right"\n      alt="Right-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="bottom"\n      alt="Bottom-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="left"\n      alt="Left-rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="circle"\n      alt="Circle image"\n      class="d-inline-block mr-1 mb-1"\n    />\n    <b-img\n      v-bind="mainProps"\n      rounded="0"\n      alt="Not rounded image"\n      class="d-inline-block mr-1 mb-1"\n    />\n  </div>\n</template>\n\n<script>\nimport { BImg } from \'bootstrap-vue\'\n\nexport default {\n BImg, },\n  data: () => ({\n    mainProps: {\n      blank: true,\n      blankColor: \'#777\',\n      width: 75,\n      height: 75,\n      class: \'m1\',\n    },\n  }),\n}\n<\/script>\n',v='\n<template>\n  <b-container fluid class="p-1 bg-dark">\n    <b-row>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/sky-high.jpg" alt="Image 1\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/light-house-thumb.jpg" alt="Image 2\')" />\n      </b-col>\n      <b-col>\n        <b-img thumbnail fluid :src="require(\'@/assets/images/border.jpg" alt="Image 3\')" />\n      </b-col>\n    </b-row>\n  </b-container>\n</template>\n\n<script>\nimport { BImg, BContainer, BRow, BCol } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BImg,\n    BContainer,\n    BRow,\n    BCol,\n  },\n}\n<\/script>\n',_="\n<template>\n  <div>\n    <b-img-lazy :src=\"require('@/assets/images/banner/banner-6.jpg\" fluid class=\"w-100')\"/>\n  </div>\n</template>\n\n<script>\nimport { BImgLazy } from 'bootstrap-vue'\n\nexport default {\n  components: {\n    BImgLazy,\n  },\n}\n<\/script>\n",k={components:{BCardCode:d["a"],BCardText:m["a"],BImg:b["a"]},data:function(){return{codeBasic:u}}},C=k,w=t("2877"),B=Object(w["a"])(C,l,c,!1,null,null,null),y=B.exports,x=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Responsive images"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeResponsive)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Images in BootstrapVue can be made responsive with the ")]),a("code",[n._v("fluid")]),a("span",[n._v(" prop (which sets ")]),a("code",[n._v("max-width: 100%; height: auto;")]),a("span",[n._v(" via CSS classes) so that it scales with the parent element - up to the maximum native width of the image. ")])]),a("div",[a("h6",[n._v("Small image with "),a("code",[n._v("fluid")]),n._v(":")]),a("b-img",{attrs:{src:t("18ff"),fluid:"",alt:"Fluid image"}}),a("h6",{staticClass:"my-1"},[n._v(" Small image with "),a("code",[n._v("fluid-grow")]),n._v(": ")]),a("b-img",{attrs:{src:t("18ff"),"fluid-grow":"",alt:"Fluid-grow image"}})],1)],1)},S=[],j={components:{BCardCode:d["a"],BCardText:m["a"],BImg:b["a"]},data:function(){return{codeResponsive:h}}},P=j,I=Object(w["a"])(P,x,S,!1,null,null,null),O=I.exports,R=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Image thumbnails"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeThumbnails)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("You can use prop ")]),a("code",[n._v("thumbnail")]),a("span",[n._v("to give an image a rounded light border appearance.")])]),a("b-container",{staticClass:"p-1 bg-dark",attrs:{fluid:""}},[a("b-row",[a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t("f7d6"),alt:"Image 1"}})],1),a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t("3e88"),alt:"Image 2"}})],1),a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:t("e251"),alt:"Image 3"}})],1)],1)],1)],1)},E=[],D=t("1bbb"),$={components:{BCardCode:d["a"],BImg:b["a"],BContainer:D["a"],BCardText:m["a"],BRow:s["a"],BCol:r["a"]},data:function(){return{codeThumbnails:v}}},T=$,z=Object(w["a"])(T,R,E,!1,null,null,null),A=z.exports,L=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Rounded corners"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeRoundedCorner)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("span",[n._v("You can control which corners are rounded by setting the rounded prop to one of the following values:")]),t("code",[n._v("true,false,top,right,bottom,left,circle,0")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"",alt:"Rounded image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"top",alt:"Top-rounded image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"right",alt:"Right-rounded image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"bottom",alt:"Bottom-rounded image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"left",alt:"Left-rounded image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"circle",alt:"Circle image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{rounded:"0",alt:"Not rounded image"}},"b-img",n.mainProps,!1))],1)],1)},F=[],H={components:{BCardCode:d["a"],BImg:b["a"],BCardText:m["a"]},data:function(){return{mainProps:{blank:!0,blankColor:"#777",width:75,height:75,class:"m1"},codeRoundedCorner:f}}},q=H,N=Object(w["a"])(q,L,F,!1,null,null,null),X=N.exports,J=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Aligning images"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeAlignment)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Align images with the boolean props ")]),a("code",[n._v("left")]),a("span",[n._v(" (floats left) ")]),a("code",[n._v("right")]),a("span",[n._v("(floats right), and ")]),a("code",[n._v("center")]),a("span",[n._v("(auto left+right margins). You can also center images by placing them in a container that has the class ")]),a("code",[n._v("text-center.")])]),a("div",{staticClass:"clearfix"},[a("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{left:"",height:"120",src:t("f4dd"),alt:"Left image"}}),a("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{right:"",height:"120",src:t("f4dd"),alt:"Right image"}}),a("b-img",{staticClass:"mb-1 mb-sm-0",attrs:{center:"",height:"120",src:t("f4dd"),alt:"Center image"}})],1)],1)},W=[],Y={components:{BCardCode:d["a"],BCardText:m["a"],BImg:b["a"]},data:function(){return{codeAlignment:p}}},G=Y,M=Object(w["a"])(G,J,W,!1,null,null,null),U=M.exports,V=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("b-card-code",{attrs:{title:"Blank (or solid color) images"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeBlank)+" ")]},proxy:!0}])},[t("b-card-text",{staticClass:"mb-0"},[t("code",[n._v("<b-img>")]),t("span",[n._v(" provides built-in support for generating blank images (transparent by default) of any width and height, by setting the ")]),t("code",[n._v("blank")]),t("span",[n._v(" prop, and specifying ")]),t("code",[n._v("width")]),t("span",[n._v(" and ")]),t("code",[n._v("height")]),t("span",[n._v("values (in pixels). You can apply any of the other ")]),t("code",[n._v("<b-img>")]),t("span",[n._v(" props to change the style/behavior of the generated image.")])]),t("div",{staticClass:"demo-inline-spacing"},[t("b-img",n._b({staticClass:"d-inline-block border",attrs:{rounded:"",alt:"Transparent image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{"blank-color":"#5A8DEE",rounded:"",alt:"HEX shorthand color image (#777)"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{"blank-color":"#82868b",rounded:"",alt:"Named color image (red)"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{"blank-color":"#39DA8A",rounded:"",alt:"Named color image (black)"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FDAC41",alt:"RGBa color image",rounded:""}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{"blank-color":"#FF5B5C",rounded:"",alt:"HEX color image"}},"b-img",n.mainProps,!1)),t("b-img",n._b({staticClass:"d-inline-block",attrs:{"blank-color":"#00CFDD",rounded:"",alt:"HEX shorthand color (#88f)"}},"b-img",n.mainProps,!1))],1)],1)},K=[],Q={components:{BCardCode:d["a"],BCardText:m["a"],BImg:b["a"]},data:function(){return{mainProps:{blank:!0,width:75,height:75,class:"m1"},codeBlank:g}}},Z=Q,nn=Object(w["a"])(Z,V,K,!1,null,null,null),en=nn.exports,tn=function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("b-card-code",{attrs:{title:"Lazy loaded images"},scopedSlots:n._u([{key:"code",fn:function(){return[n._v(" "+n._s(n.codeLazy)+" ")]},proxy:!0}])},[a("b-card-text",[a("span",[n._v("Use our complementary ")]),a("code",[n._v("<b-img-lazy>")]),a("span",[n._v(" image component (based on ")]),a("code",[n._v("<b-img>")]),a("span",[n._v(") to lazy load images as they are scrolled into view (or within ")]),a("code",[n._v("offset")]),a("span",[n._v(" pixels of the viewport).")])]),a("b-img-lazy",{staticClass:"w-100",attrs:{src:t("9535"),fluid:""}})],1)},an=[],on=t("2b0e"),sn=t("c637"),rn=t("e863"),ln=t("0056"),cn=t("a723"),dn=t("2326"),mn=t("6c06"),bn=t("3a58"),un=t("d82f"),pn=t("cf75"),gn=t("6976");function hn(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function fn(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?hn(Object(t),!0).forEach((function(e){vn(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):hn(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function vn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var _n="show",kn=ln["gb"]+_n,Cn=Object(un["j"])(b["b"],["blank"]),wn=Object(pn["d"])(fn(fn({},Cn),{},vn({blankColor:Object(pn["c"])(cn["u"],"transparent"),blankHeight:Object(pn["c"])(cn["p"]),blankSrc:Object(pn["c"])(cn["u"],null),blankWidth:Object(pn["c"])(cn["p"]),offset:Object(pn["c"])(cn["p"],360)},_n,Object(pn["c"])(cn["g"],!1))),sn["lb"]),Bn=on["default"].extend({name:sn["lb"],directives:{"b-visible":gn["a"]},props:wn,data:function(){return{isShown:this[_n]}},computed:{computedSrc:function(){var n=this.blankSrc;return!n||this.isShown?this.src:n},computedBlank:function(){return!(this.isShown||this.blankSrc)},computedWidth:function(){var n=this.width;return this.isShown?n:this.blankWidth||n},computedHeight:function(){var n=this.height;return this.isShown?n:this.blankHeight||n},computedSrcset:function(){var n=Object(dn["b"])(this.srcset).filter(mn["a"]).join(",");return!this.blankSrc||this.isShown?n:null},computedSizes:function(){var n=Object(dn["b"])(this.sizes).filter(mn["a"]).join(",");return!this.blankSrc||this.isShown?n:null}},watch:(a={},vn(a,_n,(function(n,e){if(n!==e){var t=!rn["b"]||n;this.isShown=t,t!==n&&this.$nextTick(this.updateShowProp)}})),vn(a,"isShown",(function(n,e){n!==e&&this.updateShowProp()})),a),mounted:function(){this.isShown=!rn["b"]||this[_n]},methods:{updateShowProp:function(){this.$emit(kn,this.isShown)},doShow:function(n){!n&&null!==n||this.isShown||(this.isShown=!0)}},render:function(n){var e,t=[];this.isShown||t.push({name:"b-visible",value:this.doShow,modifiers:(e={},vn(e,"".concat(Object(bn["c"])(this.offset,0)),!0),vn(e,"once",!0),e)});return n(b["a"],{directives:t,props:fn({src:this.computedSrc,blank:this.computedBlank,width:this.computedWidth,height:this.computedHeight,srcset:this.computedSrcset||null,sizes:this.computedSizes||null},Object(pn["e"])(Cn,this.$props))})}}),yn={components:{BCardCode:d["a"],BImgLazy:Bn,BCardText:m["a"]},data:function(){return{codeLazy:_}}},xn=yn,Sn=Object(w["a"])(xn,tn,an,!1,null,null,null),jn=Sn.exports,Pn={components:{BRow:s["a"],BCol:r["a"],ImagesBasic:y,ImagesResponsive:O,ImagesThumbnails:A,ImagesRoundedCorner:X,ImagesAlignment:U,ImagesBlank:en,ImagesLazy:jn}},In=Pn,On=Object(w["a"])(In,i,o,!1,null,null,null);e["default"]=On.exports}}]);