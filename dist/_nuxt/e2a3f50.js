(window.webpackJsonp=window.webpackJsonp||[]).push([[27,18],{547:function(t,e,r){"use strict";r.r(e);r(70);var n=r(26),o=r(42),c=r(33),l=r(27),f=r(20),d=r(15),h=(r(9),r(4),r(53),r(58));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"head",value:function(){return{htmlAttrs:{lang:this.$i18n.locale},title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}}]),r}(h.Vue);v([Object(h.Prop)({required:!0})],y.prototype,"title",void 0),v([Object(h.Prop)({required:!0})],y.prototype,"description",void 0),v([Object(h.Prop)({default:"https://nuxtjs.org/nuxt-card.png"})],y.prototype,"image",void 0);var x=y=v([Object(h.Component)({name:"SocialHead"})],y),j=r(83),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},669:function(t,e,r){"use strict";r.r(e);r(70);var n=r(19),o=r(26),c=r(42),l=r(33),f=r(27),d=r(20),h=r(15),m=(r(60),r(9),r(8),r(59));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},x=function(t){Object(l.a)(f,t);var e,r=v(f);function f(){var t;return Object(o.a)(this,f),(t=r.apply(this,arguments)).tab=null,t.reports=[[],[],[],[],[],[]],t}return Object(c.a)(f,[{key:"years",get:function(){return this.$t("financialReports.years")}},{key:"items",get:function(){return this.$t("financialReports.items")}},{key:"fetch",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$axios.$get("".concat("http://150.230.54.62:1337/api/financial-reports"),{params:{locale:this.$i18n.locale}});case 3:t.sent.data.forEach((function(t){2016==t.attributes.year?e.reports[0].push(t):2017==t.attributes.year?e.reports[1].push(t):2018==t.attributes.year?e.reports[2].push(t):2019==t.attributes.year?e.reports[3].push(t):2020==t.attributes.year?e.reports[4].push(t):2021==t.attributes.year&&e.reports[5].push(t)})),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])}))),function(){return e.apply(this,arguments)})}]),f}(m.Vue),j=x=y([m.Component],x),O=r(83),w=r(90),R=r.n(w),_=r(242),C=r(535),k=r(244),V=r(243),$=r(539),P=r(654),T=r(655),B=r(679),S=r(622),D=r(623),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-4 mx-sm-16"},[r("social-head",{attrs:{title:t.$t("seo.financialReports.title"),description:t.$t("seo.financialReports.description")}}),t._v(" "),r("v-row",{staticClass:"my-12 my-md-16",attrs:{justify:"center"}},[r("v-col",{staticClass:"text-center rounded-t-xl py-16",staticStyle:{background:"#1d4283"},attrs:{cols:"11",md:"8",elevation:"12"}},[r("h1",{staticClass:"white--text text-h5 text-md-h4 py-4"},[t._v("\n\t\t\t\t"+t._s(t.$t("financialReports.title"))+"\n\t\t\t")])]),t._v(" "),r("v-col",{staticClass:"pt-0 px-0",attrs:{cols:"11",md:"8",elevation:"4"}},[r("v-card",{staticClass:"rounded-b-xl"},[r("v-tabs",{staticClass:"info--text",attrs:{centered:"","mobile-breakpoint":"100","slider-color":"primary","background-color":"#ffffff"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tabs-slider",{attrs:{color:"primary"}}),t._v(" "),t._l(t.years,(function(e){return r("v-tab",{key:e,staticClass:"info--text font-weight-bold text-h6 pt-5 text-sm-h5"},[t._v(t._s(e))])}))],2),t._v(" "),r("v-divider",{staticClass:"my-4"}),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.reports,(function(e,i){return r("v-tab-item",{key:e[i]},[r("v-card",[r("v-row",{staticClass:"text-center"},t._l(e,(function(e){return r("v-col",{key:e.name,staticClass:"px-8 py-4 d-flex",attrs:{cols:"12",sm:"6"}},[r("p",{staticClass:"\n\t\t\t\t\t\t\t\t\t\t\tpt-2\n\t\t\t\t\t\t\t\t\t\t\td-inline\n\t\t\t\t\t\t\t\t\t\t\ttext-body-1 text-md-h6\n\t\t\t\t\t\t\t\t\t\t\talign-self-center\n\t\t\t\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t\t\t\t\ttext-no-wrap\n\t\t\t\t\t\t\t\t\t\t\tflex-grow-1\n\t\t\t\t\t\t\t\t\t\t"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.attributes.name)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),r("a",{attrs:{href:e.attributes.file,target:"#",download:e.attributes.name}},[r("v-icon",{staticClass:"px-2 mb-3",attrs:{large:"",color:"primary"}},[t._v("mdi-download-box-outline")])],1)])})),1)],1)],1)})),1)],1)],1)],1)],1)}),[],!1,null,"1b4260dc",null);e.default=component.exports;R()(component,{SocialHead:r(547).default}),R()(component,{VCard:_.a,VCol:C.a,VDivider:k.a,VIcon:V.a,VRow:$.a,VTab:P.a,VTabItem:T.a,VTabs:B.a,VTabsItems:S.a,VTabsSlider:D.a})}}]);