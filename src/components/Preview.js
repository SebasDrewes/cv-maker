/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
// eslint-disable-next-line import/no-self-import
import './Preview.css';
// eslint-disable-next-line react/prop-types
export default function Preview({ allInfo }) {
  // def elementos general
  const {
    firstName, lastName, title, address,
    phoneNumber, email, description,
  } = allInfo.generalInfo;

  let { photo } = allInfo;
  if (photo === '') {
    photo = `${process.env.PUBLIC_URL}/emptyAvatar.png`;
  }

  function displayStudiesList() {
    const studies = [];
    for (let i = 0; i < allInfo.studiesList.length; i += 1) {
      const { id } = allInfo.studiesList[i];
      studies.push(
        <div key={`divDisplay${id}`}>
          <p key={`instituteDisplay${id}`}>
            {allInfo.studiesList[i].institute}
          </p>
          <p key={`titleDisplay${id}`}>
            {allInfo.studiesList[i].title}
          </p>
          <p key={`fromDisplay${id}`}>
            {allInfo.studiesList[i].from}
            {' - '}
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
        <div key={`divDisplay${id}`}>
          <p key={`positionDisplay${id}`}>
            {allInfo.workList[i].position}
          </p>
          <p key={`companyDisplay${id}`}>
            {allInfo.workList[i].company}
            {', '}
            {allInfo.workList[i].city}
          </p>
          <p key={`fromDisplay${id}`}>
            {allInfo.workList[i].from}
            {' - '}
            {allInfo.workList[i].to}
          </p>
          <hr />
        </div>,
      );
    }
    return works || null;
  }
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line no-console
    <div id="previewContainer">
      <div id="previewMain">
        <p id="previewName">
          {firstName}
          {' '}
          {lastName}
        </p>
        <p id="previewTitle">
          {title}
        </p>
      </div>
      <div id="previewContact">
        <div id="flex">
          <img src={photo} alt="avatar" id="avatar" />
        </div>
        <p className="previewSubtitle">
          Detalles Personales
        </p>
        <hr />
        <p className="previewSubtitle">
          Direccion
        </p>
        <p>
          {address}
        </p>

        <p className="previewSubtitle">
          Celular
        </p>
        <p>
          {phoneNumber}
        </p>
        <p className="previewSubtitle">
          Email
        </p>
        <p>
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
