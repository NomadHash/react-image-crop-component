import React, { useState, useEffect } from 'react';
import ImageCrop from '../../components/upload-profile-img/ImageCrop';
import style from 'styled-components';
import Axios from 'axios';

const ImageCropContainer = () => {
  const [uploadUi, setUploadUI] = useState();
  const CreateUi = () => {
    console.log('업로드 완료');
    setUploadUI(true);
  };

  // useEffect(() => {
  //   Axios.get('/api/upload').then((res) => {
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <div>
      <ImageCrop CreateUi={CreateUi} />
    </div>
  );
};

export default ImageCropContainer;
