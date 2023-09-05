import React, { useEffect, useState } from "react";
import { View, ImageBackground, TouchableOpacity, Image, Text } from "react-native";
import Theme from "../assets/theme/AxTheme";

const TopBottomAnimalScreen = () => {

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const imageSources = [
      require("../assets/img/animal_gifs/bird_flying.gif"),
      require("../assets/img/animals/bird.png"),
    ];

    const switchImage = () => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    };
    switchImage();

    const intervalId = setInterval(switchImage, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const clickAnimal = () => {
    if (currentImage === 1) {
      alert("You Win");
      //navigation.navigate('WellDoneScreen')
    } else {
      alert("You Loss");
    }
  };

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require("../assets/img/background/bg_skye.jpg")}>

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
            Click on the button when the animal rests
          </Text>
        </View>
      </View>
      <View style={[Theme.h2]} />
      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        <Image
          source={require("../assets/img/animal_gifs/bird_flying.gif")}
          style={{
            width: 200,
            height: 200,
            opacity: currentImage === 0 ? 1 : 0,
          }}
        />
      </View>
      <View style={[Theme.h2]} />
      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        <Image
          source={require("../assets/img/animals/bird.png")}
          style={{
            width: 200,
            height: 200,
            opacity: currentImage === 1 ? 1 : 0,
          }}
        />
      </View>
      <View style={[Theme.h2]} />
      <View style={[Theme.w80, Theme.h15, Theme.justAlign]}>
        <TouchableOpacity onPress={clickAnimal}>
          <Image
            source={require("../assets/img/others/pngegg.png")}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </TouchableOpacity>
      </View>

    </ImageBackground>
  );
};

export default TopBottomAnimalScreen;
