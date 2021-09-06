import React from 'react';
import { StyleSheet, Text, View, Alert, Button, TouchableOpacity, TextInput, StatusBar, ImageBackground } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: '', tempc: '', tempk: '', tempf: '', info: 'Informações' };
    this.calculac = this.calculac.bind(this);
    this.calculak = this.calculak.bind(this);
    this.calculaf = this.calculaf.bind(this); //Usa o bind para mudar a forma que escreve a função (olhe como exemplo o clear e o resto das funções com bind)
  }
  
  calculac() {
    let conversao = this.state
    conversao.tempc = conversao.temp;
    conversao.tempk = conversao.tempc - 0 + 273.15;
    conversao.tempf = ((conversao.tempc * 9/5) + 32).toFixed(2) 
    

    if (conversao.tempc < 35.5) {
      conversao.info = 'A temperatura do bebê está abaixo do normal, hipotermia\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K\r\n' + conversao.tempf +' ºF'
    } else if (conversao.tempc >= 37.1 && conversao.tempc <= 37.5) {
      conversao.info = 'A temperatura do bebê está acima do ideal, estado febril\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K\r\n' + conversao.tempf +' ºF'
      }else if (conversao.tempc >= 36 && conversao.tempc <= 37) {
        conversao.info = 'A temperatura do bebê está ideal\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K\r\n' + conversao.tempf +' ºF'
      }else if (conversao.tempc >= 37.8 && conversao.tempc < 38) {
        conversao.info = 'A temperatura do bebê está acima do normal, febre\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K\r\n' + conversao.tempf +' ºF'
      }else if (conversao.tempc >= 38) {
        conversao.info = 'A temperatura do bebê está muito acima do normal, hipertemia\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K\r\n' + conversao.tempf +' ºF'
      }
      this.setState(conversao);
      this.mensagem();
  }
  calculak() {
    let conversao = this.state
    conversao.tempk = conversao.temp
    conversao.tempc = (conversao.tempk - 273.15).toFixed(2)
    conversao.tempf = ((conversao.tempk - 273.15) * 9/5 + 32).toFixed(2) 

    if (conversao.tempc < 35.5) {
      conversao.info = 'A temperatura do bebê está abaixo do normal, hipotermia\r\n' + conversao.tempk + ' K\r\n' + conversao.tempc + ' ºC\r\n'  + conversao.tempf +' ºF'
    } else if (conversao.tempc >= 37.1 && conversao.tempc <= 37.5) {
      conversao.info = 'A temperatura do bebê está acima do ideal, estado febril\r\n' + conversao.tempk + ' K\r\n' + conversao.tempc + ' ºC\r\n' +  conversao.tempf +' ºF'
      }else if (conversao.tempc >= 36 && conversao.tempc <= 37) {
        conversao.info = 'A temperatura do bebê está ideal\r\n' + conversao.tempk + ' K\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempf +' F'
      }else if (conversao.tempc >= 37.8 && conversao.tempc < 38) {
        conversao.info = 'A temperatura do bebê está acima do normal, febre\r\n' + conversao.tempk + ' K\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempf +' ºF'
      }else if (conversao.tempc >= 38) {
        conversao.info = 'A temperatura do bebê está muito acima do normal, hipertemia\r\n' + conversao.tempk + ' K\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempf +' ºF'
      }
      this.setState(conversao);
      this.mensagem();
  }
  calculaf() {
    let conversao = this.state
    conversao.tempf = conversao.temp
    conversao.tempc = ((conversao.tempf - 32) * 5/9).toFixed(2)
    conversao.tempk = ((conversao.tempf - 32) * 5/9 + 273.15).toFixed(2) 

    if (conversao.tempc < 35.5) {
      conversao.info = 'A temperatura do bebê está abaixo do normal, hipotermia\r\n' + conversao.tempf +' ºF\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K' 
    } else if (conversao.tempc >= 37.1 && conversao.tempc <= 37.5) {
      conversao.info = 'A temperatura do bebê está acima do ideal, estado febril\r\n' + conversao.tempf +' ºF\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K' 
      }else if (conversao.tempc >= 36 && conversao.tempc <= 37) {
        conversao.info = 'A temperatura do bebê está ideal\r\n' + conversao.tempf +' ºF\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K' 
      }else if (conversao.tempc >= 37.8 && conversao.tempc < 38) {
        conversao.info = 'A temperatura do bebê está acima do normal, febre\r\n' + conversao.tempf +' ºF\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K'
      }else if (conversao.tempc >= 38) {
        conversao.info = 'A temperatura do bebê está muito acima do normal, hipertemia\r\n' + conversao.tempf +' ºF\r\n' + conversao.tempc + ' ºC\r\n' + conversao.tempk + ' K'
      }
      this.setState(conversao);
      this.mensagem();
  }
  clear = () => {
    this.setState({
      temp: '',
      tempc: '',
      tempk: '',
      tempf: '',
      info: 'Informações'
    });
  };
  mensagem() {
    const mensagem = this.state.info;
    Alert.alert(
      'Informações',
      mensagem,
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
        barStyle= "light-content"
        hidden= {false}
        backgroundColor= '#FCC3EE'
        />
        <ImageBackground source={require('./Imagens/log0.png')} style={styles.Imagem}></ImageBackground>
        <Text style={styles.title}
        >Digite a temperatura do seu bebê:</Text>
        <TextInput
        style={styles.textInput}
        onChangeText={(temp) => this.setState({ temp })}
        value={this.state.temp}
        placeholder="Exemplo: 37.5"
        placeholderTextColor= "#FFF"
        keyboardType={'numeric'}
        />
        <Text style= {styles.text}>Escolha o tipo de Temperatura</Text>

        <TouchableOpacity
          style={[styles.button]}
          onPress = {this.calculac}
          > 
          <Text style={styles.text2}>Celsius</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress = {this.calculak}
          >
          <Text style={styles.text2}>Kelvin</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button]}
          onPress = {this.calculaf}
          >
          <Text style={styles.text2}>Fahrenheit</Text>
        </TouchableOpacity>
        
        <Text style={[styles.info]}>{this.state.info}</Text>
        <TouchableOpacity
          style={styles.button2}
          onPress={this.clear}
        >
        <Text style={styles.text2}>Limpar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: '#B7E2FF',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -50
  },  
  button: {
    backgroundColor: '#FCC3EE',
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  button2: {
    backgroundColor: '#FCC3EE',
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  textInput: {
    height: 35,
    borderWidth: 2,
    borderColor: 'white',
    margin: 5,
    borderRadius: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
    
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  info: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius:30,
    padding: 5,
    margin: 5,
  },
  title: {
    fontSize: 23,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  text2: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Imagem: {
    height: 120,
    width: 120,
    alignSelf: 'center',
  }
});