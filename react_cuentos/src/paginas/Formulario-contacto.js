import React from 'react';

class Formulario extends React.Component {
  state = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    descripcion: '',
    errors: {},
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { nombre, email, telefono, asunto, descripcion } = this.state;

    let errors = {};

    if (nombre.trim() === '') errors.nombre = 'Por favor, ingrese su nombre completo';

    if (email.trim() === '') {
      errors.email = 'Por favor, ingrese su correo de contacto';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Por favor, ingrese un correo electrónico válido';
    }

    if (telefono.trim() === '') {
      errors.telefono = 'Por favor, ingrese su teléfono de contacto';
    } else if (!/^\d{9}$/.test(telefono)) {
      errors.telefono = 'El teléfono de contacto debe contener 9 dígitos numéricos';
    }

    if (asunto.trim() === '') errors.asunto = 'Por favor, ingrese el asunto';

    if (descripcion.trim() === '') errors.descripcion = 'Por favor, ingrese la descripción';

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
     alert('Formulario válido. ¡Envío exitoso!');
    }
  };

  render() {
    const { nombre, email, telefono, asunto, descripcion, errors } = this.state;

    return (
      <div className="container">
        <form id="registro" name="registro" noValidate onSubmit={this.handleSubmit}>
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
              Correo de contacto
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
              Teléfono de contacto (+56)
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
          <div className="mb-3">
            <label htmlFor="asunto" className="form-label">
              Asunto
            </label>
            <input
              type="text"
              className="form-control"
              id="asunto"
              name="asunto"
              value={asunto}
              onChange={this.handleChange}
            />
            {errors.asunto && <div className="error">{errors.asunto}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">
              Descripción
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
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Formulario;
