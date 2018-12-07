import React from 'react';
import {
  Container,
} from 'native-base';
import { FlatList, ScrollView, Animated, RefreshingControl } from 'react-native';
import FeedEntry from './components/feedEntry';
import { auth, firestore, storage } from '../../config/firebase';

class Mainfeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scrollAnimation: new Animated.Value(0),
      refreshing: false,
      posts: [],
      loading: true,
    }
  }

  onRefresh() {
    this.setState({refreshing: true});
    setTimeout(() => this.setState({refreshing: false}), 3000);
  }

  //TODO : Put this in the api.js file
  componentWillMount() {
    this.setState({
      // scrollAnimation: new Animated.Value(0),
      refreshing: false,
      loading: true
    });
    let postsArr = [];
    firestore.collection('posts').orderBy("reactionRate", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
            postsArr.push(doc.data());
        });
      console.log(postsArr);
      this.setState({
        posts: postsArr,
        loading: false,
      });
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  render() {
    return(
      <Container>
        <FlatList
          data={this.state.posts}
          renderItem={({ item }) => (
            <FeedEntry
              postID={item.postID}
              url={item.url}
              profileImage={item.profileImage}
              username={item.username}
              timestamp={item.timestamp.toString()}
              likes={item.likes}
              reactionRate={item.reactionRate}
            />
          )}
        />
      </Container>
    );
    const {onRefresh} = this;
    const {scrollAnimation, refreshing, posts, loading} = this.state;
  }
}
// const Mainfeed = () => (
  // <Container>
  //   <FlatList
  //     data={[
  //       {
  //         profileImage: 'https://facebook.github.io/react/logo-og.png',
  //         mainContent: 'https://facebook.github.io/react/logo-og.png',
  //         username: 'Sean Rice',
  //         key: '1',
  //       },
  //       {
  //         profileImage: 'https://facebook.github.io/react/logo-og.png',
  //         mainContent: 'https://facebook.github.io/react/logo-og.png',
  //         username: 'Sean Rice',
  //         key: '2',
  //       },
  //       {
  //         profileImage: 'https://facebook.github.io/react/logo-og.png',
  //         mainContent: 'https://facebook.github.io/react/logo-og.png',
  //         username: 'Sean Rice',
  //         key: '3',
  //       },
  //     ]}
  //     renderItem={({ item }) => (
  //       <FeedEntry
  //         profileImage={item.profileImage}
  //         mainContent={item.mainContent}
  //         username={item.username}
  //       />
  //     )}
  //   />
  // </Container>
// );
export default Mainfeed;
