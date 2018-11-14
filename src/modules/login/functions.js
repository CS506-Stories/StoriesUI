import { Actions } from 'react-native-router-flux';
import {
  Alert,
} from 'react-native';

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
}
export function displayResult(disp, ema, pass, handle) {
  if (disp) {
  // TODO call firebase
  // this.props.login(this.state.handle, this.state.password)
    Actions.splash();
  } else if (ema && pass && handle) {
    // TODO CALL FIREBASE
    // this.props.signUp(this.state.handle, this.state.email, this.state.password)
    Actions.splash();
  } else if (!ema && !pass && !handle) {
    Alert.alert('Error', 'email, password, and handle invalid');
  } else if (!ema && !pass) {
    Alert.alert('Error', 'email and password invalid');
  } else if (!pass && !handle) {
    Alert.alert('Error', 'password and handle invalid');
  } else if (!ema && !handle) {
    Alert.alert('Error', 'email and handle invalid');
  } else if (!ema) {
    Alert.alert('Error', 'email invalid');
  } else if (!pass) {
    Alert.alert('Error', 'password invalid');
  } else if (!handle) {
    Alert.alert('Error', 'handle invalid');
  }
}
