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
        addres: '',
        phoneNumber: '',
        email: '',
        description: '',
      }
    }
  }
  render() {
  return (
    <div className="App">
      Informacion Personal
      <GeneralInfo generalInfo={this.state.generalInfo}/>
      <StudiesInfo />
      <WorkInfo />
    </div>
  );
}
}

export default App;
