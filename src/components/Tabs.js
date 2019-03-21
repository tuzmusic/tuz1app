import { TabNavigator } from 'react-navigation';
import RepoList from "./RepoList";
import Profile from "./Profile";

export const Tabs = TabNavigator({
  RepoList: { screen: RepoList },
  Profile: { screen: Profile }
})