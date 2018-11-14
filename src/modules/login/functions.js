import {
  Alert,
} from 'react-native';

import { auth } from '../../config/firebase';

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
}

function firebaseLogin(email, handle, pass) {
  try {
    return auth.signInWithEmailAndPassword(handle, pass);
  } catch (err) {
    console.log(err);
    return false;
  }
}

function firebaseRegister(email, handle, pass) {
  try {
    auth.createUserWithEmailAndPassword(email, pass).then((resp) => { console.log(resp); });
    // Add to database?
    return true;
  } catch (err) {
    return false;
  }
}

export function handleLogin(justLogin, handle, email, password) {
  const ema = validateEmail(email);
  // Do pass check here
  const pass = true;
  if (justLogin) {
    // TODO call firebase
    return (firebaseLogin(email, handle, password));
  }
  if (ema && pass && handle) {
    // TODO CALL FIREBASE
    return (firebaseRegister(email, handle, password));
  }
  if (!ema && !pass && !handle) {
    Alert.alert('Error', 'email, password, and handle invalid');
    return null;
  }
  if (!ema && !pass) {
    Alert.alert('Error', 'email and password invalid');
    return null;
  }
  if (!pass && !handle) {
    Alert.alert('Error', 'password and handle invalid');
    return null;
  }
  if (!ema && !handle) {
    Alert.alert('Error', 'email and handle invalid');
    return null;
  }
  if (!ema) {
    Alert.alert('Error', 'email invalid');
    return null;
  }
  if (!pass) {
    Alert.alert('Error', 'password invalid');
    return null;
  }
  if (!handle) {
    Alert.alert('Error', 'handle invalid');
    return null;
  }

  return null;
}
