import React, { Component } from 'react';

import {
  Image, ImageBackground,
} from 'react-native';

import { Col, Row, Grid } from 'react-native-easy-grid';

import {
  Container, Content, Form, Item, Input, Label, Button, Text, Footer, FooterTab,
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
      displayLogin: true,
    };
  }

  render() {
    return (
      <Container>
        <ImageBackground source={tempBack} style={styles.back}>
          <Content>
            <Image source={tempLogo} style={styles.logoimg} />
            {
              this.state.displayLogin
                ? (
                  <Grid>
                    <Row>
                      <Col style={styles.options}>
                        <Button
                          style={[styles.login, styles.active]}
                          onPress={() => this.setState({ displayLogin: true })}
                          light
                        >
                          <Text style={styles.light}>Login</Text>
                        </Button>
                      </Col>
                      <Col style={styles.options}>
                        <Button
                          style={styles.signup}
                          onPress={() => this.setState({ displayLogin: false })}
                          light
                        >
                          <Text style={styles.light}>Sign up</Text>
                        </Button>
                      </Col>
                    </Row>
                  </Grid>
                ) : (
                  <Grid>
                    <Row>
                      <Col style={styles.options}>
                        <Button
                          style={styles.login}
                          onPress={() => this.setState({ displayLogin: true })}
                          light
                        >
                          <Text style={styles.light}>Login</Text>
                        </Button>
                      </Col>
                      <Col style={styles.options}>
                        <Button
                          style={[styles.signup, styles.active]}
                          onPress={() => this.setState({ displayLogin: false })}
                          light
                        >
                          <Text style={styles.light}>Sign up</Text>
                        </Button>
                      </Col>
                    </Row>
                  </Grid>
                )
              }
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
                  ref={(input) => { this.handleInput = input; }}
                  // onSubmitEditing={() => this.passwordInput.focus()}
                />
              </Item>
              {
                this.state.displayLogin
                  ? (
                    null
                  ) : (
                    <Item floatingLabel>
                      <Label style={styles.light}>Email</Label>
                      <Input
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        onChangeText={(text) => this.setState({ email: text })}
                        ref={(input) => { this.emailInput = input; }}
                        // onSubmitEditing={() => this.passwordInput.focus()}
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
                style={styles.submit}
              >
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
