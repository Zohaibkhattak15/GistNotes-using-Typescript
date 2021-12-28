import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin-left: 130px;
  cursor: pointer;
  padding-bottom: 200px;
`;

export const Grid = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 100%;
  padding: 20px 20px;
  border-radius: 15px;
  box-shadow: 0px 5px 18px #c9c7c7;
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  overflow: hidden;

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid gray;
`;
export const Profile = styled.div`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ProfileFooter = styled.span`
  :first-child {
    font-size: 10px;
    color: lightseagreen;
  }
`;

export const ProfilePic = styled.img`
  cursor: pointer;
  width: 80px;
  height: auto;
  background-color: white;
  border-radius: 50%;
  margin-top: 30px;
`;

export const Span1 = styled.span`
  font-weight: 900;
  margin-right: 10px;
`;
