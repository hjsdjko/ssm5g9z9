(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-xinlichanpin-add-or-update"],{"321f":function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac6a"),n("96cf");var i=r(n("3b8d")),a=r(n("e2b1")),o={data:function(){return{ruleForm:{chanpinmingcheng:"",chanpinfenlei:"",chanpintupian:"",chanpinxiangqing:"",price:""},chanpinfenleiOptions:[],chanpinfenleiIndex:0,user:{},ro:{chanpinmingcheng:!1,chanpinfenlei:!1,chanpintupian:!1,chanpinxiangqing:!1,price:!1}}},components:{wPicker:a.default},computed:{},onLoad:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(t){var n,r,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(n);case 3:return r=e.sent,this.user=r.data,e.next=7,this.$api.option("chanpinfenlei","chanpinfenlei",{});case 7:if(r=e.sent,this.chanpinfenleiOptions=r.data,this.ruleForm.userid=uni.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!t.id){e.next=17;break}return this.ruleForm.id=t.id,e.next=15,this.$api.info("xinlichanpin",this.ruleForm.id);case 15:r=e.sent,this.ruleForm=r.data;case 17:if(!t.cross){e.next=44;break}i=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(i);case 20:if((e.t1=e.t0()).done){e.next=44;break}if(a=e.t1.value,"chanpinmingcheng"!=a){e.next=26;break}return this.ruleForm.chanpinmingcheng=i[a],this.ro.chanpinmingcheng=!0,e.abrupt("continue",20);case 26:if("chanpinfenlei"!=a){e.next=30;break}return this.ruleForm.chanpinfenlei=i[a],this.ro.chanpinfenlei=!0,e.abrupt("continue",20);case 30:if("chanpintupian"!=a){e.next=34;break}return this.ruleForm.chanpintupian=i[a],this.ro.chanpintupian=!0,e.abrupt("continue",20);case 34:if("chanpinxiangqing"!=a){e.next=38;break}return this.ruleForm.chanpinxiangqing=i[a],this.ro.chanpinxiangqing=!0,e.abrupt("continue",20);case 38:if("price"!=a){e.next=42;break}return this.ruleForm.price=i[a],this.ro.price=!0,e.abrupt("continue",20);case 42:e.next=20;break;case 44:this.styleChange();case 45:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},chanpinfenleiChange:function(e){this.chanpinfenleiIndex=e.target.value,this.ruleForm.chanpinfenlei=this.chanpinfenleiOptions[this.chanpinfenleiIndex]},chanpintupianTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.chanpintupian=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,i.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.price){e.next=3;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 3:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=6;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("xinlichanpin",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("xinlichanpin",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o},5384:function(e,t,n){"use strict";n.r(t);var r=n("321f"),i=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=i.a},"5f1f":function(e,t,n){"use strict";n.r(t);var r=n("ace7"),i=n("5384");for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("615f");var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"2f6c6be2",null,!1,r["a"],o);t["default"]=s.exports},"615f":function(e,t,n){"use strict";var r=n("953c"),i=n.n(r);i.a},"953c":function(e,t,n){var r=n("9e07");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("4ff430a1",r,!0,{sourceMap:!1,shadowMode:!1})},"9e07":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-2f6c6be2]{padding:%?20?%}.content[data-v-2f6c6be2]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-2f6c6be2]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-2f6c6be2]{width:%?180?%}.avator[data-v-2f6c6be2]{width:%?150?%;height:%?60?%}.right-input[data-v-2f6c6be2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-2f6c6be2]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-2f6c6be2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-2f6c6be2]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-2f6c6be2]{border:0}.cu-form-group uni-input[data-v-2f6c6be2]{padding:0 %?30?%}.uni-input[data-v-2f6c6be2]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-2f6c6be2]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-2f6c6be2]::after{line-height:%?88?%}.select .uni-input[data-v-2f6c6be2]{line-height:%?88?%}.input .right-input[data-v-2f6c6be2]{line-height:%?110?%}',""]),e.exports=t},ace7:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-form",{staticClass:"app-update-pv"},[n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("产品名称")]),n("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.chanpinmingcheng,placeholder:"产品名称"},model:{value:e.ruleForm.chanpinmingcheng,callback:function(t){e.$set(e.ruleForm,"chanpinmingcheng",t)},expression:"ruleForm.chanpinmingcheng"}})],1),n("v-uni-view",{staticClass:"cu-form-group select",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("产品分类")]),n("v-uni-picker",{attrs:{value:e.chanpinfenleiIndex,range:e.chanpinfenleiOptions},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.chanpinfenleiChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-input",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"}},[e._v(e._s(e.ruleForm.chanpinfenlei?e.ruleForm.chanpinfenlei:"请选择产品分类"))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group",class:"left"==e.left?"":"active",style:{boxShadow:"0 0 4rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chanpintupianTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("产品图片")]),n("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"},style:{textAlign:"left"}},[e.ruleForm.chanpintupian?n("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:e.ruleForm.chanpintupian,mode:"aspectFill"}}):n("v-uni-image",{staticClass:"avator",style:{width:"88rpx",boxShadow:"0 0 16rpx rgba(0,0,0,.3)",borderRadius:"100%",textAlign:"left",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"108rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("价格")]),n("v-uni-input",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"110rpx"},attrs:{disabled:e.ro.price,placeholder:"价格"},model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}})],1),n("v-uni-view",{staticClass:"cu-form-group",style:{boxShadow:"0 0 16rpx rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 0.25)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderWidth:"0",borderStyle:"solid",height:"308rpx"}},[n("v-uni-view",{staticClass:"title",style:{width:"170rpx",fontSize:"28rpx",color:"rgba(0, 0, 0, 1)",textAlign:"left"}},[e._v("产品详情")]),n("v-uni-textarea",{style:{boxShadow:"0 0 4rpx rgba(0,0,0,.6) inset",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(23, 152, 242, 1)",textAlign:"left",borderWidth:"2rpx",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"产品详情"},model:{value:e.ruleForm.chanpinxiangqing,callback:function(t){e.$set(e.ruleForm,"chanpinxiangqing",t)},expression:"ruleForm.chanpinxiangqing"}})],1),n("v-uni-view",{staticClass:"btn"},[n("v-uni-button",{staticClass:"bg-red",style:{boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",backgroundColor:"#409EFF",borderColor:"#409EFF",borderRadius:"8rpx",color:"#fff",borderWidth:"2rpx",width:"160rpx",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)},a=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))}}]);