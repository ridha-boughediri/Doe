// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, SectionList } from "react-native";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import { ListItem } from "react-native-elements";

// const AnnuaireScreen = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${BASE_URL}/users`)
//       .then((response) => {
//         const data = response.data;
//         setUsers(data);
//       })
//       .catch((error) => {
//         console.error("Error retrieving users", error);
//       });
//   }, []);

//   const personnes = users.data;

//   const list = [
//     {
//       name: "Amy Farha",
//       avatar_url:
//         "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
//       subtitle: "Vice President",
//     },
//     {
//       name: "Chris Jackson",
//       avatar_url:
//         "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
//       subtitle: "Vice Chairman",
//     },
//   ];

//   return (
//     <View>
//       {list.map((l, i) => (
//         <ListItem
//           key={i}
//           leftAvatar={{ source: { uri: l.avatar_url } }}
//           title={l.name}
//           subtitle={l.subtitle}
//           bottomDivider
//         />
//       ))}
//     </View>
//   );
// };

import * as React from "react";
import { View, FlatList, Alert, StyleSheet, Text } from "react-native";
import { List, Button, Avatar } from "react-native-paper";
import { Ionicons as Icon } from "@expo/vector-icons";

const data = [1, 2, 3];

const alert = (s) => {
  Alert.alert(
    s,
    "Are you sure you would like to exit",
    [
      {
        text: "Stay",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Exit", onPress: () => console.log("Cancel Pressed") },
    ],
    { cancelable: false }
  );
};

const styles = StyleSheet.create({
  quizAttrContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    height: 25,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    margin: 5,
    paddingTop: 3,
  },
  quizAttrLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 2,
  },
  quizAttrMid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  quizAttrRight: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 2,
  },
  infoText: {
    color: "#676767",
    fontSize: 15,
  },
  infoIcon: {
    color: "#676767",
    marginRight: 5,
  },
});

const AnnuaireScreen = () => (
  <View style={{ flex: 1, paddingTop: 30 }}>
    <FlatList
      data={data}
      renderItem={(item) => (
        <View
          style={{
            borderRadius: 5,
            borderWidth: 1,
            margin: 5,
            borderColor: "#e0e0e0",
          }}
        >
          <List.Item
            title={
              "Itemasdfadsfasdfsdafsdafsdafsadfasdfasdfsadfsdafasdfasdfasdf"
            }
            description="Item description"
            left={(props) => (
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Avatar.Image
                  size={64}
                  source={{
                    uri: "https://quranicquizzes.com/Content/QuizImages/wuhoxos2.e12.png",
                  }}
                />
              </View>
            )}
            right={(props) => (
              <View>
                <Button
                  style={{ marginbottom: 5 }}
                  color="#1d4b86"
                  icon="library-books"
                  mode="contained"
                  onPress={() => alert("Learn")}
                >
                  Learn
                </Button>
                <Button
                  style={{ marginTop: 5 }}
                  dark={true}
                  color="#f37737"
                  icon="play-arrow"
                  mode="contained"
                  onPress={() => console.log("Pressed")}
                >
                  Play
                </Button>
              </View>
            )}
          />
          <View style={styles.quizAttrContent}>
            <View style={styles.quizAttrLeft}>
              <Icon name="ios-play-circle" style={styles.infoIcon} size={20} />
              <Text style={styles.infoText}>{item.NumberPlayed}</Text>
            </View>
            <View style={styles.quizAttrMid}>
              <Icon name="ios-calendar" style={styles.infoIcon} size={20} />
              <Text style={styles.infoText}>{item.Created}</Text>
            </View>
            <View style={styles.quizAttrRight}>
              <Icon name="ios-list" style={styles.infoIcon} size={20} />
              <Text style={styles.infoText}>{item.NumberQuestions}</Text>
            </View>
          </View>
        </View>
      )}
    />
  </View>
);

export default AnnuaireScreen;
