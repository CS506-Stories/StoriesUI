import React from 'react';
import {
  Text, View,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SettingSection = (props) => (
  <View
    style={styles.container}
  >
    {
      // TODO : replace fontsize with something scalable.
    }
    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.title}</Text>
  </View>
);

SettingSection.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SettingSection;
