import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Platform,
  View,
  StyleSheet
} from 'react-native';
import CardView from './components/cardView'
import dbRef from './firebase'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default class App extends Component<Props> {
  paintCards () {
    console.log('hola');
  }
  render() {
    console.log(typeof APPBAR_HEIGHT+STATUSBAR_HEIGHT);
    return (
      <View style={styles.mainView}>
        <View style={styles.header}>
          <View style={styles.statusBar}>
          </View>
          <View style={styles.appBar}>
              <Text>Lista de Estudiantes</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollAlignment} style={styles.scroll}>
          <CardView/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  scroll : {
    flex: 1,
    backgroundColor:'steelblue',
  },
  scrollAlignment : {
    alignItems: 'center'
  },
  mainView: {
    backgroundColor:'steelblue',
    flex:1
  },
  header: {
    height:APPBAR_HEIGHT+STATUSBAR_HEIGHT,
    backgroundColor:'green'
  },
  statusBar: {
    height:STATUSBAR_HEIGHT
  },
  appBar: {
    height:APPBAR_HEIGHT,
    alignItems:'center',
    justifyContent: 'center'
  }
});
