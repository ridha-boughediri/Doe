import React, { useState, useEffect } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { BASE_URL } from "../../config";

const UploadImageScreen = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    // Vérification de la permission d'accès à la galerie d'images
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission denied");
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri_avatar: image,
        type: "image/jpeg",
        name: "image.jpg",
      });

      const response = await axios.post(`${BASE_URL}/users/upload`, formData);

      console.log(response.data);
      // Faire quelque chose avec la réponse du backend, par exemple mettre à jour l'état de votre application
    } catch (error) {
      console.error("Failed to upload image:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Télécharger une image</Text>
      <Button title="Choisir une image" onPress={pickImage} />
      {image && (
        <View style={styles.previewContainer}>
          <Image source={{ uri: image }} style={styles.previewImage} />
          <Button title="Télécharger" onPress={uploadImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  previewContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  previewImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default UploadImageScreen;
