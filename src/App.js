/* eslint-disable react/no-unused-state */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactToPrint from 'react-to-print';
import './App.css';
import uniqid from 'uniqid';
import { Link } from 'react-scroll';
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
    this.loadExample = this.loadExample.bind(this);
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
  }

  imageUpload(e) {
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      this.setState({
        photo: URL.createObjectURL(img),
      });
    }
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
  }

  addStudy() {
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
      return <button onClick={this.addStudy} type="button" className="guardar">Guardiar estudio</button>;
    }
    return <button onClick={this.displayStudyForm} type="button">Agregar Estudios</button>;
  }

  displayWorkButton() {
    if (this.state.showWorkInfo) {
      return <button onClick={this.addWork} type="button" className="guardar">Guardar Experiencia</button>;
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
          <p className="confirmedInput" key={`institute${id}`}>
            {this.state.studiesList[i].institute}
          </p>
          <p className="confirmedInput" key={`title${id}`}>
            {this.state.studiesList[i].title}
          </p>
          <p className="confirmedInput" key={`from${id}`}>
            {this.state.studiesList[i].from}
          </p>
          <p className="confirmedInput" key={`to${id}`}>
            {this.state.studiesList[i].to}
          </p>
          <button onClick={(e) => this.removeStudy(id)} className="borrar">Borrar Estudio</button>
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
          <p className="confirmedInput" key={`position:${id}`}>
            {this.state.workList[i].position}
          </p>
          <p className="confirmedInput" key={`company${id}`}>
            {this.state.workList[i].company}
          </p>
          <p className="confirmedInput" key={`city${id}`}>
            {this.state.workList[i].city}
          </p>
          <p className="confirmedInput" key={`from${id}`}>
            {this.state.workList[i].from}
          </p>
          <p className="confirmedInput" key={`to${id}`}>
            {this.state.workList[i].to}
          </p>
          <button onClick={(e) => this.removeWork(id)} className="borrar">Borrar Experiencia</button>
        </div>,
      );
    }
    return works || null;
  }

  loadExample(e) {
    e.preventDefault();

    this.setState({
      generalInfo: {
        firstName: 'Sebastián',
        lastName: 'Drewes',
        title: 'Front End Developer',
        address: 'Buenos Aires, CABA',
        phoneNumber: '1123456789',
        email: 'sebas.drewes@gmail.com',
        description: `Desarrollador web con enfoque en Front End, competente en HTML5, CSS3 y JavaScript.

Constantemente estoy en la búsqueda de oportunidades para aprender conceptos nuevos y mejorar mis habilidades.
Me interesa poder trabajar en una organización que me permita poder poner en práctica todo mi conocimiento y experiencia, también crecer profesionalmente, haciendo foco en el trabajo en equipo y resolución de problemas.
        
Podes ver mis proyectos en: https://github.com/SebasDrewes`,
      },
      photo: `${process.env.PUBLIC_URL}/sebas.jpeg`,
      showStudyInfo: false,

      studiesInfo: {
        institute: '',
        title: '',
        from: '',
        to: '',
        id: uniqid(),
      },

      studiesList: [{
        from: '2021',
        id: 'ks21kjug',
        institute: 'The Odin Project',
        title: 'Fullstack Developer',
        to: 'Actual',
      },
      {
        from: '2016',
        id: 'ks21l2q3',
        institute: 'ASIMRA',
        title: 'Tecnico en gestion ambiental',
        to: '2019',
      },
      ],

      showWorkInfo: false,

      workInfo: {
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        id: uniqid(),
      },

      workList: [{
        city: 'CABA',
        company: 'Aerolineas Argentinas',
        from: '2018',
        id: 'ks21j2sn',
        position: 'Auxiliar de Contact Center',
        to: 'Actual',
      }],
    });
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">CV Maker</h1>
        <div className="container">
          <p className="subtitle">Informacion Personal</p>
          <GeneralInfo
            saveGeneralInfo={this.saveGeneralInfo}
            savePhoto={this.imageUpload}
            stateInfo={this.state}
          />
          <p className="subtitle">Experiencia laboral</p>
          {this.workList()}
          {this.workForm()}
          {this.displayWorkButton()}
          <p className="subtitle">Estudios</p>
          {this.studyList()}
          {this.studyForm()}
          {this.displayStudyButton()}
          <ReactToPrint
            pageStyle="  @page { size: landscape; margin: 0; }"
            trigger={() => <button type="button" className="pdf">Descargar PDF</button>}
            content={() => this.componentRef}
          />
          <Link
            to="bottom"
            spy
            smooth
            offset={-70}
            duration={500}
          >
            <button type="button" className="ejemplo" onClick={this.loadExample}>Cargar Ejemplo</button>

          </Link>
        </div>
        <h1 id="curriculum">CV Preview</h1>
        <div id="previewMainContainer">
          <Preview allInfo={this.state} ref={(el) => (this.componentRef = el)} />
        </div>
        <div id="bottom" />
      </div>
    );
  }
}

export default App;
