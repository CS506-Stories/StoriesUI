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

import styles from './styles';

export class Cam extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    isCapturing: true,
    capturedPhoto: null
  };
  //Permissions for Camera
   async componentDidMount() {
   const { status } = await Permissions.askAsync(Permissions.CAMERA);
   this.setState({ hasCameraPermission: status === 'granted' });
  }

  //Uses takePictureAsync to take picture
  async takePicture() {
   if (this.state.isCapturing === true)
    {
        //alert("taking picture...");
        await this.camera.takePictureAsync({ skipProcessing: true, fixOrientation: true, exif: true, base64: true }).then((photo) => {
          photo.exif.Orientation = 1;
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
    } else if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Camera
          style={{ flex: 1 }}
          type={this.state.type}
          ratio="16:9"
          isCapturing={this.state.type}
          ref={ref => { this.camera = ref}}
        >

          <View style={styles.header}>
            <TouchableOpacity style={styles.touchTop}>
            {/* <TouchableOpacity style={styles.touchTop} onPress={() => Actions.mainfeed()}> */}
              <Icon name="md-close" style={styles.exit} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.touchTop}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}
            >
              <Icon name="md-reverse-camera" style={styles.reverse} />
            </TouchableOpacity>

          </View>
          <View style={styles.footer}>

            <TouchableOpacity
              style={styles.touchBottom}
              onPress={() => this.takePicture()}
            >

              <Icon name="md-paper" style={styles.paper} />
            </TouchableOpacity>

          </View>
        </Camera>
      </View>
    );
  }
}

export default Cam;
