import React from 'react';
import './App.css';
import uniqid from "uniqid";
import GeneralInfo from './components/GeneralInfo'
import StudiesInfo from './components/StudiesInfo'
import WorkInfo from './components/WorkInfo'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      generalInfo:{
      firstName: '',
      lastName: '',
      title: '',
      photo: '',
      address: '',
      phoneNumber: '',
      email: '',
      description: '',
      },
      
      showStudyInfo: false,

      studiesInfo:{
      institute: '',
      title: '',
      from: '',
      to: '',
      id: uniqid(),
      },

      studiesList: [],

      workInfo:{
      position: '',
      company: '',
      city: '',
      fro: '',
      to: '',
      id: uniqid(),
      },
      
      workList: [],
    }
    this.saveGeneralInfo = this.saveGeneralInfo.bind(this)
    this.saveStudiesInfo = this.saveStudiesInfo.bind(this)
    this.addStudy = this.addStudy.bind(this)
    this.displayStudyForm = this.displayStudyForm.bind(this)
    this.studyForm = this.studyForm.bind(this)
    this.displayStudyButton = this.displayStudyButton.bind(this)
  }
  saveGeneralInfo(e) {
    e.preventDefault();
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      generalInfo: Object.assign(
        {},
        this.state.generalInfo,
        {[name] : value}
      )
      })
      console.log(this.state)
  }
  saveStudiesInfo(e) {
    e.preventDefault();
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      studiesInfo: Object.assign(
        {},
        this.state.studiesInfo,
        {[name] : value}
      )
      })
      console.log(this.state)
  }

  addStudy(){
    console.log(this.state.studiesList)
    if (this.state.studiesList.length < 5)
    this.setState({
      showStudyInfo: false,
      studiesInfo: {
        institute: '',
        title: '',
        from: '',
        to: '',
        id: uniqid(),
      },
      studiesList: this.state.studiesList.concat(this.state.studiesInfo)
    })
  }
  /*
  displayStudies(){
    let studies = [];
    for(let i = 0; i < this.state.studiesList.length; i++){
      const id = this.state.studiesList[i].idStudy
              studies.push(
              <div key={`div${id}`}>
                  <StudiesInfo saveStudiesInfo={this.saveInfo} id={id}/>
              </div>
           )
    }
    return studies || null;
 }*/
 studyForm(){
   if (this.state.showStudyInfo)
    return <StudiesInfo saveStudiesInfo={this.saveStudiesInfo}/> || null;
 }
 displayStudyForm(){
   if(this.state.showStudyInfo){
   this.setState({
    showStudyInfo: false,
   })
  } else {
    this.setState({
      showStudyInfo: true,
    })
  }
 }
 displayStudyButton(){
  if(this.state.showStudyInfo){
    return <button onClick={this.addStudy}>Guardiar estudio</button>
   } else {
    return <button onClick={this.displayStudyForm}>Agregar Estudios</button>
   }
  }

  render() {
  return (
    <div className="App">
      Informacion Personal
      <GeneralInfo saveGeneralInfo={this.saveGeneralInfo}/>
      Estudios
      {this.studyForm()}
      {this.displayStudyButton()}
      Experiencia laboral
      <WorkInfo saveWorkInfo={this.saveWorkInfo}/>
    </div>
  );
}
}

export default App;
