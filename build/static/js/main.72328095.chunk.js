(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"Header_header__YlHDN"}},11:function(e,t,n){e.exports={profile:"UserProfile_profile__4nKqc"}},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(4),o=n.n(r),i=(n(16),n(2)),u=n(3),s={counter:0,isShowCounter:!1},a=Object(u.b)({name:"counter",initialState:s,reducers:{increment:function(e){e.counter++},decrement:function(e){e.counter--},increase:function(e,t){e.counter=e.counter+t.payload},toggleCounter:function(e){e.isShowCounter=!e.isShowCounter},clearCounter:function(e){e.counter=s.counter}}}),j=a.actions,l=a.reducer,d=n(9),b=n.n(d),h=n(1),O=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.counter.counter})),n=Object(i.c)((function(e){return e.counter.isShowCounter}));return Object(h.jsxs)("main",{className:b.a.counter,children:[Object(h.jsx)("h1",{children:"Redux Counter"}),Object(h.jsx)("div",{hidden:n,className:b.a.value,children:t}),Object(h.jsx)("button",{onClick:function(){e(j.increment())},children:"Increment"}),Object(h.jsx)("button",{onClick:function(){e(j.increase(5))},children:"Increase"}),Object(h.jsx)("button",{onClick:function(){e(j.decrement())},children:"Decrement"}),Object(h.jsx)("button",{onClick:function(){e(j.toggleCounter())},children:"Toggle Counter"}),Object(h.jsx)("button",{onClick:function(){e(j.clearCounter())},children:"Clear Counter"})]})},x=n(10),f=n.n(x),m=Object(u.b)({name:"authentication",initialState:{isAuthenticated:!1},reducers:{onLogin:function(e){e.isAuthenticated=!0},onLogout:function(e){e.isAuthenticated=!1}}}),C=m.actions,p=m.reducer,_=function(){var e=Object(i.b)();return Object(i.c)((function(e){return e.auth.isAuthenticated}))&&Object(h.jsxs)("header",{className:f.a.header,children:[Object(h.jsx)("h1",{children:"Redux Auth"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"My Products"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"My Sales"})}),Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){e(C.onLogout())},children:"Logout"})})]})})]})},v=n(5),g=n.n(v),w=function(){var e=Object(i.b)();return Object(h.jsx)("main",{className:g.a.auth,children:Object(h.jsx)("section",{children:Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:g.a.control,children:[Object(h.jsx)("label",{htmlFor:"email",children:"Email"}),Object(h.jsx)("input",{type:"email",id:"email"})]}),Object(h.jsxs)("div",{className:g.a.control,children:[Object(h.jsx)("label",{htmlFor:"password",children:"Password"}),Object(h.jsx)("input",{type:"password",id:"password"})]}),Object(h.jsx)("button",{onClick:function(){e(C.onLogin())},children:"Login"})]})})})},k=n(11),N=n.n(k),y=function(){return Object(h.jsx)("main",{className:N.a.profile,children:Object(h.jsx)("h2",{children:"My User Profile"})})};var A=function(){var e=Object(i.c)((function(e){return e.auth.isAuthenticated}));return Object(h.jsxs)(c.Fragment,{children:[Object(h.jsx)(_,{}),!e&&Object(h.jsx)(w,{}),e&&Object(h.jsx)(y,{}),e&&Object(h.jsx)(O,{})]})},S=Object(u.a)({reducer:{counter:l,auth:p}});o.a.render(Object(h.jsx)(i.a,{store:S,children:Object(h.jsx)(A,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={auth:"Auth_auth__23Ecv",control:"Auth_control__2FHv7"}},9:function(e,t,n){e.exports={counter:"Counter_counter__24uG4",value:"Counter_value__N5Uyc"}}},[[22,1,2]]]);
//# sourceMappingURL=main.72328095.chunk.js.map