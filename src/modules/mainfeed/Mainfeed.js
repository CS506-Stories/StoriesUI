import React from 'react';
import {
  Container,
  Spinner,
} from 'native-base';
import {
  FlatList, Animated,
} from 'react-native';
import FeedEntry from './components/feedEntry';
import { getPostCollection } from './api';

class Mainfeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // scrollAnimation: new Animated.Value(0),
      // refreshing: false,
      posts: [],
      loading: true,
    };
  }

  // onRefresh() {
  //   this.setState({refreshing: true});
  //   setTimeout(() => this.setState({refreshing: false}), 3000);
  // }
  componentDidMount() {
    if (this.state.loading) {
      getPostCollection().then((resp) => {
          console.log("SEtting state...");
          console.log(resp);
          this.setState({
            posts: resp,
            loading: false,
          });
       });
    }
  }

  render() {
    if (!this.state.loading) {
      console.log("MAINFEED: postID: " + this.state.posts[0].postID);
      return (
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

    return (
      <Container>
        <Spinner />
      </Container>

    );
    // const {onRefresh} = this;
    // const {scrollAnimation, posts, loading} = this.state;
  }
}
export default Mainfeed;
