import React from 'react';
import { Link } from 'react-router-dom';
import Cabecera from './Cabecera';

class RecuperarClave extends React.Component {
  state = {
    nombre: '',
    email: '',
    telefono: '',
    errors: {
      nombre: '',
      email: '',
      telefono: '',
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, email, telefono } = this.state;

    let errors = {};

    // Validar el campo de Nombre completo
    if (nombre.trim() === '') {
      errors.nombre = 'Por favor, ingrese su nombre completo';
    }

    // Validar el campo de Correo electrónico
    if (email.trim() === '') {
      errors.email = 'Por favor, ingrese su correo electrónico';
    }

    // Validar el campo de Teléfono
    if (telefono.trim() === '') {
      errors.telefono = 'Por favor, ingrese su número de teléfono';
    } else if (!/^\d{9}$/.test(telefono)) {
      errors.telefono = 'El número de teléfono debe contener 9 dígitos numéricos';
    }

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
    } else {
      // Realizar acción de envío del formulario
      alert('Se enviara un correo electrónico a su dirección');
    }
  };

  render() {
    const { nombre, email, telefono, errors } = this.state;

    return (
      <div>
        {/* cabecera */}
        {<Cabecera />}

        {/* formulario */}
        <form id="registro" name="registro" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={this.handleChange}
            />
            {errors.nombre && <div className="error">{errors.nombre}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              className="form-control"
              id="telefono"
              name="telefono"
              value={telefono}
              onChange={this.handleChange}
            />
            {errors.telefono && <div className="error">{errors.telefono}</div>}
          </div>
          <button type="submit" id="prueba">
            Enviar
          </button>
        </form>

        {/* footer */}
        <footer>
          <a href="reporte.html">
            <button style={{ color: 'crimson' }}>Reportar error</button>
          </a>
        </footer>

        <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.5/jquery.validate.min.js" crossorigin="anonymous"></script>
        <script src="js-jquery/recuperar.js"></script>
      </div>
    );
  }
}

export default RecuperarClave;
