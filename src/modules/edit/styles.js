import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";

const styles = StyleSheet.create({
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
  exit: {
    fontSize: 30,
    marginTop: 35,
    marginLeft: 15,
    color: 'white',
  },
  picture: {
    flex: 1,
    marginTop: 20,
  },
  back: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  touch: {
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    marginLeft: 325,
     
  },
  post: {
    color: '#326CFF', 
    fontSize: 25,
    marginBottom: 25,
    alignSelf: 'flex-end',
    fontWeight: "bold",
    

  },

});

export default styles;
