(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return l}));var r=n(130),o=n.n(r),c={id:"uncategorized",isBuiltin:!0,name:"domain.category.uncategorized",color:o.a.grey.lighten1},l=[{id:"food",isBuiltin:!0,name:"domain.category.food",color:o.a.green.base},{id:"livelihood",isBuiltin:!0,name:"domain.category.livelihood",color:o.a.red.base},{id:"leisure",isBuiltin:!0,name:"domain.category.leisure",color:o.a.blue.base},c]},131:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={home:{title:"home.title",to:"/",icon:"mdi-home"},categories:{title:"categories.title",to:"/categories",icon:"mdi-format-list-bulleted-type"},months:{title:"months.title",to:"/months",icon:"mdi-calendar"},settings:{title:"settings.title",to:"/settings",icon:"mdi-cog"}}},201:function(t,e,n){"use strict";var r=n(269),o=n(270),c=new(n.n(o).a)({isCompression:!1});e.a=function(t){var e=t.store;Object(r.a)({key:"finwa",storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(e)}},217:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return v}));var r=n(2),o=(n(49),n(10),n(9),n(7),n(15),n(8),n(16),n(104)),c=n(99);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t,e){return t.map((function(t){var n;return{expense:t,category:null!==(n=Object(c.a)(e,t.categoryId))&&void 0!==n?n:o.b}}))}function f(t,e){return e.map((function(e){return{category:e,expenses:t.filter((function(t){return t.categoryId===e.id}))}}))}function v(t){return t.map((function(t){return m(m({},t),{},{value:Object(c.b)(t.expenses.map((function(t){return t.value})))})}))}},261:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("69991307",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";var r=n(2),o=(n(32),n(63),n(9),n(7),n(10),n(15),n(8),n(16),n(44)),c=n(75);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m=Object(o.a)({data:function(){return{drawerOpen:!1}},head:function(){var path=this.$route.path;return{htmlAttrs:{lang:this.$i18n.locale},link:[{rel:"canonical",href:"https://finwa.yeger.eu".concat(path.length>1?path:"","/").replace("//","/")}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["layout"])),methods:{toggleDrawer:function(){this.drawerOpen=!this.drawerOpen}}}),d=n(34),f=n(39),v=n.n(f),h=n(428),w=n(434),O=n(431),y=n(432),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{fixed:"",app:"",permanent:t.$vuetify.breakpoint.lgAndUp,clipped:!0},model:{value:t.drawerOpen,callback:function(e){t.drawerOpen=e},expression:"drawerOpen"}},[n("app-sidebar")],1),t._v(" "),n("app-header",{attrs:{"drawer-open":t.drawerOpen,"on-nav-icon-clicked":t.toggleDrawer}}),t._v(" "),n("v-main",[n("v-container",{staticClass:"page-container",class:{"bound-width":"compact"===t.layout,"unbound-width":"fill"===t.layout}},[n("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{AppSidebar:n(408).default,AppHeader:n(410).default}),v()(component,{VApp:h.a,VContainer:w.a,VMain:O.a,VNavigationDrawer:y.a})},284:function(t,e,n){n(285),n(289),t.exports=n(290)},312:function(t,e,n){var content=n(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("aaec6fdc",content,!0,{sourceMap:!1})},313:function(t,e,n){var r=n(22)(!1);r.push([t.i,"h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2.5rem,3vw,3.5rem);margin-bottom:1rem}h2{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}html{overflow-x:hidden!important;overflow-y:auto!important}main .row{margin:0}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem;margin-right:-1rem}.responsive-list>*{margin-top:1rem;margin-right:1rem}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}",""]),t.exports=r},376:function(t,e,n){t.exports=n.p+"img/logo.0573bf6.svg"},377:function(t,e,n){"use strict";n(261)},378:function(t,e,n){var r=n(22)(!1);r.push([t.i,"h1,h2,h3,h4,h5,h6{line-height:1.2}h1{font-size:clamp(2.5rem,3vw,3.5rem);margin-bottom:1rem}h2{font-size:clamp(2rem,2vw,2.5rem);margin-bottom:.5rem}h3{font-size:clamp(1.5rem,1.5vw,2rem);margin-bottom:.25rem}html{overflow-x:hidden!important;overflow-y:auto!important}main .row{margin:0}.responsive-list{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:-1rem;margin-right:-1rem}.responsive-list>*{margin-top:1rem;margin-right:1rem}:not(input):not(.selectable){-webkit-touch-callout:none!important;-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.page-container{display:flex;justify-content:center}.unbound-width{max-width:unset!important}.bound-width{max-width:960px!important}a{text-decoration:none}a:focus,a:hover{color:var(--v-secondary-base)}.v-footer{display:flex}.v-footer>div{flex:1}.v-footer div:first-child>*{margin-right:auto}.v-footer div:last-child>*{margin-left:auto}.v-badge--inline{height:20px}.logo-container{width:48px;height:48px;margin-right:-12px}.logo-container img{width:36px;height:36px;margin:6px}",""]),t.exports=r},403:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"getters",(function(){return m})),n.d(e,"mutations",(function(){return d}));n(111),n(404),n(405),n(8);var r=n(104),o=n(217),c=n(99),l=function(){return{categories:r.a,months:[],layout:"default",useDarkTheme:!1}},m={monthById:function(t){return function(e){return Object(c.a)(t.months,e)}}},d={addCategory:function(t,e){t.categories.push(e)},addExpenseToMonth:function(t,e){var n,r,o=e.month,l=e.expense;null===(r=null===(n=Object(c.a)(t.months,o.id))||void 0===n?void 0:n.expenses)||void 0===r||r.push(l)},addMonth:function(t,e){t.months.push(e)},resetData:function(t){t.categories=r.a,t.months=[]},removeCategory:function(t,e){if(!e.isBuiltin){var n=t.categories.indexOf(e);t.categories.splice(n,1);var c=t.months.flatMap((function(t){return t.expenses}));Object(o.b)(c,[e])[0].expenses.forEach((function(t){t.categoryId=r.b.id}))}},removeExpenseFromMonth:function(t,e){var n,r=e.month,o=e.expense,l=null===(n=Object(c.a)(t.months,r.id))||void 0===n?void 0:n.expenses;if(void 0!==l){var m=l.indexOf(o);l.splice(m,1)}},setLayout:function(t,e){t.layout=e},toggleTheme:function(t){t.useDarkTheme=!t.useDarkTheme}}},408:function(t,e,n){"use strict";n.r(e);n(123);var r=n(44),o=n(131),c=Object(r.a)({data:function(){return{routes:Object.values(o.a)}}}),l=n(34),m=n(39),d=n.n(m),f=n(193),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{attrs:{dense:"",nav:"",subheader:""}},[n("app-navigation"),t._v(" "),n("resources")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{AppNavigation:n(409).default,Resources:n(414).default}),d()(component,{VList:f.a})},409:function(t,e,n){"use strict";n.r(e);n(123);var r=n(44),o=n(131),c=Object(r.a)({data:function(){return{routes:Object.values(o.a)}}}),l=n(34),m=n(39),d=n.n(m),f=n(163),v=n(125),h=n(37),w=n(196),O=n(109),y=n(416),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"info"}},[n("v-subheader",[t._v(t._s(t.$t("misc.navigation")))]),t._v(" "),t._l(t.routes,(function(e,i){return n("v-list-item",{key:i,attrs:{to:t.localePath(e.to),exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(t.$t(e.title))}})],1)],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VListItem:v.a,VListItemContent:h.a,VListItemGroup:w.a,VListItemIcon:O.a,VListItemTitle:h.b,VSubheader:y.a})},410:function(t,e,n){"use strict";n.r(e);var r=n(44),o=Object(r.a)({props:{drawerOpen:{type:Boolean,required:!0},onNavIconClicked:{type:Function,required:!0}}}),c=n(34),l=n(39),m=n.n(l),d=n(433),f=n(429),v=n(417),h=n(430),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"",dark:"",dense:"",fixed:"",color:"primary","clipped-left":!0}},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndDown,expression:"$vuetify.breakpoint.mdAndDown"}],staticClass:"ml-n4",attrs:{"aria-label":t.$t(t.drawerOpen?"actions.close-menu":"actions.open-menu")},on:{click:function(e){return e.stopPropagation(),t.onNavIconClicked()}}}),t._v(" "),n("logo",{class:{"ml-n2":t.$vuetify.breakpoint.lgAndUp}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-divider",{attrs:{vertical:""}}),t._v(" "),n("theme-toggle"),t._v(" "),n("language-menu")],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Logo:n(411).default,ThemeToggle:n(412).default,LanguageMenu:n(413).default}),m()(component,{VAppBar:d.a,VAppBarNavIcon:f.a,VDivider:v.a,VSpacer:h.a})},411:function(t,e,n){"use strict";n.r(e);var r=n(44),o=Object(r.a)({data:function(){return{logo:n(376)}}}),c=(n(377),n(34)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"logo-container"},[n("nuxt-link",{staticClass:"icon-link",attrs:{to:t.localePath("/")}},[n("img",{attrs:{src:t.logo,alt:"logo"}})])],1)}),[],!1,null,null,null);e.default=component.exports},412:function(t,e,n){"use strict";n.r(e);var r=n(44),o=n(75),c=Object(r.a)({computed:Object(o.c)(["useDarkTheme"]),watch:{useDarkTheme:function(t){this.$vuetify.theme.dark=t}},mounted:function(){var t=this.$vuetify.theme.dark,e=this.$store.state.useDarkTheme;t!==e&&(this.$vuetify.theme.dark=e)},methods:Object(o.b)(["toggleTheme"])}),l=n(34),m=n(39),d=n.n(m),f=n(218),v=n(163),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{attrs:{icon:"","aria-label":t.$t(t.useDarkTheme?"actions.use-light-theme":"actions.use-dark-theme")},on:{click:function(e){return t.toggleTheme()}}},[n("v-icon",{domProps:{textContent:t._s(t.useDarkTheme?"mdi-brightness-5":"mdi-brightness-2")}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VIcon:v.a})},413:function(t,e,n){"use strict";n.r(e);n(49);var r=n(44),o=Object(r.a)({data:function(){var t=this;return{locales:this.$i18n.availableLocales.map((function(e){return{code:e,name:t.$t("locales.".concat(e))}}))}}}),c=n(34),l=n(39),m=n.n(l),d=n(218),f=n(163),v=n(193),h=n(125),w=n(37),O=n(419),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{domProps:{textContent:t._s("mdi-translate")}})],1)]}}])},[t._v(" "),n("v-list",t._l(t.locales,(function(e){return n("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[n("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:d.a,VIcon:f.a,VList:v.a,VListItem:h.a,VListItemTitle:w.b,VMenu:O.a})},414:function(t,e,n){"use strict";n.r(e);var r=n(34),o=n(39),c=n.n(o),l=n(163),m=n(125),d=n(37),f=n(196),v=n(109),h=n(416),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item-group",{attrs:{color:"accent"}},[n("v-subheader",[t._v(t._s(t.$t("misc.resources")))]),t._v(" "),n("v-list-item",{staticClass:"unselectable source-link-container",attrs:{rel:"noopener",href:"https://github.com/DerYeger/finwa",target:"_blank"}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-github")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("GitHub Repository")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:l.a,VListItem:m.a,VListItemContent:d.a,VListItemGroup:f.a,VListItemIcon:v.a,VListItemTitle:d.b,VSubheader:h.a})},88:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=n(34),c=n(39),l=n.n(c),m=n(428),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath("/")}},[t._v(t._s(t.$t("home.title")))])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:m.a})},99:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(80);function r(t){return t.reduce((function(t,e){return t+e}),0)}function o(t,e){return t.find((function(t){return t.id===e}))}}},[[284,19,5,20]]]);