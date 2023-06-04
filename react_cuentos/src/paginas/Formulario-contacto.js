import React from 'react';

class Formulario extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
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
            <label htmlFor="email" className="form-label">Correo de contacto</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono de contacto (+56)</label>
            <input type="text" className="form-control" id="telefono" name="telefono" />
          </div>
          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">Asunto</label>
            <input type="text" className="form-control" id="asunto" name="asunto" />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripción</label>
            <input type="text" className="form-control" id="descripcion" name="descripcion" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
