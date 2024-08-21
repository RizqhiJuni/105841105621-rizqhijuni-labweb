import React from "react";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import ImageSliderBox from "./ImageSliderBox";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   MetroBlack: require("./assets/fonts/Metropolis-Black.otf"),
  //   MetroBold: require("./assets/fonts/Metropolis-Bold.otf"),
  //   MetroLight: require("./assets/fonts/Metropolis-Light.otf"),
  //   MetroSemiBold: require("./assets/fonts/Metropolis-SemiBold.otf"),
  //   MetroMedium: require("./assets/fonts/Metropolis-Medium.otf"),
  // });

  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>;
  // }

  return <ImageSliderBox />
}