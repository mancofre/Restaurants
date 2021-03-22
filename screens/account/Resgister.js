import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import RegisterForm from '../../components/account/RegisterForm'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function Resgister() {
    return (
        <KeyboardAwareScrollView>
            <Image 
                source={require('../../assets/restaurant-logo.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <RegisterForm/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    image:{
        height:150,
        width:'100%',
        marginBottom: 20  
    }
})
