import { Manifesto, Link, SocialLink } from "../src/components/typography";
import { useState } from "react";
import { Button } from "../src/components/button";
import styled from "styled-components";
function HomePage() {
  return (
    <main>
      <Header>
        <img
          style={{
            width: 120,
          }}
          src="/images/memoji.png"
          alt="Memoji portait of me"
        />
        <Manifesto>
          Hi, I’m Georgemaine—A product designer currently working on{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://pitch.com/"
            style={{ color: "var(--red)" }}
          >
            Pitch
          </Link>
          , the next-gen presentation tool. I enjoy making digital tools so
          simple and fun to use that you'll want to use them all the time. I
          also like tinkering with software projects and animation videos on the
          side. If you have one and think I can help or simply want to
          chat—reach out.
        </Manifesto>
        <CTA />
      </Header>
    </main>
  );
}

export default HomePage;

const Header = styled.header`
  text-align: center;
  margin: 120px auto 0;
  width: calc(100% - 64px);
  max-width: 414px;

  @media only screen and (min-width: 980px) {
    width: calc(100% -100px);
    max-width: 960px;
  }
`;

const CTAContainer = styled.div`
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

export function CTA() {
  const [socialLinksVisible, setSocialLinksVisible] = useState(false);

  return (
    <CTAContainer>
      {socialLinksVisible ? (
        <SocialLinks>
          <SocialLink
            href="mailto:georgemaine.lourens@gmail.com?subject=Hello 👋"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 4.61v7.533a2 2 0 002 2h14a2 2 0 002-2V4.61L9.374 9.573 9 9.788l-.374-.215L0 4.61zm0-1.73l9 5.178 9-5.178V2a2 2 0 00-2-2H2a2 2 0 00-2 2v.88z"
                fill="var(--white)"
              />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://twitter.com/georgemaine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 .01a8.552 8.552 0 01-2.57 1.406C14.422.112 12.796-.345 11.359.271 9.92.887 8.979 2.446 9 4.174v.92C6.08 5.178 3.315 3.614 1.636.928c0 0-3.272 8.274 4.091 11.951C4.042 14.165 2.035 14.81 0 14.72c7.363 4.597 16.363 0 16.363-10.572 0-.257-.022-.512-.065-.764C17.133 2.458 17.722 1.29 18 .01z"
                fill="var(--white)"
              />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://dribbble.com/georgemaine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.413 16.432a62.55 62.55 0 00-1.408-5.258c.5-.063 1.033-.094 1.596-.094.939 0 1.956.125 3.052.375a7.411 7.411 0 01-1.127 2.817 8.155 8.155 0 01-2.113 2.16zM10 17.793c-1.784-.03-3.333-.532-4.648-1.502.125-.25.344-.571.657-.962.313-.392.705-.822 1.174-1.291a10.16 10.16 0 011.737-1.362 10.371 10.371 0 012.3-1.08c.627 1.66 1.143 3.568 1.55 5.728-.845.313-1.768.47-2.77.47zM2.207 10v-.094h.845c.813 0 1.846-.063 3.098-.188 1.252-.125 2.582-.407 3.99-.845l.47 1.033c-.939.313-1.776.704-2.511 1.174-.736.47-1.37.947-1.902 1.432a13.52 13.52 0 00-1.338 1.385c-.36.438-.634.813-.821 1.127a7.455 7.455 0 01-1.362-2.301A7.778 7.778 0 012.206 10zm4.319-6.995c.282.313.673.821 1.174 1.526.5.704 1.048 1.604 1.643 2.7-1.19.343-2.332.578-3.428.703-1.095.125-2.003.188-2.723.188h-.75A7.933 7.933 0 013.92 5.094a7.374 7.374 0 012.606-2.09zM10 2.207c.939 0 1.815.148 2.63.446a8.353 8.353 0 012.253 1.244 10.29 10.29 0 01-3.85 2.77A33.832 33.832 0 009.53 4.085c-.47-.72-.861-1.3-1.174-1.738A9.438 9.438 0 0110 2.207zm6.15 2.957c1.002 1.284 1.55 2.77 1.643 4.46a16.757 16.757 0 00-3.192-.328c-.814 0-1.565.062-2.254.188-.187-.439-.36-.845-.516-1.221 1.596-.689 3.036-1.722 4.32-3.099zM10 0C7.152.063 4.789 1.033 2.91 2.91 1.034 4.79.064 7.153 0 10c.063 2.848 1.033 5.211 2.91 7.09C4.79 18.966 7.153 19.936 10 20c2.848-.063 5.211-1.033 7.09-2.91C18.966 15.21 19.936 12.847 20 10c-.063-2.848-1.033-5.211-2.91-7.09C15.21 1.034 12.847.064 10 0z"
                fill="var(--white)"
              />
            </svg>
          </SocialLink>
          <SocialLink
            href="www.linkedin.com/in/georgemaine"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3 15.3H12.6V10.53C12.6 9.783 11.997 9.18 11.25 9.18C10.503 9.18 9.9 9.783 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.524 11.331 7.02 12.15 7.02C13.887 7.02 15.3 8.433 15.3 10.17V15.3ZM4.05 5.679C3.15 5.679 2.421 4.95 2.421 4.05C2.421 3.15 3.15 2.421 4.05 2.421C4.95 2.421 5.679 3.15 5.679 4.05C5.679 4.95 4.95 5.679 4.05 5.679ZM5.4 15.3H2.7V7.2H5.4V15.3ZM16.2 0H1.8C0.801 0 0 0.801 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.801 17.19 0 16.2 0Z"
                fill="var(--white)"
              />
            </svg>
          </SocialLink>
        </SocialLinks>
      ) : (
        <Button onClick={() => setSocialLinksVisible(!socialLinksVisible)}>
          Get in touch
        </Button>
      )}
    </CTAContainer>
  );
}
