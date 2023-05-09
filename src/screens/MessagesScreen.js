import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const messagesData = [
  {
    id: "1",
    sender: "John Doe",
    subject: "Meeting Reminder",
    message:
      "Hey, just a reminder that we have a meeting scheduled for tomorrow at 10am. See you there!",
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    sender: "Jane Smith",
    subject: "Project Update",
    message:
      "Hi, I just wanted to give you a quick update on the project. We're making good progress and should be on track to meet our deadline.",
    timestamp: "1 day ago",
  },
  {
    id: "3",
    sender: "Bob Johnson",
    subject: "Vacation Request",
    message:
      "Hey, I was wondering if I could take next Friday off for a family event. Let me know if that's okay.",
    timestamp: "3 days ago",
  },
];

const MessagesScreen = ({ navigation }) => {
  const renderMessage = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.messageContainer}
        onPress={() => navigation.navigate("MessageDetails", { message: item })}
      >
        <Text style={styles.messageSender}>{item.sender}</Text>
        <Text style={styles.messageSubject}>{item.subject}</Text>
        <Text style={styles.messageTimestamp}>{item.timestamp}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messagesData}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messagesList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  messageContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  messageSender: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageSubject: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  messageTimestamp: {
    color: "#999",
    fontSize: 12,
  },
});

export default MessagesScreen;
