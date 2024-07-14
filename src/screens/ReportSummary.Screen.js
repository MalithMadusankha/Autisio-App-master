import React, {useEffect, useState} from 'react';
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
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';

const ReportSummaryScreen = ({route}) => {
  const {data, avg, isWin} = route.params;
  const navigation = useNavigation();

  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  useEffect(() => {
    getLang();
  }, []);

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
              {MENU_LANGUAGES[lang][5]}
            </Text>
          </View>
        </View>

        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            {MENU_LANGUAGES[lang][20]} - {avg} s
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            {MENU_LANGUAGES[lang][21]} - {data} s
          </Text>
        </View>

        {data < avg ? (
          <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][22]}
            </Text>
          </View>
        ) : data < avg + 11 ? (
          <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][23]}
            </Text>
          </View>
        ) : (
          <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][24]}
            </Text>
          </View>
        )}

        <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            {MENU_LANGUAGES[lang][25]}
            {isWin ? MENU_LANGUAGES[lang][26] : MENU_LANGUAGES[lang][27]}.
          </Text>
        </View>
      </View>

      <View style={[Theme.h10]} />

      <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
        <TouchableOpacity
          style={[
            lang === 1 ? Theme.w75 : Theme.w60,
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
              lang === 1 ? Theme.f20 : Theme.f22,
              Theme.txtAlignCenter,
              Theme.fBold,
            ]}>
            {MENU_LANGUAGES[lang][19]}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ReportSummaryScreen;
