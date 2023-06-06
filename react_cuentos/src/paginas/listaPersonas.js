import React from 'react';
import data from './datos.json';

function MyComponent() {
  return (
    <div>
      {data.personas.map((persona, index) => (
        <div key={index}>
          
          <div className="container">
            <h2>{persona.nombre}</h2>
            <p>Email: {persona.email}</p>
            <p>Contraseña: {persona.contrasena}</p>
            <p>Teléfono: {persona.telefono}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
