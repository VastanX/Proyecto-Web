const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const app = express();

app.use(cors());

const credentials = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datosusuarios',
};

app.get('/', (req, res) => {
  res.send('Hola desde tu primera ruta de la API');
});

app.get('/personas', (req, res) => {
  var connection = mysql.createConnection(credentials);
  connection.query('SELECT * FROM personas', (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(result);
    }
  });
  connection.end();
});

app.post('/crear', bodyParser.json(), (req, res) => {
  console.log('Valor de req.body:', req.body);
  var connection = mysql.createConnection(credentials);
  const { id, nombre, email, contrasena, telefono } = req.body;

  const saltRounds = 15;

  bcrypt.hash(contrasena, saltRounds, (error, hash) => {
    if (error) {
      console.error(error);
      res.status(500).send("Error al hashear la contraseña");
    } else {
      // Realiza la inserción en la base de datos
      connection.query(
        'INSERT INTO personas (id, nombre, email, contrasena, telefono) VALUES (?, ?, ?, ?, ?)',
        [id, nombre, email, hash, telefono],
        (error, results) => {
          if (error) {
            console.error(error);
            res.status(500).send('Error al insertar en la base de datos');
          } else {
            res.status(200).json({
              status: 'success',
              message: 'Datos insertados correctamente',
              data: results,
            });
          }
        }
      );
    }
  });
});


app.delete('/borrar/:id', (req, res) => {
  const { id } = req.params;
  var connection = mysql.createConnection(credentials);

  // Realiza la eliminación en la base de datos
  connection.query('DELETE FROM personas WHERE id = ?', [id], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error al eliminar en la base de datos');
    } else {
      res.status(200).json({
        status: 'success',
        message: 'Datos eliminados correctamente',
        data: results,
      });
    }
  });

  connection.end();
});

app.put('/actualizar/:id', bodyParser.json(), (req, res) => {
  const { id } = req.params;
  const { nombre, email, contrasena, telefono } = req.body;
  var connection = mysql.createConnection(credentials);

  // Realiza la actualización en la base de datos
  connection.query(
    'UPDATE personas SET nombre = ?, email = ?, contrasena = ?, telefono = ? WHERE id = ?',
    [nombre, email, contrasena, telefono, id],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al actualizar en la base de datos');
      } else {
        res.status(200).json({
          status: 'success',
          message: 'Datos actualizados correctamente',
          data: results,
        });
      }
    }
  );

  connection.end();
});

app.post('/verificar-login', bodyParser.json(), (req, res) => {
  const { nombre, contrasena } = req.body;
  const connection = mysql.createConnection(credentials);

  // Realiza la consulta a la base de datos
  connection.query(
    'SELECT * FROM personas WHERE nombre = ?',
    [nombre],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error al consultar la base de datos');
      } else {
        if (results.length > 0) {
          const hash = results[0].contrasena;

          bcrypt.compare(contrasena, hash, (error, isMatch) => {
            if (error) {
              console.error(error);
              res.status(500).send('Error al comparar contraseñas');
            } else {
              if (isMatch) {
                // Las contraseñas coinciden
                res.status(200).json({ success: true });
              } else {
                // Las contraseñas no coinciden
                res.status(200).json({ success: false });
              }
            }
          });
        } else {
          // No se encontró un usuario con el nombre proporcionado
          res.status(200).json({ success: false });
        }
      }
    }
  );

  connection.end();
});


app.listen(4000, () => console.log('Hola, soy el servidor'));
