import React from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo'
import StudiesInfo from './components/StudiesInfo'
import WorkInfo from './components/WorkInfo'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        photo: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      studiesList : [],

      studiesInfo: {
        institute: '',
        title: '',
        from: '',
        to: '',
      },
      workInfo: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
      }
    }
    this.saveGeneralInfo = this.saveGeneralInfo.bind(this)
    this.saveStudiesInfo = this.saveStudiesInfo.bind(this)
    this.saveWorkInfo = this.saveWorkInfo.bind(this)
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
      )})
      console.log(this.state)
  }
  saveStudiesInfo(e, number) {
    e.preventDefault();
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      studiesInfo: Object.assign(
        {},
        this.state.studiesInfo,
        {[name] : value}
      )})
      console.log(this.state)
  }
  saveWorkInfo(e) {
    e.preventDefault();
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      workInfo: Object.assign(
        {},
        this.state.workInfo,
        {[name] : value}
      )})
      console.log(this.state)
  }
  addStudies(){
    console.log(this.state.studiesList)
    if (this.state.studiesList.length < 5)
    this.setState({
      studiesList: this.state.studiesList.concat(this.state.studiesInfo)
    })
  }
  displayStudies(){
    let studies = [];
    for(let i = 1; i < this.state.studiesList.length; i++){
              studies.push(
              <div key={i}>
                  <StudiesInfo saveStudiesInfo={this.saveStudiesInfo} number={i}/>
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
