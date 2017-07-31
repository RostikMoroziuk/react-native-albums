import React from 'react';
import {
  Text, AppRegistry
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test'
    };
  }

  render() {
    return ( 
      <Text> Some text </Text>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
