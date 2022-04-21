import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
export default function ContentDelete(props) {
  const [error, setError] = useState("");
  const initialContent = useContext(ContentContext);
  const [content, setContent] = useState(initialContent);
  const deleteHandler = async (event) => {
    const response = await axios
      .delete("/api/content/delete", {
        content: event.target.value,
      })
      .catch((err) => {
        setError("Gotten error :" + err + " content not deleted.");
      })
      .then(() => {
        //CHECK HOW TO SET STATE OF PARENT COMPONENT FROM CHILD COMPONENT.
        setContent((prev) => {
          return prev.filter((content) => {
            content.name != event.target.value;
          });
          //PROBLEM : WHEN SETTING CONTENTS IT DOSEN'T SHOW THE NEW CONTENTS
        });
      });
  };
  return (
    <>
      <ContentContext.Provider value={content}>
        <ul>
          {content
            ? content.map((element) => (
                <li>
                  <Image src={element.thumbnail} height="50" width="50"></Image>
                  <h1>{element.name}</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    onClick={deleteHandler}
                    value={element.name}
                  >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
                  </svg>
                </li>
              ))
            : "No content to show."}
        </ul>
      </ContentContext.Provider>
    </>
  );
}
