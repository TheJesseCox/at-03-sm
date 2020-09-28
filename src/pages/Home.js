import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View , Button } from 'react-native';
import IconCom from 'react-native-vector-icons/Ionicons';
import { TextInput} from 'react-native-gesture-handler';
import { Picker } from 'react-native';

IconCom.loadFont();



//quandtidade de casas depois da virgula-----> toFixed(2);

export function Home({ navigation }) {
 
  const[peso,setPeso]= React.useState(0.00);
  const[altura, setAltura]= React.useState(0.000); 
  const[IMC, setIMC]= React.useState(0.000); 
  const[idade, setIdade]= React.useState(0);


  function calculaIMC(peso,altura){
    var IMCconvert = (peso/(altura*altura));

    setIMC(IMCconvert);


    if(IMC != 0){
      navigation.navigate('Resultado',{IMCconvert});
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.cabecalhoView}><StatusBar style="auto" />
        <IconCom style={{alignSelf:'flex-start'}} name="ios-menu" size={27} onPress={() => navigation.openDrawer()}></IconCom>
        <Text style={styles.titulo}>ACADEMIA 4137 FITNESS</Text>
        <Text style={styles.subtitulo}>Mede teu índice de massa corporal... <IconCom name="md-body" size={20}></IconCom></Text>
      </View>
        
      <View style={styles.corpoView}>
        <Text style={styles.corpoTexto}>Insira seus dados...<IconCom name="ios-build" size={25}></IconCom></Text>
        <TextInput placeholder="Peso" style={styles.input} onChangeText={texto => setPeso(texto)} value={peso}/>
        <TextInput placeholder="Altura" style={styles.input} onChangeText={texto2 => setAltura(texto2)} value={altura} />
        

        <Picker
          selectedValue={idade}
          style={{ height: 50, width: 303 , backgroundColor:'#dbdbdb',marginTop:15,marginBottom:30, color:'#7d7d7d'}}
          onValueChange={selected => setIdade(selected)}
          value={idade}>
          <Picker.Item label="Selecione a idade" value="0" />
          <Picker.Item label="Criança" value="Criança" />
          <Picker.Item label="Adulto" value="Adulto" />
          <Picker.Item label="Idoso" value="Idoso" />
        </Picker>


        
        <Button title="Calcular IMC" color="#000" onPress={() => calculaIMC(peso,altura)} />
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
    width: 380,
    height: 390,
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
    borderColor:"#dbdbdb",
    paddingLeft:10,
  },
});
