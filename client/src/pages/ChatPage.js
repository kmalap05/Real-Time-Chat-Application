import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get("/api/chats");
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
      {chats.map((chat) => (
        <div key={chat._id}>
          <h1>{chat.chatName}</h1>
          <p>{}</p>
        </div>
      ))}
    </>
  );
};

export default ChatPage;
