(window.webpackJsonp=window.webpackJsonp||[]).push([[22,42],{500:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(502);function o(object){return Object(r.a)(object)}function c(object){return Object(r.b)(object)}},502:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(31);function r(object){return void 0!==object&&void 0!==object.name&&void 0!==object.value}function o(object){return r(object)&&void 0!==object&&void 0!==object.monthId}function c(object){return r(object)&&void 0!==object.startingMonthId&&void 0!==object.frequency}},524:function(t,e,n){"use strict";function r(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}n.d(e,"a",(function(){return r}))},525:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"b",(function(){return O})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return y}));var r=n(53),o=n(13),c=(n(12),n(4),n(52),n(31),n(26),n(323),n(324),n(129)),l=n.n(c),d=n(500),f=n(35),m=n(156),h="origin";function v(t){return"".concat(t,"10")}function j(t,e,n){var data=Object(m.c)(Object(m.b)(t,e)).filter((function(t){return t.value>0}));return{labels:data.map((function(t){return n.t(t.category.name)})),datasets:[{label:n.tc("category.title",e.length),backgroundColor:data.map((function(element){return element.category.color})),borderColor:l.a.shades.transparent,data:data.map((function(element){return element.value})),maxBarThickness:150}]}}function O(t,e){var n=t.reduce((function(t,e){var n=Object(o.a)(t,2),c=n[0],l=n[1];return Object(d.a)(e)?[[].concat(Object(r.a)(c),[e]),l]:Object(d.b)(e)?[c,[].concat(Object(r.a)(l),[e])]:[c,l]}),[[],[]]),c=Object(o.a)(n,2),m=c[0],h=c[1],data=[{label:e.tc("income.one-time",m.length),backGroundColor:l.a.green.base,borderColor:l.a.shades.transparent,value:Object(f.b)(m,(function(t){return t.value}))},{label:e.tc("income.recurring",h.length),backGroundColor:l.a.blue.base,borderColor:l.a.shades.transparent,value:Object(f.b)(h,(function(t){return t.value}))}].filter((function(t){return t.value>0}));return{labels:data.map((function(element){return element.label})),datasets:[{label:e.tc("income.title",2),backgroundColor:data.map((function(element){return element.backGroundColor})),borderColor:data.map((function(element){return element.borderColor})),data:data.map((function(element){return element.value}))}]}}function C(t,e,n,o){var c=t.map((function(t){return Object(m.c)(Object(m.b)([].concat(Object(r.a)(Object(f.c)(t.expenses)),Object(r.a)(Object(m.a)(t.id,n))),e))})),l=e.map((function(t){var e;return{label:o.t(t.name),borderColor:t.color,backgroundColor:v(t.color),data:null===(e=c.flatMap((function(e){return e.filter((function(e){return e.category.id===t.id}))})))||void 0===e?void 0:e.map((function(t){return t.value})),fill:h,tension:0}})).filter((function(t){return t.data.some((function(t){return t>0}))}));return{labels:t.map((function(t){return o.d(new Date(t.id),"month")})),datasets:l}}function k(t,e,n){var r=t.map((function(t){return Object(f.b)(Object(f.c)(t.incomes),(function(t){return t.value}))})),o=t.map((function(t){return Object(f.b)(Object(m.a)(t.id,e),(function(t){return t.value}))})),c={label:n.tc("income.one-time",2),backgroundColor:v(l.a.green.base),borderColor:l.a.green.base,data:r,fill:h,tension:0},d={label:n.tc("income.recurring",2),backgroundColor:v(l.a.blue.base),borderColor:l.a.blue.base,data:o,fill:h,tension:0};return{labels:t.map((function(t){return n.d(new Date(t.id),"month")})),datasets:[c,d]}}function y(t,e,n,o){var c=t.map((function(t){return Object(f.b)([].concat(Object(r.a)(Object(f.c)(t.expenses)),Object(r.a)(Object(m.a)(t.id,e))),(function(t){return t.value}))})),d=t.map((function(t){return Object(f.b)([].concat(Object(r.a)(Object(f.c)(t.incomes)),Object(r.a)(Object(m.a)(t.id,n))),(function(t){return t.value}))})),j=c.map((function(t,e){return d[e]-t})),O={label:o.tc("expense.title",2),backgroundColor:v(l.a.red.base),borderColor:l.a.red.base,data:c,fill:h,tension:0},C={label:o.tc("income.title",1),backgroundColor:v(l.a.blue.base),borderColor:l.a.blue.base,data:d,fill:h,tension:0},k={label:o.tc("misc.profit",1),backgroundColor:v(l.a.green.base),borderColor:l.a.green.base,data:j,fill:h,tension:0};return{labels:t.map((function(t){return o.d(new Date(t.id),"month")})),datasets:[O,C,k]}}},617:function(t,e,n){"use strict";n.r(e);n(37);var r=n(41),o=n(539),c=n(524),l=Object(r.a)({components:{DoughnutChart:o.DoughnutChart},props:{chartData:{type:Object,required:!0},cutoutPercentage:{type:Number,default:50}},computed:{options:function(){var t=Object(c.a)(this.$vuetify).fontColor;return{responsive:!0,maintainAspectRatio:!1,cutout:"".concat(this.cutoutPercentage,"%"),plugins:{legend:{labels:{color:t}},tooltip:{displayColors:!1,enabled:!0}}}}}}),d=n(28),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("doughnut-chart",{staticClass:"responsive-graph",attrs:{"chart-data":t.chartData,options:t.options,width:100}})}),[],!1,null,null,null);e.default=component.exports},739:function(t,e,n){"use strict";n.r(e);var r=n(41),o=n(525),c=Object(r.a)({props:{expenses:{type:Array,required:!0},height:{type:String,default:"20rem"}},computed:{expenseChartData:function(){return Object(o.a)(this.expenses,this.$store.getters["categories/categories"],this.$i18n)}}}),l=n(28),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("client-only",[t.expenseChartData.labels.length>0?n("pie-chart",{style:"height: "+t.height+";",attrs:{"chart-data":t.expenseChartData}}):n("div",{staticStyle:{"text-align":"center"}},[t._v(t._s(t.$t("misc.no-data")))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PieChart:n(617).default})}}]);