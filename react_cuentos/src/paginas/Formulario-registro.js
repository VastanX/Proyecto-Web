import React from 'react';

class FormularioRegistro extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario
  };

  render() {
    return (
      <div className="container">
        <form id="registro" name="registro" noValidate onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre completo</label>
            <input type="text" className="form-control" id="nombre" name="nombre" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contrasena" name="contrasena" />
          </div>
          <div className="mb-3">
            <label htmlFor="recontrasena" className="form-label">Confirmación de la contraseña</label>
            <input type="password" className="form-control" id="recontrasena" name="recontrasena" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono de contacto</label>
            <input type="text" className="form-control" id="telefono" name="telefono" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default FormularioRegistro;
