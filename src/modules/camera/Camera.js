import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import { Camera, Permissions } from 'expo';
import { Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { Actions } from 'react-native-router-flux';

import styles from './styles';

export class Cam extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    isCapturing: true,
    capturedPhoto: null
  };
<<<<<<< HEAD

  // Permissions for Camera
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
=======
  //Permissions for Camera
   async componentDidMount() {
   const { status } = await Permissions.askAsync(Permissions.CAMERA);
   this.setState({ hasCameraPermission: status === 'granted' });
>>>>>>> 460bb389a29349b4cc6acfa0cbbd3b09afee387f
  }

  //Uses takePictureAsync to take picture
  async takePicture() {
   if (this.state.isCapturing === true)
    {
        //alert("taking picture...");
        await this.camera.takePictureAsync().then((photo) => {
          this.setState({ capturedPhoto: photo.uri });
          Actions.edit({data: photo});
        })
        .catch(function(err) {
          console.log(err);
        });
    }
    else
    {
        this.setState({ isCapturing: true, capturedPhoto: null});
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    const { isCapturing } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
<<<<<<< HEAD
    } if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
=======
    } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
>>>>>>> 460bb389a29349b4cc6acfa0cbbd3b09afee387f
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          ratio="16:9"
<<<<<<< HEAD
        >
          <View style={styles.header}>
            <TouchableOpacity style={styles.touchTop}>
              <Icon
                name="md-close"
                style={styles.exit}
                onPress={() => Actions.mainfeed()}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchTop}
              onPress={() => {
                const val = this.state.type === Camera.Constants.Type.back;
                this.setState({
                  type: val
=======
          isCapturing={this.state.type}
          ref={ref => { this.camera = ref}}
        >

          <View style={styles.header}>
            <TouchableOpacity style={styles.touchTop}>
              <Icon name="md-close" style={styles.exit} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchTop}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
>>>>>>> 460bb389a29349b4cc6acfa0cbbd3b09afee387f
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}
            >
              <Icon name="md-reverse-camera" style={styles.reverse} />
            </TouchableOpacity>
<<<<<<< HEAD
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.touchBottom}
              onPress={this.takePicture}
            >
              <Icon name="md-paper" style={styles.paper} />
            </TouchableOpacity>
=======

          </View>
          <View style={styles.footer}>

            <TouchableOpacity
              style={styles.touchBottom}
              onPress={() => this.takePicture()}
            >

              <Icon name="md-paper" style={styles.paper} />
            </TouchableOpacity>

>>>>>>> 460bb389a29349b4cc6acfa0cbbd3b09afee387f
          </View>
        </Camera>
      </View>
    );
<<<<<<< HEAD
=======

>>>>>>> 460bb389a29349b4cc6acfa0cbbd3b09afee387f
  }
}

export default Cam;
