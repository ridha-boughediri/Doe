import React, { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import { View, Text, TextInput, Button, FlatList } from "react-native";

// import { AuthContext } from "./AuthContext";

const socket = io("http://localhost:8888"); // Remplacez l'URL par votre propre URL de serveur Socket.io

const ChatScreen = () => {
  // const { userInfo } = useContext(AuthContext);

  // const [messages, setMessages] = useState([]);
  // const [content, setContent] = useState("");
  // const [userId, setUserId] = useState(userInfo.userId);

  // useEffect(() => {
  //   socket.on("chat", (message) => {
  //     setMessages((prevMessages) => [...prevMessages, message]);
  //   });

  //   return () => {
  //     socket.off("chat");
  //   };
  // }, []);

  // const handleSendMessage = () => {
  //   const message = {
  //     content: content,
  //     userId: userId,
  //   };

  //   socket.emit("chat", message);

  //   setContent("");
  // };

  // const renderMessages = () => {
  //   return messages.map((message, index) => (
  //     <div key={index}>
  //       <p>{message.content}</p>
  //       <p>Sender: {message.userId}</p>
  //     </div>
  //   ));
  // };

  return (
    <View>
      <Text>Chat</Text>
      {/* <View>{renderMessages()}</View>
      <TextInput
        type="text"
        placeholder="Message"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button> */}
    </View>
  );
};

export default ChatScreen;
