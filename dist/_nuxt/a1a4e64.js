(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4],{574:function(t,e,o){var content=o(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("c0c87d04",content,!0,{sourceMap:!1})},577:function(t,e,o){"use strict";o(574)},578:function(t,e,o){var n=o(16)(!1);n.push([t.i,".v-btn[data-v-4cfd7b02]{width:var(--width);padding:var(--padding)!important;background:var(--color)!important;font-size:var(--fontSize)!important;color:var(--textColor)!important;border:1px solid #1d4283}.v-btn--active.no-active[data-v-4cfd7b02]:before{opacity:0!important}",""]),t.exports=n},579:function(t,e,o){"use strict";o.r(e);var n=o(29),r=o(46),c=o(36),l=o(32),d=o(21),f=o(15),v=(o(11),o(3),o(74),o(65));function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var y=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},m=function(t){Object(c.a)(o,t);var e=x(o);function o(){var t;return Object(n.a)(this,o),(t=e.apply(this,arguments)).text=t.buttonText,t.cssVars={"--padding":t.buttonPadding,"--width":t.buttonWidth,"--color":t.buttonColor,"--fontSize":t.buttonFontSize,"--textColor":t.buttonTextColor},t.dialog=!1,t}return Object(r.a)(o,[{key:"openDialog",value:function(){this.$nuxt.$emit("trigger-dialog")}}]),o}(v.Vue);y([Object(v.Prop)(String)],m.prototype,"buttonWidth",void 0),y([Object(v.Prop)({default:"min(26px, 2vw)"})],m.prototype,"buttonPadding",void 0),y([Object(v.Prop)({default:"#1D4283"})],m.prototype,"buttonColor",void 0),y([Object(v.Prop)({default:"#ffffff"})],m.prototype,"buttonTextColor",void 0),y([Object(v.Prop)({default:"Apply Now"})],m.prototype,"buttonText",void 0),y([Object(v.Prop)({default:"24px"})],m.prototype,"buttonFontSize",void 0);var h=m=y([v.Component],m),_=(o(577),o(87)),j=o(94),O=o.n(j),C=o(546),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-btn",{staticClass:"\n\t\twhite--text\n\t\tfont-weight-bold\n\t\ttext-h6\n\t\tapply-btn\n\t\ttext-capitalize\n\t\trounded-lg\n\t",style:t.cssVars,attrs:{to:"#","active-class":"no-active"},on:{click:t.openDialog}},[t._v("\n\t"+t._s(t.buttonText)+"\n")])}),[],!1,null,"4cfd7b02",null);e.default=component.exports;O()(component,{VBtn:C.a})},607:function(t,e,o){var content=o(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("c69c52ae",content,!0,{sourceMap:!1})},632:function(t,e,o){"use strict";o(607)},633:function(t,e,o){var n=o(16)(!1);n.push([t.i,"div>.v-row>.v-col[data-v-35035da2]{margin:0!important}.columns[data-v-35035da2]{margin:var(--margin)!important}",""]),t.exports=n},651:function(t,e,o){"use strict";o.r(e);o(74);var n=o(29),r=o(46),c=o(36),l=o(32),d=o(21),f=o(15),v=(o(11),o(3),o(30),o(65));function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var y=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},m=function(t){Object(c.a)(o,t);var e=x(o);function o(){return Object(n.a)(this,o),e.apply(this,arguments)}return Object(r.a)(o,[{key:"showButton",get:function(){if("products___ar"===this.$route.name||"products___en"===this.$route.name)return!0}},{key:"mounted",value:function(){console.log(this.$route.name)}}]),o}(v.Vue);y([Object(v.Prop)(Array)],m.prototype,"products",void 0);var h=m=y([v.Component],m),_=(o(632),o(87)),j=o(94),O=o.n(j),C=o(546),w=o(125),R=o(562),P=o(222),k=o(566),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",{attrs:{justify:"center"}},t._l(t.products,(function(e){return o("v-col",{key:e.id,staticClass:"columns",attrs:{cols:"12"}},[o("div",{staticClass:"mx-auto"},[o("v-row",[o("v-col",{staticClass:"pa-0",attrs:{order:t.$vuetify.breakpoint.sm?3:2,cols:"12",md:"6"}},[o("v-img",{staticClass:"mx-3 mx-md-0",class:"en"===t.$i18n.locale?"rounded-r-xl rounded-l-none":"rounded-l-xl rounded-r-none",staticStyle:{"object-fit":"cover"},attrs:{src:e.image,"max-height":"516","min-height":"431"}})],1),t._v(" "),o("v-col",{staticClass:"d-flex flex-column",attrs:{order:"1",cols:"12",md:"6"}},[o("v-card-title",{staticClass:"\n\t\t\t\t\t\t\t\tprimary--text\n\t\t\t\t\t\t\t\ttext-h5 text-md-h5\n\t\t\t\t\t\t\t\tpy-md-0\n\t\t\t\t\t\t\t\ttext-lg-h4\n\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t\tmt-sm-2\n\t\t\t\t\t\t\t\tmx-2\n\t\t\t\t\t\t\t"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),o("v-card-text",{staticClass:"info--text py-md-0 mx-2 mt-auto text-body-1"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.info)+"\n\t\t\t\t\t\t")]),t._v(" "),o("v-card-text",{staticClass:"\n\t\t\t\t\t\t\t\tprimary--text\n\t\t\t\t\t\t\t\tpb-md-2\n\t\t\t\t\t\t\t\tmt-auto\n\t\t\t\t\t\t\t\tmx-2\n\t\t\t\t\t\t\t\ttext-h5 text-lg-h4\n\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t"},[t._v(t._s(t.$t("howItWorks")))]),t._v(" "),o("v-card-text",{staticClass:"py-md-0"},t._l(e.guides,(function(e,i){return o("ul",{key:i,staticClass:"info--text px-4"},[o("li",{staticClass:"text-body-1 pt-lg-1"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t\t")])])})),0),t._v(" "),o("v-card-actions",{staticClass:"mx-4 py-md-0 mt-auto"},[o("apply-now-button",{attrs:{buttonPadding:"26px 20px",buttonWidth:"150px",buttonColor:"#1D4283",buttonText:"ar"===t.$i18n.locale?"قدّم":"Apply",buttonFontSize:"16px"}}),t._v(" "),t.showButton?o("v-btn",{staticClass:"rounded-lg mx-4 text-body-1 text-capitalize",attrs:{to:t.localeRoute(e.link),"x-large":"",outlined:"",color:"secondary"}},[t._v(t._s(t.$t("detailsButton")))]):t._e()],1)],1)],1)],1)])})),1)],1)}),[],!1,null,"35035da2",null);e.default=component.exports;O()(component,{ApplyNowButton:o(579).default}),O()(component,{VBtn:C.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:R.a,VImg:P.a,VRow:k.a})}}]);