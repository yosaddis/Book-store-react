import React from 'react';
import { Link as ReachRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: solid #e0e0e0 1px;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  color: #f5913e;
`;

const Menu = styled(ReachRouterLink)`
  background-color:  #f5913e;
  margin: 1rem;
  height: fit-content;
  color:#fff;
  border: 0;
  font-size: 1.2em;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #fff;
    color: #f5913e;
    border: 1px solid #f5913e;
  }
`;

function Nav() {
  return (
    <Header>
      <Title>Book Store</Title>
      <nav>
        <Menu to="/">Books</Menu>
        <Menu to="/Categories">Categories</Menu>
      </nav>
    </Header>
  );
}
export default Nav;
