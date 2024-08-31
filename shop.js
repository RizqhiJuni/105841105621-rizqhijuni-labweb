import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';


class Home extends Component {
    render() {
        const mainImage = require('./assets/ip.jpg');
        const newImages = [
            { source: require('./assets/ip15.jpg'), title: 'Iphone 15 ProMax', subtitle: 'Rp. 25.000.000' },
            { source: require('./assets/ip15p.jpg'), title: 'Iphone 15 Plus', subtitle: 'Rp. 20.000.000' },
            { source: require('./assets/ip14.jpg'), title: 'Iphone 14 Promax', subtitle: 'Rp. 22.000.000' },
            { source: require('./assets/ip13p.jpg'), title: 'Iphone 13 ProMax', subtitle: 'Rp. 18.000.000' },

            
        ];
        const twoimage = [
            { source: require('./assets/ip12.jpg'), title: 'Iphone 12', subtitle: 'Rp. 11.000.000' },
            { source: require('./assets/ip13m.jpg'), title: 'Iphone 13 Mini', subtitle: 'Rp. 13.000.000' },
            { source: require('./assets/ip11.jpg'), title: 'Iphone 11', subtitle: 'Rp. 7.000.000' },
            { source: require('./assets/ip14b.jpg'), title: 'Iphone 14', subtitle: 'Rp. 15.000.000' },
        ];

        return (
            <SafeAreaView style={{
                flex: 1,ckgroundColor: '#ffffff',
            }}>
                <ScrollView>
                    <View style={{position: 'relative',}}>
                        <Image source={mainImage} style={{width: '100%',height: 200,resizeMode: 'cover',}} />
                        <View style={{
                            position: 'absolute',
                            buttom: 40,
                            left: 20,
                            right: 20,
                            alignItems: 'flex-start',
                            marginTop: 120,
                    
                        }}>
                            <Text style={{
                                color: '#ffffff',
                                fontSize: 40,
                                fontWeight: 'bold',
                            }}>Street Clotes</Text>
            
                        </View>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>Sale</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {newImages.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{padding: 20,}}>
                        <Text style={{fontSize: 24,fontWeight: 'bold',}}>New</Text>
                        <Text style={{
                            color: '#888888',
                            marginVertical: 10,
                            fontSize: 20,
                        }}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{flexDirection: 'row',}}>
                            {twoimage.map((item, index) => (
                                <View key={index} style={{marginRight: 16, alignItems: 'center',}}>
                                    <Image source={item.source} style={{
                                        width: 150,
                                        height: 200,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                
                                    }} />
                                    <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 5,}}>{item.title}</Text>
                                    <Text style={{fontSize: 15, color: 'red',}}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;