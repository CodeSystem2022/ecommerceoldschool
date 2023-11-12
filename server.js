import express from 'express';
import sqlite3 from 'sqlite3';
import bodyParser from 'body-parser';
import { join } from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcrypt';

const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'login.html'));
});

// Definir la ruta para limpiar la base de datos
app.get('/limpiar-datos', (req, res) => {
  const db = new sqlite3.Database('tu_basedatos.db');

  // Borra todos los registros de la tabla 'usuarios'
  const sql = 'DELETE FROM usuarios';
  db.run(sql, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error al limpiar usuarios');
    } else {
      console.log('Todos los usuarios eliminados correctamente');
      res.status(200).send('Usuarios eliminados correctamente');
    }
  });

  // Cierra la conexión a la base de datos
  db.close();
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});





















const db = new sqlite3.Database('tu_basedatos.db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Crea la tabla de usuarios si no existe
db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)');

app.post('/registro', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Genera el hash de la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(password, 10); // El segundo argumento es el costo del hashing

    // Inserta el usuario en la base de datos con la contraseña hasheada
    const sql = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';
    db.run(sql, [username, hashedPassword], (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error al registrar al usuario');
      } else {
        res.status(200).send('Usuario registrado exitosamente');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al registrar al usuario');
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM usuarios WHERE username = ?';
  db.get(sql, [username], async (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error en el servidor');
    } else if (row) {
      const isPasswordValid = await bcrypt.compare(password, row.password);
      if (isPasswordValid) {
        res.status(200).send('Inicio de sesión exitoso');
      } else {
        res.status(401).send('Credenciales incorrectas');
      }
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  });
});
