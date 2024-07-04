import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginpage from './loginpage';
import signuppage from './signuppage';
import ForgetPasswordpage from './ForgetPasswordpage';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
     {/* <Button title="ke halaman login" onPress={() => navigation.navigate('Login')} />  */}
     <Button title="ke singup" onPress={() => navigation.navigate('singup')} /> 
     {/* <Button title="ke forget password" onPress={() => navigation.navigate('ForgetPassword')} />  */}
    </View>
   
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Loginpage} options={{headerShown: false}}/>
        <Stack.Screen name="singup" component={signuppage} options={{headerShown: false}}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordpage} options={{headerShown: false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;