(window.webpackJsonp=window.webpackJsonp||[]).push([[25,23],{597:function(t,n,e){"use strict";e.d(n,"b",(function(){return r})),e.d(n,"a",(function(){return o})),e.d(n,"d",(function(){return l})),e.d(n,"c",(function(){return d})),e.d(n,"f",(function(){return c})),e.d(n,"e",(function(){return h}));e(19),e(70);function r(t){return t.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}var j="N/A";function o(t){var n;return null!==(n=t.value)&&void 0!==n?n:j}function l(t,data){var n;return void 0===t[0].datasetIndex||void 0===data.datasets?j:null!==(n=data.datasets[t[0].datasetIndex].label)&&void 0!==n?n:j}function d(t){var n;return null!==(n=t.value)&&void 0!==n?n:j}function c(t,data){var n,e;return void 0===t[0].index||void 0===data.labels?j:null!==(e=null===(n=data.labels[t[0].index])||void 0===n?void 0:n.toString())&&void 0!==e?e:j}function h(t,data){var n,e;if(void 0===t.index||void 0===data.datasets)return j;var r=data.datasets[0];return void 0===r.data?j:null!==(e=null===(n=r.data[t.index])||void 0===n?void 0:n.toString())&&void 0!==e?e:j}},618:function(t,n,e){var map={"./af":461,"./af.js":461,"./ar":462,"./ar-dz":463,"./ar-dz.js":463,"./ar-kw":464,"./ar-kw.js":464,"./ar-ly":465,"./ar-ly.js":465,"./ar-ma":466,"./ar-ma.js":466,"./ar-sa":467,"./ar-sa.js":467,"./ar-tn":468,"./ar-tn.js":468,"./ar.js":462,"./az":469,"./az.js":469,"./be":470,"./be.js":470,"./bg":471,"./bg.js":471,"./bm":472,"./bm.js":472,"./bn":473,"./bn-bd":474,"./bn-bd.js":474,"./bn.js":473,"./bo":475,"./bo.js":475,"./br":476,"./br.js":476,"./bs":477,"./bs.js":477,"./ca":478,"./ca.js":478,"./cs":479,"./cs.js":479,"./cv":480,"./cv.js":480,"./cy":481,"./cy.js":481,"./da":482,"./da.js":482,"./de":483,"./de-at":484,"./de-at.js":484,"./de-ch":485,"./de-ch.js":485,"./de.js":483,"./dv":486,"./dv.js":486,"./el":487,"./el.js":487,"./en-au":488,"./en-au.js":488,"./en-ca":489,"./en-ca.js":489,"./en-gb":490,"./en-gb.js":490,"./en-ie":491,"./en-ie.js":491,"./en-il":492,"./en-il.js":492,"./en-in":493,"./en-in.js":493,"./en-nz":494,"./en-nz.js":494,"./en-sg":495,"./en-sg.js":495,"./eo":496,"./eo.js":496,"./es":497,"./es-do":498,"./es-do.js":498,"./es-mx":499,"./es-mx.js":499,"./es-us":500,"./es-us.js":500,"./es.js":497,"./et":501,"./et.js":501,"./eu":502,"./eu.js":502,"./fa":503,"./fa.js":503,"./fi":504,"./fi.js":504,"./fil":505,"./fil.js":505,"./fo":506,"./fo.js":506,"./fr":507,"./fr-ca":508,"./fr-ca.js":508,"./fr-ch":509,"./fr-ch.js":509,"./fr.js":507,"./fy":510,"./fy.js":510,"./ga":511,"./ga.js":511,"./gd":512,"./gd.js":512,"./gl":513,"./gl.js":513,"./gom-deva":514,"./gom-deva.js":514,"./gom-latn":515,"./gom-latn.js":515,"./gu":516,"./gu.js":516,"./he":517,"./he.js":517,"./hi":518,"./hi.js":518,"./hr":519,"./hr.js":519,"./hu":520,"./hu.js":520,"./hy-am":521,"./hy-am.js":521,"./id":522,"./id.js":522,"./is":523,"./is.js":523,"./it":524,"./it-ch":525,"./it-ch.js":525,"./it.js":524,"./ja":526,"./ja.js":526,"./jv":527,"./jv.js":527,"./ka":528,"./ka.js":528,"./kk":529,"./kk.js":529,"./km":530,"./km.js":530,"./kn":531,"./kn.js":531,"./ko":532,"./ko.js":532,"./ku":533,"./ku.js":533,"./ky":534,"./ky.js":534,"./lb":535,"./lb.js":535,"./lo":536,"./lo.js":536,"./lt":537,"./lt.js":537,"./lv":538,"./lv.js":538,"./me":539,"./me.js":539,"./mi":540,"./mi.js":540,"./mk":541,"./mk.js":541,"./ml":542,"./ml.js":542,"./mn":543,"./mn.js":543,"./mr":544,"./mr.js":544,"./ms":545,"./ms-my":546,"./ms-my.js":546,"./ms.js":545,"./mt":547,"./mt.js":547,"./my":548,"./my.js":548,"./nb":549,"./nb.js":549,"./ne":550,"./ne.js":550,"./nl":551,"./nl-be":552,"./nl-be.js":552,"./nl.js":551,"./nn":553,"./nn.js":553,"./oc-lnc":554,"./oc-lnc.js":554,"./pa-in":555,"./pa-in.js":555,"./pl":556,"./pl.js":556,"./pt":557,"./pt-br":558,"./pt-br.js":558,"./pt.js":557,"./ro":559,"./ro.js":559,"./ru":560,"./ru.js":560,"./sd":561,"./sd.js":561,"./se":562,"./se.js":562,"./si":563,"./si.js":563,"./sk":564,"./sk.js":564,"./sl":565,"./sl.js":565,"./sq":566,"./sq.js":566,"./sr":567,"./sr-cyrl":568,"./sr-cyrl.js":568,"./sr.js":567,"./ss":569,"./ss.js":569,"./sv":570,"./sv.js":570,"./sw":571,"./sw.js":571,"./ta":572,"./ta.js":572,"./te":573,"./te.js":573,"./tet":574,"./tet.js":574,"./tg":575,"./tg.js":575,"./th":576,"./th.js":576,"./tk":577,"./tk.js":577,"./tl-ph":578,"./tl-ph.js":578,"./tlh":579,"./tlh.js":579,"./tr":580,"./tr.js":580,"./tzl":581,"./tzl.js":581,"./tzm":582,"./tzm-latn":583,"./tzm-latn.js":583,"./tzm.js":582,"./ug-cn":584,"./ug-cn.js":584,"./uk":585,"./uk.js":585,"./ur":586,"./ur.js":586,"./uz":587,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":587,"./vi":589,"./vi.js":589,"./x-pseudo":590,"./x-pseudo.js":590,"./yo":591,"./yo.js":591,"./zh-cn":592,"./zh-cn.js":592,"./zh-hk":593,"./zh-hk.js":593,"./zh-mo":594,"./zh-mo.js":594,"./zh-tw":595,"./zh-tw.js":595};function r(t){var n=j(t);return e(n)}function j(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=j,t.exports=r,r.id=618},650:function(t,n,e){"use strict";e.r(n);var r=e(604),j=e(54),o=e(597),l=Object(j.a)({extends:r.b,mixins:[r.d.reactiveProp],computed:{chartOptions:function(){var t=Object(o.b)(this.$vuetify),n=t.fontColor,e=t.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:n}}],yAxes:[{gridLines:{display:!0,color:e,zeroLineColor:e},ticks:{beginAtZero:!0,fontColor:n}}]},legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{title:o.d,label:o.c}}}}},watch:{chartOptions:function(t){this.render(t)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(t){this.renderChart(this.chartData,t)}}}),d=e(38),component=Object(d.a)(l,undefined,undefined,!1,null,null,null);n.default=component.exports},661:function(t,n,e){"use strict";e.r(n);var r=e(54),j=e(226),o=Object(r.a)({computed:{monthChartData:function(){var t=this.$store.getters,n=t["months/sorted"](12),e=t["recurringExpenses/recurringExpenses"],r=t["categories/categories"];return Object(j.c)(n,r,e,this.$i18n)},lineChartStyles:function(){return{margin:"auto",position:"relative",width:"99%"}}}}),l=e(38),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("line-chart",{attrs:{"chart-data":t.monthChartData,styles:t.lineChartStyles}})}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{LineChart:e(650).default})}}]);