import React from 'react';
import {
  Text, View, Switch,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const SettingEntry = (props) => (
  <View style={styles.container}>
    {
      // TODO : replace fontsize with something scalable.
    }
    <Text style={{ fontSize: 16 }} key={props.index}>{props.item}</Text>
    <Switch />
  </View>
);

SettingEntry.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
};

export default SettingEntry;
