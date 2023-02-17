import React from 'react'
import styled from 'styled-components';
import { CategoryItemProps } from '../../../types/modal/modalInterface';

const FilterButtons = ({ buttons, onButtonClick }: { buttons: { id: number, label: string, active: boolean }[], onButtonClick: (id: number) => void }) => {
  return (
    <div>
      {buttons.map(button =>(<CategoryButton key={button.id} active={button.active} onClick={() => onButtonClick(button.id)} >{button.label}</CategoryButton>))}
    </div>
  );
};

export default FilterButtons;

const CategoryButton = styled.div<CategoryItemProps>`
  padding: 10px 20px;
  border: 1px solid #A6A6A6;
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: ${props => props.active ? '#E4FDFF':'tranparent'  };
  cursor : pointer ;
`