import { NavLink } from "react-router-dom";
import styled from "styled-components"

export const Wrapper=styled.div`
  display: flex;
  align-items: center;
`

export const  Linkback=styled(NavLink)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width:150px;
  padding: 5px 10px;
  margin-top: 10px;
  border:2px solid  #2dd3d6;
  background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
  border-radius: 15px;
  font-size: 26px;
  font-weight: bold;
  margin-right: auto;
  &:hover,
  &:focus {
    color: #2dd3d6;
    text-shadow: 3px 3px 20px #11da97, -2px 1px 30px  #11da97;
  } 
`
export const CastNavLink=styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width:150px;
  padding: 10px 15px;
  
  border:2px solid  #2dd3d6;
  background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
  border-radius: 15px;
  font-size: 26px;
  font-weight: bold;
  margin-right: auto;
 
`

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
export const Description=styled.div`
width: 800px;
  display: flex;
  flex-direction: column;
  background-color:#ffffff;
  padding:12px;
  border: 5px solid #c312b7;
  border-radius: 6px;

`
export const FilmImg = styled.img`
  max-width: 450px;
  background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
  border-radius: 14px;
  border-radius: 15px;
`;

export const FilmTitle = styled.h2`

  font-size: 26px;
  margin-bottom: 12px;
  text-align: center;
`;

export const FilmSubTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 20px;
  color: #141313;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 20px;
  display: flex;
  gap: 18px;
  padding: 0;
  color: #141313;
  margin-bottom: 12px;
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;

  border-radius: 20px;
`;
export const ListItem = styled.li`
  span {
    color: #0fdfd5;
  }

  a:hover,
  a:focus,
  a:active {
    color: #0fdfd5;
    span {
      color: white;
    }
  } 
`;
export const Genre=styled.li`

padding: 5px 10px;
  
   border-radius:15px;
   font-size: 20px;
   font-weight: bold;
   background-color: #c312b7;
   color: #ffffff;

`
export const Release=styled.p`
display:flex;
gap: 15px;
align-items:center;
font-size: 20px;
font-weight: bold;
  
  & > span{
    padding: 5px 10px;
    border-radius:15px;
    background-color: #c312b7;
    color: #ffffff;
  }
`