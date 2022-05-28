(this.webpackJsonpsmoke_ui=this.webpackJsonpsmoke_ui||[]).push([[0],{12:function(e){e.exports=JSON.parse('{"name":"smoke_ui","version":"0.1.0","private":true,"homepage":"http://web.engr.oregonstate.edu/~pahujak/cs340/","dependencies":{"@testing-library/jest-dom":"^5.16.4","@testing-library/react":"^13.1.1","@testing-library/user-event":"^13.5.0","fs":"0.0.1-security","mysql":"^2.18.1","node-ini":"^1.0.0","react":"^17.0.2","react-dom":"^17.0.2","react-icons":"^4.3.1","react-router-dom":"^6.3.0","react-scripts":"^4.0.3","url":"^0.11.0","web-vitals":"^1.1.2","express":"^4.17.1","nodemon":"^2.0.7"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","deployui":"npm run build && npm run uploadui","preuploadui":"ssh -t pahujak@access.engr.oregonstate.edu \'rm -rf public_html/cs340/*","uploadui":"scp -r build/* pahujak@flip.engr.oregonstate.edu:public_html/cs340/","preuploadserver":"ssh -t pahujak@access.engr.oregonstate.edu \'rm -rf public_html/cs340_server/*\'","uploadserver":"scp -r ../smoke_server/package.json ../smoke_server/smoke.mjs pahujak@flip.engr.oregonstate.edu:public_html/cs340_server","startserver":"ssh -t pahujak@flip2.engr.oregonstate.edu \\"cd public_html/cs340_server && npm install && npm start\\""},"eslintConfig":{"extends":["react-app"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(11),a=n.n(s),i=(n(17),n(6)),o=n(3),j=n(4),l=n.n(j),u=n(2),b=(n(19),n(5)),d=n(0);var h=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Home Page"}),Object(d.jsx)(b.b,{to:"/Players",children:"Players"}),Object(d.jsx)(b.b,{to:"/Studios",children:"Studios"}),Object(d.jsx)(b.b,{to:"/Games",children:"Games"}),Object(d.jsx)(b.b,{to:"/xyz/1",children:"something"})]})},O=n(8);var f=function(e){var t=e.player,n=e.onView;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.username}),Object(d.jsx)("td",{children:t.email}),Object(d.jsx)("td",{children:t.phone}),Object(d.jsx)("td",{children:t.birthdate}),Object(d.jsx)("td",{children:Object(d.jsx)("td",{children:Object(d.jsx)(O.b,{onClick:function(){return n(t)}})})})]})};var p=function(e){var t=e.players,n=e.onView;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{id:"players",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"Username"}),Object(d.jsx)("th",{children:"e-mail"}),Object(d.jsx)("th",{children:"phone"}),Object(d.jsx)("th",{children:"DOB"})]}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsx)(f,{player:e,onView:n},t)}))})]})})};var x=function(e){var t=e.field,n=e.onSet,r=(t.name,t.key_name),s=Object(c.useState)(),a=Object(o.a)(s,2),i=a[0],j=a[1];return Object(c.useEffect)((function(){n(r,i)})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{for:t.name,children:t.name}),Object(d.jsx)("input",{type:"text",id:t.name,onChange:function(e){""!==e.target.value?j(e.target.value):j(void 0)}})]})};var m=function(e){var t=e.title,n=e.params,c=e.OnSubmit,r={},s=function(e,t){r[e]=t,Object.keys(r).forEach((function(e){void 0===r[e]&&delete r[e]})),console.log(r)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:t}),n.map((function(e,t){return Object(d.jsx)(x,{field:e,onSet:s},t)})),Object(d.jsx)("button",{onClick:function(){return c(r),!1},children:"Search"})]})};var g=function(e){var t=e.title,n=e.params,c=e.OnSubmit,r={},s=function(e,t){r[e]=t,Object.keys(r).forEach((function(e){void 0===r[e]&&delete r[e]})),console.log(r)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{children:t}),n.map((function(e,t){return Object(d.jsx)(x,{field:e,onSet:s},t)})),Object(d.jsx)("button",{onClick:function(){return c(r),!1},children:"Search"})]})};var v=function(e){var t=e.setPlayerToView,n=(e.sql_conn,Object(c.useState)([])),r=Object(o.a)(n,2),s=r[0],a=(r[1],Object(u.f)()),j=[{name:"Username",type:"text",key_name:"username"},{name:"E-mail",type:"text",key_name:"email"},{name:"Phone",type:"number",key_name:"phone"},{name:"DOB",type:"text",key_name:"birthdate"}],b=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("select * from Players");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"List of Players"}),Object(d.jsx)(m,{title:"Search Players",params:j,OnSubmit:function(e){alert(JSON.stringify(e));var t="select * from Players ";0!=Object.keys(e).length&&(console.log(Object.keys(e).length),t+="where ",Object.keys(e).forEach((function(n,c){0!==c&&(t+="and "),t+="".concat(n," = ").concat(e[n]," ")}))),t.concat(";"),console.log(t)}}),Object(d.jsx)(p,{players:s,onView:function(e){t(e),a("/PlayerInfo")}}),Object(d.jsx)("button",{onClick:function(){return t({player_id:1,username:"asdf",email:"fdsa",phone:"0123456789",birthdate:"11/11/1111"}),!1},children:"select a player "}),Object(d.jsx)(g,{title:"Insert Player",params:j,OnSubmit:function(e){alert(JSON.stringify(e)),alert(JSON.stringify(e));var t="INSERT INTO Players ";0!=Object.keys(e).length&&(t+="(",Object.keys(e).forEach((function(e,n){0!==n&&(t+=" "),t+="".concat(e,", ")})),t=t.slice(0,-2),t+=") VALUES ",Object.keys(e).forEach((function(n,c){0!==c&&(t+=" "),t+="".concat(e[n],", ")})),t=t.slice(0,-2)),t.concat(";"),console.log(t),b()}}),"        "]})};var y=function(e){var t=e.license;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.game}),Object(d.jsx)("td",{children:t.purchase_date}),Object(d.jsx)("td",{children:t.purchase_price}),Object(d.jsx)("td",{children:t.valid})]})})};var S=function(e){var t=e.onSubmit;void 0===t&&(t=console.log);var n={game:void 0,purchase_date:void 0,purchase_price:void 0,valid:!0},r=Object(c.useState)(n.game),s=Object(o.a)(r,2),a=s[0],i=(s[1],Object(c.useState)(n.purchase_date)),j=Object(o.a)(i,2),l=j[0],u=(j[1],Object(c.useState)(n.purchase_price)),b=Object(o.a)(u,2),h=b[0];return b[1],Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"date"})}),Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"number"})}),Object(d.jsx)("td",{onClick:function(e){return n.game=a,n.purchase_date=l,n.purchase_price=h,void t(n)},children:"submit"})]})};var k=function(e){var t=e.licenses;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Purchased"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"Valid"})]}),Object(d.jsxs)("tbody",{children:[t.map((function(e,t){return Object(d.jsx)(y,{license:e},t)})),Object(d.jsx)(S,{onSubmit:function(e){alert(JSON.stringify(e));var t="INSERT INTO Licenses ";0!=Object.keys(e).length&&(t+="(",Object.keys(e).forEach((function(e,n){0!==n&&(t+=" "),t+="".concat(e,", ")})),t=t.slice(0,-2),t+=") VALUES ",Object.keys(e).forEach((function(n,c){0!==c&&(t+=" "),t+="".concat(e[n],", ")})),t=t.slice(0,-2)),t.concat(";"),console.log(t)}})]})]})})};var w=function(e){var t=e.PlayerToView;e.pool,console.log(t);var n=Object(c.useState)(t.username),r=Object(o.a)(n,2),s=r[0],a=r[1],j=Object(c.useState)(t.email),b=Object(o.a)(j,2),h=b[0],O=b[1],f=Object(c.useState)(t.phone),p=Object(o.a)(f,2),x=p[0],m=p[1],g=Object(c.useState)(t.birthdate),v=Object(o.a)(g,2),y=v[0],S=v[1],w=(Object(u.f)(),function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return console.log("select * from licenses where player_id = ".concat(t.player_id)),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Edit player"}),Object(d.jsx)("input",{type:"text",placeholder:"Enter username here",value:s,onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"text",value:h,placeholder:"Enter email here",onChange:function(e){return O(e.target.value)}}),Object(d.jsx)("input",{type:"number",placeholder:"Enter phone number here",value:x,onChange:function(e){return m(e.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Enter DOB here",value:y,onChange:function(e){return S(e.target.value)}}),Object(d.jsx)("button",{onClick:w,children:"Save"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:"Licenses Owned"}),Object(d.jsx)(k,{licenses:[{game:"Return of the Obra Dinn",purchase_date:"01/22/2020",purchase_price:"$30.00",valid:"true"}]})]})]})};var _=function(e){var t=e.game,n=e.onView,c=e.setStudio;return console.log(t),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.title}),Object(d.jsx)("td",{children:Object(d.jsx)(b.b,{to:"/StudioInfo",onClick:function(){return c(t.studio_id)},children:t.name})}),Object(d.jsx)("td",{children:t.release_date}),Object(d.jsx)("td",{children:Object(d.jsx)("a",{href:t.store_page,children:"Store Page"})}),Object(d.jsx)("td",{children:Object(d.jsx)(O.b,{onClick:function(){return n(t)}})})]})})};var E=function(e){var t=e.games,n=e.setStudio,c=e.onView;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Studio"}),Object(d.jsx)("th",{children:"Year"}),Object(d.jsx)("th",{children:"Store Page"}),Object(d.jsx)("th",{})]}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsx)(_,{game:e,setStudio:n,onView:c},t)}))})]})})};var N=function(e){var t=e.setGameToView,n=e.setStudioToView,r=(e.pool,Object(c.useState)([])),s=Object(o.a)(r,2),a=s[0],j=s[1],b=Object(u.f)(),h=[{name:"Title",type:"text",key_name:"title"},{name:"Studio",type:"text",key_name:"studio"},{name:"Genre",type:"text",key_name:"genre"}],O=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert(JSON.stringify(t)),n="select * from Games join Studios using(studio_id) ",0!=Object.keys(t).length&&(console.log(Object.keys(t).length),n+="where ",Object.keys(t).forEach((function(e,c){0!==c&&(n+="and "),n+="".concat(e," = ").concat(t[e]," ")}))),n.concat(";"),console.log(n),e.next=7,fetch("http://flip2.engr.oregonstate.edu:19866/".concat(n));case 7:return c=e.sent,e.next=10,c.json();case 10:r=e.sent,console.log(r),j(r);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://flip2.engr.oregonstate.edu:19866/select * from Games join Studios using(studio_id);");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),j(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Games"}),Object(d.jsx)("p",{children:"Here you can view games and redirect to pages where you can add, remove, and modify entries."}),Object(d.jsx)(m,{title:"Search Games",params:h,OnSubmit:O}),Object(d.jsx)(E,{games:a,setStudio:n,onView:function(e){t(e),b("/GameInfo")}}),Object(d.jsx)(g,{title:"Insert Game",params:h,OnSubmit:function(e){alert(JSON.stringify(e));var t="INSERT INTO Games ";0!=Object.keys(e).length&&(t+="(",Object.keys(e).forEach((function(e,n){0!==n&&(t+=" "),t+="".concat(e,", ")})),t=t.slice(0,-2),t+=") VALUES ",Object.keys(e).forEach((function(n,c){0!==c&&(t+=" "),t+="".concat(e[n],", ")})),t=t.slice(0,-2)),t.concat(";"),console.log(t),f()}})]})};var V=function(e){var t=e.genre;return e.onDelete,Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t}),Object(d.jsx)("td",{children:Object(d.jsx)(O.a,{onClick:function(){return alert(JSON.stringify(t))}})})]})};var T=function(e){var t=e.onSubmit,n=Object(c.useState)(),r=Object(o.a)(n,2),s=r[0],a=r[1];return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("input",{type:"text",onChange:function(e){return a(e.target.value)}})}),Object(d.jsx)("td",{onClick:function(){return t(s)},children:"Submit"})]})},C=["puzzle","mystery","indie","story-rich"];var P=function(e){e.game;var t=function(e){alert(JSON.stringify(e))};return Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"Genres"}),Object(d.jsx)("th",{children:"action"})]}),Object(d.jsxs)("tbody",{children:[C.map((function(e,n){return Object(d.jsx)(V,{genre:e,onDelete:t},n)})),Object(d.jsx)(T,{onSubmit:function(e){alert(JSON.stringify(e));var t="INSERT INTO Genres ";0!=Object.keys(e).length&&(t+="(",Object.keys(e).forEach((function(e,n){0!==n&&(t+=" "),t+="".concat(e,", ")})),t=t.slice(0,-2),t+=") VALUES ",Object.keys(e).forEach((function(n,c){0!==c&&(t+=" "),t+="".concat(e[n],", ")})),t=t.slice(0,-2)),t.concat(";"),console.log(t)}})]})]})};var I=function(e){var t=e.game;return e.pool,Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:t.title}),Object(d.jsxs)("p",{children:["From ",t.studio,", released on ",t.release_date,". You can find it on ",Object(d.jsx)("a",{href:t.store_page,children:"their store page"})]}),Object(d.jsx)(P,{game:t})]})})};var F=function(e){var t=e.studio,n=e.onView;return e.onDelete,Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.website}),Object(d.jsx)("td",{children:t.phone}),Object(d.jsxs)("td",{children:[Object(d.jsx)("td",{children:Object(d.jsx)(O.b,{onClick:function(){return n(t)}})}),Object(d.jsx)("td",{children:Object(d.jsx)(O.a,{onClick:function(){return alert(JSON.stringify(t))}})})]})]})};var J=function(e){var t=e.studios,n=e.onView;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("table",{id:"studios",children:[Object(d.jsxs)("thead",{children:[Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Website"}),Object(d.jsx)("th",{children:"Phone"})]}),Object(d.jsx)("tbody",{children:t.map((function(e,t){return Object(d.jsx)(F,{studio:e,onView:n},t)}))})]})})};var G=function(e){var t=e.setStudioToView,n=(e.pool,Object(c.useState)([])),r=Object(o.a)(n,2),s=r[0],a=r[1],j=Object(u.f)(),b=[{name:"Name",type:"text",key_name:"name"},{name:"Website",type:"text",key_name:"website"},{name:"Phone",type:"number",key_name:"phone"}],h=function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert(JSON.stringify(t)),O();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://flip2.engr.oregonstate.edu:19866/studios");case 2:t=e.sent,a(JSON.parse(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){O()}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:"List of Studios"}),Object(d.jsx)(m,{title:"Search Studios",params:b,OnSubmit:function(e){alert(JSON.stringify(e));var t="select * from Studios ";0!==Object.keys(e).length&&(console.log(Object.keys(e).length),t+="where ",Object.keys(e).forEach((function(n,c){0!==c&&(t+="and "),t+="".concat(n," = ").concat(e[n]," ")}))),t.concat(";"),console.log(t)}}),Object(d.jsx)(J,{studios:s,onView:function(e){t(e),j("/StudioInfo")},onDelete:h}),Object(d.jsx)(g,{title:"Insert Studio",params:b,OnSubmit:function(e){alert(JSON.stringify(e)),alert(JSON.stringify(e));var t="INSERT INTO Studios ";0!=Object.keys(e).length&&(t+="(",Object.keys(e).forEach((function(e,n){0!==n&&(t+=" "),t+="".concat(e,", ")})),t=t.slice(0,-2),t+=") VALUES ",Object.keys(e).forEach((function(n,c){0!==c&&(t+=" "),t+="".concat(e[n],", ")})),t=t.slice(0,-2)),t.concat(";"),console.log(t),O()}})]})};var L=function(e){var t=e.StudioToView,n=(e.pool,Object(c.useState)([])),r=Object(o.a)(n,2),s=r[0],a=r[1],j=Object(u.g)().params,b=function(){var e=Object(i.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://flip2.engr.oregonstate.edu:19866/select * from Studios where studio_id=".concat(t,";"));case 2:return n=e.sent,e.next=5,n.json();case 5:c=e.sent,console.log(c),a(c[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(c.useState)(s.name),O=Object(o.a)(h,2),f=O[0],p=O[1],x=Object(c.useState)(s.website),m=Object(o.a)(x,2),g=m[0],v=m[1],y=Object(c.useState)(s.phone),S=Object(o.a)(y,2),k=S[0],w=S[1],_=Object(u.f)(),E=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={name:f,website:g,phone:k},alert(JSON.stringify(t)),_("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log(t),void 0===t&&console.log("params: ".concat(j)),b()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Edit studio"}),Object(d.jsx)("input",{type:"text",placeholder:s.name,value:f,onChange:function(e){return p(e.target.value)}}),Object(d.jsx)("input",{type:"text",value:g,placeholder:s.website,onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("input",{type:"number",placeholder:s.phone,value:k,onChange:function(e){return w(e.target.value)}}),Object(d.jsx)("button",{onClick:E,children:"Save"})]})})};var D=function(e){var t=Object(u.f)(),n=Object(c.useState)(),r=Object(o.a)(n,2),s=r[0],a=r[1],j=Object(c.useState)(),b=Object(o.a)(j,2),O=b[0],f=b[1],p=Object(c.useState)(),x=Object(o.a)(p,2),m=x[0],g=x[1],y=function(){var e=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("I'm really trying here."),console.log(n),a(n),console.log("checking if it really changed"),console.log(s),t("/PlayerInfo");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("setting studio to ".concat(n)),f(n),void 0!==n&&t("/StudioInfo");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("something changed."),console.log(s)}),[s]),Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"App-header",children:Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",element:Object(d.jsx)(h,{})}),Object(d.jsx)(u.a,{path:"/Players",element:Object(d.jsx)(v,{setPlayerToView:y}),pool:e}),Object(d.jsx)(u.a,{path:"/PlayerInfo",element:Object(d.jsx)(w,{PlayerToView:s,pool:e})}),Object(d.jsx)(u.a,{path:"/Studios",element:Object(d.jsx)(G,{setStudioToView:S,pool:e})}),Object(d.jsx)(u.a,{path:"/StudioInfo",element:Object(d.jsx)(L,{StudioToView:O,pool:e})}),Object(d.jsx)(u.a,{path:"/Games",element:Object(d.jsx)(N,{setGameToView:g,setStudioToView:S,pool:e})}),Object(d.jsx)(u.a,{path:"/xyz/:id/",element:Object(d.jsx)(L,{})}),Object(d.jsx)(u.a,{path:"/GameInfo",element:Object(d.jsx)(I,{game:m,pool:e})})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},A=n(12).homepage,R=A?new URL(A).pathname:"";a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(b.a,{basename:R,children:Object(d.jsx)(D,{pool:undefined})})}),document.getElementById("root")),U()}},[[21,1,2]]]);
//# sourceMappingURL=main.b0de059c.chunk.js.map