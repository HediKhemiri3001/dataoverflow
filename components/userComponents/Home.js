import Image from "next/image";
import style from "/styles/userComponents/Home.module.css";
export default function Home() {
  return (
    <>
      <section class={style["home"]} id="home">
        <div className={style["text_section"]}>
          <h1 className={style.title}>Welcome! </h1>
          <p className={style.text}>Some static text.</p>
          <img
            className={style["background-img-left"]}
            src="assets/home/Left_Side_Background_Element.png"
          ></img>
        </div>
        <div className={style["pictures_section"]}>
          <img
            className={`${style.backimage} ${style["img"]}`}
            src="/assets/home/Behind_Hand_Coding_Bro.png"
          />
          <img
            className={`${style["frontimage"]} ${style["img"]}`}
            src="/assets/home/Hand coding-bro.png"
          />
        </div>
        <img
          className={style["background-img-right"]}
          src="assets/home/Right_Side_Background_Element.png"
        ></img>
      </section>
    </>
  );
}
