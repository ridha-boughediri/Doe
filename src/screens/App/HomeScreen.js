import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { AuthContext } from "../../Context/AuthContext";

function HomeScreen() {
  const { userToken, userInfo } = useContext(AuthContext);

  console.log("userToken", userToken);
  console.log("userInfo", userInfo);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../../../assets/background-superbol.jpg")} // Assuming you have a local image
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Bienvenue sur le chat du sport américain
        </Text>
        <Text style={styles.subtitle}>Voici les matchs les plus récents :</Text>

        <View style={styles.exampleContainer}>
          <View style={styles.exampleItem}>
            <Image
              style={styles.exampleIcon}
              source={require("../../../assets/icon.png")} // Assuming you have a local image
            />
            <Text style={styles.exampleText}>Icônes d'applications</Text>
          </View>
          <View style={styles.exampleItem}>
            <Image
              style={styles.exampleIcon}
              source={require("../../../assets/icon.png")} // Assuming you have a local image
            />
            <Text style={styles.exampleText}>Widgets</Text>
          </View>
          <View style={styles.exampleItem}>
            <Image
              style={styles.exampleIcon}
              source={require("../../../assets/icon.png")} // Assuming you have a local image
            />
            <Text style={styles.exampleText}>Dock</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  exampleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  exampleItem: {
    alignItems: "center",
  },
  exampleIcon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 10,
  },
  exampleText: {
    color: "white",
    textAlign: "center",
  },
});

export default HomeScreen;
