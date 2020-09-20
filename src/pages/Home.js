import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View , TextInput , Button } from 'react-native';
import IconCom from 'react-native-vector-icons/Ionicons';


IconCom.loadFont();


export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalhoView}><StatusBar style="auto" />
        <IconCom style={{alignSelf:'flex-start'}} name="ios-menu" size={27} onPress={() => navigation.openDrawer()}></IconCom>
        <Text style={styles.titulo}>ACADEMIA 4137 FITNESS</Text>
        <Text style={styles.subtitulo}>Mede teu índice de massa corporal <IconCom name="md-body" size={20}></IconCom></Text>
      </View>
        
      <View style={styles.corpoView}>
        <Text style={styles.corpoTexto}>Insira seus dados...<IconCom name="ios-build" size={25}></IconCom></Text>
        <TextInput style={styles.input} onChangeText={text => onChangeText("ue")} value={"\tPeso"}/>
        <TextInput style={styles.input} onChangeText={text => onChangeText("ue")} value={"\tAltura"}/>
        <TextInput style={styles.input} onChangeText={text => onChangeText("ue")} value={"\tIdade"}/>
        <Button title="Calcular IMC" color="#000" />
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
    width: '90%',
    height: '50%',
    marginTop: 60,
    paddingHorizontal:40,
    paddingVertical:40,
    justifyContent: 'flex-start',
    alignItems:'center',
    shadowOffset:{width:4,height:4},
    shadowOpacity:0.4,
    shadowColor:"#DEDEDE",
    shadowRadius:4,
    elevation: 5,
    borderRadius: 20
  },
  corpoTexto:{
    fontSize:20,
    fontStyle:"italic",
    alignSelf:'flex-start',
  },
  input:{ 
    height: 50,
    width: 302,
    borderColor: 'gray', 
    borderWidth: 1,
    marginVertical:15,
    fontSize:20,
    color:"#8f8f8f",
    fontStyle:"italic",
    backgroundColor:"#dbdbdb",
    borderColor:"#dbdbdb"
  }
});
