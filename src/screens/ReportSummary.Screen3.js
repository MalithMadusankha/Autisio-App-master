import React, {useEffect, useState} from 'react';
import Theme from '../assets/theme/AxTheme';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {GetAnalysis} from '../service/GameService';

const ReportSummaryScreen3 = ({navigation}) => {
  const [dataReport, setDataReport] = useState({});
  const [loading, setLoading] = useState(true);

  const FetchAnalysis = async () => {
    const res = await GetAnalysis();
    console.log('res Any ', res);
    setDataReport(res.result);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    console.log(' == ReportSummaryScreen3 ==');
    FetchAnalysis();
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
                Report Summary
              </Text>
            </View>
          </View>

          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Focused Attention Games
            </Text>
            <Text
              style={[
                dataReport?.focused < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f20,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.focused < 7 ? 'Good' : 'Need To Improve'}
            </Text>
          </View>
          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Selective Attention Games
            </Text>
            <Text
              style={[
                dataReport?.selectiv < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f20,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.selectiv < 7 ? 'Good' : 'Need To Improve'}
            </Text>
          </View>
          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Divided Attention Games
            </Text>
            <Text
              style={[
                dataReport?.divided < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f20,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.divided < 62 && dataReport?.divided > 30
                ? 'Good'
                : 'Need To Improve'}
            </Text>
          </View>
          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Sustained Attention Games
            </Text>
            <Text
              style={[
                dataReport?.sustained < 7 ? Theme.fGreen : Theme.fRed,
                Theme.f20,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.sustained < 7 ? 'Good' : 'Need To Improve'}
            </Text>
          </View>

          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Auditory Attention
            </Text>
            <Text
              style={[
                dataReport?.father === 1 || dataReport?.mother === 1
                  ? Theme.fGreen
                  : Theme.fRed,
                Theme.f20,
                Theme.txtAlignCenter,
                Theme.bgBlackShade,
                Theme.p1,
                Theme.px3,
                Theme.borderRadius15,
              ]}>
              {dataReport?.father === 1 && dataReport?.mother === 1
                ? 'Very Good'
                : null}
              {dataReport?.father === 1 && !dataReport?.mother ? 'Good' : null}
              {dataReport?.mother === 1 && !dataReport?.father ? 'Good' : null}
              {!(dataReport?.father === 1 && dataReport?.mother === 1)
                ? 'Need To Improve'
                : null}
            </Text>
          </View>

          <View style={[Theme.w90, Theme.h15, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.txtAlignCenter]}>
              Finaly, Child needs more attention. Helth is good.
            </Text>
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
