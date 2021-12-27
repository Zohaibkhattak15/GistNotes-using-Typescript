import styled from "styled-components";

export const Table = styled.table`
  display: table;
  width: 80%;
  margin: 15px auto;
  text-align: left;
`;

export const Th = styled.th`
  background-color: #def5ec;
  padding: 20px 20px 20px 20px;
`;

export const Td = styled.td`
  padding: 10px 10px 10px 10px;
  border-bottom: 2px solid #def5ec;
  text-align: left;
  cursor: pointer;
  &:first-child {
    text-align: center;
  }
`;

export const UserNameSection = styled.div`
  display: flex;
  gap: 15px;
`;

export const Username = styled.span`
  justify-content: center;
  align-self: center;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const GistIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  height: 50px;
`;

export const Icons = styled.i`
  justify-content: center;
  align-content: center;
  align-self: center;
  cursor: pointer;
  color: #5acba1;

`;
