"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[426],{1835:function(t,e,s){s.d(e,{Z:function(){return r}});s(6699);var i=s(4999),a=s(5978),n=s(6290),l=s(4589);const o={...i.l,offsetY:!0,offsetOverflow:!0,transition:!1};var r=i.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i.Z.options.props.menuProps.type,default:()=>o},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,l.qF)(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=i.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...o,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=i.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex((t=>t===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===l.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===l.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==l.Do.backspace&&t!==l.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,a=t!==i-1?t:t-1,n=this.selectedItems[a];n?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=a},clearableCallback(){this.internalSearch=null,i.Z.options.methods.clearableCallback.call(this)},genInput(){const t=a.Z.options.methods.genInput.call(this);return t.data=(0,n.ZP)(t.data,{attrs:{"aria-activedescendant":(0,l.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,l.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=i.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?i.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[l.Do.home,l.Do.end].includes(e)||i.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){i.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){i.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){i.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],a=this.getText(i);null==(e=t.clipboardData)||e.setData("text/plain",a),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",a),t.preventDefault()}}})},2157:function(t,e,s){s.d(e,{n:function(){return i}});const i=t=>{for(var e in t)return!1;return!0}},897:function(t,e,s){s.d(e,{Z:function(){return Z}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-dialog",{attrs:{"max-width":"900"},model:{value:t.solutionsDialog,callback:function(e){t.solutionsDialog=e},expression:"solutionsDialog"}},[t.isAddNew?s("div",[s("div",{staticClass:"modalHeader"},[s("v-btn",{staticClass:"text-capitalize",attrs:{color:"success",small:"",disabled:t.loading},on:{click:function(e){t.solutionDialog=!0}}},[s("span",[t._v("Add New")])])],1),s("v-divider")],1):t._e(),s("v-data-table",{staticClass:"elevation-1 rounded-t-0",attrs:{headers:t.headers,items:t.solutions,"items-per-page":5,loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.remarks",fn:function(e){var i=e.item;return[s("div",{staticClass:"text-truncate",staticStyle:{"max-width":"250px"}},[t._v(" "+t._s(i.remarks)+" ")])]}},{key:"item.created_at",fn:function(e){var i=e.item;return[s("span",[t._v(t._s(t.setCreatedAtFormat(i.created_at)))])]}}],null,!0)})],1),t.solutionDialog?s("v-dialog",{attrs:{persistent:t.isPersistent,"max-width":"500px"},model:{value:t.solutionDialog,callback:function(e){t.solutionDialog=e},expression:"solutionDialog"}},[s("v-form",{ref:"solutionForm",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[s("v-card",{attrs:{disabled:t.loadingForm}},[s("v-card-title",[t._v(" Solution ")]),s("v-card-subtitle",[s("small",[t._v("Note: All fields are required.")])]),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{ref:"keyword",attrs:{label:"Keyword",rules:t.saveStatus?[t.rules.required,t.rules.minimum(2),t.rules.maximum(100)]:[],"hide-details":"auto",outlined:"",dense:""},model:{value:t.solutionForm.keyword,callback:function(e){t.$set(t.solutionForm,"keyword",e)},expression:"solutionForm.keyword"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{ref:"remarks",attrs:{label:"Remarks",rules:t.saveStatus?[t.rules.required,t.rules.minimum(2),t.rules.maximum(5e3)]:[],"hide-details":"auto",rows:"4",outlined:"",dense:""},model:{value:t.solutionForm.remarks,callback:function(e){t.$set(t.solutionForm,"remarks",e)},expression:"solutionForm.remarks"}})],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{on:{click:function(e){t.solutionDialog=!1}}},[t._v(" Close ")]),s("v-btn",{attrs:{color:"success",type:"submit"}},[t._v(" Save ")])],1)],1)],1)],1):t._e()],1)},a=[],n=s(629),l=s(381),o=s.n(l),r=s(3659),u={name:"Solutions",props:["isAddNew"],data:()=>({headers:[{text:"Keyword",value:"keyword"},{text:"Remarks",value:"remarks"},{text:"Date Created",value:"created_at"},{text:"Action",value:"action",sortable:!1}],rules:r.Z,solutionDialog:!1,isPersistent:!1,solutionForm:{ticket_id:null,keyword:null,remarks:null},saveStatus:!1}),created(){this.getRecords()},computed:{...(0,n.rn)(["loading","solutions"]),...(0,n.rn)("myQueue",["loadingForm"]),solutionsDialog:{get:function(){return!0},set:function(){this.$emit("closeSolutionsDialog")}}},methods:{...(0,n.nv)("myQueue",["createSolution"]),async getRecords(){this.$store.commit("setSolutions",[]),await this.$store.dispatch("getSolutions",this.$route.params.id),this.solutionForm.ticket_id=this.$route.params.id},async onSubmit(){this.saveStatus=!0,await new Promise((t=>setTimeout(t,200))),this.loadingForm||this.$refs.solutionForm.validate()&&(this.isPersistent=!0,await this.createSolution(this.solutionForm),this.solutionsDialog=!1,this.solutionDialog=!1,this.$refs.solutionForm.reset(),this.isPersistent=!1)},setCreatedAtFormat(t){return o()(t).format("MMM D, YYYY h:mm A")}},watch:{solutionDialog(t){t&&setTimeout((()=>{this.$refs.keyword.focus()}),200)}}},c=u,h=s(1001),d=s(3453),m=s.n(d),p=s(680),g=s(3237),v=s(7118),f=s(2102),I=s(4228),S=s(4998),x=s(4497),D=s(1418),y=s(6232),k=s(2877),C=s(9762),w=s(5978),b=s(4350),F=(0,h.Z)(c,i,a,!1,null,"4dbcd4a5",null),Z=F.exports;m()(F,{VBtn:p.Z,VCard:g.Z,VCardActions:v.h7,VCardSubtitle:v.Qq,VCardText:v.ZB,VCardTitle:v.EB,VCol:f.Z,VContainer:I.Z,VDataTable:S.Z,VDialog:x.Z,VDivider:D.Z,VForm:y.Z,VRow:k.Z,VSpacer:C.Z,VTextField:w.Z,VTextarea:b.Z})},4439:function(t,e,s){s.d(e,{Z:function(){return v}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-dialog",{attrs:{"max-width":"900"},model:{value:t.ticketLogsDialog,callback:function(e){t.ticketLogsDialog=e},expression:"ticketLogsDialog"}},[s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.ticketLogs,"items-per-page":5,loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var i=e.item;return[s("span",[t._v(t._s(t.setCreatedAtFormat(i.created_at)))])]}}],null,!0)})],1)},a=[],n=s(629),l=s(381),o=s.n(l),r={name:"TicketLogs",data:()=>({headers:[{text:"Category",value:"category.name"},{text:"Status",value:"ticket_status.name"},{text:"Priority",value:"priority_status.name"},{text:"Department",value:"department.name"},{text:"Assigned To",value:"assignee.full_name"},{text:"Date Created",value:"created_at"}]}),created(){this.$store.commit("setTicketLogs",[]),this.$store.dispatch("getTicketLogs",this.$route.params.id)},computed:{...(0,n.rn)(["loading","ticketLogs"]),ticketLogsDialog:{get:function(){return!0},set:function(){this.$emit("closeTicketLogsDialog")}}},methods:{setCreatedAtFormat(t){return o()(t).format("MMM D, YYYY h:mm A")}}},u=r,c=s(1001),h=s(3453),d=s.n(h),m=s(4998),p=s(4497),g=(0,c.Z)(u,i,a,!1,null,null,null),v=g.exports;d()(g,{VDataTable:m.Z,VDialog:p.Z})}}]);
//# sourceMappingURL=426.1e539492.js.map