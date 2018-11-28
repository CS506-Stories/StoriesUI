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
				reactionRate: (serverTime.toMillis() - timestamp)/likes.length
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
		const dataRef = firestore.collection("posts").doc(post);
		firestore.runTransaction(async transaction => {
			const dataDoc = await transaction.get(dataRef);
			const likes = dataDoc.data().likes;
			const reactionRate = dataDoc.data().reactionRate;
			if (idx === -1) {
				likes.push(uid);
				reactionRate = (serverTime.toMillis() - timestamp) / likes.length;
			} else {
				likes.splice(uid, 1);
			}
			transaction.update(dataRef, { likes, reactionRate });
		});
	}
	render() {

	}


}

export default Likes;