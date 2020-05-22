(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{445:function(t,e,n){"use strict";n.r(e);n(12),n(213);var o=n(256),r=n(111),l=n.n(r);function c(){var data=Object(o.a)(["\n  mutation deleteTodo($id: Int!) {\n    delete_todos(where: { id: { _eq: $id } }) {\n      affected_rows\n    }\n  }\n"]);return c=function(){return data},data}function d(){var data=Object(o.a)(["\n  mutation insert_todos($todo: String!, $isPublic: Boolean!, $userId: String) {\n    insert_todos(\n      objects: { title: $todo, is_public: $isPublic, user_id: $userId }\n    ) {\n      affected_rows\n      returning {\n        id\n        title\n        is_completed\n        is_public\n        created_at\n      }\n    }\n  }\n"]);return d=function(){return data},data}function v(){var data=Object(o.a)(["\n  subscription todos_aggregate {\n    todos_aggregate {\n      aggregate {\n        count\n      }\n    }\n  }\n"]);return v=function(){return data},data}function _(){var data=Object(o.a)(["\n  query getMyTodos($isPublic: Boolean!, $userId: String) {\n    todos(\n      where: { is_public: { _eq: $isPublic }, user_id: { _eq: $userId } }\n      order_by: { created_at: desc }\n    ) {\n      id\n      title\n      created_at\n      is_completed\n    }\n  }\n"]);return _=function(){return data},data}var f=l()(_()),h=l()(v()),m=l()(d()),y=l()(c()),O={name:"Todos",props:{title:{type:String,default:"Todos title"},type:{type:String,default:"public"}},data:function(){return{newTodo:"",todosCount:0}},computed:{isPublic:function(){return"public"===this.type}},apollo:{todos:{query:f,variables:function(){var t,e,n,o;return{isPublic:this.isPublic,userId:this.isPublic?null:null===(t=this.$store)||void 0===t||null===(e=t.state)||void 0===e||null===(n=e.user)||void 0===n||null===(o=n.user)||void 0===o?void 0:o.uid}},error:function(t){this.error=JSON.stringify(t.message)}},$subscribe:{todosCount:{query:h,result:function(t){var e,n,data=t.data;this.todosCount=null==data||null===(e=data.todos_aggregate)||void 0===e||null===(n=e.aggregate)||void 0===n?void 0:n.count}}}},methods:{addTodo:function(){var t=this,title=this.newTodo;this.$apollo.mutate({mutation:m,variables:{todo:title,isPublic:this.isPublic,userId:this.isPublic?null:this.$store.state.user.user.uid},update:function(e,n){var o=n.data.insert_todos;try{var data=e.readQuery({query:f,variables:{isPublic:t.isPublic,userId:t.isPublic?null:t.$store.state.user.user.uid}}),r=o.returning;data.todos.splice(0,0,r[0]),e.writeQuery({query:f,variables:{isPublic:t.isPublic,userId:t.isPublic?null:t.$store.state.user.user.uid},data:data}),t.newTodo=""}catch(t){console.error(t)}}})},deleteTodo:function(t){var e=this;this.$apollo.mutate({mutation:y,variables:{id:t},update:function(n,o){o.data;if(o.data.delete_todos.affected_rows){var r=n.readQuery({query:f,variables:{isPublic:e.isPublic,userId:e.isPublic?null:e.$store.state.user.user.uid}});r.todos=r.todos.filter((function(e){return e.id!==t})),n.writeQuery({query:f,variables:{isPublic:e.isPublic,userId:"public"===e.type?null:e.$store.state.user.user.uid},data:r})}}})}}},P=n(78),w=n(102),$=n.n(w),j=n(269),I=n(203),T=n(91),C=n(432),V=n(204),L=n(205),x=n(131),S=n(206),D=n(53),E=n(437),component=Object(P.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mt-3"},[n("v-card-title",[t._v(t._s(t.title))]),t._v(" "),n("v-card-text",[n("h4",[t._v("Num 'todos' subscription: "+t._s(t.todosCount))]),t._v(" "),n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addTodo(e)}}},[n("v-text-field",{attrs:{label:"Add todo (Optimistic UI)",required:""},model:{value:t.newTodo,callback:function(e){t.newTodo=e},expression:"newTodo"}})],1),t._v(" "),n("v-list",{attrs:{dense:""}},t._l(t.todos,(function(e){return n("v-list-item",{key:e.id},[n("v-list-item-content",[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return t.deleteTodo(e.id)}}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-close")])],1)],1)],1)})),1)],1)],1)}),[],!1,null,null,null),k=component.exports;$()(component,{VBtn:j.a,VCard:I.a,VCardText:T.b,VCardTitle:T.c,VForm:C.a,VIcon:V.a,VList:L.a,VListItem:x.a,VListItemAction:S.a,VListItemContent:D.a,VTextField:E.a});n(13),n(10),n(15),n(16),n(14),n(11);var B=n(2),A=n(98);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var Q={name:"AuthComponent",methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(B.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(A.b)({toggleDialogLogin:"login/TOGGLE_LOGIN_DIALOG_USER"}))},J=Object(P.a)(Q,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.$store.state.user.loggedIn?e("div",[this._t("default")],2):e("div",[e("div",[this._v("\n      Login to see this component\n    ")]),this._v(" "),e("v-btn",{attrs:{outlined:""},on:{click:this.toggleDialogLogin}},[this._v("Login")])],1)])}),[],!1,null,"93586562",null),N=J.exports;$()(J,{VBtn:j.a});var R={name:"Crud",components:{AuthComponent:N,Todos:k}},U=n(429),F=n(433),M=Object(P.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h2",[this._v("CRUD Example with realtime Subscriptions")]),this._v(" "),this._m(0),this._v(" "),e("v-row",[e("v-col",{attrs:{sm:"6",cols:"12"}},[e("todos",{attrs:{title:"Public todos",type:"public"}})],1),this._v(" "),e("v-col",{attrs:{sm:"6",cols:"12"}},[e("auth-component",{staticClass:"mt-3"},[e("todos",{attrs:{title:"My todos",type:"private"}})],1)],1)],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"http://localhost:4000/console/data/schema/public",target:"_blank"}},[this._v("\n      Create a table\n    ")]),this._v("\n    called 'todos' on the database with 4 columns: 'id'(Integer),\n    'title'(Text) and 'is_publish'(Boolean), 'is_completed'(Boolean).\n  ")])}],!1,null,null,null);e.default=M.exports;$()(M,{VCol:U.a,VRow:F.a})}}]);