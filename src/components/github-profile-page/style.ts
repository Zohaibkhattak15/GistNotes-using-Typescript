import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 150px 150px auto;
`;

export const ProlfieLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  border-right: 1px solid lightgray;
  padding: 20px 30px;
`;

export const Heading = styled.div`
  text-align: start;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: white;
  border: 1px solid gray;
  color: blue;
  font-size: 12px;
  cursor: pointer;
`;
export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CardHeader = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
`;

export const LeftSec = styled.div`
  display: flex;
  width: 170%;
  justify-content: space-around;
  flex-direction: row;
`;

export const ProfileCol = styled.div`
  display: flex;
  gap: 30px;
`;

export const GistIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const ContentBody = styled.section`
  box-shadow: 0px 5px 18px #c9c7c7;
  width: 160%;
  margin: 26px 50px;
  border-radius: 5px;
`;

export const CardBody = styled.div`
  justify-content: flex-start;
  margin-top: 5px;
  width: 96%;
  border-bottom: 1px solid gray;
  padding: 15px 20px;
  height: 22px;
  border-radius: 5px;
`;

export const CardBodyContent = styled.div`
  width: 100%;
  padding: 40px 80px;
  margin: -27px auto;
`;

export const Icon1 = styled.div`
  display: flex;
  gap: 10px;
  height: 25px;
  cursor: pointer;
`;

export const ProfilePicSec = styled.div`
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.img` 
 align-self: center;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
`
export const Img = styled.img` 
 align-self: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
`