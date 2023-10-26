import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import React from 'react';

const PlayCardComponent = ({GAME_ON_PRESS, GAME_IMG, GAME_STYLE}) => {
  return (
    <>
      <View style={styles.cardSpace} />
      <View style={[styles.cardStyles]}>
        <TouchableOpacity
          style={[
            Theme.w90,
            Theme.h100,
            Theme.borderRadius20,
            Theme.flexDirRow,
            Theme.bgMain5,
          ]}
          onPress={GAME_ON_PRESS}>
          <View style={[Theme.w5]} />

          <View style={[Theme.w100, Theme.justAlign]}>
            <Image source={GAME_IMG} style={GAME_STYLE} />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  cardSpace: {
    height: 30,
  },
});

export default PlayCardComponent;
