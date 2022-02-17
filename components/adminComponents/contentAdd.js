import { useState, useRef } from "react";
import Image from "next/image";
import axios from "axios";

export default function ContentAdd() {
  const [checkboxClicked, setCheckboxClicked] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const onCheckboxClick = () => {
    setCheckboxClicked(!checkboxClicked);
  };
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

    const response = await axios.post("/api/content", formData, config);

    console.log("response", response.data);
  };
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const onClickHandler = () => {
    fileInputRef.current?.click();
  };
  const onSubmitHandler = (event) => {
    if (!event.target.files?.length) {
      setMessage("You need a thumbnail for content!");
      return;
    }

    const formData = new FormData(event.target);

    onChange(formData);

    formRef.current?.reset();
    setMessage("");
  };
  const fileUploadChange = (event) => {
    const [file] = event.target.files;
    if (file) setUploadedImage(URL.createObjectURL(file));
  };
  return (
    <form ref={formRef} onSubmit={onSubmitHandler}>
      <input type="text" name="name" placeholder="Content name."></input>
      <input
        type="text"
        name="description"
        placeholder="Brief content description."
      ></input>
      {message && <h1>{message}</h1>}
      <button type="button" onClick={onClickHandler}>
        Upload Single File
      </button>
      {uploadedImage && (
        <Image src={uploadedImage} width="50" height="50"></Image>
      )}
      <input
        multiple={false}
        name={"thumbnail"}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        onChange={fileUploadChange}
      />
      <label for="buttonlinkboolean">
        Does this content include a link to a page ?
      </label>
      <input
        accept="image/*"
        type="checkbox"
        name="buttonlinkboolean"
        onClick={onCheckboxClick}
        defaultChecked={checkboxClicked}
      ></input>
      {checkboxClicked && (
        <>
          <label for="buttonlink">The link that the button goes to:</label>
          <input type="text" name="buttonlink"></input>
        </>
      )}
      <input type="submit" value="submit"></input>
    </form>
  );
}
