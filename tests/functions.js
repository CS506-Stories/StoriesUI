
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line
  return re.test(email);
}
function displayResult(disp, ema, pass, handle) {
  if (disp) {
    return 'true';
  } else if (ema && pass && handle) {
    return 'true';
  } else if (!ema && !pass && !handle) {
    return 'email, password, and handle invalid';
  } else if (!ema && !pass) {
    return 'email and password invalid';
  } else if (!pass && !handle) {
    return 'password and handle invalid';
  } else if (!ema && !handle) {
    return 'email and handle invalid';
  } else if (!ema) {
    return 'email invalid';
  } else if (!pass) {
    return 'password invalid';
  } else if (!handle) {
    return 'handle invalid';
  }
}


//TODO Josh
function testCamera(arg){
  const hasCameraPermission = arg;
  if (hasCameraPermission === null) {
    return 'camera invalid';
  } else if (hasCameraPermission === false) {
    return 'no camera permission';
  } else {
    return 'camera permission';
  }
}
