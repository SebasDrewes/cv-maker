import React/* , { useState } */from 'react';
import PropTypes from 'prop-types';
import './Preview.css';

const Preview = ({
  generalInfo, photo, studiesList, workList,
}) => {
  // def elementos general
  const {
    firstName, lastName, title, address,
    phoneNumber, email, description,
  } = generalInfo;

  if (photo === '') {
    // eslint-disable-next-line no-param-reassign
    photo = `${process.env.PUBLIC_URL}/emptyAvatar.png`;
  }

  function displayStudiesList() {
    const studies = [];
    for (let i = 0; i < studiesList.length; i += 1) {
      const { id } = studiesList[i];
      studies.push(
        <div key={`divDisplay${id}`}>
          <p key={`titleDisplay${id}`} className="contentBold">
            {studiesList[i].title}
          </p>
          <p key={`instituteDisplay${id}`} className="content">
            {studiesList[i].institute}
          </p>
          <p key={`fromDisplay${id}`} className="content">
            {studiesList[i].from}
            {' - '}
            {studiesList[i].to}
          </p>
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
        <div key={`divDisplay${id}`}>
          <p key={`positionDisplay${id}`} className="contentBold">
            {workList[i].position}
          </p>
          <p key={`companyDisplay${id}`} className="content">
            {workList[i].company}
            {', '}
            {workList[i].city}
          </p>
          <p key={`fromDisplay${id}`} className="content">
            {workList[i].from}
            {' - '}
            {workList[i].to}
          </p>
        </div>,
      );
    }
    return works || null;
  }
  return (
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
        <p className="content">
          {address}
        </p>

        <p className="previewSubtitle">
          Celular
        </p>
        <p className="content">
          {phoneNumber}
        </p>
        <p className="previewSubtitle">
          Email
        </p>
        <p className="content">
          {email}
        </p>
      </div>
      <div id="previewDescription">
        <p className="previewSubtitle">
          Descripcion
        </p>
        <hr />
        <p className="content">{description}</p>
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
};
Preview.propTypes = {
  photo: PropTypes.string.isRequired,
  workList: PropTypes.objectOf(PropTypes.object()).isRequired,
  studiesList: PropTypes.objectOf(PropTypes.object()).isRequired,
  generalInfo: PropTypes.objectOf(PropTypes.object()).isRequired,
};

export default Preview;
