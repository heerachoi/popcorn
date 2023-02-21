import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from '../../data/popupStore.json';

const TestPopupList: any = () => {
  const navigate = useNavigate();
  const popupList = data.Store;

  return (
    <>
      <div>
        <h4>테스트 위해 팝업스토어 전체 리스트</h4>
      </div>
      <DivBox>
        {popupList.map((list) => {
          return (
            <CardBox key={list.id}>
              <img
                src={list.imgURL[0]}
                width={334}
                height={334}
                style={{ borderRadius: '7px' }}
              />
              <h4>{list.title}</h4>
              <p>
                {list.open} ~ {list.close}
              </p>
              <p>{list.address}</p>
              <TagDiv>
                <TagUl>
                  <TagNameLi>
                    <Link
                      to="/search"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {list.location}
                    </Link>
                  </TagNameLi>
                  <TagNameLi>
                    <Link
                      to="/search"
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {list.item}
                    </Link>
                  </TagNameLi>
                </TagUl>
              </TagDiv>
            </CardBox>
          );
        })}
      </DivBox>
    </>
  );
};
export default TestPopupList;

const DivBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const CardBox = styled.div`
  width: 334px;
  height: 516px;

  border: 1px solid #a6a6a6;
  border-radius: 8px;
  font-size: 14px;
`;

const TagDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const TagUl = styled.ul`
  font-size: 13px;
  text-align: center;
`;

const TagNameLi = styled.li`
  list-style: none;
  border: 1px solid #a6a6a6;
  border-radius: 20px;
  float: left;
  padding: 5px;
  margin-left: 10px;

  cursor: pointer;
`;
