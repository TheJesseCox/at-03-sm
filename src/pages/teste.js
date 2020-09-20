import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconCom from 'react-native-vector-icons/Ionicons';
import { Table, Row, Rows } from 'react-native-table-component';

IconCom.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoView}><StatusBar style="auto" />
        <Text style={styles.titulo}>ACADEMIA 4137 FITNESS</Text>
        <Text style={styles.subtitulo}>Mede teu índice de massa corporal <IconCom name="md-body" size={20}></IconCom></Text>
      </View>
        
      <View style={styles.corpoView}>
        <Text style={styles.corpoTextoSup}>Seu indice de massa corporal é de...</Text>
        <Text style={styles.imc}>XX</Text>
        <Text style={styles.corpoTextoInf}>kg/m2</Text>
      </View>

      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cabecalhoView:{
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '25%',
    margin: 0,
    padding:28,
    justifyContent: 'center',
    alignItems:'center',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    marginBottom:10
  },
  titulo:{
    fontSize:38,
    fontStyle:"italic"
  },
  subtitulo:{
    fontSize:15,
    fontStyle:"italic",
    alignSelf:'flex-start',
    color:"#7d7d7d"
  },
  corpoView:{
    backgroundColor: '#FAFAFA',
    width: '70%',
    height: '26%',
    marginTop: 10,
    paddingHorizontal:20,
    paddingVertical:20,
    justifyContent: 'flex-start',
    alignItems:'baseline',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    borderRadius: 20
  },
  corpoTextoSup:{
    fontSize:15,
    fontStyle:"italic",
    alignSelf:'flex-start',
  },
  corpoTextoInf:{
    fontSize:15,
    fontStyle:"italic",
    alignSelf:'center',
  },
  imc:{
    alignSelf:'center',
    fontSize:100
  }
});


