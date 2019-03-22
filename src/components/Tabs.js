import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import {
  createBottomTabNavigator,
  createTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import {
  createMaterialBottomTabNavigator,
  createMaterialTopTabNavigator
} from "react-navigation-material-bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Here is the HOME SCREEN</Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class SettingsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Here is the SETTINGS SCREEN</Text>
        <Button
          title="Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Here is the DETAILS SCREEN</Text>
      </View>
    );
  }
}

const materialTabSettings = {
  activeColor: "blue",
  inactiveColor: "black",
  barStyle: { backgroundColor: "aliceblue" }
};

const tabBarOptions = {
  activeTintColor: "red",
  inactiveTintColor: "grey"
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  Details: DetailsScreen
});

export const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-information-circle${focused ? "" : "-outline"}`;
          // Icons at https://infinitered.github.io/ionicons-version-3-search/
          iconName = "ios-home";
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === "Settings") {
          iconName = "ios-options";
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    ...materialTabSettings,
    tabBarOptions
  }
);

export default createAppContainer(TabNavigator);
