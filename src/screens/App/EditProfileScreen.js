import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL } from "../../config";
import axios from "axios";

const EditProfileScreen = ({ navigation }) => {
  const { userInfo, userToken } = useContext(AuthContext);

  // Use useEffect to update state when userInfo changes
  useEffect(() => {
    setLastname(userInfo.lastname);
    setFirstname(userInfo.firstname);
    setUsername(userInfo.username);
  }, [userInfo]);

  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState(userInfo.lastname);
  const [firstname, setFirstname] = useState(userInfo.firstname);
  const [username, setUsername] = useState(userInfo.username);

  const handleUpdateProfile = () => {
     // verification des inputes 
     if (!lastname.trim()) {
      alert('Rentrer votre nom');
      return;
    }

    if (!firstname.trim()) {
      alert('Rentrer votre prenom ');
      return;
    }
    if (!username.trim()) {
      alert('Rentrer votre login ');
      return;
    }
    if (!password.trim()) {
      alert('Rentrer votre mot de passe ');
      return;
    }
    const userData = {
      lastname: lastname,
      firstname: firstname,
      username: username,
      password: password,
    };

    const userId = userInfo.id;
    const token = userToken;


    axios
      .patch(`${BASE_URL}/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        alert(response.data.message);
        navigation.navigate("Compte");
      })
      .catch((error) => {
        console.error("Error updating profile", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Modifier mon Profil</Text>

      <TextInput
        style={styles.input}
        value={lastname}
        onChangeText={setLastname}
        placeholder="Nom"
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        value={firstname}
        onChangeText={setFirstname}
        placeholder="Prénom"
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Login"
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        placeholder="Nouveau Password"
        placeholderTextColor="black"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Valider les modifications" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default EditProfileScreen;
