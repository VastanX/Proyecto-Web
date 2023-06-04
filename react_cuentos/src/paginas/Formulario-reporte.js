import React from 'react';

class FormularioReporte extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario de reporte de problemas
  };

  render() {
    return (
      <div className="container">
        <form id="registro" name="registro" noValidate onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="problema" className="form-label">¿Dónde está el problema?</label>
            <input type="text" className="form-control" id="problema" name="problema" />
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Cuéntanos los detalles</label>
            <input type="text" className="form-control" id="descripcion" name="descripcion" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default FormularioReporte;
