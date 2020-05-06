(this["webpackJsonpterraformer-stats"]=this["webpackJsonpterraformer-stats"]||[]).push([[0],{194:function(e,t,a){e.exports=a(397)},199:function(e,t,a){},201:function(e,t,a){},397:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),n=a(57),s=a.n(n),l=(a(199),a(58)),c=a.n(l),i=a(150),u=a(151),m=a(36),d=a(152),p=a(153),h=a(163),f=(a(201),a(11)),E=a(88),g=a(414),v=a(417),y=a(418),b=a(415),w=a(416),D=a(89),C=a.n(D);C.a.defaults.headers.post["Content-Type"]="application/json";var k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={stats:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.get("https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases");case 2:t=e.sent,this.setState({stats:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.stats,t=[],a={};e.forEach((function(e){var r={},o=0;e.assets.forEach((function(e){var t="all";4===e.name.split("-").length&&(t=e.name.split("-")[1]);var n=r[t];r[t]=n?n+e.download_count:e.download_count,a[t]=!0,o+=e.download_count})),t.push({name:e.tag_name,published_at:e.published_at,assets:r,totalCount:o})}));for(var r=0;r<t.length;r++){var n;n=0==r?Math.abs(new Date-new Date(Date.parse(t[r].published_at))):Math.abs(new Date(Date.parse(t[r-1].published_at))-new Date(Date.parse(t[r].published_at)));var s=Math.ceil(n/864e5);t[r].diffDays=s}t.forEach((function(e){e.totalCount=Math.ceil(e.totalCount/e.diffDays*10)/10,Object.keys(a).forEach((function(t){void 0!==e.assets[t]?e.assets[t]=Math.ceil(e.assets[t]/e.diffDays*10)/10:e.assets[t]=0}))}));var l=[{Header:"Name",accessor:"name"},{Header:"Total count",accessor:"totalCount"},{Header:"Published at",accessor:"published_at"},{Header:"Latest version for [days]",accessor:"diffDays"}];Object.keys(a).forEach((function(e){l.push({Header:e.charAt(0).toUpperCase()+e.slice(1),accessor:"assets."+e})}));return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"Terraformer daily downloads")),o.a.createElement("main",{id:"container"},o.a.createElement(f.d,{width:1200,height:500,data:t,margin:{top:5,right:30,left:20,bottom:5}},o.a.createElement(f.f,{name:"Version",dataKey:"name"}),o.a.createElement(f.g,null),o.a.createElement(f.a,{strokeDasharray:"3 3"}),o.a.createElement(f.e,null),o.a.createElement(f.b,null),o.a.createElement(f.c,{type:"monotone",name:"AWS",dataKey:"assets.aws",stroke:"#F7832A",activeDot:{r:8}}),o.a.createElement(f.c,{type:"monotone",name:"Google",dataKey:"assets.google",stroke:"#E5B832",activeDot:{r:8}}),o.a.createElement(f.c,{type:"monotone",name:"Azure",dataKey:"assets.azure",stroke:"#3BB8CE",activeDot:{r:8}}),o.a.createElement(f.c,{type:"monotone",name:"Kubernetes",dataKey:"assets.kubernetes",stroke:"#615CD1",activeDot:{r:8}}),o.a.createElement(f.c,{type:"monotone",name:"AliCloud",dataKey:"assets.alicloud",stroke:"#ACACAC",activeDot:{r:8}}),o.a.createElement(f.c,{type:"monotone",name:"Cross cloud",dataKey:"assets.all",stroke:"#2284d8",activeDot:{r:8}})),o.a.createElement("h3",null,"Legend"),o.a.createElement("p",null,"Diagram shows daily download stats of ",o.a.createElement("a",{href:"https://github.com/GoogleCloudPlatform/terraformer"},"Terraformer")," tool across releases. Each release starting from version 0.8.4 provides separate builds per Terraform provider which can give some insight into cloud popularity."),o.a.createElement("ul",null,o.a.createElement("li",null,"Sum - total daily number of downloads of the tool"),o.a.createElement("li",null,"Cross cloud - total daily number of downloads of the tool for all clouds"),o.a.createElement("li",null,"_Provider_ - total daily number of downloads of the tool for a given provider")),o.a.createElement("h3",null,"Download list"),o.a.createElement((function(e){var t=e.columns,a=e.data,r=Object(E.useTable)({columns:t,data:a},E.useSortBy),n=r.getTableProps,s=r.headerGroups,l=r.rows,c=r.prepareRow;return o.a.createElement(g.a,n(),o.a.createElement(b.a,null,s.map((function(e){return o.a.createElement(w.a,e.getHeaderGroupProps(),e.headers.map((function(e){return o.a.createElement(y.a,e.getSortByToggleProps(),e.render("Header"),o.a.createElement("span",null,e.isSorted?e.isSortedDesc?" \ud83d\udd3d ":" \ud83d\udd3c ":" \ud83d\udd3d\ud83d\udd3c"))})))}))),o.a.createElement(v.a,null,l.map((function(e,t){return c(e),o.a.createElement(w.a,e.getRowProps(),e.cells.map((function(e){return o.a.createElement(y.a,e.getCellProps(),e.render("Cell"))})))}))))}),{columns:l,data:t}),o.a.createElement("h3",null,"Source"),o.a.createElement("a",{href:"https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases"},"https://api.github.com/repos/GoogleCloudPlatform/terraformer/releases")))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[194,1,2]]]);
//# sourceMappingURL=main.34cb8aab.chunk.js.map