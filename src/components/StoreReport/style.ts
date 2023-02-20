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
  grid-template-columns: 150px 1fr 1fr;
  margin-bottom: 40px;
`;

export const ReportTitle = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
  text-align: center;

  div {
    font-size: 12px;
    color: #9b9b9b;
  }
`;

export const ReportTitleInput = styled.input`
  width: 500px;
  height: 30px;
  padding: 10px;
  border: 1px solid #9b9b9b;
  border-radius: 8px;

  &::before {
    content: attr(data-placeholder);
    width: 100%;
    font-family: 'Apple SD Gothic Neo';
    font-style: normal;
    color: gray;
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
  resize: none;
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

export const CancleAddButton = styled.button`
  border: 1px solid #9b9b9b;
  border-radius: 8px;
  margin: 0 15px;
  margin-bottom: 48px;
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
