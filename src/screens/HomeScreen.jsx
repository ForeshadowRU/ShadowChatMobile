import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { observer } from "mobx-react";
import userStore from "../mobx/user";
@observer
export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri: userStore.userStore.avatar,
            width: 100,
            height: 100,
          }}
        ></Image>
        <Text>
          Hi {userStore.userStore.firstname} {userStore.userStore.lastname}
        </Text>
      </View>
    );
  }
}
