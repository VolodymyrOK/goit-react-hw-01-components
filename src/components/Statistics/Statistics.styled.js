import styled from 'styled-components';

const getBackgroundColor = props => {
  switch (props.$color) {
    case 'id-1':
      return ({ theme: { colors } }) => colors.statFonDocx;
    case 'id-2':
      return ({ theme: { colors } }) => colors.statFonPdf;
    case 'id-3':
      return ({ theme: { colors } }) => colors.statFonMp3;
    case 'id-4':
      return ({ theme: { colors } }) => colors.statFonPsd;
    default:
      return null;
  }
};

export const Statistic = styled.section`
  margin: 60px auto;
`;

export const Wrapper = styled.div`
  display: block;
  width: 370px;
  height: 169px;
  background-color: ${({ theme: { colors } }) => colors.statMainFonColor};
  border-radius: 4px;
`;

export const Title = styled.h2`
  padding-top: 32px;
  padding-bottom: 30px;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 1.02px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.statTitleColor};
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  list-style: none;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-basis: calc(100% / 4);
  background-color: ${getBackgroundColor};
  color: ${({ theme: { colors } }) => colors.statTextColor};
  text-align: center;
  padding-top: 14px;
  padding-bottom: 14px;
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
