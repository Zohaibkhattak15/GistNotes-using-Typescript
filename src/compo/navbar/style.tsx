import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px 30px;
  background-color: #5acba1;
  box-shadow: 0px 5px 18px #888888;
  

  Button{
    background: white;
    color: #5acba1;
    border: 1px solid #5acba1;
    width: 150px;
    border-radius: 10px;
    &:hover{
      background: #5acba1;
      border: 1px solid white;
    }
  }

 
`;

export const Button = styled.button`
  padding: 5px 40px 5px 40px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: #ffffff;
  color: green;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    transition: 0.3s ease-in-out;
    background-color: whitesmoke;
  }
`;

export const Imgdiv = styled.div`
  width: 200px;
  height: 40px;
  margin-top: 5px;
  margin-right: 100px;
  align-self: center;
  cursor: pointer;
`;

export const SearchDiv = styled.div`
  display: flex;
  gap: 20px;
`;
