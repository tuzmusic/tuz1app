import React, { Component } from "react";
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { listRepos } from "../reducer";
import * as ENV from "../../environment.js"

class RepoList extends Component {
  componentDidMount() {
    const { username } = this.props.navigation.state.params
    this.props.listRepos(username);
  }
  renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => this.props.navigation.navigate("Detail", { name: item.name })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
  render() {
    const { repos } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={repos}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc"
  }
});

const mapStateToProps = state => {
  let storedRepositories = state.repos.map(repo => ({
    key: repo.id.toString(),
    ...repo
  }));
  return {
    repos: storedRepositories,
  };
};

const mapDispatchToProps = {
  listRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepoList);
