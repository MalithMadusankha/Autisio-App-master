import React from 'react';
import Theme from '../assets/theme/AxTheme';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ReportSummaryScreen3 = () => {
  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      <View style={[Theme.w100, Theme.h70, Theme.justAlign, Theme.mt10]}>
        <View style={[Theme.w100, Theme.h5, Theme.flexDirRow]}>
          <TouchableOpacity
            style={[Theme.w15, Theme.h100, Theme.justAlign, Theme.ml2]}>
            <Image
              source={require('../assets/icons/angle-small-left.png')}
              style={[Theme.w60, Theme.h53]}
            />
          </TouchableOpacity>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.flexDirRow]}>
          <View style={[Theme.w10]} />
          <View style={[Theme.w90, Theme.h100, Theme.justifyCenter]}>
            <Text style={[Theme.fBlack, Theme.f25, Theme.fBold]}>
              Report Summary
            </Text>
          </View>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Focused Attention Games ==> Good
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Selective Attention Games ==> Very Good
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Divided Attention Games ==> Bad
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Sustained Attention Games ==> Very Good
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Shifting Attention Games ==> Very Bad
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Gaze Analysing Games ==> Bad
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Auditory Attention ==> Very Good
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Audio Attention Games ==> Very Good
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Finaly, Child needs more attention. Helth is good.
          </Text>
        </View>
        <View style={[Theme.h20]} />
      </View>

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

export default ReportSummaryScreen3;
