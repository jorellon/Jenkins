"use strict";(self["webpackChunkticketing"]=self["webpackChunkticketing"]||[]).push([[889],{5026:function(t,e,r){r.r(e),r.d(e,{default:function(){return T}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-card",{attrs:{elevation:"2",disabled:t.loadingRecords,loading:t.loadingRecords}},[r("div",{staticClass:"d-flex"},[r("div",[r("v-card-title",[t._v("Edit Ticket")]),r("v-card-subtitle",[r("small",[t._v("Note: All required fields is marked with (*)")])])],1),r("v-spacer"),r("router-link",{staticClass:"mt-5 mr-5",attrs:{to:{name:"MyTicket"}}},[t._v("Back")])],1),r("v-form",{ref:"form"},[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-autocomplete",{ref:"category",attrs:{rules:[t.rules.required],items:t.categories,"item-text":"name","item-value":"id",label:"Category*",outlined:"",dense:""},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1),r("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[r("v-autocomplete",{ref:"department",attrs:{rules:[t.rules.required],items:t.departments,"item-text":"name","item-value":"id",label:"Department*",outlined:"",dense:""},model:{value:t.form.department,callback:function(e){t.$set(t.form,"department",e)},expression:"form.department"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-text-field",{ref:"subject",attrs:{label:"Subject*",rules:[t.rules.required,t.rules.minimum(2),t.rules.maximum(100)],outlined:"",dense:""},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"8"}},[r("v-textarea",{ref:"description",attrs:{label:"Message*",rules:[t.rules.required,t.rules.minimum(2),t.rules.maximum(5e3)],outlined:"",dense:"",rows:"4"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1),r("v-divider"),r("v-card-actions",{staticClass:"pa-4"},[r("v-btn",{staticClass:"text-capitalize",attrs:{color:"primary"},on:{click:function(e){t.confirmationDialog=!0}}},[t._v(" Update ")]),r("v-btn",{staticClass:"text-capitalize",attrs:{to:{name:"MyTicket"}}},[t._v(" Cancel ")])],1)],1)],1),t.confirmationDialog?r("confirmation-message",{attrs:{confirmationData:t.confirmationData},on:{closeConfirmationDialog:t.closeConfirmationDialog,onSubmit:t.onSubmit}}):t._e()],1)},o=[],a=r(3659),s=r(629),n=r(5081),c={components:{ConfirmationMessage:n.Z},data:()=>({rules:a.Z,id:null,form:{category:null,department:null,subject:null,description:null},confirmationDialog:!1,confirmationData:{title:"Are you sure you want to update?",text:"This action cannot be undone.",closeBtnText:"Cancel",closeBtnColor:"gray",saveBtnText:"Update",saveBtnColor:"primary"}}),created(){this.getRecord()},computed:{...(0,s.rn)("myTicket",["record","categories","departments","loadingRecords"])},methods:{async getRecord(){await this.$store.dispatch("myTicket/editRecord",this.$route.params.id),Object.keys(this.record).length&&(this.id=this.record.id,this.form.category=this.record.category_id,this.form.department=this.record.department_id,this.form.description=this.record.description,this.form.subject=this.record.subject)},async onSubmit(){this.confirmationDialog=!1,this.$refs.form.validate()&&await this.$store.dispatch("myTicket/updateRecord",[this.id,this.form])},closeConfirmationDialog(){this.confirmationDialog=!1}}},l=c,d=r(1001),m=r(3453),u=r.n(m),f=r(1835),p=r(680),v=r(3237),g=r(7118),h=r(2102),b=r(4228),C=r(1418),k=r(6232),x=r(2877),y=r(9762),V=r(5978),Z=r(4350),D=(0,d.Z)(l,i,o,!1,null,null,null),T=D.exports;u()(D,{VAutocomplete:f.Z,VBtn:p.Z,VCard:v.Z,VCardActions:g.h7,VCardSubtitle:g.Qq,VCardText:g.ZB,VCardTitle:g.EB,VCol:h.Z,VContainer:b.Z,VDivider:C.Z,VForm:k.Z,VRow:x.Z,VSpacer:y.Z,VTextField:V.Z,VTextarea:Z.Z})}}]);
//# sourceMappingURL=ticketMyTicketEdit.6fbc7339.js.map