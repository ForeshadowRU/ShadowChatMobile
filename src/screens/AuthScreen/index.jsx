import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import userStore from "../../mobx/user";
import { observer } from "mobx-react";
import { signIn } from "./actions";

@observer
export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working {userStore.userStore.token}</Text>
        <Button title="Test" onPress={signIn} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
