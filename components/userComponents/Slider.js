import Image from "next/image";
import axios from "axios";
import { useState } from "react";
//EXTRACTED SLIDER CODE TO SEPERATE COMPONENT FILE WILL STYLE LATER.
export default function Slider({ images }) {
  return (
    <div className="slider">
      {images != [] &&
        images.map((data, index) => {
          return (
            <>
              <Image
                src={"/slider/" + data}
                alt="me"
                width="120"
                height="120"
                key={index}
              />
            </>
          );
        })}
    </div>
  );
}
