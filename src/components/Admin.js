import React, { useState } from "react";

import "./Admin.css";
import axios from "axios";

function Admin() {
  const [title, setTitle] = useState();
  const [file, setFile] = useState();
  const [description, setDescription] = useState();

  const send =()=> {
    const data = new FormData();
    data.append("title", title);
    data.append("file", file);
    data.append("description",description)

    axios.post("http://localhost:2022/api-video/uploadVideo", {data})
      .then(res => console.log(res),
      alert("video uploaded"))
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <form >
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              onChange={e=>setTitle(e.target.value)}
            />
          </div>
          <div className="flex">
            <label htmlFor="file">File</label>
            <input
              type="file"
              id="file"
              // accept=".mp4"
              onChange={e=>setFile(e.target.files[0])}
            />
          </div>
          <div className="flex">
            <label htmlFor="name">Description</label>
            <input
              type="text"
              id="description"
              onChange={e=>setDescription(e.target.value)}
            />
          </div>
        </form>
        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default Admin;