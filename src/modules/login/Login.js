import React, { Component } from 'react';
import {
  Text, View, Button, ImageBackground, TextInput, StatusBar, Image,
} from 'react-native';

import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

import { connect } from 'react-redux';
import styles from './styles';
import { updateGeneric, handleSubmit } from './actions';
import { displayResult, validateEmail } from './functions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      handle: '',
      password: '',
      loaded: true,
      displayLogin: true,
    };
  }

  render() {
    return (
      <ImageBackground source={require('../../../assets/img/tempBack.jpeg')} style={styles.back}>
        {
        this.state.loaded
          ? (<KeyboardAwareScrollView resetScrollToCoords={{ x: 0, y: 0 }} scrollEnabled>
            <StatusBar barStyle="light-content" />
            <Image source={require('../../../assets/img/tempLogo.png')} style={styles.logoimg} />
            {
              this.state.displayLogin
                ? (
                  <View style={styles.options}>
                    <View style={[styles.login, styles.active]}>
                      <Button onPress={() => this.setState({ displayLogin: true })} title="Login" color="#112D4E" />
                    </View>
                    <View style={styles.signup}>
                      <Button onPress={() => this.setState({ displayLogin: false })} title="Sign up" color="#ffffff" />
                    </View>
                  </View>
                ) : (
                  <View style={styles.options}>
                    <View style={styles.login}>
                      <Button onPress={() => this.setState({ displayLogin: true })} title="Login" color="#ffffff" />
                    </View>
                    <View style={[styles.signup, styles.active]}>
                      <Button onPress={() => this.setState({ displayLogin: false })} title="Sign up" color="#112D4E" />
                    </View>
                  </View>
                )
                }
            <View style={styles.container}>
              {
              this.state.displayLogin
                ? (
                  <View>
                    <TextInput
                      style={styles.username}
                      placeholder="Handle"
                      returnKeyType="next"
                      keyboardAppearance="light"
                      autoFocus={false}
                      autoCapitalize="none"
                      autoCorrect={false}
                      inputStyle={{ marginLeft: 10 }}
                      onChangeText={this.handleHandle}
                      ref={input => { this.handleInput = input; }}
                      onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput
                      style={styles.password}
                      secureTextEntry
                      placeholder="Password"
                      returnKeyType="done"
                      onChangeText={(text) => this.setState({ password: text })}
                      ref={input => { this.passwordInput = input; }}
                    />
                  </View>
                ) : (
                  <View>
                    <TextInput
                      style={styles.username}
                      placeholder="Handle"
                      keyboardAppearance="light"
                      autoFocus={false}
                      autoCapitalize="none"
                      autoCorrect={false}
                      inputStyle={{ marginLeft: 10 }}
                      onChangeText={(text) => this.setState({ handle: text })}
                      ref={input => { this.handleInput = input; }}
                      onSubmitEditing={() => this.emailInput.focus()}
                      returnKeyType="next"
                    />
                    <TextInput
                      style={styles.username}
                      secureTextEntry={false}
                      placeholder="Email"
                      keyboardAppearance="light"
                      autoFocus={false}
                      autoCapitalize="none"
                      autoCorrect={false}
                      keyboardType="email-address"
                      returnKeyType="next"
                      inputStyle={{ marginLeft: 10 }}
                      ref={input => { this.emailInput = input; }}
                      onSubmitEditing={() => this.passwordInput.focus()}
                      onChangeText={(text) => this.setState({ email: text })}
                      errorMessage={this.state.isEmailValid ? null : 'Please enter a valid email address'}
                    />
                    <TextInput
                      style={styles.username}
                      secureTextEntry
                      placeholder="Password"
                      ref={input => { this.passwordInput = input; }}
                      returnKeyType="done"
                      onChangeText={(text) => this.setState({ password: text })}
                      errorMessage={!this.state.isPasswordValid ? 'Please enter a password with more than 8 characters' : null}
                    />
                  </View>
                )
              }
            </View>
            <View style={styles.submit}>
              <Button
                onPress={() => {
                  handleSubmit(this.state.handle, this.state.email, this.state.password);
                  displayResult(this.state.displayLogin, validateEmail(this.state.email),
                    (this.state.password.length >= 8), this.state.handle);
                }}
                title={this.state.displayLogin ? 'Login' : 'Sign up'}
                color="#ffffff"
              />
            </View>
          </KeyboardAwareScrollView>
          )
          // TODO add loading wheel/ loading screen
          : <Text>Loading...</Text>
          }
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    isEmailValid: state.loginReducer.isEmailValid,
    isHandleValid: state.loginReducer.isHandleValid,
    isPasswordValid: state.loginReducer.isPasswordValid,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    update: (name, value) => dispatch(updateGeneric(name, value)),
    handleSubmit: (handle, email, pass) => dispatch(handleSubmit(handle, email, pass)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
