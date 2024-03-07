import React from 'react';
import UploadImage from './Components/UploadImage';
import UploadFile from './Components/UploadFile'; // Importar el nuevo componente

function App() {
  const handleImageUploaded = (imageData) => {
    console.log('Imagen cargada:', imageData);
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <UploadImage onImageUploaded={handleImageUploaded} />
      <UploadFile /> {/* Llamar al nuevo componente */}
    </div>
  );
}

export default App;