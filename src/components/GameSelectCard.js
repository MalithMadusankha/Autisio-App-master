/**
 *
 * project name     : NanasaApp
 * project author   : mindula dilthushan
 * author email     : minduladilthushan1@gmail.com
 *
 *
 */
import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import Theme from "../assets/theme/AxTheme";

const GameSelectCard = ({ ON_PRESS, SHOW_IMG, IMG_URL }) => {

  const defaultImage = require("../assets/icons/menu-burger.png");

  return (
    <TouchableOpacity
      style={[Theme.w100, Theme.h90, Theme.justAlign]}
      onPress={ON_PRESS}
    >
      {SHOW_IMG && IMG_URL ? (
        <Image
          source={IMG_URL}
          style={[Theme.w55, Theme.h55]}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={defaultImage}
          style={[Theme.w100, Theme.h90]}
          resizeMode="contain"
        />
      )}

    </TouchableOpacity>
  );
};

export default GameSelectCard;
