import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { BASE_URL } from "../config";
import jwtDecode from "jwt-decode";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [test, setTest] = useState("je suis un développeur millionnaire");

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      const { access_token } = response.data;
      await SecureStore.setItemAsync("userToken", access_token);
      const decodedToken = jwtDecode(access_token);
      setUserInfo(decodedToken);
      setUserToken(access_token);
    } catch (error) {
      console.error("Erreur de connexion", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await SecureStore.deleteItemAsync("userToken");
      setUserToken(null);
      setUserInfo(null);
      // Autres opérations de déconnexion ici, telles que supprimer le jeton de l'état global
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const userToken = await SecureStore.getItemAsync("userToken");
      if (userToken) {
        setUserToken(userToken);
        const decodedToken = jwtDecode(userToken);
        setUserInfo(decodedToken);
      }
    } catch (error) {
      console.log(`Erreur lors de la vérification de la connexion : ${error}`);
    } finally {
      setIsLoading(false);
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
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
