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
} from 'react-native';
import Theme from '../assets/theme/AxTheme';

const ClickAnimalScreen = () => {
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImage1(false);
      setShowImage2(true);
    }, 5000);

    setTimeout(() => {
      setShowImage2(false);
      setShowImage3(true);
    }, 10000);

    setTimeout(() => {
      setShowImage3(false);
      setShowImage4(true);
    }, 15000);

    setTimeout(() => {
      setShowImage4(false);
      //setShowImage4(true);
    }, 20000);
  }, []);

  const select1 = () => {
    if (showImage1 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };

  const select2 = () => {
    if (showImage2 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };

  const select3 = () => {
    if (showImage3 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };
  const select4 = () => {
    if (showImage4 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
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
            {showImage1 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animals/zebra_2.png')}
                  style={[Theme.w100, Theme.h100]}
                />
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
            {showImage2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animals/zebra_2.png')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animals/zebra_2.png')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage4 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animals/zebra_2.png')}
                  style={[Theme.w100, Theme.h100]}
                />
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
