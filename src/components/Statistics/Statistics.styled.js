import styled from 'styled-components';

const getBackgroundColor = props => {
  switch (props.id) {
    case 'id-1':
      return props => props.theme.colors.statFonDocx;
    case 'id-2':
      return props => props.theme.colors.statFonPdf;
    case 'id-3':
      return props => props.theme.colors.statFonMp3;
    case 'id-4':
      return props => props.theme.colors.statFonPsd;
    default:
      return null;
  }
};

export const Statistic = styled.section`
  margin: 60px auto;
`;

export const Wrapper = styled.div`
  display: block;
  width: 330px;
  height: 176px;
  background-color: ${props => props.theme.colors.statMainFonColor};
`;

export const Title = styled.h2`
  padding-top: 30px;
  padding-bottom: 30px;
  font-weight: 500;
  font-size: 28px;
  text-align: center;
  color: ${props => props.theme.colors.statTitleColor};
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-basis: calc(100% / 4);
  background-color: ${getBackgroundColor};
  color: ${props => props.theme.colors.statTextColor};
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;
export const Label = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  svg {
    font-size: 20px;
  }
`;
export const Percentage = styled.span`
  font-size: 24px;
`;
