import Image from "next/image";

export default function ContentDelete({ content }) {
  const [contents, setContents] = useState(content);
  const [message, setMessage] = useState("");
  const deleteHandler = async (event) => {
    const response = await axios.delete("/api/content", {
      data: event.target.value,
    });
    console.log("Content Deleted");
    setMessage("Content deleted.");
    setContents((prev) => {
      return prev.filter((value) => {
        return value != content;
      });
    });
  };
  return (
    <>
      <h1>{message}</h1>
      <ul>
        {contents.map((element) => (
          <li>
            <Image src={content.thumbnail} height="50" width="50"></Image>
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
        ))}
      </ul>
    </>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/content");
  console.log(res.data);
  return {
    props: {
      content: res.data,
    },
  };
};
