import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  active: {
    // borderRadius: 400,
    opacity: 1,
    backgroundColor: 'white',
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 20,
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
    backgroundColor: 'rgba(52, 52, 52, 0.2)'
  },
  username: {
    borderColor: '#dadfe1',
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.8,
    minWidth: '80%',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  password: {
    borderColor: '#dadfe1',
    padding: 20,
    borderRadius: 4,
    borderWidth: 0.8,
    minWidth: '80%',
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  submit: {
    margin: 10,
    borderColor: '#282728',
    padding: 10,
    borderRadius: 20,
    borderWidth: 0.8,
    minWidth: '80%',
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: '#112D4E',
  },
  butColor: {
    color: '#ffffff',
  },
  logoimg: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    width: '30%',
    marginTop: '10%',
  },
});

export default styles;
