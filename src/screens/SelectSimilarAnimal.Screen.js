import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import {ReadLanguage, ReadUser} from '../constants/constants';
import CreateNewGame from '../service/GameService';
import Sound from 'react-native-sound';
import ClickSound from '../assets/sound/trra.mp3';
import MENU_LANGUAGES from '../util/LanguageConst';

let cow = false;
let cat = false;
let dog = false;

let imageUrls = [
  require('../assets/img/animals/cartoon-cat.webp'),
  require('../assets/img/animals/cow.jpg'),
  require('../assets/img/animals/dog.png'),
];

const imageUrlsChose = [
  require('../assets/img/animals/cartoon-cat.webp'),
  require('../assets/img/animals/cow.jpg'),
  require('../assets/img/animals/dog.png'),
];

const SelectSimilarAnimalScreen = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [intArr, setIntArr] = useState([]);
  const [startTime, setStartTime] = useState(Date.now());
  const [sound, setSound] = useState(null);
  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  const SaveGame = async (duration, isWing) => {
    const value = await ReadUser();

    let GameData = {
      name: value.name,
      game: 'devided',
      duration: duration,
      isWing: isWing,
      playOn: Date.now(),
    };
    console.log('gg === ', GameData);
    const res = await CreateNewGame(GameData);
  };

  const loadSound = () => {
    const newSound = new Sound(ClickSound, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
      // When loaded successfully
      console.log(
        'Duration in seconds: ' +
          newSound.getDuration() +
          ' number of channels: ' +
          newSound.getNumberOfChannels(),
      );
      setSound(newSound);
    });
  };

  const ClickSoundBtn = () => {
    if (sound) {
      sound.stop(() => {
        sound.play(success => {
          if (!success) {
            console.log('Playback failed due to audio decoding errors');
          }
        });
      });
    }
  };

  useEffect(() => {
    getLang();
    loadSound();
    // console.log('================ Start ====================');
    // console.log('startTime', startTime);
    Shuffle();
    timeSchedule();
  }, []); // eslint-disable-line

  const Shuffle = () => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];
    // console.log('randomImage', randomImage);
    // console.log('imageUrls', imageUrls);
    setSelectedImage(randomImage);
  };

  const timeSchedule = () => {
    const intervalId = setInterval(() => {
      setSelectedImageIndex(
        prevIndex => (prevIndex + 1) % imageUrlsChose.length,
      );
    }, 10000);
    return () => clearInterval(intervalId);
  };

  const checkClickImage = async () => {
    ClickSoundBtn();
    // console.log('selectedImage', selectedImage);
    // console.log('selectedImageIndex', selectedImageIndex);
    // console.log('imageUrlsChose', imageUrlsChose);
    // console.log(selectedImage, imageUrlsChose[1], 'cow', selectedImageIndex, 1);
    // console.log(selectedImage, imageUrlsChose[2], 'dog', selectedImageIndex, 2);
    // console.log(selectedImage, imageUrlsChose[0], 'cat', selectedImageIndex, 0);

    if (selectedImage === imageUrlsChose[2] && selectedImageIndex === 2) {
      imageUrls.splice(2, 1);
      dog = true;
      console.log('dog');
      ToastAndroid.show('Matched!', ToastAndroid.SHORT);
      Shuffle();
    } else if (
      selectedImage === imageUrlsChose[1] &&
      selectedImageIndex === 1
    ) {
      imageUrls.splice(1, 1);
      console.log('cow');
      cow = true;
      ToastAndroid.show('Matched!', ToastAndroid.SHORT);
      Shuffle();
    } else if (
      selectedImage === imageUrlsChose[0] &&
      selectedImageIndex === 0
    ) {
      imageUrls.splice(0, 1);
      console.log('cat');
      cat = true;
      ToastAndroid.show('Matched!', ToastAndroid.SHORT);
      Shuffle();
    } else {
      ToastAndroid.show('Please try again', ToastAndroid.SHORT);
    }
    // console.log(`cow : ${cow} && cat : ${cat} && dog : ${dog}`);
    // console.log(`condition : ${cow && cat && dog}`);
    if (cow && cat && dog) {
      const currentTime = Date.now();
      cow = false;
      cat = false;
      dog = false;

      imageUrls = [
        require('../assets/img/animals/cartoon-cat.webp'),
        require('../assets/img/animals/cow.jpg'),
        require('../assets/img/animals/dog.png'),
      ];

      const diff = currentTime - startTime;
      console.log('diff', diff);

      const duration = Math.floor(diff / 1000);
      await SaveGame(duration, true);

      navigation.navigate('WellDoneScreen', {
        data: duration,
        avg: 62,
        isWin: true,
      });
    }
  };

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg-gif.gif')}>
      <View style={[Theme.w100, Theme.h5]}>
        <TouchableOpacity
          style={[Theme.w15, Theme.h100, Theme.justAlign, Theme.ml2]}>
          <Image
            source={require('../assets/icons/angle-small-left.png')}
            style={[Theme.w60, Theme.h53]}
          />
        </TouchableOpacity>
      </View>
      <View style={[Theme.w90, Theme.h10, Theme.flexDirRow]}>
        <View style={[Theme.w10]} />
        <View style={[Theme.w90, Theme.h100, Theme.justifyCenter]}>
          <Text
            style={[
              Theme.fBlack,
              Theme.f22,
              Theme.fBold,
              Theme.txtAlignCenter,
            ]}>
            {MENU_LANGUAGES[lang][9]}
          </Text>
        </View>
      </View>

      <View style={[Theme.h2]} />

      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        <View style={[Theme.w100, Theme.h100, Theme.justAlign]}>
          {selectedImage && (
            <Image
              source={selectedImage}
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
          )}
        </View>
      </View>

      <View style={[Theme.h2]} />

      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        <TouchableOpacity
          style={[Theme.w100, Theme.h100, Theme.justAlign]}
          onPress={checkClickImage}>
          <Image
            source={imageUrlsChose[selectedImageIndex]}
            style={{width: 200, height: 200}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={[Theme.h15]} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    width: 30,
    height: 30,
  },
});

export default SelectSimilarAnimalScreen;
