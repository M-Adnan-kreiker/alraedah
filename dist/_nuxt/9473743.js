(window.webpackJsonp=window.webpackJsonp||[]).push([[22,10,18],{584:function(t,e,n){"use strict";n.r(e);n(77);var r=n(22),c=n(38),o=n(37),l=n(33),f=n(23),d=n(17),h=(n(11),n(3),n(5),n(57),n(61));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"head",value:function(){return{htmlAttrs:{lang:this.$i18n.locale},title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}}}]),n}(h.Vue);v([Object(h.Prop)({required:!0})],y.prototype,"title",void 0),v([Object(h.Prop)({required:!0})],y.prototype,"description",void 0),v([Object(h.Prop)({default:"https://nuxtjs.org/nuxt-card.png"})],y.prototype,"image",void 0);var x=y=v([Object(h.Component)({name:"SocialHead"})],y),j=n(90),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},590:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3a34c881",content,!0,{sourceMap:!1})},598:function(t,e,n){"use strict";n(590)},599:function(t,e,n){var r=n(15)(!1);r.push([t.i,".line-height[data-v-4fd48d1a]{line-height:180%!important}@media (max-width:470px){.big-img[data-v-4fd48d1a]{display:none}.sm-img[data-v-4fd48d1a]{display:inline-block!important}}@media (max-width:600px){.card-row[data-v-4fd48d1a]{flex-direction:column;justify-content:center!important}}",""]),t.exports=r},616:function(t,e,n){"use strict";n.r(e);var r=n(22),c=n(38),o=n(37),l=n(33),f=n(23),d=n(17),h=(n(11),n(3),n(77),n(64));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"currentCard",get:function(){return this.card}}]),n}(h.Vue);v([Object(h.Prop)()],y.prototype,"card",void 0);var x=y=v([h.Component],y),j=(n(598),n(90)),O=n(94),w=n.n(O),_=n(262),C=n(576),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"100%",width:"100%"}},[n("v-card",{staticClass:"d-flex rounded-xl cards center-text justify-center py-2 my-6 px-4",attrs:{height:"90%",elevation:"4","min-width":"290","min-height":"170"}},[n("img",{staticClass:"mx-3 mx-sm-4 align-self-center big-img flex-grow-1",attrs:{height:"94",width:"95",src:t.currentCard.image}}),t._v(" "),n("div",{staticClass:"align-self-center"},[n("v-row",{staticClass:"my-3 align-sm-center d-inline-flex px-4 px-sm-0 card-row",attrs:{justify:"start"}},[t._t("title"),t._v(" "),n("img",{staticClass:"mx-auto mt-4 mx-sm-4 d-none sm-img",attrs:{height:"94",width:"95",src:t.currentCard.image}})],2),t._v(" "),n("p",{staticClass:"\n\t\t\t\t\ttext-body-2 text-sm-body-1\n\t\t\t\t\tpt-2\n\t\t\t\t\tfont-weight-regular\n\t\t\t\t\ttext-md-h6\n\t\t\t\t\tmb-0\n\t\t\t\t\tflex-grow-1\n\t\t\t\t"},[t._v("\n\t\t\t\t"+t._s(t.currentCard.text)+"\n\t\t\t")])],1)])],1)}),[],!1,null,"4fd48d1a",null);e.default=component.exports;w()(component,{VCard:_.a,VRow:C.a})},626:function(t,e,n){var content=n(649);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("1fc6fb0c",content,!0,{sourceMap:!1})},648:function(t,e,n){"use strict";n(626)},649:function(t,e,n){var r=n(15)(!1);r.push([t.i,".line-height[data-v-00094c72]{line-height:240%!important}",""]),t.exports=r},703:function(t,e,n){"use strict";n.r(e);var r=n(22),c=n(38),o=n(37),l=n(33),f=n(23),d=n(17),h=(n(11),n(3),n(77),n(64));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var v=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=m(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"head",value:function(){return{link:[{rel:"preload",as:"image",href:"/mission.webp"}]}}},{key:"pillars",get:function(){return this.$t("aboutUs.subCards")}},{key:"cards",get:function(){return this.$t("aboutUs.mainCards")}}]),n}(h.Vue),x=y=v([h.Component],y),j=(n(648),n(90)),O=n(94),w=n.n(O),_=n(572),C=n(227),R=n(576),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-4 mx-sm-16 my-16"},[n("social-head",{attrs:{title:t.$t("seo.aboutUs.title"),description:t.$t("seo.aboutUs.description")}}),t._v(" "),n("h1",{staticClass:"\n\t\t\tprimary--text primary--text\n\t\t\ttext-sm-h4 text-start text-md-h3\n\t\t\tfont-weight-bold\n\t\t\tmt-4 mt-sm-8\n\t\t"},[t._v("\n\t\t"+t._s(t.$t("aboutUs.title"))+"\n\t")]),t._v(" "),n("v-row",{staticClass:"mt-12"},[n("v-col",{staticClass:"mt-n10",attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"info--text text-body-1 text-sm-h6 text-start",class:"ar"===t.$i18n.locale?"line-height":""},[t._v("\n\t\t\t\t"+t._s(t.$t("aboutUs.text"))+"\n\t\t\t")])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-img",{staticClass:"rounded-lg mt-md-n8",attrs:{src:"/mission.webp"}})],1)],1),t._v(" "),n("v-row",t._l(t.cards,(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",lg:"6"}},[n("info-card",{attrs:{elevation:10,card:e},scopedSlots:t._u([{key:"title",fn:function(){return[n("h1",{staticClass:"mx-3 primary--text"},[t._v("\n\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t")])]},proxy:!0}],null,!0)})],1)})),1),t._v(" "),n("v-row",{staticClass:"mt-16"},[n("v-col",[n("h1",{staticClass:"mb-8 primary--text text-center"},[t._v("\n\t\t\t\t"+t._s(t.$t("aboutUs.leadership"))+"\n\t\t\t")]),t._v(" "),n("v-row",{attrs:{justify:"center"}},t._l(t.pillars,(function(e){return n("v-col",{key:e.title,staticClass:"my-0",attrs:{cols:"12",sm:"10",md:"6"}},[n("info-card",{attrs:{elevation:"12",card:e},scopedSlots:t._u([{key:"title",fn:function(){return[n("h1",{staticClass:"mb-sm-2 px-4 primary--text text-h5 font-weight-bold"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t")])]},proxy:!0}],null,!0)})],1)})),1)],1)],1)],1)}),[],!1,null,"00094c72",null);e.default=component.exports;w()(component,{SocialHead:n(584).default,InfoCard:n(616).default}),w()(component,{VCol:_.a,VImg:C.a,VRow:R.a})}}]);