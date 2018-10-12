import React from 'react';
import {
  Text, View, Button,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { updateSplash } from './actions';

// This is where the "View" is created. There shouldnt be any real logic in here.
// Note: when you use "connect" from react-redux (which i use below), it passes
// the updated state in the form of props and the action callback also.
// Read the docs here to better understand this https://react-redux.js.org/docs/getting-started

const Splash = (props) => (
  <View style={styles.container}>
    <Text>Open up App.js to start working on your app!</Text>
    <Button onPress={props.updateSplash} title="Continue" />
    <Text>{props.reduxExample}</Text>
  </View>
);

// These are just used to validate that the props we are recieving make sense.
// This is to keep us sane.
Splash.propTypes = {
  updateSplash: PropTypes.func.isRequired,
  reduxExample: PropTypes.string.isRequired,
};

// This is the function which recieves the "new state", after the action is dispatched
// and the reducer is run. This returns the relevant part of the new state to be passed as a prop
// into Splash.
function mapStateToProps(state) {
  return {
    reduxExample: state.splashReducer.reduxExample,
  };
}


export default connect(mapStateToProps, { updateSplash })(Splash);
