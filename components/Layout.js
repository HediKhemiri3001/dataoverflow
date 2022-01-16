import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import style from "./Layout.module.css";

export default function Layout(props) {
  return (
    <Fragment>
      <nav className={style.navbar}>
        <Image
          src="/../public/members/oumayma.jpg"
          height={50}
          width={50}
          className={style.logo}
        ></Image>
        <Link href="/">
          <a className={style["navbar_button"]}>Home</a>
        </Link>
        <Link href="/videos">
          <a className={style["navbar_button"]}>Videos</a>
        </Link>
        <Link href="/aboutus">
          <a className={style["navbar_button"]}>About us</a>
        </Link>
      </nav>
      {props.children}
    </Fragment>
  );
}
