import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import ImageSlider from 'react-native-image-slider';

class imageSlider extends Component {
  render() {
    const images = [
      require('./assets/ip15.jpg'),
      require('./assets/ip12.jpg'),
      require('./assets/ip14.jpg'), // Repeated image as example
      require('./assets/ip13p.jpg'), // Repeated image as example
    ];

    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.content1}>
          <Text style={styles.contentText}>Content 1</Text>
        </View> */}
        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={images}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={item} style={styles.customImage} />
            </View>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
        {/* <View style={styles.content2}>
          <Text style={styles.contentText}>Content 2</Text>
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
//   content1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
  contentText: {
    fontSize: 20,
  },
  customSlide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customImage: {
    width: 300,
    height: 300,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    margin: 3,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  buttonSelected: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default imageSlider;