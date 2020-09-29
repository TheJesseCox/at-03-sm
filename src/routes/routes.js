import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Home } from './../pages/Home';
import { Resultado } from './../pages/Resultado';
import { Infos } from './../pages/Infos';

const Drawer = createDrawerNavigator();

export function Routes() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{backgroundColor: '#FFFFFF',width: 200,}}
        drawerContentOptions={
          {
            activeTintColor: '#5c00b3', 
            activeBackgroundColor: '#dab3ff',
            inactiveTintColor: '#DEDEDE',
            inactiveBackgroundColor: '#C2c2c2',
          }}>

          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Resultado" component={Resultado}/>
          <Drawer.Screen name="Informações" component={Infos}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }