import React from 'react';
import { StyleSheet, Text, ScrollView, Alert, Button, TouchableOpacity, TextInput, StatusBar, Image, View } from 'react-native';

export default class Vacinacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = { meses: '', info: 'Informações' };
    this.calcular = this.calcular.bind(this);
  }

calcular() {
    let calcular = this.state
  
    if (calcular.meses >= 0 && calcular.meses < 2) {
      calcular.info = 'Tomar:\r\n' + 'BCG\r\n' + 'Hepatite B – Primeira dose'

    } else if (calcular.meses >= 2 && calcular.meses < 3) {
      calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '\r\n' + 'Tomar:\r\n'  + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano'
      
      }else if (calcular.meses >= 3 && calcular.meses < 4) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '\r\n' + 'Tomar:\r\n' + '1º Meningocócica C'
      
      }else if (calcular.meses >= 4 && calcular.meses < 5) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1ºPenta/DTP\r\n' + '1ºVIP/VOP\r\n' + '1ºPneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '\r\n' + 'Tomar:\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10v\r\n' + '2º Roravírus Humano'
      
      }else if (calcular.meses >= 5 && calcular.meses < 6) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1ºPenta/DTP\r\n' + '1ºVIP/VOP\r\n' + '1ºPneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10V\r\n' + '2º Roravírus Humano\r\n'+ '\r\n' + 'Tomar:\r\n' + '2º Meningocócica C'
      
      }else if (calcular.meses >= 6 && calcular.meses < 9) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10V\r\n' + '2º Roravírus Humano\r\n' + '2º Meningocócica C\r\n' + '\r\n' + 'Tomar:\r\n' + '3º Penta/DTP\r\n' + '3º VIP/VOP'
      
      }else if (calcular.meses >= 9 && calcular.meses < 12) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10V\r\n' + '2º Roravírus Humano\r\n' + '2º Meningocócica C\r\n' + '3º Penta/DTP\r\n' + '3º VIP/VOP\r\n' + '\r\n' + 'Tomar:\r\n' + '1º Febre Amarela'
      
      }else if (calcular.meses >= 12 && calcular.meses < 15) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10V\r\n' + '2º Roravírus Humano\r\n' + '2º Meningocócica C\r\n' + '3º Penta/DTP\r\n' + '3º VIP/VOP\r\n' + '1º Febre Amarela\r\n' + '\r\n' + 'Tomar:\r\n' + 'Reforço Pneumocócica 10V\r\n' + 'Reforço Meningocócica\r\n' + 'Tríplice Viral'
      
      }else if (calcular.meses >= 15 && calcular.meses < 48) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10V\r\n' + '2º Roravírus Humano\r\n' + '2º Meningocócica C\r\n' + '3º Penta/DTP\r\n' + '3º VIP/VOP\r\n' + '1º Febre Amarela\r\n' + 'Reforço Pneumocócica 10V\r\n' + 'Reforço Meningocócica\r\n' + 'Tríplice Viral\r\n' + '\r\n' + 'Tomar:\r\n' + '1º Reforço Penta/DTP\r\n' + '1º Reforço VIP/VOP\r\n' + 'Hepatite A\r\n' + 'Tetra Viral\r\n'
      
      }else if (calcular.meses == 48) {
        calcular.info = 'Ter tomado:\r\n' + 'BCG\r\n' + 'Hepatite B\r\n' + '1º Penta/DTP\r\n' + '1º VIP/VOP\r\n' + '1º Pneumocócica 10V\r\n' + '1º Roravírus Humano\r\n' + '1º Meningocócica C\r\n' + '2º Penta/DTP\r\n' + '2º VIP/VOP\r\n' + '2º Pneumocócica 10V\r\n' + '2º Roravírus Humano\r\n' + '2º Meningocócica C\r\n' + '3º Penta/DTP\r\n' + '3º VIP/VOP\r\n' + '1º Febre Amarela\r\n' + 'Reforço Pneumocócica 10V\r\n' + 'Reforço Meningocócica\r\n' + 'Tríplice Viral\r\n' + '1º Reforço Penta/DTP\r\n' + '1º Reforço VIP/VOP\r\n' + 'Hepatite A\r\n' + 'Tetra Viral\r\n' + '\r\n' + 'Tomar:\r\n' + '2º Reforço Penta/DTP\\r\n' + '2º Reforço VIP/VOP\r\n' + '2º Varicela (atenuada)\r\n' + '2º Febre Amarela' 
      
      }

      this.setState(calcular);
      this.mensagem();
  }

clear = () => {
    this.setState({
      meses: '',
      info: 'informações'
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
      <ScrollView style={styles.fundo}>
      <View style={styles.container}>
        
        <StatusBar
        barStyle= "light-content"
        hidden= {false}
        backgroundColor= '##FCC3EE'
        />

        <Image source={require('./Imagens/log0.png')} style={styles.Imagem}/>
        
        <Text style={styles.title}>Digite a idade em meses do seu bebê:</Text>
        
        <TextInput
        style={styles.textInput}
        onChangeText={(meses) => this.setState({ meses })}
        value={this.state.meses}
        placeholder="De 0 a 48 meses"
        placeholderTextColor= "#FFF"
        keyboardType={'numeric'}
        />

        <TouchableOpacity
          style={[styles.button]}
          onPress = {this.calcular}
        > 
          <Text style={styles.text2}>Calcular</Text>
        </TouchableOpacity>

        <Text style={[styles.text]}>{this.state.info}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={this.clear}
          
          accessibilityLabel="Botão para limpar os valores"
        >
        <Text style={styles.text2}>Limpar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: '#B7E2FF',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: -25
  },
  fundo : {
    backgroundColor: '#B7E2FF'
  },    
  button: {
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
    paddingLeft: 20,
    margin: 5,
    borderRadius: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: 'white',
    textAlign: 'left',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius:30,
    padding: 5,
    margin: 5,
    flex: 1,
    fontWeight: 'bold',
    paddingLeft: 20
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
    fontWeight:  'bold'
  },
  Imagem: {
    height: 190,
    width: 190,
    alignSelf: 'center',
  }
});
