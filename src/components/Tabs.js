import React, { Component } from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

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

export const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = "ios-options";
        }
        return <IconComponent name={iconName} size={25} color={tintColor}/>
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey'
    }
  }
);

export default createAppContainer(TabNavigator);
