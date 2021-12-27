import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 45px auto;
  width: 70%;
`;

export const Profile = styled.div`
  display: flex;
  gap: 20px;
`;

export const ContentBody = styled.div`
  box-shadow: 0px 5px 18px #c9c7c7;
  width: 80%;
  margin: 0 auto;
  padding: 5px 0;
  text-align: start;
`;

export const CardBody = styled.div`
  justify-content: flex-start;
  margin: 10px auto;
  width: 100%;
  border-bottom: 1px solid gray;
  padding: 14px 37px;
  border-radius: 10px;
`;

export const CardBodyContent = styled.div`
  width: 95%;
  padding: 40px 0 15px 30px;
  margin: -27px auto;
  overflow : hidden;
`;

export const ProfileImage = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const Heading = styled.h4`
  color: blue;
`;

export const Filename = styled.span`
  color: blue;
`;

export const Span = styled.span`
  color: blue;
`;

export const SpanValues = styled.span`
  border: 1px solid gray;
  padding: 0px 15px;
  border-radius: 5px;
`;

export const Icon = styled.i` 
cursor: pointer;
`