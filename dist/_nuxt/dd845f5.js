(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{283:function(t,e,n){"use strict";var o=n(546);e.a=o.a},587:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0d135400",content,!0,{sourceMap:!1})},588:function(t,e,n){var o=n(16)(!1);o.push([t.i,".v-window{overflow:hidden}.v-window__container{display:flex;flex-direction:column;height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=o},594:function(t,e,n){"use strict";n(6),n(5),n(10),n(11),n(8),n(14);var o=n(1),r=(n(26),n(80),n(3),n(225),n(587),n(284)),c=n(283),l=n(75),v=n(116);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=v.a.extend({name:"v-window",directives:{Touch:r.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return h(h({},v.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var o,r,v,d=this,h={click:function(t){t.stopPropagation(),d.changedByDelimiters=!0,n()}},w={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},f=null!=(o=null==(r=(v=this.$scopedSlots)[t])?void 0:r.call(v,{on:h,attrs:w}))?o:[this.$createElement(c.a,{props:{icon:!0},attrs:w,on:h},[this.$createElement(l.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},f)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var o=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&o&&"string"==typeof o){var r=this.genIcon("next",o,this.next);r&&t.push(r)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,o=n-1;return n<=2?t<e:t===o&&0===e||(0!==t||e!==o)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},595:function(t,e,n){"use strict";var o=n(169),r=n(102),c=n(284),l=n(0),v=n(4),d=Object(v.a)(o.a,Object(r.a)("windowGroup","v-window-item","v-window"));e.a=d.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},602:function(t,e,n){var content=n(623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("e52d6c44",content,!0,{sourceMap:!1})},609:function(t,e,n){"use strict";n.d(e,"a",(function(){return v}));var o=n(1),r=n(102),c=n(4),l=n(13),v=n(2).default.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(o.a)({},this.activeClass,this.isActive)}),element):(Object(l.c)("v-item should only contain a single element",this),element)):(Object(l.c)("v-item is missing a default scopedSlot",this),null);var element}});e.b=Object(c.a)(v,Object(r.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"})},622:function(t,e,n){"use strict";n(602)},623:function(t,e,n){var o=n(16)(!1);o.push([t.i,".cards[data-v-eb60b0a8]{max-width:40vw}@media (max-width:700px){.cards[data-v-eb60b0a8]{max-width:60vw}}@media (min-width:600px) and (max-width:720px){.main-text[data-v-eb60b0a8],.sub-text[data-v-eb60b0a8]{font-size:14px!important}}@media (max-width:500px){.cards[data-v-eb60b0a8]{max-width:85vw!important}}.solution-text[data-v-eb60b0a8]{line-height:170%!important}h2[data-v-eb60b0a8]{line-height:140%!important}.v-btn--fab.v-size--default .v-icon[data-v-eb60b0a8],.v-btn--icon.v-size--default .v-icon[data-v-eb60b0a8]{height:15px;font-size:24px;width:15px;background:#a9a9a9;border-radius:50%}",""]),t.exports=o},647:function(t,e,n){"use strict";n.r(e);var o=n(29),r=n(46),c=n(36),l=n(32),v=n(21),d=n(15),h=(n(11),n(3),n(74),n(65));function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(v.a)(t);if(e){var r=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var f=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},m=function(t){Object(c.a)(n,t);var e=w(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).onboarding=0,t.length=6,t}return Object(r.a)(n,[{key:"cards",get:function(){return this.$t("solutions.cards")}},{key:"next",value:function(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1}},{key:"prev",value:function(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}}]),n}(h.Vue),x=m=f([h.Component],m),y=(n(622),n(87)),_=n(94),C=n.n(_),O=n(546),j=n(259),I=n(125),T=n(562),$=n(260),A=n(222),B=n(609),k=n(116),P=n(566),V=n(594),R=n(595),component=Object(y.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"py-6",class:t.$vuetify.breakpoint.smAndUp?"bg":""},[n("v-row",{staticClass:"mx-4 mx-sm-8"},[n("v-col",{attrs:{cols:"12"}},[n("h2",{staticClass:"\n\t\t\t\t\tfont-weight-bold\n\t\t\t\t\ttext-h5 text-sm-h4 text-md-h3 text-wrap\n\t\t\t\t\tprimary--text\n\t\t\t\t\ttext-start\n\t\t\t\t"},[t._v(t._s(t.$t("solutions.title"))+"\n\t\t\t")])]),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("p",{staticClass:"\n\t\t\t\t\taccent--text\n\t\t\t\t\ttext-body-1\n\t\t\t\t\tsolution-text\n\t\t\t\t\ttext-sm-h6 text-md-h5 text-wrap\n\t\t\t\t"},[t._v("\n\t\t\t\t"+t._s(t.$t("solutions.text"))+"\n\t\t\t")])]),t._v(" "),n("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6"}},[n("Lazy-video-info")],1)],1),t._v(" "),n("section",{staticClass:"mt-16 mx-10 d-none d-sm-block"},[n("v-row",t._l(t.cards,(function(e){return n("v-col",{key:e.title,staticClass:"d-flex justify-center",attrs:{cols:"12",sm:"6",md:"4"}},[n("v-card",{staticClass:"rounded-xl cards mx-auto mx-sm-2",attrs:{elevation:"4",color:"#ffffff","min-height":"370px","min-width":"260","max-width":"370","max-height":"400"}},[n("v-row",[n("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{sm:"12"}},[n("img",{staticClass:"d-block mt-10",attrs:{height:"100",width:"103",src:e.img}}),t._v(" "),n("v-card-title",{staticClass:"\n\t\t\t\t\t\t\t\t\ttext-body-1 text-sm-subtitle-1 text-lg-h6\n\t\t\t\t\t\t\t\t\tmain-text\n\t\t\t\t\t\t\t\t\tpx-0\n\t\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t\t\ttext-no-wrap\n\t\t\t\t\t\t\t\t",attrs:{"primary-title":""}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t")]),t._v(" "),n("v-card-text",{staticClass:"\n\t\t\t\t\t\t\t\t\ttext-body-1\n\t\t\t\t\t\t\t\t\tfont-weight-regular\n\t\t\t\t\t\t\t\t\tpx-4 px-md-6\n\t\t\t\t\t\t\t\t\tsub-text\n\t\t\t\t\t\t\t\t\ttext-center\n\t\t\t\t\t\t\t\t\tinfo--text\n\t\t\t\t\t\t\t\t"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t")])],1)],1)],1)],1)})),1)],1),t._v(" "),n("section",{staticClass:"d-block d-sm-none mt-10"},[n("v-card",{attrs:{color:"transparent",flat:""}},[n("v-window",{staticClass:"pa-4",model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.cards,(function(e){return n("v-window-item",{key:e.id},[n("v-card",{staticClass:"rounded-xl cards mx-auto mx-sm-2",attrs:{elevation:"4",color:"#ffffff","min-height":"370px","min-width":"280","max-width":"370","max-height":"350"}},[n("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{sm:"12"}},[n("v-img",{staticClass:"d-block mt-10",attrs:{height:"100",width:"103",src:e.img}}),t._v(" "),n("v-card-title",{staticClass:"\n\t\t\t\t\t\t\t\t\ttext-body-1 text-md-subtitle-1 text-lg-h6\n\t\t\t\t\t\t\t\t\tmain-text\n\t\t\t\t\t\t\t\t\tpx-0\n\t\t\t\t\t\t\t\t\tfont-weight-bold\n\t\t\t\t\t\t\t\t\ttext-no-wrap\n\t\t\t\t\t\t\t\t",attrs:{"primary-title":""}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t")]),t._v(" "),n("v-card-text",{staticClass:"\n\t\t\t\t\t\t\t\t\ttext-body-1\n\t\t\t\t\t\t\t\t\tpx-4 px-md-6\n\t\t\t\t\t\t\t\t\tsub-text\n\t\t\t\t\t\t\t\t\ttext-center\n\t\t\t\t\t\t\t\t\tinfo--text\n\t\t\t\t\t\t\t\t"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t\t\t\t")])],1)],1)],1)})),1),t._v(" "),n("v-card-actions",{staticClass:"justify-center"},[n("v-item-group",{staticClass:"text-center",attrs:{"active-class":"secondary"},model:{value:t.onboarding,callback:function(e){t.onboarding=e},expression:"onboarding"}},t._l(t.length,(function(e){return n("v-item",{key:"btn-"+e,scopedSlots:t._u([{key:"default",fn:function(e){var o=e.active,r=e.toggle;return[n("v-btn",{attrs:{"input-value":o,icon:""},on:{click:r}},[n("v-icon",[t._v("mdi-record")])],1)]}}],null,!0)})})),1)],1)],1)],1)],1)}),[],!1,null,"eb60b0a8",null);e.default=component.exports;C()(component,{VBtn:O.a,VCard:j.a,VCardActions:I.a,VCardText:I.b,VCardTitle:I.c,VCol:T.a,VIcon:$.a,VImg:A.a,VItem:B.b,VItemGroup:k.b,VRow:P.a,VWindow:V.a,VWindowItem:R.a})}}]);