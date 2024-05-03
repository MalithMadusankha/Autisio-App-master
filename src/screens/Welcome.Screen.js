import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';

const WelcomeScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const [height, setHeight] = useState(0.1);

  useEffect(() => {
    setTimeout(() => {
      setHeight(0.2);
    }, 400);
    setTimeout(() => {
      setHeight(0.3);
    }, 600);
    setTimeout(() => {
      setHeight(0.4);
    }, 800);
    setTimeout(() => {
      setHeight(0.45);
    }, 900);
    setTimeout(() => {
      setHeight(0.5);
    }, 1000);
    setTimeout(() => {
      setHeight(0.55);
    }, 1100);
    setTimeout(() => {
      setHeight(0.6);
    }, 1200);
    setTimeout(() => {
      setHeight(0.65);
    }, 1300);
    setTimeout(() => {
      setHeight(0.7);
    }, 1400);
    setTimeout(() => {
      setHeight(0.734);
    }, 1500);
    setTimeout(() => {
      navigation.navigate('TermsScreen');
    }, 2500);
  }, []); // eslint-disable-line

  return (
    <View style={[Theme.container, Theme.bgWelCome, Theme.w100, Theme.h100]}>
      <Image
        source={require('../assets/img/logo_t.png')}
        style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT * height}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginHorizontal: 15,
  },
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  cardSpace: {
    height: 30,
  },
});

export default WelcomeScreen;
