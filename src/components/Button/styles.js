import styled from "styled-components";

export const ButtonContainer = styled.button`
padding: 10px;
border: 1px solid white;
box-sizing: border-box;
background-color: #000;
color: #fff;
font-size: 24px;
width: 25%;
font-weight: 900;


&:hover {
    opacity: 0.5;
}
&:active {
    opacity: 0.5;
    background-color: red;
}

`