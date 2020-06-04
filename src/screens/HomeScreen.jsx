import React, { Component } from "react";
import { Text, View } from "react-native";
import { observer } from "mobx-react";
@observer
export default class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hi </Text>
      </View>
    );
  }
}
