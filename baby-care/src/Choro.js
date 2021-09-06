import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Picker, ScrollView, TouchableOpacity } from 'react-native';
import {Font} from 'expo'

export default class Choro extends React.Component {

  state = {
    tipo: ''
  }

constructor(props) {
        super(props);
        this.state={
            tipo: 'Informações',
            texto0: 'Informações',
            texto1: 'A criança ficou sozinha por muito tempo e quer que a peguem nos braços. Grita por cinco a seis segundos e, logo, se detém por uns 20 segundos, como se esperasse um resultado. Se o pai ou a mãe não respondem, o ciclo se repete várias vezes, até que o choro fique contínuo.',
            texto2: 'Pode começar com um choro para chamar a atenção, mas se o bebê foi pego mas não foi alimentado, o choro continuará. Poderá ficar histérico, mexendo a cabeça e fazendo barulhos de sucção.',
            texto3: 'Essa classe de choro é mais monótona, forte e incessante. Periodicamente, haverá suspiros fortes que indicarão que as sensações dolorosas aumentaram. Mas se a criança está doente, seu choro pode ser monótono, mas silencioso, já que não terá mais forças para fazer sons fortes.',        
            texto4: 'Até mesmo um simples pum, o xixi ou o cocô podem causar sensações incômodas para a criança, a princípio. Esse tipo de choro será mais como um resmungado ou um “miadinho”.',
            texto5: 'Quando o bebê tem sono, mas por alguma razão não pode dormir, o choro será mais monótono e tenderá a ser acompanhado por bocejos. A criança também esfregará os olhos e as orelhas.',
            texto6: 'Esse tipo de choro será bastante irritado e intermitente, muitas vezes acompanhado de inquietude e o bebê poderá se revirar bastante. Significa que é necessário checar a fralda ou verificar se ele está com calor ou frio.',
        }
    }

    clear = () => {
      this.setState({
        tipo: 'Informações'
      });
    };

  render() {
    return(
      <View style={styles.container}>
      <ScrollView style={styles.moldura}>

      <StatusBar
        barStyle= "light-content"
        hidden= {false}
        backgroundColor= '#FCC3EE'
        />

        <Image source={require('./Imagens/log0.png')} style={styles.Imagem}></Image>
        <View style={styles.box2}>
        <Picker
        style= {styles.box}
        selectedValue= {this.state.tipo}
        onValueChange= {
          (itemValor, itemIndex) =>
          this.setState({
            tipo: itemValor
          })
        } 
        >

        <Picker.Item label= "Escolha um tipo de choro para conhecer:" value= {this.state.texto0}/>
        
        <Picker.Item label= "Choro para chamar a atenção" value= {this.state.texto1}/>

        <Picker.Item label= "Choro faminto" value= {this.state.texto2}/>

        <Picker.Item label= "Choro de dor" value= {this.state.texto3}/>

        <Picker.Item label= "Choro por processos fisiológicos" value= {this.state.texto4}/>

        <Picker.Item label= "Choro sonolento" value= {this.state.texto5}/>

        <Picker.Item label= "Choro por estar incomodado" value= {this.state.texto6}/>

        </Picker>
        </View>

        <Text style={styles.text}>{this.state.tipo}</Text>

        <TouchableOpacity
          style={styles.button2}
          onPress={this.clear}
        >
        <Text style={styles.text2}>Limpar</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: -25
    
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'justify',
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius:30,
    padding: 5,
    margin: 10,
    marginTop: 15,
    flex: 1,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    paddingEnd: 10
    },
    box: {
      height: 50,
      width: 320,
      borderColor: '#FCC3EE',
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#FCC3EE',
      fontSize: 14,
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',

    },
    box2: {
      height: 50,
      width: 320,
      borderColor: '#FCC3EE',
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: '#FCC3EE',
      fontSize: 14,
      alignSelf: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      marginTop: 7,
      paddingLeft: 10,
 
    },
    Imagem: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  button2: {
    backgroundColor: '#FCC3EE',
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    margin: 5,
  },
  text2: {
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight:  'bold'
  },

})