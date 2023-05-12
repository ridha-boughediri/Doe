import React from "react";
import { useContext } from "react";

import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AuthContext } from "../Context/AutContext";

const CustomDrawer = (props) => {
  const { logout, userInfo } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#7AC0FF" }}
      >
        <ImageBackground
          source={require("../../assets/backgroundblue.png")}
          style={{ padding: 20, height: 150 }}
        >
          <ImageBackground
            source={require("../../assets/profile.png")}
            style={{
              height: 80,
              width: 80,
              marginBottom: 10,
              borderRadius: 60,
            }}
          />

          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                color: "red",
                fontSize: 15,
                // fontFamily: "Roboto-Medieum",
              }}
            >
              {userInfo ? userInfo.firstname : "test"}
            </Text>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View
        style={{ padding: 20, borderStartWidth: 1, borderTopColor: "#ccc" }}
      >
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="settings" size={24} color="black" />
            <Text
              style={{
                fontSize: 15,
                // fontFamily: "Roboto-Medium",
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
