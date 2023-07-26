import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import io from "socket.io-client";
import { request } from "../../service/request";
import * as SecureStore from "expo-secure-store";
import jwt from "jwt-decode";

const GeneralScreen = () => {
  const yourRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socket = io("http://10.10.25.195:8888", { transports: ["websocket"] });

  useEffect(() => {
    socket.on("message", (data) => {
      console.log(`Received message: ${data}`);
      setMessages((messages) => [...messages, data]);
    });
    request("messages/user", "get", "").then((response) => {
      const values = response.data.map((message) => {
        return { content: message.content, user_id: message.user.login };
      });
      setMessages(values);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  const handleSend = async () => {
    if (socket) {
      console.log(`Sending message: ${message}`);
      var token = await SecureStore.getItemAsync("access_token");
      var decoded = jwt(token);
      const mess = {
        content: message,
        user_id: decoded.username,
      };
      request("messages/", "post", { content: message, user_id: decoded.id })
        .then((response) => {
          socket.emit("message", mess);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      setMessage("");
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        ref={yourRef}
        onContentSizeChange={() => yourRef.current.scrollToEnd()}
        onLayout={() => yourRef.current.scrollToEnd()}
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.message}>{item.content}</Text>
            <Text style={styles.userId}>{item.user_id}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  message: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  userId: {
    padding: 5,
    fontSize: 14,
    color: "gray",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    marginRight: 10,
  },
});

export default GeneralScreen;
