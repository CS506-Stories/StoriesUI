import React, { Component } from 'react';

import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Footer, Button, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

export default class edit extends Component {
  constructor(props) {
   super(props);
 }
  render() {
      return (
        <ImageBackground source={{uri: this.props.data.uri}} style={styles.back}>
          <View style={{flex:1}}>
            <TouchableOpacity style={styles.touchTop} onPress={() => Actions.camera()}>
                <Icon name="md-close" style={styles.exit} />
            </TouchableOpacity>

              <View style={styles.footer}> 
                    <TouchableOpacity style={ styles.touch }>
                    
                    <Icon name="ios-paper-plane" style={styles.post} />
                        {/* <Text style={styles.post}> Post </Text> */}
                       
                    
                    </TouchableOpacity>
              </View>       
          </View>
        </ImageBackground>
      );
    }
  }
