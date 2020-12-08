(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={label:"Filter_label__1Hxoi",input:"Filter_input__29vac"}},2:function(t,e,n){t.exports={form:"Form_form__3YOak",label:"Form_label__3Qmjr",input:"Form_input__1NFWL",button:"Form_button__3jgq9"}},20:function(t,e,n){t.exports={enter:"alert_enter__3gMHU",enterActive:"alert_enterActive__2RmLw",exit:"alert_exit__23Qfj",exitActive:"alert_exitActive__5oJqK"}},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(5),s=n.n(i),o=n(10),l=n(21),u=n(11),m=n(12),p=n(15),_=n(14),b=n(19),j=n.n(b),h=n(2),f=n.n(h),x=function(t){Object(p.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t.addContactItem=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("form",{onSubmit:this.addContactItem,className:f.a.form,children:[Object(a.jsxs)("label",{className:f.a.label,children:["Name",Object(a.jsx)("input",{className:f.a.input,type:"text",name:"name",value:e,onChange:this.inputChange,required:!0})]}),Object(a.jsxs)("label",{className:f.a.label,children:["Number",Object(a.jsx)("input",{className:f.a.input,type:"number",name:"number",value:n,onChange:this.inputChange,required:!0})]}),Object(a.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})})}}]),n}(c.Component),d=n(42),O=n(41),v=n(7),C=n.n(v),A=function(t){var e=t.toFilter,n=t.onDelete;return Object(a.jsx)(d.a,{component:"ul",className:C.a.ul,children:e.map((function(t){var e=t.name,c=t.number,r=t.id;return Object(a.jsx)(O.a,{in:!0,timeout:250,unmountOnExit:!0,classNames:C.a,children:Object(a.jsxs)("li",{className:C.a.li,children:[Object(a.jsxs)("span",{className:C.a.span,children:[" ",e,": ",c]}),Object(a.jsx)("button",{className:C.a.button,type:"button",onClick:function(){return n(r)},children:"X"})]},r)},r)}))})},g=n(18),N=n.n(g),y=function(t){var e=t.onFilter,n=t.filter;return Object(a.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(a.jsx)("input",{className:N.a.input,type:"text",name:"filter",onChange:e,value:n})]})},F=n(8),S=n.n(F),L=n(20),k=n.n(L),w=function(t){Object(p.a)(n,t);var e=Object(_.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",alert:!1},t.addContactItem=function(e){if(!t.state.contacts.some((function(t){return t.name===e.name||t.name.toLowerCase()===e.name}))){var n={name:e.name,number:e.number,id:j.a.generate()};return t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[n])}}))}t.setState({alert:!0}),setTimeout((function(){t.setState({alert:!1})}),3e3)},t.filterContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterInput=function(e){var n=e.currentTarget,a=n.name,c=n.value;return console.log(a),t.setState(Object(o.a)({},a,c))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.alert,c=t.contacts;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{appear:!0,in:!0,timeout:500,classNames:S.a,unmountOnExit:!0,children:Object(a.jsx)("h1",{className:S.a.title,children:"Phonebook"})}),Object(a.jsx)(O.a,{appear:n,in:n,timeout:500,classNames:k.a,unmountOnExit:!0,children:Object(a.jsx)("p",{className:S.a.alert,children:"Contact already exists!"})}),Object(a.jsx)(x,{onSubmit:this.addContactItem}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(O.a,{in:c.length>1,timeout:250,classNames:S.a,unmountOnExit:!0,children:Object(a.jsx)(y,{onFilter:this.filterInput,value:e})}),Object(a.jsx)(A,{toFilter:this.filterContacts(),onDelete:this.deleteContact})]})}}]),n}(c.Component);n(39);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={ul:"ContactList_ul__3cAq6",li:"ContactList_li__-7qU5",span:"ContactList_span__1fyMQ",button:"ContactList_button__3KY8p",enter:"ContactList_enter__h5VdU",enterActive:"ContactList_enterActive__2aFzd",exit:"ContactList_exit__3PJ6D",exitActive:"ContactList_exitActive__3aBF_"}},8:function(t,e,n){t.exports={enter:"App_enter__T19af",enterActive:"App_enterActive__WcvAt",exit:"App_exit__DafPY",exitActive:"App_exitActive__2A41p",appear:"App_appear__4brJ7",appearActive:"App_appearActive__zON6M",title:"App_title__4OjVh",alert:"App_alert__1DO66"}}},[[40,1,2]]]);
//# sourceMappingURL=main.8521ac08.chunk.js.map