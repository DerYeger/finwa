(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{530:function(t,o,e){"use strict";function r(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}e.d(o,"a",(function(){return r}))},622:function(t,o,e){"use strict";e.r(o);e(36);var r=e(40),n=e(545),c=e(530),l=Object(r.a)({components:{DoughnutChart:n.DoughnutChart},props:{chartData:{type:Object,required:!0},cutoutPercentage:{type:Number,default:50}},computed:{options:function(){var t=Object(c.a)(this.$vuetify).fontColor;return{responsive:!0,maintainAspectRatio:!1,cutout:"".concat(this.cutoutPercentage,"%"),plugins:{legend:{labels:{color:t}},tooltip:{displayColors:!1,enabled:!0}}}}}}),d=e(27),component=Object(d.a)(l,(function(){var t=this,o=t.$createElement;return(t._self._c||o)("doughnut-chart",{staticClass:"responsive-graph",attrs:{"chart-data":t.chartData,options:t.options,width:100}})}),[],!1,null,null,null);o.default=component.exports}}]);