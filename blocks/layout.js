import styled from "styled-components";

export const Wrapper = styled.main`
  width: calc(100% - 60px);
  margin: 60px auto 0;

  @media only screen and (min-width: 414px) {
    width: calc(100% - 120px);
  }

  @media only screen and (min-width: 600px) {
    margin: 90px auto 0;
  }

  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    margin: 0 auto;
    width: calc(100% - 240px);
  }
`;

export const IconSection = styled.section`
  @media only screen and (min-width: 1024px) {
    margin: 120px 0 0;
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
  margin: 60px 0 0;

  @media only screen and (min-width: 1024px) {
    margin: 0 0 120px;
  }
`;

export const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 10px;
  }

  li:last-of-type {
    margin: 0;
  }
`;
