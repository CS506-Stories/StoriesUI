import React from 'react';
import {
  Text, View, Button,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { updateLogin } from './actions';


const Login = (props) => (





  <View style={styles.container}>
    <Text>in login. Open up App.js to start working on your app!</Text>
    <Button onPress={props.updateLogin} title="Continue" />
    <Text>{props.reduxExample}</Text>
  </View>
);



// These are just used to validate that the props we are recieving make sense.
// This is to keep us sane.
Login.propTypes = {
  updateLogin: PropTypes.func.isRequired,
  reduxExample: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    reduxExample: state.loginReducer.reduxExample,
  };
}

export default connect(mapStateToProps, { updateLogin })(Login);
