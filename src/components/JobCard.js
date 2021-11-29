import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job, currentJob, setCurrentJob }) => {
  const navigate = useNavigate();
  const getMoreDetails = async (e) => {
    e.preventDefault();
    try {
      await setCurrentJob(job);
      navigate("/more-details", { replace: false });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <InnerContainer>
        <TopContainer>
          <CompanyImage src={job.logo} />
          <OptionsIcon />
        </TopContainer>

        <InfoContainer onClick={getMoreDetails}>
          <Company>{job.company}</Company>
          <Position>{job.roleName}</Position>
          <Description>{job.requirements.content}</Description>
        </InfoContainer>

        <ButtonsContainer>
          <a href={job.applicationLink} target="_blank">
            <ApplyNowBtn>Apply Now!</ApplyNowBtn>
          </a>

          <MessageBtn>Message</MessageBtn>
        </ButtonsContainer>
        <PostedTime>{job.postedTime}</PostedTime>
      </InnerContainer>
    </Container>
  );
};

export default JobCard;
const Container = styled.div`
  width: 100%;
  min-height: 300px;
  background-color: #3a4b59;
  border-radius: 20px;
  padding: 20px;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.04);
  }
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  flex: 0.3;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

const CompanyImage = styled.img`
  height: 50px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
`;

const OptionsIcon = styled(MoreHorizIcon)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  padding: 3px;
`;

const InfoContainer = styled.div`
  flex: 0.4;
  padding: 5px;
  cursor: pointer;
`;

const Company = styled.div`
  color: white;
  font-weight: 800;
  font-size: 1.1em;
  margin-bottom: 10px;
`;

const Position = styled.div`
  color: white;
  margin-bottom: 10px;
  font-size: 0.9em;
  font-weight: 700;
`;

const Description = styled.div`
  color: white;
  font-size: 0.9em;
`;

const ButtonsContainer = styled.div`
  flex: 0.3;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  > a {
    text-decoration: none;
  }
`;

const ApplyNowBtn = styled.div`
  border-radius: 15px;
  background-color: #4287f5;
  color: white;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  height: 50px;
`;

const MessageBtn = styled.div`
  border-radius: 15px;
  background-color: #eee;
  color: black;
  cursor: pointer;
  padding: 10px;
  height: 50px;
  display: flex;
  align-items: center;
`;

const PostedTime = styled.div`
  color: lightgray;
  font-size: 0.8em;
  display: flex;
  justify-content: flex-end;
`;

//#3a4b59
