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
      studiesInfo:{
      //studies info
      institute: '',
      studyTitle: '',
      fromStudy: '',
      toStudy: '',
      idStudy: uniqid(),
      },
      studiesList: [],
      workInfo:{
      //work info
      position: '',
      company: '',
      city: '',
      fromWork: '',
      toWork: '',
      idWork: uniqid(),
      },
      workList: [],
    }
    this.saveGeneralInfo = this.saveGeneralInfo.bind(this)
    this.addStudies = this.addStudies.bind(this)
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

  addStudies(){
    console.log(this.state.studiesList)
    if (this.state.studiesList.length < 5)
    this.setState({
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
 }
  render() {
  return (
    <div className="App">
      Informacion Personal
      <GeneralInfo saveGeneralInfo={this.saveGeneralInfo}/>
      Estudios
      {this.displayStudies()}
      <button onClick={this.addStudies}>Agregar Estudios</button>
      Experiencia laboral
      <WorkInfo saveWorkInfo={this.saveWorkInfo}/>
    </div>
  );
}
}

export default App;
