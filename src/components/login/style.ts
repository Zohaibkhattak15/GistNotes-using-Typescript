import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 35%;
  margin: 150px auto;
  padding: 50px 50px;
  border: 2px solid #5acba1;

  Input {
    border-radius: 10px;

    &:hover {
      border: 1px solid #5acba1;
    }
  }
  Button {
    background: #5acba1;
    border: none;
    width: 100%;
  }
`;
