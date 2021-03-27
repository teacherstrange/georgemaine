import Link from "next/link";
import styles from "./styles.module.css";

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function PostCardGrid() {
  return (
    <div className={styles.postCardGridWrapper}>
      <div className={styles.postCardGrid}>
        {data.map((id, index) => (
          <Link key={index} href={`/?postId=${id}`} as={`/post/${id}`}>
            <a className={styles.postCard}>{id}</a>
          </Link>
        ))}
      </div>
    </div>
  );
}
