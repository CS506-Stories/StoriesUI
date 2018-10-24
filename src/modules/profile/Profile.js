import React from 'react';
import {
  Text, View, FlatList, Image, ScrollView,
} from 'react-native';

const Profile = (props) => (
  <ScrollView>
    <View style={{ alignContent: 'stretch', flexDirection: 'column' }}>
      {
        // Spacer for menu bar
      }
      <View
        style={{ height: 64, backgroundColor: 'powderblue' }}
      />
    </View>
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      margin: 8,
    }}
    >
      {
        // Settings button
      }
      <View
        style={{ width: 64, height: 64, backgroundColor: 'skyblue' }}
      />
    </View>
    <View style={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      {
        // Profile, FullName and handle
      }
      <View
        style={{
          width: 128,
          height: 128,
          backgroundColor: 'skyblue',
          marginTop: 16,
        }}
      />
      <Text>
        Full Name
      </Text>
      <Text>
        @handle
      </Text>
    </View>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 16,
    }}
    >
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>
          My Stories
        </Text>
        <View
          style={{ width: 128, height: 64, backgroundColor: 'skyblue' }}
        />
      </View>
      <View style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Text>
          Score
        </Text>
        <Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={{ width: 64, height: 64 }}
        />
      </View>
    </View>
    <View style={{
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    }}
    >
      <View style={{
        height: 64,
        marginTop: 32,
        justifyContent: 'center',
        backgroundColor: 'skyblue',

      }}
      >
        <Text>
          Friends
        </Text>

      </View>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <View style={{ backgroundColor: 'steelblue', height: 32, justifyContent: 'center' }}><Text style={{ marginLeft: 4 }}>{item.key}</Text></View>}
      />
    </View>
  </ScrollView>
);

export default Profile;
