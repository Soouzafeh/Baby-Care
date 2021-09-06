import React from 'react';
import {Alert, Text, View, TextInput, StyleSheet, Button, ActivityIndicator,  TouchableOpacity, Image, StatusBar, KeyboardAvoidingView,} from 'react-native';

import firebase from '@firebase/app';
import '@firebase/auth';

import Home from './Home';
import Cadastro from './Cadastro'

export default class LogunPage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: '',
            isLoading: false,
            message: ''
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
                onPress= {() => this.login()}
            >
            <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
        );
    }

    renderButton2() {
        return(
            <TouchableOpacity 
                onPress= {() => this.props.navigation.navigate('Cadastro')}
            >
            <Text style={styles.text}>Criar conta</Text>
            </TouchableOpacity>
        );
    }

    renderMessage() {
        const {message} = this.state;
        if (!message)
            return null;
        return (
            <View>
                <Text>
                    {message}
                </Text>
            </View>
        );
    }

    mudaTextInput (campo, valor) {
        this.setState({[campo]:valor});
    }

    login() {
        this.setState({ isLoading:true});
        const {email, password} = this.state;

        const loginSucesso = user => {
            this.props.navigation.navigate('Home');
        }

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(loginSucesso)
        .catch(error => {
            if (error.code == 'auth/user-not-found') {
              Alert.alert(
                'Usuário não encontrado',
                'Criar novo usuário?',
                [{
                  text: 'Não',
                }, {
                  text: 'Sim',
                  onPress: () => {
                    this.props.navigation.navigate('Cadastro')
                  }
                }],
                { cancelable: false}
              )
            } else {
              Alert.alert(
                'Erro na auntenticação',
                this.erroLoginMessage(error.code)
              )
            }
          })
          .then(() => this.setState({ isLoading: false}));
    }
    
    erroLoginMessage(errorCode) {
        switch (errorCode) {
            case 'auth/wrong-password':
                return 'Senha Incorreta'
            case 'auth/user-not-found':
                return 'Usuário não encontrado'
            case 'auth/invalid-email':
                return 'E-mail incorreto'
            default:
                return 'Erro não documentado, contate o administrador: Felipe'
        }
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container}>
            <StatusBar
            barStyle= "dark-content"
            hidden= {false}
            backgroundColor= '#B7E2FF'
            />
            <View>
            <Image
             source={require('./Imagens/log0.png')} style={styles.Imagem}/>
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
                  placeholder= "senha" secureTextEntry
                  placeholderTextColor= "#FFF"
                  value= {this.state.password}
                  onChangeText= {value => this.mudaTextInput('password', value)}
                />
                {this.renderButton()}
                {this.renderButton2()}
            </View>
                {this.renderMessage()}
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
    justifyContent: 'center',
    paddingBottom: 55,
    padding: 15,
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
  
});