/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

import nextQ from '../assets/nextq.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PageOne = () => {
  const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Image source={nextQ} style={styles.logoImg} resizeMode="center" />
          <Text style={styles.timeTxt}>{formatAMPM(new Date())}</Text>
          <View style={{marginVertical: 24}}>
            <TouchableHighlight
              style={styles.callMeTouchable}
              onPress={() => Alert.alert('CALL NEXT')}
              //underlayColor="#fff"
            >
              <Text style={styles.callNxtButtonTxt}>CALL NEXT</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.buttonContainner}>
            <TouchableHighlight
              style={styles.reCallTouchable}
              onPress={() => Alert.alert('RE CALL')}
              //underlayColor="#fff"
            >
              <Text style={styles.reCallBtnTxt}>RE CALL</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.onCallTouchable}
              onPress={() => Alert.alert('ON CALL')}
              //underlayColor="#fff"
            >
              <Text style={styles.onCallBtnTxt}>ON CALL</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.bottomTxtContainer}>
            <Text style={styles.bottomTxtStyle}>Powered by nextq</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: windowHeight,
    backgroundColor: '#d3d3d3',
  },
  logoImg: {
    marginTop: 100,
    alignSelf: 'center',
  },
  timeTxt: {
    textAlign: 'center',
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  callNxtButtonTxt: {
    paddingVertical: 2,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    borderColor: '#fff',
    fontSize: 40,
    fontWeight: '500',
  },
  buttonContainner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
  },
  reCallBtnTxt: {
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
    borderColor: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  onCallBtnTxt: {
    padding: 10,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
    borderColor: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
  reCallTouchable: {
    marginTop: 10,
    width: windowWidth / 2.8,
  },
  onCallTouchable: {
    width: windowWidth / 2.8,
    marginTop: 10,
  },
  bottomTxtContainer: {
    bottom: 0,
    position: 'absolute',
    alignSelf: 'center',
  },
  bottomTxtStyle: {
    textAlign: 'center',
    marginBottom: 80,
  },
  callMeTouchable: {
    marginHorizontal: 40,
    marginTop: 10,
  },
});

export default PageOne;
