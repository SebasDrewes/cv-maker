import React from 'react'

export default function StudiesInfo({saveStudiesInfo}) {
    return (
        <div>
            <form>
                <input type="text" name="institute" placeholder="Nombre del Instituto" onChange={saveStudiesInfo}></input>
                <input type="text" name="title" placeholder="Titulo" onChange={saveStudiesInfo}></input>
                <input type="text" name="from" placeholder="Desde"onChange={saveStudiesInfo}></input>
                <input type="text" name="to" placeholder="Hasta" onChange={saveStudiesInfo}></input>
            </form>
        </div>
    )
}
