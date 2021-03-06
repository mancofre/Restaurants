import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import { useFocusEffect } from '@react-navigation/native'
import { size } from 'lodash'
import firebase from 'firebase/app'

import Loading from '../../components/Loading'
import ListRestaurants from '../../components/restaurants/ListRestaurants'
import { getMoreRestaurants, getRestaurants } from '../../utils/actions'

export default function Restaurants({navigation}) {
    const [user, setUser] = useState(null)
    const [startRestaurant, setStartRestaurant] = useState(null)
    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)
   
    const limitRestuarants = 7
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged((userInfo) =>{
            userInfo ? setUser(true) : setUser(false)
        })
    }, [])

    useFocusEffect(
        useCallback(() =>{
            async function getData() {
                setLoading(true)

                const response = await getRestaurants(limitRestuarants)
               
                if(response.statusResponse){
                    setStartRestaurant(response.startRestaurant)
                    setRestaurants(response.restaurants)
                }

                setLoading(false)
                
            }
            getData()
        }, [])
    )

    const handleLoadMore = async() => {
        if (!startRestaurant) {
            return
        }

        setLoading(true)
        const response = await getMoreRestaurants(limitRestaurants, startRestaurant)
        if (response.statusResponse) {
            setStartRestaurant(response.startRestaurant)
            setRestaurants([...restaurants, ...response.restaurants])
        }
        setLoading(false)
    }

    if(user === null){
        return <Loading isVisible={true} text='Cargando...'/>
    } else {
        <Loading isVisible={false} text='Cargando...'/>
    }

    return (
        <View style={styles.viewBody}>
            <ListRestaurants 
                restaurants={restaurants}
                navigation={navigation}
                handleLoadMore={handleLoadMore}
            />
           { 
            user && (
                    <Icon 
                        type='material-community'
                        name= 'plus'
                        color='#442484'
                        reverse= 'true'
                        containerStyle={styles.btnContainer}
                        onPress={() => navigation.navigate('add-resturant')}
                    />
                    )
           
            }
            <Loading isVisible={loading} text='Cargando Restaurantes.'/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1
    },
    btnContainer:{
        position: 'absolute',
        bottom: 10,
        right: 10,
        shadowColor: 'black',
        shadowOffset:{
            width: 2,
            height: 2
        },
        shadowOpacity: 0.5
    }
})
