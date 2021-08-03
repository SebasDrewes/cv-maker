import React from 'react';
import './App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import StudiesInfo from './components/StudiesInfo';
import WorkInfo from './components/WorkInfo';

class App extends React.Component {
  constructor(props) {
    super(props);
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

      showStudyInfo: false,

      studiesInfo: {
        institute: '',
        title: '',
        from: '',
        to: '',
        id: uniqid(),
      },

      studiesList: [],

      showWorkInfo: false,

      workInfo: {
        position: '',
        company: '',
        city: '',
        fro: '',
        to: '',
        id: uniqid(),
      },

      workList: [],
    };
    this.saveGeneralInfo = this.saveGeneralInfo.bind(this);
    this.saveStudiesInfo = this.saveStudiesInfo.bind(this);
    this.saveWorkInfo = this.saveWorkInfo.bind(this);
    this.addStudy = this.addStudy.bind(this);
    this.displayStudyForm = this.displayStudyForm.bind(this);
    this.studyForm = this.studyForm.bind(this);
    this.displayStudyButton = this.displayStudyButton.bind(this);
    this.displayWorkButton = this.displayWorkButton.bind(this);
    this.addWork = this.addWork.bind(this);
    this.displayWorkForm = this.displayWorkForm.bind(this);
    this.workForm = this.workForm.bind(this);
  }

  saveGeneralInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState({
      generalInfo: {

        ...this.state.generalInfo,
        [name]: value,
      },
    });
    console.log(this.state);
  }

  saveStudiesInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState({
      studiesInfo: {

        ...this.state.studiesInfo,
        [name]: value,
      },
    });
    console.log(this.state);
  }

  saveWorkInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    this.setState({
      workInfo: {

        ...this.state.workInfo,
        [name]: value,
      },
    });
    console.log(this.state);
  }

  addStudy() {
    console.log(this.state.studiesList);
    if (this.state.studiesList.length < 5) {
      this.setState({
        showStudyInfo: false,
        studiesInfo: {
          institute: '',
          title: '',
          from: '',
          to: '',
          id: uniqid(),
        },
        studiesList: this.state.studiesList.concat(this.state.studiesInfo),
      });
    }
  }

  addWork() {
    console.log(this.state.workList);
    if (this.state.workList.length < 5) {
      this.setState({
        showWorkInfo: false,
        workInfo: {
          institute: '',
          title: '',
          from: '',
          to: '',
          id: uniqid(),
        },
        workList: this.state.workList.concat(this.state.workInfo),
      });
    }
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
 } */
  studyForm() {
    if (this.state.showStudyInfo) {
      return <StudiesInfo saveStudiesInfo={this.saveStudiesInfo} /> || null;
    }
  }

  displayStudyForm() {
    if (this.state.showStudyInfo) {
      this.setState({
        showStudyInfo: false,
      });
    } else {
      this.setState({
        showStudyInfo: true,
      });
    }
  }

  workForm() {
    if (this.state.showWorkInfo) { return <WorkInfo saveWorkInfo={this.saveWorkInfo} /> || null; }
  }

  displayWorkForm() {
    if (this.state.showWorknfo) {
      this.setState({
        showWorkInfo: false,
      });
    } else {
      this.setState({
        showWorkInfo: true,
      });
    }
  }

  displayStudyButton() {
    if (this.state.showStudyInfo) {
      return <button onClick={this.addStudy}>Guardiar estudio</button>;
    }
    return <button onClick={this.displayStudyForm}>Agregar Estudios</button>;
  }

  displayWorkButton() {
    if (this.state.showWorkInfo) {
      return <button onClick={this.addWork}>Guardar Trabajo</button>;
    }
    return <button onClick={this.displayWorkForm}>Agregar Trabajo</button>;
  }

  render() {
    return (
      <div className="App">
        Informacion Personal
        <GeneralInfo saveGeneralInfo={this.saveGeneralInfo} />
        Estudios
        {this.studyForm()}
        {this.displayStudyButton()}
        Experiencia laboral
        {this.workForm()}
        {this.displayWorkButton()}
      </div>
    );
  }
}

export default App;
