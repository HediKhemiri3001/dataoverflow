import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useRef } from "react";
import axios from "axios";
export default function SliderOps() {
  const [images, setImages] = useState([]);
  const [imagesReady, setImagesReady] = useState(false);
  const [message, setMessage] = useState("Click me to render the images.");
  const onChange = async (formData) => {
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const response = await axios.post("/api/slider/slider", formData, config);

    console.log("response", response.data);
  };
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const onClickHandler = () => {
    fileInputRef.current?.click();
  };
  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    const formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    onChange(formData);

    formRef.current?.reset();
  };
  const onListClickHandler = async () => {
    setMessage("Loading");
    const response = await axios.get("/api/slider/slider");
    if (response.data.length == 0) {
      setMessage("No images");
    } else {
      setImages(response.data);
      setImagesReady(true);
    }
  };
  const onRemoveClickHandler = async (image) => {
    const response = await axios.delete("/api/slider/delete/", {
      data: { image },
    });
    console.log("Image Deleted");
    setImages((prev) => {
      return prev.filter((value) => {
        return value != image;
      });
    });
    onListClickHandler();
  };

  return (
    <>
      <form ref={formRef}>
        <button type="button" onClick={onClickHandler}>
          Upload Single File
        </button>
        <input
          multiple={false}
          name={"theFiles"}
          onChange={onChangeHandler}
          ref={fileInputRef}
          style={{ display: "none" }}
          type="file"
        />
      </form>
      <hr></hr>
      <p>Let's try to list images:</p>
      <button type="button" onClick={onListClickHandler}>
        List Images in /slider
      </button>
      {images.length == 0 || !imagesReady
        ? message
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
                <button onClick={() => onRemoveClickHandler(data)}>
                  delete
                </button>
              </>
            );
          })}
    </>
  );
}
