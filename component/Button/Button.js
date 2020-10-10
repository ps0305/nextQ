import React from 'react';
import {View, Text, TouchableHighlight, Alert, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Button(props) {
  return (
    <TouchableHighlight
      style={{width: windowWidth / 2.8, marginTop: 10}}
      onPress={() => Alert.alert(props.onpress)}>
      <Text
        style={{
          padding: 10,
          color: '#fff',
          textAlign: 'center',
          backgroundColor: 'red',
          borderRadius: 10,
          borderColor: '#fff',
          fontSize: 24,
          fontWeight: '500',
        }}>
        {props.title}
      </Text>
    </TouchableHighlight>
  );
}
