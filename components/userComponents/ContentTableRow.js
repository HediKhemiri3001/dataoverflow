import Image from "next/image";
import Link from "next/link";
import style from "/styles/userComponents/Content.module.css";
export default function ContentTableRow(props) {
  //ACCORDING TO POSITION RENDERING ELEMENTS THIS MAY NEED IMPROVEMENTS
  return props.position == "LEFT" ? (
    <>
      <div className={style["content"]}>
        <div className={style["content_text"]}>
          <h1 className={style["content_header"]}>{props.name}</h1>
          <p className={style["content_description"]}>{props.description}</p>
          {props.buttonlink && (
            <button className={style["content_btn"]}>
              <Link href={props.buttonlink}>Discover more !</Link>
            </button>
          )}
        </div>
        <div className={style["content_image"]}>
          <Image src={props.thumbnail} layout="fill"></Image>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className={style["content"]}>
        <div className={style["content_image"]}>
          <Image src={props.thumbnail} layout="fill"></Image>
        </div>
        <div className={style["content_text"]}>
          <h1 className={style["content_header"]}>{props.name}</h1>
          <p className={style["content_description"]}>{props.description}</p>
          {props.buttonlink && (
            <button className={style["content_btn"]}>
              <Link href={props.buttonlink}>Discover more !</Link>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
