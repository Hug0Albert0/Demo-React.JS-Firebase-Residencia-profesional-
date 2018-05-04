import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'
import cardStyles from './cardStyles'

export default class CardView extends Component <Props> {
  render () {
    return (
        <View style={cardStyles.card}>
          <Text style={cardStyles.studentData}>Apellido Paterno: {this.props.apePat}</Text>
          <Text style={cardStyles.studentData}>Apellido Materno: {this.props.apeMat}</Text>
          <Text style={cardStyles.studentData}>Nombre (s): {this.props.nombre}</Text>
          <Text style={cardStyles.studentData}>Carrera: {this.props.carrera}</Text>
          <Text style={cardStyles.studentData}>Semestre: {this.props.semestre}</Text>
        </View>
    );
  }
}
// CardView.defaultProps = {
//   apePat:'Perez',
//   apeMat: 'De Tal',
//   nombre: 'Fulanito del Carmen',
//   carrera: 'Tecnico Nini Superior',
//   semestre: '20'
// };
