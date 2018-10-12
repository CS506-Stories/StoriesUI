import React from 'react';
import {
  Text, View, Button,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { actions as Act } from '.';
import styles from './styles';

const { contSplash } = Act;

class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this.props.contSplash()} title="Continue" />
      </View>
    );
  }
}

export default connect(null, { contSplash })(Splash);
