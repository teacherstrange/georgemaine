import styled from "styled-components";

export const Wrapper = styled.main`
  min-height: 100vh;
  padding: 60px 30px;

  @media only screen and (min-width: 414px) {
    padding: 50px;
  }

  @media only screen and (min-width: 600px) {
    padding: 90px 60px;
  }

  @media only screen and (min-width: 1024px) {
    padding: 90px;
  }
`;

export const CopySection = styled.section`
  margin: 60px 0;
  max-width: 450px;

  @media only screen and (min-width: 768px) {
    max-width: 650px;
  }

  @media only screen and (min-width: 1024px) {
    margin: 90px 0;
  }
`;

export const ContactNavigation = styled.nav`
  margin: 60px 0;

  @media only screen and (min-width: 1024px) {
    margin: 90px 0;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 20px;
  }

  li:last-of-type {
    margin: 0;
  }
`;
