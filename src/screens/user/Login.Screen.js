import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  ImageBackground,
} from 'react-native';
import TM from '../../assets/theme/AxTheme';
import LoginForm from '../../components/LoginForm';

const LoginScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const [height, setHeight] = useState(0.7);
  const css = {
    card: {
      width: SCREEN_WIDTH * 0.9,
      height: SCREEN_HEIGHT * 0.8,
    },
  };
  return (
    <ImageBackground
      imageStyle={[TM.w100, TM.h100, TM.justAlign]}
      style={[TM.w100, TM.h100, TM.justAlign]}
      source={require('../../assets/img/background/login.jpg')}>
      <View style={[TM.h10, TM.justAlign]}>
        <Text style={[TM.f20]}>Login Here </Text>
      </View>

      <View style={[TM.bgWhiteT, TM.borderRadius20, TM.px3, TM.h85, TM.w85]}>
        <LoginForm navigation={navigation} />
      </View>
    </ImageBackground>
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

export default LoginScreen;
