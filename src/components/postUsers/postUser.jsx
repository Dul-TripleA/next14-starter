import Image from "next/image";
import { getUser } from "../../../lib/data";
import styles from "./postUsers.module.css";

// API FETCH DATA
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: "no-store"
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // const user = await getData(userId);
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user.img ? user.img : "/img/noavatar.png"}
        alt=""
        className={styles.avatar}
        width={50}
        height={50}
      />
      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.authorName}>{user.username}</span>
      </div>
    </div>
  );
};
export default PostUser;
