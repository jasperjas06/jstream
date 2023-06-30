import React, { useState } from "react";

import "./Admin.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

function Admin() {
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [description, setDescription] = useState();

  const send = () => {
    // const data = new FormData();
    // data.append("title", title);
    // data.append("file", file);
    // data.append("description", description);
    const data = {"title":title,"file":file,"description":description}
    // console.log(data);

    axios.post("https://j-stream-server.onrender.com/api-video/uploadVideo", {
        data,
      })
      .then((res) => console.log(res), toast.success("video uploaded"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              accept="video/mp4,video/x-m4v,video/*"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Description</label>
            <input
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
  </div>
  );
}

export default Admin;
