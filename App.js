import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, TouchableOpacityBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginPage from 'loginpage';
import shop from './shop.js';
import bag from './bag.js';
import favorite from './favorite.js'
import profil from './profil.js';
import HomePage from './Home.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/homeaktif.png';
import HomeInaktif from './assets/icon/home.png';
import Shop from './assets/icon/shopaktif.png';
import ShopInaktif from './assets/icon/shop.png';
import Bags from './assets/icon/bagaktif.png';
import BagsInactif from './assets/icon/bag.png';
import Favorit from './assets/icon/staraktif.png';
import Favoriinactive from './assets/icon/star.png';
import Profil from './assets/icon/useraktif.png';
import Provilinactiv from './assets/icon/user.png';


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home"
        component={HomePage}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="shop" 
        component={shop}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="bag" 
        component={bag}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Bags : BagsInactif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit" 
        component={favorite}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Favorit : Favoriinactive}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="profil" 
        component={profil}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ?   Profil : Provilinactiv}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown: false}} />
        <Stack.Screen name="profil" component={profil} options={{headerShown: false}} />
        <Stack.Screen name="favorite" component={favorite} options={{headerShown: false}} />
        <Stack.Screen name="bag" component={bag} options={{headerShown: false}} />
        <Stack.Screen name="shop" component={shop} options={{headerShown: false}} />
        {/* <Stack.Screen name="Login" component={LoginPage}options={{headerShown: false}} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;