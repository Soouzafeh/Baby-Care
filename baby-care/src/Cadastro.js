import React from 'react';
import {Alert, Text, View, TextInput, StyleSheet, Button, ActivityIndicator,  TouchableOpacity, ImageBackground, StatusBar, KeyboardAvoidingView} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';

import Home from './Home';
import Login from './Login';

export default class LogunPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            isLoading: false,
        }
    }

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyCBO8LCV-p154Mtf_kWpeh6ColoogW_qqw",
            authDomain: "login-d4ccb.firebaseapp.com",
            databaseURL: "https://login-d4ccb.firebaseio.com",
            projectId: "login-d4ccb",
            storageBucket: "login-d4ccb.appspot.com",
            messagingSenderId: "899041363923",
            appId: "1:899041363923:web:3e79d1f0f5d306722e5126"
        };
          try{
          firebase.initializeApp(firebaseConfig);
          }catch(err) {
              if (!/already.exists/.test(err.message)) {
                  console.error("erro")
              }
          }
    }
    renderButton() {
        if (this.state.isLoading)
            return <ActivityIndicator size="small" color="#FCC3EE" />;
        return(
            <TouchableOpacity 
                style={[styles.button]}
                onPress= {() => this.cadastro()}
            >
            <Text style={styles.text}>Confirmar</Text>
            </TouchableOpacity>
        );
    }


    mudaTextInput (campo, valor) {
        this.setState({[campo]:valor});
    }

    cadastro() {
        this.setState({ isLoading:true});
        const {email, password} = this.state;

        const cadastroSucesso = user => {
          Alert.alert(
                'Concluído',
                'Conta criada com sucesso',
                [{
                  text: 'Ok',
                  onPress: () => {
                    this.props.navigation.navigate('Login')
                  }
                }],
                { cancelable: false}
              )
        }

        firebase
          firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(cadastroSucesso) 
            .catch(error => {
            if (error.code == 'auth/email-already-in-use') {
              Alert.alert(
                'Erro',
                'Email já existente',
                [{
                  text: 'Ok'
                }],
                { cancelable: false}
              ) 
            }
            })
            .then(() => this.setState({ isLoading: false}));
    }
    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
            <StatusBar
            barStyle= "dark-content"
            hidden= {false}
            backgroundColor= '#B7E2FF'
            />
            <View style={styles.moldura}>
            <ImageBackground source={require('./Imagens/log0.png')} style={styles.Imagem}></ImageBackground>
                <TextInput
                  style={styles.textInput}
                  placeholder= "baby@email.com"
                  placeholderTextColor= "#FFF"
                  value= {this.state.email}
                  onChangeText= {value => this.mudaTextInput('email', value)}
                  keyboardType={'email-address'}
                />
                 <TextInput
                  style={styles.textInput}                 
                  placeholder= "senha (mais de 6 dígitos)" secureTextEntry
                  placeholderTextColor= "#FFF"
                  value= {this.state.password}
                  onChangeText= {value => this.mudaTextInput('password', value)}
                />
                {this.renderButton()}
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create ({
  textInput: {
    height: 40,
    borderWidth: 2,
    borderColor: 'white',
    paddingLeft: 20,
    margin: 10,
    borderRadius: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    height: 40,
    backgroundColor: '#FCC3EE',
    alignContent: 'center',
    padding: 8,
    borderRadius: 20,
    margin: 8,
  },
  container : {
    flex: 1,
    backgroundColor: '#B7E2FF',
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  Imagem: {
    height: 190,
    width: 190,
    alignSelf: 'center',
  },
  moldura:{
    borderWidth:3,
    borderColor: '#fff',
    borderRadius:30,
    padding:15,
    margin:12,
    flex:1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});