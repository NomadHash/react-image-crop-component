import style from 'styled-components';
import onClickOutside from 'react-onclickoutside';

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ImageCrop from './ImageCrop';
import { uploadState } from '../../modules/profileImageUpload';

function UploadTab({ EditHandler }) {
  UploadTab.handleClickOutside = () => EditHandler();

  const [cropSrc, setCropSrc] = useState();

  const dispatch = useDispatch();
  const updateCropSrc = (src) => {
    setCropSrc(src);
  };

  useEffect(() => {
    if (cropSrc !== undefined) dispatch(uploadState(cropSrc));
  }, [dispatch, cropSrc]);

  return (
    <ButtonList>
      <div>
        <ImageCrop updateCropSrc={updateCropSrc} />
      </div>
    </ButtonList>
  );
}

const ButtonList = style.div`
height: 43px;
    
    display: flex;
    position: absolute;
    flex-direction: column;
    // border: 1.5px solid #cac9c9;
    padding: 8px 0px;
    border-radius: 6px;
    align-items: flex-start;
    box-shadow: 0px 5px 16px rgba(0,0,0,0.2);
    right: 114px;
    bottom: -6px;
    background : white
`;

const clickOutsideConfig = {
  handleClickOutside: () => UploadTab.handleClickOutside,
};

export default onClickOutside(UploadTab, clickOutsideConfig);
