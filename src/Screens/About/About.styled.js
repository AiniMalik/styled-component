import styled from "styled-components";
import dp from '../../Img/dp.jpg';


export const StyledAbout =styled.div`
background-color: #c8faf2;
text-align: center;

h1{
    color:black;
    text-align:center;
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

export const Para = styled.p`
color: #777600;
text-align: center;
font-size: 25px;
font-weight: 900px;
`
;

export const Header= styled.h1`
   text-align: center;

`;

export const AboutH= styled.h1`
    font-size: 23px;
    margin-top: 20px;
    word-break: break-all;
`;


export const AboutP= styled.h1`
    font-size: 20px;
    font-weight: normal;
    margin-top: 20px; 
    word-break: break-all;
    text-align: center;


`;
export const Div = styled.div`
  text-align: center;
   background-color: #6fbf39;
   border: 1px solid #6fbf39;
   border-radius: 30px;
   width: 800px;
   margin-left: 18%;

`;
export const AboutHeader= styled.h2`
    font-size: 23px;
    margin-top: 20px;
    word-break: break-all;
    color: white;
`;


export const AboutParagraph= styled.p`
    font-size: 20px;
    font-weight: normal;
    margin-top: 20px; 
    word-break: break-all;
    text-align: center;
    color: white;


`;
export const DivCard =styled.div`
background-color: white;
border: 1px solid white;
border-radius: 30px;
width: 230px;
height: 300px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
text-align: center;
`;


export const Image = styled.img`
margin-top: 20px;
background-color: lightgray;
 border-radius: 50%;
  height:120px;
  width:120px;
`;


export const AdsHeader= styled.h4`
    font-size: 40px;
    margin-top: 10%;
    color: black;
    text-align: center;

`;
 export const  Aboutp =styled.h5`
 font-size: large;
 margin-top: 50%;
 `;