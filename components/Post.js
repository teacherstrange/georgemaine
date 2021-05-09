import styles from "./styles.module.css";

const Article = () => (
  <article className={styles.articleContent}>
    <p className={styles.body}>
      <strong>Hello world.</strong> As you may or may not be aware, I like to
      tinker with software, and tools,. Ever since I was a young kid, I was
      fascinated with how things worked. Can I remake it differently? Would
      people like that better? The part I hated was actually showing my version
      to people. Go figure.
    </p>
    <p className={styles.body}>
      Strangely enough, the vicious cycle above is ongoing, which I don't mind
      personally. I make things—it makes me feel better. Software, photo's, tree
      houses, food, urban jungles, video's, clothes just as long as its useful
      to me or others.
    </p>
    <p className={styles.body}>
      I design—it's my job. Currently, I design products at Pitch. I taught
      myself the basics by copying other's work until I got stuck and needed
      help. I never liked the idea of learning craft from a book or going to
      school, so the only alternative was to reach out to people better than me
      and ask them to teach me. I'm aware this is weird. But it’s the way I am;
      I've met wonderful people that made me a better person and taught me so
      much. But it's still weird, I know.
    </p>
    <p className={styles.body}>
      Anyway, enough about me—onto the manifesto. From here on out, this is my
      site for my thoughts. If you like them, reach out, or not. If you feel
      it's stupid, that's fine—sometimes the feeling is mutual.
    </p>
    <p className={styles.body}>
      Either way, it's refreshing to have a corner on the web that I can call my
      own. Welcome, everyone.
    </p>
  </article>
);

const Artwork = () => <figure className={styles.articleArtwork} />;

const Post = () => (
  <>
    <Artwork />
    <Article />
  </>
);
export default Post;
