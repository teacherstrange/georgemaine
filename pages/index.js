import { Manifesto, Headline, Caption, Link } from "../src/components/typography"
import styled from "styled-components"
function HomePage() {
  return <main>
    <Header>
    <img style={{
      width: 120,
      
    }} src="/images/memoji.png" alt="Memoji portait of me" />
    <Manifesto>
    Hi, I’m Georgemaine—A product designer currently working on <Link target="_blank" rel="noopener noreferrer" href="https://pitch.com/" style={{ color: 'var(--red)'}}>Pitch</Link>, the next-gen presentation tool. I enjoy making digital tools so simple and fun to use that you'll want to use them all the time. I also like tinkering with software projects and animation videos on the side. If you have one and think I can help or simply want to chat—reach out.
    </Manifesto>
    </Header>
    </main>
}

export default HomePage

const Header = styled.header`
text-align: center;
  margin: 120px auto 0;
  width: calc(100% - 64px);
  max-width: 414px;

  @media only screen and (min-width: 980px) {
    width: calc(100% -100px);
    max-width: 980px;
  }
`;