(window.webpackJsonp=window.webpackJsonp||[]).push([[19,25,34,35],{522:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return h}));var o=n(530),r=n(1),c=Object(r.j)("v-card__actions"),l=Object(r.j)("v-card__subtitle"),d=Object(r.j)("v-card__text"),h=Object(r.j)("v-card__title");o.a},524:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var o=n(526);function r(object){return Object(o.a)(object)}function c(object){return Object(o.b)(object)}},525:function(t,e,n){"use strict";function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function r(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c}))},526:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));n(33);function o(object){return void 0!==object&&void 0!==object.name&&void 0!==object.value}function r(object){return o(object)&&void 0!==object&&void 0!==object.monthId}function c(object){return o(object)&&void 0!==object.startingMonthId&&void 0!==object.frequency}},529:function(t,e,n){"use strict";n.r(e);var o=n(41),r=Object(o.a)({props:{value:{type:String,default:void 0},allowNoSelection:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},min:{type:String,default:"1900-01"},max:{type:String,default:"9999-12"},label:{type:String,default:void 0}},data:function(){return{monthPickerOpen:!1}},methods:{updateMonthId:function(t){this.$emit("input",t),this.monthPickerOpen=!1}}}),c=n(27),l=n(24),d=n.n(l),h=n(504),v=n(821),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{value:void 0!==t.value?t.$d(new Date(t.value),"no-day"):void 0,label:void 0!==t.label?t.label:t.$tc("month.title",1),disabled:t.disabled,"prepend-icon":"mdi-calendar",readonly:"",clearable:t.allowNoSelection},on:{"click:clear":function(e){return t.$emit("input",void 0)}}},"v-text-field",r,!1),o))]}}]),model:{value:t.monthPickerOpen,callback:function(e){t.monthPickerOpen=e},expression:"monthPickerOpen"}},[t._v(" "),n("month-picker",{attrs:{value:t.value,min:t.min,max:t.max},on:{input:t.updateMonthId}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{MonthPicker:n(532).default}),d()(component,{VMenu:h.a,VTextField:v.a})},530:function(t,e,n){"use strict";n(9),n(8),n(10),n(5),n(16),n(11),n(17);var o=n(2),r=(n(36),n(241),n(242),n(550),n(247)),c=n(534),l=n(104),d=n(13);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,r.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},r.a.options.computed.classes.call(this))},styles:function(){var style=v({},r.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(n,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},532:function(t,e,n){"use strict";n.r(e);var o=n(41),r=Object(o.a)({props:{value:{type:String,default:void 0},fullWidth:{type:Boolean,default:!1},min:{type:String,default:"1900-01"},max:{type:String,default:"9999-12"}}}),c=n(27),l=n(24),d=n.n(l),h=n(823),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-date-picker",{attrs:{value:t.value,type:"month","full-width":t.fullWidth,color:"red","header-color":"primary",elevation:"2",min:t.min,max:t.max},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VDatePicker:h.a})},537:function(t,e,n){var content=n(538);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4b7cce2a",content,!0,{sourceMap:!1})},538:function(t,e,n){var o=n(28)(!1);o.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=o},539:function(t,e,n){"use strict";n.r(e);n(9),n(8),n(10),n(16),n(11),n(17);var o=n(2),r=(n(33),n(5),n(84),n(41)),c=n(78),l=n(525),d=n(524);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(r.a)({props:{initialMonthId:{type:String,default:Object(c.a)()},initialIncomeData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){var t={frequencyRules:Object(l.a)(this.$i18n),nameRules:Object(l.b)(this.$i18n),valueRules:Object(l.c)(this.$i18n)};return v({endingMonthId:void 0,frequency:"1",incomeId:void 0,isRecurring:!1,monthId:this.initialMonthId,name:"",value:"10",valid:!1},t)},watch:{initialMonthId:function(t){this.monthId=t},initialIncomeData:{immediate:!0,handler:function(){this.loadInitialIncomeData()}},monthId:function(){this.normalizeEndingMonth()},endingMonthId:function(){this.normalizeEndingMonth()}},methods:{emitIncome:function(){var t={name:this.name,value:parseInt(this.value)};t=this.isRecurring?v(v({},t),{},{endingMonthId:this.endingMonthId,frequency:parseInt(this.frequency),startingMonthId:this.monthId}):v(v({},t),{},{monthId:this.monthId}),void 0!==this.incomeId&&(t=v(v({},t),{},{id:this.incomeId})),this.$emit("submit",t),this.resetForm()},loadInitialIncomeData:function(){var t=this.initialIncomeData;void 0!==t&&(this.incomeId=t.id,this.name=t.name,this.value=t.value.toString(),Object(d.a)(t)?(this.isRecurring=!1,this.monthId=t.monthId):Object(d.b)(t)&&(this.endingMonthId=t.endingMonthId,this.frequency=t.frequency.toString(),this.isRecurring=!0,this.monthId=t.startingMonthId))},resetForm:function(){this.incomeId=void 0,this.endingMonthId=void 0,this.frequency="1",this.isRecurring=!1,this.monthId=this.initialMonthId,this.name="",this.value="10",this.$refs.form.resetValidation(),this.loadInitialIncomeData()},normalizeEndingMonth:function(){void 0===this.endingMonthId||this.monthId<this.endingMonthId||(this.endingMonthId=this.monthId)}}}),m=n(27),y=n(24),O=n.n(y),x=n(266),_=n(530),w=n(522),j=n(764),I=n(647),k=n(516),$=n(821),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$tc("income.title",1)))]),t._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"name-input",attrs:{counter:20,label:t.$t("misc.name"),rules:t.nameRules,"prepend-icon":"mdi-pencil",required:"",type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{label:t.$t("misc.value"),rules:t.valueRules,"prepend-icon":"mdi-cash",required:"",type:"number"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("month-selection",{model:{value:t.monthId,callback:function(e){t.monthId=e},expression:"monthId"}}),t._v(" "),n("v-checkbox",{attrs:{label:t.$t("misc.recurring"),"hide-details":""},model:{value:t.isRecurring,callback:function(e){t.isRecurring=e},expression:"isRecurring"}}),t._v(" "),n("v-text-field",{attrs:{disabled:!t.isRecurring,hint:t.$tc("frequency.hint",t.isRecurring?+t.frequency:0),label:t.$t("frequency.title"),"persistent-hint":!0,rules:t.frequencyRules,"prepend-icon":"mdi-repeat",type:"number"},model:{value:t.frequency,callback:function(e){t.frequency=e},expression:"frequency"}}),t._v(" "),n("month-selection",{attrs:{"allow-no-selection":!0,disabled:!t.isRecurring,label:t.$t("misc.until"),min:t.monthId},model:{value:t.endingMonthId,callback:function(e){t.endingMonthId=e},expression:"endingMonthId"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{disabled:!t.valid,color:"primary",text:""},on:{click:function(e){return t.emitIncome()}}},[t._v("\n        "+t._s(t.submitLabel)+"\n      ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{MonthSelection:n(529).default}),O()(component,{VBtn:x.a,VCard:_.a,VCardActions:w.a,VCardText:w.c,VCardTitle:w.d,VCheckbox:j.a,VForm:I.a,VSpacer:k.a,VTextField:$.a})},586:function(t,e,n){"use strict";var o=n(56),r=n(2),c=(n(36),n(86),n(63),n(42),n(57),n(5),n(85),n(9),n(8),n(10),n(16),n(11),n(17),n(537),n(514)),l=n(132),d=n(160),h=n(245),v=n(246),f=n(243),m=n(244),y=n(158),O=n(13),x=n(19),_=n(1);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I=Object(O.a)(d.a,h.a,v.a,f.a,m.a,l.a);e.a=I.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(r.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(t,"v-dialog--active",this.isActive),Object(r.a)(t,"v-dialog--persistent",this.persistent),Object(r.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(t,"v-dialog--scrollable",this.scrollable),Object(r.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(x.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===_.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(t){return!t.hasAttribute("disabled")}));r&&r.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:j({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:Object(_.h)(this.maxWidth),width:Object(_.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},635:function(t,e,n){"use strict";n.r(e);var o=n(41),r=n(524),c=Object(o.a)({props:{income:{type:Object,required:!0}},methods:{updateIncome:function(t,dialog){dialog.value=!1;var e=this.income;Object(r.b)(t)?(Object(r.a)(e)&&this.$store.commit("months/removeIncome",e),this.$store.commit("recurringIncomes/add",t)):Object(r.a)(t)&&(Object(r.b)(e)?this.$store.commit("recurringIncomes/remove",e):Object(r.a)(e)&&e.monthId!==t.monthId&&this.$store.commit("months/removeIncome",e),this.$store.commit("months/addIncome",t))}}}),l=n(27),d=n(24),h=n.n(d),v=n(266),f=n(586),m=n(200),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",icon:"",small:"","aria-label":t.$t("actions.edit"),title:t.$t("actions.edit")}},"v-btn",r,!1),o),[n("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-pencil")}})],1)]}},{key:"default",fn:function(dialog){return[n("income-form",{ref:"form",attrs:{"initial-income-data":t.income,"submit-label":t.$t("actions.update")},on:{submit:function(e){return t.updateIncome(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;h()(component,{IncomeForm:n(539).default}),h()(component,{VBtn:v.a,VDialog:f.a,VIcon:m.a})},636:function(t,e,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("537795b0",content,!0,{sourceMap:!1})},637:function(t,e,n){var o=n(28)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},638:function(t,e,n){var content=n(639);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("4dbe5f92",content,!0,{sourceMap:!1})},639:function(t,e,n){var o=n(28)(!1);o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},647:function(t,e,n){"use strict";var o=n(2),r=(n(42),n(57),n(159),n(10),n(5),n(11),n(63),n(85),n(9),n(8),n(16),n(17),n(13)),c=n(116),l=n(162);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},764:function(t,e,n){"use strict";n(9),n(8),n(10),n(16),n(11),n(17);var o=n(103),r=n(2),c=(n(5),n(84),n(636),n(638),n(89)),l=n(551),d=n(114),h=n(0).default.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),v=n(267),f=n(13);function m(t){t.preventDefault()}var y=Object(f.a)(l.a,h,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),O=["title"];function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=y.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return _(_({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,O));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",_(_({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);