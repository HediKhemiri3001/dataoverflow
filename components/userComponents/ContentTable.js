import ContentTableRow from "./ContentTableRow";
import style from "/styles/userComponents/Content.module.css";

export default function ContentTable({ contentData }) {
  //TO ENABLE ALTERNATING CONTENT ELEMENT EFFECT IF ODD RIGHT ELSE LEFT
  const alternateLeftRight = (index) => {
    return index % 2 ? "LEFT" : "RIGHT";
  };

  return (
    <>
      <h1 className={style["content_table_header"]}>
        Get up to what we're doing at the moment!
      </h1>
      <div className={style["content_table"]}>
        {contentData.length != 0 &&
          contentData.map((data, index) => {
            return (
              <>
                <ContentTableRow
                  key={index}
                  name={data.name}
                  description={data.description}
                  thumbnail={data.thumbnail}
                  buttonlink={data.buttonlink}
                  position={alternateLeftRight(index)}
                />
              </>
            );
          })}
      </div>
    </>
  );
}
