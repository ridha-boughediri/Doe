import React from "react";
import AppNav from "./src/navigation/AppNav";
// import AppStack from "./src/navigation/AppStack";
// import AuthStack from "./src/navigation/AutStack";
// import { createStackNavigator } from "@react-navigation/stack";
import AuthProvider from "./src/Context/AutContext";

const App = () => {
  return (
    <AuthProvider>
      {/* <AppStack /> */}

      <AppNav />
      {/* <AuthStack /> */}
    </AuthProvider>
  );
};

export default App;
