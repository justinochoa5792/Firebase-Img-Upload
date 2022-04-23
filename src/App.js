import "./App.css";
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function App() {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const fileListRef = ref(storage, "images/");

  useEffect(() => {
    listAll(fileListRef).then((res) => {
      res.items.map((item) => {
        return getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const uploadImg = () => {
    if (file === null) return;
    const fileRef = ref(storage, `images/${file.name + v4()}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        alert("Image Uploaded");
        setFileList((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <h1>File Upload</h1>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <button onClick={uploadImg}> Upload Image</button>
      {fileList.map((url) => {
        return <img src={url} alt="name" />;
      })}
    </div>
  );
}

export default App;
