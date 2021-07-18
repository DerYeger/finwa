(window.webpackJsonp=window.webpackJsonp||[]).push([[12,10],{298:function(t,e,r){"use strict";var n=r(242);e.a=n.a},478:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return v}));var n=r(485),o=r(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),v=Object(o.i)("v-card__title");n.a},481:function(t,e,r){"use strict";function n(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}))},485:function(t,e,r){"use strict";r(8),r(6),r(10),r(13),r(9),r(14);var n=r(2),o=(r(35),r(220),r(634),r(225)),c=r(489),l=r(98),d=r(12);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},634:function(t,e,r){var content=r(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("e23b7040",content,!0,{sourceMap:!1})},637:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(20),r(69),r(27),r(8),r(6),r(10),r(13),r(9),r(14),r(38)),c=r(481);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(o.a)({props:{initialCategoryData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){return{categoryId:void 0,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),isBuiltin:!1,name:"",nameRules:Object(c.b)(this.$i18n),valid:!1}},watch:{initialCategoryData:{immediate:!0,handler:function(){this.loadInitialCategoryData()}}},methods:{emitCategory:function(){var t={name:this.name,isBuiltin:this.isBuiltin,color:this.color};void 0!==this.categoryId&&(t=d(d({},t),{},{id:this.categoryId})),this.$emit("submit",t),this.resetForm()},loadInitialCategoryData:function(){var t=this.initialCategoryData;void 0!==t&&(this.categoryId=t.id,this.color=t.color,this.isBuiltin=t.isBuiltin,this.name=this.$t(t.name))},resetForm:function(){this.categoryId=void 0,this.color="#".concat(Math.floor(16777215*Math.random()).toString(16)),this.isBuiltin=!1,this.name="",this.$refs.form.resetValidation(),this.loadInitialCategoryData()}}}),h=r(26),f=r(21),m=r.n(f),_=r(242),y=r(485),x=r(478),O=r(700),w=r(689),j=r(471),$=r(764),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.$tc("category.title",1)))]),t._v(" "),r("v-card-text",[r("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-color-picker",{attrs:{"dot-size":"24","hide-inputs":"",elevation:"2"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitCategory()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:_.a,VCard:y.a,VCardActions:x.a,VCardText:x.c,VCardTitle:x.d,VColorPicker:O.a,VForm:w.a,VSpacer:j.a,VTextField:$.a})},643:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},674:function(t,e,r){"use strict";var n=r(0);e.a=n.default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},689:function(t,e,r){"use strict";var n=r(2),o=(r(39),r(51),r(139),r(10),r(9),r(60),r(81),r(8),r(6),r(13),r(14),r(12)),c=r(107),l=r(142);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},712:function(t,e,r){var content=r(713);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("5276b867",content,!0,{sourceMap:!1})},713:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=n},715:function(t,e,r){"use strict";r.r(e);var n=r(38),o=Object(n.a)({props:{category:{type:Object,required:!0}},methods:{updateCategory:function(t,dialog){dialog.value=!1,this.$store.commit("categories/add",t)}}}),c=r(26),l=r(21),d=r.n(l),v=r(242),h=r(652),f=r(177),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"332"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[r("v-btn",t._g(t._b({attrs:{color:"primary",icon:"",small:"","aria-label":t.$t("actions.edit"),title:t.$t("actions.edit")}},"v-btn",o,!1),n),[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-pencil")}})],1)]}},{key:"default",fn:function(dialog){return[r("category-form",{ref:"form",attrs:{"initial-category-data":t.category,"submit-label":t.$t("actions.update")},on:{submit:function(e){return t.updateCategory(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;d()(component,{CategoryForm:r(637).default}),d()(component,{VBtn:v.a,VDialog:h.a,VIcon:f.a})},721:function(t,e,r){"use strict";r(8),r(6),r(10),r(13),r(9),r(14);var n=r(97),o=r(2),c=(r(35),r(712),r(177)),l=r(49),d=r(31),v=r(61),h=r(674),f=r(106),m=r(12),_=r(1),y=["aria-atomic","aria-label","aria-live","role","title"];function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(m.a)(l.a,Object(f.b)(["left","bottom"]),d.a,v.a,h.a).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.g)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.s)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(c.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],r=[Object(_.s)(this)],o=this.$attrs,c=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(n.a)(o,y));return this.inline&&this.left?r.unshift(e):r.push(e),t("span",{staticClass:"v-badge",attrs:c,class:this.classes},r)}})},725:function(t,e,r){"use strict";r.r(e);var n=r(38),o=r(83),c=r(76),l=Object(n.a)({data:function(){var t=this;return{footerProps:{itemsPerPageAllText:this.$t("misc.table.all"),itemsPerPageText:this.$t("misc.table.items-per-page")},headerProps:{sortByText:this.$t("misc.table.sort-by")},headers:[{text:this.$t("misc.color"),value:"color",sortable:!1,filterable:!1},{text:this.$t("misc.name"),value:"name",sort:function(a,b){return Object(c.b)(a,b,(function(e){return t.$t(e)}))}},{text:this.$t("misc.actions"),value:"actions",sortable:!1,filterable:!1}],search:""}},computed:Object(o.c)("categories",["categories"]),methods:Object(o.b)(["removeCategory"])}),d=r(26),v=r(21),h=r.n(v),f=r(721),m=r(242),_=r(485),y=r(478),x=r(697),O=r(177),w=r(471),j=r(764),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("\n    "+t._s(t.$tc("category.title",2))+"\n    "),r("v-spacer"),t._v(" "),r("v-text-field",{staticClass:"mt-0 pt-0",attrs:{"append-icon":"mdi-magnify",label:t.$t("actions.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("client-only",[r("v-data-table",{attrs:{headers:t.headers,items:t.categories,"items-per-page":15,search:t.search,"footer-props":t.footerProps,"header-props":t.headerProps,"no-data-text":t.$t("misc.no-data"),"no-results-text":t.$t("misc.no-results")},scopedSlots:t._u([{key:"item.name",fn:function(e){var r=e.item;return[t._v("\n        "+t._s(t.$t(r.name))+"\n      ")]}},{key:"item.color",fn:function(t){var e=t.item;return[r("v-badge",{staticClass:"mr-2",attrs:{inline:"",color:e.color}})]}},{key:"item.actions",fn:function(e){var n=e.item;return[r("edit-category-dialog",{attrs:{category:n}}),t._v(" "),r("v-btn",{attrs:{disabled:n.isBuiltin,small:"",icon:"",color:"error","aria-label":t.$t("actions.delete"),title:t.$t("actions.delete")},on:{click:function(e){return t.removeCategory(n)}}},[r("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-delete")}})],1)]}},{key:"footer.page-text",fn:function(e){var r=e.pageStart,n=e.pageStop,o=e.itemsLength;return[t._v("\n        "+t._s(t.$t("misc.table.page-text",[r,n,o]))+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{EditCategoryDialog:r(715).default}),h()(component,{VBadge:f.a,VBtn:m.a,VCard:_.a,VCardTitle:y.d,VDataTable:x.a,VIcon:O.a,VSpacer:w.a,VTextField:j.a})}}]);