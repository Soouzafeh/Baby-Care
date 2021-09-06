import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Sidebar from './customDrawer';
import Home from './src/Home';
import Login from './src/Login';  
import Temperatura from './src/Temperatura';
import Cadastro from './src/Cadastro';
import Coc0 from './src/Coc0';
import Sobre from './src/Sobre';
import Vacinacao from './src/Vacinacao';
import Choro from './src/Choro';

const HomeStack = createStackNavigator();
const ChoroStack = createStackNavigator();
const SobreStack = createStackNavigator();
const TemperaturaStack = createStackNavigator();
const Coc0Stack = createStackNavigator();
const VacinacaoStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FCC3EE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
     },
     headerTitleAlign: 'center'
  }}>
      <HomeStack.Screen name="Home" component ={Home} options={{
        title: 'Home',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='#FCC3EE' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
);

const TemperaturaStackScreen = ({navigation}) => (
  <TemperaturaStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FCC3EE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
     },
     headerTitleAlign: 'center'
  }}>
      <TemperaturaStack.Screen name="Temperatura" component ={Temperatura} options={{
        title: 'Temperatura',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='#FCC3EE' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </TemperaturaStack.Navigator>
);

const Coc0StackScreen = ({navigation}) => (
  <Coc0Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FCC3EE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
     },
     headerTitleAlign: 'center'
  }}>
      <TemperaturaStack.Screen name="Coc0" component ={Coc0} options={{
        title: 'Cocô',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='#FCC3EE' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </Coc0Stack.Navigator>
);

const VacinacaoStackScreen = ({navigation}) => (
  <VacinacaoStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FCC3EE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
     },
     headerTitleAlign: 'center'
  }}>
      <VacinacaoStack.Screen name="Vacinação" component ={Vacinacao} options={{
        title: 'Vacinação',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='#FCC3EE' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </VacinacaoStack.Navigator>
);

const SobreStackScreen = ({navigation}) => (
  <SobreStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FCC3EE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
     },
     headerTitleAlign: 'center'
  }}>
      <VacinacaoStack.Screen name="Sobre" component ={Sobre} options={{
        title: 'Sobre',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='#FCC3EE' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </SobreStack.Navigator>
);

const ChoroStackScreen = ({navigation}) => (
  <ChoroStack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#FCC3EE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
     },
     headerTitleAlign: 'center'
  }}>
      <ChoroStack.Screen name="Choro" component ={Choro} options={{
        title: 'Choro',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={25} backgroundColor='#FCC3EE' onPress={() => {navigation.openDrawer()}}></Icon.Button>
        )
      }}/>
    </ChoroStack.Navigator>
);


export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props=> <Sidebar {...props} />}>
        
          
          <Drawer.Screen name= "Login" component= {Login} options={{ gestureEnabled: false }}/>
          <Drawer.Screen name= "Cadastro" component= {Cadastro} options={{ gestureEnabled: false }}/>
          <Drawer.Screen name= "Home" component= {HomeStackScreen} />
          <Drawer.Screen name= "Temperatura" component= {TemperaturaStackScreen} />
          <Drawer.Screen name= "Coc0" component= {Coc0StackScreen} />
          <Drawer.Screen name= "Vacinacao" component= {VacinacaoStackScreen} />
          <Drawer.Screen name= "Choro" component= {ChoroStackScreen} />
          <Drawer.Screen name= "Sobre" component= {SobreStackScreen} />   


        </Drawer.Navigator>
      </NavigationContainer>
    );
    
  }
}