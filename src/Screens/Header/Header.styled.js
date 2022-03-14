import styled from 'styled-components'
import black from '../../Img/black.jpg'
import green from '../../Img/green.jpg'



export const StyledHeader = styled.div `
max-width: 100%;
padding: 40px;
background-image: url(${black});
background-repeat: no-repeat repeat;
background-size: cover;
text-align: center;

h1{
    color: white;
    font-size: 45px;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    font-weight: bolder;

}
p{
    color: white;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}
`;

export const Button = styled.button`
width: 300px;
height: 60px;
border-radius: 40px;
font-weight: bolder;
border: 1px solid #777600;
background-color: #777600;
color: white;
cursor: pointer;
font-size: 22px;
font-weight: 500;
line-height: 26px;
padding: 1px 6px 1px 6px;
margin-top: 20px;
margin-bottom: 20px;
text-align: center;


@media screen and (max-width: 1200px) {
    width: 300px;
  }
  @media screen and (max-width: 800px) {
    width: 300px;
  }
  @media screen and (max-width: 723px) {
    width: 260px;
  }
  @media screen and (max-width: 621px) {
    width: 260px;
  }
  @media screen and (max-width: 600px) {
    width: 260px;
  }
  @media screen and (max-width: 450px) {
    width: 200px;
    font-size: 18px;
  }
`;