(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0e2d":function(t,e,n){},"26be":function(t,e,n){"use strict";var a=n("ff9c"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"App",components:{}},s=i,c=(n("034f"),n("2877")),l=Object(c["a"])(s,r,o,!1,null,null,null),u=l.exports,p=n("b970"),f=(n("157a"),n("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{attrs:{width:"70",alt:"Vue logo",src:n("cf05")}}),a("br"),a("span",{staticStyle:{"line-height":"50px","font-weight":"500"}},[t._v("歙县农村商业银行")]),a("van-row",{staticStyle:{"margin-top":"30px"},attrs:{type:"flex",justify:"center"}},[a("van-col",{attrs:{span:"20"}},[a("van-form",{on:{submit:t.onSubmit}},[a("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入登录密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"warning","native-type":"submit"}},[t._v(" 登录 ")])],1)],1)],1)],1)],1)},v=[],m={name:"Index",data:function(){return{username:"",password:""}},methods:{onSubmit:function(){F.push({name:"index"})}}},b=m,h=(n("c259"),Object(c["a"])(b,d,v,!1,null,"4d39f075",null)),x=h.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-nav-bar",{attrs:{title:"所有试题","left-text":"返回",fixed:"","left-arrow":""},on:{"click-left":t.back}}),n("div",{staticClass:"cards"},[n("van-card",{attrs:{desc:"银行从业资格考试习题练习",title:"银行从业资格考试",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"},on:{click:t.toExam}}),n("van-card",{attrs:{desc:"PMP考试习题",title:"PMP",thumb:"https://img.yzcdn.cn/vant/ipad.jpeg"}})],1),n("van-tabbar",[n("van-tabbar-item",{attrs:{icon:"home-o"}},[t._v("考试题库")]),n("van-tabbar-item",{attrs:{icon:"search"}},[t._v("模拟考试")]),n("van-tabbar-item",{attrs:{icon:"friends-o"}},[t._v("错题练习")]),n("van-tabbar-item",{attrs:{icon:"setting-o"}},[t._v("个人中心")])],1)],1)},w=[],y={name:"Index",data:function(){return{username:"",password:""}},methods:{back:function(){F.push({name:"login"})},toExam:function(){F.push({name:"exam"})}}},_=y,k=(n("e5ed"),Object(c["a"])(_,g,w,!1,null,"99610eec",null)),j=k.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("van-nav-bar",{attrs:{title:"xxx练习题",fixed:"","left-arrow":""},on:{"click-left":t.back},scopedSlots:t._u([{key:"right",fn:function(){return[n("div",{staticStyle:{color:"white"}},[n("van-count-down",{staticStyle:{color:"white","line-height":"40px"},attrs:{time:t.time}})],1)]},proxy:!0}])}),n("van-panel",{staticStyle:{padding:"0 10px 40px 10px"},attrs:{title:"（单选题）1、王司马斯大林大街阿看到了阿斯顿克林顿拉斯的看见了"}},[n("van-radio-group",{model:{value:t.test,callback:function(e){t.test=e},expression:"test"}},[n("van-radio",{staticClass:"radio",attrs:{name:"1"}},[t._v("单选框 1")]),n("van-radio",{staticClass:"radio",attrs:{name:"2"}},[t._v("单选框 2")])],1)],1),n("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"arrow-left"}},[t._v("上一题")]),n("van-tabbar-item",{attrs:{icon:"description"},on:{click:t.showList}},[t._v("查看")]),n("van-tabbar-item",{attrs:{icon:"arrow"}},[t._v("下一题")])],1),n("van-popup",{style:{height:"30%"},attrs:{position:"bottom"},model:{value:t.showFlag,callback:function(e){t.showFlag=e},expression:"showFlag"}})],1)},S=[],P={name:"Index",data:function(){return{active:"xx",time:108e6,showFlag:!1,test:""}},methods:{back:function(){F.push({name:"index"})},showList:function(){this.showFlag=!0}}},C=P,E=(n("26be"),Object(c["a"])(C,O,S,!1,null,"64524b02",null)),M=E.exports;a["a"].use(f["a"]);var F=new f["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",component:x},{path:"/index",name:"index",component:j},{path:"/exam",name:"exam",component:M}]});a["a"].config.productionTip=!1,a["a"].use(p["a"]),new a["a"]({render:function(t){return t(u)},router:F}).$mount("#app")},8159:function(t,e,n){},"85ec":function(t,e,n){},c259:function(t,e,n){"use strict";var a=n("8159"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.40b58156.png"},e5ed:function(t,e,n){"use strict";var a=n("0e2d"),r=n.n(a);r.a},ff9c:function(t,e,n){}});
//# sourceMappingURL=app.35ae13d0.js.map