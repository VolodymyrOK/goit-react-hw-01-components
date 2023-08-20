import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  background-color: ${({ theme: { colors } }) => colors.commonFonColor};
`;
