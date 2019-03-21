import { StackNavigator } from "react-navigation";
import RepoDetail from "./RepoDetail";
import Tabs from "./Tabs";

export const Stack = StackNavigator({
  Home: { screen: Tabs },
  Detail: { screen: RepoDetail }
})