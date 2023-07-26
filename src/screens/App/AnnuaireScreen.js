import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import axios from "axios";
import { BASE_URL } from "../../config";
import ListItemComponent from "../../components/ListItemComponent";
import { FlatList } from "react-native";

const AnnuaireScreen = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderUser = ({ item }) => <ListItemComponent item={item} />;

  return (
    <View style={styles.container}>
      <List.Section style={styles.listSection}>
        <List.Subheader>User List</List.Subheader>
        <List.AccordionGroup>
          <FlatList
            data={users?.data}
            renderItem={renderUser}
            keyExtractor={(item) => item.id.toString()}
          />
        </List.AccordionGroup>
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  listSection: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 5,
    marginBottom: 16,
  },
});

export default AnnuaireScreen;
