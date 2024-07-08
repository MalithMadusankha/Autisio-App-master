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
import {useNavigation, useRoute} from '@react-navigation/native';
import MENU_LANGUAGES from '../util/LanguageConst';
import {ReadLanguage} from '../constants/constants';

const WellDoneScreen = () => {
  const route = useRoute();
  const data = route.params?.data;
  const isWin = route.params?.isWin;
  const avg = route.params?.avg;

  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  useEffect(() => {
    getLang();
    console.log(data);
    console.log(JSON.stringify(isWin));
  }, []); // eslint-disable-line

  const useNavigate = useNavigation();

  return (
    <View style={[Theme.container, Theme.bgMain1, Theme.w100, Theme.h100]}>
      <ImageBackground
        imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
        style={[Theme.w100, Theme.h100, Theme.justAlign]}
        source={require('../assets/img/background/bg_3.jpg')}>
        <View style={[Theme.w100, Theme.h70, Theme.justAlign]}>
          <View style={[Theme.w100, Theme.h10, Theme.flexDirRow]}>
            <TouchableOpacity style={[Theme.w15, Theme.h100, Theme.justAlign]}>
              <Image
                source={require('../assets/icons/angle-small-left.png')}
                style={[Theme.w60, Theme.h53]}
              />
            </TouchableOpacity>
          </View>
          <View style={[Theme.w85, Theme.h40, Theme.justifyCenter]}>
            <Text
              style={[
                Theme.fRed,
                Theme.f70,
                Theme.fBold,
                Theme.txtAlignCenter,
                Theme.txtShadowOffset1,
                Theme.txtShadowColorBlack,
              ]}>
              WELL DONE
            </Text>
          </View>
          <View
            style={[
              Theme.w100,
              Theme.h40,
              Theme.flexDirRow,
              ,
              Theme.justAlign,
            ]}>
            <Image
              source={require('../assets/img/others/well_done_bg.png')}
              style={[Theme.w100, Theme.h100]}
            />
          </View>
        </View>

        <View style={[Theme.w90, Theme.h30, Theme.justAlign]}>
          <TouchableOpacity
            style={[
              lang === 1 ? Theme.w75 : Theme.w60,
              Theme.h38,
              Theme.ml2,
              Theme.bgBlack,
              Theme.borderRadius20,
              Theme.justAlign,
            ]}
            onPress={() =>
              useNavigate.navigate('ReportSummaryScreen', {data, avg, isWin})
            }>
            <Text
              style={[
                Theme.fWhite,
                lang === 1 ? Theme.f22 : Theme.f25,
                Theme.txtAlignCenter,
                Theme.fBold,
              ]}>
              {MENU_LANGUAGES[lang][29]}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WellDoneScreen;
