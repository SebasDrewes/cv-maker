/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Preview({ allInfo }) {
  // def elementos general
  const {
    firstName, lastName, title, address,
    phoneNumber, email, description,
  } = allInfo.generalInfo;

  const { photo } = allInfo;

  function displayStudiesList() {
    const studies = [];
    for (let i = 0; i < allInfo.studiesList.length; i += 1) {
      const { id } = allInfo.studiesList[i];
      studies.push(
        <div className="list" key={`divDisplay${id}`}>
          <p key={`instituteDisplay${id}`}>
            {allInfo.studiesList[i].institute}
          </p>
          <p key={`titleDisplay${id}`}>
            Titulo:
            {' '}
            {allInfo.studiesList[i].title}
          </p>
          <p key={`fromDisplay${id}`}>
            {allInfo.studiesList[i].from}
            -
          </p>
          <p key={`toDisplay${id}`}>
            {allInfo.studiesList[i].to}
          </p>
        </div>,
      );
    }
    return studies || null;
  }
  function displayWorkList() {
    const works = [];
    for (let i = 0; i < allInfo.workList.length; i += 1) {
      const { id } = allInfo.workList[i];
      works.push(
        <div className="list" key={`divDisplay${id}`}>
          <p key={`positionDisplay${id}`}>
            {allInfo.workList[i].position}
          </p>
          <p key={`companyDisplay${id}`}>
            {allInfo.workList[i].company}
          </p>
          <p key={`cityDisplay${id}`}>
            ,
            {' '}
            {allInfo.workList[i].city}
          </p>
          <p key={`fromDisplay${id}`}>
            {allInfo.workList[i].from}
            -
          </p>
          <p key={`toDisplay${id}`}>
            Hasta:
            {' '}
            {allInfo.workList[i].to}
          </p>
        </div>,
      );
    }
    return works || null;
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line no-console
    <div>
      <div id="previewMain">
        <p id="mainFullName">
          {firstName}
          {' '}
          {lastName}
        </p>
        <p id="mainTitle">
          {title}
        </p>
      </div>
      <div id="previewContact">
        <img src={photo} alt="face" />
        <p className="previewSubtitle">
          Detalles Personales
        </p>
        <hr />
        <p id="previewAddress">
          Direccion
          {address}
        </p>
        <p id="previewPhone">
          Celular
          {phoneNumber}
        </p>
        <p id="previewEmail">
          Email
          {email}
        </p>
      </div>
      <div id="previewDescription">
        <p className="previewSubtitle">
          Descripcion
        </p>
        <hr />
        <p id="mainDescription">{description}</p>
      </div>
      <div id="previewExperience">
        <p className="previewSubtitle">
          Experiencia
        </p>
        <hr />
        {displayWorkList()}
      </div>
      <div id="previewEducation">
        <p className="previewSubtitle">
          Educacion
        </p>
        <hr />
        {displayStudiesList()}
      </div>
    </div>
  );
}
