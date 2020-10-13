import ReactDOM from 'react-dom';
import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import style from 'styled-components';
import 'react-image-crop/dist/ReactCrop.css';
class ImageCrop extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 5 / 5,
    },
    cropSrc: null,
  };

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      this.props.CreateUi();
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result }),
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg',
      );
      this.setState({
        cropSrc: croppedImageUrl,
      });
    }
  }

  setNewImage = () => {
    const { cropSrc } = this.state;
    this.props.updateCropSrc(cropSrc);
    this.setState({ src: null });
  };

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    return (
      <>
        {!src && (
          <div>
            <Square></Square>
            <UploadBtn htmlFor="ex_file">Upload a photo...</UploadBtn>
            <input
              style={{ display: 'none' }}
              type="file"
              id="ex_file"
              accept="image/*"
              onChange={this.onSelectFile}
            ></input>
          </div>
        )}
        {!src && <Btn>Remove photo</Btn>}
        <div>
          {src && (
            <BackGround>
              <CropContainer>
                <MainText>Crop your new profile picture</MainText>
                <div
                  style={{
                    padding: '0px 11px',
                  }}
                >
                  <ReactCrop
                    src={src}
                    crop={crop}
                    ruleOfThirds
                    onImageLoaded={this.onImageLoaded}
                    onComplete={this.onCropComplete}
                    onChange={this.onCropChange}
                  />
                </div>
                <BtnDiv>
                  <SetButton onClick={this.setNewImage}>
                    set new profile picture
                  </SetButton>
                </BtnDiv>
              </CropContainer>
            </BackGround>
          )}
          {/* {croppedImageUrl && (
          <img alt="Crop" style={{ maxWidth: '100%' }} src={croppedImageUrl} />
        )} */}
        </div>
      </>
    );
  }
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
const BackGround = style.div`
    background: rgba(0,0,0,0.3);
    position: fixed;
    height: 100vh;
    top: 0px;
    right: 0px;
    left: 0px;
`;

const SetButton = style.button`
    border: none;
    color: white;
        background: #2C974B;
    border-radius: 6px;
    border-radius: 3px;
    width: 93%;
    padding: 7px 10px;
    font-weight: 600;
    font-size: 14px;
    `;
const BtnDiv = style.div`
   margin-top: 9px;
    padding: 11px 0px;
    text-align: center;
    background: #f1f0f0;
    border-radius: 0px 0px 11px 11px;
    border-top: 1px solid #d2d2d2`;

const CropContainer = style.div`
background: white;
    display: flex;
    flex-direction: column;
    border-radius: 11px;
    position: relative;
    margin: 0 auto;
    top: 50vh;
    width: 390px;
    height: auto;
        transform: translate(0, -50%);
        box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.3);
`;

const MainText = style.span`border-bottom: 1px solid #e6e6e6;
    width: 100%;
    color: #272727;
    font-weight: 600;
    font-size: 14px;
    background: #f1f1f1;
    text-align: center;
    border-radius: 10px 10px 0px 0px;
    padding: 13px 0px;
    margin-bottom: 8px;`;

const UploadBtn = style.label`
    font-family: inherit;
    border: none;
    font-weight: 500;
    background: none;
    width: 100%;
    text-align: left;
    color: #333333;
    font-size: 14px;
    padding: 5px 15px;
    cursor : pointer;
   &:hover {
     background-color: #0064d4;
      color: white;
   }
   &:focus {
     outline:none;
   }
      `;
const Btn = style.button`
margin-top: 3px;
    font-family: inherit;
    border: none;
    font-weight: 500;
    background: none;
    width: 100%;
    text-align: left;
    color: #333333;
    font-size: 14px;
    padding: 5px 15px;
    cursor : pointer;
   &:hover {
     background-color: #0064d4;
      color: white;
   }
   &:focus {
     outline:none;
   }
      
      `;
export default ImageCrop;
