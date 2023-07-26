// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
// import { EvilIcons } from "@expo/vector-icons";

// import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
// import CustomDrawer from "../components/CustomDrawer";
// import ProfileScreen from "../screens/App/ProfileScreen";
// import HomeScreen from "../screens/App/HomeScreen";
// import NotificationScreen from "../screens/App/NotificationScreen";
// import EditProfileScreen from "../screens/App/EditProfileScreen";
// import AnotherTabScreen from "../screens/App/AnotherTabScreen";
// import AnnuaireScreen from "../screens/App/AnnuaireScreen";
// import UploadImageScreen from "../screens/App/UploadImageScreen";
// import ChatScreen from "../screens/App/ChatScreen";
// import MessagesScreen from "../screens/App/MessagesScreen";
// import GeneralScreen from "../screens/App/GeneralScreen";
// import BotScreen from "../screens/App/BotScreen";
// import Bot2Screen from "../screens/App/Bot2Screen";

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// const ProfileStack = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === "Compte") {
//             iconName = "face-man-profile";
//             return (
//               <MaterialCommunityIcons
//                 name={iconName}
//                 size={size}
//                 color={color}
//               />
//             );
//           } else if (route.name === "photo") {
//             iconName = "image";
//             return <EvilIcons name={iconName} size={size} color={color} />;
//           } else if (route.name === "Modifier") {
//             iconName = "edit";
//             return <Entypo name={iconName} size={size} color={color} />;
//           }
//           return null;
//         },
//       })}
//       screensOptions={{
//         activeTintColor: "#535763",
//         inactiveTintColor: "gray",
//         tabStyle: {
//           backgroundColor: "#D9821D",
//         },
//       }}
//     >
//       <Tab.Screen name="Compte" component={ProfileScreen} />
//       <Tab.Screen name="photo" component={UploadImageScreen} />
//       <Tab.Screen name="Modifier" component={EditProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// const HomeTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === "Mes infos") {
//             iconName = "table";
//             return <AntDesign name={iconName} size={size} color={color} />;
//           } else if (route.name === "AnotherTab") {
//             iconName = "table";
//             return <AntDesign name={iconName} size={size} color={color} />;
//           } else if (route.name === "Annuaire") {
//             iconName = "address-book-o";
//             return <FontAwesome name={iconName} size={size} color={color} />;
//           }
//           return null;
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: "#535763",
//         inactiveTintColor: "gray",
//         tabBarStyle: {
//           backgroundColor: "#D9821D", // Mettez la couleur jaune souhaitée ici
//         },
//       }}
//     >
//       <Tab.Screen name="Mes infos" component={HomeScreen} />
//       <Tab.Screen name="AnotherTab" component={AnotherTabScreen} />
//       <Tab.Screen name="Annuaire" component={AnnuaireScreen} />
//     </Tab.Navigator>
//   );
// };

// const MessageTab = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;

//           if (route.name === "Salon") {
//             iconName = "forum";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           } else if (route.name === "General") {
//             iconName = "chat";
//             return <Entypo name={iconName} size={size} color={color} />;
//           } else if (route.name === "Messages") {
//             iconName = "textsms";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           }
//           return null;
//         },
//       })}
//       screensOptions={{
//         activeTintColor: "#535763",
//         inactiveTintColor: "gray",
//         tabStyle: {
//           backgroundColor: "#D9821D",
//         },
//       }}
//     >
//       <Tab.Screen name="General" component={GeneralScreen} />
//       <Tab.Screen name="Salon" component={ChatScreen} />
//       <Tab.Screen name="Messages" component={MessagesScreen} />
//     </Tab.Navigator>
//   );
// };

// const AppStack = () => {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawer {...props} />}
//       tabBarOptions={{
//         drawerIcon: ({ color, size }) => {
//           let iconName;

//           if (props.route.name === "Dashboard") {
//             iconName = "dashboard";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           } else if (props.route.name === "Messages") {
//             iconName = "chat";
//             return <Entypo name={iconName} size={size} color={color} />;
//           } else if (props.route.name === "Profil") {
//             iconName = "person";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           } else if (props.route.name === "Bot sportif") {
//             iconName = "chat";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           } else if (props.route.name === "Notifications") {
//             iconName = "notifications";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           }
//           return null;
//         },
//       }}
//     >
//       <Drawer.Screen
//         name="Dashboard"
//         component={HomeTab}
//         options={{
//           drawerIcon: ({ color, size }) => {
//             let iconName = "dashboard";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           },
//         }}
//       />

