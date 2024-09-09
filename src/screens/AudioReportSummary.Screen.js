import React, {useEffect, useState} from 'react';
import TM from '../assets/theme/AxTheme';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES, {AUDIO_GAME_LANG} from '../util/LanguageConst';

const AudioReportSummaryScreen = ({navigation, route}) => {
  const {resArr} = route.params;

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
      imageStyle={[TM.w100, TM.h100, TM.justAlign]}
      style={[TM.w100, TM.h100, TM.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      <View style={[TM.w100, TM.h80, TM.justAlign]}>
        <View style={[TM.w100, TM.h5, TM.flexDirRow]}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[TM.w15, TM.h100, TM.justAlign, TM.ml2, TM.mt5]}>
            <Image
              source={require('../assets/icons/angle-small-left.png')}
              style={[TM.w60, TM.h53]}
            />
          </TouchableOpacity>
        </View>

        <View style={[TM.w90, TM.h20, TM.flexDirRow]}>
          <View style={[TM.w10]} />
          <View style={[TM.w90, TM.h100, TM.justifyCenter]}>
            <Text style={[TM.fBlack, TM.f25, TM.fBold]}>
              {MENU_LANGUAGES[lang][5]}
            </Text>
          </View>
        </View>
        {/* left */}
        <View style={[TM.w90, TM.h20, TM.justAlign]}>
          <Text style={[TM.fBlack, TM.f22, TM.txtAlignCenter]}>
            {AUDIO_GAME_LANG[lang][9]} -{' '}
            {resArr[0] > 0
              ? MENU_LANGUAGES[lang][17]
              : MENU_LANGUAGES[lang][18]}
          </Text>
        </View>
        {/* right */}
        <View style={[TM.w90, TM.h20, TM.justAlign]}>
          <Text style={[TM.fBlack, TM.f22, TM.txtAlignCenter]}>
            {AUDIO_GAME_LANG[lang][10]} -{' '}
            {resArr[1] < 0
              ? MENU_LANGUAGES[lang][17]
              : MENU_LANGUAGES[lang][18]}
          </Text>
        </View>

        <View style={[TM.w90, TM.h20, TM.justAlign]}>
          <Text style={[TM.fBlack, TM.f22, TM.txtAlignCenter]}>
            {resArr[0] > 0 && resArr[1] < 0 ? AUDIO_GAME_LANG[lang][11] : null}
            {resArr[0] <= 0 && resArr[1] >= 0
              ? AUDIO_GAME_LANG[lang][12]
              : null}
          </Text>
        </View>
        <View style={[TM.h20]} />
      </View>

      <View style={[TM.w90, TM.h20, TM.justAlign]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AttentionScreen')}
          style={[
            lang === 1 ? TM.w75 : TM.w60,
            TM.h38,
            TM.ml2,
            TM.bgBlack,
            TM.borderRadius20,
            TM.justAlign,
          ]}>
          <Text
            style={[
              TM.fWhite,
              lang === 1 ? TM.f20 : TM.f22,
              TM.txtAlignCenter,
              TM.fBold,
            ]}>
            {MENU_LANGUAGES[lang][19]}
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AudioReportSummaryScreen;
