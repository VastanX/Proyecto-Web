import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errors, setErrors] = useState({});

  const handleIngresar = async () => {
    const errors = {};

    if (nombre.trim() === '') {
      errors.nombreError = 'Por favor, ingresa tu nombre';
    }

    if (contrasena.trim() === '') {
      errors.contrasenaError = 'La contraseña es obligatoria';
    } else if (
      contrasena.length < 8 ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[^\w\s]).{8,}$/.test(
        contrasena
      )
    ) {
      errors.contrasenaError =
        'La contraseña debe contener al menos una minúscula, una mayúscula, un número, un carácter especial y un largo mínimo de 8 caracteres';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try {
        const response = await fetch('http://localhost:4000/verificar-login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ nombre, contrasena }),
        });

        const data = await response.json();

        if (data.success) {
          if (nombre === 'ADMIN' && contrasena === '365153Gg#') {
            const token = 'TOKEN_ADMIN'; // Genera un token único para el administrador
            localStorage.setItem('adminToken', token); // Almacena el token en el almacenamiento local
            alert('Inicio de sesión exitoso como administrador!');
          } else {
            alert('Inicio de sesión exitoso!');
          }
        } else {
          alert('Los datos de inicio de sesión no coinciden');
        }
      } catch (error) {
        console.error(error);
        alert('Ocurrió un error al comunicarse con el servidor');
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'contrasena') {
      setContrasena(value);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleIngresar();
    }
  };

  return (
    <div className="container">
      <form id="registro" name="registro">
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {errors.nombreError && (
            <span className="error-message">{errors.nombreError}</span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="contrasena" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {errors.contrasenaError && (
            <span className="error-message">{errors.contrasenaError}</span>
          )}
        </div>
        <button
          type="button"
          id="ingresar"
          name="ingresar"
          onClick={handleIngresar}
        >
          Ingresar
        </button>
        <Link to={'/recuperarClave'}>
          <button type="button" id="botonRecuperar" name="botonRecuperar">
            Recuperar clave
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Formulario;
