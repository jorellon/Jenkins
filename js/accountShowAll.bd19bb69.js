"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[791],{9330:function(t,e,i){i.d(e,{Z:function(){return h}});var a=i(5795),o=i(6952),n=i(4561),s=i(5907),r=i(5936),c=i(4589),l=i(1824),d=i(3325),h=(0,d.Z)(o.Z,n.Z,s.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,a=!1!==this.attach?t.offsetLeft:t.left;let o=0;return this.top||this.bottom||i?o=a+t.width/2-e.width/2:(this.left||this.right)&&(o=a+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),`${this.calcXOverflow(o,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let a=0;return this.top||this.bottom?a=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(a=i+t.height/2-e.height/2),this.nudgeTop&&(a-=parseInt(this.nudgeTop)),this.nudgeBottom&&(a+=parseInt(this.nudgeBottom)),!1===this.attach&&(a+=this.pageYOffset),`${this.calcYOverflow(a)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,c.kb)(this.maxWidth),minWidth:(0,c.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,c.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=a.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===c.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},9664:function(t,e,i){i.r(e),i.d(e,{default:function(){return k}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,items:t.records,search:t.search,loading:t.loadingRecords,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[i("div",{staticClass:"d-flex mx-4 pt-4 mb-4"},[i("v-btn",{staticClass:"text-capitalize",attrs:{color:"success",to:{name:"CreateAccount"},disabled:t.loadingRecords}},[i("v-icon",{staticClass:"mr-1"},[t._v("mdi-account-plus")]),t._v(" Add New ")],1),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search",outlined:"",dense:"","hide-details":"",disabled:t.loadingRecords},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-divider")]},proxy:!0},{key:"item.full_name",fn:function(e){var i=e.item;return[t._v(" "+t._s(t._f("nameFormat")(i.full_name))+" ")]}},{key:"item.account_status",fn:function(e){var a=e.item;return[i("v-chip",{attrs:{color:t.getAccountStatusColor(a.account_status_id),small:"",dark:""}},[t._v(" "+t._s(a.account_status)+" ")])]}},{key:"item.created_at",fn:function(e){var i=e.item;return[t._v(" "+t._s(t._f("dateFormat")(i.created_at))+" ")]}},{key:"item.last_login_at",fn:function(e){var a=e.item;return[i("span",[t._v(t._s(a.last_login_at?new Date(a.last_login_at).toLocaleString():""))])]}},{key:"item.action",fn:function(e){var a=e.item;return[i("div",{directives:[{name:"show",rawName:"v-show",value:!!t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp ? true : false"}]},[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",{attrs:{icon:"",small:"",color:"primary",to:{name:"EditAccount",params:{id:a.id}},disabled:t.loadingRecords}},[i("v-icon",t._g(t._b({attrs:{small:"",color:"primary"}},"v-icon",n,!1),o),[t._v(" mdi-pencil ")])],1)]}}],null,!0)},[i("span",[t._v("Edit")])]),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",{attrs:{icon:"",small:"",color:"error",disabled:t.loadingRecords},on:{click:function(e){return t.deleteRecord(a.id)}}},[i("v-icon",t._g(t._b({attrs:{small:"",color:"error"}},"v-icon",n,!1),o),[t._v(" mdi-delete ")])],1)]}}],null,!0)},[i("span",[t._v("Delete")])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp ? false : true"}]},[i("v-btn",{staticClass:"mr-1",attrs:{color:"primary","x-small":"",to:{name:"EditAccount",params:{id:a.id}},disabled:t.loadingRecords}},[t._v(" Edit ")]),i("v-btn",{attrs:{color:"error","x-small":"",disabled:t.loadingRecords},on:{click:function(e){return t.deleteRecord(a.id)}}},[t._v(" Delete ")])],1)]}}],null,!0)}),t.confirmationDialog?i("confirmation-message",{attrs:{confirmationData:t.confirmationData},on:{closeConfirmationDialog:t.closeConfirmationDialog,onSubmit:t.onDelete}}):t._e()],1)},o=[],n=i(629),s=i(381),r=i.n(s),c=i(5081),l=i(2929),d={components:{ConfirmationMessage:c.Z},data(){return{headers:[{text:"Name",value:"full_name"},{text:"Account Status",value:"account_status"},{text:"Role",value:"role"},{text:"Date Created",value:"created_at"},{text:"Last Login",value:"last_login_at"},{text:"Action",value:"action",sortable:!1}],search:"",dialog:!1,userData:{},confirmationDialog:!1,confirmationData:{title:"Are you sure you want to delete?",text:"This action cannot be undone.",closeBtnText:"Cancel",closeBtnColor:"gray",saveBtnText:"Delete",saveBtnColor:"error"},id:null}},created(){this.$store.commit("account/setRecords",[]),this.$store.dispatch("account/getRecords")},computed:{...(0,n.rn)("account",["loadingRecords","records"])},methods:{getAccountStatusColor(t){switch(t){case 1:return"green";case 2:return"red";case 3:return"orange";default:return"grey"}},deleteRecord(t){this.confirmationDialog=!0,this.id=t},async onDelete(){this.confirmationDialog=!1,await this.$store.dispatch("account/deleteRecord",this.id)},closeConfirmationDialog(){this.confirmationDialog=!1}},filters:{dateFormat(t){return r()(t).format("MMM D, YYYY h:mm A")},nameFormat(t){return(0,l.g)(t)}}},h=d,u=i(1001),m=i(3453),v=i.n(m),p=i(680),f=i(5424),g=i(4228),_=i(4998),b=i(1418),y=i(6428),x=i(9762),D=i(5978),C=i(9330),A=(0,u.Z)(h,a,o,!1,null,null,null),k=A.exports;v()(A,{VBtn:p.Z,VChip:f.Z,VContainer:g.Z,VDataTable:_.Z,VDivider:b.Z,VIcon:y.Z,VSpacer:x.Z,VTextField:D.Z,VTooltip:C.Z})}}]);
//# sourceMappingURL=accountShowAll.bd19bb69.js.map