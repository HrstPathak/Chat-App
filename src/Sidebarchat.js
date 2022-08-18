import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import db from "./firebase";
import "./Sidebarchat.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Sidebarchat({ id, name, addNewChat }) {
  const [messages, setMessage] = useState("");
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  const createChat = () => {
    const roomname = prompt("Please enter name for chat");
    if (roomname) {
      db.collection("rooms").add({
        name: roomname,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg `} />
        <div className="Sidebarchat_info">
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="NewChat">
      <Button
        className="NewChat-Button"
        onClick={createChat}
        variant="contained"
        color="success"
      >
        Add New Chat
      </Button>
    </div>
    // <div onClick={createChat} className="sidebarchat newChat">
    //   <h2>Add New Chat</h2>
    // </div>
  );
}

export default Sidebarchat;
