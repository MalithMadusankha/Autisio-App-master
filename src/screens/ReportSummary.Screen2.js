import React, {useEffect, useState} from 'react';
import Theme from '../assets/theme/AxTheme';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';

const ReportSummaryScreen = () => {
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
              {MENU_LANGUAGES[lang][5]}
            </Text>
          </View>
        </View>
        <View style={[Theme.h20]} />
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Duration of the object on screen -xx seconds
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Duration of tracking object on screen -xx seconds
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Duration of not tracking the object on screen -xx seconds
          </Text>
        </View>
        <View style={[Theme.w90, Theme.h10, Theme.justAlign]}>
          <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
            Duration of tracking by an average child -xx seconds
          </Text>
        </View>
        <View style={[Theme.h20]} />
      </View>

      <View style={[Theme.w90, Theme.h20, Theme.justAlign]}>
        <TouchableOpacity
          style={[
            lang === 1 ? Theme.w75 : Theme.w60,
            Theme.h38,
            Theme.ml2,
            Theme.bgBlack,
            Theme.borderRadius20,
            Theme.justAlign,
          ]}>
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
