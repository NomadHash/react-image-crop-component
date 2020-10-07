import React, { useState } from 'react';
import ImageCrop from '../components/ImageCrop';

const ImageCropContainer = () => {
  const [uploadUi, setUploadUI] = useState();
  const CreateUi = () => {
    setUploadUI(true);
  };
  return (
    <div>
      {uploadUi && <span>Crop your new profile picture</span>}
      <ImageCrop CreateUi={CreateUi} />
      {uploadUi && <button>set new profile picture</button>}
    </div>
  );
};

export default ImageCropContainer;
