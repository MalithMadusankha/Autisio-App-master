import React, {useEffect, useState} from 'react';
import Theme from '../assets/theme/AxTheme';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {GetAnalysis} from '../service/GameService';
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';

const ReportSummaryScreen3 = ({navigation}) => {
  const [dataReport, setDataReport] = useState({});
  const [loading, setLoading] = useState(false); // change to true when intergrate
  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  const FetchAnalysis = async () => {
    const res = await GetAnalysis();
    console.log('res Any ', res);
    setDataReport(res.result);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getLang();
    console.log(' == ReportSummaryScreen3 ==');
    // FetchAnalysis();
  }, []);

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={[Theme.w100, Theme.h70, Theme.justAlign, Theme.mt10]}>
          <View style={[Theme.w90, Theme.h10, Theme.flexDirRow]}>
            <View style={[Theme.w10]} />
            <View
              style={[
                Theme.w90,
                Theme.h100,
                Theme.justifyCenter,
                Theme.alignItemCenter,
              ]}>
              <Text style={[Theme.fBlack, Theme.f25, Theme.fBold]}>
                {MENU_LANGUAGES[lang][5]}
              </Text>
            </View>
          </View>

          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][0]}
            </Text>
            <Text
              style={[
                dataReport?.focused < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f18,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.focused < 7
                ? MENU_LANGUAGES[lang][13]
                : MENU_LANGUAGES[lang][12]}
            </Text>
          </View>
          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][1]}
            </Text>
            <Text
              style={[
                dataReport?.selectiv < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f18,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.selectiv < 7
                ? MENU_LANGUAGES[lang][13]
                : MENU_LANGUAGES[lang][12]}
            </Text>
          </View>
          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][2]}
            </Text>
            <Text
              style={[
                dataReport?.divided < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f18,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.divided < 62 && dataReport?.divided > 30
                ? MENU_LANGUAGES[lang][13]
                : MENU_LANGUAGES[lang][12]}
            </Text>
          </View>
          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][3]}
            </Text>
            <Text
              style={[
                dataReport?.sustained < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f18,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.sustained < 7
                ? MENU_LANGUAGES[lang][13]
                : MENU_LANGUAGES[lang][12]}
            </Text>
          </View>

          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              {MENU_LANGUAGES[lang][4]}
            </Text>
            <Text
              style={[
                dataReport?.father === 1 || dataReport?.mother === 1
                  ? Theme.fGreen
                  : Theme.fRed,
                Theme.f18,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.father === 1 && dataReport?.mother === 1
                ? MENU_LANGUAGES[lang][14]
                : null}
              {dataReport?.father === 1 && !dataReport?.mother
                ? MENU_LANGUAGES[lang][13]
                : null}
              {dataReport?.mother === 1 && !dataReport?.father
                ? MENU_LANGUAGES[lang][13]
                : null}
              {!(dataReport?.father === 1 && dataReport?.mother === 1)
                ? MENU_LANGUAGES[lang][12]
                : null}
            </Text>
          </View>

          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            {dataReport?.status === 1 ? (
              <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][14]}
              </Text>
            ) : (
              <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][15]}
              </Text>
            )}
          </View>
        </View>
      )}

      <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('AttentionScreen')}
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
