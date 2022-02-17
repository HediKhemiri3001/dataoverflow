import { useState } from "react";

export default function ContentAdd() {
  const [checkboxClicked, setCheckboxClicked] = useState(false);
  const [message, setMessage] = useState("");
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
      <input
        multiple={false}
        name={"thumbnail"}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
      />
      <label for="buttonlinkboolean">
        Does this content include a link to a page ?
      </label>
      <input
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
    </form>
  );
}
