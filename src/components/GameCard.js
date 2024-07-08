import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import Theme from '../assets/theme/AxTheme';

const GameCard = ({ON_PRESS, SHOW_IMG, IMG_URL}) => {
  return (
    <TouchableOpacity
      style={[
        Theme.w100,
        Theme.h90,
        Theme.bgWhite,
        Theme.justAlign,
        Theme.borderRadius20,
        Theme.elevation8,
        Theme.borderColor4,
      ]}
      onPress={ON_PRESS}>
      <Image
        source={IMG_URL}
        style={[Theme.w55, Theme.h55]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default GameCard;
