(function(e){function t(t){for(var a,o,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)o=i[u],n[o]&&f.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},s=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},3123:function(e,t,r){"use strict";var a=r("82c4"),n=r.n(a);n.a},4678:function(e,t,r){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return r(t)}function s(e){var t=a[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id="4678"},"82c4":function(e,t,r){},8468:function(e,t,r){"use strict";var a=r("bb70"),n=r.n(a);n.a},bb70:function(e,t,r){},cd49:function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var a=r("2b0e"),n=(r("db4d"),r("ce5b")),s=r.n(n);r("bf40");a["default"].use(s.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}});r("e557");var o=r("ee98"),i=r.n(o),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view"),r("notifications",{attrs:{group:"simple-notifications",position:"right bottom"}})],1)},l=[],d=r("d225"),u=r("b0b4"),f=r("308d"),p=r("6bb5"),m=r("4e2b"),v=r("9ab4"),b=r("60a3"),h=function(e){function t(){return Object(d["a"])(this,t),Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){this.$vuetify.theme.primary="#008da7",this.$vuetify.theme.secondary="#5a647f",this.$vuetify.theme.accent="#26a69a",this.$vuetify.theme.error="#ef476f",this.$vuetify.theme.warning="#ffd166",this.$vuetify.theme.info="#0b5563",this.$vuetify.theme.success="#83d63b"}}]),t}(b["b"]);h=v["a"]([b["a"]],h);var g=h,j=g,y=(r("3123"),r("2877")),x=Object(y["a"])(j,c,l,!1,null,null,null),k=x.exports,w=r("8c4f"),_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrapper-view"},[r("v-navigation-drawer",{attrs:{persistent:"","enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",e._l(e.menu,function(t,a){return r("v-list-tile",{key:a,attrs:{value:"true",to:{name:t.to}}},[r("v-list-tile-action",[r("v-icon",{domProps:{innerHTML:e._s(t.icon)}})],1),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1)}))],1),r("v-toolbar",{attrs:{app:"",flat:"",prominent:"",color:"primary",dark:""}},[r("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{flat:""},on:{click:e.logoff}},[r("i",{staticClass:"material-icons"},[e._v("exit_to_app")])])],1)],1),r("v-content",[r("router-view")],1)],1)},$=[],O=function(e,t){return{type:"authentication/authenticate",email:e,password:t}},C=function(){return{type:"authentication/restore"}},A=function(){return{type:"authentication/logoff"}},U="authentication/loggedUser",E=r("5d73"),P=r.n(E),z=(r("28a5"),function(e,t,r){var a;if(r){var n=new Date;n.setTime(r),a="expires="+n.toUTCString()}else a="expires=Wed; 01 Jan 1970";document.cookie=e+"="+t+";"+a+";path=/"}),B=function(e){var t=e+"=",r=document.cookie.split(";"),a=!0,n=!1,s=void 0;try{for(var o,i=P()(r);!(a=(o=i.next()).done);a=!0){var c=o.value;while(" "===c.charAt(0))c=c.substring(1);if(0===c.indexOf(t))return c.substring(t.length,c.length)}}catch(l){n=!0,s=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return""},F=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.title="Easy Wallet",e.drawer=!1,e.menu=[],e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){this.$store.dispatch(C()),B("token")||this.$router.push("/")}},{key:"logoff",value:function(){var e=this;this.$store.dispatch(A()).then(function(){e.$router.push({name:"login"})})}}]),t}(b["b"]);F=v["a"]([b["a"]],F);var R=F,S=R,T=Object(y["a"])(S,_,$,!1,null,null,null),N=T.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-wrapper"},[r("div",{staticClass:"login-box"},[r("h1",{staticClass:"logo pl-5"},[e._v("Easy Wallet")]),e._m(0),r("div",{staticClass:"login-content pl-5 pr-5 px-2"},[r("v-text-field",{attrs:{label:"E-mail",type:"text",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-text-field",{attrs:{label:"Senha",type:"password",required:""},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.login(t):null}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("v-btn",{staticClass:"mt-1",attrs:{block:"",round:"",outline:"",color:"primary",dark:"",loading:e.loading},on:{click:e.login}},[e._v("Entrar"),r("span",{staticClass:"loading-info",attrs:{slot:"loader"},slot:"loader"},[r("v-progress-circular",{attrs:{indeterminate:"",size:20,width:1,color:"primary"}}),e._v("Entrando...")],1)]),r("v-btn",{staticClass:"mt-3",attrs:{block:"",round:"",outline:"",color:"secondary",dark:""},on:{click:e.goToRegister}},[e._v("Cadastrar")])],1)])])},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"credit"},[r("a",{attrs:{href:"https://br.freepik.com/fotos-vetores-gratis/cartao"}},[e._v("Ilustração: Designed by Freepik")])])}],L=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.email="",e.password="",e.loading=!1,e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"login",value:function(){var e=this;this.loading=!0,this.$store.dispatch(O(this.email,this.password)).then(function(t){e.loading=!1,t.error?e.$notify({group:"simple-notifications",title:"Ops!",text:t.error,type:"error"}):e.$router.push({name:"dashboard"})})}},{key:"goToRegister",value:function(){this.$router.push({name:"register"})}}]),t}(b["b"]);L=v["a"]([b["a"]],L);var q=L,H=q,I=(r("f5ea"),Object(y["a"])(H,D,M,!1,null,null,null)),J=I.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-start":"","justify-center":""}},[r("v-flex",{attrs:{md10:"",xs12:""}},[[r("header",{staticClass:"page-header"},[r("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[r("v-icon",[e._v("arrow_back")])],1),r("h2",{staticClass:"page-title"},[e._v("Novo usuário")])],1),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e.errors.email?r("p",{staticClass:"red--text text--darken-3"},[e._v(e._s(e.errors.email.message))]):e._e(),r("v-text-field",{attrs:{label:"E-mail",type:"email"},model:{value:e.record.email,callback:function(t){e.$set(e.record,"email",t)},expression:"record.email"}}),e.errors.name?r("p",{staticClass:"red--text text--darken-3"},[e._v(e._s(e.errors.name.message))]):e._e(),r("v-text-field",{attrs:{label:"Nome"},model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}}),e.errors.password?r("p",{staticClass:"red--text text--darken-3"},[e._v(e._s(e.errors.password.message))]):e._e(),r("v-text-field",{attrs:{label:"Senha",type:"password"},model:{value:e.record.password,callback:function(t){e.$set(e.record,"password",t)},expression:"record.password"}}),r("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.submit}},[e._v("Cadastrar")]),r("v-btn",{attrs:{color:"error"},on:{click:e.clear}},[e._v("limpar")])],1)]],2)],1)],1)},W=[],G=(r("a481"),function(){return{type:"user/fetchUsers"}}),K=function(e){return{type:"user/fetchUser",_id:e}},Q=function(e){return{type:"user/insertUser",user:e}},X=function(e){return{type:"user/updateUser",user:e}},Y=function(e){return{type:"user/deleteUser",_id:e}},Z="user/users",ee="user/user",te=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.valid=!1,e.record={},e.errors={},e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"goBack",value:function(){this.$router.replace({name:"login"})}},{key:"submit",value:function(){var e=this;this.valid&&this.$store.dispatch(Q(this.record)).then(function(t){t.errors||t.error?t.error?e.$notify({group:"simple-notifications",title:"Ops!",text:t.error,type:"error"}):e.errors=t.errors:(e.record={},e.$notify({group:"simple-notifications",title:"Novo usuário",text:"Usuário inserido com sucesso!",type:"success"}),e.errors={})}).catch(function(t){e.$notify({group:"simple-notifications",title:"Ops!",text:t,type:"error"})})}},{key:"clear",value:function(){this.$refs.form.reset(),this.errors={}}}]),t}(b["b"]);te=v["a"]([b["a"]],te);var re=te,ae=re,ne=Object(y["a"])(ae,V,W,!1,null,null,null),se=ne.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-start":"","justify-center":""}},[r("v-flex",{attrs:{md10:"",xs12:""}},[[r("header",{staticClass:"page-header"},[r("h2",{staticClass:"page-title"},[e._v("Funcionários")])]),r("div",{staticClass:"employees-container"},[r("header",[r("v-text-field",{attrs:{"append-icon":"search",placeholder:"Pesquise aqui os funcionários...","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{headers:e.headers,items:e.employees,search:e.search,pagination:e.pagination,"hide-actions":"","item-key":"_id","no-data-text":"Nenhum funcionário a ser exibida.","no-results-text":"Sua pesquisa não retornou nada."},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[r("td",{staticClass:"justify-center layout px-0"},[r("v-icon",{staticClass:"action-element",on:{click:function(r){e.goEmployeeUpdate(t.item)}}},[e._v("edit")])],1),r("td",[e._v(e._s(t.item.referenceCode))]),r("td",[e._v(e._s(t.item.name))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.isManager?"Sim":"Não"))]),r("td",{staticClass:"text-xs-center"},[e._v(e._s(t.item.isEnabled?"Sim":"Não"))]),r("td",[e._v(e._s(t.item.note))])]}}])}),r("div",{staticClass:"text-xs-center pt-2"},[r("v-pagination",{attrs:{length:e.pages},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1)],1),r("v-tooltip",{attrs:{left:""}},[r("v-btn",{attrs:{slot:"activator",color:"primary",dark:"",fixed:"",bottom:"",right:"",fab:""},on:{click:e.goEmployeeCreate},slot:"activator"},[r("v-icon",[e._v("add")])],1),r("span",[e._v("Novo funcionário")])],1)]],2)],1)],1)},ie=[],ce=r("cebc"),le=r("2f62"),de=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.search="",e.pagination={},e.headers=[{text:"Ação",align:"center",value:"actions",sortable:!1},{text:"Cód. Referência",value:"referenceCode"},{text:"Nome",value:"name"},{text:"Gerência?",align:"center",value:"isManager"},{text:"Habilitado?",align:"center",value:"isEnabled"},{text:"Observação",value:"note"}],e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){var e=this;this.$store.dispatch(G()).then(function(){return e.pagination.totalItems=e.users.length})}},{key:"goUserCreate",value:function(){this.$router.push("user-create")}},{key:"goUserUpdate",value:function(e){this.$router.push({name:"user-update",params:{_id:e._id}})}},{key:"pages",get:function(){return this.pagination.rowsPerPage&&this.pagination.totalItems?Math.ceil(this.pagination.totalItems/this.pagination.rowsPerPage):0}}]),t}(b["b"]);de=v["a"]([Object(b["a"])({computed:Object(ce["a"])({},Object(le["b"])({users:Z}))})],de);var ue=de,fe=ue,pe=(r("8468"),Object(y["a"])(fe,oe,ie,!1,null,"035c66e8",null)),me=pe.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{"align-start":"","justify-center":""}},[r("v-flex",{attrs:{md10:"",xs12:""}},[[r("header",{staticClass:"page-header"},[r("v-btn",{attrs:{icon:""},on:{click:e.goBack}},[r("v-icon",[e._v("arrow_back")])],1),r("h2",{staticClass:"page-title"},[e._v(e._s(e.record._id?"Atualizar funcionário":"Novo funcionário"))])],1),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{label:"Cód. referência"},model:{value:e.record.referenceCode,callback:function(t){e.$set(e.record,"referenceCode",t)},expression:"record.referenceCode"}}),r("v-text-field",{attrs:{label:"Nome"},model:{value:e.record.name,callback:function(t){e.$set(e.record,"name",t)},expression:"record.name"}}),r("v-text-field",{attrs:{label:"Email",type:"email"},model:{value:e.record.email,callback:function(t){e.$set(e.record,"email",t)},expression:"record.email"}}),e.enablePassword?r("v-text-field",{attrs:{label:"Senha",type:"password"},model:{value:e.record.password,callback:function(t){e.$set(e.record,"password",t)},expression:"record.password"}}):e._e(),r("v-menu",{ref:"menuDateOfBirth",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.record.dateOfBirth,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.$set(e.record,"dateOfBirth",t)}},model:{value:e.menuDateOfBirth,callback:function(t){e.menuDateOfBirth=t},expression:"menuDateOfBirth"}},[r("v-text-field",{attrs:{slot:"activator",label:"Data de nascimento","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.record.dateOfBirthFormatted,callback:function(t){e.$set(e.record,"dateOfBirthFormatted",t)},expression:"record.dateOfBirthFormatted"}}),r("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"pt-br"},on:{input:function(t){e.formatDateOfBirth()}},model:{value:e.record.dateOfBirth,callback:function(t){e.$set(e.record,"dateOfBirth",t)},expression:"record.dateOfBirth"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menuDateOfBirth=!1}}},[e._v("Cancelar")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menuDateOfBirth.save(e.record.dateOfBirth)}}},[e._v("Selecionar")])],1)],1),r("v-text-field",{attrs:{label:"CPF",type:"text",mask:"nnn.nnn.nnn-nn"},model:{value:e.record.nif,callback:function(t){e.$set(e.record,"nif",t)},expression:"record.nif"}}),r("v-text-field",{attrs:{label:"RG",type:"text"},model:{value:e.record.generalRegistration,callback:function(t){e.$set(e.record,"generalRegistration",t)},expression:"record.generalRegistration"}}),r("v-text-field",{attrs:{label:"CTPS",type:"text"},model:{value:e.record.workRegisterBooklet,callback:function(t){e.$set(e.record,"workRegisterBooklet",t)},expression:"record.workRegisterBooklet"}}),r("v-menu",{ref:"menuAdmissionAt",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.record.admissionAt,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.$set(e.record,"admissionAt",t)}},model:{value:e.menuAdmissionAt,callback:function(t){e.menuAdmissionAt=t},expression:"menuAdmissionAt"}},[r("v-text-field",{attrs:{slot:"activator",label:"Data de admissão","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.record.admissionAtFormatted,callback:function(t){e.$set(e.record,"admissionAtFormatted",t)},expression:"record.admissionAtFormatted"}}),r("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"pt-br"},on:{input:function(t){e.formatAdmissionAt()}},model:{value:e.record.admissionAt,callback:function(t){e.$set(e.record,"admissionAt",t)},expression:"record.admissionAt"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menuAdmissionAt=!1}}},[e._v("Cancelar")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menuAdmissionAt.save(e.record.admissionAt)}}},[e._v("Selecionar")])],1)],1),r("v-menu",{ref:"menuResignationAt",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.record.resignationAt,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.$set(e.record,"resignationAt",t)}},model:{value:e.menuResignationAt,callback:function(t){e.menuResignationAt=t},expression:"menuResignationAt"}},[r("v-text-field",{attrs:{slot:"activator",label:"Data de demissão","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.record.resignationAtFormatted,callback:function(t){e.$set(e.record,"resignationAtFormatted",t)},expression:"record.resignationAtFormatted"}}),r("v-date-picker",{attrs:{"no-title":"",scrollable:"",locale:"pt-br"},on:{input:function(t){e.formatResignationAt()}},model:{value:e.record.resignationAt,callback:function(t){e.$set(e.record,"resignationAt",t)},expression:"record.resignationAt"}},[r("v-spacer"),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menuResignationAt=!1}}},[e._v("Cancelar")]),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menuResignationAt.save(e.record.resignationAt)}}},[e._v("Selecionar")])],1)],1),r("v-text-field",{attrs:{label:"Logradouro",type:"text"},model:{value:e.record.place,callback:function(t){e.$set(e.record,"place",t)},expression:"record.place"}}),r("v-text-field",{attrs:{label:"Número",type:"text"},model:{value:e.record.number,callback:function(t){e.$set(e.record,"number",t)},expression:"record.number"}}),r("v-text-field",{attrs:{label:"Complemento",type:"text"},model:{value:e.record.complement,callback:function(t){e.$set(e.record,"complement",t)},expression:"record.complement"}}),r("v-text-field",{attrs:{label:"Referência",type:"text"},model:{value:e.record.reference,callback:function(t){e.$set(e.record,"reference",t)},expression:"record.reference"}}),r("v-text-field",{attrs:{label:"Bairro",type:"text"},model:{value:e.record.neighborhood,callback:function(t){e.$set(e.record,"neighborhood",t)},expression:"record.neighborhood"}}),r("v-text-field",{attrs:{label:"Estado",type:"text"},model:{value:e.record.state,callback:function(t){e.$set(e.record,"state",t)},expression:"record.state"}}),r("v-text-field",{attrs:{label:"Cidade",type:"text"},model:{value:e.record.city,callback:function(t){e.$set(e.record,"city",t)},expression:"record.city"}}),r("v-text-field",{attrs:{label:"CEP",type:"text",mask:"nnnnn-nnn"},model:{value:e.record.zipCode,callback:function(t){e.$set(e.record,"zipCode",t)},expression:"record.zipCode"}}),r("v-text-field",{attrs:{label:"País",type:"text"},model:{value:e.record.country,callback:function(t){e.$set(e.record,"country",t)},expression:"record.country"}}),r("v-text-field",{attrs:{label:"Telefone",type:"text",mask:"(nn) nnnnn-nnnn"},model:{value:e.record.phone,callback:function(t){e.$set(e.record,"phone",t)},expression:"record.phone"}}),r("v-checkbox",{attrs:{disabled:!e.isManager,label:"Funcionário com papel gerencial?"},model:{value:e.record.isManager,callback:function(t){e.$set(e.record,"isManager",t)},expression:"record.isManager"}}),r("v-textarea",{attrs:{label:"Observação"},model:{value:e.record.note,callback:function(t){e.$set(e.record,"note",t)},expression:"record.note"}}),r("v-checkbox",{attrs:{label:"Habilitado para acesso ao sistema?"},model:{value:e.record.isEnabled,callback:function(t){e.$set(e.record,"isEnabled",t)},expression:"record.isEnabled"}}),e.enableNewPassword?r("h3",[e._v("Alterar senha")]):e._e(),e.enableNewPassword?r("v-text-field",{attrs:{label:"Senha atual",type:"password"},model:{value:e.record.password,callback:function(t){e.$set(e.record,"password",t)},expression:"record.password"}}):e._e(),e.enableNewPassword?r("v-text-field",{attrs:{label:"Nova senha",type:"password"},model:{value:e.record.newPassword,callback:function(t){e.$set(e.record,"newPassword",t)},expression:"record.newPassword"}}):e._e(),e.enableNewPassword?r("v-text-field",{attrs:{label:"Confirmação da nova senha",type:"password"},model:{value:e.record.newPasswordConfirm,callback:function(t){e.$set(e.record,"newPasswordConfirm",t)},expression:"record.newPasswordConfirm"}}):e._e(),r("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.submit}},[e._v("salvar")]),e.record._id?r("v-btn",{attrs:{color:"error",disabled:!e.isManager},on:{click:e.remove}},[e._v("Excluir")]):e._e(),e.record._id?e._e():r("v-btn",{attrs:{color:"error"},on:{click:e.clear}},[e._v("limpar")])],1)]],2)],1)],1)},be=[],he=(r("96cf"),r("3b8d")),ge=r("5176"),je=r.n(ge),ye=function(e){function t(){var e;return Object(d["a"])(this,t),e=Object(f["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.valid=!1,e._id=null,e.menuDateOfBirth=!1,e.menuAdmissionAt=!1,e.menuResignationAt=!1,e.record={},e.errors={},e}return Object(m["a"])(t,e),Object(u["a"])(t,[{key:"mounted",value:function(){var e=this;if(this._id=this.$route.params._id,this._id){var t=this.$store.dispatch(K(this._id));t.then(function(){e.record=je()({},e.user),delete e.record.password})}}},{key:"submit",value:function(){var e=this;this.valid&&(this._id?this.$store.dispatch(X(this.record)).then(function(t){t.error?e.$notify({group:"simple-notifications",title:"Ops!",text:t.error,type:"error"}):t.errors?e.errors=t.errors:(e.$store.commit("user/setUser",t),e.record=je()({},e.user),delete e.record.password,e.$notify({group:"simple-notifications",title:"Atualizar funcionário",text:"Funcionário atualizado com sucesso!",type:"success"}),e.errors={})}).catch(function(t){e.$notify({group:"simple-notifications",title:"Ops!",text:t,type:"error"})}):this.$store.dispatch(Q(this.record)).then(function(t){t.errors?e.errors=t.errors:(e.$store.commit("employee/addEmployee",t),e.record={},e.$notify({group:"simple-notifications",title:"Novo funcionário",text:"Funcionário inserido com sucesso!",type:"success"}),e.errors={})}).catch(function(t){e.$notify({group:"simple-notifications",title:"Ops!",text:t,type:"error"})}))}},{key:"remove",value:function(){var e=Object(he["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch(Y(this.user._id));case 3:t=e.sent,t.error?this.$notify({group:"simple-notifications",title:"Ops!",text:t.error,type:"error"}):(this.$notify({group:"simple-notifications",title:"Remover funcionário",text:t.message,type:"success"}),this.$router.push({name:"employee-list"})),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.$notify({group:"simple-notifications",title:"Ops!",text:e.t0,type:"error"});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()},{key:"clear",value:function(){this.$refs.form.reset(),this.errors={}}},{key:"goBack",value:function(){this.$router.replace({name:"employee-list"})}},{key:"enablePassword",get:function(){return!this.record._id}}]),t}(b["b"]);ye=v["a"]([Object(b["a"])({computed:Object(ce["a"])({},Object(le["b"])({user:ee,loggedUser:U}))})],ye);var xe=ye,ke=xe,we=Object(y["a"])(ke,ve,be,!1,null,"877700f4",null),_e=we.exports;a["default"].use(w["a"]);var $e=new w["a"]({routes:[{path:"/dashboard",name:"dashboard",component:N,children:[{name:"user-list",path:"user-list",component:me},{name:"user-create",path:"user-create",component:_e},{name:"user-update",path:"user-update/:_id",component:_e}]},{path:"/",name:"login",component:J},{path:"/register",name:"register",component:se}]}),Oe={users:function(e){return e.users},user:function(e){return e.user}},Ce={setUsers:function(e,t){e.users=t},setUser:function(e,t){e.user=t}},Ae=r("f499"),Ue=r.n(Ae),Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=B("token")||"";return t.headers=new Headers(t.headers),t.headers.append("x-access-token",r),fetch(e,t).then(function(e){return e.json()})},Pe={fetchUsers:function(e){return Ee("api/v1/users").then(function(t){e.commit("setUsers",t)})},fetchUser:function(e,t){var r=t._id;return Ee("api/v1/users/".concat(r)).then(function(t){e.commit("setUser",t)})},insertUser:function(e,t){var r=t.user,a=new Headers({"Content-Type":"application/json"}),n=Ue()(r);return Ee("api/v1/users",{method:"POST",headers:a,body:n})},updateUser:function(e,t){var r=t.user,a=new Headers({"Content-Type":"application/json"}),n=Ue()(r);return Ee("api/v1/users/".concat(r._id),{method:"PUT",headers:a,body:n})},deleteUser:function(e,t){var r=t._id;return Ee("api/v1/users/".concat(r),{method:"DELETE"})}},ze={state:{users:[],user:null},getters:Oe,mutations:Ce,actions:Pe,namespaced:!0},Be={expires:function(e){return e.expires},token:function(e){return e.token},loggedUser:function(e){return e.loggedUser}},Fe={setExpires:function(e,t){e.expires=t},setToken:function(e,t){e.token=t},setLoggedUser:function(e,t){e.loggedUser=t}},Re=(r("c5f6"),r("795b")),Se=r.n(Re),Te={authenticate:function(e,t){var r=t.email,a=t.password,n={"Content-Type":"application/json"},s=Ue()({email:r,password:a});return fetch("api/v1/authentication",{method:"POST",headers:n,body:s}).then(function(e){return e.json()}).then(function(t){return e.commit("setExpires",t.expires),e.commit("setToken",t.token),e.commit("setLoggedUser",t.user),z("expires",t.expires,t.expires),z("token",t.token,t.expires),z("loggedUser",Ue()(t.user),t.expires),t})},restore:function(e){return Se.a.resolve().then(function(){var t=Number(B("expires")),r=B("token")||"",a=JSON.parse(B("loggedUser")||"{}");e.commit("setExpires",t),e.commit("setToken",r),e.commit("setLoggedUser",a)})},logoff:function(e){return Se.a.resolve().then(function(){z("expires","",null),z("token","",null),z("loggedUser","",null),e.commit("setExpires",null),e.commit("setToken",null),e.commit("setLoggedUser",null)})}},Ne={state:{expires:null,token:null,loggedUser:null},getters:Be,mutations:Fe,actions:Te,namespaced:!0};a["default"].use(le["a"]);var De=new le["a"].Store({strict:!0,modules:{user:ze,authentication:Ne}}),Me=De,Le=r("c1df"),qe=r.n(Le),He=r("2ead"),Ie=r.n(He);r("d2d4");a["default"].config.productionTip=!1,a["default"].use(i.a),a["default"].use(Ie.a,{moment:qe.a}),new a["default"]({router:$e,store:Me,render:function(e){return e(k)}}).$mount("#app")},e557:function(e,t,r){},f5c8:function(e,t,r){},f5ea:function(e,t,r){"use strict";var a=r("f5c8"),n=r.n(a);n.a}});
//# sourceMappingURL=app.388424b3.js.map