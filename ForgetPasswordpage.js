import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

const ButtonCustom = ({ text, color }) => {
    
  return (
    <TouchableOpacity style={{
      backgroundColor: color,
      width: '100%',
      height: 50,
      borderRadius: 25,
      justifyContent: 'center',
      marginTop: 20,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'MetroMedium'
      }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const TextInputCustom = ({ placeholder, typekeyboard, value, onChangeText, isError }) => {
  return (
    <View style={{ width: '100%' }}>
      <TextInput
        placeholder={placeholder}
        keyboardType={typekeyboard}
        value={value}
        onChangeText={onChangeText}
        style={{
          width: '100%',
          height: 50,
          borderColor: isError ? 'red' : 'gray',
          borderWidth: 1,
          borderRadius: 10,
          marginBottom: isError ? 5 : 20,
          paddingLeft: 10,
          fontSize: 18,
          fontFamily: 'MetroMedium'

        }}
      />
      {isError && (
        <Text style={{ color: 'red', marginBottom: 20 }}>
          Not a valid email address. Should be your@email.com
        </Text>
      )}
    </View>
  )
}

const App = () => {
    const [dapatFont]= useFonts( {
        'MetroBold' : require('./assets/fonts/Metropolis-Bold.otf'),
        'MetroMedium' : require('./assets/fonts/Metropolis-Medium.otf')   
    } )
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const validateEmail = (text) => {
    setEmail(text);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsError(!emailRegex.test(text));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={{ fontSize: 18 }}>{"<"}</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.instructions}>
          Please, enter your email address. You will receive a link to create a new password via email.
        </Text>
        <View style={styles.form}>
          <TextInputCustom
            placeholder="Email"
            typekeyboard="email-address"
            value={email}
            onChangeText={validateEmail}
            isError={isError}
          />
          <ButtonCustom text="SEND" color="red" />
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 40,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
});