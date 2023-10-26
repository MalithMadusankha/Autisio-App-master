import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Animated,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import {useNavigation} from '@react-navigation/native';
import AnimalImageComponet from '../components/AnimalImageComponet';

const ClickAnimalScreen = ({route}) => {
  const {animal} = route.params;
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const [isClick4, setIsClick4] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [isNav, setIsNav] = useState(false);

  const useNavigate = useNavigation();

  useEffect(() => {
    console.log('st time', startTime);
    console.log('animal ', animal);
    setTimeout(() => {
      setShowImage1(false);
      setShowImage2(true);
    }, 5000);

    setTimeout(() => {
      setShowImage2(false);
      setShowImage3(true);
    }, 8000);

    setTimeout(() => {
      setShowImage3(false);
      setShowImage4(true);
    }, 11000);

    setTimeout(() => {
      setShowImage4(false);
      const currentTime = Date.now();
      const diff = currentTime - startTime;
      console.log('call');
      if (!isNav) {
        console.log('in if call');
        useNavigate.navigate('WellDoneScreen', {
          data: formatTime(diff),
          avg: 5,
          isWin: false,
        });
      }
    }, 14000);
  }, []); // eslint-disable-line

  const formatTime = time => {
    const seconds = Math.floor(time / 1000) % 60;
    return seconds;
  };
  const select1 = () => {
    setIsClick1(true);
    setShowImage1(false);
    setShowImage2(true);
  };
  const select2 = () => {
    setIsClick2(true);
    setShowImage2(false);
    setShowImage3(true);
  };
  const select3 = () => {
    setIsClick3(true);
    setShowImage3(false);
    setShowImage4(true);
  };

  const select4 = () => {
    setIsClick4(true);
    const currentTime = Date.now();
    const diff = currentTime - startTime;
    setIsNav(true);
    if (isClick1 && isClick2 && isClick3) {
      useNavigate.navigate('WellDoneScreen', {
        data: formatTime(diff),
        avg: 5,
        isWin: true,
      });
    } else {
      useNavigate.navigate('WellDoneScreen', {
        data: formatTime(diff),
        avg: 5,
        isWin: false,
      });
    }
  };

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_1_1.jpg')}>
      <Text
        style={[Theme.fBlack, Theme.f20, Theme.fBold, Theme.txtAlignCenter]}>
        Click on the animal appearing on the screen
      </Text>

      <View style={[Theme.h5]} />

      <View style={[Theme.w90, Theme.h80]}>
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage1 && !isClick1 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w10]} />
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}></View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}></View>
          <View style={[Theme.w10]} />
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage2 && !isClick2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage3 && !isClick3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage4 && !isClick4 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w10]} />
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ClickAnimalScreen;
