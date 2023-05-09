import * as React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";

function Feed({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87ffEB",
      }}
    >
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
  );
}

function Notifications() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#87ffEB",
      }}
    >
      <Text>Notifications Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: "center",
          padding: 20,
          backgroundColor: "#87CEEB",
        }}
      >
        <Image
          source={require("../../assets/logo_fidmarseille.png")}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <Text style={{ marginVertical: 10 }}>Username</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Déconnexion"
        onPress={() => {
          // Code pour déconnecter l'utilisateur
        }}
        style={styles.logoutButton}
        labelStyle={styles.logoutButtonText}
      />
      <DrawerItem
        label="Paramètres"
        onPress={() => {
          // Code pour ouvrir les paramètres
        }}
        style={styles.settingsButton}
        labelStyle={styles.settingsButtonText}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function CustomDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Message" component={MessagesScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: "#FFA500",
    marginTop: "auto",
  },
  logoutButtonText: {
    color: "#fff",
  },
  settingsButton: {
    marginTop: 16,
    backgroundColor: "#FFA500",
    marginTop: "auto",
  },
  settingsButtonText: {
    color: "#255455",
  },
});

export default CustomDrawer;
