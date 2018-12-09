import * as React from 'react';
import {
  Animated, Easing,
} from 'react-native';
import {
  Text, CardItem, Body, Icon,
} from 'native-base';
// import Odometer from 'react-odometer';
import { PropTypes } from 'prop-types';
import { upvote } from './api';
import { auth } from '../../../../config/firebase';

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [String],
      animation: Animated.Value,
      uid: auth.currentUser,
    };
    this.toggle = this.toggle.bind(this);
  }
  // counter: Odometer;

  componentWillMount() {
    if (this.props.likes == null) {
      this.setState({ likes: [] });
    } else {
      this.setState({ likes: this.props.likes });
    }

    this.setState({
      postID: this.props.postID,
      timestamp: this.props.timestamp,
    });
  }

  // TODO : import user ID
  toggle() {
    const idx = this.state.likes.indexOf(this.state.uid);
    if (idx === -1) {
      const likearr = this.state.likes;
      likearr.push(this.state.uid);
      this.setState({ likes: likearr });

      // const newReactionRate = calReactionRate(likeArr.length, this.state.timestamp);
      // const ani = new Animated.Value(0);
      // this.setState({ animation: ani });
      // Animated.timing(
      //   this.state.animation,
      //   {
      //     toValue: 1,
      //     duration: 500,
      //     easing: Easing.ease,
      //   },
      // ).start();
    } else {
      const likeArr = this.props.likes.splice(this.state.uid, 1);
      this.setState({ likes: likeArr });
    }
    upvote(this.state.uid, idx, this.state.postID, this.state.timestamp);
  }

  render() {
    let icon = null;
    if (this.state.likes.indexOf(this.state.uid) === -1) {
      icon = <Icon name="md-arrow-round-up" onPress={this.toggle} />
    } else {
      icon = <Icon style={{ color: '#f47a42' }} name="md-arrow-round-up" onPress={this.toggle} />
    }
    return (
      <CardItem>
        <Body>
          <Text>
            {this.state.likes.length}
          </Text>
          {icon}
        </Body>
      </CardItem>
    );
  }
}

Like.propTypes = {
  postID: PropTypes.string.isRequired,
  likes: PropTypes.instanceOf(Array),
  timestamp: PropTypes.string.isRequired,
};

export default Like;
