import styled from 'styled-components';

export const NewPostWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleBackground = styled.div`
  background-color: #ffeb62;
  width: 240px;
  height: 30px;
  padding-left: 13px;
  border-radius: 12px;
  margin: auto;
`;

export const NewPostTitle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 48px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
`;

export const NewPostContainer = styled.form`
  height: 1050px;
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  margin-top: 49px;
  padding: 40px;
  background-color: #f5f5f5;
`;
export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 40px;
`;

export const PostTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  margin-right: 10px;
`;
export const TitleInput = styled.input`
  width: 500px;
  height: 30px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
  border-radius: 8px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  &:active,
  &:focus {
    outline-color: #676767;
    color: #323232;
  }

  &::placeholder {
    color: #9b9b9b;
  }

  &::before {
    content: attr(data-placeholder);
    width: 100%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    color: #9b9b9b;
  }
  &:valid::before {
    display: none;
  }
`;

export const TextArea = styled.textarea`
  width: 500px;
  height: 30px;
  padding: 10px;
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  resize: none;

  &::placeholder {
    color: #9b9b9b;
  }

  &:active,
  &:focus {
    outline-color: #676767;
    color: #323232;
  }
`;

export const TreeGridBox = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
  margin-bottom: 40px;
`;

export const ImgBox = styled.div`
  padding: 20px 0 0 40px;
`;

export const ImgLabel = styled.label`
  height: 150px;
  width: 150px;
  border-radius: 8px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;
export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancleAddBtn = styled.button`
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  margin: 15px;
  margin-bottom: 22px;
  width: 150px;
  height: 50px;

  background-color: #bdbdbd;
  color: white;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: #9b9b9b;
  }
`;
