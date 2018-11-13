import React from 'react';
import { Text, View, TouchableOpacity, CameraRoll } from 'react-native';
import { Expo, Camera, Permissions, ImagePicker } from 'expo';
import { Container, Header, Content, Button, Icon} from 'native-base';

import styles from './styles';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };
  //Permissions for Camera and CameraRoll
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  //Take Picture and still unsure what to do with it
  takePicture = () => {
      if(this.camera){
          this.camera.takePictureAsync({onPictureSaved: this.onPictureSaved});
      }
  };

  onPictureSaved = async photo => {
      await FileSystem.moveAsync({
          from: photo.uri,
          to: '/images',
      });
  }
  //Render Camera -- needed for taking pictures
  renderCamera = () =>(
    <View style={{flex: 1}}>
        <Camera ref={ref => {
            this.camera = ref;
        }}>  
        </Camera>
    </View>
  );

//   snap = async () => {
//       const result = await ImagePicker.launchCameraAsync({
//           allowEditing: false,
//           exif: true
//       });

//       if(!result.cancelled) {
//           this.setState({image: result.uri});
//       }
//       CameraRoll.saveToCameraRoll(this.state.image);
//   };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
        
      return (
        
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} 
                type={this.state.type} 
                ratio={"16:9"}>

            <View style={styles.header}>
                <TouchableOpacity style={styles.touchTop}>
                    <Icon name='md-close' style={styles.exit}/>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
            
              <TouchableOpacity
                style={styles.touchBottom}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>               
                <Icon name='md-reverse-camera' style={styles.reverse}/>               
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.touchBottom}
                  onPress={this.takePicture} >
                  <Icon name='md-paper' style={styles.paper}/>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.touchBottom}
                  onPress={this.takePicture} >
                  <Icon name='md-flash' style={styles.flash}/>
              </TouchableOpacity>

            </View>
            
          </Camera>
        </View>
      );
    }
  }
}
