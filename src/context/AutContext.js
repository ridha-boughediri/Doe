import React, { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { baseURLlien } from "../utils/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [test, setTest] = useState("je suis developpeur millionnaires");
  // Composant AuthProvider pour fournir le contexte de connexion à l'application

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setUserToken("123456789");
    AsyncStorage.setItem("userToken", userToken);
    setIsLoading(false);

    // try {
    //   setIsLoading(true);
    //   const response = await axios.post(`baseURLlien/${auth/login}`, {
    //     email,
    //     password,
    //   });
    //   const data = response.data;
    //   await SecureStore.setItemAsync("access_usertoken", data.access_usertoken);
    //   await SecureStore.setItemAsync("userInfo", JSON.stringify(data.userInfo));
    //   setUserInfo(data.userInfo);
    //   setUserToken(data.access_usertoken);
    //   console.warn("mes infos user", userInfo);
    //   console.warn("monUsertoken", data.access_usertoken);

    //   setIsLoading(false);
    //   return true;
    // } catch (error) {
    //   console.error(error);
    //   setIsLoading(false);
    //   return false;
    // }
  };

  const handleSignup = async (email, login, password, lastname, firstname) => {
    try {
      // Envoi des informations d'inscription au backend avec Axios
      const response = await axios.post(`baseURLlien/${users / register}`, {
        email,
        login,
        password,
        lastname,
        firstname,
      });

      const data = response.data;

      // Si l'inscription est réussie, sauvegarder l'access_token et les informations utilisateur dans SecureStore
      if (response.status === 200) {
        await SecureStore.setItemAsync("access_token", data.access_usertoken);
        await SecureStore.setItemAsync(
          "user_info",
          JSON.stringify(data.user_info)
        );

        Alert.alert("Succès", "Inscription réussie.");
      } else {
        Alert.alert("Erreur", data.message);
      }
    } catch (error) {
      Alert.alert("Erreur", "Une erreur est survenue.");
    }
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("userToken");
      setUserToken(userToken);
      setIsLoading(false);
    } catch (e) {
      console.error(`isLogged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        test,
        handleSignup,
        logout,
        isLoading,
        userToken,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
