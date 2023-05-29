// import React, { useState, useEffect, useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useContext } from "react";
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
  const [rightIcon, setRightIcon] = useState("eye");
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.giphy.com/media/nFajf45jOVILGDMY9F/giphy.gif",
        }}
        style={styles.backgroundImage}
      />
      {/* <Text style={styles.linkText}>Mot de passe oublié</Text> */}
      <Text style={styles.headTxt}>
        Connectez-vous pour avoir accès aux espaces de chat !
        {/* <Text style={styles.linkText}>{test}</Text> */}
      </Text>

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={"white"}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <View style={styles.pass}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Mot de passe"
          placeholderTextColor={"white"}
          secureTextEntry={passwordVisibility}
        />
        <Pressable style={styles.icon} onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#fbb034" />
        </Pressable>
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
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headTxt: {
    marginHorizontal: 100,
    marginVertical: 50,
    // marginTop: "50%",
    // marginBottom: "50%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    color: "white",
    fontSize: 20,
    marginTop: "35%",
    // marginBottom: "35%",
  },

  input: {
    width: "100%",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#fbb034",
    borderRadius: 15,
    textAlign: "center",
    color: "white",
  },

  button: {
    backgroundColor: "#fbb034",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
  },

  linksContainer: {
    flexDirection: "row",
    marginTop: 50,
    marginBottom: 50,
    justifyContent: "space-between",
    width: "100%",
  },

  link: {
    alignItems: "center",
  },

  linkText: {
    color: "#fbb034",
  },

  pass: {
    width: "100%",
    flexDirection: "row",
  },

  icon: {
    marginTop: 20,
    marginLeft: -30,
  },
});
export default LoginScreen;
