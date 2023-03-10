import DaumPostcode from 'react-daum-postcode';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import COLORS from '../../assets/CSS/colors';

// NewStore.tsx
export const NewStoreForm = styled.form`
  margin-top: 40px;
  @media screen and (max-width: 700px) {
    padding-left: 15px;
  }
`;
export const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 40px;
  align-items: baseline;

  @media screen and (max-width: 700px) {
    width: 340px;
    display: block;
    margin-bottom: 20px;
  }
`;

export const ThreeGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 250px 250px;
  margin-bottom: 40px;
  align-items: baseline;
  @media screen and (max-width: 700px) {
    width: 340px;
    display: block;
  }
`;

export const ReportTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${COLORS.gray1};

  div {
    font-size: 12px;
    color: ${COLORS.gray5};
  }

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`;

export const ReportTitleInput = styled.input`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  width: 720px;
  height: 30px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${COLORS.gray6};
  background-color: ${COLORS.white};

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

  @media screen and (max-width: 700px) {
    width: 240px;
  }
`;

export const AddressInput = styled.input`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  width: 350px;
  height: 30px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${COLORS.gray6};
  background-color: ${COLORS.white};

  &::placeholder {
    color: ${COLORS.gray5};
  }

  @media screen and (max-width: 700px) {
    width: 240px;
  }
`;
export const AddressBtn = styled.button`
  margin-left: 150px;
  width: 100px;
  border-radius: 8px;
  border: 1px solid ${COLORS.gray5};
  background-color: ${COLORS.gray6};
  color: white;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.gray3};
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DatePickerBox = styled(DatePicker)`
  font-family: 'Apple SD Gothic Neo';
  font-weight: 500;
  font-size: 14px;
  height: 30px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid ${COLORS.gray6};
  background-color: ${COLORS.white};

  &:active,
  &:focus {
    outline-color: ${COLORS.gray3};
    color: ${COLORS.gray1};
  }

  &::placeholder {
    color: ${COLORS.gray5};
  }
`;
export const TextArea = styled.textarea`
  width: 720px;
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

  @media screen and (max-width: 700px) {
    width: 240px;
  }
`;

export const StoreImgLabel = styled.label`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 700px) {
    margin-right: 20px;
  }
`;

export const CancelBtn = styled.button`
  border: 1px solid ${COLORS.gray7};
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 48px;
  width: 200px;
  height: 60px;

  background-color: ${COLORS.gray8};
  color: ${COLORS.gray5};
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    color: ${COLORS.gray5};
    background-color: ${COLORS.gray7};
  }
  @media screen and (max-width: 700px) {
    width: 100px;
    height: 60px;
  }
`;

export const AddBtn = styled.button`
  border: 1px solid ${COLORS.gray5};
  border-radius: 8px;
  width: 200px;
  height: 60px;
  margin-bottom: 48px;
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
    background-color: ${COLORS.gray3};
  }

  @media screen and (max-width: 700px) {
    width: 100px;
    height: 60px;
  }
`;

//InfoError.tsx
export const InfoErrorForm = styled.form`
  margin-top: 40px;

  @media screen and (max-width: 700px) {
    padding-left: 15px;
  }
`;
export const ErrorImgLabel = styled.label`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;


export const PostModal = styled.div`  
  position: fixed;
  left: 60%;
  top: 40%;
  height: 400px;
  width: 400px;
  z-index: 9999px;
`;

export const DaumPostcodeModal = styled(DaumPostcode)``;
