import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import Theme from '../assets/theme/AxTheme';

const AnimalImageComponet = ({animal}) => {
  if (animal === 'b') {
    return (
      <Image
        source={require('../assets/img/animals/bird.png')}
        style={[Theme.w100, Theme.h100]}
        alt="Bird"
      />
    );
  }

  if (animal === 'd') {
    return (
      <Image
        source={require('../assets/img/animals/dog.png')}
        style={[Theme.w100, Theme.h100]}
        alt="Bird"
      />
    );
  }

  if (animal === 'm') {
    return (
      <Image
        source={require('../assets/img/animals/monkey.png')}
        style={[Theme.w100, Theme.h100]}
        alt="Bird"
      />
    );
  }

  if (animal === 'z') {
    return (
      <Image
        source={require('../assets/img/animals/zebra_2.png')}
        style={[Theme.w100, Theme.h100]}
        alt="Bird"
      />
    );
  }
};

export default AnimalImageComponet;

const styles = StyleSheet.create({});
