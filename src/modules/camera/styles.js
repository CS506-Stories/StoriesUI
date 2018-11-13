import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  exit: {
    fontSize: 30,
    marginTop: 18,
    color: 'white',
  },

  reverse: {
    fontSize: 30,
    marginBottom: 15,
    color: '#FF8732',
  },

  paper: {
    fontSize: 45,
    marginBottom: 15,
    color: '#326CFF',
  },

  flash: {
    fontSize: 30,
    marginBottom: 15,
    color: '#FF8732',
  },

  touchBottom: {
    flex: 0.1,
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
    justifyContent: 'space-around'
  },

  header: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }

});

export default styles;
