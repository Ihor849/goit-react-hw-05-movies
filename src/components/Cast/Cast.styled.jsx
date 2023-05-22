import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const ListItem = styled.li`
  min-width: 182px;
  font-size: 14px;
  padding: 6px;
  max-width: min-content;
  background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  img {
    width: 200px;
    border-radius: 8px;
  }
  span {
    color: #ffffff;
  }
`;
export const Info=styled.div`
  display:flex;
  flex-direction:column;
  gap: 6px;
  padding: 8px;
  &>p{
    font-size: 16px;
    color: #ffffff;
  }
`