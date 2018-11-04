import React from 'react';
import {
  Text,
} from 'react-native';
import {
  ListItem, Left, Right, Thumbnail, Body, Button, Icon,
} from 'native-base';
import PropTypes from 'prop-types';


const FriendEntry = (props) => (
  <ListItem avatar>
    <Left>
      <Thumbnail source={{ uri: props.uri }} />
    </Left>
    <Body>
      <Text>{props.name}</Text>
      <Text note>{props.note}</Text>
    </Body>
    <Right>
      <Button full danger>
        <Icon name="trash" />
      </Button>
    </Right>
  </ListItem>
);

FriendEntry.propTypes = {
  uri: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
};

export default FriendEntry;
