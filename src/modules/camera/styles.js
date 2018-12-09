import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({  
  CameraButton: {backgroundColor: 'transparent', alignSelf: 'center', justifyContent: 'center', alignItems: 'center'},
  photoGroup: { flex: 1},
  exit: {
    fontSize: 30,
    marginTop: 35,
    color: 'white',
  },
  reverse: {
    fontSize: 35,
    marginTop: 35,
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
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    color: '#FFF',
    fontWeight: '600',
    fontSize: 17,
  }

});

export default styles;
