import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  Platform,
  View
} from 'react-native';
import CardView from './components/cardView'

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;

export default class App extends Component<Props> {
  render() {
    console.log(typeof APPBAR_HEIGHT+STATUSBAR_HEIGHT);
    return (
      <View style={{backgroundColor: "steelblue", flex:1}}>
        <View style={{height:APPBAR_HEIGHT+STATUSBAR_HEIGHT, backgroundColor:"green"}}>
          <View style={{height:STATUSBAR_HEIGHT}}>

          </View>
          <View style={{height:APPBAR_HEIGHT, alignItems:'center', justifyContent: 'center'}}>
              <Text>Lista de Estudiantes</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}style={{flex:1, backgroundColor:"steelblue"}}>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
          <CardView/>
        </ScrollView>
      </View>
    );
  }
}
