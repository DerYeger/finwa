(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{595:function(t,e,o){var content=o(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(23).default)("6482658a",content,!0,{sourceMap:!1})},603:function(t,e,o){"use strict";o(595)},604:function(t,e,o){var n=o(22)(!1);n.push([t.i,".name-input[data-v-a6632d16]{max-width:300px}",""]),t.exports=n},611:function(t,e,o){"use strict";o.r(e);o(19),o(70);var n=o(76),c=o(51),r=Object(c.a)({data:function(){return{name:"",color:"#".concat(Math.floor(16777215*Math.random()).toString(16))}},methods:Object(n.b)("categories",["create"])}),l=(o(603),o(36)),d=o(41),m=o.n(d),f=o(219),v=o(670),x=o(666),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",[o("v-text-field",{staticClass:"name-input",attrs:{type:"text",label:t.$t("misc.name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),o("v-color-picker",{staticClass:"mb-4",attrs:{"dot-size":"24","hide-inputs":"",elevation:"4"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),o("v-btn",{attrs:{color:"primary",disabled:t.name.length<4},on:{click:function(e){return t.create({name:t.name,color:t.color})}}},[t._v(t._s(t.$t("actions.create")))])],1)}),[],!1,null,"a6632d16",null);e.default=component.exports;m()(component,{VBtn:f.a,VColorPicker:v.a,VTextField:x.a})}}]);