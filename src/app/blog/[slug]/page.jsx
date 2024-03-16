import Image from "next/image";
import styles from "./single.module.css";
import PostUser from "@/components/postUsers/postUser";
import { Suspense } from "react";
import { getPost } from "../../../../lib/data";

// API FETCH DATA
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.leftContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.details}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detail}>
            <span className={styles.published}>Published</span>
            <span className={styles.date}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.desc}>{post.desc}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
