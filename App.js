/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';

import PageOne from './pages/pageOne';
import PageTwo from './pages/pageTwo';

const App: () => React$Node = () => {
  const data = new Date().getTime();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <PageOne />
        {/* <PageTwo /> */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
