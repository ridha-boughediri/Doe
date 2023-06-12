import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { useState } from "react";
import { BASE_URL } from "../config";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";

const InscriptionScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [login, setLogin] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async () => {
    try {
      // Envoi des informations d'inscription au backend avec Axios
      const response = await axios.post(`${BASE_URL}/users/register`, {
        email,
        login,
        password,
        lastname,
        firstname,
      });

      const data = response.data;

      // Si l'inscription est réussie, sauvegarder l'access_token et les informations utilisateur dans SecureStore
      if (response.status === 200) {
        alert("Succès Inscription réussie.");
        navigation.navigate("Login");
      } else {
        alert("Erreur", data.message);
      }
    } catch (error) {
      alert("Erreur", "Une erreur est survenue.");
    }
  };

  const goToLoginScreen = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-white.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Inscription</Text>

      <TextInput
        style={styles.input}
        value={lastname}
        onChangeText={(v) => setLastname(v)}
        placeholder="Nom"
        placeholderTextColor={"white"}
      />

      <TextInput
        style={styles.input}
        placeholder="Prénom"
        onChangeText={(v) => setFirstname(v)}
        value={firstname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(v) => setEmail(v)}
        value={email}
      />
      <TextInput
        style={styles.input}
        value={login}
        onChangeText={(v) => setLogin(v)}
        placeholder="Login"
      />
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Mot de passe"
          secureTextEntry={passwordVisible}
          onChangeText={(v) => setPassword(v)}
          value={password}
        />
        <TouchableOpacity
          style={styles.passwordVisibilityIcon}
          onPress={togglePasswordVisibility}
        >
          <MaterialIcons
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="#888"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLoginScreen}>
        <Text style={styles.linkText}>Déjà inscrit ? Connectez-vous ici</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  passwordInputContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 40,
  },
  passwordVisibilityIcon: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#0E64D2",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 20,
    color: "#0E64D2",
    textDecorationLine: "underline",
  },
});

export default InscriptionScreen;
