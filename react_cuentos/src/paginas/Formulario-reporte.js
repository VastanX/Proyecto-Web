import React from 'react';

class FormularioReporte extends React.Component {
  state = {
    problema: '',
    descripcion: '',
    errors: {},
    submitSuccess: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { problema, descripcion } = this.state;

    let errors = {};

    // Validar el campo de "¿Dónde está el problema?"
    if (problema.trim() === '') {
      errors.problema = 'Por favor, indique dónde está el problema';
    }

    // Validar el campo de "Cuéntanos los detalles"
    if (descripcion.trim() === '') {
      errors.descripcion = 'Por favor, cuéntanos los detalles del problema';
    }

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      // Realizar acción de envío del formulario
      this.setState({ submitSuccess: true });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  render() {
    const { problema, descripcion, errors, submitSuccess } = this.state;

    return (
      <div className="container">
        <form id="registro" name="registro" noValidate onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="problema" className="form-label">
              ¿Dónde está el problema?
            </label>
            <input
              type="text"
              className="form-control"
              id="problema"
              name="problema"
              value={problema}
              onChange={this.handleChange}
            />
            {errors.problema && <div className="error">{errors.problema}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Cuéntanos los detalles
            </label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              name="descripcion"
              value={descripcion}
              onChange={this.handleChange}
            />
            {errors.descripcion && <div className="error">{errors.descripcion}</div>}
          </div>
          {submitSuccess && (
            alert("Envío de reporte exitoso!")
          )}
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default FormularioReporte;
