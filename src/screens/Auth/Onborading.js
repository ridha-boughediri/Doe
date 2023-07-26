import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Constants } from "expo";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../../../assets/logo-white.png")}
        style={{ width: 200, height: 200, borderRadius: 150 }}
      />
      <Text
        style={{
          fontSize: 18,
          marginTop: 20,
          marginStart: 10,
          marginEnd: 10,
          textAlign: "center",
        }}
      >
        Le Premier tchat pour discuter Pronostique et suivi de ses equipe de
        sport americain favorites
      </Text>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <TouchableOpacity
          style={[
            styles.button,
            { borderColor: "#FBB034", width: 120, height: 40 },
          ]}
          onPress={() => navigation.navigate("Inscription")}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>
            Inscription
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button2,
            {
              backgroundColor: "#FFF",
              borderWidth: 1,
              borderColor: "#FBB034",
              width: 120,
              height: 40,
            },
          ]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.buttonText2, { color: "#FBB034" }]}>
            Connexion
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  button: {
    padding: 10,
    backgroundColor: "#FBB034",
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  button2: {
    padding: 10,
    backgroundColor: "#FBB034",
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  buttonText2: {
    color: "white",
    fontWeight: "bold",
  },
};

export default WelcomeScreen;
