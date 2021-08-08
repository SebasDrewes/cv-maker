import React from 'react';
/* eslint-disable */
export default function GeneralInfo({ saveGeneralInfo, savePhoto, stateInfo }) {
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const {
    firstName, lastName, title, address, phoneNumber, email, description,
  } = stateInfo.generalInfo;
  return (
    // eslint-disable-next-line react/jsx-filename-extension
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
