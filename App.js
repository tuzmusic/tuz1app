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
import UserSelect from "./src/components/SelectUser";

import MyNavigator from "./src/components/MyNavigator";
import PlatformNavigator from "./src/components/PlatformNavigator";

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const Tabs = createBottomTabNavigator({
  RepoList: RepoList,
  Profile: Profile
});

const Stack = createStackNavigator(
  {
    Select: UserSelect,
    List: RepoList,
    Detail: RepoDetail
  },
  {
    initialRouteName: "Select"
  }
);

const AppContainer = createAppContainer(Stack);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <PlatformNavigator />
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



