import Image from "next/image";
export default function ContentTableRow(props) {
  //ACCORDING TO POSITION RENDERING ELEMENTS THIS MAY NEED IMPROVEMENTS
  props.position === "LEFT" ? (
    <>
      <div classname="content_text">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        {props.buttonlink && (
          <button>
            <a href={props.buttonlink}>Discover more !</a>
          </button>
        )}
      </div>
      <Image src={props.thumbnail}></Image>
    </>
  ) : (
    <>
      <Image src={props.thumbnail}></Image>
      <div classname="content_text">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        {props.buttonlink && (
          <button>
            <a href={props.buttonlink}>Discover more !</a>
          </button>
        )}
      </div>
    </>
  );
}
