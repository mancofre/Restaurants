import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import LoginForm from '../../components/account/LoginForm'

export default function Login() {
    
    return (
        <KeyboardAwareScrollView>
            <Image 
                source={require('../../assets/restaurant-logo.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <View style={styles.container}>
                <LoginForm/>
                <CreateAccount />
            </View>
            <Divider style={styles.divider}/>
        </KeyboardAwareScrollView>
        
    )
}

function CreateAccount(props){
    const navegation = useNavigation();
    return(
        <Text s
            tyle={styles.register}
            onPress={() => navegation.navigate('resgister')}
        >
            ¿Aún no tienes una cuenta?{' '}
            <Text style={styles.btnregister}>Regístrate</Text>
        </Text>
    )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:'100%',
        marginBottom: 20        
    },
    container:{
        marginHorizontal: 40
    },
    divider:{
        backgroundColor:'#442484',
        margin: 40,
        height:1
    },
    register:{
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: 'center'
    },
    btnregister:{
        color: '#442484',
        fontWeight: 'bold'
    }

})
