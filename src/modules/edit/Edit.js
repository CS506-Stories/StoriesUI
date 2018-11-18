import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Footer, Button, Right } from 'native-base';

import styles from './styles';

const Edit = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.picture}>
      <Text>Picture</Text>
    </View>
    <View>
      <Footer>
        <Right>
          <TouchableOpacity style={styles.touch}>
            <Button>
              <Text style={{ color: 'white', fontSize: 20 }}>Post</Text>
            </Button>
          </TouchableOpacity>
        </Right>
      </Footer>
    </View>
  </View>
);

export default Edit;
