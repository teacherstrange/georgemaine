import { useState } from "react";
import styled from "styled-components";
import {
  Button,
  SocialLink,
  MailIcon,
  TwitterIcon,
  DribbbleIcon,
  LinkedinIcon,
} from "./index";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export function SocialLinks() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible ? (
        <Container>
          <SocialLink
            href='mailto:georgemaine.lourens@gmail.com?subject=Hello 👋'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MailIcon />
          </SocialLink>
          <SocialLink
            href='https://twitter.com/georgemaine'
            target='_blank'
            rel='noopener noreferrer'
          >
            <TwitterIcon />
          </SocialLink>
          <SocialLink
            href='https://dribbble.com/georgemaine'
            target='_blank'
            rel='noopener noreferrer'
          >
            <DribbbleIcon />
          </SocialLink>
          <SocialLink
            href='www.linkedin.com/in/georgemaine'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedinIcon />
          </SocialLink>
        </Container>
      ) : (
        <Button
          aria-label='Get in touch'
          type='button'
          onClick={() => setIsVisible(!isVisible)}
        >
          Get in touch
        </Button>
      )}
    </>
  );
}
