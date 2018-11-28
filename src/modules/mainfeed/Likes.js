import * as React from 'react';
import { Animated } from 'react-native';
// import Odometer from 'react-odometer';
import { auth, firestore, serverTime } from '../../config/firebase';

type likesProps = {
	likes: string[],
	post: string,
	reactionRate: number,
	timestamp: number
};

type likesState = {
	likes: string[],
	reactionRate: number,
	animation: Animated.Value
};

class Likes extends React.Component<likesProps, likesState> {

	// counter: Odometer;

	componentWillMount() {
		const {likes} = this.props;
		const {reactionRate} = this.props;
		this.setState({ likes, reactionRate });
	}

	toggle() {
		const {post} = this.props;
		const {timestamp} = this.props;
		const {reactionRate} = this.props;
		const {uid} = auth.currentUser;
		const {likes} = this.state;
		const idx = likes.indexOf{uid};
		if (idx === -1) {
			likes.push(uid);
			// this.counter.increment;
			this.setState({ 
				likes,
				reactionRate: (serverTime - timestamp)/likes.length
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
		firestore.collection("posts").doc(post).update({
			likes, reactionRate
		});
	}
	render() {

	}


}

export default Likes;