import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  viewSpacerWidth: {
    height: 64,
    width: 64,
    backgroundColor: 'powderblue',
  },
  strecher: {
    alignContent: 'stretch',
    flexDirection: 'column',
  },
  profileImage: {
    width: 128,
    height: 128,
    backgroundColor: 'skyblue',
    marginTop: 16,
  },
  myStoriesLong: {
    width: 128,
    height: 64,
    backgroundColor: 'skyblue',
  },
  viewSpacer: {
    height: 64,
    backgroundColor: 'powderblue',
  },
  settingsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 8,
  },
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myStoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 16,
  },
  friendsContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  friends: {
    height: 64,
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  friendHeaderButtons: {
    flexDirection: 'row',
    marginRight: 16,
  },
  friendHeaderIcon: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  friendHeader: {
    paddingLeft: 12,
  },

});

export default styles;
