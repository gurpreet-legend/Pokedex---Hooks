(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(5),r=n.n(a),s=(n(15),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))}),i=n(3),o=n.n(i),h=n(6),u=n(4),l=n(0),j=function(e){var t=e.name,n=e.id,c=e.image;return Object(l.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 measure card",children:[Object(l.jsx)("img",{src:c,alt:"Pokemon"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t[0].toUpperCase()+t.substring(1)}),Object(l.jsx)("p",{children:n})]})]})},b=function(e){var t=e.pokemons,n=t.map((function(e,n){return Object(l.jsx)(j,{id:t[n].id,name:t[n].name,image:t[n].image},t[n].id)}));return Object(l.jsx)("div",{className:"grid",children:n})},d=function(e){var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue searchbar",type:"search",placeholder:"Gonna catch them all ...",onChange:t})})},p=function(e){return Object(l.jsxs)("div",{className:"scroll",style:{overflowY:"scroll",height:"75vh"},children:[e.children,";"]})},m=n(7),g=n(8),O=n(10),f=n(9),v=function(e){Object(O.a)(n,e);var t=Object(f.a)(n);function n(e){var c;return Object(m.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(g.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{className:!0,children:"Ooops! Something went wrong"}):this.props.children}}]),n}(c.Component);n(18);var x=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],j=s[1];Object(c.useEffect)(Object(h.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://pokeapi.co/api/v2/pokemon?limit=898",e.next=3,fetch("https://pokeapi.co/api/v2/pokemon?limit=898");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c=n.results.map((function(e,t){return{id:t+1,name:e.name,image:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png")}})),a(c);case 9:case"end":return e.stop()}}),e)}))),[]);var m=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return n.length?Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Pokedex"}),Object(l.jsx)(d,{searchChange:function(e){j(e.target.value)}}),Object(l.jsx)(p,{children:Object(l.jsx)(v,{children:Object(l.jsx)(b,{pokemons:m})})})]}):Object(l.jsx)("h1",{className:"f1",children:"Loading..."})};r.a.render(Object(l.jsx)(x,{}),document.getElementById("root")),s()}},[[19,1,2]]]);
//# sourceMappingURL=main.206dffd3.chunk.js.map