import React from 'react';
import {
  Container,
} from 'native-base';
import { FlatList, ScrollView, Animated, RefreshingControl } from 'react-native';
import FeedEntry from './components/feedEntry';
import { auth, firestore, storage } from '../../config/firebase';
import type {Post} from '../splash/api';


type mainfeedState = {
  scrollAnimation: Animated.Value,
  refreshing: boolean,
  posts: Post[],
  loading: boolean
};

class Mainfeed extends React.Component<mainfeedState> {
  
  onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => this.setState({refreshing: false}), 3000);
  }

  async componentWillMount() Promise<void> {
    this.setState({
      scrollAnimation: new Animated.Value(0),
      refreshing: false,
      loading: true
    });
    const query = await firestore.collection("posts").orderBy("reactionRate", "desc");
    const posts: Post[] = [];
    query.foreach(doc => posts.push(doc.data()));
    this.setState({
      posts,
      loading: false
    });
  }

  render(): React.Node {
    const {onRefresh} = this;
    const {scrollAnimation, refreshing, posts, loading} = this.state;
  }
}

// const Mainfeed = () => (
//   <Container>
//     <FlatList
//       data={[
//         {
//           profileImage: 'https://facebook.github.io/react/logo-og.png',
//           mainContent: 'https://facebook.github.io/react/logo-og.png',
//           username: 'Sean Rice',
//           key: '1',
//         },
//         {
//           profileImage: 'https://facebook.github.io/react/logo-og.png',
//           mainContent: 'https://facebook.github.io/react/logo-og.png',
//           username: 'Sean Rice',
//           key: '2',
//         },
//         {
//           profileImage: 'https://facebook.github.io/react/logo-og.png',
//           mainContent: 'https://facebook.github.io/react/logo-og.png',
//           username: 'Sean Rice',
//           key: '3',
//         },
//       ]}
//       renderItem={({ item }) => (
//         <FeedEntry
//           profileImage={item.profileImage}
//           mainContent={item.mainContent}
//           username={item.username}
//         />
//       )}
//     />
//   </Container>
// );
export default Mainfeed;
