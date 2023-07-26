import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../Context/AuthContext";
import { BASE_URL } from "../../config";
import axios from "axios";

const EditProfileScreen = () => {
  const { userInfo, userToken } = useContext(AuthContext);
  console.log("userInfo", userInfo);
  console.log("userToken", userToken);

  // Use useEffect to update state when userInfo changes
  useEffect(() => {
    setEmail(userInfo.email);
    setLastname(userInfo.lastname);
    setFirstname(userInfo.firstname);
    setLogin(userInfo.login);
  }, [userInfo]);

  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState(userInfo.lastname);
  const [firstname, setFirstname] = useState(userInfo.firstname);
  const [login, setLogin] = useState(userInfo.login);

  const handleUpdateProfile = () => {
    const userData = {
      lastname: lastname,
      firstname: firstname,
      login: login,
      email: email,
      password: password,
    };

    const userId = userInfo.id;
    const token = userToken;

    console.log("userData", userData);

    axios
      .patch(`${BASE_URL}/users/${userId}`, userData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log("Profile updated successfully", response.data);
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
        value={login}
        onChangeText={setLogin}
        placeholder="Login"
        placeholderTextColor="black"
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
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
