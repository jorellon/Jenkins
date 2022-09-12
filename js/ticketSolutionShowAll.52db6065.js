"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[703],{9330:function(t,e,i){i.d(e,{Z:function(){return d}});var s=i(5795),a=i(6952),o=i(4561),n=i(5907),r=i(5936),c=i(4589),l=i(1824),h=i(3325),d=(0,h.Z)(a.Z,o.Z,n.Z,r.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),`${this.calcXOverflow(a,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,c.kb)(this.maxWidth),minWidth:(0,c.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,c.sp)(this,"activator",!0)&&(0,l.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===c.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}})},6365:function(t,e,i){i.r(e),i.d(e,{default:function(){return A}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{fluid:""}},[i("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,items:t.records,search:t.search,loading:t.loadingRecords,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"top",fn:function(){return[i("div",{staticClass:"d-flex mx-4 pt-4 mb-4"},[i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search",outlined:"",dense:"","hide-details":"",disabled:t.loadingRecords},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-divider")]},proxy:!0},{key:"item.keyword",fn:function(e){var s=e.item;return[i("div",{staticClass:"text-truncate",staticStyle:{"max-width":"200px"}},[t._v(" "+t._s(s.keyword)+" ")])]}},{key:"item.remarks",fn:function(e){var s=e.item;return[i("div",{staticClass:"text-truncate",staticStyle:{"max-width":"400px"}},[t._v(" "+t._s(s.remarks)+" ")])]}},{key:"item.created_at",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.setDateFormat(i.created_at))+" ")]}},{key:"item.action",fn:function(e){var s=e.item;return[i("div",{directives:[{name:"show",rawName:"v-show",value:!!t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp ? true : false"}]},[i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[i("v-btn",{attrs:{icon:"",small:"",color:"primary"},on:{click:function(e){return t.showSolution(s)}}},[i("v-icon",t._g(t._b({attrs:{small:"",color:"primary"}},"v-icon",o,!1),a),[t._v(" mdi-eye ")])],1)]}}],null,!0)},[i("span",[t._v("View")])])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp ? false : true"}]},[i("v-btn",{attrs:{color:"primary","x-small":""},on:{click:function(e){return t.showSolution(s)}}},[t._v(" View ")])],1)]}}],null,!0)}),i("v-dialog",{attrs:{width:"500"},model:{value:t.viewDialog,callback:function(e){t.viewDialog=e},expression:"viewDialog"}},[i("v-card",[i("v-card-title",[t._v(" "+t._s(t.keyword)+" ")]),i("v-card-text",[i("p",[i("strong",[t._v("Remarks:")]),t._v(" "+t._s(t.remarks))])]),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"text-capitalize",on:{click:function(e){t.viewDialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},a=[],o=i(629),n=i(381),r=i.n(n),c={data(){return{search:"",headers:[{text:"Keyword",value:"keyword",class:"text-uppercase"},{text:"Remarks",value:"remarks",class:"text-uppercase"},{text:"Date Created",value:"created_at",class:"text-uppercase"},{text:"Action",value:"action",class:"text-uppercase",sortable:!1}],keyword:null,remarks:null,viewDialog:!1}},created(){this.getRecords()},computed:{...(0,o.rn)("solution",["records","loadingRecords"])},methods:{getRecords(){this.$store.commit("solution/setRecords",[]),this.$store.dispatch("solution/getRecords")},showSolution(t){this.viewDialog=!0,this.keyword=t.keyword,this.remarks=t.remarks},setDateFormat(t){return r()(t).format("MMM D, YYYY h:mm A")}}},l=c,h=i(1001),d=i(3453),u=i.n(d),v=i(680),p=i(3237),m=i(7118),f=i(4228),g=i(4998),y=i(4497),k=i(1418),w=i(6428),x=i(9762),b=i(5978),_=i(9330),C=(0,h.Z)(l,s,a,!1,null,null,null),A=C.exports;u()(C,{VBtn:v.Z,VCard:p.Z,VCardActions:m.h7,VCardText:m.ZB,VCardTitle:m.EB,VContainer:f.Z,VDataTable:g.Z,VDialog:y.Z,VDivider:k.Z,VIcon:w.Z,VSpacer:x.Z,VTextField:b.Z,VTooltip:_.Z})}}]);
//# sourceMappingURL=ticketSolutionShowAll.52db6065.js.map