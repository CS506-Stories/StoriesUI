import React, { Component } from 'react';
import {
  Text, View, Button, ImageBackground, TextInput, StatusBar, Image,
} from 'react-native';

import DropdownAlert from 'react-native-dropdownalert';

import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { updateLogin } from './actions';

export class Login extends Component {
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  handleSubmit(){
    this.dropdown.alertWithType(this.validationOptions.type, this.validationOptions.title, this.validationOptions.message)
    if(this.state.displayLogin){
      this.props.login(this.state.handle, this.state.password)
    }
    else {
      this.setState({
        // TODO DB checks
        isHandleValid: true,
        isEmailValid: this.validateEmail(this.state.email),
        isPasswordValid: this.state.password.length >= 8,
      });
      if(this.isEmailValid && this.isPasswordValid)
      {
        this.props.signUp(this.state.handle, this.state.email, this.state.password)
      }
    }
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleHandle = (text) => {
    this.setState({ handle: text })
  }
  constructor(props) {
    super(props);
    this.state = {
      displayLogin: true,
      loaded: true,
      email: '',
      handle: '',
      password: '',
      isLoading: false,
      isEmailValid: true,
      isPasswordValid: true,
      isHandleValid: true,
    };
    const validationOptions =
    [
      {key: 0, backgroundColor: '#cc3232', type: 'error', title: 'Error', message: 'Please enter a password longer than 8 characters.'},
      {key: 1, backgroundColor: '#cc3232', type: 'error', title: 'Error', message: 'That handle is already taken. Please choose another!'},
      {key: 2, backgroundColor: '#cc3232', type: 'error', title: 'Error', message: 'Please enter a valid email.'},
      {key: 3, backgroundColor: '#cc3232', type: 'error', title: 'Error', message: 'Please enter a valid email and a password longer than 8 characters'},
      {key: 4, backgroundColor: '#cc3232', type: 'error', title: 'Error', message: 'That username password combination is not valid. Please try again.'},

    ]
  }
  render()
  {
    return(
      <ImageBackground source={require('../../../assets/img/tempBack.jpeg')} style={styles.back}>
      {
        this.state.loaded
        ? <KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled={true}>
            <StatusBar barStyle='light-content'/>
              <Image source={require('../../../assets/img/tempLogo.png')} style={styles.logoimg}/>
              { this.state.displayLogin
                ? <View style={styles.options}>
                    <View style={[styles.login, styles.active]} >
                      <Button onPress={ () => this.setState({displayLogin: true}) } title="Login" color="#112D4E"/>
                    </View>
                    <View style={styles.signup}>
                      <Button onPress={ () => this.setState({displayLogin: false}) } title="Sign up" color="#ffffff"/>
                    </View>
                  </View>
                : <View style={styles.options}>
                    <View style={styles.login}>
                      <Button onPress={ () => this.setState({displayLogin: true}) } title="Login" color="#ffffff"/>
                    </View>
                    <View style={[styles.signup, styles.active]}>
                      <Button onPress={ () => this.setState({displayLogin: false}) } title="Sign up" color="#112D4E"/>
                    </View>
                  </View>
                }
                <View style={styles.container}>
                { this.state.displayLogin
                  ? <View>
                      <TextInput style={styles.username} placeholder='Handle'
                        returnKeyType={'next'}
                        keyboardAppearance='light'
                        autoFocus={false}
                        autoCapitalize='none'
                        autoCorrect={false}
                        inputStyle={{marginLeft: 10}}
                        onChangeText={this.handleHandle}
                        ref={input => this.handleInput = input}
                        onSubmitEditing={ () => this.passwordInput.focus()}
                      />
                      this.state.handleError ? <Text style={styles.hide}>{this.state.handleError}</Text> : null
                      <TextInput style={styles.password} secureTextEntry={true} placeholder='Password'
                        returnKeyType={'done'}
                        onChangeText={this.handlePassword}
                        ref={input => this.passwordInput = input}
                        // onSubmitEditing={() => this.login()}
                      />
                    </View>
                  : <View>
                      <TextInput style={styles.username} placeholder='Handle'
                        keyboardAppearance='light'
                        autoFocus={false}
                        autoCapitalize='none'
                        autoCorrect={false}
                        inputStyle={{marginLeft: 10}}
                        onChangeText={this.handleHandle}
                        ref={input => this.handleInput = input}
                        onSubmitEditing={ () => this.emailInput.focus() }
                        returnKeyType='next'
                      />
                      <TextInput style={styles.username} secureTextEntry={false} placeholder={'Email'}
                        keyboardAppearance='light'
                        autoFocus={false}
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType='next'
                        inputStyle={{marginLeft: 10}}
                        ref={input => this.emailInput = input}
                        onSubmitEditing={ () => this.passwordInput.focus() }
                        onChangeText={this.handleEmail}
                        errorMessage={this.state.isEmailValid ? null : 'Please enter a valid email address'}
                      />
                      <TextInput style={styles.username} secureTextEntry={true} placeholder='Password'
                        ref={input => this.passwordInput = input}
                        returnKeyType={'done'}
                        onChangeText={this.handlePassword}
                        errorMessage={!this.state.isPasswordValid ? 'Please enter a password with more than 8 characters' : null}
                        // onSubmitEditing={() => this.signUp()}
                      />
                    </View>
                }
                </View>
                <View style={styles.submit}>
                  <Button onPress={() => this.handleSubmit()}
                  title={this.state.displayLogin ? 'Login' : 'Sign up'} color="#ffffff"/>
                </View>

                <DropdownAlert type='error'/>
              </KeyboardAwareScrollView>
            :
            // TODO add loading wheel
            <Text>Loading...</Text>
          }
          //dropdown alert
          <View>
          {
            (this.state.isPasswordValid && this.state.isHandleValid && this.state.isEmailValid)
            ?
              <DropdownAlert
                ref={(ref) => this.dropdown = ref}
                showCancel={true}
                closeInterval={4000}
              />
            :
            null
          }
          </View>

        </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    reduxExample: state.loginReducer.reduxExample,
    handle: state.loginReducer.handle,
    isLoggedIn: state.loginReducer.isLoggedIn,
  };
}

export default connect(mapStateToProps, { updateLogin })(Login);
