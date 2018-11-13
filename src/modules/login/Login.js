import React, { Component } from 'react';

import {
  Image, ImageBackground
} from 'react-native';

import {
  Container, Header, Content, Form, Item, Input, Label, Button, Text, Footer, FooterTab,
} from 'native-base';

import { connect } from 'react-redux';
import styles from './styles';
import { updateGeneric, handleSubmit } from './actions';
import { displayResult, validateEmail } from './functions';

import tempBack from '../../../assets/img/tempBack.jpeg';
import tempLogo from '../../../assets/img/tempLogo.png';

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
      <Container>
        <ImageBackground source={tempBack} style={styles.back}>
          <Content>
          <Image source={tempLogo} style={styles.logoimg} />
            <Button
              onPress={() => this.setState({ displayLogin: true })}
              light
            >
              <Text>Login</Text>
            </Button>
            <Button
              onPress={() => this.setState({ displayLogin: false })}
              light
            >
              <Text>Sign up</Text>
            </Button>
            <Form>
               <Item floatingLabel>
                 <Label style={styles.light}>Handle</Label>
                    <Input
                      returnKeyType="next"
                      keyboardAppearance="light"
                      autoFocus={false}
                      autoCapitalize="none"
                      autoCorrect={false}
                      onChangeText={(text) => this.setState({ handle: text })}
                      onSubmitEditing={() => { this.passwordInput.focus(); }}
                      ref={(input) => { this.handleInput = input; }}
                    />
              </Item>
              {
                this.state.displayLogin
                ? (
                  <Item>
                  </Item>
                ) : (
                  <Item floatingLabel last>
                    <Label style={styles.light}>Email</Label>
                    <Input
                      returnKeyType="done"
                      onChangeText={(text) => this.setState({ email: text })}
                      ref={(input) => { this.emailInput = input; }}
                    />
                  </Item>
                )
              }
              <Item floatingLabel>
                <Label style={styles.light}>Password</Label>
                <Input
                  secureTextEntry
                  returnKeyType="done"
                  ref={(input) => { this.passwordInput = input; }}
                  onChangeText={(text) => this.setState({ password: text })}
                />
              </Item>
            </Form>
          </Content>
          <Footer>
            <FooterTab>
              <Button
              onPress={() => {
                      handleSubmit(this.state.handle, this.state.email, this.state.password);
                      displayResult(this.state.displayLogin, validateEmail(this.state.email),
                        (this.state.password.length >= 8), this.state.handle);
                    }}
              full
              style={styles.submit}>
                {
                  this.state.displayLogin
                  ? (
                    <Text style={styles.light}>Login</Text>
                  ) : (
                    <Text style={styles.light}>Sign Up</Text>
                  )
                }
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>
      </Container>
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
