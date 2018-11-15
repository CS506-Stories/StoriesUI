// This test has 100% statement and branch coverage for the testEmail(...) function
function testEmail(){
  //test1: email
  var test = validateEmail('test');
  console.assert(test == false, "Error on test email. Regex returned true when 'test' is not a valid email")
  //test2: email
  test = validateEmail('test@test');
  console.assert(test == false, "Error on test email. Regex returned true when 'test@test' is not a valid email")
  //test3: email
  test = validateEmail('@test.com');
  console.assert(test == false, "Error on test email. Regex returned true when '@test.com' is not a valid email")
  //test4: email
  test = validateEmail('test@test.com');
  console.assert(test == true, "Error on test email. Regex returned false when 'test@test.com' is a valid email")
}

// This test has 100% statement and branch coverage for the handleSubmit(...) function
function testValidate(){
  var test = displayResult(true, true, true, true);
  console.assert(test == 'true', "Error on testValidate. should have returned true");

  test = displayResult(false, true, true, true);
  console.assert(test == 'true', "Error on testValidate. should have returned true");

  test = displayResult(false, false, false, false);
  console.assert(test == 'email, password, and handle invalid', "Error on testValidate. should have returned true");

  test = displayResult(false, false, false, true);
  console.assert(test == 'email and password invalid', "Error on testValidate. should have returned true");

  test = displayResult(false, true, false, false);
  console.assert(test == 'password and handle invalid', "Error on testValidate. should have returned true");

  test = displayResult(false, false, true, false);
  console.assert(test == 'email and handle invalid', "Error on testValidate. should have returned true");

  test = displayResult(false, false, true, true);
  console.assert(test == 'email invalid', "Error on testValidate. should have returned true");

  test = displayResult(false, true, false, true);
  console.assert(test == 'password invalid', "Error on testValidate. should have returned true");

  test = displayResult(false, true, true, false);
  console.assert(test == 'handle invalid', "Error on testValidate. should have returned true");
}


//MAIN
function callTests(){
  testEmail();
  testValidate();

  //TODO josh
  val f = testCamera(null);
  if(f != null)
  {

  }
}
