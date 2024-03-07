import React from 'react';
import UploadImage from './Components/UploadImage';
import UploadFile from './Components/UploadFile'; 
import MultiFileUpload from './Components/MultiFileUpload';


function App() {
  const handleImageUploaded = (imageData) => {
    console.log('Imagen cargada:', imageData);
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <UploadImage onImageUploaded={handleImageUploaded} />
      <UploadFile /> 
      <MultiFileUpload />
    </div>
  );
}

export default App;