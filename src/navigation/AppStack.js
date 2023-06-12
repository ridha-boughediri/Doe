import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import CustomDrawer from "../components/CustomDrawer";
import EditProfileScreen from "../screens/EditProfileScreen";
import AnotherTabScreen from "../screens/AnotherTabScreen";
import AnnuaireScreen from "../screens/AnnuaireScreen";
import UploadImageScreen from "../screens/UploadImageScreen";
import ChatbotScreen from "../screens/ChatbotScreen";
import { SalonScreen } from "../screens/SalonScreen";
// import GeneralScreen from "../screens/GeneralScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Compte"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="photo"
        component={UploadImageScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="image" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Modifier"
        component={EditProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="edit" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeTab = () => {
  return (
    //

    <Tab.Navigator
      screenOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Mes infos"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="table" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AnotherTab"
        component={AnotherTabScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="table" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Annuaire"
        component={AnnuaireScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="address-book-o" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MessageTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: "blue",
        inactiveTintColor: "gray",
      }}
    >
      {/* <Tab.Screen
        name="messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="textsms" size={size} color={color} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="General"
        component={GeneralScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="chat" size={size} color={color} />
          ),
        }}
      /> */}

      <Tab.Screen
        name="Salon"
        component={SalonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="forum" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        component={HomeTab}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Messages"
        component={MessageTab}
        options={{
          drawerIcon: ({ color, size }) => (
            <AntDesign name="message1" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profil"
        component={ProfileStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Bot sportif"
        component={ChatbotScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="robot" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="notifications-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
