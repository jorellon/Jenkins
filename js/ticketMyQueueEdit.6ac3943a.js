"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[456],{2157:function(t,e,i){i.d(e,{n:function(){return s}});const s=t=>{for(var e in t)return!1;return!0}},897:function(t,e,i){i.d(e,{Z:function(){return V}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-dialog",{attrs:{"max-width":"900"},model:{value:t.solutionsDialog,callback:function(e){t.solutionsDialog=e},expression:"solutionsDialog"}},[t.isAddNew?i("div",[i("div",{staticClass:"modalHeader"},[i("v-btn",{staticClass:"text-capitalize",attrs:{color:"success",small:"",disabled:t.loading},on:{click:function(e){t.solutionDialog=!0}}},[i("span",[t._v("Add New")])])],1),i("v-divider")],1):t._e(),i("v-data-table",{staticClass:"elevation-1 rounded-t-0",attrs:{headers:t.headers,items:t.solutions,"items-per-page":5,loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.remarks",fn:function(e){var s=e.item;return[i("div",{staticClass:"text-truncate",staticStyle:{"max-width":"250px"}},[t._v(" "+t._s(s.remarks)+" ")])]}},{key:"item.created_at",fn:function(e){var s=e.item;return[i("span",[t._v(t._s(t.setCreatedAtFormat(s.created_at)))])]}}],null,!0)})],1),t.solutionDialog?i("v-dialog",{attrs:{persistent:t.isPersistent,"max-width":"500px"},model:{value:t.solutionDialog,callback:function(e){t.solutionDialog=e},expression:"solutionDialog"}},[i("v-form",{ref:"solutionForm",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[i("v-card",{attrs:{disabled:t.loadingForm}},[i("v-card-title",[t._v(" Solution ")]),i("v-card-subtitle",[i("small",[t._v("Note: All fields are required.")])]),i("v-card-text",[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-text-field",{ref:"keyword",attrs:{label:"Keyword",rules:t.saveStatus?[t.rules.required,t.rules.minimum(2),t.rules.maximum(100)]:[],"hide-details":"auto",outlined:"",dense:""},model:{value:t.solutionForm.keyword,callback:function(e){t.$set(t.solutionForm,"keyword",e)},expression:"solutionForm.keyword"}})],1),i("v-col",{attrs:{cols:"12"}},[i("v-textarea",{ref:"remarks",attrs:{label:"Remarks",rules:t.saveStatus?[t.rules.required,t.rules.minimum(2),t.rules.maximum(5e3)]:[],"hide-details":"auto",rows:"4",outlined:"",dense:""},model:{value:t.solutionForm.remarks,callback:function(e){t.$set(t.solutionForm,"remarks",e)},expression:"solutionForm.remarks"}})],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{on:{click:function(e){t.solutionDialog=!1}}},[t._v(" Close ")]),i("v-btn",{attrs:{color:"success",type:"submit"}},[t._v(" Save ")])],1)],1)],1)],1):t._e()],1)},a=[],o=i(629),r=i(381),l=i.n(r),n=i(3659),c={name:"Solutions",props:["isAddNew"],data:()=>({headers:[{text:"Keyword",value:"keyword"},{text:"Remarks",value:"remarks"},{text:"Date Created",value:"created_at"},{text:"Action",value:"action",sortable:!1}],rules:n.Z,solutionDialog:!1,isPersistent:!1,solutionForm:{ticket_id:null,keyword:null,remarks:null},saveStatus:!1}),created(){this.getRecords()},computed:{...(0,o.rn)(["loading","solutions"]),...(0,o.rn)("myQueue",["loadingForm"]),solutionsDialog:{get:function(){return!0},set:function(){this.$emit("closeSolutionsDialog")}}},methods:{...(0,o.nv)("myQueue",["createSolution"]),async getRecords(){this.$store.commit("setSolutions",[]),await this.$store.dispatch("getSolutions",this.$route.params.id),this.solutionForm.ticket_id=this.$route.params.id},async onSubmit(){this.saveStatus=!0,await new Promise((t=>setTimeout(t,200))),this.loadingForm||this.$refs.solutionForm.validate()&&(this.isPersistent=!0,await this.createSolution(this.solutionForm),this.solutionsDialog=!1,this.solutionDialog=!1,this.$refs.solutionForm.reset(),this.isPersistent=!1)},setCreatedAtFormat(t){return l()(t).format("MMM D, YYYY h:mm A")}},watch:{solutionDialog(t){t&&setTimeout((()=>{this.$refs.keyword.focus()}),200)}}},u=c,d=i(1001),m=i(3453),v=i.n(m),g=i(680),f=i(3237),h=i(7118),p=i(2102),k=i(4228),D=i(4998),_=i(4497),y=i(1418),x=i(6232),b=i(2877),S=i(9762),C=i(5978),w=i(4350),Z=(0,d.Z)(u,s,a,!1,null,"4dbcd4a5",null),V=Z.exports;v()(Z,{VBtn:g.Z,VCard:f.Z,VCardActions:h.h7,VCardSubtitle:h.Qq,VCardText:h.ZB,VCardTitle:h.EB,VCol:p.Z,VContainer:k.Z,VDataTable:D.Z,VDialog:_.Z,VDivider:y.Z,VForm:x.Z,VRow:b.Z,VSpacer:S.Z,VTextField:C.Z,VTextarea:w.Z})},4439:function(t,e,i){i.d(e,{Z:function(){return h}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{"max-width":"900"},model:{value:t.ticketLogsDialog,callback:function(e){t.ticketLogsDialog=e},expression:"ticketLogsDialog"}},[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.ticketLogs,"items-per-page":5,loading:t.loading,"loading-text":"Loading... Please wait"},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var s=e.item;return[i("span",[t._v(t._s(t.setCreatedAtFormat(s.created_at)))])]}}],null,!0)})],1)},a=[],o=i(629),r=i(381),l=i.n(r),n={name:"TicketLogs",data:()=>({headers:[{text:"Category",value:"category.name"},{text:"Status",value:"ticket_status.name"},{text:"Priority",value:"priority_status.name"},{text:"Department",value:"department.name"},{text:"Assigned To",value:"assignee.full_name"},{text:"Date Created",value:"created_at"}]}),created(){this.$store.commit("setTicketLogs",[]),this.$store.dispatch("getTicketLogs",this.$route.params.id)},computed:{...(0,o.rn)(["loading","ticketLogs"]),ticketLogsDialog:{get:function(){return!0},set:function(){this.$emit("closeTicketLogsDialog")}}},methods:{setCreatedAtFormat(t){return l()(t).format("MMM D, YYYY h:mm A")}}},c=n,u=i(1001),d=i(3453),m=i.n(d),v=i(4998),g=i(4497),f=(0,u.Z)(c,s,a,!1,null,null,null),h=f.exports;m()(f,{VDataTable:v.Z,VDialog:g.Z})},4122:function(t,e,i){i.r(e),i.d(e,{default:function(){return Y}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{attrs:{cols:"12",md:"8"}},[s("v-card",[t.loadingRecords?s("div",[s("v-card-text",[s("v-progress-linear",{attrs:{indeterminate:"",color:"grey"}}),s("br"),s("v-progress-linear",{attrs:{indeterminate:"",color:"grey"}}),s("br"),s("v-progress-linear",{attrs:{indeterminate:"",color:"grey"}})],1)],1):s("div",[s("v-card-subtitle",{staticClass:"d-flex"},[s("v-icon",{staticClass:"ml-2 mr-5"},[t._v("mdi-email-outline")]),s("div",[s("h3",{staticClass:"font-weight-black"},[t._v(" "+t._s(t.subject)+" ")]),t._v(" "+t._s(t.setCreatedAtFormat(t.createdAt))+" ("+t._s(t.setFromNow(t.createdAt))+") ")]),s("v-spacer"),s("router-link",{attrs:{to:{name:"MyQueue"}}},[t._v("Back")])],1),s("v-card-text",{staticClass:"d-flex"},[s("v-img",{staticClass:"mr-3 rounded",attrs:{src:i(6229),"max-height":"40","max-width":"40"}}),s("div",[s("div",{staticClass:"font-weight-bold"},[t._v(t._s(t.client))]),s("div",[t._v(t._s(t.email))])])],1),s("v-card-text",{staticClass:"d-flex"},[s("v-icon",{staticClass:"ml-3 mr-6",attrs:{small:""}},[t._v("mdi-email-outline")]),s("div",{staticClass:"pre-formatted"},[t._v(" "+t._s(t.description)+" ")])],1),s("v-card-actions",[s("v-btn",{staticClass:"text-capitalize ml-15",attrs:{small:""}},[s("v-icon",{attrs:{small:""}},[t._v("mdi-reply-outline")]),t._v(" Reply ")],1),s("v-btn",{staticClass:"text-capitalize",attrs:{small:""},on:{click:function(e){t.ticketLogsDialog=!0}}},[s("v-icon",{attrs:{small:""}},[t._v("mdi-file-document-outline")]),t._v(" View Logs ")],1),s("v-btn",{staticClass:"text-capitalize",attrs:{small:""},on:{click:function(e){t.solutionsDialog=!0}}},[s("v-icon",{attrs:{small:""}},[t._v("mdi-book-open-page-variant-outline")]),t._v("  Solution ")],1)],1)],1)])],1),s("v-col",{attrs:{cols:"12",md:"4"}},[s("v-form",{ref:"form"},[s("v-card",{attrs:{disabled:t.loadingForm}},[s("div",[s("v-card-subtitle",{staticClass:"text-uppercase font-weight-bold"},[t._v(" Properties "),s("v-divider")],1),s("v-card-text",[s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{ref:"category",attrs:{rules:[t.rules.required],items:t.categories,"item-text":"name","item-value":"id",label:"Category","hide-details":"auto"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{ref:"ticketStatus",attrs:{rules:[t.rules.required],items:t.ticketStatuses,"item-text":"name","item-value":"id",label:"Status","hide-details":"auto",disabled:!t.form.agent},on:{change:t.setStatus},model:{value:t.form.ticketStatus,callback:function(e){t.$set(t.form,"ticketStatus",e)},expression:"form.ticketStatus"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-select",{ref:"priorityStatus",attrs:{rules:[t.rules.required],items:t.priorityStatuses,"item-text":"name","item-value":"id",label:"Priority","hide-details":"auto"},on:{change:function(e){return t.setPriority(t.priorityStatuses)}},scopedSlots:t._u([{key:"selection",fn:function(e){var i=e.item;return[s("v-icon",{staticClass:"mr-1",attrs:{small:"",color:t.getPriorityColor(i.id)}},[t._v("mdi-square")]),t._v(" "+t._s(i.name)+" "),5!=i.id?s("span",[t._v(" ("+t._s(i.hours)+" hrs)")]):t._e()]}},{key:"item",fn:function(e){var i=e.item;return[s("v-icon",{staticClass:"mr-1",attrs:{small:"",color:t.getPriorityColor(i.id)}},[t._v("mdi-square")]),t._v(t._s(i.name)+" "),5!=i.id?s("span",[t._v(" ("+t._s(i.hours)+" hrs)")]):t._e()]}}]),model:{value:t.form.priorityStatus,callback:function(e){t.$set(t.form,"priorityStatus",e)},expression:"form.priorityStatus"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{ref:"dueDate",attrs:{label:"Due date*",rules:[t.rules.required,t.validDueDate],type:"datetime-local","hide-details":"auto",disabled:5!=t.form.priorityStatus},model:{value:t.form.dueDate,callback:function(e){t.$set(t.form,"dueDate",e)},expression:"form.dueDate"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{ref:"department",attrs:{rules:[t.rules.required],items:t.departments,"item-text":"name","item-value":"id",label:"Department","hide-details":"auto"},on:{change:t.setAgents},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-autocomplete",{ref:"agent",attrs:{items:t.agents,"item-text":"full_name","item-value":"id",label:"Agent","hide-details":"auto"},on:{change:t.setAgent},model:{value:t.form.agent,callback:function(e){t.$set(t.form,"agent",e)},expression:"form.agent"}})],1)],1),s("v-row",[s("v-col",{attrs:{cols:"12"}},[s("v-btn",{attrs:{color:"primary",block:""},on:{click:function(e){t.confirmationDialog=!0}}},[t._v(" Update ")])],1)],1)],1)],1)])],1)],1)],1),t.solutionsDialog?s("solutions",{attrs:{isAddNew:!0},on:{closeSolutionsDialog:t.closeSolutionsDialog}}):t._e(),t.ticketLogsDialog?s("ticket-logs",{on:{closeTicketLogsDialog:t.closeTicketLogsDialog}}):t._e(),t.confirmationDialog?s("confirmation-message",{attrs:{confirmationData:t.confirmationData},on:{closeConfirmationDialog:t.closeConfirmationDialog,onSubmit:t.onSubmit}}):t._e()],1)},a=[],o=i(629),r=i(2157),l=i(381),n=i.n(l),c=i(3659),u=i(4439),d=i(897),m=i(5081),v={components:{TicketLogs:u.Z,Solutions:d.Z,ConfirmationMessage:m.Z},data:()=>({rules:c.Z,subject:null,createdAt:null,client:null,email:null,description:null,id:null,form:{category:null,ticketStatus:null,priorityStatus:null,department:null,agent:null,dueDate:null},solutionsDialog:!1,isShowSolutionBtn:!1,ticketLogsDialog:!1,confirmationDialog:!1,confirmationData:{title:"Are you sure you want to update?",text:"This action cannot be undone.",closeBtnText:"Cancel",closeBtnColor:"gray",saveBtnText:"Update",saveBtnColor:"primary"},invalidDueDateText:null}),created(){this.getRecord()},computed:{...(0,o.rn)("myQueue",["loadingRecords","record","categories","ticketStatuses","priorityStatuses","departments","loadingForm","agents","errors"])},methods:{...(0,o.nv)("myQueue",["getAgents","editRecord","updateRecord"]),async getRecord(){this.$store.commit("myQueue/setRecord",[]),this.$store.commit("myQueue/setAgents",[]),await this.editRecord(this.$route.params.id),Object.keys(this.record).length&&(this.id=this.record.id,this.subject=this.record.subject,this.createdAt=this.record.created_at,this.client=this.record.client,this.email=this.record.email,this.description=this.record.description,this.form.category=this.record.category_id,this.form.ticketStatus=this.record.ticket_status_id,this.form.priorityStatus=this.record.priority_status_id,this.form.dueDate=n()(this.record.due_date).format("YYYY-MM-DDTkk:mm"),this.form.department=this.record.department_id,this.form.agent=this.record.assigned_to)},setCreatedAtFormat(t){return n()(t).format("MMM D, YYYY h:mm A")},setFromNow(t){return n()(t).fromNow()},getPriorityColor(t){switch(t){case 1:return"green";case 2:return"blue";case 3:return"orange";case 4:return"red";default:return"grey"}},setPriority(t){const e=t.find((t=>t.id===this.form.priorityStatus));this.form.dueDate=n()(this.createdAt).add(e.hours,"hours").format("YYYY-MM-DDTkk:mm"),5==this.form.priorityStatus&&(this.form.dueDate=null)},setStatus(){1==this.form.ticketStatus&&(this.form.agent=null)},setAgents(){this.getAgents(this.form.department),this.form.agent=null,this.form.ticketStatus=1},setAgent(){1==this.form.ticketStatus&&(this.form.ticketStatus=2),this.form.agent||(this.form.ticketStatus=1)},validDueDate(t){return t!=this.invalidDueDateText||"Invalid Date"},async onSubmit(){if(this.$refs.form.validate()&&!this.loadingForm&&(this.confirmationDialog=!1,await this.updateRecord([this.id,this.form]),!(0,r.n)(this.errors))){let t="";Object.entries(this.errors).forEach((([e,i])=>{i&&(t||(t=e),"dueDate"==e&&(this.invalidDueDateText=this.form.dueDate),this.$refs.form.validate(),this.$refs[t].focus())}))}},closeSolutionsDialog(){this.solutionsDialog=!1},closeTicketLogsDialog(){this.ticketLogsDialog=!1},closeConfirmationDialog(){this.confirmationDialog=!1}}},g=v,f=i(1001),h=i(3453),p=i.n(h),k=i(1835),D=i(680),_=i(3237),y=i(7118),x=i(2102),b=i(4228),S=i(1418),C=i(6232),w=i(6428),Z=i(7047),V=i(7003),A=i(2877),F=i(4999),$=i(9762),T=i(5978),L=(0,f.Z)(g,s,a,!1,null,"5f3246cd",null),Y=L.exports;p()(L,{VAutocomplete:k.Z,VBtn:D.Z,VCard:_.Z,VCardActions:y.h7,VCardSubtitle:y.Qq,VCardText:y.ZB,VCol:x.Z,VContainer:b.Z,VDivider:S.Z,VForm:C.Z,VIcon:w.Z,VImg:Z.Z,VProgressLinear:V.Z,VRow:A.Z,VSelect:F.Z,VSpacer:$.Z,VTextField:T.Z})},6229:function(t,e,i){t.exports=i.p+"img/default_selfie.aa40bfd1.jpg"}}]);
//# sourceMappingURL=ticketMyQueueEdit.6ac3943a.js.map