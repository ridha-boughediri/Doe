import React from "react";
import { AuthContext } from "../Context/AutContext";

function editeprofileScreen() {
  const { userToken } = useContext(AuthContext);

  async function edit() {
    const token = await SecureStore.getItemAsync("userToken");
    axios({
      headers: {
        token: `Bearer ${token}`,
      },
    });
  }

  return <div></div>;
}

export default editeprofileScreen;
