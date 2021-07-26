import React from 'react';
import './App.css';
import GeneralInfo from './components/GeneralInfo'
import StudiesInfo from './components/StudiesInfo'
import WorkInfo from './components/WorkInfo'

class App extends React.Component{
  constructor(){
    super()
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
      }
    }
    this.saveGeneralInfo = this.saveGeneralInfo.bind(this)
  }
  saveGeneralInfo(e) {
    const target = e.target
    const value = target.value
    const name = target.name
    this.setState({
      generalInfo: this.state.generalInfo.map((info) => {
        if(info.name === name) {
          return info = value;
        } else {
          return info
        }
      })
    })
    console.log(this.state)
  }
  render() {
  return (
    <div className="App">
      Informacion Personal
      <GeneralInfo saveGeneralInfo={this.saveGeneralInfo}/>
      <StudiesInfo />
      <WorkInfo />
    </div>
  );
}
}

export default App;
