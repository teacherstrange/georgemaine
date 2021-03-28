import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./styles.module.css";

export const slides = [
  { name: "Mollie Mobile", url: "mollie_mobile" },
  { name: "Mollie Video", url: "mollie_video" },
  { name: "Mollie Checkout", url: "mollie_checkout" },
  { name: "Mollie Apple Pay", url: "mollie_apple_pay" },
];

export const posts = [
  { name: "Hello world", url: "hello_world" },
  { name: "Suntory Toki review", url: "suntory_toki_review" },
];

export default function Nav({ filterOnClick, expandedFilter }) {
  const router = useRouter();

  return (
    <nav>
      <Link href={"/"}>Georgemaine</Link>
      <div>
        <ul>
          {slides.map((workItem, index) => (
            <li
              onClick={() =>
                expandedFilter === "posts" // Better naming
                  ? (router.push("/"), filterOnClick("slides"))
                  : null
              }
              key={index}
            >
              {workItem.name}
            </li>
          ))}
        </ul>
        <ul>
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/?postId=${post.url}`}
              as={`/post/${post.url}`}
            >
              <li onClick={() => filterOnClick("posts")}>{post.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <button>Get in touch</button>
    </nav>
  );
}
