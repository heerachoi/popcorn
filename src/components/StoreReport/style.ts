import DaumPostcode from 'react-daum-postcode';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

// NewStore.tsx
export const NewStoreForm = styled.form`
  margin-top: 40px;
`;
export const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  margin-bottom: 40px;
`;

export const ThreeGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 250px 250px;
  margin-bottom: 40px;
  /* background-color: aqua; */
`;

export const ReportTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 24px;
  text-align: center;

  div {
    font-size: 12px;
    color: #9b9b9b;
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
  border: 1px solid #bdbdbd;
  background-color: #ffffff;

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

export const AddressInput = styled.input`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  width: 350px;
  height: 30px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  background-color: #ffffff;
`;
export const AddressBtn = styled.button`
  margin-left: 150px;
  width: 100px;
  border-radius: 8px;
  border: 1px solid #9b9b9b;
  background-color: #bdbdbd;
  color: white;
  font-family: 'Apple SD Gothic Neo';
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #676767;
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
  border: 1px solid #bdbdbd;
  background-color: #ffffff;

  &:active,
  &:focus {
    outline-color: #676767;
    color: #323232;
  }

  &::placeholder {
    color: #9b9b9b;
  }
`;
export const TextArea = styled.textarea`
  width: 720px;
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

export const StoreImgLabel = styled.label`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CancleBtn = styled.button`
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 48px;
  width: 200px;
  height: 60px;

  background-color: #f5f5f5;
  color: #9b9b9b;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  cursor: pointer;

  &:hover {
    color: #9b9b9b;
    background-color: #d9d9d9;
  }
`;

export const AddBtn = styled.button`
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  margin-bottom: 48px;
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
    background-color: #676767;
  }
`;

//InfoError.tsx
export const InfoErrorForm = styled.form`
  margin-top: 40px;
`;
export const ErrorImgLabel = styled.label`
  height: 150px;
  width: 150px;
  border-radius: 3px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

export const PostModal = styled.div``;

export const DaumPostcodeModal = styled(DaumPostcode)``;
