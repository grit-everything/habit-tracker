(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),s=a.n(r),i=(a(15),a(6)),o=a(1),l=a(2),u=a(3),m=a(5),h=(a(16),Object(n.memo)((function(e){var t=e.habit,a=t.name,n=t.count;return c.a.createElement("li",{className:"habit"},c.a.createElement("span",{className:"habit-name"},a),c.a.createElement("span",{className:"habit-count"},n),c.a.createElement("button",{className:"habit-button habit-increase",onClick:function(){e.onIncrement(e.habit)}},c.a.createElement("i",{className:"fas fa-plus-square"})),c.a.createElement("button",{className:"habit-button habit-decrease",onClick:function(){e.onDecrement(e.habit)}},c.a.createElement("i",{className:"fas fa-minus-square"})),c.a.createElement("button",{className:"habit-button habit-delete",onClick:function(){e.onDelete(e.habit)}},c.a.createElement("i",{className:"fas fa-trash"})))}))),b=Object(n.memo)((function(e){var t=c.a.createRef(),a=c.a.createRef();return c.a.createElement("form",{ref:a,className:"add-form",onSubmit:function(a){a.preventDefault();var n=t.current.value;n&&e.onAdd(n),t.current.value=""}},c.a.createElement("input",{ref:t,type:"text",className:"add-input",placeholder:"Habit"}),c.a.createElement("button",{name:"button",type:"submit",className:"add-button"},"Add"))})),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(t){e.props.onIncrement(t)},e.handleDecrement=function(t){e.props.onDecrement(t)},e.handleDelete=function(t){e.props.onDelete(t)},e.handleAdd=function(t){e.props.onAdd(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{onAdd:this.handleAdd}),c.a.createElement("ul",null,this.props.habits.map((function(t){return c.a.createElement(h,{key:t.id,habit:t,onIncrement:e.handleIncrement,onDecrement:e.handleDecrement,onDelete:e.handleDelete})}))),c.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset"))}}]),a}(n.Component),f=a(4),p=Object(n.memo)((function(e){var t=Object(n.useState)(e.habits),a=Object(f.a)(t,2);a[0],a[1];return c.a.createElement("nav",null,c.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),c.a.createElement("span",{className:"navbar"},"Habit Tracker"),c.a.createElement("span",{className:"navbar-count"},e.totalCount))})),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}],seconds:0},e.handleIncrement=function(t){var a=e.state.habits.map((function(e){return e.id===t.id?Object(i.a)({},t,{count:t.count+1}):e}));e.setState({habits:a})},e.handleDecrement=function(t){var a=e.state.habits.map((function(e){return e.id===t.id?Object(i.a)({},t,{count:t.count>0?t.count-1:0}):e}));e.setState({habits:a})},e.handleDelete=function(t){var a=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:a})},e.handleAdd=function(t){var a=e.state.habits;e.setState({habits:Array.from(a).concat({id:Date.now(),name:t,count:0})})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(i.a)({},e,{count:0}):e}));e.setState({habits:t})},e}return Object(l.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{habits:this.state.habits,totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),c.a.createElement(d,{habits:this.state.habits,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement,onDelete:this.handleDelete,onAdd:this.handleAdd,onReset:this.handleReset}))}}]),a}(n.Component);a(17);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.2efbe34e.chunk.js.map