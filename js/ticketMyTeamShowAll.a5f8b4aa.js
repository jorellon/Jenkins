"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[336],{9330:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(5795),a=i(6952),n=i(4561),o=i(5907),r=i(5936),c=i(4589),l=i(1824),h=i(3325),d=(0,h.Z)(a.Z,n.Z,o.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),`${this.calcXOverflow(a,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,c.kb)(this.maxWidth),minWidth:(0,c.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,c.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===c.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},4891:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,items:t.records,search:t.search,loading:t.loadingRecords,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[i("div",{staticClass:"d-flex mx-4 pt-4 mb-4"},[i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search",outlined:"",dense:"","hide-details":"",disabled:t.loadingRecords},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-divider")]},proxy:!0},{key:"item.subject",fn:function(e){var s=e.item;return[t._v(" "+t._s(s.subject)+" "),i("span",{staticClass:"grey--text"},[t._v("#"+t._s(s.id))])]}},{key:"item.priority_status",fn:function(e){var s=e.item;return[i("v-chip",{attrs:{color:t.getPriorityColor(s.priority_status_id),small:"",dark:""}},[t._v(" "+t._s(s.priority_status)+" ")])]}},{key:"item.action",fn:function(e){var s=e.item;return[i("div",{directives:[{name:"show",rawName:"v-show",value:!!t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp ? true : false"}]},[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([s.assigned_to?null:{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",{attrs:{icon:"",small:"",color:"primary",to:{name:"MyTeamEdit",params:{id:s.id}}}},[i("v-icon",t._g(t._b({attrs:{small:"",color:"primary"}},"v-icon",n,!1),a),[t._v(" mdi-pencil ")])],1)]}}],null,!0)},[i("span",[t._v("Edit")])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp ? false : true"}]},[s.assigned_to?t._e():i("v-btn",{attrs:{color:"primary","x-small":"",to:{name:"MyTeamEdit",params:{id:s.id}}}},[t._v(" Edit ")])],1)]}}],null,!0)})],1)},a=[],n=i(629),o={data(){return{search:null,headers:[{text:"Client",value:"client",class:"text-uppercase"},{text:"Subject",value:"subject",class:"text-uppercase"},{text:"Status",value:"ticket_status",class:"text-uppercase"},{text:"Priority",value:"priority_status",class:"text-uppercase"},{text:"Assigned To",value:"assigned_to",class:"text-uppercase"},{text:"Action",value:"action",class:"text-uppercase",sortable:!1}]}},created(){this.$store.commit("myTeam/setRecords",[]),this.$store.dispatch("myTeam/getRecords")},computed:{...(0,n.rn)("myTeam",["loadingRecords","records"])},methods:{getPriorityColor(t){switch(t){case 1:return"green";case 2:return"blue";case 3:return"orange";case 4:return"red";default:return"grey"}}}},r=o,c=i(1001),l=i(3453),h=i.n(l),d=i(680),u=i(5424),p=i(4228),v=i(4998),m=i(1418),f=i(6428),g=i(9762),y=i(5978),b=i(9330),x=(0,c.Z)(r,s,a,!1,null,null,null),_=x.exports;h()(x,{VBtn:d.Z,VChip:u.Z,VContainer:p.Z,VDataTable:v.Z,VDivider:m.Z,VIcon:f.Z,VSpacer:g.Z,VTextField:y.Z,VTooltip:b.Z})}}]);
//# sourceMappingURL=ticketMyTeamShowAll.a5f8b4aa.js.map