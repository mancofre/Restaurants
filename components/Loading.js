import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native'


export default function Loading({isVisible, text}) {
    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return (
        <View>      
            <Overlay
                isVisible = { isVisible } 
                windowBackgroundColor='rgba(0, 0, 0, .5)'
                overlayBackgroundColor='transparent'               
                overlayStyle={styles.overlay}
            >
                <View style={[styles.container, styles.horizontal]}>
                
                    <ActivityIndicator size="large" color="#442484" />
                    {
                        text && <Text style={styles.text}>{text}</Text>
                    }
                </View>

            </Overlay>   
            
        </View>
    )
}

const styles = StyleSheet.create({
    overlay:{
        height: 100,
        width: 200,
        backgroundColor: '#fff',
        borderColor: '#442484',
        borderWidth: 2,
        borderRadius: 10
    },
    text:{
        color:'#442484'
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });
