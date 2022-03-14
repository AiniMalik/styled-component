import styled from "styled-components";


export const Grid = styled.div`
margin-top: 20px;
margin-bottom: 20px;
display: flex;

& > div,
& > ul {
    flex: 1;
}

@media (max-width: 768px) {
    flex-direction : column;
    & > div{
        margin-bottom: 10px;
    }
}

`;