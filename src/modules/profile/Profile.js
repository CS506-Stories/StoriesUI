import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import {
  List, H2, Button, Content,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import FriendEntry from './friends/friendEntry';
import styles from './styles';

const Profile = () => (
  <Content>
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
        <H2 style={styles.friendHeader}>
          Friends
        </H2>
        <View style={styles.friendHeaderButtons}>
          <Button>
            <Icon name="plus" style={styles.friendHeaderIcon} />
          </Button>
          <Button danger>
            <Icon name="minus" style={styles.friendHeaderIcon} />
          </Button>
        </View>
      </View>
      <List>
        <FriendEntry
          uri="https://facebook.github.io/react/logo-og.png"
          name="Test"
          note="This is a test friend"
        />
        <FriendEntry
          uri="https://facebook.github.io/react/logo-og.png"
          name="Test"
          note="This is a test friend"
        />
        <FriendEntry
          uri="https://facebook.github.io/react/logo-og.png"
          name="Test"
          note="This is a test friend"
        />
      </List>
    </View>
  </Content>
);

export default Profile;
