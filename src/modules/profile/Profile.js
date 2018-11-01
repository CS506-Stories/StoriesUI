import React from 'react';
import {
  Text, View, FlatList, Image, ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const Profile = () => (
  <ScrollView>
    <View style={styles.settingsContainer}>
      {
        // Settings button
      }
      <Icon.Button
        name="cog"
        size={30}
        backgroundColor="#00000000"
        color="black"
        onPress={() => Actions.settings()}
      />
    </View>
    <View style={styles.profileContainer}>
      {
        // Profile, FullName and handle
      }
      <View
        style={styles.profileImage}
      />
      <Text>
        Full Name
      </Text>
      <Text>
        @handle
      </Text>
    </View>
    <View style={styles.myStoriesContainer}>
      <View style={styles.profileContainer}>
        <Text>
          My Stories
        </Text>
        <View
          style={styles.myStoriesLong}
        />
      </View>
      <View style={styles.profileContainer}>
        <Text>
          Score
        </Text>
        <Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={{ width: 64, height: 64 }}
        />
      </View>
    </View>
    <View style={styles.friendsContainer}>
      <View style={styles.friends}>
        <Text>
          Friends
        </Text>

      </View>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <View style={{ backgroundColor: 'steelblue', height: 32, justifyContent: 'center' }}><Text style={{ marginLeft: 4 }}>{item.key}</Text></View>}
      />
    </View>
  </ScrollView>
);

export default Profile;
