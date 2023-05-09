import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import CustomDrawer from "../components/CustomDrawer";

function AppStack() {
  return (
    <NavigationContainer>
      <CustomDrawer />
    </NavigationContainer>
  );
}

export default AppStack;
