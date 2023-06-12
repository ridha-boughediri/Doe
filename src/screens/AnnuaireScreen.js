import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios from "axios";
import { BASE_URL } from "../config";

const AnnuaireScreen = () => {
  const [contacts, setContacts] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/users`);
      const data = response.data;
      setContacts(data); // Mettre à jour l'état des contacts avec les données reçues de l'API
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers(); // Appel de la fonction fetchUsers lors du montage du composant
  }, []);

  const renderContact = ({ item }) => (
    <View style={styles.contactContainer}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhoneNumber}>{item.phoneNumber}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts.data}
        renderItem={renderContact}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  contactContainer: {
    marginBottom: 16,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactPhoneNumber: {
    fontSize: 14,
    color: "gray",
  },
});

export default AnnuaireScreen;
