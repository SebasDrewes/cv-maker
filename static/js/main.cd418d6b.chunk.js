(this["webpackJsonpcv-maker"]=this["webpackJsonpcv-maker"]||[]).push([[0],{28:function(e,t,s){},29:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),a=s(6),o=s.n(a),r=(s(28),s(5)),c=s(3),l=s(10),d=s(11),u=s(2),p=s(13),j=s(12),h=s(22),b=s.n(h),m=(s(29),s(4)),f=s.n(m),v=s(23),O=s(0);function y(e){var t=e.saveGeneralInfo,s=e.savePhoto,n=e.stateInfo,a=i.a.useRef(null),o=n.generalInfo,r=o.firstName,c=o.lastName,l=o.title,d=o.address,u=o.phoneNumber,p=o.email,j=o.description;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"text",name:"firstName",placeholder:"Nombre",onChange:t,value:r}),Object(O.jsx)("input",{type:"text",name:"lastName",placeholder:"Apellido",onChange:t,value:c}),Object(O.jsx)("input",{type:"text",name:"title",placeholder:"Titulo",onChange:t,value:l}),Object(O.jsx)("button",{type:"button",onClick:function(){a.current.click()},children:"Agregar Foto"}),Object(O.jsx)("input",{type:"file",name:"photo",placeholder:"Foto",onChange:s,ref:a,style:{display:"none"}}),Object(O.jsx)("input",{type:"text",name:"address",placeholder:"Direccion",onChange:t,value:d}),Object(O.jsx)("input",{type:"tel",name:"phoneNumber",placeholder:"Telefono",onChange:t,value:u}),Object(O.jsx)("input",{type:"email",name:"email",placeholder:"Email",onChange:t,value:p}),Object(O.jsx)("textarea",{type:"text",name:"description",placeholder:"Descripcion",onChange:t,value:j})]})})}function x(e){var t=e.saveStudiesInfo;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"text",name:"institute",placeholder:"Nombre del Instituto",onChange:t}),Object(O.jsx)("input",{type:"text",name:"title",placeholder:"Titulo",onChange:t}),Object(O.jsx)("input",{type:"text",name:"from",placeholder:"Desde",onChange:t}),Object(O.jsx)("input",{type:"text",name:"to",placeholder:"Hasta",onChange:t})]})})}function k(e){var t=e.saveWorkInfo;return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{type:"text",name:"position",placeholder:"Posicion",onChange:t}),Object(O.jsx)("input",{type:"text",name:"company",placeholder:"Compa\xf1\xeda",onChange:t}),Object(O.jsx)("input",{type:"text",name:"city",placeholder:"Ciudad",onChange:t}),Object(O.jsx)("input",{type:"text",name:"from",placeholder:"Desde",onChange:t}),Object(O.jsx)("input",{type:"text",name:"to",placeholder:"Hasta",onChange:t})]})})}s(42);var w=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){var e=this.props.allInfo,t=e.generalInfo,s=t.firstName,n=t.lastName,i=t.title,a=t.address,o=t.phoneNumber,r=t.email,c=t.description,l=e.photo;return""===l&&(l="".concat("/cv-maker","/emptyAvatar.png")),Object(O.jsxs)("div",{id:"previewContainer",children:[Object(O.jsxs)("div",{id:"previewMain",children:[Object(O.jsxs)("p",{id:"previewName",children:[s," ",n]}),Object(O.jsx)("p",{id:"previewTitle",children:i})]}),Object(O.jsxs)("div",{id:"previewContact",children:[Object(O.jsx)("div",{id:"flex",children:Object(O.jsx)("img",{src:l,alt:"avatar",id:"avatar"})}),Object(O.jsx)("p",{className:"previewSubtitle",children:"Detalles Personales"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{className:"previewSubtitle",children:"Direccion"}),Object(O.jsx)("p",{className:"content",children:a}),Object(O.jsx)("p",{className:"previewSubtitle",children:"Celular"}),Object(O.jsx)("p",{className:"content",children:o}),Object(O.jsx)("p",{className:"previewSubtitle",children:"Email"}),Object(O.jsx)("p",{className:"content",children:r})]}),Object(O.jsxs)("div",{id:"previewDescription",children:[Object(O.jsx)("p",{className:"previewSubtitle",children:"Descripcion"}),Object(O.jsx)("hr",{}),Object(O.jsx)("p",{className:"content",children:c})]}),Object(O.jsxs)("div",{id:"previewExperience",children:[Object(O.jsx)("p",{className:"previewSubtitle",children:"Experiencia"}),Object(O.jsx)("hr",{}),function(){for(var t=[],s=0;s<e.workList.length;s+=1){var n=e.workList[s].id;t.push(Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"contentBold",children:e.workList[s].position},"positionDisplay".concat(n)),Object(O.jsxs)("p",{className:"content",children:[e.workList[s].company,", ",e.workList[s].city]},"companyDisplay".concat(n)),Object(O.jsxs)("p",{className:"content",children:[e.workList[s].from," - ",e.workList[s].to]},"fromDisplay".concat(n))]},"divDisplay".concat(n)))}return t||null}()]}),Object(O.jsxs)("div",{id:"previewEducation",children:[Object(O.jsx)("p",{className:"previewSubtitle",children:"Educacion"}),Object(O.jsx)("hr",{}),function(){for(var t=[],s=0;s<e.studiesList.length;s+=1){var n=e.studiesList[s].id;t.push(Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{className:"contentBold",children:e.studiesList[s].title},"titleDisplay".concat(n)),Object(O.jsx)("p",{className:"content",children:e.studiesList[s].institute},"instituteDisplay".concat(n)),Object(O.jsxs)("p",{className:"content",children:[e.studiesList[s].from," - ",e.studiesList[s].to]},"fromDisplay".concat(n))]},"divDisplay".concat(n)))}return t||null}()]})]})}}]),s}(i.a.Component),I=function(e){Object(p.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).state={generalInfo:{firstName:"",lastName:"",title:"",address:"",phoneNumber:"",email:"",description:""},photo:"",showStudyInfo:!1,studiesInfo:{institute:"",title:"",from:"",to:"",id:f()()},studiesList:[],showWorkInfo:!1,workInfo:{position:"",company:"",city:"",from:"",to:"",id:f()()},workList:[]},n.saveGeneralInfo=n.saveGeneralInfo.bind(Object(u.a)(n)),n.saveStudiesInfo=n.saveStudiesInfo.bind(Object(u.a)(n)),n.saveWorkInfo=n.saveWorkInfo.bind(Object(u.a)(n)),n.addStudy=n.addStudy.bind(Object(u.a)(n)),n.displayStudyForm=n.displayStudyForm.bind(Object(u.a)(n)),n.studyForm=n.studyForm.bind(Object(u.a)(n)),n.displayStudyButton=n.displayStudyButton.bind(Object(u.a)(n)),n.displayWorkButton=n.displayWorkButton.bind(Object(u.a)(n)),n.addWork=n.addWork.bind(Object(u.a)(n)),n.displayWorkForm=n.displayWorkForm.bind(Object(u.a)(n)),n.workForm=n.workForm.bind(Object(u.a)(n)),n.removeWork=n.removeWork.bind(Object(u.a)(n)),n.removeStudy=n.removeStudy.bind(Object(u.a)(n)),n.imageUpload=n.imageUpload.bind(Object(u.a)(n)),n.loadExample=n.loadExample.bind(Object(u.a)(n)),n}return Object(d.a)(s,[{key:"saveGeneralInfo",value:function(e){e.preventDefault();var t=e.target,s=t.value,n=t.name;this.setState({generalInfo:Object(c.a)(Object(c.a)({},this.state.generalInfo),{},Object(r.a)({},n,s))})}},{key:"saveStudiesInfo",value:function(e){e.preventDefault();var t=e.target,s=t.value,n=t.name;this.setState({studiesInfo:Object(c.a)(Object(c.a)({},this.state.studiesInfo),{},Object(r.a)({},n,s))})}},{key:"imageUpload",value:function(e){if(e.target.files&&e.target.files[0]){var t=e.target.files[0];this.setState({photo:URL.createObjectURL(t)})}}},{key:"saveWorkInfo",value:function(e){e.preventDefault();var t=e.target,s=t.value,n=t.name;this.setState({workInfo:Object(c.a)(Object(c.a)({},this.state.workInfo),{},Object(r.a)({},n,s))})}},{key:"addStudy",value:function(){this.state.studiesList.length<5&&this.setState({showStudyInfo:!1,studiesInfo:{institute:"",title:"",from:"",to:"",id:f()()},studiesList:this.state.studiesList.concat(this.state.studiesInfo)})}},{key:"addWork",value:function(){this.state.workList.length<5&&this.setState({showWorkInfo:!1,workInfo:{institute:"",title:"",from:"",to:"",id:f()()},workList:this.state.workList.concat(this.state.workInfo)})}},{key:"studyForm",value:function(){if(this.state.showStudyInfo)return Object(O.jsx)(x,{saveStudiesInfo:this.saveStudiesInfo})||null}},{key:"displayStudyForm",value:function(){this.state.showStudyInfo?this.setState({showStudyInfo:!1}):this.setState({showStudyInfo:!0})}},{key:"workForm",value:function(){if(this.state.showWorkInfo)return Object(O.jsx)(k,{saveWorkInfo:this.saveWorkInfo})||null}},{key:"displayWorkForm",value:function(){this.state.showWorknfo?this.setState({showWorkInfo:!1}):this.setState({showWorkInfo:!0})}},{key:"displayStudyButton",value:function(){return this.state.showStudyInfo?Object(O.jsx)("button",{onClick:this.addStudy,type:"button",className:"guardar",children:"Guardiar estudio"}):Object(O.jsx)("button",{onClick:this.displayStudyForm,type:"button",children:"Agregar Estudios"})}},{key:"displayWorkButton",value:function(){return this.state.showWorkInfo?Object(O.jsx)("button",{onClick:this.addWork,type:"button",className:"guardar",children:"Guardar Experiencia"}):Object(O.jsx)("button",{onClick:this.displayWorkForm,type:"button",children:"Agregar Experiencia"})}},{key:"removeStudy",value:function(e){this.setState({studiesList:this.state.studiesList.filter((function(t){return t.id!==e}))})}},{key:"removeWork",value:function(e){this.setState({workList:this.state.workList.filter((function(t){return t.id!==e}))})}},{key:"studyList",value:function(){for(var e=this,t=[],s=function(s){var n=e.state.studiesList[s].id;t.push(Object(O.jsxs)("div",{className:"list",children:[Object(O.jsx)("p",{className:"confirmedInput",children:e.state.studiesList[s].institute},"institute".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.studiesList[s].title},"title".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.studiesList[s].from},"from".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.studiesList[s].to},"to".concat(n)),Object(O.jsx)("button",{onClick:function(t){return e.removeStudy(n)},className:"borrar",children:"Borrar Estudio"})]},"div".concat(n)))},n=0;n<this.state.studiesList.length;n+=1)s(n);return t||null}},{key:"workList",value:function(){for(var e=this,t=[],s=function(s){var n=e.state.workList[s].id;t.push(Object(O.jsxs)("div",{className:"list",children:[Object(O.jsx)("p",{className:"confirmedInput",children:e.state.workList[s].position},"position:".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.workList[s].company},"company".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.workList[s].city},"city".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.workList[s].from},"from".concat(n)),Object(O.jsx)("p",{className:"confirmedInput",children:e.state.workList[s].to},"to".concat(n)),Object(O.jsx)("button",{onClick:function(t){return e.removeWork(n)},className:"borrar",children:"Borrar Experiencia"})]},"div".concat(n)))},n=0;n<this.state.workList.length;n+=1)s(n);return t||null}},{key:"loadExample",value:function(e){e.preventDefault(),this.setState({generalInfo:{firstName:"Sebasti\xe1n",lastName:"Drewes",title:"Front End Developer",address:"Buenos Aires, CABA",phoneNumber:"1123456789",email:"sebas.drewes@gmail.com",description:"Desarrollador web con enfoque en Front End, competente en HTML5, CSS3 y JavaScript.\n\nConstantemente estoy en la b\xfasqueda de oportunidades para aprender conceptos nuevos y mejorar mis habilidades.\nMe interesa poder trabajar en una organizaci\xf3n que me permita poder poner en pr\xe1ctica todo mi conocimiento y experiencia, tambi\xe9n crecer profesionalmente, haciendo foco en el trabajo en equipo y resoluci\xf3n de problemas.\n        \nPodes ver mis proyectos en: https://github.com/SebasDrewes"},photo:"".concat("/cv-maker","/sebas.jpeg"),showStudyInfo:!1,studiesInfo:{institute:"",title:"",from:"",to:"",id:f()()},studiesList:[{from:"2021",id:"ks21kjug",institute:"The Odin Project",title:"Fullstack Developer",to:"Actual"},{from:"2016",id:"ks21l2q3",institute:"ASIMRA",title:"Tecnico en gestion ambiental",to:"2019"}],showWorkInfo:!1,workInfo:{position:"",company:"",city:"",from:"",to:"",id:f()()},workList:[{city:"CABA",company:"Aerolineas Argentinas",from:"2018",id:"ks21j2sn",position:"Auxiliar de Contact Center",to:"Actual"}]})}},{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h1",{id:"title",children:"CV Maker"}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("p",{className:"subtitle",children:"Informacion Personal"}),Object(O.jsx)(y,{saveGeneralInfo:this.saveGeneralInfo,savePhoto:this.imageUpload,stateInfo:this.state}),Object(O.jsx)("p",{className:"subtitle",children:"Experiencia laboral"}),this.workList(),this.workForm(),this.displayWorkButton(),Object(O.jsx)("p",{className:"subtitle",children:"Estudios"}),this.studyList(),this.studyForm(),this.displayStudyButton(),Object(O.jsx)(b.a,{pageStyle:"  @page { size: landscape; margin: 0; }",trigger:function(){return Object(O.jsx)("button",{type:"button",className:"pdf",children:"Descargar PDF"})},content:function(){return e.componentRef}}),Object(O.jsx)(v.Link,{to:"bottom",spy:!0,smooth:!0,offset:-70,duration:500,children:Object(O.jsx)("button",{type:"button",className:"ejemplo",onClick:this.loadExample,children:"Cargar Ejemplo"})})]}),Object(O.jsx)("h1",{id:"curriculum",children:"CV Preview"}),Object(O.jsx)("div",{id:"previewMainContainer",children:Object(O.jsx)(w,{allInfo:this.state,ref:function(t){return e.componentRef=t}})}),Object(O.jsx)("div",{id:"bottom"})]})}}]),s}(i.a.Component);o.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.cd418d6b.chunk.js.map