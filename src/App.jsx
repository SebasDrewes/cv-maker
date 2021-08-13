import React, { useState } from 'react';
// import ReactToPrint from 'react-to-print';
import './App.css';
import uniqid from 'uniqid';
import { Link } from 'react-scroll';
import GeneralInfo from './components/GeneralInfo';
import StudiesInfo from './components/StudiesInfo';
import WorkInfo from './components/WorkInfo';
// import Preview from './components/Preview';

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
  });

  const [photo, setPhoto] = useState('');
  document.write = photo;
  const [showStudyInfo, setShowStudyInfo] = useState(false);

  const [studiesInfo, setStudiesInfo] = useState({
    institute: '',
    title: '',
    from: '',
    to: '',
    id: uniqid(),
  });

  const [studiesList, setStudiesList] = useState([]);

  const [showWorkInfo, setShowWorkInfo] = useState(false);

  const [workInfo, setWorkInfo] = useState({
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
    id: uniqid(),
  });

  const [workList, setWorkList] = useState([]);

  function saveGeneralInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  }

  function saveStudiesInfo(e) {
    e.preventDefault();
    const { target } = e;
    const { value } = target;
    const { name } = target;
    setStudiesInfo({
      ...studiesInfo,
      [name]: value,
    });
  }

  function imageUpload(e) {
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
      ...workInfo,
      [name]: value,
    });
  }

  function addStudy() {
    if (studiesList.length < 4) {
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
    if (workList.length < 4) {
      console.log(workInfo);
      setWorkInfo({
        position: '',
        company: '',
        city: '',
        from: '',
        to: '',
        id: uniqid(),
      });
      setShowWorkInfo(false);
      setWorkList(workList.concat(workInfo));
    }
  }

  function studyForm() {
    if (showStudyInfo) {
      return <StudiesInfo saveStudiesInfo={saveStudiesInfo} />;
    } return null;
  }

  function displayStudyForm() {
    if (showStudyInfo) {
      setShowStudyInfo(false);
    } else {
      setShowStudyInfo(true);
    }
  }

  function workForm() {
    console.log(showWorkInfo);
    if (showWorkInfo) {
      return <WorkInfo saveWorkInfo={saveWorkInfo} />;
    } return null;
  }

  function displayWorkForm() {
    console.log(showWorkInfo);
    if (showWorkInfo) {
      setShowWorkInfo(false);
    } else {
      setShowWorkInfo(true);
    }
  }

  function displayStudyButton() {
    if (studiesList.length > 3) {
      return null;
    } if (showStudyInfo) {
      return <button onClick={addStudy} type="button" className="guardar">Guardiar estudio</button>;
    } if (!showStudyInfo) {
      return <button onClick={displayStudyForm} type="button">Agregar Estudios</button>;
    } return null;
  }

  function displayWorkButton() {
    if (workList.length > 3) {
      return null;
    } if (showWorkInfo) {
      return <button onClick={addWork} type="button" className="guardar">Guardar Experiencia</button>;
    } if (!showWorkInfo) {
      return <button onClick={displayWorkForm} type="button">Agregar Experiencia</button>;
    } return null;
  }

  function removeStudy(id) {
    setStudiesList(
      studiesList.filter(((study) => study.id !== id)),
    );
  }

  function removeWork(id) {
    setWorkList(
      workList.filter(((work) => work.id !== id)),
    );
  }

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
          <button type="button" onClick={() => removeStudy(id)} className="borrar">Borrar Estudio</button>
        </div>,
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
          <button type="button" onClick={() => removeWork(id)} className="borrar">Borrar Experiencia</button>
        </div>,
      );
    }
    return works || null;
  }

  function loadExample(e) {
    e.preventDefault();

    setGeneralInfo({
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
    });
    setPhoto(`${process.env.PUBLIC_URL}/sebas.jpeg`);
    setShowStudyInfo(false);
    setStudiesInfo({
      institute: '',
      title: '',
      from: '',
      to: '',
      id: uniqid(),
    });
    setStudiesList([{
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
    ]);

    setShowWorkInfo(false);

    setWorkInfo({
      position: '',
      company: '',
      city: '',
      from: '',
      to: '',
      id: uniqid(),
    });

    setWorkList([{
      city: 'CABA',
      company: 'Aerolineas Argentinas',
      from: '2018',
      id: 'ks21j2sn',
      position: 'Auxiliar de Contact Center',
      to: 'Actual',
    },
    ]);
  }
  return (
    <div className="App">
      <h1 id="title">CV Maker</h1>
      <div className="container">
        <p className="subtitle">Informacion Personal</p>
        <GeneralInfo
          saveGeneralInfo={saveGeneralInfo}
          savePhoto={imageUpload}
          generalInfo={generalInfo}
        />
        <p className="subtitle">Experiencia laboral</p>
        {displayWorkList()}
        {workForm()}
        {displayWorkButton()}
        <p className="subtitle">Estudios</p>
        {studyList()}
        {studyForm()}
        {displayStudyButton()}
        {/* <ReactToPrint
          pageStyle="  @page { size: landscape; margin: 0; }"
          trigger={() => <button type="button" className="pdf">Descargar PDF</button>}
          content={() => this.componentRef}
        /> */}
        <Link
          to="bottom"
          spy
          smooth
          offset={-70}
          duration={500}
        >
          <button type="button" className="ejemplo" onClick={loadExample}>Cargar Ejemplo</button>

        </Link>
      </div>
      <h1 id="curriculum">CV Preview</h1>
      <div id="previewMainContainer">
        {/* <Preview allInfo={this.state} ref={(el) => (this.componentRef = el)} /> */}
      </div>
      <div id="bottom" />
    </div>
  );
};

export default App;
