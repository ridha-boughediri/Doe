import React from "react";
import { useContext } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../Context/AuthContext";

const CustomDrawer = (props) => {
  const { logout, userInfo } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#D9A41D" }}
      >
        <ImageBackground style={{ padding: 20, height: 150 }}>
          <ImageBackground
            source={require("../../assets/profile.png")}
            style={{
              height: 100,
              width: 100,
              marginBottom: 10,
              borderRadius: 60,
            }}
          />

          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "red",
                fontSize: 15,
              }}
            >
              {userInfo ? userInfo.firstname : "test"}
            </Text>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View
        style={{
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: "#D9821D",
          backgroundColor: "#D9A41D", // Modification de la couleur en jaune
        }}
      >
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 5 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="settings" size={24} color="black" />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Parametres
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="logout-variant"
              size={24}
              color="black"
            />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Deconnection
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
