import React, { Component } from "react";
import { View, Button, Text } from "react-native";
import { connect } from "react-redux";
import { getRepoDetail } from "../reducer";

class RepoDetail extends Component {
  static navigationOptions = { title: "RepoDetail" };

  componentDidMount = () => {
    const { name } = this.props.navigation.state.params
    this.props.getRepoDetail("tuzmusic", name);
  };

  render() {
    if (this.props.loadingInfo) return <Text>Loading...</Text>;

    const {
      name,
      full_name,
      description,
      forks_count,
      stargazers_count
    } = this.props.repoInfo;

    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>{name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>{forks_count}</Text>
        <Text>{stargazers_count}</Text>
        <Button
          title="Go to Details... again (push)"
          onPress={() => this.props.navigation.push('Details')}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ repoInfo, loadingInfo }) => ({
  repoInfo,
  loadingInfo
});

const mapDispatchToProps ={
    getRepoDetail
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoDetail)
