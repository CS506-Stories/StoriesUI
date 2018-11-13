import React, { Component } from 'react';
import {

} from 'native-base'
import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';

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
        <Content>
          <Form>
             <Item floatingLabel>
               <Label>Handle</Label>
                  <Input
                    returnKeyType="next"
                    keyboardAppearance="light"
                    autoFocus={false}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={this.handleHandle}
                    ref={(input) => { this.handleInput = input }}
                    onSubmitEditing={() => this.passwordInput.focus()}
                  />
            </Item>
            {
              this.state.displayLogin
              ? (
                <Item>
                </Item>
              ) : (
                <Item floatingLabel last>
                  <Label>Email</Label>
                  <Input
                    returnKeyType="done"
                    onChangeText={(text) => this.setState({ email: text })}
                    ref={(input) => { this.emailInput = input }}
                  />
                </Item>
              )
            }
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                returnKeyType="done"
                onChangeText={(text) => this.setState({ password: text })}
                ref={(input) => { this.passwordInput = input }}
              />
            </Item>
          </Form>
          <Button
            onPress={() => this.setState({ displayLogin: false })}
            small
            primary>
            <Text>Sign up</Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button
            onPress={() => {
                    handleSubmit(this.state.handle, this.state.email, this.state.password);
                    displayResult(this.state.displayLogin, validateEmail(this.state.email),
                      (this.state.password.length >= 8), this.state.handle);
                  }}
            full style={{backgroundColor: '#646569',}}>
              {
                this.state.displayLogin
                ? (
                  <Text style={{color: '#ffffff',}}>Login</Text>
                ) : (
                  <Text style={{color: '#ffffff',}}>Sign Up</Text>
                )
              }
            </Button>
          </FooterTab>
        </Footer>
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
