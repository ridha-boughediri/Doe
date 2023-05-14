import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media.giphy.com/media/2lKZ0Gw0mLGwcIL7Dd/giphy.gif",
        }}
        style={styles.backgroundImage}
      />
      <Image
        source={require("../../assets/profile.png")}
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>John Doe</Text>
      <Text style={styles.profileBio}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
        ligula eu enim congue vehicula. Ut vel ullamcorper velit. Sed in ipsum
        at felis gravida commodo sed non est.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 20,
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
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fbb034",
  },
  profileBio: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileScreen;
