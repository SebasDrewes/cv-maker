/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Preview({ allInfo }) {
  // def elementos general
  /* const {
    firstName, lastName, title, address,
    phoneNumber, email, description,
  } = allInfo.generalInfo;

  const { photo } = allInfo; */

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

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    // eslint-disable-next-line no-console
    <div>{displayStudiesList()}</div>
  );
}
