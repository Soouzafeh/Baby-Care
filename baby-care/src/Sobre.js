import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';

export default class Sobre extends React.Component {
  render() {
    return(
      <View style={styles.container}>
      <ScrollView>
      <StatusBar
        barStyle= "light-content"
        hidden= {false}
        backgroundColor= '#FCC3EE'
        />
        <Image source={require('./Imagens/log0.png')} style={styles.Imagem}/>
        <Text style={styles.título}>Sobre o Projeto</Text>

        <Text style={styles.text}>O aplicativo Baby Care é um projeto dedicado ao curso "Programador de Dispositivos Móveis", ofertado pelo Instituto Federal do Sul de Minas. Tendo como objetivo colocar em prática as técnicas e ensinamentos passados para os alunos durante o período de 16 semanas.</Text>

        <Text style={styles.text}>O aplicativo tem como função, ajudar mães e pais (principalmente de primeira viagem) a tratarem e entenderem alguns sinais de seus bebês, onde podem entender sobre a saúde dele através da coloração do cocô e seu tipo de choro ou até mesmo da temperatura (que pode ser convertida em outras unidades de temperatura), também acompanhando o calendário de vacinação para que não se perca nenhuma vacina e o bebê mantenha-se em dia com sua saúde e prevenção.</Text>

        <Text style={styles.text}>Projeto totalmente desenvolvido por Felipe Ferreira de Souza, utilizando informações dos sites: </Text>

        <Text style={styles.fonte}>'https://www.uol.com.br/vivabem/noticias/redacao/2020/01/09/pais-fiquem-atentos-cor-do-coco-e-um-indicador-da-saude-do-bebe.htm';</Text>

        <Text style={styles.fonte}>'https://www.tuasaude.com/calendario-de-vacinacao-do-bebe/';</Text>

        <Text style={styles.fonte}>'https://www.danonenutricia.com.br/infantil/primeiros-meses/saude/vacinacao-infantil-primeiros-quinze-meses.html';</Text>

        <Text style={styles.fonte}>'https://incrivel.club/inspiracion-psicologia/17-senales-que-un-bebe-usa-para-comunicar-algo-cuando-aun-no-sabe-hablar-784410/';</Text>
        
      </ScrollView>
      </View>
    );
  }
}  

const styles =  StyleSheet.create ({
  container : {
    flex: 1,
    backgroundColor: '#B7E2FF',
    alignContent: 'center',
    justifyContent: 'flex-start',
    marginTop: -25
  },
  título : {
    fontSize: 30,
    color: '#fff',
    backgroundColor: '#FCC3EE',
    margin: 10,
    borderRadius: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  text: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: 10,
  },

  fonte: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: 10,
  },

  Imagem: {
    height: 185,
    width: 185,
    alignSelf: 'center',
  }
})