webpackJsonp([0],[,,function(t,e,a){"use strict";var n=a(0),i=a(17),s=a(13),r=a.n(s),o=a(12),l=a.n(o);n.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"home",component:r.a},{path:"/about",name:"about",component:l.a},{path:"*",redirect:"/"}]})},function(t,e,a){"use strict";var n=a(0),i=a(19),s=a.n(i);n.a.use(s.a)},function(t,e,a){function n(t){a(10)}var i=a(1)(a(6),a(15),n,null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=a(2),s=a(3),r=a(4),o=a.n(r);n.a.config.productionTip=!1,new n.a({components:{App:o.a},router:i.a,vuetify:s.default,template:"<App/>"}).$mount("#app")},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{clipped:!0,drawer:!1,miniVariant:!1,items:[{icon:"home",title:"",to:"/home"},{icon:"info",title:"",to:"/about"}],title:"Versatil"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"About",data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Home",data:function(){return{}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function n(t){a(9)}var i=a(1)(a(7),a(14),n,"data-v-2e5c962e",null);t.exports=i.exports},function(t,e,a){function n(t){a(11)}var i=a(1)(a(8),a(16),n,"data-v-c6974764",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("v-layout",{staticClass:"my-5",attrs:{column:"",wrap:"","align-center":""}},[a("v-flex",{staticClass:"my-3",attrs:{xs12:"",sm4:""}},[a("div",{staticClass:"text-xs-center"},[a("h2",{staticClass:"headline"},[t._v("About us!")]),t._v(" "),a("h3",[t._v("We love coding")])])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:""}},[a("v-navigation-drawer",{attrs:{persistent:"","mini-variant":t.miniVariant,clipped:t.clipped},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",t._l(t.items,function(e,n){return a("v-list-tile",{key:n,attrs:{to:e.to}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],1),t._v(" "),a("v-toolbar",{attrs:{fixed:""}},[a("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),a("v-toolbar-title",{staticClass:"primary--text",domProps:{textContent:t._s(t.title)}}),t._v(" "),a("v-spacer")],1),t._v(" "),a("main",[a("v-container",{attrs:{fluid:""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1),t._v(" "),a("v-footer",{staticClass:"blue darken-2",attrs:{fixed:""}},[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-flex",{attrs:{xs12:""}},[a("div",{staticClass:"white--text ml-3"},[t._v("\n           © Addiction "+t._s((new Date).getFullYear())+"\n        ")])])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"my-3",attrs:{xd12:"",sm4:"",md6:""}},[a("section",[a("v-parallax",{attrs:{src:"./static/header.jpg",height:"600"}},[a("v-layout",{staticClass:"white--text",attrs:{column:"","align-center":"","justify-center":""}},[a("h1",{staticClass:"white--text mb-2 display-3"},[t._v("Versatil")]),t._v(" "),a("div",{staticClass:"headline mb-3 text-xs-center"},[t._v("Home page")])])],1)],1),t._v(" "),a("section",[a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{staticClass:"my-5",attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm4:""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Who we are?")])]),t._v(" "),a("v-card-text",[t._v("\n              We are group of developers that want to change the world\n            ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm4:"","offset-sm1":""}},[a("v-card",{staticClass:"elevation-0 transparent"},[a("v-card-title",{staticClass:"layout justify-center",attrs:{"primary-title":""}},[a("div",{staticClass:"headline"},[t._v("Contact ")])]),t._v(" "),a("v-card-text",[t._v("\n              Contact with us, join us if you want, just say it \n            ")]),t._v(" "),a("v-list",{staticClass:"transparent"},[a("v-list-tile",[a("v-list-tile-action",[a("v-icon",{staticClass:"blue--text text--lighten-2"},[t._v("Email")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v("konrad.klawikowski.kondzio@gmail.com")])],1)],1)],1)],1)],1)],1)],1)],1)])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.97e8e0e0874df18f5983.js.map