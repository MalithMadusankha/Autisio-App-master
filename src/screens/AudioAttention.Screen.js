import React, {useState, useEffect, useRef} from 'react';

import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import VideoRecorder from '../components/video/VideoRecorder';
import {ReadLanguage} from '../constants/constants';
import {AUDIO_GAME_LANG} from '../util/LanguageConst';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

const AudioAttentionScreen = ({navigation}) => {
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);
  const [showImage6, setShowImage6] = useState(false);
  const [showImage7, setShowImage7] = useState(false);
  const [showImage8, setShowImage8] = useState(false);
  const [speakFather, setSpeakFather] = useState(false);
  const [speakMother, setSpeakMother] = useState(false);

  const [resArr, setResArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  useEffect(() => {
    getLang();
    // start father
    setTimeout(() => {
      setShowImage1(false);
      setShowImage2(true);
      setSpeakFather(true);
    }, 6000);
    // stop father
    setTimeout(() => {
      setShowImage2(false);
      setShowImage3(true);
      setSpeakFather(false);
    }, 14000);

    setTimeout(() => {
      setShowImage3(false);
      setShowImage4(true);
    }, 20000);

    // start mother
    setTimeout(() => {
      setShowImage4(false);
      setShowImage5(true);
      setSpeakMother(true);
    }, 24000);

    // stop mother
    setTimeout(() => {
      setShowImage5(false);
      setShowImage6(true);
      setSpeakMother(false);
    }, 32000);

    setTimeout(() => {
      setShowImage6(false);
      setShowImage7(true);
    }, 32000);

    setTimeout(() => {
      setShowImage7(false);
      setShowImage8(true);
    }, 37000);

    setTimeout(() => {
      setShowImage8(false);
      setIsLoading(true);
    }, 44000);
    setTimeout(() => {
      if (!isLoading) {
        navigation.navigate('audioReportSummaryScreen', {resArr});
      }
    }, 50000);
  }, []); // eslint-disable-line

  const select1 = () => {
    if (showImage1 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };

  const select2 = () => {
    if (showImage2 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };

  const select3 = () => {
    if (showImage3 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };
  const select4 = () => {
    if (showImage4 === true) {
      //alert("DONE")
    } else {
      alert('Try Again!');
    }
  };
  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_1_1.jpg')}>
      {speakFather && (
        <Text
          style={[Theme.fBlack, Theme.f20, Theme.fBold, Theme.txtAlignCenter]}>
          {AUDIO_GAME_LANG[lang][7]} . . . .
        </Text>
      )}
      {speakMother && (
        <Text style={[Theme.fBlack, Theme.f20, Theme.fBold]}>
          {AUDIO_GAME_LANG[lang][8]} . . . .
        </Text>
      )}
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}

      <View style={[Theme.w75, Theme.h70]}>
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage1 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animal_gifs/bird_flying.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage4 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animal_gifs/bird_flying.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animal_gifs/bird_flying.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage5 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animal_gifs/bird_flying.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animal_gifs/bird_flying.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage6 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                <Image
                  source={require('../assets/img/animal_gifs/bird_flying.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage1 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animal_gifs/monkey_jump.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage4 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animal_gifs/monkey_jump.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h110, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animal_gifs/monkey_jump.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage5 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animal_gifs/monkey_jump.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h110, Theme.justAlign]}>
            {showImage3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h110, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animal_gifs/monkey_jump.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage6 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                <Image
                  source={require('../assets/img/animal_gifs/monkey_jump.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animal_gifs/zebra_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage5 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animal_gifs/zebra_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animal_gifs/zebra_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage5 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animal_gifs/zebra_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage1 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animal_gifs/zebra_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage7 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                <Image
                  source={require('../assets/img/animal_gifs/zebra_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animal_gifs/dog_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage5 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animal_gifs/dog_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animal_gifs/dog_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}

            {showImage6 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animal_gifs/dog_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage4 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animal_gifs/dog_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
            {showImage8 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                <Image
                  source={require('../assets/img/animal_gifs/dog_run.gif')}
                  style={[Theme.w100, Theme.h100]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      <View style={[Theme.h20, Theme.w30, styles.cameraContainer, Theme.mr5]}>
        <VideoRecorder
          resArr={resArr}
          setResArr={setResArr}
          setIsLoading={setIsLoading}
          navigation={navigation}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  cameraContainer: {position: 'absolute', bottom: 100, right: 10},
  body: {
    width: 100,
    height: 200,
  },
});

export default AudioAttentionScreen;
