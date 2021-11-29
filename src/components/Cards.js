import React, { useState, useEffect } from "react";
import styled from "styled-components";
import JobCard from "./JobCard";
import axios from "axios";

const Cards = ({ searchInput, setCurrentJob, currentJob }) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get("https://cpbootcamp.proxy.beeceptor.com/devjobs")
      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Container>
      {!searchInput
        ? jobs.map((job) => {
            return (
              <JobCard
                job={job}
                key={job.id}
                setCurrentJob={setCurrentJob}
                currentJob={currentJob}
              />
            );
          })
        : jobs
            .filter((name) =>
              name.company.toLowerCase().includes(searchInput.toLowerCase())
            )
            .map((filteredName) => {
              return (
                <JobCard
                  key={filteredName.id}
                  job={filteredName}
                  setCurrentJob={setCurrentJob}
                  currentJob={currentJob}
                />
              );
            })}
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 45px 100px 100px 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 20px;
`;
