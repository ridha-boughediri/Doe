import React from "react";
// /import AppStack from "./src/navigation/AppStack";
import { AuthProvider } from "./src/context/AutContext";
// import AppNav from "./src/navigation/AppNav";
// import AppNav2 from "./src/navigation/AppNav2";
import AppStack from "./src/navigation/AppStack";
// import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./src/navigation/AutStack";

const App = () => {
  return (
    <AuthProvider>
      {/* <AppStack /> */}

      {/* <AppNav /> */}
      <AuthStack />
    </AuthProvider>
  );
};

export default App;
