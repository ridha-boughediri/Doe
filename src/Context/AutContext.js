import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from "../config";
import { set } from "react-native-reanimated";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [test, setTest] = useState("je suis un developpeur millionnaires");

  const connexion = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/auth/login`, { email, password })
      .then(async (res) => {
        await SecureStore.setItemAsync("userToken", res.data.access_token);
        const user = jwtDecode(res.data.access_token);
        setUserInfo(user);
        setUserToken(res.data.access_token);
      })
      .catch((e) => {
        console.error("erreur de connexion", e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await SecureStore.deleteItemAsync("userToken");
      setUserToken(null);
      // Autres opérations de déconnexion ici, telles que supprimer le jeton de l'état global
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await SecureStore.getItemAsync("userToken");
      setUserToken(userToken);
      setIsLoading(false);
      const user = jwtDecode(userToken);
      setUserInfo(user);
    } catch (error) {
      console.log(`isLogged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        test,
        userToken,
        userInfo,
        isLoading,
        isLoggedIn,
        connexion,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
