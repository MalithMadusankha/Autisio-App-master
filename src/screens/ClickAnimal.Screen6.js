import React, {useState, useEffect} from 'react';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import Sound from 'react-native-sound';
import DogSound from '../assets/sound/dog.mp3';
import MonkeySound from '../assets/sound/monkey.mp3';
import HorseSound from '../assets/sound/horse.wav';
import BirdsSound from '../assets/sound/bird.wav';
import Theme from '../assets/theme/AxTheme';
import {useNavigation} from '@react-navigation/native';
import AnimalImageComponet from '../components/AnimalImageComponet';
import CreateNewGame from '../service/GameService';
import {ReadLanguage, ReadUser} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';

const ClickAnimalScreen6 = ({route}) => {
  const {animal} = route.params;
  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [isClick1, setIsClick1] = useState(false);
  const [isClick2, setIsClick2] = useState(false);
  const [isClick3, setIsClick3] = useState(false);
  const [isClick4, setIsClick4] = useState(false);
  const [isControl, setisControl] = useState(true);
  const [startTime, setStartTime] = useState(Date.now());
  const [isNav, setIsNav] = useState(false);
  const [sound, setSound] = useState(null);
  const [lang, setLang] = useState(0);

  const useNavigate = useNavigation();

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  const nextButton = () => {
    const currentTime = Date.now();
    const diff = currentTime - startTime;
    console.log('isNav ', isNav);
    const duration = formatTime(diff);
    SaveGame(duration, false);
    useNavigate.navigate('WellDoneScreen', {
      data: duration,
      avg: 5,
      isWin: false,
    });
  };

  const SaveGame = async (duration, isWing) => {
    const value = await ReadUser();

    let GameData = {
      name: value.name,
      game: 'focused',
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
    console.log('ClickAnimalScreen6');
    setTimeout(() => {
      setShowImage1(false);
      setShowImage2(true);
    }, 4000);

    setTimeout(() => {
      setShowImage2(false);
      setShowImage3(true);
    }, 7000);

    setTimeout(() => {
      setShowImage3(false);
      setShowImage4(true);
    }, 10000);

    const timeId = setTimeout(() => {
      setShowImage4(false);
      setisControl(true);
      setIsNav(true);
    }, 13000);
    return () => {
      clearTimeout(timeId);
    };
  }, []); // eslint-disable-line

  const formatTime = time => {
    const seconds = Math.floor(time / 1000) % 60;
    return seconds;
  };
  const select1 = () => {
    ClickSoundBtn();
    setTimeout(() => {
      setIsClick1(true);
      setShowImage1(false);
      setShowImage2(true);
    }, 500);
  };
  const select2 = () => {
    ClickSoundBtn();
    setTimeout(() => {
      setIsClick2(true);
      setShowImage2(false);
      setShowImage3(true);
    }, 500);
  };
  const select3 = () => {
    ClickSoundBtn();
    setTimeout(() => {
      setIsClick3(true);
      setShowImage3(false);
      setShowImage4(true);
    }, 500);
  };

  const select4 = async () => {
    ClickSoundBtn();
    setIsClick4(true);
    const currentTime = Date.now();
    const diff = currentTime - startTime;

    const duration = formatTime(diff);

    setTimeout(async () => {
      if (isClick1 && isClick2 && isClick3) {
        await SaveGame(duration, true);
        useNavigate.navigate('WellDoneScreen', {
          data: duration,
          avg: 6,
          isWin: true,
        });
      } else {
        await SaveGame(duration, false);
        useNavigate.navigate('WellDoneScreen', {
          data: duration,
          avg: 6,
          isWin: false,
        });
      }
    }, 500);
  };

  return (
    <ImageBackground
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_1_1.jpg')}>
      <Text
        style={[Theme.fBlack, Theme.f20, Theme.fBold, Theme.txtAlignCenter]}>
        {MENU_LANGUAGES[lang][7]}
      </Text>

      <View style={[Theme.h5]} />

      <View style={[Theme.w90, Theme.h80]}>
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage1 && !isClick1 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select1}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w10]} />
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}></View>
        </View>
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}></View>
          <View style={[Theme.w10]} />
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage2 && !isClick2 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select2}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
        </View>
        {isNav ? (
          <TouchableOpacity
            style={[
              Theme.w100,
              Theme.h15,
              Theme.ml2,
              Theme.bgBlack,
              Theme.borderRadius20,
              Theme.justAlign,
            ]}
            onPress={nextButton}>
            <Text
              style={[
                Theme.fWhite,
                Theme.f25,
                Theme.txtAlignCenter,
                Theme.fBold,
              ]}>
              {MENU_LANGUAGES[lang][28]}
            </Text>
          </TouchableOpacity>
        ) : null}
        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage3 && !isClick3 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select3}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={Theme.h3} />
        <View
          style={[Theme.w100, Theme.h20, Theme.flexDirRow, Theme.justAlign]}>
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}>
            {showImage4 && !isClick4 && (
              <TouchableOpacity
                style={[Theme.w100, Theme.h100, Theme.justAlign]}
                onPress={select4}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
          <View style={[Theme.w10]} />
          <View style={[Theme.w40, Theme.h100, Theme.justAlign]}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#9c0595',
  },
});

export default ClickAnimalScreen6;
