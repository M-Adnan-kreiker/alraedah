(window.webpackJsonp=window.webpackJsonp||[]).push([[25,14],{536:function(t,e,n){var content=n(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("0f373e98",content,!0,{sourceMap:!1})},553:function(t,e,n){"use strict";n(536)},554:function(t,e,n){var o=n(14)(!1);o.push([t.i,"div>.v-row>.v-col[data-v-225b380e]{margin:0!important}.columns[data-v-225b380e]{margin:var(--margin)!important}",""]),t.exports=o},562:function(t,e,n){"use strict";n.r(e);n(68);var o=n(25),r=n(40),c=n(31),l=n(27),d=n(19),f=n(13),m=(n(9),n(28),n(47));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).styles={"--margin":t.marginColumn},t}return Object(r.a)(n,[{key:"margin",get:function(){return this.marginColumn}},{key:"showButton",get:function(){if("products___ar"===this.$route.name||"products___en"===this.$route.name)return!0}},{key:"mounted",value:function(){console.log(this.$route.name)}}]),n}(m.Vue);x([Object(m.Prop)(Array)],y.prototype,"products",void 0),x([Object(m.Prop)(String)],y.prototype,"marginColumn",void 0);var h=y=x([m.Component],y),_=(n(553),n(82)),C=n(83),j=n.n(C),O=n(509),w=n(203),R=n(524),$=n(200),k=n(528),component=Object(_.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",{attrs:{justify:"center"}},t._l(t.products,(function(e){return n("v-col",{key:e.id,staticClass:"columns",style:t.styles,attrs:{cols:"12"}},[n("div",{staticClass:"mx-auto"},[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{order:t.$vuetify.breakpoint.sm?3:2,cols:"12",md:"6"}},[n("v-img",{staticClass:"mx-3 mx-md-0",class:"en"===t.$i18n.locale?"rounded-r-lg":"rounded-l-lg",staticStyle:{"object-fit":"cover"},attrs:{src:e.image,"max-height":"516","min-height":"431"}})],1),t._v(" "),n("v-col",{staticClass:"d-flex flex-column",attrs:{order:"1",cols:"12",md:"6"}},[n("v-card-title",{staticClass:"\n\t\t\t\t\t\t\t\tprimary--text\n\t\t\t\t\t\t\t\ttext-h5 text-md-h5\n\t\t\t\t\t\t\t\tpy-md-0\n\t\t\t\t\t\t\t\ttext-lg-h4\n\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t\tmt-sm-2\n\t\t\t\t\t\t\t\tmx-2\n\t\t\t\t\t\t\t"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),n("v-card-text",{staticClass:"\n\t\t\t\t\t\t\t\tinfo--text\n\t\t\t\t\t\t\t\tpy-md-0\n\t\t\t\t\t\t\t\tmx-2\n\t\t\t\t\t\t\t\tmt-auto\n\t\t\t\t\t\t\t\ttext-body-1 text-md-body-2 text-lg-body-1\n\t\t\t\t\t\t\t"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.info)+"\n\t\t\t\t\t\t")]),t._v(" "),n("v-card-text",{staticClass:"\n\t\t\t\t\t\t\t\tprimary--text\n\t\t\t\t\t\t\t\tpb-md-2\n\t\t\t\t\t\t\t\tmt-auto\n\t\t\t\t\t\t\t\tmx-2\n\t\t\t\t\t\t\t\ttext-h6 text-lg-h5\n\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t"},[t._v(t._s(t.$t("howItWorks")))]),t._v(" "),n("v-card-text",{staticClass:"py-md-0"},t._l(e.guides,(function(e,i){return n("ul",{key:i,staticClass:"info--text px-4"},[n("li",{staticClass:"text-md-body-2 text-lg-body-1 pt-lg-1"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t\t\t\t")])])})),0),t._v(" "),n("v-card-actions",{staticClass:"mx-4 py-md-0 mt-auto"},[n("apply-now-button",{attrs:{buttonPadding:"26px 20px",buttonWidth:"150px",buttonColor:"#1D4283",buttonText:"ar"===t.$i18n.locale?"قدّم":"Apply",buttonFontSize:"16px"}}),t._v(" "),t.showButton?n("v-btn",{staticClass:"rounded-lg mx-4 text-body-1 text-capitalize",attrs:{to:t.localeRoute(e.link),"x-large":"",outlined:"",color:"secondary"}},[t._v(t._s(t.$t("detailsButton")))]):t._e()],1)],1)],1)],1)])})),1)],1)}),[],!1,null,"225b380e",null);e.default=component.exports;j()(component,{ApplyNowButton:n(332).default}),j()(component,{VBtn:O.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:R.a,VImg:$.a,VRow:k.a})},588:function(t,e,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("d475374c",content,!0,{sourceMap:!1})},616:function(t,e,n){"use strict";n(588)},617:function(t,e,n){var o=n(14)(!1);o.push([t.i,"html[data-v-55739a89]{background:linear-gradient(51.66deg,hsla(0,0%,93.3%,.2) 75.46%,rgba(0,0,0,.2) 96.37%),#fff}",""]),t.exports=o},636:function(t,e,n){"use strict";n.r(e);n(68);var o=n(25),r=n(31),c=n(27),l=n(19),d=n(13),f=(n(9),n(47));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(l.a)(t);if(e){var r=Object(l.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var v=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(r.a)(n,t);var e=m(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).products=t.$t("products"),t}return n}(f.Vue),y=x=v([f.Component],x),h=(n(616),n(82)),_=n(83),C=n.n(_),j=n(524),O=n(200),w=n(528),component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("main",{staticClass:"mt-4 pb-8"},[n("v-row",[n("v-col",{staticClass:"text-col",class:"en"===t.$i18n.locale?"px-6 pl-sm-14":"px-6 pr-sm-14",attrs:{cols:"12",sm:"7"}},[n("h1",{staticClass:"\n\t\t\t\t\t\tprimary--text\n\t\t\t\t\t\ttext-pre-line text-h3 text-md-h2 text-lg-h1\n\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\tcenter-text\n\t\t\t\t\t"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("productsPage.title"))+"\n\t\t\t\t")]),t._v(" "),n("p",{staticClass:"\n\t\t\t\t\t\tinfo--text\n\t\t\t\t\t\ttext-pre-line text-body-1 text-wrap text-md-h6\n\t\t\t\t\t\tmy-8\n\t\t\t\t\t\tcenter-text\n\t\t\t\t\t"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("productsPage.text"))+"\n\t\t\t\t")]),t._v(" "),n("div",{staticClass:"apply-button"})]),t._v(" "),n("v-col",{staticClass:"d-none mt-8 px-0 d-sm-block",attrs:{cols:"12",sm:"5"}},[n("v-img",{attrs:{contain:"",src:"/pos-bg.png",alt:""}})],1)],1),t._v(" "),n("section",{staticClass:"mx-auto",staticStyle:{width:"90%"}},[n("div",[n("product-card",{attrs:{marginColumn:"40px 0",products:t.products}})],1)])],1)])}),[],!1,null,"55739a89",null);e.default=component.exports;C()(component,{ProductCard:n(562).default}),C()(component,{VCol:j.a,VImg:O.a,VRow:w.a})}}]);