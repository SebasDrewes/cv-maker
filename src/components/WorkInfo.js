import React from 'react';

export default function WorkInfo({ saveWorkInfo }) {
  return (

    <div>
      <form>
        <input type="text" name="position" placeholder="Posicion" onChange={saveWorkInfo} />
        <input type="text" name="company" placeholder="Compañía" onChange={saveWorkInfo} />
        <input type="text" name="city" placeholder="Ciudad" onChange={saveWorkInfo} />
        <input type="text" name="from" placeholder="Desde" onChange={saveWorkInfo} />
        <input type="text" name="to" placeholder="Hasta" onChange={saveWorkInfo} />
      </form>
    </div>
  );
}
