(this["webpackJsonpbitcoin-app"]=this["webpackJsonpbitcoin-app"]||[]).push([[0],{39:function(e,t,c){},5:function(e,t,c){"use strict";c.r(t),c.d(t,"FETCH_PRICE_REQUEST",(function(){return r})),c.d(t,"FETCH_PRICE_SUCCESS",(function(){return n})),c.d(t,"FETCH_PRICE_FAIL",(function(){return i})),c.d(t,"ADD_CURRENT_PRICE",(function(){return s})),c.d(t,"REMOVE_CURRENT_PRICE",(function(){return a})),c.d(t,"ADD_SAVED_PRICE",(function(){return l})),c.d(t,"REMOVE_SAVED_PRICE",(function(){return o}));var r="FETCH_PRICE_REQUEST",n="FETCH_PRICE_SUCCESS",i="FETCH_PRICE_FAIL",s="ADD_CURRENT_PRICE",a="REMOVE_CURRENT_PRICE",l="ADD_SAVED_PRICE",o="REMOVE_SAVED_PRICE"},63:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(3),s=c(9),a=c.n(s),l=(c(39),c(12)),o=c.n(l),d=c(25),j=c(26),b=c.n(j),u=c(5),h=c(27),O=function(e){return e.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},E=c(0);var x=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.currentPriceData})).currentPriceList,c=function(t){e(function(e){return function(t,c){t({type:u.REMOVE_CURRENT_PRICE,payload:e}),localStorage.setItem("fetchedPrice",JSON.stringify(c().currentPriceData.currentPriceList))}}(t))},r=function(t){e(function(e){return function(t,c){t({type:u.ADD_SAVED_PRICE,payload:e}),localStorage.setItem("savedPrice",JSON.stringify(c().savedPriceData.savedPriceList))}}(t))};return Object(E.jsx)("div",{className:"row justify-content-center mt-5",children:Object(E.jsx)("div",{className:"table-responsive",children:Object(E.jsxs)("table",{class:"table table-hover table-secondary",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{scope:"col",children:"Index"}),Object(E.jsx)("th",{scope:"col",children:"Timestamp"}),Object(E.jsx)("th",{scope:"col",children:"BitCoin"}),Object(E.jsx)("th",{scope:"col",children:"USD"}),Object(E.jsx)("th",{scope:"col",children:"GBP"}),Object(E.jsx)("th",{scope:"col",children:"Euro"}),Object(E.jsx)("th",{colSpan:"2",scope:"col",children:"Actions"})]})}),Object(E.jsx)("tbody",{children:t.slice(0,20).map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:t}),Object(E.jsx)("th",{scope:"row",children:e.timestamp}),Object(E.jsx)("td",{children:"1"}),Object(E.jsx)("td",{children:e.usd.toLocaleString()}),Object(E.jsx)("td",{children:e.gbp.toLocaleString()}),Object(E.jsx)("td",{children:e.euro.toLocaleString()}),Object(E.jsx)("td",{children:Object(E.jsx)("button",{type:"button",onClick:function(){return c(e.id)},class:"btn btn-danger",children:"Delete"})}),Object(E.jsx)("td",{children:Object(E.jsx)("button",{type:"button",class:"btn btn-success",onClick:function(){return r(e)},children:"Save"})})]},e.id)}))})]})})})};var v=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.savedPriceData})).savedPriceList,c=function(t){e(function(e){return function(t,c){t({type:u.REMOVE_SAVED_PRICE,payload:e}),localStorage.setItem("savedPrice",JSON.stringify(c().savedPriceData.savedPriceList))}}(t))};return Object(E.jsx)("div",{className:"row justify-content-center mt-5 w-100",children:Object(E.jsx)("div",{className:"table-responsive",children:Object(E.jsxs)("table",{class:"table table-hover table-secondary",children:[Object(E.jsx)("thead",{children:Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{scope:"col",children:"Timestamp"}),Object(E.jsx)("th",{scope:"col",children:"BitCoin"}),Object(E.jsx)("th",{scope:"col",children:"US Dollar"}),Object(E.jsx)("th",{scope:"col",children:"GBP"}),Object(E.jsx)("th",{scope:"col",children:"Euro"}),Object(E.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(E.jsx)("tbody",{children:t.slice(0,20).map((function(e,t){return Object(E.jsxs)("tr",{children:[Object(E.jsx)("th",{scope:"row",children:e.timestamp}),Object(E.jsx)("td",{children:"1"}),Object(E.jsx)("td",{children:e.usd}),Object(E.jsx)("td",{children:e.gbp}),Object(E.jsx)("td",{children:e.euro}),Object(E.jsx)("td",{children:Object(E.jsx)("button",{type:"button",onClick:function(){return c(e.id)},class:"btn btn-danger",children:"Delete"})})]},e.id)}))})]})})})};var p=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.fetchStatus})),c=t.loading,r=t.error,n=Object(i.c)((function(e){return e.savedPriceData})).savedPriceList,s=Object(i.c)((function(e){return e.currentPriceData})).currentPriceList;return Object(E.jsx)("div",{className:"bg-dark bg-gradient mw-100 min-vh-100 text-white",children:Object(E.jsxs)("div",{className:"container",children:[Object(E.jsx)("div",{className:"row justify-content-center p-5",children:Object(E.jsx)("div",{className:"col-sm-6 title",children:Object(E.jsx)("h2",{children:"Bitcoin Dashboard"})})}),Object(E.jsx)("div",{className:"row justify-content-center",children:Object(E.jsx)("div",{className:"col-sm-4 col-xl-2",children:Object(E.jsx)("button",{type:"button",class:"btn btn-primary bg-gradient btn-lg",onClick:function(){e(function(){var e=Object(d.a)(o.a.mark((function e(t,c){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u.FETCH_PRICE_REQUEST}),e.prev=1,e.next=4,b.a.get("https://api.coindesk.com/v1/bpi/currentprice.json");case 4:r=e.sent,n=r.data,t({type:u.FETCH_PRICE_SUCCESS}),t({type:u.ADD_CURRENT_PRICE,payload:{id:Object(h.v4)().slice(0,8),timestamp:n.time.updated,usd:O(n.bpi.USD.rate_float.toFixed(1)),gbp:O(n.bpi.GBP.rate_float.toFixed(1)),euro:O(n.bpi.EUR.rate_float.toFixed(1))}}),localStorage.setItem("fetchedPrice",JSON.stringify(c().currentPriceData.currentPriceList)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:u.FETCH_PRICE_FAIL,payload:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,c){return e.apply(this,arguments)}}())},children:"Fetch Data"})})}),r&&Object(E.jsx)("div",{className:"row justify-content-center mt-5",children:Object(E.jsx)("div",{className:"col-sm-6",children:Object(E.jsx)("div",{className:"alert alert-danger",role:"alert",children:r})})}),c&&Object(E.jsx)("div",{className:"row justify-content-center mt-5",children:Object(E.jsxs)("div",{className:"col-sm-2",children:[Object(E.jsx)("strong",{children:"Loading..."}),Object(E.jsx)("div",{class:"spinner-border ml-auto",role:"status","aria-hidden":"true"})]})}),Object(E.jsx)("div",{className:"row text-center mt-5",children:Object(E.jsx)("div",{className:"col-sm-12",children:Object(E.jsx)("h2",{children:"Current Fetched Price Table"})})}),0===s.length?Object(E.jsx)("div",{className:"row justify-content-center mt-5",children:Object(E.jsx)("div",{className:"col-sm-6",children:Object(E.jsxs)("div",{class:"alert alert-secondary",role:"alert",children:["There is no currently fetched data available.Click the"," ",Object(E.jsx)("strong",{children:"Fetch Data"}),' button to retrieve the current price of a Bitcoin"']})})}):Object(E.jsx)(x,{}),Object(E.jsx)("div",{className:"row text-center mt-5",children:Object(E.jsx)("div",{className:"col-sm-12",children:Object(E.jsx)("h2",{children:"Saved Price Table"})})}),0===n.length?Object(E.jsx)("div",{className:"row justify-content-center mt-5",children:Object(E.jsx)("div",{className:"col-sm-6",children:Object(E.jsxs)("div",{class:"alert alert-secondary",role:"alert",children:["There is no data saved in the table.Click the"," ",Object(E.jsx)("strong",{children:"save button"})," to save the data."]})})}):Object(E.jsx)(v,{})]})})},f=(c(62),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),i(e),s(e)}))}),P=c(6),m=c(28),C=c(13),_=c(4),g=c(5),R=g.FETCH_PRICE_REQUEST,S=g.FETCH_PRICE_SUCCESS,y=g.FETCH_PRICE_FAIL,D=g.ADD_CURRENT_PRICE,I=g.REMOVE_CURRENT_PRICE,N=g.ADD_SAVED_PRICE,T=g.REMOVE_SAVED_PRICE,L={currentPriceData:{currentPriceList:localStorage.getItem("fetchedPrice")?JSON.parse(localStorage.getItem("fetchedPrice")):[]},savedPriceData:{savedPriceList:localStorage.getItem("savedPrice")?JSON.parse(localStorage.getItem("savedPrice")):[]}},F=Object(P.b)({fetchStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:null,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return{loading:!0};case S:return{loading:!1};case y:return{loading:!1,error:t.payload};default:return e}},currentPriceData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{currentPriceList:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return Object(_.a)(Object(_.a)({},e),{},{currentPriceList:[t.payload].concat(Object(C.a)(e.currentPriceList))});case I:return Object(_.a)(Object(_.a)({},e),{},{currentPriceList:e.currentPriceList.filter((function(e){return e.id!==t.payload}))});default:return e}},savedPriceData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{savedPriceList:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var c=e.savedPriceList.find((function(e){return e.id===t.payload.id}));return c?Object(_.a)({},e):Object(_.a)(Object(_.a)({},e),{},{savedPriceList:[t.payload].concat(Object(C.a)(e.savedPriceList))});case T:return Object(_.a)(Object(_.a)({},e),{},{savedPriceList:e.savedPriceList.filter((function(e){return e.id!==t.payload}))});default:return e}}}),w=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.c,A=Object(P.d)(F,L,w(Object(P.a)(m.a)));a.a.render(Object(E.jsx)(i.a,{store:A,children:Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(p,{})})}),document.getElementById("root")),f()}},[[63,1,2]]]);
//# sourceMappingURL=main.58c9b2aa.chunk.js.map