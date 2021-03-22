import React from 'react'
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

export default function UserGuest() {
    const navegation = useNavigation();
    return (
       <ScrollView
            centerContent={true}
            style={styles.viewBody}
       >
            <Image 
                source={require('../../assets/restaurant-logo.png')}
                resizeMode='contain'
                style={styles.image}
            />
            <Text style={styles.title}>
                Consulta tu perfil en Restuarantes
            </Text>
            <Text style={styles.description}>
                ¿Como describirías tu mejor Restaurante? Busca y Visualiza los meejores Restaurantes de forma sencilla, vota cual te ha gustado más y comenta tu experiencia.
            </Text>

            <Button
                buttonStyle={styles.button} 
                title='Ver tu perfil'
                onPress={()=> navegation.navigate('login')}
            />

       </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 30
    },
    image:{
        height:300,
        width:'100%',
        marginBottom: 10        
    },
    title:{
        fontWeight: 'bold',
        fontSize: 19,
        marginVertical:10,
        textAlign:'center'
    },
    description:{
        textAlign: 'justify',
        marginBottom: 20,
        color: '#a65273'
    },
    button:{
        backgroundColor: '#442484'
    }
})
