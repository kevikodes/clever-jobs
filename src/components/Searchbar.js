import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "@mui/icons-material";

const Searchbar = ({ searchInput, setSearchInput }) => {
  return (
    <Container>
      <SearchBar>
        <div>
          <Search />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
      </SearchBar>
    </Container>
  );
};

export default Searchbar;

const Container = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const SearchBar = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    background-color: #3a4b59;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 30px;
    text-align: center;
    margin-top: 20px;
  }

  > div > input {
    width: 100%;
    height: 30px;
    background: transparent;
    outline: none;
    border: none;
    color: white;
    padding-left: 20px;
    font-size: 1.2em;
    flex: 1;
    display: flex;
    align-items: center;
  }
  > div > input::placeholder {
    color: white;
    font-size: 1.2em;
  }
`;
