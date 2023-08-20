import styled from 'styled-components';

const bgcolorLine = ({ $idx, theme: { colors } }) => {
  const numberLine = $idx % 2;
  return numberLine ? colors.tableLine2 : colors.tableLine1;
};

export const Table = styled.table`
  margin: 60px auto;
  width: 870px;
  background-color: ${props => props.theme.colors.tableMainFonColor};
  border-collapse: collapse;
  border: 1px solid #d7d2d2;
`;

export const Thead = styled.thead`
  height: 50px;
  color: ${props => props.theme.colors.tableMainFonColor};
  background-color: ${props => props.theme.colors.tableHead};
  text-transform: uppercase;
`;

export const ThType = styled.th`
  border-right: 1px solid #d7d2d2;
  + th {
    border-right: 1px solid #d7d2d2;
  }
`;

export const TbodyTr = styled.tr`
  height: 50px;
  text-align: center;
  color: ${props => props.theme.colors.tableTextColor};
  background-color: ${bgcolorLine};
`;

export const TdType = styled.td`
  text-transform: capitalize;
  border-right: 1px solid #d7d2d2;
  + td {
    border-right: 1px solid #d7d2d2;
  }
`;
