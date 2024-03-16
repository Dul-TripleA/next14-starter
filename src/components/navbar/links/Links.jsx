/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
const LinkComponent = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.link}>
        {links.map((link) => (
          <NavLink item={link} key={link.title}></NavLink>
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.btnSession}>Logout</button>
          </>
        ) : (
          <NavLink
            item={{ title: "Login", path: "/login" }}
            className={styles.btnSession}
          />
        )}
      </div>
      {/* <button className={styles.btnMenu}>Menu</button> */}
      <Image
        src="/img/menu.png"
        className={styles.btnMenu}
        onClick={() => setOpen((prev) => !prev)}
        width={50}
        height={50}
      />
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title}></NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
export default LinkComponent;
