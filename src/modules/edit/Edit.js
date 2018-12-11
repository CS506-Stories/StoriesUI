import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { sendPicToFirebase } from './api';

import styles from './styles';

export default class edit extends Component {
  constructor(props) {
    super(props);
    this.sendToFirebase = this.sendToFirebase.bind(this);
  }

  sendToFirebase() {
    sendPicToFirebase(this.props.data);
    Actions.mainfeed();
  }

  render() {
    return (
      <ImageBackground source={{ uri: this.props.data.uri }} style={styles.back}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.touchTop} onPress={() => Actions.camera()}>
            <Icon name="md-close" style={styles.exit} />
          </TouchableOpacity>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.post} onPress={this.sendToFirebase}> Post </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
