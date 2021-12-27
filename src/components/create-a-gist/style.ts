import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin: 10px auto;
  padding: 100px 100px 100px 100px;
`;

export const Button = styled.button`
  width: 40%;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 20px 10px 20px;
  font-size: 15px;
  cursor: pointer;
  border: none;
  background-color: #5acba1;
  border-radius: 5px;
  color: white;
  align-self: center;
`;

export const Heading = styled.h1`
  font-size: 30px;
  text-align: center;
`;
export const Input = styled.input`
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;
export const Textarea = styled.textarea`
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const Select = styled.select`
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;
