import React, {useEffect, useState, useRef} from 'react';
import TM from '../assets/theme/AxTheme';

import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {FileSystem} from 'react-native-file-access';
import RNFS from 'react-native-fs';
import {captureScreen} from 'react-native-view-shot';
import {GetAnalysis} from '../service/GameService';
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Share from 'react-native-share';

const ReportSummaryScreen3 = ({navigation}) => {
  const [dataReport, setDataReport] = useState({});
  const [loading, setLoading] = useState(false); // change to true when intergrate
  const [lang, setLang] = useState(0);
  const [imageUri, setImageUri] = useState('');

  const viewRef = useRef();

  const checkPermition = async () => {
    check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            requestStoragePermission();
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        // …
        console.log('ACCESS ERROR', error);
      });
  };

  const shareScreenshot = async ur => {
    try {
      const shareOptions = {
        title: 'Share via',
        url: `file://${ur}`, // Ensure the file path is correctly formatted
        failOnCancel: false,
      };
      await Share.open(shareOptions);
    } catch (error) {
      console.error('Error sharing screenshot:', error);
    }
  };

  // const requestStoragePermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'Storage Permission',
  //         message: 'App needs access to save screenshots to your device.',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('Storage permission granted');
  //       // Permission granted, proceed with capturing screenshot
  //       takeScreenshot();
  //     } else {
  //       console.log('Storage permission denied');
  //     }
  //   } catch (err) {
  //     console.warn('Error requesting storage permission:', err);
  //   }
  // };

  //  using FileSystem
  // const requestStoragePermission = async () => {
  //   try {
  //     const granted = await FileSystem.requestWritePermission(); // Request permission
  //     if (granted) {
  //       console.log('Storage permission granted');
  //       // Permission granted, proceed with capturing screenshot
  //       takeScreenshot();
  //     } else {
  //       console.log('Storage permission denied');
  //     }
  //   } catch (err) {
  //     console.warn('Error requesting storage permission:', err);
  //   }
  // };

  const requestStoragePermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    if (result !== RESULTS.GRANTED) {
      const requestResult = await request(
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      );
      if (requestResult === RESULTS.GRANTED) {
        console.log('Storage permission granted');
        // Now you can call your takeScreenshot function
      } else {
        console.log('Storage permission denied');
        // Handle permission denial (e.g., show a message to the user)
      }
    } else {
      console.log('Storage permission already granted');
      // You can call your takeScreenshot function here as well
    }
  };

  const saveScreenshot = async uri => {
    try {
      const directory = await FileSystem.getDownloadsDirectory(); // Get Downloads directory path
      const filename = `screenshot-${Date.now()}.jpg`;
      const path = `<span class="math-inline">\{directory\}/</span>{filename}`;

      const result = await FileSystem.write(path, uri, 'base64'); // Write screenshot as base64

      if (result.status === 200) {
        // Check for successful write operation
        console.log('Screenshot saved successfully:', path);
        // Show a success message to the user (optional)
      } else {
        console.error('Error saving screenshot:', result);
      }
    } catch (error) {
      console.error('Error saving screenshot:', error);
      // Handle errors appropriately (e.g., show an error message to the user)
    }
  };

  const takeScreenshot = async () => {
    try {
      const uri = await captureScreen({format: 'jpg', quality: 1});
      setImageUri(uri);
      console.log('image uri : ', uri);
      shareScreenshot(uri);
    } catch (error) {
      console.error('Error capturing screenshot:', error);
    }
  };

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
    checkPermition();
    requestStoragePermission();
    console.log(' == ReportSummaryScreen3 ==');
    FetchAnalysis();
  }, []); // eslint-disable-line

  return (
    <ImageBackground
      imageStyle={[TM.w100, TM.h100, TM.justAlign]}
      style={[TM.w100, TM.h100, TM.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      <View style={[TM.h100]}>
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <View ref={viewRef} style={[TM.w100, TM.h100, TM.justAlign, TM.mt2]}>
            <View style={[TM.w90, TM.h5, TM.flexDirRow]}>
              <View style={[TM.w10]} />
              <View style={[TM.w90, TM.justifyCenter, TM.alignItemCenter]}>
                <Text style={[TM.fBlack, TM.f25, TM.fBold]}>
                  {MENU_LANGUAGES[lang][5]}
                </Text>
              </View>
            </View>

            <View style={[TM.w90, TM.h12, TM.justAlign]}>
              <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][0]}
              </Text>
              <Text
                style={[
                  dataReport?.focused < 7 ? TM.fGreen : TM.fRed,
                  TM.f18,
                  TM.txtAlignCenter,
                  TM.bgBlackShade,
                  TM.p1,
                  TM.px3,
                  TM.borderRadius15,
                ]}>
                {dataReport?.focused < 7
                  ? MENU_LANGUAGES[lang][13]
                  : MENU_LANGUAGES[lang][12]}
              </Text>
            </View>
            <View style={[TM.w90, TM.h12, TM.justAlign]}>
              <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][1]}
              </Text>
              <Text
                style={[
                  dataReport?.selectiv < 7 ? TM.fGreen : TM.fRed,
                  TM.f18,
                  TM.txtAlignCenter,
                  TM.bgBlackShade,
                  TM.p1,
                  TM.px3,
                  TM.borderRadius15,
                ]}>
                {dataReport?.selectiv < 7
                  ? MENU_LANGUAGES[lang][13]
                  : MENU_LANGUAGES[lang][12]}
              </Text>
            </View>
            <View style={[TM.w90, TM.h12, TM.justAlign]}>
              <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][2]}
              </Text>
              <Text
                style={[
                  dataReport?.divided < 7 ? TM.fGreen : TM.fRed,
                  TM.f18,
                  TM.txtAlignCenter,
                  TM.bgBlackShade,
                  TM.p1,
                  TM.px3,
                  TM.borderRadius15,
                ]}>
                {dataReport?.divided < 62 && dataReport?.divided > 30
                  ? MENU_LANGUAGES[lang][13]
                  : MENU_LANGUAGES[lang][12]}
              </Text>
            </View>
            <View style={[TM.w90, TM.h12, TM.justAlign]}>
              <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][3]}
              </Text>
              <Text
                style={[
                  dataReport?.sustained < 7 ? TM.fGreen : TM.fRed,
                  TM.f18,
                  TM.txtAlignCenter,
                  TM.bgBlackShade,
                  TM.p1,
                  TM.px3,
                  TM.borderRadius15,
                ]}>
                {dataReport?.sustained < 7
                  ? MENU_LANGUAGES[lang][13]
                  : MENU_LANGUAGES[lang][12]}
              </Text>
            </View>

            <View style={[TM.w90, TM.h12, TM.justAlign]}>
              <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                {MENU_LANGUAGES[lang][4]}
              </Text>
              <Text
                style={[
                  dataReport?.father === 1 || dataReport?.mother === 1
                    ? TM.fGreen
                    : TM.fRed,
                  TM.f18,
                  TM.txtAlignCenter,
                  TM.bgBlackShade,
                  TM.p1,
                  TM.px3,
                  TM.borderRadius15,
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

            <View style={[TM.w90, TM.h12, TM.justAlign, TM.mb5]}>
              {dataReport?.status === 1 ? (
                <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                  {MENU_LANGUAGES[lang][14]}
                </Text>
              ) : (
                <Text style={[TM.fBlack, TM.f20, TM.txtAlignCenter]}>
                  {MENU_LANGUAGES[lang][15]}
                </Text>
              )}
            </View>

            <View style={[TM.w90, TM.h10, TM.justAlign]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AttentionScreen')}
                style={[TM.bgBlack, TM.borderRadius20, TM.justAlign, TM.p3]}>
                <Text style={[TM.fWhite, TM.f20, TM.txtAlignCenter, TM.fBold]}>
                  {MENU_LANGUAGES[lang][34]}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={[TM.w90, TM.h10, TM.justAlign]}>
              <TouchableOpacity
                onPress={takeScreenshot}
                style={[TM.bgMain0, TM.borderRadius20, TM.justAlign, TM.p3]}>
                <Text style={[TM.fWhite, TM.f20, TM.txtAlignCenter, TM.fBold]}>
                  {MENU_LANGUAGES[lang][35]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200, // Adjust as needed
    resizeMode: 'contain', // Adjust resize mode if needed
  },
});

export default ReportSummaryScreen3;
