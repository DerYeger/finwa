(window.webpackJsonp=window.webpackJsonp||[]).push([[19,8,16,17],{437:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return f}));n(19),n(69);function r(e){return e.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}var o="N/A";function c(e){var t;return null!==(t=e.value)&&void 0!==t?t:o}function l(e,data){var t;return void 0===e[0].datasetIndex||void 0===data.datasets?o:null!==(t=data.datasets[e[0].datasetIndex].label)&&void 0!==t?t:o}function d(e){var t;return null!==(t=e.value)&&void 0!==t?t:o}function j(e,data){var t,n;return void 0===e[0].index||void 0===data.labels?o:null!==(n=null===(t=data.labels[e[0].index])||void 0===t?void 0:t.toString())&&void 0!==n?n:o}function f(e,data){var t,n;if(void 0===e.index||void 0===data.datasets)return o;var r=data.datasets[0];return void 0===r.data?o:null!==(n=null===(t=r.data[e.index])||void 0===t?void 0:t.toString())&&void 0!==n?n:o}},573:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return v}));n(9),n(7),n(15),n(8),n(16);var r=n(2),o=(n(49),n(10),n(26),n(580),n(581),n(128)),c=n(81);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function j(e,t){return e.map((function(e){var n;return{expense:e,category:null!==(n=t[e.categoryId])&&void 0!==n?n:o.a.uncategorized}}))}function f(e,t){return t.map((function(t){return{category:t,expenses:e.filter((function(e){return e.categoryId===t.id}))}}))}function m(e){return e.map((function(e){return d(d({},e),{},{value:Object(c.a)(e.expenses.map((function(e){return e.value})))})}))}function v(e,t,n){var r=e.map((function(e){return m(f(Object(c.b)(e.expenses),t))})),o=t.map((function(e){var t;return{label:n.t(e.name),borderColor:e.color,backgroundColor:"".concat(e.color,"10"),data:null===(t=r.flatMap((function(t){return t.filter((function(t){return t.category.id===e.id}))})))||void 0===t?void 0:t.map((function(e){return e.value}))}}));return{labels:e.map((function(e){return n.d(new Date(e.id),"month")})),datasets:o}}},576:function(e,t,n){"use strict";n.r(t);n(31);var r=n(574),o=n(48),c=n(437),l=Object(o.a)({extends:r.c,mixins:[r.d.reactiveProp],props:{cutoutPercentage:{type:Number,default:50}},computed:{chartOptions:function(){var e=Object(c.b)(this.$vuetify).fontColor;return{responsive:!0,cutoutPercentage:this.cutoutPercentage,legend:{labels:{fontColor:e}},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{title:c.f,label:c.e}}}}},watch:{chartOptions:function(e){this.render(e)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(e){this.renderChart(this.chartData,e)}}}),d=n(34),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports},577:function(e,t,n){"use strict";n.r(t);var r=n(574),o=n(48),c=n(437),l=Object(o.a)({extends:r.a,mixins:[r.d.reactiveProp],computed:{chartOptions:function(){var e=Object(c.b)(this.$vuetify),t=e.fontColor,n=e.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:t}}],yAxes:[{gridLines:{display:!0,color:n,zeroLineColor:n},ticks:{beginAtZero:!0,fontColor:t}}]},legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{label:c.a}}}}},watch:{chartOptions:function(e){this.render(e)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(e){this.renderChart(this.chartData,e)}}}),d=n(34),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);t.default=component.exports},582:function(e,t,n){var map={"./af":438,"./af.js":438,"./ar":439,"./ar-dz":440,"./ar-dz.js":440,"./ar-kw":441,"./ar-kw.js":441,"./ar-ly":442,"./ar-ly.js":442,"./ar-ma":443,"./ar-ma.js":443,"./ar-sa":444,"./ar-sa.js":444,"./ar-tn":445,"./ar-tn.js":445,"./ar.js":439,"./az":446,"./az.js":446,"./be":447,"./be.js":447,"./bg":448,"./bg.js":448,"./bm":449,"./bm.js":449,"./bn":450,"./bn-bd":451,"./bn-bd.js":451,"./bn.js":450,"./bo":452,"./bo.js":452,"./br":453,"./br.js":453,"./bs":454,"./bs.js":454,"./ca":455,"./ca.js":455,"./cs":456,"./cs.js":456,"./cv":457,"./cv.js":457,"./cy":458,"./cy.js":458,"./da":459,"./da.js":459,"./de":460,"./de-at":461,"./de-at.js":461,"./de-ch":462,"./de-ch.js":462,"./de.js":460,"./dv":463,"./dv.js":463,"./el":464,"./el.js":464,"./en-au":465,"./en-au.js":465,"./en-ca":466,"./en-ca.js":466,"./en-gb":467,"./en-gb.js":467,"./en-ie":468,"./en-ie.js":468,"./en-il":469,"./en-il.js":469,"./en-in":470,"./en-in.js":470,"./en-nz":471,"./en-nz.js":471,"./en-sg":472,"./en-sg.js":472,"./eo":473,"./eo.js":473,"./es":474,"./es-do":475,"./es-do.js":475,"./es-mx":476,"./es-mx.js":476,"./es-us":477,"./es-us.js":477,"./es.js":474,"./et":478,"./et.js":478,"./eu":479,"./eu.js":479,"./fa":480,"./fa.js":480,"./fi":481,"./fi.js":481,"./fil":482,"./fil.js":482,"./fo":483,"./fo.js":483,"./fr":484,"./fr-ca":485,"./fr-ca.js":485,"./fr-ch":486,"./fr-ch.js":486,"./fr.js":484,"./fy":487,"./fy.js":487,"./ga":488,"./ga.js":488,"./gd":489,"./gd.js":489,"./gl":490,"./gl.js":490,"./gom-deva":491,"./gom-deva.js":491,"./gom-latn":492,"./gom-latn.js":492,"./gu":493,"./gu.js":493,"./he":494,"./he.js":494,"./hi":495,"./hi.js":495,"./hr":496,"./hr.js":496,"./hu":497,"./hu.js":497,"./hy-am":498,"./hy-am.js":498,"./id":499,"./id.js":499,"./is":500,"./is.js":500,"./it":501,"./it-ch":502,"./it-ch.js":502,"./it.js":501,"./ja":503,"./ja.js":503,"./jv":504,"./jv.js":504,"./ka":505,"./ka.js":505,"./kk":506,"./kk.js":506,"./km":507,"./km.js":507,"./kn":508,"./kn.js":508,"./ko":509,"./ko.js":509,"./ku":510,"./ku.js":510,"./ky":511,"./ky.js":511,"./lb":512,"./lb.js":512,"./lo":513,"./lo.js":513,"./lt":514,"./lt.js":514,"./lv":515,"./lv.js":515,"./me":516,"./me.js":516,"./mi":517,"./mi.js":517,"./mk":518,"./mk.js":518,"./ml":519,"./ml.js":519,"./mn":520,"./mn.js":520,"./mr":521,"./mr.js":521,"./ms":522,"./ms-my":523,"./ms-my.js":523,"./ms.js":522,"./mt":524,"./mt.js":524,"./my":525,"./my.js":525,"./nb":526,"./nb.js":526,"./ne":527,"./ne.js":527,"./nl":528,"./nl-be":529,"./nl-be.js":529,"./nl.js":528,"./nn":530,"./nn.js":530,"./oc-lnc":531,"./oc-lnc.js":531,"./pa-in":532,"./pa-in.js":532,"./pl":533,"./pl.js":533,"./pt":534,"./pt-br":535,"./pt-br.js":535,"./pt.js":534,"./ro":536,"./ro.js":536,"./ru":537,"./ru.js":537,"./sd":538,"./sd.js":538,"./se":539,"./se.js":539,"./si":540,"./si.js":540,"./sk":541,"./sk.js":541,"./sl":542,"./sl.js":542,"./sq":543,"./sq.js":543,"./sr":544,"./sr-cyrl":545,"./sr-cyrl.js":545,"./sr.js":544,"./ss":546,"./ss.js":546,"./sv":547,"./sv.js":547,"./sw":548,"./sw.js":548,"./ta":549,"./ta.js":549,"./te":550,"./te.js":550,"./tet":551,"./tet.js":551,"./tg":552,"./tg.js":552,"./th":553,"./th.js":553,"./tk":554,"./tk.js":554,"./tl-ph":555,"./tl-ph.js":555,"./tlh":556,"./tlh.js":556,"./tr":557,"./tr.js":557,"./tzl":558,"./tzl.js":558,"./tzm":559,"./tzm-latn":560,"./tzm-latn.js":560,"./tzm.js":559,"./ug-cn":561,"./ug-cn.js":561,"./uk":562,"./uk.js":562,"./ur":563,"./ur.js":563,"./uz":564,"./uz-latn":565,"./uz-latn.js":565,"./uz.js":564,"./vi":566,"./vi.js":566,"./x-pseudo":567,"./x-pseudo.js":567,"./yo":568,"./yo.js":568,"./zh-cn":569,"./zh-cn.js":569,"./zh-hk":570,"./zh-hk.js":570,"./zh-mo":571,"./zh-mo.js":571,"./zh-tw":572,"./zh-tw.js":572};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=582},583:function(e,t,n){"use strict";n.r(t);var r=n(75),o=n(48),c=(n(9),n(7),n(10),n(15),n(8),n(16),n(2)),l=n(218);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=n(128),m=Object(o.a)({data:function(){return{value:"0",categoryId:f.a.uncategorized.id}},computed:Object(r.b)(["categories"]),methods:{newExpense:function(){return data={categoryId:this.categoryId,value:parseInt(this.value)},j({id:Object(l.a)()},data);var data}}}),v=n(34),h=n(39),y=n.n(h),x=n(598),O=n(219),k=n(122),w=n(37),_=n(591),C=n(665),z=n(431),E=n(659),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-text-field",{attrs:{type:"number",label:e.$t("misc.costs")},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),n("v-select",{attrs:{items:e.categories,"item-value":"id",label:e.$tc("domain.category.title",1),dense:""},scopedSlots:e._u([{key:"selection",fn:function(t){var n=t.item;return[e._v("\n      "+e._s(e.$t(n.name))+"\n    ")]}},{key:"item",fn:function(t){var r=t.item,o=t.attrs,c=t.on;return[n("v-list-item",e._g(e._b({},"v-list-item",o,!1),c),[n("v-list-item-content",[n("v-list-item-title",[n("v-row",{attrs:{"no-gutters":"",align:"center"}},[n("span",[e._v(e._s(e.$t(r.name)))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-badge",{attrs:{inline:"",color:r.color}})],1)],1)],1)],1)]}}]),model:{value:e.categoryId,callback:function(t){e.categoryId=t},expression:"categoryId"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",disabled:e.value<1},on:{click:function(t){e.$emit("confirm",e.newExpense())}}},[e._v(e._s(e.$t("actions.create")))])],1)}),[],!1,null,null,null);t.default=component.exports;y()(component,{VBadge:x.a,VBtn:O.a,VListItem:k.a,VListItemContent:w.a,VListItemTitle:w.b,VRow:_.a,VSelect:C.a,VSpacer:z.a,VTextField:E.a})},584:function(e,t,n){"use strict";n.r(t);n(49),n(26);var r=n(48),o=n(573),c=Object(r.a)({props:{expenses:{type:Array,required:!0}},computed:{expenseChartData:function(){var e=this,t=this.$store.getters.categories,n=this.expenses,r=Object(o.d)(Object(o.c)(n,t));return{labels:t.map((function(t){return e.$t(t.name)})),datasets:[{label:this.$tc("domain.category.title",t.length),backgroundColor:t.map((function(e){return e.color})),data:r.map((function(element){return element.value}))}]}},barChartStyles:function(){return{margin:"auto",position:"relative",width:"99%",height:"24rem"}},pieChartStyles:function(){return{margin:"auto",position:"relative",width:"min(99%, 24rem)"}}}}),l=n(34),d=n(39),j=n.n(d),f=n(595),m=n(591),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{sm:"6",md:"6",lg:"4","align-self":"center"}},[n("pie-chart",{attrs:{"chart-data":e.expenseChartData,styles:e.pieChartStyles}})],1),e._v(" "),n("v-col",{attrs:{sm:"6",md:"6",lg:"8","align-self":"center"}},[n("bar-chart",{attrs:{"chart-data":e.expenseChartData,styles:e.barChartStyles}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{PieChart:n(576).default,BarChart:n(577).default}),j()(component,{VCol:f.a,VRow:m.a})},585:function(e,t,n){"use strict";n.r(t);var r=n(48),o=n(573),c=Object(r.a)({props:{expenses:{type:Array,required:!0}},computed:{mappedExpenses:function(){var e=this.$store.state.categories;return Object(o.b)(this.expenses,e)}}}),l=n(34),d=n(39),j=n.n(d),f=n(219),m=n(163),v=n(193),h=n(122),y=n(194),x=n(37),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("v-list",[n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0===e.mappedExpenses.length,expression:"mappedExpenses.length === 0"}]},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.$t("misc.empty-list")))])],1)],1),e._v(" "),e._l(e.mappedExpenses,(function(element){return n("v-list-item",{key:element.expense.id},[n("v-list-item-content",[n("v-list-item-title",[e._v(e._s(e.$t(element.category.name))+", "+e._s(element.expense.value))])],1),e._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{color:"red","x-small":"",fab:"",depressed:""},on:{click:function(t){return e.$emit("delete-expense",element.expense)}}},[n("v-icon",{domProps:{textContent:e._s("mdi-delete")}})],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;j()(component,{VBtn:f.a,VIcon:m.a,VList:v.a,VListItem:h.a,VListItemAction:y.a,VListItemContent:x.a,VListItemTitle:x.b})},592:function(e,t,n){"use strict";n.r(t);var r=n(48),o=n(75),c=n(130),l=n(81),d=Object(r.a)({props:{monthId:{type:String,required:!0}},computed:{month:function(){var e=this.$store.getters.monthById(this.monthId);if(void 0!==e)return e;var t=Object(c.a)({id:this.monthId});return this.$store.commit("addMonth",t),t},expenses:function(){return Object(l.b)(this.month.expenses)}},methods:Object(o.c)(["addExpenseToMonth","removeExpenseFromMonth"])}),j=n(34),f=n(39),m=n.n(f),v=n(601),h=n(575),y=n(417),component=Object(j.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[e._v(e._s(e.$d(new Date(e.month.id),"no-day")))]),e._v(" "),n("v-card-text",[n("expense-form",{on:{confirm:function(t){return e.addExpenseToMonth({month:e.month,expense:t})}}})],1),e._v(" "),n("v-divider",{staticClass:"my-4"}),e._v(" "),n("expense-chart",{attrs:{expenses:e.expenses}}),e._v(" "),n("v-divider",{staticClass:"my-4"}),e._v(" "),n("expense-list",{attrs:{expenses:e.expenses},on:{"delete-expense":function(t){return e.removeExpenseFromMonth({month:e.month,expense:t})}}})],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{ExpenseForm:n(583).default,ExpenseChart:n(584).default,ExpenseList:n(585).default}),m()(component,{VCard:v.a,VCardText:h.a,VCardTitle:h.b,VDivider:y.a})},667:function(e,t,n){"use strict";n.r(t);var r=n(48),o=n(217),c=n(130),l=Object(r.a)({data:function(){return{currentMonth:Object(c.b)()}},head:function(){return{title:this.$t(o.a.home.title)}}}),d=n(34),j=n(39),f=n.n(j),m=n(595),v=n(591),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",[n("month-overview",{attrs:{"month-id":e.currentMonth}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{MonthOverview:n(592).default}),f()(component,{VCol:m.a,VRow:v.a})}}]);