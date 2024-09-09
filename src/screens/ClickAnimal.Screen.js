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

import TM from '../assets/theme/AxTheme';
import {useNavigation} from '@react-navigation/native';
import AnimalImageComponet from '../components/AnimalImageComponet';
import CreateNewGame from '../service/GameService';
import {ReadLanguage, ReadUser} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';

const ClickAnimalScreen = ({route}) => {
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

  const BirdSound = () => {
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

  useEffect(() => {
    getLang();
    loadSound();
    setTimeout(() => {
      setShowImage1(false);
      setShowImage2(true);
    }, 5000);

    setTimeout(() => {
      setShowImage2(false);
      setShowImage3(true);
    }, 8000);

    setTimeout(() => {
      setShowImage3(false);
      setShowImage4(true);
    }, 11000);

    const timeId = setTimeout(() => {
      setShowImage4(false);
      setisControl(true);
      setIsNav(true);
    }, 16000);
    return () => {
      clearTimeout(timeId);
      if (sound) {
        sound.release();
      }
    };
  }, []); // eslint-disable-line

  const formatTime = time => {
    const seconds = Math.floor(time / 1000) % 60;
    return seconds;
  };
  const select1 = () => {
    BirdSound();
    setTimeout(() => {
      setIsClick1(true);
      setShowImage1(false);
      setShowImage2(true);
    }, 500);
  };
  const select2 = () => {
    BirdSound();
    setTimeout(() => {
      setIsClick2(true);
      setShowImage2(false);
      setShowImage3(true);
    }, 500);
  };
  const select3 = () => {
    BirdSound();
    setTimeout(() => {
      setIsClick3(true);
      setShowImage3(false);
      setShowImage4(true);
    }, 500);
  };

  const select4 = async () => {
    BirdSound();

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
      imageStyle={[TM.w100, TM.h100, TM.justAlign]}
      style={[TM.w100, TM.h100, TM.justAlign]}
      source={require('../assets/img/background/bg-1.jpg')}>
      <Text
        style={[
          TM.fBlack,
          TM.f20,
          TM.fBold,
          TM.txtAlignCenter,
          TM.fWhite,
          TM.px2,
        ]}>
        {MENU_LANGUAGES[lang][7]}
      </Text>

      <View style={[TM.h5]} />

      <View style={[TM.w90, TM.h80]}>
        <View style={[TM.w100, TM.h20, TM.flexDirRow, TM.justAlign]}>
          <View style={[TM.w40, TM.h100, TM.justAlign]}>
            {showImage1 && !isClick1 && (
              <TouchableOpacity
                style={[TM.w100, TM.h100, TM.justAlign]}
                onPress={select1}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
          <View style={[TM.w10]} />
          <View style={[TM.w40, TM.h100, TM.justAlign]}></View>
        </View>
        <View style={TM.h3} />
        <View style={[TM.w100, TM.h20, TM.flexDirRow, TM.justAlign]}>
          <View style={[TM.w40, TM.h100, TM.justAlign]}></View>
          <View style={[TM.w10]} />
          <View style={[TM.w40, TM.h100, TM.justAlign]}>
            {showImage2 && !isClick2 && (
              <TouchableOpacity
                style={[TM.w100, TM.h100, TM.justAlign]}
                onPress={select2}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
        </View>
        {isNav ? (
          <TouchableOpacity
            style={[
              TM.w100,
              TM.h15,
              TM.ml2,
              TM.bgBlack,
              TM.borderRadius20,
              TM.justAlign,
            ]}
            onPress={nextButton}>
            <Text style={[TM.fWhite, TM.f25, TM.txtAlignCenter, TM.fBold]}>
              {MENU_LANGUAGES[lang][28]}
            </Text>
          </TouchableOpacity>
        ) : null}
        <View style={TM.h3} />
        <View style={[TM.w100, TM.h20, TM.flexDirRow, TM.justAlign]}>
          <View style={[TM.w40, TM.h100, TM.justAlign]}>
            {showImage3 && !isClick3 && (
              <TouchableOpacity
                style={[TM.w100, TM.h100, TM.justAlign]}
                onPress={select3}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={TM.h3} />
        <View style={[TM.w100, TM.h20, TM.flexDirRow, TM.justAlign]}>
          <View style={[TM.w40, TM.h100, TM.justAlign]}>
            {showImage4 && !isClick4 && (
              <TouchableOpacity
                style={[TM.w100, TM.h100, TM.justAlign]}
                onPress={select4}>
                {animal ? <AnimalImageComponet animal={animal} /> : null}
              </TouchableOpacity>
            )}
          </View>
          <View style={[TM.w10]} />
          <View style={[TM.w40, TM.h100, TM.justAlign]}></View>
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

export default ClickAnimalScreen;
