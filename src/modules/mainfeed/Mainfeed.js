import React from 'react';
import {
  Container,
} from 'native-base';
import { FlatList, ScrollView, Animated, Text } from 'react-native';
import FeedEntry from './components/feedEntry';
import { auth, firestore, storage } from '../../config/firebase';
import { getPostCollection } from './api';

class Mainfeed extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      scrollAnimation: new Animated.Value(0),
      // refreshing: false,
      posts: [],
      loading: true,
    }
  }

  // onRefresh() {
  //   this.setState({refreshing: true});
  //   setTimeout(() => this.setState({refreshing: false}), 3000);
  // }
  componentDidMount() {
    if (this.state.loading){
      getPostCollection().then((resp) => {
          console.log("SEtting state...");
          console.log(resp);
       });
    }
  }
  render() {
    if (!this.state.loading) {
      console.log("MAINFEED: postID: " + this.state.posts[0].postID);
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
    }
    else {
      return(
        <Container>
          <Text>
            Loading...
          </Text>
        </ Container>

      );
    }
    // const {onRefresh} = this;
    const {scrollAnimation, posts, loading} = this.state;
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
