import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  active: {
    // borderRadius: 400,
    opacity: 1,
    backgroundColor: 'white',
  },
  light: {
    color: '#ffffff',
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    flex: 1,
    width: '30%',
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 0.4,
    borderRadius: 400,
    opacity: 0.5,
  },
  signup: {
    flex: 1,
    width: '30%',
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 0.4,
    borderRadius: 400,
    opacity: 0.5,
  },
  back: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#7395AE',
  },
  h1: {
    flex: 1,
    fontSize: 70,
    color: '#ffffff',
    alignSelf: 'center',
    marginTop: 100,
  },
  container: {
    justifyContent: 'center',
  },

  submit: {
    backgroundColor: '#646569',
  },
  logoimg: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 130,
    height: 130,
    marginTop: '10%',
  },
});

export default styles;
