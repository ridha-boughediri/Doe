import { View, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

function BotScreen() {
  const [inputMessage, setInputMessage] = useState("");
  const [outputMessage, setOutputMessage] = useState(
    "Results should be shown here."
  );
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([]);

  const renderMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.user._id === 1) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "green",
                marginRight: 12,
                marginVertical: 12,
              },
            }}
            textStyle={{
              right: {
                color: "white",
              },
            }}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                backgroundColor: "white",
                marginLeft: 12,
              },
            }}
            textStyle={{
              left: {
                color: "black",
              },
            }}
          />
        </View>
      );
    }

    return <Bubble {...props} />;
  };

  // Implementing chat generation using gpt-3.5-turbo model
  const generateText = () => {
    setIsTyping(true);
    const message = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createAt: new Date(),
      user: { _id: 1 },
    };

    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, [message])
    );

    /**
     * Always put your api key in an environment file
     */

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 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`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-0613",
        messages: [
          {
            role: "user",
            content: inputMessage,
          },
        ],
      }),
    })
      .then((response) => response.json(ok))

      .then((data) => {
        console.log(data.choices[0].message.content);
        setInputMessage("");
        setOutputMessage(data.choices[0].message.content.trim());

        const message = {
          _id: Math.random().toString(36).substring(7),
          text: data.choices[0].message.content.trim(),
          createAt: new Date(),
          user: { _id: 2, name: "ChatGPT" },
        };

        setIsTyping(false);
        setMessages((previousMessage) =>
          GiftedChat.append(previousMessage, [message])
        );
      });
  };

  const submitHandler = () => {
    generateText();
  };

  const handleInputText = (text) => {
    setInputMessage(text);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "red",
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          height: 60,
          backgroundColor: "yellow",
          position: "absolute",
          top: 0,
          right: 0,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 22,
          width: "100%",
          zIndex: 9999,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 40,
            width: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log("Save chat")}>
          <Ionicons name="bookmark-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <GiftedChat
          messages={messages}
          renderInputToolbar={() => {}}
          user={{ _id: 1 }}
          minInputToolbarHeight={0}
          renderMessage={renderMessage}
          isTyping={isTyping}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginLeft: 10,
            backgroundColor: "white",
            paddingVertical: 8,
            marginHorizontal: 12,
            borderRadius: 12,
            borderColor: "black",
            borderWidth: 0.2,
          }}
        >
          <TextInput
            value={inputMessage}
            onChangeText={handleInputText}
            placeholder="Enter your question"
            placeholderTextColor="black"
            style={{
              color: "black",
              flex: 1,
              paddingHorizontal: 10,
            }}
          />

          <TouchableOpacity
            onPress={submitHandler}
            style={{
              padding: 6,
              borderRadius: 8,
              marginHorizontal: 12,
            }}
          >
            <FontAwesome name="send-o" color="green" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default BotScreen;
