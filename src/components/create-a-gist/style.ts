import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
  padding: 100px 100px 100px 100px;

  Input {
    border-radius: 10px;
  }
  TextArea{
    border-radius: 10px;
  }
  Button{
    background : #5acba1;
    border: none;
    width:100%;
    color:white;
    &:hover{
      background : white;
      color: green;
      transition:0.3s ease-in-out;
      border: 1px solid green;
    }
  }
`;
export const Heading = styled.h1`
  font-size: 30px;
  text-align: center;
`;