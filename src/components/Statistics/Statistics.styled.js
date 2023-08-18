import styled from 'styled-components';

export const Statistic = styled.section`
  background-color: #efefef;
  padding: 40px;
`;

export const Wrapper = styled.div`
  display: block;
  margin: 0 auto;
  width: 330px;
  height: 170px;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  margin: 0;
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  color: #aaaaaa;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-basis: calc(100% / 4);
  background-color: ${props => {
    switch (props.id) {
      case 'id-1':
        return '#4fc4f8';
      case 'id-2':
        return '#a53cf4';
      case 'id-3':
        return '#e74c66';
      case 'id-4':
        return '#20b8c5';
      default:
        return null;
    }
  }};
  color: #d7ffff;
  text-align: center;
  padding-top: 12px;
  padding-bottom: 12px;
`;
export const Label = styled.span`
  font-size: 16px;
`;
export const Percentage = styled.span`
  font-size: 24px;
`;
