"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[889],{1835:function(e,t,s){s.d(t,{Z:function(){return o}});s(6699);var i=s(4999),n=s(5978),a=s(6290),r=s(4589);const l={...i.l,offsetY:!0,offsetOverflow:!0,transition:!1};var o=i.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:i.Z.options.props.menuProps.type,default:()=>l},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,r.qF)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=i.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...l,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=i.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex((e=>e===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===r.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r.Do.backspace&&e!==r.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const i=this.selectedItems.length,n=e!==i-1?e:e-1,a=this.selectedItems[n];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=n},clearableCallback(){this.internalSearch=null,i.Z.options.methods.clearableCallback.call(this)},genInput(){const e=n.Z.options.methods.genInput.call(this);return e.data=(0,a.ZP)(e.data,{attrs:{"aria-activedescendant":(0,r.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,r.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=i.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?i.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[r.Do.home,r.Do.end].includes(t)||i.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){i.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){i.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){i.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const i=this.selectedItems[this.selectedIndex],n=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",n),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}})},4895:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-card",{attrs:{elevation:"2",disabled:e.loadingRecords,loading:e.loadingRecords}},[s("div",{staticClass:"d-flex"},[s("div",[s("v-card-title",[e._v("Edit Ticket")]),s("v-card-subtitle",[s("small",[e._v("Note: All required fields is marked with (*)")])])],1),s("v-spacer"),s("router-link",{staticClass:"mt-5 mr-5",attrs:{to:{name:"MyTicket"}}},[e._v("Back")])],1),s("v-form",{ref:"form"},[s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-autocomplete",{ref:"category",attrs:{rules:[e.rules.required],items:e.categories,"item-text":"name","item-value":"id",label:"Category*",outlined:"",dense:""},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-autocomplete",{ref:"department",attrs:{rules:[e.rules.required],items:e.departments,"item-text":"name","item-value":"id",label:"Department*",outlined:"",dense:""},model:{value:e.form.department,callback:function(t){e.$set(e.form,"department",t)},expression:"form.department"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{ref:"loanNumber",attrs:{label:"Loan Number",rules:[e.rules.minimum(2),e.rules.maximum(100)],outlined:"",dense:""},model:{value:e.form.loanNumber,callback:function(t){e.$set(e.form,"loanNumber",t)},expression:"form.loanNumber"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{ref:"subject",attrs:{label:"Subject*",rules:[e.rules.required,e.rules.minimum(2),e.rules.maximum(100)],outlined:"",dense:""},model:{value:e.form.subject,callback:function(t){e.$set(e.form,"subject",t)},expression:"form.subject"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-textarea",{ref:"description",attrs:{label:"Message*",rules:[e.rules.required,e.rules.minimum(2),e.rules.maximum(5e3)],outlined:"",dense:"",rows:"4"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),s("v-divider"),s("v-card-actions",{staticClass:"pa-4"},[s("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary"},on:{click:function(t){e.confirmationDialog=!0}}},[e._v(" Update ")]),s("v-btn",{staticClass:"text-capitalize",attrs:{to:{name:"MyTicket"}}},[e._v(" Cancel ")])],1)],1)],1),e.confirmationDialog?s("confirmation-message",{attrs:{confirmationData:e.confirmationData},on:{closeConfirmationDialog:e.closeConfirmationDialog,onSubmit:e.onSubmit}}):e._e()],1)},n=[],a=s(3659),r=s(629),l=s(5081),o={components:{ConfirmationMessage:l.Z},data:()=>({rules:a.Z,id:null,form:{category:null,department:null,loanNumber:null,subject:null,description:null},confirmationDialog:!1,confirmationData:{title:"Are you sure you want to update?",text:"This action cannot be undone.",closeBtnText:"Cancel",closeBtnColor:"gray",saveBtnText:"Update",saveBtnColor:"primary"}}),created(){this.getRecord()},computed:{...(0,r.rn)("myTicket",["record","categories","departments","loadingRecords"])},methods:{async getRecord(){await this.$store.dispatch("myTicket/editRecord",this.$route.params.id),Object.keys(this.record).length&&(this.id=this.record.id,this.form.category=this.record.category_id,this.form.department=this.record.department_id,this.form.loanNumber=this.record.loan_number,this.form.description=this.record.description,this.form.subject=this.record.subject)},async onSubmit(){this.confirmationDialog=!1,this.$refs.form.validate()&&await this.$store.dispatch("myTicket/updateRecord",[this.id,this.form])},closeConfirmationDialog(){this.confirmationDialog=!1}}},c=o,h=s(1001),d=s(3453),u=s.n(d),m=s(1835),p=s(680),f=s(3237),v=s(7118),I=s(2102),g=s(4228),x=s(1418),S=s(6232),y=s(2877),b=s(9762),D=s(5978),C=s(4350),Z=(0,h.Z)(c,i,n,!1,null,null,null),k=Z.exports;u()(Z,{VAutocomplete:m.Z,VBtn:p.Z,VCard:f.Z,VCardActions:v.h7,VCardSubtitle:v.Qq,VCardText:v.ZB,VCardTitle:v.EB,VCol:I.Z,VContainer:g.Z,VDivider:x.Z,VForm:S.Z,VRow:y.Z,VSpacer:b.Z,VTextField:D.Z,VTextarea:C.Z})}}]);
//# sourceMappingURL=ticketMyTicketEdit.97edde7d.js.map