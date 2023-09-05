import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Theme from "../assets/theme/AxTheme";

const CardComponent = ({ CARD_ON_PRESS, CARD_TITLE, CARD_IMG, CARD_BG, CARD_IMG_STYLE }) => {
  return (
    <TouchableOpacity style={[Theme.w100, Theme.h100, Theme.justAlign, CARD_BG]} onPress={CARD_ON_PRESS}>

      <View style={[Theme.w90, Theme.h20, Theme.justifyCenter]}>
        <Text style={[Theme.fBold, Theme.f20, Theme.fBlack, Theme.ml5]}>
          {CARD_TITLE}
        </Text>
      </View>

      <View style={[Theme.w90, Theme.h80, Theme.justAlign]}>
        <Image
          source={CARD_IMG}
          style={[CARD_IMG_STYLE]}
        />
      </View>

    </TouchableOpacity>

  );
};

export default CardComponent;
