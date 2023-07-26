import React, { useEffect, useState, useContext,useRef } from "react";
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
import { BASE_URL } from "../../config";

const MessageScreen = () => {
  const { userInfo, userToken } = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const yourRef = useRef(null);

  useEffect(() => {
    // Replace 'your_server_url' with the actual URL of your Socket.io server
    const socket = io.connect("http://10.10.30.125:8888");

    // Event listener for receiving messages
    socket.on("message", (data) => {
      // Update the messages state when a new message is received
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Event listener for socket errors
    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error.message);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    
    // Fetch initial messages from the server using Axios
    axios
      .get(`${BASE_URL}/messages/user`)
      .then((response) => {
        // Assuming response.data contains the actual messages
        const values = response.data.data.map((message) => {
          return { content: message.content, user_id: message.user.login };
        });
        setMessages(values);
      })
      .catch((error) => {
        console.error("Error fetching messages:", error);
      });
  }, []);

  const sendMessage = () => {

    const socket = io.connect("http://10.10.30.125:8888");
    const user_id = userInfo?.id;
    const messageData = {
      content: messageInput,
      user_id: user_id,
    };
    const messageOnScreen={
      content:messageInput,
      user_id:userInfo.username
    }

    axios
      .post("http://10.10.30.125:8888/messages", messageData, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        }
      })
      .then((response) => {
     
        socket.emit('message', messageOnScreen);
                // Successfully sent the message to the server
        // You may handle the response if needed
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        // If there was an error, revert the optimistic update
      });

    setMessageInput("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messageContainer}
      ref={yourRef}
      onContentSizeChange={() => yourRef.current.scrollToEnd()}
                onLayout={() => yourRef.current.scrollToEnd()}>
        {messages.map((message, index) => (
          <View
            key={index}
            style={message.sentByUser ? styles.userMessage : styles.botMessage}
          >
            <Text style={styles.username}>{message.user_id}</Text>
            <Text style={styles.messageText}>{message.content}</Text>
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
