(this.webpackJsonpnote_stack=this.webpackJsonpnote_stack||[]).push([[0],{55:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n(0),i=n(7),a=n.n(i),r=n(41),l=n(14),j=n(34),s=n.n(j);var u=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("h1",{children:[Object(c.jsx)(s.a,{}),"Note-Stack"]})})},d=n(39),b=n.n(d);var O=function(t){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h1",{children:t.title}),Object(c.jsx)("p",{children:t.content}),Object(c.jsx)("button",{onClick:function(){t.deleteNote(t.id)},children:Object(c.jsx)(b.a,{})})]})};var f=function(){var t=(new Date).getFullYear();return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["Copyright \xa9 ",t]})})},h=(n(55),n(26)),x=n(33),v=n(40),m=n.n(v),p=n(74),k=n(73);var N=function(t){var e=Object(o.useState)({title:"",content:""}),n=Object(l.a)(e,2),i=n[0],a=n[1],r=Object(o.useState)(!1),j=Object(l.a)(r,2),s=j[0],u=j[1],d=Object(o.useState)({title:"Title",content:"Take a note ..."}),b=Object(l.a)(d,2),O=b[0],f=b[1];function v(t){var e=t.target,n=e.value,c=e.name;a((function(t){return Object(x.a)(Object(x.a)({},t),{},Object(h.a)({},c,n))}))}return Object(c.jsx)("div",{children:Object(c.jsxs)("form",{className:"create-note",children:[s&&Object(c.jsx)("input",{value:i.title,name:"title",placeholder:O.title,onChange:v}),Object(c.jsx)("textarea",{value:i.content,name:"content",placeholder:O.content,rows:s?"3":"1",onChange:v,onClick:function(){u(!0),t.removeNote(s)}}),Object(c.jsx)(p.a,{in:s,children:Object(c.jsx)(k.a,{onClick:function(e){e.preventDefault(),function(e){if(""===i.title)f({title:"Please add Title.",content:i.content});else{if(""!==i.content)return t.addNote(i);f({title:i.title,content:"Please add Note."})}}()},children:Object(c.jsx)(m.a,{})})})]})})},y=[{key:0,title:"How to Get Started",content:"Just fill in the title and description. \n \n  Now click the yellow add button to the right to add your note. \n  \n If you decide to remove a note just click the delete icon to remove it. "}];var g=function(){var t=Object(o.useState)([]),e=Object(l.a)(t,2),n=e[0],i=e[1],a=Object(o.useState)(!1),j=Object(l.a)(a,2),s=j[0],d=j[1];function b(t){i((function(e){return e.filter((function(e,n){return n!==t}))}))}function h(t){0===t&&d(!0)}return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)(N,{addNote:function(t){i((function(e){return[].concat(Object(r.a)(e),[t])}))},removeNote:function(){d(!0)}}),s?null:y.map((function(t){return Object(c.jsx)(O,{id:t.key,title:t.title,content:t.content,deleteNote:h},t.key)})),n.map((function(t,e){return Object(c.jsx)(O,{id:e,title:t.title,content:t.content,deleteNote:b},e)})),Object(c.jsx)(f,{})]})};a.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.30cbff82.chunk.js.map