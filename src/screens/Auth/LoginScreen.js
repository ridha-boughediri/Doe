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
import { AuthContext } from "../../Context/AuthContext";

import { useForm, Controller } from "react-hook-form";

const LoginScreen = ({ navigation }) => {
  const { test, login } = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("varta@gmail.com");
  const [password, setPassword] = useState("varta");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (data) => {
    try {
      await login(data.email, data.password);
    } catch (error) {
      console.log("Erreur de connexion:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logo-white.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Connexion</Text>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(value) => {
                field.onChange(value);
                setEmail(value);
              }}
              value={field.value}
            />
          )}
          name="email"
          rules={{
            required: "Champ requis",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Entrez une adresse email valide",
            },
          }}
          defaultValue=""
        />
      </View>
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry={passwordVisible}
              onChangeText={(value) => {
                field.onChange(value);
                setPassword(value);
              }}
              value={field.value}
            />
          )}
          name="password"
          rules={{ required: "Champ requis" }}
          defaultValue=""
        />
        <TouchableOpacity
          style={styles.passwordVisibilityIcon}
          onPress={togglePasswordVisibility}
        >
          <MaterialIcons
            name={passwordVisible ? "visibility" : "visibility-off"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(handleLogin)}
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
        <TouchableOpacity style={styles.link}>
          {/* onPress={() => navigation.navigate("ResetPasswordScreen")} */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles remain unchanged

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
  inputContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
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
    backgroundColor: "#FBB034",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  linkText: {
    marginTop: 20,
    color: "#0E64D2",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
