import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        screeOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#8699DA",
          drawerInactiveTintColor: "#FFE001",
          drawerLabelStyle: {
            marginLeft: -25,
            // fontFamily: "Roboto-Medium",
            fontSize: 15,
          },
        }}
        options={{
          drawerIcon: () => <AntDesign name="home" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessagesScreen}
        options={{
          drawerIcon: () => (
            <AntDesign name="message1" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={24}
              color="black"
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: () => (
            <Ionicons name="notifications-outline" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
