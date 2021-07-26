import React from 'react'

export default function GeneralInfo() {
    return (
        <div>
            <form onSubmit>
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellido"></input>
                <input type="text" placeholder="Titulo"></input>
                <input type="file" placeholder="Foto"></input>
                <input type="text" placeholder="Direccion"></input>
                <input type="tel" placeholder="Telefono"></input>
                <input type="email" placeholder="Email"></input>
                <input type="text" placeholder="Descripcion"></input>
            </form>
        </div>
    )
}
