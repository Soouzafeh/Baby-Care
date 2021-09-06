import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image, Picker, ScrollView, TouchableOpacity } from 'react-native';

export default class Coc0 extends React.Component {

  state = {
    tipo: ''
  }

constructor(props) {
        super(props);
        this.state={
            tipo: 'Informações',
            texto0: 'Informações',
            texto1: 'Nas primeiras 48 horas de vida são eliminadas as primeiras fezes (mecônio) de coloração verde enegrecida, espessas, viscosas e sem cheiro. Na troca da fralda, o cocô pode ser grudento e difícil de limpar. Quando o leite começa a ser digerido, a cor verde característica vai ficando mais clara. Formado durante a gestação, o mecônio é deglutido pelo feto, sendo constituído por restos celulares, secreções intestinais, bile, muco e secreção pancreática.\r\n' + '\r\n' +'Alerta:\r\n' + 'A demora na eliminação do mecônio deve chamar a atenção para o diagnóstico de doenças, como fibrose cística (doença genética que afeta os pulmões, pâncreas e o sistema digestivo) e megacólon congênito ou doença de Hirschsprung (uma dilatação de parte do intestino grosso).',
            texto2: 'Após três ou quatro dias de vida, as fezes têm aspecto menos pegajoso do que o mecônio, são de cor amarelo-ouro ou amarronzada e podem apresentar alguns grumos de leite. A cor é característica dos bebês em aleitamento materno exclusivo e isso se deve a grande quantidade de gorduras e de lactose, principal tipo de açúcar presente no leite materno. São fezes aquosas, amolecidas, sem cheiro e, muitas vezes, costumam ser eliminadas a cada mamada. Já aqueles que tomam fórmulas infantis apresentam fezes mais consistentes, podendo apresentar odor.\r\n' + '\r\n' + 'Alerta:\r\n' + 'Quando o bebê está com diarreia, a cor das fezes não é relevante, mas podem ser esverdeadas, amareladas ou amarronzadas. Costumam ser muito volumosas e até explosivas, extravasando para fora da fralda. As causas mais comuns de diarreia nessa faixa etária são as infecções (virais ou bacterianas) e a alergia à proteína do leite de vaca (APLV). Há necessidade de consultar o pediatra quando o bebê apresentar repentina mudança na frequência e no volume das evacuações. A presença de sangue pode estar associada a infecções por tipos específicos de microorganismos, à APLV e a outras condições como a colite (inflamação intestinal) e a invaginação intestinal.',
            texto3: 'No sexto mês de vida, a partir da introdução da alimentação complementar, com acréscimo de frutas e papas principais, o padrão fecal se modifica, havendo maior consistência, mudanças de cor e do odor, que fica mais marcante devido a fontes diversas de proteínas, carboidratos e gordura na dieta. A partir daí, as fezes se tornam mais parecidas com as de uma criança ou adulto em relação à cor, à consistência e ao cheiro. É comum a presença de restos de alimentos devido à digestão incompleta. Remédios e alimentos podem mudar a cor marrom do cocô a exemplo das folhas verde-escuras e beterraba.\r\n' + '\r\n' +  'Alerta:\r\n' + 'Alimentos coloridos com corantes como sucos artificiais, iogurtes, cereais e gelatinas também modificam a cor fecal e são contraindicados para lactentes, já que tem baixo valor nutritivo e são acrescidos de açúcar, que não deve ser consumido antes dos 2 anos de vida.',        
            texto4: 'Eliminação de fezes esbranquiçadas e a presença de icterícia (olhos amarelados) por mais de 14 dias podem sinalizar doenças do fígado ou das vias biliares e necessitam de investigação imediata. Isso porque podem ser indicativos de doenças graves, que requerem investigação e intervenção urgentes, pois a demora no diagnóstico e no tratamento pode danificar o fígado de forma irreversível. Para alertar pais e médicos, o Ministério da Saúde em parceria com a SBP lançou a campanha.\r\n' + '\r\n' + 'Alerta:\r\n' + 'Amarelo com o objetivo de diagnosticar precocemente a Colestase Neonatal. Atualmente, foi incluído um sistema colorido de graduação das cores das fezes na Caderneta de Saúde da Criança fornecida a todos os recém-nascidos e que deve ser mostrada aos pais, pelo pediatra. Com isso, o encaminhamento para um especialista, se necessário, será feito o quanto antes.',
            texto5: 'Pode ser resultado de consumo de alimento de tonalidade mais escura, mas fezes com aparência de carvão podem sinalizar sangramento no trato digestivo. Bebês que tomam sulfato ferroso, usado para a prevenção e tratamento de anemia, podem também apresentar fezes com essa coloração.',
            texto6: 'Pode sinalizar a ingestão de comidas de coloração intensa como a beterraba, mas também pode ser indício de presença de sangue nas fezes, o que requer observação e atenção. Também pode estar presente em quadros de inflamação do cólon (colite) e por alergia à proteína do leite de vaca. Nesses casos é comum haver associação com vômitos, lesões de pele, dermatite de períneo e dor abdominal.',
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

        <Picker.Item label= "Escolha a coloração do cocô do seu bebê:" value= {this.state.texto0}/>
        
        <Picker.Item label= "Verde-escuro" value= {this.state.texto1}/>

        <Picker.Item label= "Marrom amarelado" value= {this.state.texto2}/>

        <Picker.Item label= "Marrom mais escuro" value= {this.state.texto3}/>

        <Picker.Item label= "Branco" value= {this.state.texto4}/>

        <Picker.Item label= "Preto" value= {this.state.texto5}/>

        <Picker.Item label= "Vermelho" value= {this.state.texto6}/>

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
    marginTop: -30
    
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'justify',
    justifyContent: 'center',
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
      paddingLeft: 5,
 
    },
    Imagem: {
    height: 190,
    width: 190,
    alignSelf: 'center',
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