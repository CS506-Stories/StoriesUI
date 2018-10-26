
export function displayResult(disp, ema, pass, handle)
{
  if(disp){
  //TODO call firebase
   // this.props.login(this.state.handle, this.state.password)
   alert('great success for login')
  }
  else {
     if(ema && pass && handle)
     {
       //TODO CALL FIREBASE
        // this.props.signUp(this.state.handle, this.state.email, this.state.password)
        alert('great success for signup.')
     }
    else {
      if (!ema && !pass && !handle) {
        alert('email, password, and handle invalid')
      }
      else if (!ema && !pass) {
        alert('email and password invalid')
      }
      else if (!pass && !handle) {
        alert('password and handle invalid')
      }
      else if (!ema && !handle) {
        alert('email and handle invalid')
      }
      else if (!ema) {
        alert('email invalid')
      }
      else if (!pass) {
        alert('password invalid')
      }
      else if (!handle) {
        alert('handle invalid')
      }
    }
  }
}
