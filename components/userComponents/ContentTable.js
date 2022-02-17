import axios from "axios";
import { useState } from "react";

export default function ContentTable(props) {
  const [contentReady, setContentReady] = useState(false);
  //FETCHING CONTENT DATA STORED IN DB THROUGH API
  const contentData = async () => {
    const response = await axios.get("/api/content");
    if (response.data.length == 0) {
      setContentReady(true);
      return null;
    } else {
      setContentReady(true);
      return response.data.toArray();
    }
  };
  //TO ENABLE ALTERNATING CONTENT ELEMENT EFFECT IF ODD RIGHT ELSE LEFT
  const alternateLeftRight = (index) => {
    return index % 2 ? "LEFT" : "RIGHT";
  };

  return (
    <div className="content_table">
      {contentData.length == 0 || !contentReady ? (
        <>
          <h1 className="error_message">Nothing to show</h1>
        </>
      ) : (
        contentData.map((data, index) => {
          return (
            <>
              <ContentTableRow
                key={index}
                name={data.name}
                description={data.description}
                thumbnail={data.thumbnail}
                position={alternateLeftRight(index)}
              />
            </>
          );
        })
      )}
    </div>
  );
}
