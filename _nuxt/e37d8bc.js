(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{593:function(e,t,r){var content=r(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("79216e3a",content,!0,{sourceMap:!1})},596:function(e,t,r){"use strict";r(593)},597:function(e,t,r){var n=r(22)(!1);n.push([e.i,".name-input[data-v-5e73e60c]{max-width:300px}",""]),e.exports=n},608:function(e,t,r){"use strict";r.r(t);r(9),r(7),r(10),r(15),r(8),r(16);var n=r(2),o=(r(19),r(70),r(25),r(76)),c=r(51),l=r(109);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)({data:function(){return{name:"",color:"#".concat(Math.floor(16777215*Math.random()).toString(16))}},methods:d(d({},Object(o.d)("categories",["add"])),{},{newCategory:function(){return Object(l.b)({isBuiltin:!1,name:this.name,color:this.color})}})}),O=(r(596),r(36)),v=r(41),j=r.n(v),y=r(219),h=r(667),w=r(662),component=Object(O.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-text-field",{staticClass:"name-input",attrs:{type:"text",label:e.$t("misc.name")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("v-color-picker",{staticClass:"mb-4",attrs:{"dot-size":"24","hide-inputs":"",elevation:"4"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}),e._v(" "),r("v-btn",{attrs:{color:"primary",disabled:e.name.length<4},on:{click:function(t){e.add(e.newCategory())}}},[e._v(e._s(e.$t("actions.create")))])],1)}),[],!1,null,"5e73e60c",null);t.default=component.exports;j()(component,{VBtn:y.a,VColorPicker:h.a,VTextField:w.a})}}]);