// import React, { useState, useEffect, useContext } from "react";
import React, { useState, useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Image,
} from "react-native";
import { AuthContext } from "../Context/AutContext";

const LoginScreen = ({ navigation }) => {
  const { test, connexion } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // const handlePasswordVisibility = () => {
  //   if (rightIcon === "eye") {
  //     setRightIcon("eye-off");
  //     setPasswordVisibility(!passwordVisibility);
  //   } else if (rightIcon === "eye-off") {
  //     setRightIcon("eye");
  //     setPasswordVisibility(!passwordVisibility);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/logo-white.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />

      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Mot de passe"
          secureTextEntry={passwordVisible}
          onChangeText={setPassword}
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => connexion(email, password)}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate("Inscription")}
        >
          <Text style={styles.linkText}>S'inscrire</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.link}
          // onPress={() => navigation.navigate("ResetPasswordScreen")}
        ></TouchableOpacity>
      </View>
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
    borderColor: "#0E64D2",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 40,
    textAlign: "center",
    color: "black",
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
    color: "black",
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 20,
    color: "#0E64D2",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
