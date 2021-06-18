(window.webpackJsonp=window.webpackJsonp||[]).push([[11,21],{457:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return f}));var n=r(460),o=r(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");n.a},459:function(t,e,r){"use strict";function n(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return c}))},460:function(t,e,r){"use strict";r(8),r(6),r(10),r(12),r(9),r(13);var n=r(2),o=(r(33),r(224),r(610),r(225)),c=r(612),l=r(94),d=r(14);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},634:function(t,e,r){"use strict";var n=r(2),o=(r(34),r(50),r(132),r(10),r(9),r(59),r(78),r(8),r(6),r(12),r(13),r(14)),c=r(103),l=r(134);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},635:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(19),r(70),r(21),r(8),r(6),r(10),r(12),r(9),r(13),r(54)),c=r(459);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(o.a)({props:{initialCategoryData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){return{categoryId:void 0,color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),isBuiltin:!1,name:"",nameRules:Object(c.b)(this.$i18n),valid:!1}},watch:{initialCategoryData:{immediate:!0,handler:function(){this.loadInitialCategoryData()}}},methods:{emitCategory:function(){var t={name:this.name,isBuiltin:this.isBuiltin,color:this.color};void 0!==this.categoryId&&(t=d(d({},t),{},{id:this.categoryId})),this.$emit("submit",t),this.resetForm()},loadInitialCategoryData:function(){var t=this.initialCategoryData;void 0!==t&&(this.categoryId=t.id,this.color=t.color,this.isBuiltin=t.isBuiltin,this.name=this.$t(t.name))},resetForm:function(){this.categoryId=void 0,this.color="#".concat(Math.floor(16777215*Math.random()).toString(16)),this.isBuiltin=!1,this.name="",this.$refs.form.resetValidation(),this.loadInitialCategoryData()}}}),h=r(39),v=r(43),m=r.n(v),O=r(234),y=r(460),j=r(457),w=r(730),_=r(634),P=r(451),B=r(724),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-card",[r("v-card-title",[t._v(t._s(t.$tc("category.title",1)))]),t._v(" "),r("v-card-text",[r("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-color-picker",{attrs:{"dot-size":"24","hide-inputs":"",elevation:"2"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitCategory()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:O.a,VCard:y.a,VCardActions:j.a,VCardText:j.c,VCardTitle:j.d,VColorPicker:w.a,VForm:_.a,VSpacer:P.a,VTextField:B.a})}}]);