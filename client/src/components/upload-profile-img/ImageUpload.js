import React, { useState } from 'react';
import styled from 'styled-components';
import UploadTab from '../upload-profile-img/UploadTab';
import defaultAvatar from '../../public/default.png';
import { RiPencilLine } from 'react-icons/ri';

const ImageUpload = () => {
  const [avatar, setAvatar] = useState({
    default: defaultAvatar,
  });
  const [active, setActive] = useState(false);

  const EditHandler = () => {
    setActive(!active);
  };

  return (
    <Background>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <H3>Profile picture</H3>
        <Preview src={avatar.default} alt="profileImagie"></Preview>
        <EditBtn onClick={EditHandler}>
          <RiPencilLine style={{ fontSize: '18px' }} /> Edit
        </EditBtn>
        {active && <UploadTab EditHandler={EditHandler} />}
        {/* <ImageCropContainer /> */}
      </div>
    </Background>
  );
};

const H3 = styled.h3`
  position: relative;
  right: 43px;
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
  color: black;
  margin-bottom: 10px;
`;

const EditBtn = styled.button`
  bottom: 34px;
  left: -60px;
  position: relative;
  background: #2f2f2f;
  color: whitesmoke;
  border: 0;
  border-radius: 4px;
  padding: 7px 9px;
  font-weight: 600;
  cursor: pointer;
  width: 65px;
  align-items: center;
  display: flex;
  &:focus {
    outline: none;
  }

  justify-content: space-between;
`;

const Preview = styled.img`
  margin-left: 0px;
  height: 180px;
  width: 180px;
  background: #d8d8d8;
  border-radius: 100px;
  cursor: pointer;
`;

const Background = styled.div`
  background: whitesmoke;
  justify-content: center;
  top: 300px;
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 18px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export default ImageUpload;
