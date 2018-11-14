import { auth } from '../../config/firebase';

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
}

function successCb(resp) {
  //console.log(resp);
  return true;
}

function failCB(resp) {
  console.log(resp);
  return false;
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
    return(firebaseLogin(email, handle, password));
  } else if (ema && pass && handle) {
    // TODO CALL FIREBASE
    return( firebaseRegister(email, handle, password));
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
