import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundWrap>
      <Text>검색 결과가 없습니다.</Text>
    </NotFoundWrap>
  );
};
export default NotFound;

export const NotFoundWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;
export const Text = styled.span`
  font-size: 32px;
  font-weight: 700;
`;
