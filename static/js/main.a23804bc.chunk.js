(this.webpackJsonpcovidstat=this.webpackJsonpcovidstat||[]).push([[0],{101:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},102:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},20:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(93),o=a.n(c),s=a(10),i=a.n(s),d=a(16),u=a(3),l=a(4),j=a(7),f=a(6),p=a(259),h=a(264),b=a(260),v=a(261),x=a(20),m=a.n(x),O=a(44),g=a.n(O),y=a(45),_=a.n(y),C=a(2),w=function(e){var t=e.data,a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;return a?Object(C.jsx)("div",{className:m.a.container,children:Object(C.jsxs)(p.a,{container:!0,spacing:3,justify:"center",children:[Object(C.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:_()(m.a.card,m.a.infected),children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(C.jsx)(v.a,{variant:"h5",children:Object(C.jsx)(g.a,{start:0,end:a.value,duration:2.5,separator:","})}),Object(C.jsxs)(v.a,{colr:"textSecondary",children:[" ",new Date(c).toDateString()," "]}),Object(C.jsx)(v.a,{variant:"body2",children:"Number of active cases of covid19"})]})}),Object(C.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:_()(m.a.card,m.a.recovered),children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(C.jsx)(v.a,{variant:"h5",children:Object(C.jsx)(g.a,{start:0,end:n.value,duration:2.5,separator:","})}),Object(C.jsxs)(v.a,{colr:"textSecondary",children:[" ",new Date(c).toDateString()," "]}),Object(C.jsx)(v.a,{variant:"body2",children:"Number of recoveries from covid19"})]})}),Object(C.jsx)(p.a,{item:!0,component:h.a,xs:12,md:3,className:_()(m.a.card,m.a.deaths),children:Object(C.jsxs)(b.a,{children:[Object(C.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(C.jsx)(v.a,{variant:"h5",children:Object(C.jsx)(g.a,{start:0,end:r.value,duration:2.5,separator:","})}),Object(C.jsxs)(v.a,{colr:"textSecondary",children:[" ",new Date(c).toDateString()," "]}),Object(C.jsx)(v.a,{variant:"body2",children:"Number of death cases from covid19"})]})})]})}):Object(C.jsxs)("div",{className:"ui segment",children:[Object(C.jsx)("div",{className:"ui active inverted dimmer",children:Object(C.jsx)("div",{className:"ui text loader",children:"Loading"})}),Object(C.jsx)("p",{})]})},N=a(28),k=a(46),D=a.n(k),S="https://covid19.mathdro.id/api",I=function(){var e=Object(d.a)(i.a.mark((function e(t){var a,n,r,c,o,s,d;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,d=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:d});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=a(64),E=a(101),P=a.n(E),z=function(e){var t=e.data,a=t.confirmed,r=t.deaths,c=t.recovered,o=e.country,s=Object(n.useState)([]),u=Object(N.a)(s,2),l=u[0],j=u[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=l.length?Object(C.jsx)(A.b,{data:{labels:l.map((function(e){return e.date})),datasets:[{data:l.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:l.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5",fill:!0}]}}):null,p=a?Object(C.jsx)(A.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,r.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(o)}}}):null;return Object(C.jsx)("div",{className:P.a.container,children:o?p:f})},G=a(263),J=a(262),M=a(102),Q=a.n(M),R=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),r=Object(N.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=o,e.next=3,U();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),Object(C.jsx)(G.a,{className:Q.a.formControl,children:Object(C.jsxs)(J.a,{defaultValue:"",onChange:function(e){return t(e.target.value)},children:[Object(C.jsx)("option",{value:"",children:"Global"}),c.map((function(e,t){return Object(C.jsx)("option",{value:e,children:e},t)}))]})})},V=a(63),q=a.n(V),L=a.p+"static/media/image.9e5d4fc7.png",Y=function(e){Object(j.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(d.a)(i.a.mark((function t(a){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return Object(C.jsxs)("div",{className:q.a.container,children:[Object(C.jsx)("img",{src:L,alt:"COVID-19",className:q.a.image}),Object(C.jsx)(w,{data:t}),Object(C.jsx)(R,{handleCountryChange:this.handleCountryChange}),Object(C.jsx)(z,{data:t,country:a})]})}}]),a}(r.a.Component);o.a.render(Object(C.jsx)(Y,{}),document.getElementById("root"))},63:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}}},[[241,1,2]]]);
//# sourceMappingURL=main.a23804bc.chunk.js.map