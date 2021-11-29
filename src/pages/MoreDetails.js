import React from "react";
import styled from "styled-components";

const MoreDetails = ({ currentJob }) => {
  return (
    <Container>
      <Wrapper>
        <InnerContainer>
          <TopContainer>
            <Logo src={currentJob?.logo} />
            <Company>{currentJob.company}</Company>
          </TopContainer>
          <InfoContainer>
            <Position>{currentJob.roleName}</Position>
            <Type>{currentJob.type}</Type>
            <Intro>
              {currentJob.requirements.intro}
              <br />
              <br />
              <p>What are we looking for?</p>
              {currentJob.requirements.content}
            </Intro>

            <Description>
              <span>Description</span>
              {currentJob.requirements.description}
            </Description>
          </InfoContainer>
          <ButtonContainer>
            <a target="_blank" href={currentJob.applicationLink}>
              <ApplyBtn>Apply Now!</ApplyBtn>
            </a>
          </ButtonContainer>
        </InnerContainer>
      </Wrapper>
    </Container>
  );
};

export default MoreDetails;

const Container = styled.div`
  display: flex;
  justify-content: center;

  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 60%;
  align-items: center;
  justify-content: center;
  background-color: #3a4b59;
  padding: 10px;
  border-radius: 20px;
  display: flex;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px;
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0.3;
`;

const Logo = styled.img`
  border-radius: 20px;
  height: 80px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Company = styled.div`
  color: white;
  font-size: 2em;
  display: flex;
  font-weight: 900;
  letter-spacing: 6px;
  margin-top: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.4;
  color: white;
  padding: 10px;
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1.6em;
  margin-bottom: 10px;
`;

const Type = styled.div`
  font-size: 1.3em;
  margin-left: 30px;
  margin-bottom: 10px;
  font-weight: 800;
  > span {
    font-size: 1.3em;
    font-weight: 800;
    ::after {
      content: ":";
      margin-right: 10px;
    }
  }
`;

const Intro = styled.div`
  font-size: 1em;
  margin-left: 30px;
  margin-bottom: 10px;
  > span {
    font-size: 1.3em;
    font-weight: 800;
    ::after {
      content: ":";
      margin-right: 4px;
    }
  }
`;

const Description = styled.div`
  font-size: 1em;
  margin-left: 30px;
  margin-bottom: 10px;
  > span {
    font-size: 1.3em;
    font-weight: 800;
    ::after {
      content: ":";
      margin-right: 4px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  flex: 0.3;
  align-items: center;
  justify-content: center;
  a {
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    text-decoration: none;
  }
`;

const ApplyBtn = styled.div`
  width: 80%;
  height: 40px;
  background-color: #4287f5;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2em;
  border-radius: 30px;
  padding: 15px;
  cursor: pointer;
  :hover {
    opacity: 0.5;
    color: white;
  }
`;
