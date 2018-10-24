import React from 'react';
import {
  View, Text, StatusBar,
} from 'react-native';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Header = (props) => (
  <View style={{
    paddingTop: StatusBar.currentHeight,
    paddingLeft: 4,
    paddingRight: 4,
    height: StatusBar.currentHeight + 64,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }}
  >
    <Text> LeftIMG </Text>
    <Text> RightIMG </Text>
  </View>
);

//export default connect(mapStateToProps, { updateHeader })(Header);
export default Header;
