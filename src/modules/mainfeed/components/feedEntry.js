import React from 'react';
import {
  Image, View,
} from 'react-native';
import {
  Card, CardItem, Left, Thumbnail, Body, Right, Button, Badge, Text,
} from 'native-base';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Octicons';
import Like from './like/Like';

const FeedEntry = (props) => (
  <View style={{ margin: 22 }}>
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: props.profileImage }} />
          <Body>
            <Text style={{ fontSize: 20 }}>{props.username}</Text>
            <Text note>Extra Content</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{ uri: props.mainContent }} style={{ height: 300, width: null, flex: 1 }} />
      </CardItem>
      <Like />
    </Card>
  </View>
);

FeedEntry.propTypes = {
  mainContent: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default FeedEntry;
