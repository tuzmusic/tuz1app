import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Here is the HOME SCREEN</Text>
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Here is the SETTINGS SCREEN</Text>
      </View>
    );
  }
}

export const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});

export default createAppContainer(TabNavigator);
