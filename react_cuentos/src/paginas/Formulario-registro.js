import React, { Component } from 'react';

class FormularioRegistro extends Component {
  state = {
    nombre: '',
    email: '',
    contrasena: '',
    recontrasena: '',
    telefono: '',
    errors: {},
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { nombre, email, contrasena, recontrasena, telefono } = this.state;
    const errors = {};

    if (nombre.trim() === '') {
      errors.nombreError = 'Por favor, ingresa tu nombre';
    }

    if (!this.validateField(email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.emailError = 'Por favor, ingresa un correo electrónico válido';
    }

    if (!this.validateField(contrasena, /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[^\w\s]).{8,}$/)) {
      errors.contrasenaError =
        'La contraseña debe contener al menos una minúscula, una mayúscula, un número, un carácter especial y un largo mínimo de 8 caracteres';
    }

    if (contrasena !== recontrasena) {
      errors.recontrasenaError = 'Las contraseñas no coinciden';
    }

    if (!this.validateField(telefono, /^\d{9}$/)) {
      errors.telefonoError = 'Por favor, ingresa un número de teléfono válido (9 dígitos)';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      try {
        const response = await fetch('http://localhost:4000/crear', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nombre,
            email,
            contrasena,
            telefono,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Registro exitoso! (Datos añadidos a la BASE DE DATOS)');
          // Restablecer el formulario
          this.setState({
            nombre: '',
            email: '',
            contrasena: '',
            recontrasena: '',
            telefono: '',
            errors: {},
          });
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
        alert('Error al intentar registrarse');
      }
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  validateField = (value, regex) => {
    return regex.test(value);
  };

  render() {
    const { nombre, email, contrasena, recontrasena, telefono, errors } = this.state;

    return (
      <div className="container">
        <form id="registro" name="registro" noValidate onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre completo</label>
            <input type="text" className="form-control" id="nombre" name="nombre" value={nombre} onChange={this.handleInputChange} />
            {errors.nombreError && <span className="error-message">{errors.nombreError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" name="email" value={email} onChange={this.handleInputChange} />
            {errors.emailError && <span className="error-message">{errors.emailError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="contrasena" name="contrasena" value={contrasena} onChange={this.handleInputChange} />
            {errors.contrasenaError && <span className="error-message">{errors.contrasenaError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="recontrasena" className="form-label">Confirmación de la contraseña</label>
            <input type="password" className="form-control" id="recontrasena" name="recontrasena" value={recontrasena} onChange={this.handleInputChange} />
            {errors.recontrasenaError && <span className="error-message">{errors.recontrasenaError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono de contacto</label>
            <input type="text" className="form-control" id="telefono" name="telefono" value={telefono} onChange={this.handleInputChange} />
            {errors.telefonoError && <span className="error-message">{errors.telefonoError}</span>}
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default FormularioRegistro;
