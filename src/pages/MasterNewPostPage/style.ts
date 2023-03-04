import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

export const NewPostWrap = styled.div`
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
`;

export const TitleBackground = styled.div`
  background-color: #88e25d;
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
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
  margin-top: 49px;
  padding: 40px;
  background-color: ${COLORS.gray8};
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
  border: 1px solid ${COLORS.gray6};
  background-color: ${COLORS.white};
  border-radius: 8px;

  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  &:active,
  &:focus {
    outline-color: ${COLORS.gray3};
    color: ${COLORS.gray1};
  }

  &::placeholder {
    color: ${COLORS.gray5};
  }

  &::before {
    content: attr(data-placeholder);
    width: 100%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    color: ${COLORS.gray5};
  }
  &:valid::before {
    display: none;
  }
`;

export const TextArea = styled.textarea`
  width: 500px;
  height: 30px;
  padding: 10px;
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  resize: none;

  &::placeholder {
    color: ${COLORS.gray5};
  }

  &:active,
  &:focus {
    outline-color: ${COLORS.gray3};
    color: ${COLORS.gray1};
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
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
  margin: 15px;
  margin-bottom: 22px;
  width: 150px;
  height: 50px;

  background-color: ${COLORS.gray6};
  color: ${COLORS.white};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.white};
  }
`;
