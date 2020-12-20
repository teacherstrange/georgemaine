import { Manifesto, Headline, Caption, Link } from "../src/components/typography"
function HomePage() {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vh",
    height: "100vh"

  }}><Manifesto>
    Hi, I’m Georgemaine—A product designer currently working on <Link target="_blank" rel="noopener noreferrer" href="https://pitch.com/" style={{ color: 'var(--red)'}}>Pitch</Link>, the next-gen presentation tool. I enjoy making digital tools so simple and fun to use that you'll want to use them all the time. I also like tinkering with software projects and animation videos on the side. If you have one and think I can help or simply want to chat—reach out.
    </Manifesto>
    <Headline>Headline</Headline>
    <Caption><strong>Redesigned and developed Mollie’s Checkout.</strong> During the first quarter of 2019 I redesigned and developed the Checkout to close the technology gap, meet customer’s expectations of swiftly paying for their order with confidence.</Caption>

    </div>
}

export default HomePage