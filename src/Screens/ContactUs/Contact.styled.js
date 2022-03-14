import styled from "styled-components";


export const StyledContact =styled.div`
background-color: #fffff2;



p{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-size: 40px;
    color:black;
    text-align:center;
    padding-top: 20px;
    font-weight: 500;
}

`;


export const Input= styled.input`
border-radius: 12px;
border:#717171 1px solid;
height: 30px;
width: 200px;
padding: 14px 60px 15px 60px;
margin-bottom: 20px;

@media (max-width: 768px) {
 margin-bottom : 10px;
}
`;
export const Textarea= styled.textarea`
border-radius: 12px;
border:#717171 1px solid;
height: 94px;
width: 600px;
padding: 14px 30px 15px 30px;

 
@media screen and (max-width: 1200px) {
    width: 600px;
  }
  @media screen and (max-width: 800px) {
    width: 600px;
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
    width: 260px;
  }

`;



export const Button = styled.button`
width: 176px;
height: 50px;
border-radius: 30px;
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
`;

