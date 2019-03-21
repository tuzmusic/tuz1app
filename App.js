import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";

import reducer from "./src/reducer";
import RepoList from "./src/components/RepoList";
import RepoDetail from "./src/components/RepoDetail";
import Profile from "./src/components/Profile";
// import Stack from "./src/components/Stack";
// import Tabs from "./src/components/Tabs";

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Tabs = createBottomTabNavigator({
  RepoList: {
    screen: RepoList
  },
  Profile: {
    screen: Profile
  }
});

const Stack = createStackNavigator(
  {
    Home: { screen: Tabs },
    Detail: RepoDetail
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <Stack style={styles.container} />
        </AppContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
