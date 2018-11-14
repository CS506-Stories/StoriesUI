import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  exit: {
    fontSize: 30,
    marginTop: 20,
    color: 'white',
  },
  reverse: {
    fontSize: 35,
    marginTop: 20,
    color: '#FF8732',
  },

  paper: {
    fontSize: 60,
    marginBottom: 15,
    color: '#326CFF',
  },

  touchBottom: {
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  touchTop: {
    flex: 0.1,
    alignSelf: 'flex-start',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  header: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default styles;
