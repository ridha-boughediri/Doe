import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import { List } from "react-native-paper";
import io from "socket.io-client";
import jwt_decode from "jwt-decode";
import { BASE_URL, URL_USER } from "../../config";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const GeneralScreen = () => {
  // const { userInfo, userToken } = useContext(AuthContext);

  // const [message, setMessage] = useState("");
  // const [messages, setMessages] = useState([]);
  // const socketRef = useRef(null);

  // useEffect(() => {
  //   socketRef.current = io(BASE_URL, { transports: ["websocket"] });

  //   socketRef.current.on("message", (data) => {
  //     console.log(`Received message: ${data}`);

  //     const messageExists = messages.some(
  //       (msg) => msg.content === data?.content && msg.login === data?.login
  //     );

  //     if (!messageExists) {
  //       setMessages((prevMessages) => [...prevMessages, data]);
  //     }
  //   });

  //   return () => {
  //     if (socketRef.current) {
  //       socketRef.current.disconnect();
  //     }
  //   };
  // }, [userToken, messages]);

  // const handleSend = () => {
  //   if (socketRef.current) {
  //     console.log(`Sending message: ${message}`);
  //     const decoded = jwt_decode(userToken);
  //     const mess = {
  //       content: message?.trim(),
  //       login: userInfo?.login,
  //     };

  //     axios
  //       .post(
  //         `${URL_USER}messages/`,
  //         { content: message, user_id: userInfo?.id },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${userToken}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         socketRef.current.emit("message", mess);
  //       })
  //       .catch((err) => {
  //         alert(err.response.data.message);
  //       });

  //     setMessage("");
  //   }
  // };

  // const renderItem = ({ item }) => (
  //   <View>
  //     <Text style={styles.login}>{item.login}</Text>
  //     <Text style={styles.message}>
  //       {item.content} - {item.firstname}{" "}
  //       {/* Make sure 'firstname' exists in 'item' */}
  //     </Text>
  //   </View>
  // );

  return (
    <View style={styles.container}>
      {/* <List.Section style={styles.list}>
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.messageId.toString()} // Use a unique identifier for 'keyExtractor'
          ref={FlatList} // Add a ref to the FlatList
          onContentSizeChange={() => FlatList.current.scrollToEnd()} // Use the ref to scroll to the end
          onLayout={() => FlatList.current.scrollToEnd()} // Use the ref to scroll to the end
        />
      </List.Section> */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message here..."
        />
        {/* <Button title="Send" onPress={handleSend} /> */}
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
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    marginBottom: 16,
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
  login: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  user_id: {
    padding: 5,
    fontSize: 14,
    color: "black",
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
