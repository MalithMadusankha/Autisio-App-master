import React, {useState, useEffect, useRef} from 'react';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';

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
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.front;

  const [showCamera, setShowCamera] = useState(true);
  const [videoPath, setVideoPath] = useState(null);
  const [permtion, setPermtion] = useState(false);
  const [imageSource, setImageSource] = useState(null);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowImage1(false);
      setShowImage2(true);
    }, 5000);

    setTimeout(() => {
      setShowImage2(false);
      setShowImage3(true);
      setSpeakFather(true);
    }, 8000);

    setTimeout(() => {
      setShowImage3(false);
      setShowImage4(true);
    }, 11000);

    setTimeout(() => {
      setShowImage4(false);
      setShowImage5(true);
      setSpeakFather(false);
    }, 14000);
    setTimeout(() => {
      setShowImage5(false);
      setShowImage6(true);
      setSpeakMother(true);
    }, 20000);

    setTimeout(() => {
      setShowImage6(false);
      setShowImage7(true);
    }, 24000);

    setTimeout(() => {
      setShowImage7(false);
      setShowImage8(true);
      setSpeakMother(false);
    }, 28000);

    setTimeout(() => {
      setShowImage8(false);
      navigation.navigate('audioReportSummaryScreen');
    }, 31000);
  }, []);

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

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
          Speak Father . . . .
        </Text>
      )}
      {speakMother && (
        <Text style={[Theme.fBlack, Theme.f20, Theme.fBold]}>
          Speak Mother . . . .
        </Text>
      )}

      <View style={[Theme.h5]} />
      <View style={[Theme.w90, Theme.h70]}>
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
      <View style={[Theme.h15, Theme.w30, styles.cameraContainer]}>
        {device && (
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />
        )}
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
});

export default AudioAttentionScreen;
