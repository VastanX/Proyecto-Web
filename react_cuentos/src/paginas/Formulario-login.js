import React from 'react';

class Formulario extends React.Component {
  handleIngresar = () => {
    // Lógica para manejar el evento de ingreso
  };

  handleRecuperarClave = () => {
    // Lógica para manejar el evento de recuperar clave
  };

  render() {
    return (
      <div className="container">
        <form id="registro" name="registro">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" name="nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contrasena" name="contrasena" />
          </div>
          <button type="button" id="ingresar" name="ingresar" onClick={this.handleIngresar}>Ingresar</button>
          <button type="button" id="botonRecuperar" name="botonRecuperar" onClick={this.handleRecuperarClave}>Recuperar clave</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
