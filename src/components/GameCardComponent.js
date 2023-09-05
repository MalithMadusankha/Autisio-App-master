import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../assets/theme/AxTheme";
import React from "react";

const GameCardComponent = ({GAME_ON_PRESS, GAME_TITLE, GAME_IMG, GAME_STYLE}) => {
  return (
    <>
      <View style={styles.cardSpace} />
      <View style={[styles.cardStyles]}>
        <TouchableOpacity style={[Theme.w90, Theme.h100, Theme.borderRadius20, Theme.flexDirRow, Theme.bgMain3]} onPress={GAME_ON_PRESS}>
        
          <View style={[Theme.w10]} />
          <View style={[Theme.w60, Theme.h100, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f27, Theme.fBold, Theme.txtAlignCenter]}>
              {GAME_TITLE}
            </Text>
          </View>
          <View style={[Theme.w30, Theme.h100, Theme.justAlign]}>
            <Image
              source={GAME_IMG}
              style={GAME_STYLE}
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyles: {
    width: "100%",
    height: 165,
    alignItems: "center",
  },
  cardSpace: {
    height: 30,
  },
});

export default GameCardComponent;
