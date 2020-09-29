import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import IconCom from 'react-native-vector-icons/Ionicons';

IconCom.loadFont();

export function Infos({navigation}) {

  return (
    <View style={styles.container}>

      <View style={styles.cabecalhoView}><StatusBar style="auto" />
      <IconCom style={{alignSelf:'flex-start'}} name="ios-menu" size={27} onPress={() => navigation.openDrawer()}></IconCom>
        <Text style={styles.titulo}>ACADEMIA 4137 FITNESS</Text>
        <Text style={styles.subtitulo}>Mede teu índice de massa corporal... <IconCom name="md-body" size={20}></IconCom></Text>
      </View>
        
      <View style={styles.corpoView}>
        <Text style={styles.corpoTexto}>Informações sobre a Academia{"\n"}</Text>
        <Image style={{width:372,height:156,borderRadius:40}} source={require('./../../MODELO-TELAS/academia.jpg')}></Image>
        <Text style={styles.corpoTexto2}>{"\n"}Objetivo: Nosso objetivo como academia é shapear todos que aqui se cadastram e pagam para perder os famosos pneuzinhos{"\n"}</Text>

        <View style={styles.dale}>
            <Text style={styles.corpoTexto2}>Localização: Rua Oswaldo Amarelo</Text>
            <Text style={styles.corpoTexto2}>Perto da casa verde{"\n"}</Text>
            <Text style={styles.corpoTexto2}>Telefone:4121231413{"\n"}</Text>
            <Text style={styles.corpoTexto2}>App desenvolvido por Guilherme Dalmolin{"\n"}</Text>
        </View>
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
    width: "95%",
    height: "70%",
    marginTop: 10,
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
    fontSize:25,
    fontStyle:"italic",
    alignSelf:'center',
  },
  corpoTexto2:{
    fontSize:17,
    fontStyle:"italic",
    justifyContent:'center',
    alignSelf:'center',
  },
  dale:{
    backgroundColor: "#DEDEDE",
    width:300,
    height:140,
    padding:10,
  }
});
