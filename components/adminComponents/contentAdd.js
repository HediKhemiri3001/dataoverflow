import { useState, useRef, useContext } from "react";
import Image from "next/image";
import axios from "axios";
import { ContentContext } from "../../context/ContentContext";

export default function ContentAdd(props) {
  const [checkboxClicked, setCheckboxClicked] = useState(false);
  const initialContent = useContext(ContentContext);
  const [content, setContent] = useState(initialContent);
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

    const response = await axios
      .post("/api/content/add", formData, config)
      .then((response) => {
        setContent((prev) => [...prev, response.data]);
      })
      .catch((err) => {
        setMessage("Error could not upload. error : " + err);
      });
  };
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const onClickHandler = () => {
    fileInputRef.current?.click();
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!fileInputRef.current?.value) {
      setMessage("You need a thumbnail for content!");
      return;
    }
    const formData = new FormData(event.target);
    console.log(formData);
    onChange(formData);
    formRef.current?.reset();
    setUploadedImage("");
    setCheckboxClicked(false);
    //setMessage("");
  };
  const fileUploadChange = (event) => {
    const [file] = event.target.files;
    if (file) setUploadedImage(URL.createObjectURL(file));
  };
  return (
    <ContentContext.Provider value={content}>
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
          accept="image/*"
          name="thumbnail"
          ref={fileInputRef}
          style={{ display: "none" }}
          type="file"
          onChange={fileUploadChange}
        />
        <label htmlFor="buttonlinkboolean">
          Does this content include a link to a page ?
        </label>
        <input
          type="checkbox"
          onClick={onCheckboxClick}
          defaultChecked={checkboxClicked}
        ></input>
        {checkboxClicked && (
          <>
            <label htmlFor="buttonlink">
              The link that the button goes to:
            </label>
            <input type="text" name="buttonlink"></input>
          </>
        )}
        <input type="submit" value="submit"></input>
      </form>
    </ContentContext.Provider>
  );
}
