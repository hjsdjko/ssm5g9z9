(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop-order/shop-order"],{"2dad":function(e,t,n){"use strict";n.r(t);var r=n("de75"),a=n("d82e");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("e490");var u,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);t["default"]=o.exports},ab6f:function(e,t,n){},b22c:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,a,s,u){try{var c=e[s](u),o=c.value}catch(i){return void n(i)}c.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function c(e){s(u,r,a,c,o,"next",e)}function o(e){s(u,r,a,c,o,"throw",e)}c(void 0)}))}}var c={data:function(){return{navlist:["全部","未支付","已支付","已发货","已完成","已取消","已退款"],currentIndex:0,pages:1,list:[],mescroll:null,downOption:{auto:!1},upOption:{page:{},noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,status:"",user:""}},onShow:function(){var t=this;return u(r.default.mark((function n(){var a,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.getStorageSync("nowTable"),n.next=3,t.$api.session(a);case 3:s=n.sent,t.user=s.data,t.hasNext=!0,t.mescroll&&t.mescroll.resetUpScroll();case 7:case"end":return n.stop()}}),n)})))()},methods:{navselect:function(e,t){this.currentIndex=e,this.status="全部"==t?"":"已支付"==t?"已支付":t,this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var t=this;return u(r.default.mark((function n(){var a,s;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={page:e.num,limit:e.size},t.status&&(a["status"]=t.status),n.next=4,t.$api.page("orders",a);case 4:s=n.sent,1==e.num&&(t.list=[]),t.list=t.list.concat(s.data.list),0==s.data.list.length&&(t.hasNext=!1),e.endSuccess(e.size,t.hasNext);case 9:case"end":return n.stop()}}),n)})))()},onCancelTap:function(t){var n=this;return u(r.default.mark((function a(){var s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=n,e.showModal({title:"提示",content:"是否确认退款",success:function(){var n=u(r.default.mark((function n(a){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(u=e.getStorageSync("nowTable"),!a.confirm){n.next=10;break}return t.status="已退款",n.next=5,s.$api.update("orders",t);case 5:n.sent,s.hasNext=!0,s.mescroll&&s.mescroll.resetUpScroll(),1==t.type?s.user.money=s.user.money+t.total:2==t.type&&(s.user.jifen=s.user.jifen+t.total),s.$api.update(u,s.user);case 10:case"end":return n.stop()}}),n)})));function a(e){return n.apply(this,arguments)}return a}()});case 2:case"end":return a.stop()}}),a)})))()},cancel:function(t){var n=this;return u(r.default.mark((function a(){var s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=n,e.showModal({title:"提示",content:"是否取消订单",success:function(){var e=u(r.default.mark((function e(n){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return t.status="已取消",e.next=4,s.$api.update("orders",t);case 4:e.sent,s.hasNext=!0,s.mescroll&&s.mescroll.resetUpScroll();case 7:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 2:case"end":return a.stop()}}),a)})))()},pay:function(t){var n=this;return u(r.default.mark((function a(){var s,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=n,c=e.getStorageSync("nowTable"),e.showModal({title:"提示",content:"是否支付订单",success:function(){var e=u(r.default.mark((function e(n){return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=25;break}if(1!=t.type){e.next=12;break}if(!(s.user.money-t.total<0)){e.next=5;break}return s.$utils.msg("余额不足，请先充值"),e.abrupt("return");case 5:return s.$utils.msgBack("支付成功"),s.user.money=s.user.money-t.total,(s.user.jifen||0==s.user.jifen)&&(s.user.jifen=parseFloat(s.user.jifen)+parseFloat(t.total)),e.next=10,s.$api.update(c,s.user);case 10:e.next=20;break;case 12:if(2!=t.type){e.next=20;break}if(!(s.user.jifen-t.total<0)){e.next=16;break}return s.$utils.msg("积分不足，兑换商品失败"),e.abrupt("return");case 16:return s.$utils.msgBack("兑换成功"),s.user.jifen=s.user.jifen-t.total,e.next=20,s.$api.update(c,s.user);case 20:return t.status="已支付",e.next=23,s.$api.update("orders",t);case 23:e.sent,s.mescroll&&s.mescroll.resetUpScroll();case 25:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 3:case"end":return a.stop()}}),a)})))()},onConfirm:function(t){var n=this;return u(r.default.mark((function a(){var s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:s=n,e.showModal({title:"提示",content:"是否确认收货",success:function(){var n=u(r.default.mark((function n(a){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.getStorageSync("nowTable"),!a.confirm){n.next=8;break}return t.status="已完成",n.next=5,s.$api.update("orders",t);case 5:n.sent,s.hasNext=!0,s.mescroll&&s.mescroll.resetUpScroll();case 8:case"end":return n.stop()}}),n)})));function a(e){return n.apply(this,arguments)}return a}()});case 2:case"end":return a.stop()}}),a)})))()}}};t.default=c}).call(this,n("543d")["default"])},d82e:function(e,t,n){"use strict";n.r(t);var r=n("b22c"),a=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=a.a},de75:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"f46f"))}},a=function(){var e=this,t=e.$createElement;e._self._c},s=[]},e490:function(e,t,n){"use strict";var r=n("ab6f"),a=n.n(r);a.a},f761:function(e,t,n){"use strict";(function(e){n("0125");r(n("66fd"));var t=r(n("2dad"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["f761","common/runtime","common/vendor"]]]);