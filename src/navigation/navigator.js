import AuthScreen from "../screens/AuthScreen";
import HomeScreen from "../screens/HomeScreen";

export const publicRoutes = [{ name: "Auth", component: AuthScreen }];
export const protectedRoutes = [{ name: "HomeScreen", component: HomeScreen }];
