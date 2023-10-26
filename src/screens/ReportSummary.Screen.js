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
import {useNavigation} from '@react-navigation/native';

const ReportSummaryScreen = ({route}) => {
  const {data, avg, isWin} = route.params;
  const navigation = useNavigation();
  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      <View style={[Theme.w100, Theme.h70, Theme.justAlign]}>
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
            Time taken by average normal child for a single response - {avg} s
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Time taken by your child for a single response - {data} s
          </Text>
        </View>

        {data < avg ? (
          <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Your child is very good
            </Text>
          </View>
        ) : data < avg + 11 ? (
          <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Your child is good, Try to improve
            </Text>
          </View>
        ) : (
          <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Your child need more attention
            </Text>
          </View>
        )}

        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            You have
            {isWin ? ' WIN game' : ' Lost game'}.
          </Text>
        </View>
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
          ]}
          onPress={() => navigation.navigate('AttentionScreen')}>
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

export default ReportSummaryScreen;
