import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Theme from '../assets/theme/AxTheme';

const GameLevelCard = ({imgUrls, onPress}) => {
  return (
    <View style={styles.container}>
      {imgUrls.map((imgUrl, index) => (
        <View key={index} style={styles.imageContainer}>
          <TouchableOpacity
            style={[
              Theme.w100,
              Theme.h100,
              Theme.bgWhite,
              Theme.justAlign,
              Theme.borderRadius20,
              Theme.elevation8,
              Theme.borderColor5,
            ]}
            onPress={() => onPress(index)}>
            <Image source={imgUrl} style={styles.image} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 5,
  },
  image: {
    width: 70,
    height: 70,
    margin: 10,
  },
});

export default GameLevelCard;
