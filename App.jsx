import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import userStore from "./src/mobx/user";
import { publicRoutes, protectedRoutes } from "./src/navigation/navigator";
import { observer } from "mobx-react";
const Stack = createStackNavigator();
if (__DEV__)
  GLOBAL.XMLHttpRequest =
    GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
@observer
export default class App extends React.Component {
  render() {
    const isSigned = !!userStore.userStore.token;
    console.log(userStore.userStore.token, isSigned);
    if (!isSigned)
      return (
        <NavigationContainer>
          <Stack.Navigator>
            {publicRoutes.map((item, index) => (
              <Stack.Screen key={index} {...item} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      );

    return (
      <NavigationContainer>
        <Stack.Navigator>
          {protectedRoutes.map((item, index) => (
            <Stack.Screen key={index} {...item} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
