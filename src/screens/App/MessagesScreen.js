import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import io from "socket.io-client";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const MessageScreen = () => {
  const { userInfo } = useContext(AuthContext);
  const Login = userInfo?.login;
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");

  useEffect(() => {
    // Replace 'your_server_url' with the actual URL of your Socket.io server
    const socket = io.connect("http://10.10.13.220:8888");

    // Event listener for receiving messages
    socket.on("message", (data) => {
      // Update the messages state when a new message is received
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // Fetch initial messages from the server using Axios
    axios
      .get("/messages")
      .then((response) => {
        setMessages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  const sendMessage = () => {
    // Replace 'your_server_url' with the actual URL of your Socket.io server
    const socket = io.connect("http://10.10.13.220:8888");
    socket.emit("message", { text: messageInput });

    // Add the message immediately to the state to display it without waiting for the server's response
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, sentByUser: true },
    ]);
    setMessageInput("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messageContainer}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={message.sentByUser ? styles.userMessage : styles.botMessage}
          >
            <Text style={styles.username}>
              {message.sentByUser ? userInfo.login : "Bot"}
            </Text>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <Button title="Envoi" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flex: 1,
  },
  userMessage: {
    backgroundColor: "#d2eaf0",
    padding: 10,
    alignSelf: "flex-end",
    marginBottom: 10,
    borderRadius: 8,
    maxWidth: "80%",
  },
  botMessage: {
    backgroundColor: "#f0e1d2",
    padding: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
    borderRadius: 8,
    maxWidth: "80%",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  username: {
    fontSize: 12,
    marginBottom: 5,
    color: "gray",
  },
});

export default MessageScreen;
