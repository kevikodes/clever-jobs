import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        <Title>
          <Link to="/">Clever Jobs</Link>
        </Title>
      </InnerContainer>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: #3a4b59;
`;

const InnerContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 30px;
  margin-left: 70px;
`;

const Logo = styled.img`
  height: 50px;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer;
`;

const Title = styled.a`
  color: white;
  font-size: 2em;
  cursor: pointer;
  > a {
    color: white;
    text-decoration: none;
  }
`;
