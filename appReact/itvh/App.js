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
  constructor (props){
    super(props)
    this.state = {studentList: []}
  }

  componentDidMount () {
    dbRef.child('usuarios')
         .child('estudiantes')
         .on('value',(snapshot) => {
         let data =snapshot.val();
         if (data!=null) {
           let arrSnap = Object.values(data);
           this.setState({studentList:arrSnap});
         } else {
           this.setState({studentList: []});
         }
    });
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
          {
            this.state.studentList.length>0?
               this.state.studentList.map( item =>
               {
                 return (
                   <CardView
                     numCont={item.numCont}
                     apePat={item.apePat}
                     apeMat={item.apeMat}
                     nombre={item.nombre}
                     carrera={item.carrera}
                     semestre={item.semestre}/>
                 )
               }): <Text>No existen alumnos</Text>
          }

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
    // backgroundColor:'steelblue',
    flex:1
  },
  header: {
    height:APPBAR_HEIGHT+STATUSBAR_HEIGHT,
    backgroundColor:'grey'
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
