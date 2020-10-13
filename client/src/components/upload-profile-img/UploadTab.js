import React from 'react';
import style from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import ImageCropContainer from '../../container/upload-profile-image/ImageCropContainer';

function UploadTab({ EditHandler }) {
  UploadTab.handleClickOutside = () => EditHandler();
  return (
    <ButtonList>
      <Square></Square>
      <ImageCropContainer />
    </ButtonList>
  );
}

const Square = style.span`
display: block;
    height: 8px;
    width: 8px;
    background: white;
    position: absolute;
    bottom: 57px;
    border-right: 1px solid #d0d0d0;
    border-top: 1px solid #d0d0d0;
    transform: rotateZ(-45deg);
    right: 107px;
    `;

const ButtonList = style.div`
height: 43px;
    
    display: flex;
    position: absolute;
    flex-direction: column;
    border: 1.5px solid #cac9c9;
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
