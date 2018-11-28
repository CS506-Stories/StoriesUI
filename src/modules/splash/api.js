// This is where functions are written for interacting with the Firebase API
import { firestore } from '../../config/firebase';

export type Profile = {
	id: string,
	email: string,
	handle: string,
	points: number,
	// profilePicture: Picture,
	profilePicture: url,
	gps: boolean,
	post?: Post[],
	friends?: User[]
};

export type Post = {
	id: string,
  	timestamp: number,
  	uid: string,
  	// profilePicture: Picture,
  	profilePicture: url,
  	likes: stringp[],
  	// picture?: Picture,
  	picture?: string,
  	video?: string,
  	reactionRate: number
};

// export type Picture = {
// 	url: string
// 	preview: string
// };

// export default class api {

// 	static profile(): Profile {
// 		return database.profile;
// 	}

// 	static posts(): Post[] {
// 		return database.posts;
// 	}

// 	static addPost(post: Post) {
// 		database.posts.push(post);
// 	}
// }
