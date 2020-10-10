import React from 'react';
import style from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import ImageCrop from '../components/ImageCrop';
import ImageCropContainer from '../container/ImageCropContainer';

function UploadTab({ EditHandler }) {
  UploadTab.handleClickOutside = () => EditHandler();
  return (
    <ButtonList>
      <Square></Square>
      <ImageCropContainer />
      <Btn>Remove photo</Btn>
    </ButtonList>
  );
}

const Square = style.span`
display: block;
    height: 8px;
    width: 8px;
    background: white;
    position: absolute;
    bottom: 63px;
    border-right: 1px solid #d0d0d0;
    border-top: 1px solid #d0d0d0;
    transform: rotateZ(-45deg);
    right: 107px;
    `;

const ButtonList = style.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    border: 1.5px solid #cac9c9;
    padding: 8px 0px;
    border-radius: 6px;
    align-items: flex-start;
    height: 41px;
    justify-content: space-between;
    width: 135px;
    height: 50px;
    box-shadow: 0px 5px 16px rgba(0,0,0,0.2);
    right: 114px;
    bottom: -15px;
    background : white
`;

const Btn = style.button`
    font-family: inherit;
    border: none;
    font-weight: 500;
    background: none;
    width: 100%;
    text-align: left;
    color: #333333;
    font-size: 14px;
    padding: 4px 10px;
    cursor : pointer;
   &:hover {
     background-color: #0064d4;
      color: white;
   }
   &:focus {
     outline:none;
   }
      
      `;

const clickOutsideConfig = {
  handleClickOutside: () => UploadTab.handleClickOutside,
};

export default onClickOutside(UploadTab, clickOutsideConfig);
