import * as React from 'react';
import { Animated, View, Button, Easing } from 'react-native';
// import Odometer from 'react-odometer';
import { PropTypes } from 'prop-types';
import { calReactionRate, getPost } from './api';
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
    this.toggle = this.toggle.bind(this);
  }
  // counter: Odometer;

  componentWillMount() {
    if (this.props.likes == null)
        this.setState({ likes: []})
    else
      this.setState({ likes: this.props.likes})

    this.setState({
      postID: this.props.postID,
      reactionRate: this.props.reactionRate,
      timestamp: this.props.timestamp
    });
  }

  // TODO : import user ID
  toggle() {
    const { uid } = auth.currentUser;
    const idx = this.state.likes.indexOf(uid);
    if (idx === -1) {
      let likeArr = this.state.likes;
      likeArr.push(uid);
      this.setState({ likes: likeArr });

      // this.counter.increment;
      // Probably better to do this calculation somewhere else, like api.js
      const newReactionRate = calReactionRate(likeArr.length, this.state.timestamp);
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
    const dataRef = getPost(this.state.postID);

    firestore.runTransaction(async transaction => {
      const dataDoc = await transaction.get(dataRef);
      const { likes } = dataDoc.data();
      let { reactionRate } = dataDoc.data();
      if (idx === -1) {
        likes.push(uid);
        reactionRate = calReactionRate(likes.length, this.state.timestamp);
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
            {this.state.likes.length}
          </Text>
          <Icon name='arrow-up' onPress={this.toggle} />
        </Body>
      </CardItem>
    );
  }
}

Like.propTypes = {
  postID: PropTypes.string.isRequired,
  likes: PropTypes.instanceOf(Array),
  timestamp: PropTypes.string.isRequired,
  reactionRate: PropTypes.number.isRequired,
};

export default Like;
