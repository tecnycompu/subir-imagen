const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuración de CORS
app.use(cors());

// Configuración de multer para la carga de archivos múltiples
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// Ruta para subir archivos múltiples
app.post('/multiupload', upload.array('files'), (req, res) => {
  res.send('Archivos subidos correctamente');
});

app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
