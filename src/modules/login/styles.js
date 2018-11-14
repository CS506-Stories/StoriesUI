import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  active: {
    // borderRadius: 400,
    backgroundColor: '#004977',
  },
  light: {
    color: '#ffffff',
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
  },
  login: {
    backgroundColor: 'transparent',
  },
  signup: {
    backgroundColor: 'transparent',
  },
  back: {
    width: '100%',
    height: '100%',
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
