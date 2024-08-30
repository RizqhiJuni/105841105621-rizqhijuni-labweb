import { StyleSheet, View,Text , Image } from 'react-native'
import React from 'react'

const main = () => {
  return (
    <View style={{
      flex : 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      }}>
        <Image
          source={require('./assets/icon/searchred.png')}
          style={{
            width: 45,
            height: 45,
            marginBottom: 30,
            tintColor: 'red',
          }}
        />
        <Text style={{
          fontSize: 34,
          color: '#000000',
          fontWeight: 'bold',
          fontFamily: 'Metropolis',
        }}>Finding similar result...
        </Text>      
    </View>
  )
}

export default main
