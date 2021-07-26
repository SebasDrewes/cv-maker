import React from 'react'

export default function GeneralInfo({saveGeneralInfo}) {
    return (
        <div>
            <form>
                <input type="text" name="firstName" placeholder="Nombre" onChange={saveGeneralInfo}></input>
                <input type="text" name="lastName" placeholder="Apellido" onChange={saveGeneralInfo}></input>
                <input type="text" name="title" placeholder="Titulo" onChange={saveGeneralInfo}></input>
                <input type="file" name="photo" placeholder="Foto"></input>
                <input type="text" name="address" placeholder="Direccion" onChange={saveGeneralInfo}></input>
                <input type="tel" name="phoneNumber" placeholder="Telefono" onChange={saveGeneralInfo}></input>
                <input type="email" name="email" placeholder="Email" onChange={saveGeneralInfo}></input>
                <input type="text" name="description" placeholder="Descripcion" onChange={saveGeneralInfo}></input>
            </form>
        </div>
    )
}
