import styled from "styled-components";

export const Section = styled.section`
  margin-top: 60px;
`;

export const Div = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-end;
  margin: 15px 200px 5px auto;
  gap: 15px;
  cursor: pointer;

  i{
    &.list-active{
      color: #5acba1;
    }
    &.grid-active{
      color: #5acba1;
    }
  }
`;


