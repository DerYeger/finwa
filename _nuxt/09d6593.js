(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{118:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(119),o=n.n(r),c={food:{id:"food",isBuiltin:!0,name:"category.food",color:o.a.green.base},livelihood:{id:"livelihood",isBuiltin:!0,name:"category.livelihood",color:o.a.red.base},leisure:{id:"leisure",isBuiltin:!0,name:"category.leisure",color:o.a.blue.base},uncategorized:{id:"uncategorized",isBuiltin:!0,name:"category.uncategorized",color:o.a.grey.lighten1}}},145:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return v}));var r=n(2),o=(n(11),n(44),n(8),n(6),n(12),n(10),n(13),n(33)),c=n(77);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){return e.filter((function(e){return function(t,e){var n=new Date(t),r=new Date(e.startingMonthId);return!(n<r||void 0!==e.endingMonthId&&new Date(e.endingMonthId)<n||Object(c.a)(n,r)%e.frequency!=0)}(t,e)}))}function m(t,e){return e.map((function(e){return{category:e,expenses:t.filter((function(t){return t.categoryId===e.id}))}}))}function v(t){return t.map((function(t){return f(f({},t),{},{value:Object(o.a)(t.expenses.map((function(t){return t.value})))})}))}},206:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.a)({props:{route:{type:Object,required:!0}}}),c=n(26),l=n(21),f=n.n(l),d=n(177),m=n(132),v=n(111),h=n(36),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{attrs:{to:t.localePath(t.route.to),exact:""}},[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s(t.route.icon)}})],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$tc(t.route.navTitle||t.route.title,2)))])],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VIcon:d.a,VListItem:m.a,VListItemIcon:v.a,VListItemTitle:h.b})},216:function(t,e,n){"use strict";var r=n(291),o=n(292),c=new(n.n(o).a);e.a=function(t){Object(r.a)({key:"finwa",storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(t.store)}},217:function(t,e,n){"use strict";var r=n(17);n(73);function o(){return(o=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.$workbox;case 2:if(n=t.sent){t.next=6;break}return console.debug("Workbox couldn't be loaded."),t.abrupt("return");case 6:n.addEventListener("installed",(function(t){if(console.log(t.isUpdate),!0===t.isUpdate)return console.debug("There is an update for the PWA, reloading..."),void window.location.reload();console.debug("The PWA is on the latest version.")}));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.a=function(t){return o.apply(this,arguments)}},283:function(t,e,n){var content=n(400);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("5bd0562c",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n(29),n(63);var r=n(37),o=n(84),c=Object(r.a)({data:function(){return{drawerOpen:!1}},head:function(){var path=this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},link:[{rel:"canonical",href:"https://finwa.yeger.eu".concat(path.length>1?path:"","/").replace("//","/")}]}},computed:Object(o.e)("settings",["layout"])}),l=n(26),f=n(21),d=n.n(f),m=n(462),v=n(470),h=n(467),O=n(468),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"",permanent:t.$vuetify.breakpoint.lgAndUp,clipped:!0},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}}),t._v(" "),n("v-main",[n("v-container",{staticClass:"page-container",class:{"bound-width":"compact"===t.layout,"unbound-width":"fill"===t.layout}},[n("nuxt")],1)],1),t._v(" "),n("app-footer")],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{AppSidebar:n(443).default,AppHeader:n(439).default,AppFooter:n(445).default}),d()(component,{VApp:m.a,VContainer:v.a,VMain:h.a,VNavigationDrawer:O.a})},307:function(t,e,n){n(308),n(309),t.exports=n(313)},33:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return m}));n(8),n(6),n(11),n(12),n(10),n(13);var r=n(2);n(82),n(138);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t){return t.reduce((function(t,e){return t+e}),0)}function f(t,e){return t.reduce((function(t,n){return t+e(n)}),0)}function d(t){return function(t,e){return t.reduce((function(t,n){return c(c({},t),{},Object(r.a)({},n[e],n))}),{})}(t,"id")}function m(t){return Object.values(t)}},335:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("aaec6fdc",content,!0,{sourceMap:!1})},336:function(t,e,n){var r=n(23)(!1);r.push([t.i,"h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2.5rem,3vw,3.5rem);margin-bottom:1rem}h2{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}html{overflow-x:hidden!important;overflow-y:auto!important}*{scrollbar-width:thin;scrollbar-color:var(--v-primary-base) var(--v-background-base)}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:var(--v-background-base)}::-webkit-scrollbar-thumb{background-color:var(--v-primary-base)}main .row{margin:0}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem;margin-right:-1rem}.responsive-list>*{margin-top:1rem;margin-right:1rem}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}",""]),t.exports=r},398:function(t,e,n){t.exports=n.p+"img/logo.0573bf6.svg"},399:function(t,e,n){"use strict";n(283)},400:function(t,e,n){var r=n(23)(!1);r.push([t.i,"h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2.5rem,3vw,3.5rem);margin-bottom:1rem}h2{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}html{overflow-x:hidden!important;overflow-y:auto!important}*{scrollbar-width:thin;scrollbar-color:var(--v-primary-base) var(--v-background-base)}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:var(--v-background-base)}::-webkit-scrollbar-thumb{background-color:var(--v-primary-base)}main .row{margin:0}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem;margin-right:-1rem}.responsive-list>*{margin-top:1rem;margin-right:1rem}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.logo-container{width:48px;height:48px;margin-right:-12px}.logo-container img{width:36px;height:36px;margin:6px}",""]),t.exports=r},427:function(t,e,n){"use strict";n.r(e),n.d(e,"actions",(function(){return r}));var r={removeCategory:function(t,e){var n=t.commit;e.isBuiltin||(n("categories/remove",e),n("months/removeCategory",e))},reset:function(t){var e=t.dispatch;e("categories/reset"),e("months/reset"),e("recurringExpenses/reset"),e("recurringIncomes/reset"),e("settings/reset")}}},428:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return m})),n.d(e,"actions",(function(){return v})),n.d(e,"getters",(function(){return h})),n.d(e,"mutations",(function(){return O}));n(8),n(6),n(11),n(12),n(13);var r=n(2),o=(n(10),n(0)),c=n(118),l=n(33),f=n(77);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=function(){return c.a},v={create:function(t,e){(0,t.commit)("add",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({id:Object(f.c)(),isBuiltin:!1},e))},reset:function(t){var e=t.commit;e("removeAll"),e("set",c.a)}},h={byId:function(t){return function(e){return t[e]}},categories:function(t){return Object(l.c)(t)}},O={add:function(t,e){o.default.set(t,e.id,e)},remove:function(t,e){o.default.delete(t,e.id)},removeAll:function(t){Object(l.c)(t).forEach((function(e){return o.default.delete(t,e.id)}))},set:function(t,e){Object.assign(t,e)}}},429:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return h})),n.d(e,"actions",(function(){return O})),n.d(e,"getters",(function(){return y})),n.d(e,"mutations",(function(){return j}));n(6),n(12),n(13);var r=n(2),o=(n(299),n(300),n(44),n(38),n(11),n(8),n(10),n(0)),c=n(33),l=n(74),f=n(118),d=n(77);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=function(){return Object(c.d)(Object(l.c)())},O={create:function(t,e){(0,t.commit)("add",v({expenses:{},incomes:{}},e))},createExpense:function(t,e){(0,t.commit)("addExpense",v({id:Object(d.c)()},e))},createIncome:function(t,e){(0,t.commit)("addIncome",v({id:Object(d.c)()},e))},reset:function(t){var e=t.commit;e("removeAll"),e("set",Object(c.d)(Object(l.c)()))}},y={byId:function(t){return function(e){return t[e]}},months:function(t){return Object(c.c)(t)},oneTimeExpenses:function(t){return Object(c.c)(t).flatMap((function(t){return Object(c.c)(t.expenses)}))},oneTimeIncomes:function(t){return Object(c.c)(t).flatMap((function(t){return Object(c.c)(t.incomes)}))},sorted:function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date(Object(l.a)());return 0===e?[]:Object.keys(t).filter((function(t){return new Date(t)<=n})).sort().slice(-e).map((function(e){return t[e]}))}}},j={add:function(t,e){o.default.set(t,e.id,e)},addExpense:function(t,e){void 0===t[e.monthId]?t[e.monthId]={id:e.monthId,expenses:Object(r.a)({},e.id,e),incomes:{}}:o.default.set(t[e.monthId].expenses,e.id,e)},addIncome:function(t,e){void 0===t[e.monthId]?t[e.monthId]={id:e.monthId,expenses:{},incomes:Object(r.a)({},e.id,e)}:o.default.set(t[e.monthId].incomes,e.id,e)},remove:function(t,e){o.default.delete(t,e.id)},removeAll:function(t){Object(c.c)(t).forEach((function(e){return o.default.delete(t,e.id)}))},removeCategory:function(t,e){Object(c.c)(t).forEach((function(t){Object(c.c)(t.expenses).filter((function(t){return t.categoryId===e.id})).forEach((function(t){return t.categoryId=f.a.uncategorized.id}))}))},removeExpense:function(t,e){o.default.delete(t[e.monthId].expenses,e.id)},removeIncome:function(t,e){o.default.delete(t[e.monthId].incomes,e.id)},set:function(t,e){Object.assign(t,e)}}},430:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return m})),n.d(e,"actions",(function(){return v})),n.d(e,"getters",(function(){return h})),n.d(e,"mutations",(function(){return O}));n(8),n(6),n(11),n(12),n(13);var r=n(2),o=(n(10),n(0)),c=n(33),l=n(77),f=n(145);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=function(){return Object.create(null)},v={create:function(t,e){(0,t.commit)("add",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({id:Object(l.c)()},e))},reset:function(t){(0,t.commit)("removeAll")}},h={byId:function(t){return function(e){return t[e]}},byMonthId:function(t){return function(e){return Object(f.a)(e,Object(c.c)(t))}},recurringExpenses:function(t){return Object(c.c)(t)}},O={add:function(t,e){o.default.set(t,e.id,e)},remove:function(t,e){o.default.delete(t,e.id)},removeAll:function(t){Object(c.c)(t).forEach((function(e){return o.default.delete(t,e.id)}))}}},431:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return m})),n.d(e,"actions",(function(){return v})),n.d(e,"getters",(function(){return h})),n.d(e,"mutations",(function(){return O}));n(8),n(6),n(11),n(12),n(13);var r=n(2),o=(n(10),n(0)),c=n(33),l=n(77),f=n(145);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=function(){return Object.create(null)},v={create:function(t,e){(0,t.commit)("add",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({id:Object(l.c)()},e))},reset:function(t){(0,t.commit)("removeAll")}},h={byId:function(t){return function(e){return t[e]}},byMonthId:function(t){return function(e){return Object(f.a)(e,Object(c.c)(t))}},recurringIncomes:function(t){return Object(c.c)(t)}},O={add:function(t,e){o.default.set(t,e.id,e)},remove:function(t,e){o.default.delete(t,e.id)},removeAll:function(t){Object(c.c)(t).forEach((function(e){return o.default.delete(t,e.id)}))}}},432:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"actions",(function(){return c})),n.d(e,"mutations",(function(){return l}));var r={layout:"default",useDarkTheme:!1},o=function(){return r},c={reset:function(t){var e=t.commit;e("setLayout",r.layout),e("setTheme",r.useDarkTheme)}},l={setLayout:function(t,e){t.layout=e},setTheme:function(t,e){t.useDarkTheme=e},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme}}},436:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(78),c=n(74),l=Object(r.a)({data:function(){return{routes:[o.a.home,o.a.categories,o.a.settings],lastSixMonths:Object(c.d)(6)}}}),f=n(26),d=n(21),m=n.n(d),v=n(211),h=n(450),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.navigation")))]),t._v(" "),t._l(t.routes,(function(t,i){return n("route-list-item",{key:i,attrs:{route:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{RouteListItem:n(206).default}),m()(component,{VListItemGroup:v.a,VSubheader:h.a})},437:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(78),c=n(74),l=Object(r.a)({data:function(){return{routes:[o.a.finances,o.a.expenses,o.a.incomes],lastSixMonths:Object(c.d)(6)}}}),f=n(26),d=n(21),m=n.n(d),v=n(211),h=n(450),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.finances")))]),t._v(" "),t._l(t.routes,(function(t,i){return n("route-list-item",{key:i,attrs:{route:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{RouteListItem:n(206).default}),m()(component,{VListItemGroup:v.a,VSubheader:h.a})},438:function(t,e,n){"use strict";n.r(e);n(44),n(22);var r=n(37),o=n(78),c=n(74),l=Object(r.a)({data:function(){return{monthsRoute:o.a.months}},computed:{recentMonthRoutes:function(){return this.monthsToRoutes(Object(c.d)(3,-1)).reverse()},upcomingMonthRoutes:function(){return this.monthsToRoutes(Object(c.e)(3,1))}},methods:{monthsToRoutes:function(t){var e=this;return t.map((function(t){return{title:e.$d(new Date(t.id),"no-day"),to:"".concat(o.a.months.to,"/").concat(t.id),icon:""}}))}}}),f=n(26),d=n(21),m=n.n(d),v=n(177),h=n(208),O=n(211),y=n(111),j=n(36),w=n(450),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$tc("month.title",2)))]),t._v(" "),n("route-list-item",{attrs:{route:t.monthsRoute}}),t._v(" "),n("v-list-group",{attrs:{color:"info"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-history")}})],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("misc.recent")))])]},proxy:!0}])},[t._v(" "),t._l(t.recentMonthRoutes,(function(t,i){return n("route-list-item",{key:i,attrs:{route:t}})}))],2),t._v(" "),n("v-list-group",{attrs:{color:"info"},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-icon",[n("v-icon",{domProps:{textContent:t._s("mdi-update")}})],1),t._v(" "),n("v-list-item-title",[t._v(t._s(t.$t("misc.upcoming")))])]},proxy:!0}])},[t._v(" "),t._l(t.upcomingMonthRoutes,(function(t,i){return n("route-list-item",{key:i,attrs:{route:t}})}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{RouteListItem:n(206).default}),m()(component,{VIcon:v.a,VListGroup:h.a,VListItemGroup:O.a,VListItemIcon:y.a,VListItemTitle:j.b,VSubheader:w.a})},439:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.a)({props:{value:{type:Boolean,required:!0}}}),c=n(26),l=n(21),f=n.n(l),d=n(469),m=n(464),v=n(451),h=n(465),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",dark:"",dense:"",fixed:"",color:"primary","clipped-left":!0}},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],staticClass:"ml-n4",attrs:{"aria-label":t.$t(t.value?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return t.$emit("input",!t.value)}}}),t._v(" "),n("logo",{class:{"ml-n2":t.$vuetify.breakpoint.lgAndUp}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-divider",{attrs:{vertical:""}}),t._v(" "),n("theme-toggle"),t._v(" "),n("language-menu")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{Logo:n(440).default,ThemeToggle:n(441).default,LanguageMenu:n(442).default}),f()(component,{VAppBar:d.a,VAppBarNavIcon:m.a,VDivider:v.a,VSpacer:h.a})},440:function(t,e,n){"use strict";n.r(e);var r=n(37),o=Object(r.a)({data:function(){return{logo:n(398)}}}),c=(n(399),n(26)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},441:function(t,e,n){"use strict";n.r(e);var r=n(37),o=n(84),c=Object(r.a)({computed:Object(o.e)("settings",["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){var t=this.$vuetify.theme.dark,e=this.$store.state.settings.useDarkTheme;t!==e&&(this.$vuetify.theme.dark=e)},methods:Object(o.d)("settings",["toggleTheme"])}),l=n(26),f=n(21),d=n.n(f),m=n(241),v=n(177),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VIcon:v.a})},442:function(t,e,n){"use strict";n.r(e);n(44);var r=n(37),o=Object(r.a)({data:function(){var t=this;return{locales:this.$i18n.availableLocales.map((function(e){return{code:e,name:t.$t("locales.".concat(e))}}))}}}),c=n(26),l=n(21),f=n.n(l),d=n(241),m=n(177),v=n(207),h=n(132),O=n(36),y=n(452),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"","aria-label":t.$t("actions.change-language")}},"v-btn",o,!1),r),[n("v-icon",{domProps:{textContent:t._s("mdi-translate")}})],1)]}}])},[t._v(" "),n("v-list",t._l(t.locales,(function(e){return n("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:d.a,VIcon:m.a,VList:v.a,VListItem:h.a,VListItemTitle:O.b,VMenu:y.a})},443:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n(21),c=n.n(o),l=n(207),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:"",nav:""}},[n("app-navigation"),t._v(" "),n("finances-navigation"),t._v(" "),n("months-navigation"),t._v(" "),n("resources")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{AppNavigation:n(436).default,FinancesNavigation:n(437).default,MonthsNavigation:n(438).default,Resources:n(444).default}),c()(component,{VList:l.a})},444:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n(21),c=n.n(o),l=n(177),f=n(132),d=n(36),m=n(211),v=n(111),h=n(450),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.resources")))]),t._v(" "),n("v-list-item",{staticClass:"text--primary",attrs:{rel:"noopener",href:"https://github.com/DerYeger/finwa",target:"_blank","input-value":"false"}},[n("v-list-item-icon",[n("v-icon",{staticClass:"text--secondary",domProps:{textContent:t._s("mdi-github")}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        GitHub Repository\n        "),n("v-icon",{staticClass:"text--secondary",attrs:{small:""},domProps:{textContent:t._s("mdi-open-in-new")}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:l.a,VListItem:f.a,VListItemContent:d.a,VListItemGroup:m.a,VListItemIcon:v.a,VListItemTitle:d.b,VSubheader:h.a})},445:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n(21),c=n.n(o),l=n(466),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{app:"",fixed:""}},[n("span",{staticStyle:{"font-size":"0.75rem"}},[t._v("© "+t._s((new Date).getFullYear())+", Jan Müller")])])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VFooter:l.a})},74:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return v}));var r=n(7),o=n(51);n(19),n(66),n(22),n(44),n(42),n(29),n(54);function c(t){var e=t.getFullYear(),n=t.getMonth()+1,r=n<10?"0".concat(n):n.toString();return"".concat(e,"-").concat(r)}function l(){return c(new Date)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date;return Object(o.a)(Array(t).keys()).map((function(t){var r=new Date;return r.setMonth(n.getMonth()+t+e),{id:c(r),expenses:{},incomes:{}}}))}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=new Date;return Object(o.a)(Array(t).keys()).map((function(t){var r=new Date;return r.setMonth(n.getMonth()-t+e),{id:c(r),expenses:{},incomes:{}}}))}function m(){return d(12)}function v(t){var e=t.split("-");if(2!==e.length)return!1;var n=Object(r.a)(e,2),o=n[0],c=n[1];return function(t){return 4===t.length&&!isNaN(+t)&&+t>=1900&&+t<=9999}(o)&&function(t){return 2===t.length&&!isNaN(+t)&&+t>=1&&+t<=12}(c)}},77:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var r=n(7),o=n(446);function c(){return Object(o.a)()}function l(t,e){var n=t>e?[t,e]:[e,t],o=Object(r.a)(n,2),c=o[0],l=o[1];return c.getMonth()-l.getMonth()+12*(c.getFullYear()-l.getFullYear())}function f(t,e,n){return n(t).localeCompare(n(e))}},78:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={home:{title:"home.title",to:"/",icon:"mdi-home"},finances:{title:"misc.finances",navTitle:"misc.overview",to:"/finances",icon:"mdi-trending-up"},months:{title:"month.title",navTitle:"misc.overview",to:"/months",icon:"mdi-calendar"},expenses:{title:"expense.title",to:"/expenses",icon:"mdi-currency-usd"},incomes:{title:"income.title",to:"/incomes",icon:"mdi-cash"},categories:{title:"category.title",to:"/categories",icon:"mdi-format-list-bulleted-type"},settings:{title:"settings.title",to:"/settings",icon:"mdi-cog"}}},94:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=n(26),c=n(21),l=n.n(c),f=n(462),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("home.title")))])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a})}},[[307,56,8,57]]]);