import { StackNavigator } from "react-navigation";
import RepoDetail from "./RepoDetail";

const Stack = StackNavigator({
  Home: { screen: Tabs },
  Detail: { screen: RepoDetail }
})