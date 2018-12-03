import * as React from 'react';
import { Animated, View, Button } from 'react-native';
// import Odometer from 'react-odometer';
import { PropTypes } from 'prop-types';
import { getReactionRate } from './api';
import { auth, firestore } from '../../../../config/firebase';
import {
  Text, CardItem, Body, Icon,
} from 'native-base';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [String],
      reactionRate: 0,
      animation: Animated.Value
    };
  }
  // counter: Odometer;

  componentWillMount() {
    this.setState({ likes: this.props.likes, reactionRate: this.props.reactionRate });
  }

  // TODO : import user ID
  toggle() {
    const uid = auth.currentUser;
    const idx = this.state.likes.indexOf(uid);
    if (idx === -1) {
      const likeArr = this.props.likes;
      likeArr.push(uid);
      this.setState({ likes: likeArr });

      // this.counter.increment;
      // Probably better to do this calculation somewhere else, like api.js
      const newReactionRate = getReactionRate(likeArr.length, this.props.timestamp);
      this.setState({ reactionRate: newReactionRate });
      const animation = new Animated.Value(0);
      this.setState({ animation });
      Animated.timing(
        animation,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.ease
        }
      ).start();
    } else {
      const likeArr = this.props.likes.splice(uid, 1);
      this.setState({ likes: likeArr });
      // this.counter.decrement();
    }
    // TODO : move this into api.js

    const dataRef = firestore.Firestore.collection("posts").doc(post);

    firestore.runTransaction(async transaction => {
      const dataDoc = await transaction.get(dataRef);
      const { likes } = dataDoc.data();
      let { reactionRate } = dataDoc.data();
      if (idx === -1) {
        likes.push(uid);
        reactionRate = (firestore.Timestamp().toMillis() - timestamp) / likes.length;
      } else {
        likes.splice(uid, 1);
      }
      transaction.update(dataRef, { likes, reactionRate });
    });
  }

  render() {
    return (
      <CardItem>
        <Body>
          <Text>
            {this.likes.length}
          </Text>
          <Icon name='arrow-up' onPress={toggle()} />
        </Body>
      </CardItem>
    );
  }
}

Like.propTypes = {
  likes: PropTypes.instanceOf(Array).isRequired,
  post: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Like;
