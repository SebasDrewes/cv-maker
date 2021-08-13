import React from 'react';
import PropTypes from 'prop-types';

export default function GeneralInfo({ saveGeneralInfo, savePhoto, generalInfo }) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const {
    firstName, lastName, title, address, phoneNumber, email, description,
  } = generalInfo;
  return (
    <div>
      <form>
        <input type="text" name="firstName" placeholder="Nombre" onChange={saveGeneralInfo} value={firstName} />
        <input type="text" name="lastName" placeholder="Apellido" onChange={saveGeneralInfo} value={lastName} />
        <input type="text" name="title" placeholder="Titulo" onChange={saveGeneralInfo} value={title} />
        <button type="button" onClick={handleClick}>
          Agregar Foto
        </button>
        <input type="file" name="photo" placeholder="Foto" onChange={savePhoto} ref={hiddenFileInput} style={{ display: 'none' }} />
        <input type="text" name="address" placeholder="Direccion" onChange={saveGeneralInfo} value={address} />
        <input type="tel" name="phoneNumber" placeholder="Telefono" onChange={saveGeneralInfo} value={phoneNumber} />
        <input type="email" name="email" placeholder="Email" onChange={saveGeneralInfo} value={email} />
        <textarea type="text" name="description" placeholder="Descripcion" onChange={saveGeneralInfo} value={description} />
      </form>
    </div>
  );
}
GeneralInfo.propTypes = {
  saveGeneralInfo: PropTypes.func.isRequired,
  savePhoto: PropTypes.func.isRequired,
  generalInfo: PropTypes.objectOf(PropTypes.object()).isRequired,
};
