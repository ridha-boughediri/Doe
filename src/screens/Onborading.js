import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={require("../../../../assets/image/US_Sports_Insights-removebg-preview.png")}
        style={{ width: 300, height: 300 }}
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
          style={styles.button}
          onPress={() => navigation.navigate("Inscription")}
        >
          <Text style={styles.buttonText}>Inscription</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  button: {
    padding: 10,
    backgroundColor: "#0E64D2",
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
};

export default WelcomeScreen;
