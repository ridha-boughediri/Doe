import React, { useContext, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AuthContext } from "../Context/AutContext";
import { BASE_URL } from "../config";
import axios from "axios";

const EditProfileScreen = () => {
  const { userInfo } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [login, setLogin] = useState("");

  const handleUpdateProfile = () => {
    const userData = {
      lastname: lastname,
      firstname: firstname,
      login: login,
      email: email,
      password: password,
    };

    const userId = userInfo.id; // Remplacez par l'ID de l'utilisateur à mettre à jour
    console.log("userData", userData);

    axios
      .patch(`${BASE_URL}/users/${userId}`, userData)
      .then((response) => {
        // Traitement de la réponse en cas de réussite de la mise à jour du profil
        console.log("Profile updated successfully", response.data);
      })
      .catch((error) => {
        // Gestion de l'erreur en cas d'échec de la mise à jour du profil
        console.error("Error updating profile", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Modifier mon Profil</Text>
      {/* <Text style={styles.heading}>{userInfo.id}</Text> */}

      <TextInput
        style={styles.input}
        value={lastname}
        onChangeText={setLastname}
        placeholder={`Nom (${userInfo.lastname})`}
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        value={firstname}
        onChangeText={setFirstname}
        placeholder={`Prénom (${userInfo.firstname})`}
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        value={login}
        onChangeText={setLogin}
        placeholder={`Login (${userInfo.login})`}
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        placeholder={`E-mail (${userInfo.email})`}
        placeholderTextColor="black"
        value={email}
        onChangeText={setEmail}
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
