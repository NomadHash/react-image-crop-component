import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageCrop from '../../components/upload-profile-img/ImageCrop';
import { uploadState } from '../../modules/profileImageUpload';

const ImageCropContainer = () => {
  const [uploadUi, setUploadUI] = useState();
  const [cropSrc, setCropSrc] = useState();

  const dispatch = useDispatch();

  const CreateUi = () => {
    console.log('업로드 완료');
    setUploadUI(true);
  };

  const updateCropSrc = (src) => {
    setCropSrc(src);
  };
  // console.log(cropSrc && cropSrc);

  useEffect(() => {
    if (cropSrc !== undefined) dispatch(uploadState(cropSrc));
  }, [cropSrc]);

  return (
    <div>
      <ImageCrop CreateUi={CreateUi} updateCropSrc={updateCropSrc} />
    </div>
  );
};

export default ImageCropContainer;
