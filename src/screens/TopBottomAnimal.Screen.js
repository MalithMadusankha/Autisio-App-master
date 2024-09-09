import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Sound from 'react-native-sound';
import DogSound from '../assets/sound/dog.mp3';
import MonkeySound from '../assets/sound/monkey.mp3';
import HorseSound from '../assets/sound/horse.wav';
import BirdsSound from '../assets/sound/bird.wav';
import Theme from '../assets/theme/AxTheme';
import {useNavigation} from '@react-navigation/native';
import {ReadLanguage, ReadUser} from '../constants/constants';
import CreateNewGame from '../service/GameService';
import MENU_LANGUAGES from '../util/LanguageConst';

const TopBottomAnimalScreen = ({route}) => {
  const {animal} = route.params;
  const [currentImage, setCurrentImage] = useState(1);
  const [startTime, setStartTime] = useState(Date.now());
  const [sound, setSound] = useState(null);
  const [lang, setLang] = useState(0);

  const navigation = useNavigation();

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  const SaveGame = async (duration, isWing) => {
    const value = await ReadUser();

    let GameData = {
      name: value.name,
      game: 'selective',
      duration: duration,
      isWing: isWing,
      playOn: Date.now(),
    };
    console.log('gg === ', GameData);
    const res = await CreateNewGame(GameData);
  };

  const loadSound = () => {
    let clickSound = '';

    switch (animal) {
      case 'b':
        clickSound = BirdsSound;
        break;
      case 'd':
        clickSound = DogSound;
        break;
      case 'm':
        clickSound = MonkeySound;
        break;
      case 'z':
        clickSound = HorseSound;
        break;
      default:
        break;
    }

    const newSound = new Sound(clickSound, error => {
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
    const imageSources = [
      require('../assets/img/animal_gifs/bird_flying.gif'),
      require('../assets/img/animals/bird.png'),
    ];

    const switchImage = () => {
      setCurrentImage(prevImage => (prevImage === 0 ? 1 : 0));
    };
    switchImage();

    const intervalId = setInterval(switchImage, 5000);

    return () => clearInterval(intervalId);
  }, []); // eslint-disable-line

  const clickAnimal = async () => {
    ClickSoundBtn();
    const currentTime = Date.now();
    const diff = currentTime - startTime;
    const duration = Math.floor(diff / 1000);
    await SaveGame(duration, true);
    setTimeout(() => {
      if (currentImage === 1) {
        navigation.navigate('WellDoneScreen', {
          data: duration,
          avg: 12,
          isWin: true,
        });
      } else {
        navigation.navigate('WellDoneScreen', {
          data: duration,
          avg: 12,
          isWin: false,
        });
      }
    }, 1000);
  };

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_skye.jpg')}>
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
            {MENU_LANGUAGES[lang][10]}
          </Text>
        </View>
      </View>
      <View style={[Theme.h2]} />
      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        {animal === 'b' ? (
          <Image
            source={require('../assets/img/animal_gifs/bird_flying.gif')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 0 ? 1 : 0,
            }}
          />
        ) : null}
        {animal === 'd' ? (
          <Image
            source={require('../assets/img/animal_gifs/dog_run.gif')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 0 ? 1 : 0,
            }}
          />
        ) : null}
        {animal === 'm' ? (
          <Image
            source={require('../assets/img/animal_gifs/monkey_jump.gif')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 0 ? 1 : 0,
            }}
          />
        ) : null}
        {animal === 'z' ? (
          <Image
            source={require('../assets/img/animal_gifs/zebra_run.gif')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 0 ? 1 : 0,
            }}
          />
        ) : null}
      </View>

      <View style={[Theme.h2]} />
      <View style={[Theme.w80, Theme.h30, Theme.justAlign]}>
        {animal === 'b' ? (
          <Image
            source={require('../assets/img/animals/bird.png')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 1 ? 1 : 0,
            }}
          />
        ) : null}
        {animal === 'd' ? (
          <Image
            source={require('../assets/img/animals/dog.png')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 1 ? 1 : 0,
            }}
          />
        ) : null}
        {animal === 'm' ? (
          <Image
            source={require('../assets/img/animals/monkey.png')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 1 ? 1 : 0,
            }}
          />
        ) : null}
        {animal === 'z' ? (
          <Image
            source={require('../assets/img/animals/zebra_2.png')}
            style={{
              width: 200,
              height: 200,
              opacity: currentImage === 1 ? 1 : 0,
            }}
          />
        ) : null}
      </View>
      <View style={[Theme.h2]} />
      <View style={[Theme.w80, Theme.h15, Theme.justAlign]}>
        <TouchableOpacity onPress={clickAnimal}>
          <Image
            source={require('../assets/img/others/pngegg.png')}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default TopBottomAnimalScreen;
