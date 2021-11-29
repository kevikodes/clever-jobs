import React, { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MoreDetails from "./pages/MoreDetails";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentJob, setCurrentJob] = useState(null);
  return (
    <>
      {console.log(currentJob)}
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              currentJob={currentJob}
              setCurrentJob={setCurrentJob}
            />
          }
        />
        <Route
          path="/more-details"
          element={<MoreDetails currentJob={currentJob} />}
        />
      </Routes>
    </>
  );
};

export default App;
