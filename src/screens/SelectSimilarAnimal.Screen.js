import React, { useEffect, useState } from "react";
import { View, ImageBackground, TouchableOpacity, Image, Text, StyleSheet, Alert } from "react-native";
import Theme from "../assets/theme/AxTheme";

const SelectSimilarAnimalScreen = () => {

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const imageUrls = [
    require("../assets/img/animals/cartoon-cat.webp"),
    require("../assets/img/animals/cow.jpg"),
    require("../assets/img/animals/dog.png"),
  ];

  useEffect(() => {
    Shuffle();
    timeSchedule();

  }, []);

  const Shuffle = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];
    setSelectedImage(randomImage);
  };

  const timeSchedule = () => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }


  const checkClickImage = () => {

    if (selectedImage === 5 && selectedImageIndex === 2) {
      Shuffle()
      Alert.alert("You Won", "Completed!")
    } else {
      if (selectedImage === 4 && selectedImageIndex === 1) {
        Shuffle()
        Alert.alert("You Won", "Completed!")
      } else {
        if (selectedImage === 3 && selectedImageIndex === 0) {
          Shuffle()
          Alert.alert("You Won", "Completed!")
        } else {
          alert("please try again");
        }
      }
    }
  };

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require("../assets/img/background/bg_3.jpg")}>

      <View style={[Theme.w100, Theme.h5]}>
        <TouchableOpacity style={[Theme.w15, Theme.h100, Theme.justAlign, Theme.ml2]}>
          <Image
            source={require("../assets/icons/angle-small-left.png")}
            style={[Theme.w60, Theme.h53]}
          />
        </TouchableOpacity>
      </View>
      <View style={[Theme.w90, Theme.h10, Theme.flexDirRow]}>
        <View style={[Theme.w10]} />
        <View style={[Theme.w90, Theme.h100, Theme.justifyCenter]}>
          <Text style={[Theme.fBlack, Theme.f25, Theme.fBold, Theme.txtAlignCenter]}>
            Click on the below image when 2 images match
          </Text>
        </View>
      </View>

      <View style={[Theme.h2]} />

      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        <View style={[Theme.w100, Theme.h100, Theme.justAlign]}>
          {selectedImage && (
            <Image
              source={selectedImage}
              style={{ width: 200, height: 200 }}
              resizeMode="contain"
            />
          )}
        </View>
      </View>

      <View style={[Theme.h2]} />

      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        <TouchableOpacity
          style={[Theme.w100, Theme.h100, Theme.justAlign]}
          onPress={checkClickImage}
        >
          <Image
            source={imageUrls[selectedImageIndex]}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={[Theme.h15]} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    width: 30,
    height: 30,
  },
});

export default SelectSimilarAnimalScreen;