//       <Drawer.Screen
//         name="Messages"
//         component={MessageTab}
//         options={{
//           drawerIcon: ({ color, size }) => {
//             let iconName = "chat";
//             return <Entypo name={iconName} size={size} color={color} />;
//           },
//         }}
//       />

//       <Drawer.Screen
//         name="Profil"
//         component={ProfileStack}
//         options={{
//           drawerIcon: ({ color, size }) => {
//             let iconName = "person";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           },
//         }}
//       />

//       <Drawer.Screen
//         name="Bot sportif"
//         component={BotScreen}
//         options={{
//           drawerIcon: ({ color, size }) => {
//             let iconName = "chat-bubble-outline";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           },
//         }}
//       />

//       <Drawer.Screen
//         name="Bot sportif2"
//         component={Bot2Screen}
//         options={{
//           drawerIcon: ({ color, size }) => {
//             let iconName = "person";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           },
//         }}
//       />

//       <Drawer.Screen
//         name="Notifications"
//         component={NotificationScreen}
//         options={{
//           drawerIcon: ({ color, size }) => {
//             let iconName = "notifications";
//             return <MaterialIcons name={iconName} size={size} color={color} />;
//           },
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// export default AppStack;

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import CustomDrawer from "../components/CustomDrawer";
import ProfileScreen from "../screens/App/ProfileScreen";
import HomeScreen from "../screens/App/HomeScreen";
import NotificationScreen from "../screens/App/NotificationScreen";
import EditProfileScreen from "../screens/App/EditProfileScreen";
import AnnuaireScreen from "../screens/App/AnnuaireScreen";
import UploadImageScreen from "../screens/App/UploadImageScreen";
import ChatScreen from "../screens/App/ChatScreen";
import MessagesScreen from "../screens/App/MessagesScreen";
import GeneralScreen from "../screens/App/GeneralScreen";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Compte") {
            iconName = "face-man-profile";
            return (
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "photo") {
            iconName = "image";
            return <EvilIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "Modifier") {
            iconName = "edit";
            return <Entypo name={iconName} size={size} color={color} />;
          }
          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#535763",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#D9821D", // Mettez la couleur jaune souhaitée ici
        },
      }}
    >
      <Tab.Screen name="Compte" component={ProfileScreen} />
      <Tab.Screen name="photo" component={UploadImageScreen} />
      <Tab.Screen name="Modifier" component={EditProfileScreen} />
    </Tab.Navigator>
  );
};

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Mes infos") {
            iconName = "table";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === "AnotherTab") {
            iconName = "table";
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === "Annuaire") {
            iconName = "address-book-o";
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#535763",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#D9821D", // Mettez la couleur jaune souhaitée ici
        },
      }}
    >
      <Tab.Screen name="Mes infos" component={HomeScreen} />
      <Tab.Screen name="Annuaire" component={AnnuaireScreen} />
    </Tab.Navigator>
  );
};

const MessageTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Salon") {
            iconName = "forum";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === "General") {
            iconName = "chat";
            return <Entypo name={iconName} size={size} color={color} />;
          } else if (route.name === "Messages") {
            iconName = "textsms";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          }
          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#535763",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#D9821D", // Mettez la couleur jaune souhaitée ici
        },
      }}
    >
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="General" component={GeneralScreen} />
      <Tab.Screen name="Salon" component={ChatScreen} />
    </Tab.Navigator>
  );
};

const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: "#D9821D", // Mettez la couleur jaune souhaitée ici
      }}
      drawerContentOptions={{
        activeTintColor: "#535763", // Couleur de l'icône lorsqu'il est actif
        inactiveTintColor: "gray", // Couleur de l'icône lorsqu'il n'est pas actif
        labelStyle: {
          fontSize: 16,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={HomeTab}
        options={{
          drawerIcon: ({ color, size }) => {
            let iconName = "dashboard";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        }}
      />

      <Drawer.Screen
        name="Messages"
        component={MessageTab}
        options={{
          drawerIcon: ({ color, size }) => {
            let iconName = "chat";
            return <Entypo name={iconName} size={size} color={color} />;
          },
        }}
      />

      <Drawer.Screen
        name="Profil"
        component={ProfileStack}
        options={{
          drawerIcon: ({ color, size }) => {
            let iconName = "person";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        }}
      />

      <Drawer.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            let iconName = "notifications";
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
