import React from 'react';

/* eslint-disable */
export default function StudiesInfo({ saveStudiesInfo }) {
  return (

    <div>
      <form>
        <input type="text" name="institute" placeholder="Nombre del Instituto" onChange={saveStudiesInfo} />
        <input type="text" name="title" placeholder="Titulo" onChange={saveStudiesInfo} />
        <input type="text" name="from" placeholder="Desde" onChange={saveStudiesInfo} />
        <input type="text" name="to" placeholder="Hasta" onChange={saveStudiesInfo} />
      </form>
    </div>
  );
}
