import React from 'react';
import {
  Image, View,
} from 'react-native';
import {
  Card, CardItem, Left, Thumbnail, Body, Right, Button, Badge, Text,
} from 'native-base';
import Icon from 'react-native-vector-icons/Octicons';
import PropTypes from 'prop-types';

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
      <CardItem>
        <Left>
          <Button transparent>
            <Icon name="smiley" size={30} />
            <Badge>
              <Text>3</Text>
            </Badge>
          </Button>
          <Button transparent>
            <Icon name="mortar-board" size={35} />
            <Badge>
              <Text>5</Text>
            </Badge>
          </Button>
        </Left>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card>
  </View>
);

FeedEntry.propTypes = {
  mainContent: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

export default FeedEntry;
