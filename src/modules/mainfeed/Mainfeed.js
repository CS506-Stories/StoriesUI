import React from 'react';
import {
  Container,
} from 'native-base';
import { FlatList } from 'react-native';
import FeedEntry from './components/feedEntry';

const Mainfeed = () => (
  <Container>
    <FlatList
      data={[
        {
          profileImage: 'https://facebook.github.io/react/logo-og.png',
          mainContent: 'https://facebook.github.io/react/logo-og.png',
          username: 'Sean Rice',
          key: '1',
        },
        {
          profileImage: 'https://facebook.github.io/react/logo-og.png',
          mainContent: 'https://facebook.github.io/react/logo-og.png',
          username: 'Sean Rice',
          key: '2',
        },
        {
          profileImage: 'https://facebook.github.io/react/logo-og.png',
          mainContent: 'https://facebook.github.io/react/logo-og.png',
          username: 'Sean Rice',
          key: '3',
        },
      ]}
      renderItem={({ item }) => (
        <FeedEntry
          profileImage={item.profileImage}
          mainContent={item.mainContent}
          username={item.username}
        />
      )}
    />
  </Container>
);

export default Mainfeed;
