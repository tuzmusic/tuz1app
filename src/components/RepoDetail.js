import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { getRepoDetail } from "../reducer";

class RepoDetail extends Component {
  static navigationOptions = { title: "RepoDetail" };

  componentDidMount = () => {
    this.props.getRepoDetail("tuzmusic", "archivist");
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
      <View>
        <Text>{name}</Text>
        <Text>{full_name}</Text>
        <Text>{description}</Text>
        <Text>{forks_count}</Text>
        <Text>{stargazers_count}</Text>
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
