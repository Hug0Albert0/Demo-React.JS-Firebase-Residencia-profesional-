import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'

export default class CardView extends Component <Props> {
  render () {
    return (
        <View style={{backgroundColor: "white", width: '90%', height:180, borderRadius: 10,  borderWidth: 3, borderStyle: "solid", borderColor: 'black',marginTop: 15,marginBottom: 5}}>
        </View>
    );
  }
}
