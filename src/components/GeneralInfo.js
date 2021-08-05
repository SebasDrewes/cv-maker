import React from 'react';

// eslint-disable-next-line react/prop-types
export default function GeneralInfo({ saveGeneralInfo, savePhoto }) {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <form>
        <input type="text" name="firstName" placeholder="Nombre" onChange={saveGeneralInfo} />
        <input type="text" name="lastName" placeholder="Apellido" onChange={saveGeneralInfo} />
        <input type="text" name="title" placeholder="Titulo" onChange={saveGeneralInfo} />
        <input type="file" name="photo" placeholder="Foto" onChange={savePhoto} />
        <input type="text" name="address" placeholder="Direccion" onChange={saveGeneralInfo} />
        <input type="tel" name="phoneNumber" placeholder="Telefono" onChange={saveGeneralInfo} />
        <input type="email" name="email" placeholder="Email" onChange={saveGeneralInfo} />
        <input type="text" name="description" placeholder="Descripcion" onChange={saveGeneralInfo} />
      </form>
    </div>
  );
}
