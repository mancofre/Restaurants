import { firebaseApp } from './firebase';
import * as firebase from 'firebase';
import 'firebase/firestore';
//YellowBox.ignoreWarnings(['Setting a timer']);

const db = firebase.firestore(firebaseApp);

export const isUserLogger = () => {
    let isLooged = false;
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLooged = true)
    });

    return isLooged;
}

export const getCurrentUser = () =>{
    return firebase.auth().currentUser;
}

export const closeSession = () =>{
    return firebase.auth().signOut();
}

export const registerUser = async(email, password) =>{
    const result = {statusResponse: true, error: null};
    try {
        await firebase.auth().createUserWithEmailAndPassword(email,password);
    } catch (error) {
       result.error = 'Este correo ya está registrado.' 
       result.statusResponse = false       
    }

    return result
}

export const loginWithEmailAndPassword = async(email, password) => {
    const result = { statusResponse: true, error: null}
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        result.statusResponse = false
        result.error = "Usuario o contraseña no válidos."
    }
    return result
}

export const updateProfile = async(data) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().currentUser.updateProfile(data)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}

export const reauthenticate = async(password) => {
    const result = { statusResponse: true, error: null }
    const user = getCurrentUser()
    const credentials = firebase.auth.EmailAuthProvider.credential(user.email, password)

    try {
        await user.reauthenticateWithCredential(credentials)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}

export const updateEmail = async(email) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().currentUser.updateEmail(email)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}

export const updatePassword = async(password) => {
    const result = { statusResponse: true, error: null }
    try {
        await firebase.auth().currentUser.updatePassword(password)
    } catch (error) {
        result.statusResponse = false
        result.error = error
    }
    return result     
}
