import styled from 'styled-components';

export const Item = styled.li`
    height: 700px;
    width: 400px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    background: linear-gradient(
    337deg,
    rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%);
    border-radius: 6px;

  }
  :hover,
  :focus {
    background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);

`
export const Img = styled.img`
    display:flex;
    width: 350px;
`
export const TitleBox=styled.div`
width: 350px;
 display:flex;
 justify-content: center;
 align-items: center;

`
export const Title = styled.h2`
padding-top:15px;
text-align:center;
    color: #ffffff
`