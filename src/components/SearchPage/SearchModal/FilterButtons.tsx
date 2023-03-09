// types
import { CategoryItemProps } from '../../../types/modal/modalInterface';
// style
import styled from 'styled-components';
import COLORS from '../../../assets/CSS/colors';

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
  border: 1px solid ${COLORS.gray5};
  border-radius: 20px;
  margin-bottom: 10px;
  background-color: ${props => props.active ? `${COLORS.gray8}`:'tranparent'  };
  cursor : pointer ;
`