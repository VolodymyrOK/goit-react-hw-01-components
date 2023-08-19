import styled from 'styled-components';

export const Profile = styled.div`
  display: block;
  width: 270px;
  height: 348px;
  margin: 80px auto 60px;
  background-color: ${props => props.theme.colors.profileFonColor};
  box-shadow: 0px 0px 23px 8px rgba(202, 213, 227, 1);
  -webkit-box-shadow: 0px 0px 23px 8px rgba(202, 213, 227, 1);
  -moz-box-shadow: 0px 0px 23px 8px rgba(202, 213, 227, 1);
  border-radius: 8px;
  border: 1px solid #e4e9f0;
`;

export const Description = styled.div`
  margin-top: 30px;
`;

export const Avatar = styled.img`
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #a88770;
`;
export const Name = styled.h2`
  margin-top: 30px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${props => props.theme.colors.profileTitleColor};
`;
export const TagAndLocation = styled.p`
  margin-top: 12px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: ${props => props.theme.colors.profileTextColor};
`;
export const Stats = styled.ul`
  margin-top: 30px;
  height: 73px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: ${props => props.theme.colors.profileFonStats};
  border: 1px solid #e4e9f0;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;
export const Label = styled.span`
  margin-top: 18px;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: ${props => props.theme.colors.profileTextColor};
`;
export const Quantity = styled.span`
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  ${props => props.theme.colors.profileTitleColor};
`;
