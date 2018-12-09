import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import routerStyles from './routerStyles';
import Splash from '../modules/splash/Splash';
import Profile from '../modules/profile/Profile';
import Settings from '../modules/settings/Settings';
import Camera from '../modules/camera/Camera';
import Edit from '../modules/edit/Edit';

const MainRouter = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="splash"
        component={Splash}
        title="Splash"
        renderRightButton={<Icon name="user-circle" size={30} style={routerStyles.rightButtonStyle} onPress={() => Actions.profile()} />}
        renderLeftButton={<Icon name="camera" size={30} style={routerStyles.leftButtonStyle} />}
        // initial
      />

      <Scene
        key="profile"
        component={Profile}
        title="Profile"
      />

      <Scene
        key="settings"
        component={Settings}
        title="Settings"
      />

      <Scene
        key="camera"
        component={Camera}
        title="Camera"
        hideNavBar
        initial
      />

      <Scene
        key="edit"
        component={Edit}
        title="Edit"
        hideNavBar
      />

    </Scene>
  </Router>
);


export default MainRouter;
