import React from 'react';
import {
  View, SectionList,
} from 'react-native';

import styles from './styles';
import SettingEntry from './components/settingEntry/settingEntry';
import SettingSection from './components/settingSection/settingSection';

const Settings = () => (
  <View
    style={styles.container}
  >
    <SectionList
      renderItem={
        ({ item, index, section }) => <SettingEntry index={index} item={item} section={section} />}
      renderSectionHeader={({ section: { title } }) => (
        <SettingSection title={title} />
      )}
      sections={[
        { title: 'Privacy', data: ['Toggle GPS location', 'Send Usage Statistics', 'Follower only mode'] },
        { title: 'Security', data: ['2 Factor Authentication'] },
        { title: 'Other', data: ['Delete Account'] },
      ]}
      keyExtractor={(item, index) => item + index}
    />

  </View>
);

export default Settings;
