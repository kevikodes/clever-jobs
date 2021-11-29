import styled from "styled-components";
import Searchbar from "../components/Searchbar";
import Cards from "../components/Cards";
import { useState } from "react";

export function Home({
  searchInput,
  setSearchInput,
  currentJob,
  setCurrentJob,
}) {
  return (
    <Container>
      <Searchbar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Cards
        searchInput={searchInput}
        currentJob={currentJob}
        setCurrentJob={setCurrentJob}
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100%;
  width: 100%;
`;
