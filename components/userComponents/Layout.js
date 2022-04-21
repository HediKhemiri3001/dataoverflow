import Image from "next/image";
import NavLink from "./NavLink";
import style from "/styles/Layout.module.css";

export default function Layout(props) {
  //Make fetching buttons dynamic for the case where we want to add a page or section.
  //We will go about this in a way where we fetch all buttons from a database
  //A button object will have a name attribute and a href attribute this will be directly injected in the Link component below.

  return (
    <>
      <nav className={style["navbar"]}>
        <div className={style.logo}>
          <Image
            src="/assets/home/Green_LOGO.png"
            height={112}
            width={300}
          ></Image>
        </div>
        <input id={style["menu_button"]} type="checkbox"></input>
        <div className={`${style["navbar_buttons"]}`}>
          <NavLink href="/" as="home" activeClassName={style["active-btn"]}>
            <a className={style["navbar_button"]}>Home</a>
          </NavLink>
          <NavLink href="/aboutus" activeClassName={style["active-btn"]}>
            <a className={style["navbar_button"]}>About us</a>
          </NavLink>
          <NavLink href="/workshops" activeClassName={style["active-btn"]}>
            <a className={style["navbar_button"]}>Workshops</a>
          </NavLink>
          <NavLink href="/videos" activeClassName={style["active-btn"]}>
            <a className={style["navbar_button"]}>DO Talks</a>
          </NavLink>
          <NavLink href="/congress" activeClassName={style["active-btn"]}>
            <a className={style["navbar_button"]}>Congress</a>
          </NavLink>
        </div>
      </nav>

      {props.children}
    </>
  );
}
