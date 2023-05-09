import React from "react";
// /import AppStack from "./src/navigation/AppStack";
import { AuthProvider } from "./src/context/AutContext";
// import AppNav from "./src/navigation/AppNav";
// import AppNav2 from "./src/navigation/AppNav2";
import AppStack2 from "./src/navigation/AppStack2";
// import { createStackNavigator } from "@react-navigation/stack";

const App = () => {
  return (
    <AuthProvider>
      <AppStack2 />

      {/* <AppNav /> */}

      {/* <AppStack /> */}
    </AuthProvider>
  );
};

export default App;
