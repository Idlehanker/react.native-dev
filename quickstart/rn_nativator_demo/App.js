import React from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux'

import createStore from './src/redux'
import ReduxNavigation from './src/navigation/ReduxNavigation'

const store = createStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar barStyle='light-content'/>
          <ReduxNavigation/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
