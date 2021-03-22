import React, { useEffect, useState,useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'
import { getCurrentUser } from '../../utils/actions';

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';
import Loading from '../../components/Loading'

export default function Account() {
    const [login, setLogin] = useState(null);    
    
    useFocusEffect (
      useCallback(() => {
          const user = getCurrentUser()         
          user ? setLogin(true) : setLogin(false)
      }, [])
  )
   console.log(login);
    if(login == null){
        return <Loading isVisible={true} text={'Cargando..'}/>
    }

    return login ? <UserLogged /> : <UserGuest />
}

const styles = StyleSheet.create({})
