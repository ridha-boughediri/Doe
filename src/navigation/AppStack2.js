import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MonDrawer from "../components/MonDrawer";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const AppStack2 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <MonDrawer {...props} />}>
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
              fontFamily: "Roboto-Medium",
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
    </NavigationContainer>
  );
};

export default AppStack2;
