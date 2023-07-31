

import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from 'navigations/AppRouts';
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      {/* <GestureHandlerRootView> */}
        <AppRoutes />
      {/* </GestureHandlerRootView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
