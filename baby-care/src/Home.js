import React from 'react'
import { Text, TouchableOpacity, StyleSheet, StatusBar, ImageBackground, View, ScrollView} from 'react-native'

export default function Home({navigation}) {
    return(
          <ScrollView style={{backgroundColor: '#B7E2FF'}}>
          <View style={styles.container}>
          <StatusBar
          barStyle= "light-content"
          hidden= {false}
          backgroundColor= '#FCC3EE'
          />
            <ImageBackground source={require('./Imagens/log0.png')} style={styles.Imagem}></ImageBackground>
            <TouchableOpacity
            style={styles.button}
            onPress= {() => navigation.navigate('Temperatura')}
            >
                <Text style={styles.text} >Medição e conversão de temperatura</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress= {() => navigation.navigate('Coc0')}
            >
                <Text style={styles.text} >Coloração do Cocô do bebê</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress= {() => navigation.navigate('Vacinacao')}
            >
                <Text style={styles.text} >Vacinação</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress= {() => navigation.navigate('Choro')}
            >
                <Text style={styles.text} >Tipos de Choro</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button}
            onPress= {() => navigation.navigate('Sobre')}
            >
                <Text style={styles.text} >Sobre</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>

    )
}

const styles =  StyleSheet.create ({
  button: {
    backgroundColor: '#FCC3EE',
    alignItems: 'center',
    padding: 10,
    marginTop: 16,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  container : {
    flex: 1,
    backgroundColor: '#B7E2FF',
    marginTop: -25
  },
  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  Imagem: {
    height: 185,
    width: 185,
    alignSelf: 'center',
  }
})