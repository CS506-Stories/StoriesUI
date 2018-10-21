import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  active: {
    borderRadius: 400,
    backgroundColor: '#dadfe1',
  },
  hide: {
    height: 0,
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
    borderColor: '#ffffff',
    borderWidth: 0.4,
    borderRadius: 400,
  },
  signup: {
    flex: 1,
    width: '30%',
    padding: 10,
    borderColor: '#ffffff',
    borderWidth: 0.4,
    borderRadius: 400,
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
    flex: 2,
    backgroundColor: '#dadfe1',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderRadius: 40,
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
    borderRadius: 40,
    borderWidth: 0.8,
    width: '80%',
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
