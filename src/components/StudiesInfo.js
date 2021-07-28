import React from 'react'

export default function StudiesInfo(props) {
    console.log(props.id)
    return (
        <div>
            <form>
                <input type="text" name="institute" placeholder="Nombre del Instituto" onChange={(e) => props.saveStudiesInfo(e, props.id)}></input>
                <input type="text" name="title" placeholder="Titulo" onChange={props.saveStudiesInfo}></input>
                <input type="text" name="from" placeholder="Desde"onChange={props.saveStudiesInfo}></input>
                <input type="text" name="to" placeholder="Hasta" onChange={props.saveStudiesInfo}></input>
            </form>
        </div>
    )
}
