import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, Avatar } from "react-native-paper";

const ListItemComponent = ({ item }) => {
  return (
    <List.Item
      style={styles.listItem}
      title={item.login}
      description={item.firstname}
      left={(props) => (
        <Avatar.Image {...props} source={{ uri: item.avatar }} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "80%", // Increase the width as per your requirement
    alignSelf: "center", // Center the items horizontally
  },
});

export default ListItemComponent;
