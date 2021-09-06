import React from 'react';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/FontAwesome5';


function Sidebar({...props}) {
    return(
        <DrawerContentScrollView {...props} >
            
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={require('./src/Imagens/logo.png')}
                                size={130}
                                style={{backgroundColor:'#fff'}}
                            />
                            <View style={{flexDirection:'column', marginTop:55}}>
                                <Title style={styles.title}></Title>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>  </Paragraph>
                                <Caption style={styles.caption}></Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}></Paragraph>
                                <Caption style={styles.caption}></Caption>
                            </View>
                        </View>
                    </View>
            </View>
                            
            <DrawerItem
                style={{marginLeft:15}}
                icon={({color, size}) => (
                    <Icon 
                    name="home" 
                    color={color}
                    size={size}
                    />
                )}
                label= "Home"
                onPress={() => props.navigation.navigate('Home')}
            />

            <DrawerItem
                icon={({color, size}) => (
                    <Icon 
                    name="thermometer" 
                    color={color}
                    size={size}
                    />
                )}
                style={{marginLeft:15}}
                label= "Temperatura"
                onPress={() => props.navigation.navigate('Temperatura')}
            />

            <DrawerItem
                icon={({color, size}) => (
                    <Icon 
                    name="poop" 
                    color={color}
                    size={size}
                    />
                )}
                style={{marginLeft:15}}
                label= "Coloração do Cocô"
                onPress={() => props.navigation.navigate('Coc0')}
            />

            <DrawerItem
                icon={({color, size}) => (
                    <Icon 
                    name="syringe" 
                    color={color}
                    size={size}
                    />
                )}
                style={{marginLeft:15}}
                label= "Vacinação"
                onPress={() => props.navigation.navigate('Vacinacao')}
            />

            <DrawerItem
                icon={({color, size}) => (
                    <Icon 
                    name="sad-tear" 
                    color={color}
                    size={size}
                    />
                )}
                style={{marginLeft:15}}
                label= "Tipos de Choro"
                onPress={() => props.navigation.navigate('Choro')}
            />

            <DrawerItem
                icon={({color, size}) => (
                    <Icon 
                    name="info-circle" 
                    color={color}
                    size={size}
                    />
                )}
                style={{marginLeft:15}}
                label= "Sobre"
                onPress={() => props.navigation.navigate('Sobre')}
            />
        </DrawerContentScrollView>

    );
}
const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {

      alignSelf: 'center'
    },
    title: {
      fontSize: 26,
      marginTop: 3,
      fontStyle: 'italic',
      backgroundColor: '#FCC3EE',
      color: '#fff',
      textAlign: 'center'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
  });

export default Sidebar;