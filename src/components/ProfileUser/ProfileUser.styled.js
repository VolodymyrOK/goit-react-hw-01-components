import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #efefef;
  padding: 80px;
`;
export const Profile = styled.div`
  display: block;
  width: 330px;
  height: 418px;
  margin: 0 auto;
  border: 1px solid #ebebf5;
  background-color: #ffffff;
`;
export const Description = styled.div`
  padding-top: 30px;
`;

export const Avatar = styled.img`
  margin: 0;
  padding: 0;
  display: block;
  margin: 0 auto;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background-color: grey;
`;
export const Name = styled.h2`
  margin: 0;
  padding: 0;
  margin-top: 32px;
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  color: #444444;
`;
export const TagAndLocation = styled.p`
  margin: 0;
  padding: 0;
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: #aaaaaa;
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #f7f7fa;
  border: 1px solid #ebebf5;
`;
export const Label = styled.span`
  margin-top: 20px;
  font-weight: 500;
  font-size: 15px;
  text-align: center;
  color: #aaaaaa;
`;
export const Quantity = styled.span`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: #444444;
`;
