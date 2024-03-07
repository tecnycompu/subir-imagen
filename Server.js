const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors());

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Ruta para subir archivos
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Archivo subido correctamente');
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
