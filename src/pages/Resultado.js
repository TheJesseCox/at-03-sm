import React from 'react';
import { StyleSheet, View , Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import IconCom from 'react-native-vector-icons/Ionicons';
//<IconCom style={{alignSelf:'flex-start'}} name="ios-menu" size={27} onPress={() => navigation.openDrawer()}></IconCom>



export function Resultado(props) {
  
  const {IMCconvert} = props.route.params;

  if (IMCconvert<=18.5) {
    var result = "BAIXO PESO";
  }else if (IMCconvert>18.5 && IMCconvert<=24.9) {
    var result = "PESO SAUDÁVEL";
  } else if (IMCconvert>=25 && IMCconvert<=29.9) {
    var result = "SOBREPESO";
  } else if (IMCconvert>30) {
    var result = "OBESIDADE";
  }

  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoView}><StatusBar style="auto" />
      <IconCom style={{alignSelf:'flex-start'}} name="ios-menu" size={27}></IconCom>
        <Text style={styles.titulo}>ACADEMIA 4137 FITNESS</Text>
        <Text style={styles.subtitulo}>Mede teu índice de massa corporal... <IconCom name="md-body" size={20}></IconCom></Text>
      </View>

      <View style={styles.corpoView}>
        <Text style={styles.corpoTextoSup}>Seu indice de massa corporal é de...</Text>
        <Text style={styles.num}>{IMCconvert.toFixed(2)}</Text>
        <Text style={styles.corpoTextoInf}>kg/m2</Text>
        <Text style={styles.grau}>{result}</Text>
      </View>

      <View style={styles.corpoView2}>
        <Text style={styles.tabelaSup}>IMG(kg/m2){"\t\t\t\t\t\t\t\t\t"}Classificação</Text>
        <Text style={styles.tabelaInf}>
        {"\t\t\t\t\t\t"}{"<"} 18,5{"\t\t\t\t\t\t\t\t\t\t\t\t\t"}Baixo Peso{"\n\n"}
        {"\t\t\t\t\t"}18,5 - 24,9{"\t\t\t\t\t\t\t\t"}Peso saudável{"\n\n"}
        {"\t\t\t\t\t"}25,0 - 29,9{"\t\t\t\t\t\t\t\t\t"} Sobrepeso{"\n\n"}
        {"\t\t\t\t\t\t"}{">"} 30,0{"\t\t\t\t\t\t\t\t\t\t\t\t"}Obesidade{"\n\n"}
        </Text>
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbdbdb',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cabecalhoView:{
    backgroundColor: '#FAFAFA',
    width: '100%',
    height: '25%',
    margin: 0,
    padding:28,
    paddingTop:-10,
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
    height: '30%',
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
  num:{
    alignSelf:'center',
    fontSize:100
  },
  corpoView2:{
    backgroundColor: '#FAFAFA',
    width: '90%',
    height: '38%',
    marginTop: 10,
    paddingHorizontal:20,
    paddingVertical:20,
    justifyContent: 'flex-start',
    alignItems:'center',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    borderRadius: 20,
    alignSelf:'center'
  },
  tabelaSup:{
    fontSize:22,
    fontStyle:'italic',
    backgroundColor:'#dbdbdb',
    padding:10,
    paddingHorizontal:29,
    paddingLeft:35
  },
  tabelaInf:{
    fontSize:22,
    alignSelf:'flex-start',
    backgroundColor:'#c2c2c2',
    paddingLeft:0,
    paddingRight:35
  },
  grau:{
    fontSize:28,
    fontStyle:"italic",
    alignSelf:'center',
    //fontWeight:"bold",
  },
});