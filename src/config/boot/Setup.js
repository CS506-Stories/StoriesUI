import { Font, AppLoading } from 'expo';
import React, { Component } from 'react';

import Rob from 'native-base/Fonts/Roboto.ttf';
import RobMed from 'native-base/Fonts/Roboto_medium.ttf';
import icons from '@expo/vector-icons/fonts/Ionicons.ttf';

import App from './App';

export default class Setup extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: Rob,
      Roboto_medium: RobMed,
      Ionicons: icons,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <App />
    );
  }
}
