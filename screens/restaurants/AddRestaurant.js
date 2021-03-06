import React, { useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Toast from 'react-native-easy-toast'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'

import Loading from '../../components/Loading'
import AddRestaurantForm from '../../components/restaurants/AddRestaurantForm'

export default function AddRestaurant({ navigation }) {
    const navegation = useNavigation();
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)

    return (
        <KeyboardAwareScrollView>
            <AddRestaurantForm 
                toastRef={toastRef} 
                setLoading={setLoading}
                navigation={navegation}
            />
            <Loading isVisible={loading} text="Creando restarutante..."/>
            <Toast ref={toastRef} position="center" opacity={0.9}/>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({})
