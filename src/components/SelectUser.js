import React, { Component } from "react";
import { AppRegistry, Button, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

class UserSelect extends Component {
  state = { text: "tuzmusic" };

  segue() {
    this.props.navigation.navigate("List", { username: this.state.text })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          style={{
            height: 30,
            width: 300,
            borderBottomColor: "black",
            borderBottomWidth: 0.5
          }}
          placeholder="Enter a github username"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
        />
        <Button title="Submit" onPress={this.segue.bind(this)}></Button>
      </View>
    );
  }
}
// export default connect(mapStateToProps, mapDispatchToProps)(UserSelect)
export default UserSelect;
