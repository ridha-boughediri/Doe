import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
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
    paddingHorizontal: 20,
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
  },
  profileBio: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default ProfileScreen;
