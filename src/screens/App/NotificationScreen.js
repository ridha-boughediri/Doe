// import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
// import Constants from "expo-constants";
// import { Notifications } from "expo";

const NotificationScreen = () => {
  // const [pushNotificationsEnabled, setPushNotificationsEnabled] =
  //   useState(false);
  // const [pushNotificationToken, setPushNotificationToken] = useState(null);

  // const registerForPushNotifications = async () => {
  //   const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  //   if (status !== "granted") {
  //     const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //     if (status !== "granted") {
  //       return;
  //     }
  //   }
  //   const token = await Notifications.getExpoPushTokenAsync();
  //   setPushNotificationToken(token);
  // };

  // const togglePushNotifications = () => {
  //   setPushNotificationsEnabled(!pushNotificationsEnabled);
  //   if (pushNotificationsEnabled) {
  //     Notifications.cancelAllScheduledNotificationsAsync();
  //   } else {
  //     registerForPushNotifications();
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Push Notifications</Text>
        {/* <Switch
          value={pushNotificationsEnabled}
          onValueChange={togglePushNotifications}
        /> */}
      </View>
      {/* {pushNotificationToken && (
        <View style={styles.token}>
          <Text style={styles.tokenLabel}>Push Notification Token:</Text>
          <Text style={styles.tokenValue}>{pushNotificationToken}</Text>
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  settingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  token: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
  },
  tokenLabel: {
    fontSize: 14,
    fontWeight: "bold",
  },
  tokenValue: {
    marginTop: 5,
    fontSize: 12,
    color: "#666",
  },
});

export default NotificationScreen;
