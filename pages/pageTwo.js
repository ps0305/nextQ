/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

import nextQCounter from '../assets/nextq-counter.png';
import Button from '../component/Button/Button';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PageTwo = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={nextQCounter} resizeMode="contain" style={styles.banner} />
      <View>
        <Button title="1 Serving" onpress="1 Serving" />
        <Button title="2" onpress="2" />
        <Button title="3" onpress="3" />
        <Button title="4" onpress="4" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  banner: {height: windowHeight, width: 200},
});

export default PageTwo;
