import React from 'react';
import Theme from '../assets/theme/AxTheme';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AudioReportSummaryScreen = () => {
  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      <View style={[Theme.w100, Theme.h70, Theme.justAlign]}>
        <View style={[Theme.w100, Theme.h5, Theme.flexDirRow]}>
          <TouchableOpacity
            style={[Theme.w15, Theme.h100, Theme.justAlign, Theme.ml2]}>
            <Image
              source={require('../assets/icons/angle-small-left.png')}
              style={[Theme.w60, Theme.h53]}
            />
          </TouchableOpacity>
        </View>

        <View style={[Theme.w90, Theme.h20, Theme.flexDirRow]}>
          <View style={[Theme.w10]} />
          <View style={[Theme.w90, Theme.h100, Theme.justifyCenter]}>
            <Text style={[Theme.fBlack, Theme.f25, Theme.fBold]}>
              Report Summary
            </Text>
          </View>
        </View>
        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Child respond to the father's voice - Well Done
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Child respond to the mother's voice - Well Done
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Finaly child has good attention to mother and father's voice
          </Text>
        </View>
        <View style={[Theme.h20]} />
      </View>

      <View style={[Theme.h10]} />

      <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
        <TouchableOpacity
          style={[
            Theme.w60,
            Theme.h38,
            Theme.ml2,
            Theme.bgBlack,
            Theme.borderRadius20,
            Theme.justAlign,
          ]}>
          <Text
            style={[
              Theme.fWhite,
              Theme.f22,
              Theme.txtAlignCenter,
              Theme.fBold,
            ]}>
            Go back to Menu
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AudioReportSummaryScreen;
