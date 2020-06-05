import { GOOGLE_ANDROID_CLIENT, BACKEND_URL } from "react-native-dotenv";
import * as Google from "expo-google-app-auth";
import Axios from "axios";
import userStore from "../../mobx/user";

export const signIn = async () => {
  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT,
      scopes: ["profile", "email"],
    });
    if (result.type === "success") {
      const { idToken } = result;
      try {
        const response = await Axios.get(`${BACKEND_URL}/google`, {
          headers: {
            Authorization: idToken,
          },
        });
        userStore.setToken(response.data.auth_token);
        userStore.setData(response.data.user);
      } catch (e) {
        console.log(e.message);
      }
    } else {
      console.log("cancelled");
    }
  } catch (e) {
    console.log("error", e);
  }
};
