import React, { Component } from 'react';

import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Footer, Button, Right, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

<<<<<<< HEAD
const Edit = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.picture}>
      <Text>Picture</Text>
    </View>
    <View>
      <Footer>
        <Right>
          <TouchableOpacity style={styles.touch}>
            <Button>
              <Text style={{ color: 'white', fontSize: 20 }}>Post</Text>
            </Button>
          </TouchableOpacity>
        </Right>
      </Footer>
    </View>
  </View>
);

export default Edit;
=======
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
                    
                      
                        <Text style={styles.post}> Post </Text>
                       
                    
                    </TouchableOpacity>
              </View>       
          </View>
        </ImageBackground>
      );
    }
  }
>>>>>>> 460bb389a29349b4cc6acfa0cbbd3b09afee387f
