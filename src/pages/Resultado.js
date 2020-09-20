import React, { Component } from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { StatusBar } from 'expo-status-bar';
import IconCom from 'react-native-vector-icons/Ionicons';
//<IconCom style={{alignSelf:'flex-start'}} name="ios-menu" size={27} onPress={() => navigation.openDrawer()}></IconCom>




export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['IMC', 'CLASSIFICAÇÃO'],
      tableData: [
        ['< 18,5', 'Baixo Peso'],
        ['18,5 - 24,9', 'Peso Saudável'],
        ['25,0 - 29,9', 'Sobrepeso'],
        ['> 30,0', 'Obesidade']
      ]
    }
  }
 
  render() {
    const state = this.state;
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







        <View style={styles.tabelaView}>
          <Table borderStyle={{borderWidth: 2, borderColor: '#dbdbdb'}}>
            <Row data={state.tableHead} style={styles.tabelaHead} textStyle={styles.tabelaText}/>
            <Rows data={state.tableData} textStyle={styles.tabelaText}/>
          </Table>
        </View>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tabelaView:{ 
    flex: 1, 
    padding: 15, 
    paddingTop: 24, 
    backgroundColor: '#fff',
    width: 350,
    height: 1,
    margin:'9%',
    borderRadius:20
  },
  tabelaHead:{ 
    height: 40, 
    backgroundColor: '#dbdbdb' 
  },
  tabelaText:{ 
    margin: 10,
    fontStyle:"italic",
    alignSelf:'center',
    fontSize:20
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
    borderRadius: 20,
    alignSelf:'center'
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