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
import TM from '../assets/theme/AxTheme';

const WelcomeScreen = ({navigation}) => {
  const SCREEN_WIDTH = 1; // Dimensions.get('screen').width;
  const SCREEN_HEIGHT = 1; // Dimensions.get('screen').height;
  const [height, setHeight] = useState(0.1);
  const [width, setWidth] = useState(0.1);
  const [name, setName] = useState('none');

  useEffect(() => {
    setTimeout(() => {
      setHeight(10);
      setWidth(10);
    }, 400);
    setTimeout(() => {
      setHeight(20);
      setWidth(20);
    }, 600);
    setTimeout(() => {
      setHeight(30);
      setWidth(30);
    }, 800);
    setTimeout(() => {
      setHeight(40);
      setWidth(40);
    }, 900);
    setTimeout(() => {
      setHeight(50);
      setWidth(50);
    }, 1000);
    setTimeout(() => {
      setHeight(70);
      setWidth(70);
    }, 1100);
    setTimeout(() => {
      setHeight(80);
      setWidth(80);
    }, 1200);
    setTimeout(() => {
      setHeight(90);
      setWidth(90);
    }, 1300);
    setTimeout(() => {
      setHeight(100);
      setWidth(100);
    }, 1400);
    setTimeout(() => {
      setName('flex');
      setHeight(110);
      setWidth(110);
    }, 1500);
    setTimeout(() => {
      navigation.navigate('TermsScreen');
    }, 2500);
  }, []); // eslint-disable-line

  return (
    <View style={[TM.container, TM.bgWelCome, TM.w100, TM.h100]}>
      <Image
        source={require('../assets/img/logo.png')}
        style={{width: SCREEN_WIDTH * width, height: SCREEN_HEIGHT * height}}
      />
      <View style={[TM.mt10, {display: name}]}>
        <Image
          source={require('../assets/img/name.png')}
          style={{width: 180, height: 110}}
        />
      </View>
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
