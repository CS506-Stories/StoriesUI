import * as React from 'react';
import { Animated, View, Button } from 'react-native';
// import Odometer from 'react-odometer';
import { firestore } from '../../../../config/firebase';

class Like extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        likes: [String],
        reactionRate: number,
        animation: Animated.Value
      }
    }
  // counter: Odometer;

  componentWillMount() {
		this.setState({ likes: this.props.likes, reactionRate: this.props.reactionRate });
	}
  // TODO : import user ID 
  toggle() {
    const idx = this.state.likes.indexOf(uid);
    if (idx === -1) {

      let likeArr = this.state.likes;
      likeArr.push(uid);
      this.setState({ likes: likeArr });

      // this.counter.increment;
      // Probably better to do this calculation somewhere else, like api.js
      this.setState({ 
        reactionRate: (firestore.Timestamp().toMillis() - timestamp)/this.state.likes.length
      });
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
      likes.splice(uid, 1);
      this.setState({ likes });
      // this.counter.decrement();
    }
    // TODO : move this into api.js
    const dataRef = firestore.collection("posts").doc(post);
    firestore.runTransaction(async transaction => {
      const dataDoc = await transaction.get(dataRef);
      const { likes } = dataDoc.data();
      const { reactionRate } = dataDoc.data();
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
      <View>
        <Button>
          Hello
        </Button>
      </View>
    );
  }
}

Like.propTypes = {
  likes: PropTypes.array.isRequired,
  post: PropTypes.string.isRequired,
  reactionRate: PropTypes.number.isRequired,
  timestamp: PropTypes.number.isRequired,
};

export default Like;
