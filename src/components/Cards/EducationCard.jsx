import React from "react";
import styled from "styled-components";

const Document = styled.img`
 display: none;
  height: 70px;
  width: fit-content;
  background-color: black;
  border-radius: 10px;
  &:hover{
    cursor:pointer;
    opacity?: 0.8;
  }
`;

const Card = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap:12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
    transform : translateY(-10px);
  }

  &:hover ${Document}{
    display:flex;
  } 

  @media (max-width : 760px){
    width:250px;
    padding: 10px;
    gap: 1px;

  }
  border: 1px solid ${({ theme }) => theme.white+80};
  box-shadow: rgba(255, 255, 255, 0.1) 0px 4px 24px;
`;

const Top = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const Logo = styled.img`
  height: 50px;
  background-color: #000;
  border:-radius:10px;
  margin-top:4px;
  @media (max-width: 768px){
    height: 40px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary + 99};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.textSecondary + 99};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary + 80};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;
const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary + 80};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary + 99};
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow:hidden;
  display:-webkit-bot;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 100%;
  text-overflow: ellipsis;
`;

const Grade = styled.div`
  font-size:14px;
  font-weight: 400px;
  color: ${({theme})=> theme.textSecondary+99};

  @media (max-width:768px){
    font-size: 12px;
  }
`;
const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Logo src={education.img}></Logo>
        <Body>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <Date>{education.date}</Date>
        </Body>
      </Top>
      <Grade>Grade: {education.grade}</Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationCard;
