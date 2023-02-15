import React from 'react'
import { CategoryButton } from './style'

import styled from 'styled-components';

interface CategoryItemProps {
  active: boolean;
}

const FilterButtons = styled.button<CategoryItemProps>`
  background-color: ${props => props.active ? 'red' : 'blue'};
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const CategoryItemContainer = ({ buttons, onButtonClick }: { buttons: { id: number, label: string, active: boolean }[], onButtonClick: (id: number) => void }) => {
  return (
    <div>
      {buttons.map(button =>(<CategoryButton key={button.id} active={button.active} onClick={() => onButtonClick(button.id)} >{button.label}</CategoryButton>))}
    </div>
  );
};

export default FilterButtons;
