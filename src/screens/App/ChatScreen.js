import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { io } from "socket.io-client";

const socket = io(`http://10.10.30.125:8888`);

const ChatScreen = () => {
  const { userInfo } = useContext(AuthContext);
  const firstname = userInfo?.firstname;

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to socket server");
    });

    socket.on("message", (messageData) => {
      console.log("Received message:", messageData);
      setMessages((prevMessages) => [messageData, ...prevMessages]);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from socket server");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now().toString(),
      content: message.trim(),
      sender: firstname,
    };

    socket.emit("message", newMessage);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View
              style={
                item.sender === firstname
                  ? styles.rightMessageItem
                  : styles.leftMessageItem
              }
            >
              <Text style={styles.messageSender}>{item.sender}</Text>
              <Text style={styles.messageContent}>{item.content}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
          inverted
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}
      >
        <TextInput
          style={styles.input}
          placeholder="Enter your message"
          value={message}
          onChangeText={(text) => setMessage(text)}
        />
        <Button title="Envoi" onPress={sendMessage} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  messageContainer: {
    flex: 1,
  },
  leftMessageItem: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  rightMessageItem: {
    backgroundColor: "#e0e0e0",
    padding: 12,
    borderRadius: 4,
    marginBottom: 8,
    alignSelf: "flex-end",
  },
  messageSender: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  messageContent: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
  },
});

export default ChatScreen;
