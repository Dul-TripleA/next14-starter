// "use client";

import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydratiopnTest from "@/components/hydratuonTest";
// import { useEffect, useState } from "react";

// const HydratiopnTestNoSSR = dynamic(
//   () => import("@/components/hydratuonTest"),
//   {
//     ssr: false,
//   }
// );

const Contact = () => {
  // const [isClient, setIsClient] = useState(false);
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);
  // const a = Math.random();

  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/img/contact.png" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        {/* {isClient && a} */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        {/* <HydratiopnTestNoSSR /> */}
        <form action="" className={styles.form}>
          <input type="text" name="" id="" placeholder="Input your name" />
          <input
            type="email"
            name=""
            id=""
            placeholder="Input your email address"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Input your phonenumber"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Input your message"
          ></textarea>
          {/* <button onClick={() => console.log("clicked")}>Send</button> */}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
