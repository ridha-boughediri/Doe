import React from "react";
import AppNav from "./src/navigation/AppNav";
import AuthProvider from "./src/Context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;
