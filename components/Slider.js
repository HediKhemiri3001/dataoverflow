import Image from "next/image";
import axios from "axios";
import { useState } from "react";
//EXTRACTED SLIDER CODE TO SEPERATE COMPONENT FILE WILL STYLE LATER.
export default function Slider(props) {
  const [imagesReady, setImagesReady] = useState(false);
  //FETCHING SLIDER IMAGES FROM FILESYSTEM THROUGH API.
  const images = async () => {
    const response = await axios.get("/api/hello");
    if (response.data.length == 0) {
      setImagesReady(true);
      return null;
    } else {
      setImagesReady(true);
      return response.data;
    }
  };
  return (
    <div className="slider">
      {images.length == 0 || !imagesReady
        ? "LOADING"
        : images.map((data) => {
            return (
              <>
                <Image
                  src={"/slider/" + data}
                  alt="me"
                  width="120"
                  height="120"
                  key={data}
                />
              </>
            );
          })}
    </div>
  );
}
