import styled from "styled-components";


export const StyledBody = styled.body`

    display:flex;
    align-items: center;
    justify-content:center;
    text-align:center;
    background-color:lightpink;
    border-bottom: 1px solid;
   

    .aboutImage {
       margin-top:20px;  
    }

    .aboutImage h4 {
       margin-bottom:17px;  
    }

    .aboutImage img {
       margin-bottom:17px;  
       width:90%;
       border-radius:10px;
    }

    .details {
        margin-top:-70px; 
        margin-bottom:27px;
        margin-left:17px;
    }

    .buttons button{
        color:red;
        font-size:200%;
        background-color:transparent;
        padding:10px;
        border:none;
        cursor: pointer;
    }

    .buttons1
    .buttons2{
        font-size:500%;
        color:red;
    }
`