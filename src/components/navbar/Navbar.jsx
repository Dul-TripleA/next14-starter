import Link from "next/link";
import LinkComponent from "./links/Links";
import styles from "./navbar.module.css"

const Page = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <LinkComponent />
      </div>
    </div>
  );
};
export default Page;
