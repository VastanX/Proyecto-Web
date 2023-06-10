import React from 'react';
import { Link } from 'react-router-dom';
class Formulario extends React.Component {
  state = {
    nombre: '',
    contrasena: '',
    errors: {},
  };

  handleIngresar = () => {
    // Validar el formulario antes de manejar el evento de ingreso
    const { nombre, contrasena } = this.state;
    const errors = {};

    if (nombre.trim() === '') {
      errors.nombreError = 'Por favor, ingresa tu nombre';
    }

    if (contrasena.trim() === '') {
      errors.contrasenaError = 'La contraseña es obligatoria';
    } else if (contrasena.length < 6 || !/^\d+$/.test(contrasena)) {
      errors.contrasenaError = 'La contraseña debe tener al menos 6 caracteres y contener solo números';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      alert('Inicio de sesión exitoso!');
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleIngresar();
    }
  };

  render() {
    const { nombre, contrasena, errors } = this.state;

    return (
      <div className="container">
        <form id="registro" name="registro">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
            />
            {errors.nombreError && <span className="error-message">{errors.nombreError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="contrasena"
              name="contrasena"
              value={contrasena}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
            />
            {errors.contrasenaError && <span className="error-message">{errors.contrasenaError}</span>}
          </div>
          <button type="button" id="ingresar" name="ingresar" onClick={this.handleIngresar}>Ingresar</button>
          <Link to={"/recuperarClave"}><button type="button" id="botonRecuperar" name="botonRecuperar">Recuperar clave</button></Link>
        </form>
      </div>
    );
  }
}

export default Formulario;
