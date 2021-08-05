/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './App.css';
import uniqid from 'uniqid';
import GeneralInfo from './components/GeneralInfo';
import StudiesInfo from './components/StudiesInfo';
import WorkInfo from './components/WorkInfo';
import Preview from './components/Preview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: '',
      },
      photo: '',
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
        from: '',
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
    this.removeWork = this.removeWork.bind(this);
    this.removeStudy = this.removeStudy.bind(this);
    this.imageUpload = this.imageUpload.bind(this);
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

  imageUpload(e) {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      this.setState({
        photo: URL.createObjectURL(img),
      });
    }
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
      return <button onClick={this.addStudy} type="button">Guardiar estudio</button>;
    }
    return <button onClick={this.displayStudyForm} type="button">Agregar Estudios</button>;
  }

  displayWorkButton() {
    if (this.state.showWorkInfo) {
      return <button onClick={this.addWork} type="button">Guardar Experiencia</button>;
    }
    return <button onClick={this.displayWorkForm} type="button">Agregar Experiencia</button>;
  }

  removeStudy(id) {
    this.setState({
      studiesList: this.state.studiesList.filter(((study) => study.id !== id)),
    });
  }

  removeWork(id) {
    this.setState({
      workList: this.state.workList.filter(((work) => work.id !== id)),
    });
  }

  studyList() {
    const studies = [];
    for (let i = 0; i < this.state.studiesList.length; i += 1) {
      const { id } = this.state.studiesList[i];
      studies.push(
        <div className="list" key={`div${id}`}>
          <p key={`institute${id}`}>
            Instituto:
            {' '}
            {this.state.studiesList[i].institute}
          </p>
          <p key={`title${id}`}>
            Titulo:
            {' '}
            {this.state.studiesList[i].title}
          </p>
          <p key={`from${id}`}>
            Desde:
            {' '}
            {this.state.studiesList[i].from}
          </p>
          <p key={`to${id}`}>
            Hasta:
            {' '}
            {this.state.studiesList[i].to}
          </p>
          <button onClick={(e) => this.removeStudy(id)}>Borrar Estudio</button>
        </div>,
      );
    }
    return studies || null;
  }

  workList() {
    const works = [];
    for (let i = 0; i < this.state.workList.length; i += 1) {
      const { id } = this.state.workList[i];
      works.push(
        <div className="list" key={`div${id}`}>
          <p key={`position:${id}`}>
            Posicion:
            {' '}
            {this.state.workList[i].position}
          </p>
          <p key={`company${id}`}>
            Compañía:
            {' '}
            {this.state.workList[i].company}
          </p>
          <p key={`city${id}`}>
            Ciudad:
            {' '}
            {this.state.workList[i].city}
          </p>
          <p key={`from${id}`}>
            Desde:
            {' '}
            {this.state.workList[i].from}
          </p>
          <p key={`to${id}`}>
            Hasta:
            {' '}
            {this.state.workList[i].to}
          </p>
          <button onClick={(e) => this.removeWork(id)}>Borrar Experiencia</button>
        </div>,
      );
    }
    return works || null;
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">CV Maker</h1>
        <div className="container">
          <p className="subtitle">Informacion Personal</p>
          <GeneralInfo saveGeneralInfo={this.saveGeneralInfo} savePhoto={this.imageUpload} />
          <p className="subtitle">Estudios</p>
          {this.studyList()}
          {this.studyForm()}
          {this.displayStudyButton()}
          <p className="subtitle">Experiencia laboral</p>
          {this.workList()}
          {this.workForm()}
          {this.displayWorkButton()}
          <Preview allInfo={this.state} />
        </div>
      </div>
    );
  }
}

export default App;
