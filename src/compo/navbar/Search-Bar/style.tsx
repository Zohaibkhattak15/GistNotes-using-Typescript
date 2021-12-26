import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-around;
 
  Input{  
    border-radius: 10px;
    background: #5acba1;
    &:hover{
    border : 1px solid #5acba1;
  }
  &::placeholder{
    color: white;
  }
`;
