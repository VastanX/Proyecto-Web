import React, { useEffect, useState } from 'react';
import Cabecera from './Cabecera';

function MyComponent() {
  const [personas, setPersonas] = useState([]);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    telefono: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:4000/personas');
        const data = await response.json();
        setPersonas(data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/crear', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Solicitud POST exitosa');
        // Actualizar la lista de personas haciendo una nueva solicitud GET
        const getResponse = await fetch('http://localhost:4000/personas');
        const newData = await getResponse.json();
        setPersonas(newData);
      } else {
        console.error('Error al realizar la solicitud POST');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud POST:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/borrar/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Solicitud DELETE exitosa');
        // Actualiza la lista de personas después de eliminar
        const updatedPersonas = personas.filter((persona) => persona.id !== id);
        setPersonas(updatedPersonas);
      } else {
        console.error('Error al realizar la solicitud DELETE');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud DELETE:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/actualizar/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Solicitud PUT exitosa');
        // Actualiza la lista de personas haciendo una nueva solicitud GET
        const getResponse = await fetch('http://localhost:4000/personas');
        const newData = await getResponse.json();
        setPersonas(newData);
      } else {
        console.error('Error al realizar la solicitud PUT');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud PUT:', error);
    }
  };

  return (
    <div>
      <div className='centrado'>
      <h1 style={{  color: "white" }}> Administrar usuarios</h1>
      <p style={{ fontSize: "20px", color: "black", backgroundColor: "wheat"}}> Para agregar usuarios: Rellene el formulario y presione agregar.</p>
      <p style={{ fontSize: "20px", color: "black", backgroundColor: "wheat"}}> Para modificar usuarios: Rellene el formulario y presione actualizar bajo el usuario deseado.</p>
      </div>
      {<Cabecera />}
      <div style={{ display: 'list-item', padding: '100px' }}>
      {personas.map((persona, index) => (
        <div key={index} style={{ padding: '10px' }}>
          <div className="container" style={{ backgroundColor: 'wheat', border: "dotted", borderRadius: "10px"}}>
            <h2 style={{ color: 'black' }}>{persona.nombre}</h2>
            <p style={{ color: 'black' }}>Email: {persona.email}</p>
            <p style={{ color: 'black' }}>Contraseña: {persona.contrasena}</p>
            <p style={{ color: 'black' }}>Teléfono: {persona.telefono}</p>
            <button onClick={() => handleDelete(persona.id)}>Eliminar</button>
            <button onClick={() => handleUpdate(persona.id)}>Actualizar</button>
          </div>
        </div>
      ))}
      </div>
      <form onSubmit={handleSubmit} className='centrado'>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={formData.contrasena}
          onChange={handleChange}
          required
          minLength={8}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$"
          title="La contraseña debe contener al menos una minúscula, una mayúscula, un número y un carácter especial, con un largo mínimo de 8 caracteres"
        />



        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={handleChange}
          required
          minLength={9}
          maxLength={9}
          pattern="[0-9]+"
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default MyComponent;
