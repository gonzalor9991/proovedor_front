(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{423:function(e,t,n){"use strict";n.r(t);n(15),n(14),n(11),n(8),n(16),n(12),n(17);var r=n(30),o=n(3),c=(n(57),n(198)),l=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(c.a)(),e.next=3,Object(c.c)(r,t,n).then((function(e){var t=e.user;console.log(t)})).catch((function(e){var t=e.code;e.message;console.log(t)}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d={loginFirebase:l},f=n(138);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h={name:"firebase",mounted:function(){this.login(),console.log(this.$store)},computed:{todos:function(){return this.$store.state.todos.list},counter:function(){return this.$store.state.counter},list:function(){return this.$store.state.products.ticket_id}},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({login:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.loginFirebase("gonzalo9991r@gmail.com","S@naluis2021").then();case 2:case"end":return e.stop()}}),e)})))()},addTodo:function(e){this.$store.commit("todos/add",e.target.value),e.target.value=""}},Object(f.b)({toggle:"todos/toggle"}))},O=h,m=n(97),component=Object(m.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Firebase")]),e._v(" "),n("ul",[e._l(e.todos,(function(t){return n("li",{key:t.text},[n("input",{attrs:{type:"checkbox"},domProps:{checked:t.done},on:{change:function(n){return e.toggle(t)}}}),e._v(" "),n("span",{class:{done:t.done}},[e._v(e._s(t.text))])])})),e._v(" "),n("li",[n("input",{attrs:{placeholder:"What needs to be done?"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)}}})])],2),e._v(" "),n("div",[n("button",{on:{click:function(t){return e.$store.commit("ticket/load",5)}}},[e._v("\n      +\n    ")]),e._v(" "),n("p",[e._v(e._s(e.list))]),e._v(" "),n("br")])])}),[],!1,null,null,null);t.default=component.exports}}]);