import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={require("../../assets/background-superbol.jpg")}
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Bienvenue sur le chat du sport american
        </Text>
        <Text style={styles.subtitle}>Voici les match les plus recents :</Text>
        <View style={styles.exampleContainer}>
          <View style={styles.exampleItem}>
            <Image
              style={styles.exampleIcon}
              source={{ uri: "https://i.imgur.com/2QK5X9k.png" }}
            />
            <Text style={styles.exampleText}>Icônes d'applications</Text>
          </View>
          <View style={styles.exampleItem}>
            <Image
              style={styles.exampleIcon}
              source={{ uri: "https://i.imgur.com/dRdPJQu.png" }}
            />
            <Text style={styles.exampleText}>Widgets</Text>
          </View>
          <View style={styles.exampleItem}>
            <Image
              style={styles.exampleIcon}
              source={{ uri: "https://i.imgur.com/95aN5bs.png" }}
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
