import React from 'react';
import PropTypes from 'prop-types';

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
StudiesInfo.propTypes = {
  saveStudiesInfo: PropTypes.func.isRequired,
};
