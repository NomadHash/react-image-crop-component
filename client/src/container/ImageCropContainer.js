import React, { useState, useEffect } from 'react';
import ImageCrop from '../components/ImageCrop';
import Axios from 'axios';

const ImageCropContainer = () => {
  const [uploadUi, setUploadUI] = useState();
  const CreateUi = () => {
    setUploadUI(true);
  };

  useEffect(() => {
    Axios.get('/api/upload').then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      {uploadUi && <span>Crop your new profile picture</span>}
      <ImageCrop CreateUi={CreateUi} />
      {uploadUi && <button>set new profile picture</button>}
    </div>
  );
};

export default ImageCropContainer;
