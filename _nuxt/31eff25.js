(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,14,17,23],{449:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return f}));var n=r(451),o=r(1),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),f=Object(o.h)("v-card__title");n.a},450:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return c})),r.d(t,"c",(function(){return d})),r.d(t,"f",(function(){return f})),r.d(t,"e",(function(){return h}));r(19),r(70);function n(e){return e.theme.dark?{fontColor:"rgba(255, 255, 255, 0.8)",gridColor:"rgba(255, 255, 255, 0.2)"}:{fontColor:"rgba(0, 0, 0, 0.8)",gridColor:"rgba(0, 0, 0, 0.2)"}}var o="N/A";function l(e){var t;return null!==(t=e.value)&&void 0!==t?t:o}function c(e,data){var t;return void 0===e[0].datasetIndex||void 0===data.datasets?o:null!==(t=data.datasets[e[0].datasetIndex].label)&&void 0!==t?t:o}function d(e){var t;return null!==(t=e.value)&&void 0!==t?t:o}function f(e,data){var t,r;return void 0===e[0].index||void 0===data.labels?o:null!==(r=null===(t=data.labels[e[0].index])||void 0===t?void 0:t.toString())&&void 0!==r?r:o}function h(e,data){var t,r;if(void 0===e.index||void 0===data.datasets)return o;var n=data.datasets[0];return void 0===n.data?o:null!==(r=null===(t=n.data[e.index])||void 0===t?void 0:t.toString())&&void 0!==r?r:o}},451:function(e,t,r){"use strict";r(8),r(7),r(10),r(13),r(9),r(14);var n=r(2),o=(r(32),r(219),r(593),r(220)),l=r(598),c=r(93),d=r(12);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=h({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=l.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},591:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"c",(function(){return v})),r.d(t,"d",(function(){return m})),r.d(t,"b",(function(){return j}));r(8),r(7),r(13),r(9),r(14);var n=r(53),o=r(2),l=(r(10),r(48),r(24),r(25),r(605),r(606),r(58)),c=r(103);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function h(e,t){return t.filter((function(t){return function(e,t){var r=new Date(e.id),n=new Date(t.startingMonthId);return Object(c.a)(r,n)%t.frequency==0}(e,t)}))}function v(e,t){return t.map((function(t){return{category:t,expenses:e.filter((function(e){return e.categoryId===t.id}))}}))}function m(e){return e.map((function(e){return f(f({},e),{},{value:Object(l.a)(e.expenses.map((function(e){return e.value})))})}))}function j(e,t,r,o){var c=e.map((function(e){return m(v([].concat(Object(n.a)(Object(l.b)(e.expenses)),Object(n.a)(h(e,r))),t))})),d=t.map((function(e){var t;return{label:o.t(e.name),borderColor:e.color,backgroundColor:"".concat(e.color,"10"),data:null===(t=c.flatMap((function(t){return t.filter((function(t){return t.category.id===e.id}))})))||void 0===t?void 0:t.map((function(e){return e.value}))}}));return{labels:e.map((function(e){return o.d(new Date(e.id),"month")})),datasets:d}}},593:function(e,t,r){var content=r(603);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("e23b7040",content,!0,{sourceMap:!1})},594:function(e,t,r){"use strict";function n(e){return void 0!==e.startingMonthId&&void 0!==e.frequency}r.d(t,"a",(function(){return n}))},598:function(e,t,r){"use strict";r(32);var n=r(0),o=(r(8),r(7),r(10),r(13),r(9),r(14),r(2)),l=(r(167),r(629),r(227)),c=r(140),d=r(46),f=r(100),h=r(231),v=r(27),m=r(1),j=r(12);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var _=Object(j.a)(d.a,Object(f.b)(["absolute","fixed","top","bottom"]),h.a,v.a).extend({name:"v-progress-linear",directives:{intersect:c.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e;return e={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(o.a)(e,this.isReversed?"right":"left",Object(m.f)(this.normalizedValue,"%")),Object(o.a)(e,"width",Object(m.f)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?l.c:l.e},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(m.f)(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var slot=Object(m.o)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(o.a)({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect().width;this.internalValue=e.offsetX/t*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){return e("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}});t.a=n.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(_,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},601:function(e,t,r){"use strict";r.r(t);r(32);var n=r(587),o=r(52),l=r(450),c=Object(o.a)({extends:n.c,mixins:[n.d.reactiveProp],props:{cutoutPercentage:{type:Number,default:50}},computed:{chartOptions:function(){var e=Object(l.b)(this.$vuetify).fontColor;return{responsive:!0,cutoutPercentage:this.cutoutPercentage,legend:{labels:{fontColor:e}},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{title:l.f,label:l.e}}}}},watch:{chartOptions:function(e){this.render(e)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(e){this.renderChart(this.chartData,e)}}}),d=r(37),component=Object(d.a)(c,undefined,undefined,!1,null,null,null);t.default=component.exports},602:function(e,t,r){"use strict";r.r(t);var n=r(587),o=r(52),l=r(450),c=Object(o.a)({extends:n.a,mixins:[n.d.reactiveProp],computed:{chartOptions:function(){var e=Object(l.b)(this.$vuetify),t=e.fontColor,r=e.gridColor;return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{fontColor:t}}],yAxes:[{gridLines:{display:!0,color:r,zeroLineColor:r},ticks:{beginAtZero:!0,fontColor:t}}]},legend:{display:!1},tooltips:{displayColors:!1,enabled:!0,mode:"single",callbacks:{label:l.a}}}}},watch:{chartOptions:function(e){this.render(e)}},mounted:function(){this.render(this.chartOptions)},methods:{render:function(e){this.renderChart(this.chartData,e)}}}),d=r(37),component=Object(d.a)(c,undefined,undefined,!1,null,null,null);t.default=component.exports},603:function(e,t,r){var n=r(22)(!1);n.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},604:function(e,t,r){"use strict";r(7),r(10),r(13),r(14);var n=r(2),o=(r(33),r(47),r(24),r(8),r(31),r(59),r(205),r(19),r(34),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(38),r(9),r(282),r(0)),l=r(91),c=r(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],v=["start","end","center"];function m(e,t){return h.reduce((function(r,n){return r[e+Object(c.z)(n)]=t(),r}),{})}var j=function(e){return[].concat(v,["baseline","stretch"]).includes(e)},y=m("align",(function(){return{type:String,default:null,validator:j}})),_=function(e){return[].concat(v,["space-between","space-around"]).includes(e)},O=m("justify",(function(){return{type:String,default:null,validator:_}})),x=function(e){return[].concat(v,["space-between","space-around","stretch"]).includes(e)},k=m("alignContent",(function(){return{type:String,default:null,validator:x}})),w={align:Object.keys(y),justify:Object.keys(O),alignContent:Object.keys(k)},C={align:"align",justify:"justify",alignContent:"align-content"};function P(e,t,r){var n=C[e];if(null!=r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var z=new Map;t.a=o.default.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:j}},y),{},{justify:{type:String,default:null,validator:_}},O),{},{alignContent:{type:String,default:null,validator:x}},k),render:function(e,t){var r=t.props,data=t.data,o=t.children,c="";for(var d in r)c+=String(r[d]);var f=z.get(c);return f||function(){var e,t;for(t in f=[],w)w[t].forEach((function(e){var n=r[e],o=P(t,e,n);o&&f.push(o)}));f.push((e={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(e,"align-".concat(r.align),r.align),Object(n.a)(e,"justify-".concat(r.justify),r.justify),Object(n.a)(e,"align-content-".concat(r.alignContent),r.alignContent),e)),z.set(c,f)}(),e(r.tag,Object(l.a)(data,{staticClass:"row",class:f}),o)}})},605:function(e,t,r){"use strict";var n=r(4),o=r(283),l=r(67),c=r(56),d=r(29),f=r(132);n({target:"Array",proto:!0},{flatMap:function(e){var t,r=l(this),n=c(r.length);return d(e),(t=f(r,0)).length=o(t,r,r,n,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},606:function(e,t,r){r(110)("flatMap")},607:function(e,t,r){var map={"./af":452,"./af.js":452,"./ar":453,"./ar-dz":454,"./ar-dz.js":454,"./ar-kw":455,"./ar-kw.js":455,"./ar-ly":456,"./ar-ly.js":456,"./ar-ma":457,"./ar-ma.js":457,"./ar-sa":458,"./ar-sa.js":458,"./ar-tn":459,"./ar-tn.js":459,"./ar.js":453,"./az":460,"./az.js":460,"./be":461,"./be.js":461,"./bg":462,"./bg.js":462,"./bm":463,"./bm.js":463,"./bn":464,"./bn-bd":465,"./bn-bd.js":465,"./bn.js":464,"./bo":466,"./bo.js":466,"./br":467,"./br.js":467,"./bs":468,"./bs.js":468,"./ca":469,"./ca.js":469,"./cs":470,"./cs.js":470,"./cv":471,"./cv.js":471,"./cy":472,"./cy.js":472,"./da":473,"./da.js":473,"./de":474,"./de-at":475,"./de-at.js":475,"./de-ch":476,"./de-ch.js":476,"./de.js":474,"./dv":477,"./dv.js":477,"./el":478,"./el.js":478,"./en-au":479,"./en-au.js":479,"./en-ca":480,"./en-ca.js":480,"./en-gb":481,"./en-gb.js":481,"./en-ie":482,"./en-ie.js":482,"./en-il":483,"./en-il.js":483,"./en-in":484,"./en-in.js":484,"./en-nz":485,"./en-nz.js":485,"./en-sg":486,"./en-sg.js":486,"./eo":487,"./eo.js":487,"./es":488,"./es-do":489,"./es-do.js":489,"./es-mx":490,"./es-mx.js":490,"./es-us":491,"./es-us.js":491,"./es.js":488,"./et":492,"./et.js":492,"./eu":493,"./eu.js":493,"./fa":494,"./fa.js":494,"./fi":495,"./fi.js":495,"./fil":496,"./fil.js":496,"./fo":497,"./fo.js":497,"./fr":498,"./fr-ca":499,"./fr-ca.js":499,"./fr-ch":500,"./fr-ch.js":500,"./fr.js":498,"./fy":501,"./fy.js":501,"./ga":502,"./ga.js":502,"./gd":503,"./gd.js":503,"./gl":504,"./gl.js":504,"./gom-deva":505,"./gom-deva.js":505,"./gom-latn":506,"./gom-latn.js":506,"./gu":507,"./gu.js":507,"./he":508,"./he.js":508,"./hi":509,"./hi.js":509,"./hr":510,"./hr.js":510,"./hu":511,"./hu.js":511,"./hy-am":512,"./hy-am.js":512,"./id":513,"./id.js":513,"./is":514,"./is.js":514,"./it":515,"./it-ch":516,"./it-ch.js":516,"./it.js":515,"./ja":517,"./ja.js":517,"./jv":518,"./jv.js":518,"./ka":519,"./ka.js":519,"./kk":520,"./kk.js":520,"./km":521,"./km.js":521,"./kn":522,"./kn.js":522,"./ko":523,"./ko.js":523,"./ku":524,"./ku.js":524,"./ky":525,"./ky.js":525,"./lb":526,"./lb.js":526,"./lo":527,"./lo.js":527,"./lt":528,"./lt.js":528,"./lv":529,"./lv.js":529,"./me":530,"./me.js":530,"./mi":531,"./mi.js":531,"./mk":532,"./mk.js":532,"./ml":533,"./ml.js":533,"./mn":534,"./mn.js":534,"./mr":535,"./mr.js":535,"./ms":536,"./ms-my":537,"./ms-my.js":537,"./ms.js":536,"./mt":538,"./mt.js":538,"./my":539,"./my.js":539,"./nb":540,"./nb.js":540,"./ne":541,"./ne.js":541,"./nl":542,"./nl-be":543,"./nl-be.js":543,"./nl.js":542,"./nn":544,"./nn.js":544,"./oc-lnc":545,"./oc-lnc.js":545,"./pa-in":546,"./pa-in.js":546,"./pl":547,"./pl.js":547,"./pt":548,"./pt-br":549,"./pt-br.js":549,"./pt.js":548,"./ro":550,"./ro.js":550,"./ru":551,"./ru.js":551,"./sd":552,"./sd.js":552,"./se":553,"./se.js":553,"./si":554,"./si.js":554,"./sk":555,"./sk.js":555,"./sl":556,"./sl.js":556,"./sq":557,"./sq.js":557,"./sr":558,"./sr-cyrl":559,"./sr-cyrl.js":559,"./sr.js":558,"./ss":560,"./ss.js":560,"./sv":561,"./sv.js":561,"./sw":562,"./sw.js":562,"./ta":563,"./ta.js":563,"./te":564,"./te.js":564,"./tet":565,"./tet.js":565,"./tg":566,"./tg.js":566,"./th":567,"./th.js":567,"./tk":568,"./tk.js":568,"./tl-ph":569,"./tl-ph.js":569,"./tlh":570,"./tlh.js":570,"./tr":571,"./tr.js":571,"./tzl":572,"./tzl.js":572,"./tzm":573,"./tzm-latn":574,"./tzm-latn.js":574,"./tzm.js":573,"./ug-cn":575,"./ug-cn.js":575,"./uk":576,"./uk.js":576,"./ur":577,"./ur.js":577,"./uz":578,"./uz-latn":579,"./uz-latn.js":579,"./uz.js":578,"./vi":580,"./vi.js":580,"./x-pseudo":581,"./x-pseudo.js":581,"./yo":582,"./yo.js":582,"./zh-cn":583,"./zh-cn.js":583,"./zh-hk":584,"./zh-hk.js":584,"./zh-mo":585,"./zh-mo.js":585,"./zh-tw":586,"./zh-tw.js":586};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=607},608:function(e,t,r){"use strict";r.r(t);r(24);var n=r(52),o=r(76),l=r(594),c=Object(n.a)({props:{expenses:{type:Array,required:!0}},computed:Object(o.c)("categories",["byId"]),methods:{isRecurringExpense:l.a,frequencyDescription:function(e){return"".concat(this.$tc("expense.frequency.hint",e.frequency)," ").concat(this.$t("misc.since")," ").concat(this.$d(new Date(e.startingMonthId),"no-day"))}}}),d=r(37),f=r(42),h=r.n(f),v=r(226),m=r(166),j=r(196),y=r(124),_=r(197),O=r(41),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("v-list",[r("v-list-item",{directives:[{name:"show",rawName:"v-show",value:0===e.expenses.length,expression:"expenses.length === 0"}]},[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.$t("misc.empty-list")))])],1)],1),e._v(" "),e._l(e.expenses,(function(t){return r("v-list-item",{key:t.id},[r("v-list-item-content",[r("v-list-item-title",[e._v("\n          "+e._s(e.$t(e.byId(t.categoryId).name))+",\n          "+e._s(t.value)+"\n        ")]),e._v(" "),e.isRecurringExpense(t)?r("span",[e._v(e._s(e.frequencyDescription(t)))]):e._e()],1),e._v(" "),r("v-list-item-action",[r("v-btn",{attrs:{color:"error","x-small":"",fab:"",depressed:""},on:{click:function(r){return e.$emit("delete-expense",t)}}},[r("v-icon",{domProps:{textContent:e._s("mdi-delete")}})],1)],1)],1)}))],2)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:v.a,VIcon:m.a,VList:j.a,VListItem:y.a,VListItemAction:_.a,VListItemContent:O.a,VListItemTitle:O.b})},612:function(e,t,r){"use strict";r.r(t);r(48),r(25);var n=r(52),o=r(591),l=Object(n.a)({props:{expenses:{type:Array,required:!0}},computed:{expenseChartData:function(){var e=this,t=this.$store.getters["categories/categories"],r=this.expenses,n=Object(o.d)(Object(o.c)(r,t));return{labels:t.map((function(t){return e.$t(t.name)})),datasets:[{label:this.$tc("category.title",t.length),backgroundColor:t.map((function(e){return e.color})),data:n.map((function(element){return element.value}))}]}},barChartStyles:function(){return{margin:"auto",position:"relative",width:"99%",height:"24rem"}},pieChartStyles:function(){return{margin:"auto",position:"relative",width:"min(99%, 24rem)"}}}}),c=r(37),d=r(42),f=r.n(d),h=r(616),v=r(604),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{attrs:{sm:"6",md:"6",lg:"4","align-self":"center"}},[r("pie-chart",{attrs:{"chart-data":e.expenseChartData,styles:e.pieChartStyles}})],1),e._v(" "),r("v-col",{attrs:{sm:"6",md:"6",lg:"8","align-self":"center"}},[r("bar-chart",{attrs:{"chart-data":e.expenseChartData,styles:e.barChartStyles}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;f()(component,{PieChart:r(601).default,BarChart:r(602).default}),f()(component,{VCol:h.a,VRow:v.a})},616:function(e,t,r){"use strict";r(7),r(10),r(13),r(14);var n=r(2),o=(r(32),r(8),r(31),r(59),r(205),r(19),r(34),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(38),r(33),r(9),r(71),r(282),r(0)),l=r(91),c=r(1);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h=["sm","md","lg","xl"],v=h.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),m=h.reduce((function(e,t){return e["offset"+Object(c.z)(t)]={type:[String,Number],default:null},e}),{}),j=h.reduce((function(e,t){return e["order"+Object(c.z)(t)]={type:[String,Number],default:null},e}),{}),y={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(j)};function _(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var O=new Map;t.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,c=(t.parent,"");for(var d in r)c+=String(r[d]);var f=O.get(c);return f||function(){var e,t;for(t in f=[],y)y[t].forEach((function(e){var n=r[e],o=_(t,e,n);o&&f.push(o)}));var o=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),O.set(c,f)}(),e(r.tag,Object(l.a)(data,{class:f}),o)}})},626:function(e,t,r){"use strict";r.r(t);var n=r(53),o=(r(24),r(52)),l=r(58),c=r(591),d=r(594),f=Object(o.a)({props:{monthId:{type:String,required:!0}},computed:{month:function(){return this.$store.getters["months/byId"](this.monthId)},expenses:function(){if(void 0===this.month)return[];var e=Object(l.b)(this.month.expenses),t=Object(c.a)(this.month,this.$store.getters["recurringExpenses/recurringExpenses"]);return[].concat(Object(n.a)(e),Object(n.a)(t))}},watch:{monthId:function(){void 0===this.month&&this.$store.dispatch("months/create",{id:this.monthId})}},methods:{removeExpense:function(e){Object(d.a)(e)?this.$store.commit("recurringExpenses/remove",e):this.$store.commit("months/removeExpense",{month:this.month,expense:e})}}}),h=r(37),v=r(42),m=r.n(v),j=r(451),y=r(449),_=r(430),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[e._v(e._s(e.$d(new Date(e.month.id),"no-day")))]),e._v(" "),r("v-divider",{staticClass:"my-4"}),e._v(" "),r("expense-chart",{attrs:{expenses:e.expenses}}),e._v(" "),r("v-divider",{staticClass:"my-4"}),e._v(" "),r("expense-list",{attrs:{expenses:e.expenses},on:{"delete-expense":function(t){return e.removeExpense(t)}}})],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{ExpenseChart:r(612).default,ExpenseList:r(608).default}),m()(component,{VCard:j.a,VCardTitle:y.d,VDivider:_.a})},629:function(e,t,r){var content=r(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("cf87dc84",content,!0,{sourceMap:!1})},630:function(e,t,r){var n=r(22)(!1);n.push([e.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),e.exports=n}}]);