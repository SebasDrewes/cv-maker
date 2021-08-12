import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';
import './App.css';
import uniqid from 'uniqid';
import { Link } from 'react-scroll';
import GeneralInfo from './components/GeneralInfo';
import StudiesInfo from './components/StudiesInfo';
import WorkInfo from './components/WorkInfo';
import Preview from './components/Preview';

const App = (props) => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const [photo, setPhoto] = useState("");

  const [showStudyInfo, setShowStudyInfo] = useState(false);

  const [studiesInfo, setStudiesInfo] = useState({
    institute: '',
    title: '',
    from: '',
    to: '',
    id: uniqid(),
  });

  const [studiesList, setStudiesList] = useState([])

  const [showWorkInfo, setWorkInfo] = useState(false);

  const [workInfo, setShowWorkInfo] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
    id: uniqid(),
  });

  const [workList, setWorkList] = useState([]);

  /*
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
    };*/
    /*this.saveGeneralInfo = this.saveGeneralInfo.bind(this);
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
    this.loadExample = this.loadExample.bind(this);*/
  

  function saveGeneralInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    setGeneralInfo({
      generalInfo: {

        ...generalInfo,
        [name]: value,
      },
    });
  }

  function saveStudiesInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    setStudiesInfo({
      studiesInfo: {

        ...studiesInfo,
        [name]: value,
      },
    });
  }

  function imageUpload(e){
    if (e.target.files && e.target.files[0]) {
      const img = e.target.files[0];
      setPhoto(URL.createObjectURL(img));
    }
  }

  function saveWorkInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    setWorkInfo({
      workInfo: {

        ...workInfo,
        [name]: value,
      },
    });
  }

  function addStudy() {
    if (studiesList.length < 5) {
      setStudiesInfo({
          institute: '',
          title: '',
          from: '',
          to: '',
          id: uniqid(),
      });
      setShowStudyInfo(false);
      setStudiesList(studiesList.concat(studiesInfo));
    }
  }

  function addWork() {
    if (workList.length < 5) {
      setWorkInfo({
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        id: uniqid()
        });
      setWorkList(workList.concat(workInfo));
      setShowWorkInfo(false);
      };
    }

  function studyForm() {
    if (showStudyInfo) {
      return <StudiesInfo saveStudiesInfo={saveStudiesInfo} /> || null;
    }
  }

  function displayStudyForm() {
    if (showStudyInfo) {
      setShowStudyInfo(false);
    } else {
      setShowStudyInfo(true);
    }
  }

  function workForm() {
    if (showWorkInfo) { 
      return <WorkInfo saveWorkInfo={saveWorkInfo} /> || null; 
    }
  }

  function displayWorkForm() {
    if (showWorkInfo) {
      setShowWorkInfo(false);
    } else {
      setShowWorkInfo(true);
    }
  }

  function displayStudyButton() {
    if (showStudyInfo) {
      return <button onClick={addStudy} type="button" className="guardar">Guardiar estudio</button>;
    }
    return <button onClick={displayStudyForm} type="button">Agregar Estudios</button>;
  }

  function displayWorkButton() {
    if (showWorkInfo) {
      return <button onClick={addWork} type="button" className="guardar">Guardar Experiencia</button>;
    }
    return <button onClick={displayWorkForm} type="button">Agregar Experiencia</button>;
  }

  function removeStudy(id) {
    setStudiesList(
      studiesList.filter(((study) => study.id !== id))
    );
  };

  function removeWork(id) {
    setWorkList(
      workList.filter(((work) => work.id !== id))
    );
  };

  function studyList() {
    const studies = [];
    for (let i = 0; i < studiesList.length; i += 1) {
      const { id } = studiesList[i];
      studies.push(
        <div className="list" key={`div${id}`}>
          <p className="confirmedInput" key={`institute${id}`}>
            {studiesList[i].institute}
          </p>
          <p className="confirmedInput" key={`title${id}`}>
            {studiesList[i].title}
          </p>
          <p className="confirmedInput" key={`from${id}`}>
            {studiesList[i].from}
          </p>
          <p className="confirmedInput" key={`to${id}`}>
            {studiesList[i].to}
          </p>
          <button onClick={(e) => removeStudy(id)} className="borrar">Borrar Estudio</button>
        </div>
      );
    }
    return studies || null;
  }

  function displayWorkList() {
    const works = [];
    for (let i = 0; i < workList.length; i += 1) {
      const { id } = workList[i];
      works.push(
        <div className="list" key={`div${id}`}>
          <p className="confirmedInput" key={`position:${id}`}>
            {workList[i].position}
          </p>
          <p className="confirmedInput" key={`company${id}`}>
            {workList[i].company}
          </p>
          <p className="confirmedInput" key={`city${id}`}>
            {workList[i].city}
          </p>
          <p className="confirmedInput" key={`from${id}`}>
            {workList[i].from}
          </p>
          <p className="confirmedInput" key={`to${id}`}>
            {workList[i].to}
          </p>
          <button onClick={(e) => removeWork(id)} className="borrar">Borrar Experiencia</button>
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
          {displayWorkList()}
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
