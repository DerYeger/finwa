(window.webpackJsonp=window.webpackJsonp||[]).push([[43,6,12,24,33,34,35,37,40],{461:function(t,e,n){"use strict";function r(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return e.length<=20||t.t("validations.too-long",[20])}]}function o(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}function c(t){return[function(e){return e.length>0||t.t("validations.required")},function(e){return parseFloat(e)===parseInt(e)||t.t("validations.integer")},function(e){return parseInt(e)>0||t.t("validations.positive")}]}n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return c}))},463:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(169);function o(object){return void 0!==object&&void 0!==object.categoryId}function c(object){return o(object)&&Object(r.a)(object)}function l(object){return o(object)&&Object(r.b)(object)}},464:function(t,e,n){"use strict";n.r(e);var r=n(54),o=Object(r.a)({props:{value:{type:String,required:!0}},data:function(){return{monthPickerOpen:!1}},methods:{updateMonthId:function(t){this.$emit("input",t),this.monthPickerOpen=!1}}}),c=n(39),l=n(44),d=n.n(l),f=n(441),h=n(726),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-text-field",t._g(t._b({attrs:{value:t.$d(new Date(t.value),"no-day"),label:t.$tc("month.title",1),"prepend-icon":"mdi-calendar",readonly:""}},"v-text-field",o,!1),r))]}}]),model:{value:t.monthPickerOpen,callback:function(e){t.monthPickerOpen=e},expression:"monthPickerOpen"}},[t._v(" "),n("month-picker",{attrs:{value:t.value},on:{input:t.updateMonthId}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{MonthPicker:n(465).default}),d()(component,{VMenu:f.a,VTextField:h.a})},465:function(t,e,n){"use strict";n.r(e);var r=n(54),o=Object(r.a)({props:{value:{type:String,required:!0},fullWidth:{type:Boolean,default:!1}}}),c=n(39),l=n(44),d=n.n(l),f=n(730),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-date-picker",{attrs:{value:t.value,type:"month","full-width":t.fullWidth,color:"red","header-color":"primary",elevation:"2"},on:{input:function(e){return t.$emit("input",e)}}})}),[],!1,null,null,null);e.default=component.exports;d()(component,{VDatePicker:f.a})},467:function(t,e,n){var content=n(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("12a190a6",content,!0,{sourceMap:!1})},468:function(t,e,n){var r=n(24)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},469:function(t,e,n){var content=n(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("2e2bc7da",content,!0,{sourceMap:!1})},470:function(t,e,n){var r=n(24)(!1);r.push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},471:function(t,e,n){"use strict";n.r(e);var r=n(54),o=Object(r.a)({props:{monthId:{type:String,required:!0}}}),c=n(39),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.$d(new Date(t.monthId),"no-day")))])}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("5276b867",content,!0,{sourceMap:!1})},611:function(t,e,n){var r=n(24)(!1);r.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=r},613:function(t,e,n){"use strict";n.r(e);n(8),n(6),n(10),n(12),n(9),n(13);var r=n(2),o=(n(21),n(20),n(71),n(78)),c=n(54),l=n(111),d=n(131),f=n(463),h=n(461);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(c.a)({props:{initialMonthId:{type:String,default:Object(d.a)()},initialExpenseData:{type:Object,default:void 0},submitLabel:{type:String,required:!0}},data:function(){var t={frequencyRules:Object(h.a)(this.$i18n),nameRules:Object(h.b)(this.$i18n),valueRules:Object(h.c)(this.$i18n)};return m({categoryId:l.a.food.id,expenseId:void 0,frequency:"1",isRecurring:!1,monthId:this.initialMonthId,name:"",value:"10",valid:!1},t)},computed:Object(o.c)("categories",["categories"]),watch:{initialMonthId:function(t){this.monthId=t},initialExpenseData:{immediate:!0,handler:function(){this.loadInitialExpenseData()}}},methods:{emitExpense:function(){var t={name:this.name,categoryId:this.categoryId,value:parseInt(this.value)};t=this.isRecurring?m(m({},t),{},{startingMonthId:this.monthId,frequency:parseInt(this.frequency)}):m(m({},t),{},{monthId:this.monthId}),void 0!==this.expenseId&&(t=m(m({},t),{},{id:this.expenseId})),this.$emit("submit",t),this.resetForm()},loadInitialExpenseData:function(){var t=this.initialExpenseData;void 0!==t&&(this.categoryId=t.categoryId,this.expenseId=t.id,this.name=t.name,this.value=t.value.toString(),Object(f.a)(t)?(this.isRecurring=!1,this.monthId=t.monthId):Object(f.b)(t)&&(this.frequency=t.frequency.toString(),this.isRecurring=!0,this.monthId=t.startingMonthId))},resetForm:function(){this.categoryId=l.a.food.id,this.expenseId=void 0,this.frequency="1",this.isRecurring=!1,this.monthId=this.initialMonthId,this.name="",this.value="10",this.$refs.form.resetValidation(),this.loadInitialExpenseData()}}}),x=n(39),O=n(44),_=n.n(O),j=n(234),w=n(462),$=n(459),I=n(627),k=n(636),S=n(453),E=n(726),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.$tc("expense.title",1)))]),t._v(" "),n("v-card-text",[n("v-text-field",{staticClass:"name-input",attrs:{type:"text",counter:20,label:t.$t("misc.name"),rules:t.nameRules,"prepend-icon":"mdi-pencil",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.valueRules,type:"number",label:t.$t("misc.value"),"prepend-icon":"mdi-currency-usd",required:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("month-selection",{model:{value:t.monthId,callback:function(e){t.monthId=e},expression:"monthId"}}),t._v(" "),n("category-selection",{model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}}),t._v(" "),n("v-checkbox",{attrs:{label:t.$t("misc.recurring"),"hide-details":""},model:{value:t.isRecurring,callback:function(e){t.isRecurring=e},expression:"isRecurring"}}),t._v(" "),n("v-text-field",{attrs:{rules:t.frequencyRules,disabled:!t.isRecurring,type:"number",label:t.$t("frequency.title"),hint:t.$tc("frequency.hint",t.isRecurring?+t.frequency:0),"persistent-hint":!0,"prepend-icon":"mdi-repeat"},model:{value:t.frequency,callback:function(e){t.frequency=e},expression:"frequency"}})],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:"",color:"primary",disabled:!t.valid},on:{click:function(e){return t.emitExpense()}}},[t._v(t._s(t.submitLabel))])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{MonthSelection:n(464).default,CategorySelection:n(619).default}),_()(component,{VBtn:j.a,VCard:w.a,VCardActions:$.a,VCardText:$.c,VCardTitle:$.d,VCheckbox:I.a,VForm:k.a,VSpacer:S.a,VTextField:E.a})},619:function(t,e,n){"use strict";n.r(e);var r=n(78),o=n(54),c=Object(o.a)({props:{value:{type:String,required:!0}},computed:Object(r.c)("categories",["categories"])}),l=n(39),d=n(44),f=n.n(d),h=n(635),v=n(125),m=n(45),y=n(632),x=n(670),O=n(453),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-select",{attrs:{value:t.value,items:t.categories,"item-value":"id",label:t.$tc("category.title",1),"prepend-icon":"mdi-format-list-bulleted-type"},on:{input:function(e){return t.$emit("input",e)}},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[t._v("\n    "+t._s(t.$t(n.name))+"\n  ")]}},{key:"item",fn:function(e){var r=e.item,o=e.attrs,c=e.on;return[n("v-list-item",t._g(t._b({},"v-list-item",o,!1),c),[n("v-list-item-content",[n("v-list-item-title",[n("v-row",{attrs:{"no-gutters":"",align:"center"}},[n("span",[t._v(t._s(t.$t(r.name)))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-badge",{attrs:{inline:"",color:r.color}})],1)],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBadge:h.a,VListItem:v.a,VListItemContent:m.a,VListItemTitle:m.b,VRow:y.a,VSelect:x.a,VSpacer:O.a})},622:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(78),c=n(463),l=n(73),d=Object(r.a)({props:{expenses:{type:Array,required:!0},title:{type:String,default:void 0},includeOneTimeData:{type:Boolean,default:!1},includeRecurringData:{type:Boolean,default:!1}},data:function(){var t=this,e=[{text:this.$t("misc.name"),value:"name"},{text:this.$tc("category.title",1),value:"categoryId",sort:function(a,b){return Object(l.b)(a,b,(function(e){return t.$t(e)}))}},{text:this.$t("misc.value"),value:"value"}];return this.includeOneTimeData&&e.push({text:this.$tc("month.title",1),value:"monthId"}),this.includeRecurringData&&e.push({text:this.$tc("misc.since",1),value:"startingMonthId"},{text:this.$t("frequency.title"),value:"frequency"}),e.push({text:this.$t("misc.actions"),value:"actions",sortable:!1,filterable:!1}),{footerProps:{itemsPerPageAllText:this.$t("misc.table.all"),itemsPerPageText:this.$t("misc.table.items-per-page")},headerProps:{sortByText:this.$t("misc.table.sort-by")},headers:e,search:""}},computed:Object(o.c)("categories",["byId"]),methods:{deleteExpense:function(t){Object(c.b)(t)?this.$store.commit("recurringExpenses/remove",t):Object(c.a)(t)&&this.$store.commit("months/removeExpense",t)}}}),f=n(39),h=n(44),v=n.n(h),m=n(635),y=n(234),x=n(462),O=n(459),_=n(731),j=n(168),w=n(453),$=n(726),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",{class:{"pb-0":t.$vuetify.breakpoint.xsOnly}},[t._v("\n    "+t._s(t.title||t.$tc("expense.title",2))+"\n    "),n("v-spacer"),t._v(" "),n("v-text-field",{staticClass:"mt-0 pt-0",attrs:{"append-icon":"mdi-magnify",label:t.$t("actions.search"),"single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),n("client-only",[n("v-data-table",{attrs:{headers:t.headers,items:t.expenses,"items-per-page":15,search:t.search,"footer-props":t.footerProps,"header-props":t.headerProps,"no-data-text":t.$t("misc.no-data"),"no-results-text":t.$t("misc.no-results")},scopedSlots:t._u([{key:"item.categoryId",fn:function(e){var r=e.item;return[n("span",{staticClass:"d-inline-flex"},[n("v-badge",{staticClass:"mr-2",attrs:{inline:"",color:t.byId(r.categoryId).color}}),t._v("\n          "+t._s(t.$t(t.byId(r.categoryId).name))+"\n        ")],1)]}},{key:"item.monthId",fn:function(e){var r=e.item;return[r.monthId?n("month-name",{attrs:{"month-id":r.monthId}}):t._e()]}},{key:"item.startingMonthId",fn:function(e){var r=e.item;return[r.startingMonthId?n("month-name",{attrs:{"month-id":r.startingMonthId}}):t._e()]}},{key:"item.frequency",fn:function(e){var r=e.item;return[r.frequency?n("span",[t._v(t._s(t.$tc("frequency.description",r.frequency)))]):t._e()]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("edit-expense-dialog",{attrs:{expense:r}}),t._v(" "),n("v-btn",{attrs:{small:"",icon:"",color:"error","aria-label":t.$t("actions.delete"),title:t.$t("actions.delete")},on:{click:function(e){return t.deleteExpense(r)}}},[n("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-delete")}})],1)]}},{key:"footer.page-text",fn:function(e){var n=e.pageStart,r=e.pageStop,o=e.itemsLength;return[t._v("\n        "+t._s(t.$t("misc.table.page-text",[n,r,o]))+"\n      ")]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{MonthName:n(471).default,EditExpenseDialog:n(629).default}),v()(component,{VBadge:m.a,VBtn:y.a,VCard:x.a,VCardTitle:O.d,VDataTable:_.a,VIcon:j.a,VSpacer:w.a,VTextField:$.a})},627:function(t,e,n){"use strict";n(8),n(6),n(10),n(12),n(9),n(13);var r=n(93),o=n(2),c=(n(20),n(71),n(467),n(469),n(85)),l=n(466),d=n(101),f=n(0).default.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),h=n(615),v=n(14);function m(t){t.preventDefault()}var y=Object(v.a)(l.a,f,h.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:m},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:m},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}}),x=["title"];function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=y.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return _(_({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,x));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",_(_({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},629:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(463),c=Object(r.a)({props:{expense:{type:Object,required:!0}},methods:{updateExpense:function(t,dialog){dialog.value=!1;var e=this.expense;Object(o.b)(t)?(Object(o.a)(e)&&this.$store.commit("months/removeExpense",e),this.$store.commit("recurringExpenses/add",t)):Object(o.a)(t)&&(Object(o.b)(e)?this.$store.commit("recurringExpenses/remove",e):Object(o.a)(e)&&e.monthId!==t.monthId&&this.$store.commit("months/removeExpense",e),this.$store.commit("months/addExpense",t))}}}),l=n(39),d=n(44),f=n.n(d),h=n(234),v=n(646),m=n(168),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",icon:"",small:"","aria-label":t.$t("actions.edit"),title:t.$t("actions.edit")}},"v-btn",o,!1),r),[n("v-icon",{attrs:{small:""},domProps:{textContent:t._s("mdi-pencil")}})],1)]}},{key:"default",fn:function(dialog){return[n("expense-form",{ref:"form",attrs:{"initial-expense-data":t.expense,"submit-label":t.$t("actions.update")},on:{submit:function(e){return t.updateExpense(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{ExpenseForm:n(613).default}),f()(component,{VBtn:h.a,VDialog:v.a,VIcon:m.a})},632:function(t,e,n){"use strict";n(6),n(10),n(12),n(13);var r=n(2),o=(n(34),n(50),n(26),n(8),n(32),n(60),n(210),n(20),n(35),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(40),n(9),n(292),n(0)),c=n(94),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return h.reduce((function(n,r){return n[t+Object(l.G)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},x=m("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},w=m("alignContent",(function(){return{type:String,default:null,validator:j}})),$={align:Object.keys(x),justify:Object.keys(_),alignContent:Object.keys(w)},I={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=I[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},x),{},{justify:{type:String,default:null,validator:O}},_),{},{alignContent:{type:String,default:null,validator:j}},w),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var f=S.get(l);return f||function(){var t,e;for(e in f=[],$)$[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&f.push(o)}));f.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,f)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},635:function(t,e,n){"use strict";n(8),n(6),n(10),n(12),n(9),n(13);var r=n(93),o=n(2),c=(n(33),n(610),n(168)),l=n(49),d=n(29),f=n(61),h=n(0).default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=n(102),m=n(14),y=n(1),x=["aria-atomic","aria-label","aria-live","role","title"];function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(m.a)(l.a,Object(v.b)(["left","bottom"]),d.a,f.a,h).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(y.g)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(y.s)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(c.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(y.s)(this)],o=this.$attrs,c=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(r.a)(o,x));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:c,class:this.classes},n)}})},638:function(t,e,n){"use strict";n.r(e);var r=n(54),o=Object(r.a)({props:{expenses:{type:Array,required:!0}}}),c=n(39),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("expense-table",{attrs:{expenses:t.expenses,title:t.$tc("expense.one-time",2),"include-one-time-data":""}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExpenseTable:n(622).default})},639:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(78),c=Object(r.a)({computed:Object(o.c)("recurringExpenses",["recurringExpenses"])}),l=n(39),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("expense-table",{attrs:{expenses:t.recurringExpenses,title:t.$tc("expense.recurring",2),"include-recurring-data":""}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ExpenseTable:n(622).default})},642:function(t,e,n){"use strict";n.r(e);n(8),n(6),n(10),n(12),n(9),n(13);var r=n(2),o=n(54),c=n(131),l=n(463);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=Object(o.a)({props:{initialMonthId:{type:String,default:Object(c.a)()}},methods:{createNewExpense:function(t,dialog){dialog.value=!1,Object(l.b)(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({id:""},t))?this.$store.dispatch("recurringExpenses/create",t):Object(l.a)(t)&&this.$store.dispatch("months/createExpense",t)}}}),h=n(39),v=n(44),m=n.n(v),y=n(234),x=n(646),O=n(168),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{transition:"dialog-bottom-transition","max-width":"600"},on:{"click:outside":function(e){return t.$refs.form.resetForm()}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",fab:"",fixed:"",bottom:"",right:"","aria-label":t.$t("misc.new-expense"),title:t.$t("misc.new-expense")}},"v-btn",o,!1),r),[n("v-icon",{domProps:{textContent:t._s("mdi-plus")}})],1)]}},{key:"default",fn:function(dialog){return[n("expense-form",{ref:"form",attrs:{"initial-month-id":t.initialMonthId,"submit-label":t.$t("actions.create")},on:{submit:function(e){return t.createNewExpense(e,dialog)}}})]}}])})}),[],!1,null,null,null);e.default=component.exports;m()(component,{ExpenseForm:n(613).default}),m()(component,{VBtn:y.a,VDialog:x.a,VIcon:O.a})},647:function(t,e,n){"use strict";n(6),n(10),n(12),n(13);var r=n(2),o=(n(33),n(8),n(32),n(60),n(210),n(20),n(35),n(211),n(212),n(213),n(214),n(215),n(216),n(217),n(218),n(219),n(220),n(221),n(222),n(223),n(40),n(34),n(9),n(72),n(292),n(0)),c=n(94),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),y=h.reduce((function(t,e){return t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(y)};function O(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=_.get(l);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=O(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),_.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},735:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(78),c=n(231),l=Object(r.a)({head:function(){return{title:this.$tc(c.a.expenses.title,2)}},computed:Object(o.c)("months",["oneTimeExpenses"])}),d=n(39),f=n(44),h=n.n(f),v=n(647),m=n(632),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"12"}},[n("recurring-expense-table")],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("one-time-expense-table",{attrs:{expenses:t.oneTimeExpenses}})],1),t._v(" "),n("create-expense-dialog")],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{RecurringExpenseTable:n(639).default,OneTimeExpenseTable:n(638).default,CreateExpenseDialog:n(642).default}),h()(component,{VCol:v.a,VRow:m.a})}}]);