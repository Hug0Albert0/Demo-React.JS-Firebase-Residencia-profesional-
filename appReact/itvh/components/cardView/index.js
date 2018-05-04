import React, {Component} from 'react';
import {
  View,
  Text,
  Image
} from 'react-native'
import cardStyles from './cardStyles'

export default class CardView extends Component <Props> {

  nombre (name='Fulanito'){
    return name;
  }

  apellidoPat (apellidoP='Perez') {
    return apellidoP;
  }

  apellidoMat (apellidoM ='De tal') {
    return apellidoM;
  }

  carrera (carrera = 'Nini') {
    return carrera;
  }

  semestre (semestre= '20') {
    return semestre
  }


  render () {
    return (
        <View style={cardStyles.card}>
          <Text style={cardStyles.studentData}>Apellido Paterno: {this.apellidoPat()}</Text>
          <Text style={cardStyles.studentData}>Apellido Materno: {this.apellidoMat()}</Text>
          <Text style={cardStyles.studentData}>Nombre (s): {this.nombre()}</Text>
          <Text style={cardStyles.studentData}>Carrera: {this.carrera()}</Text>
          <Text style={cardStyles.studentData}>Semestre: {this.semestre()}</Text>
        </View>
    );
  }
}
