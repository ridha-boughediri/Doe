import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { updateUser } from "../api/users";

// import { AuthContext } from "../Context/AutContext";
const EditProfileScreen = () => {
  //   const { userToken } = useContext(AuthContext);

  //   async function edit() {
  //     const token = await SecureStore.getItemAsync("userToken");
  //     axios({
  //       headers: {
  //         token: `Bearer ${token}`,
  //       },
  //     });
  //   }
  const { currentUser, setCurrentUser } = useAuth();
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [password, setPassword] = useState("");

  const handleUpdateProfile = async () => {
    const updatedUser = await updateUser(currentUser.id, {
      name,
      email,
      password,
    });
    setCurrentUser(updatedUser);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Save Changes" onPress={handleUpdateProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default EditProfileScreen;
