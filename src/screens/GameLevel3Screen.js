import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Sound from 'react-native-sound';
import ClickSound from '../assets/sound/trra.mp3';
import TM from '../assets/theme/AxTheme';
import GameCard from '../components/GameCard';
import {useNavigation} from '@react-navigation/native';
import {ReadLanguage, ReadUser} from '../constants/constants';
import CreateNewGame from '../service/GameService';
import MENU_LANGUAGES from '../util/LanguageConst';

const GameLevel3Screen = () => {
  const cards = [
    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/bee.png')},
    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/parrot.png')},

    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/bee.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/parrot.png')},

    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/bee.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/parrot.png')},
  ];

  const [cardPlacements, setCardPlacements] = useState([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState(null);
  const [secondSelectedCard, setSecondSelectedCard] = useState(null);
  const [thirdSelectedCard, setThirdSelectedCard] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [temp, setTemp] = useState(0);
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
      game: 'selective',
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
    setTemp(require('../assets/icons/parrot.png'));
    loadSound();
    shuffleArrays();
    let intervalId;
    if (isTimerRunning) {
      if (startTime === 0) {
        setStartTime(Date.now());
      }
      intervalId = setInterval(() => {
        const currentTime = Date.now();
        setElapsedTime(currentTime - startTime);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isTimerRunning, startTime]); // eslint-disable-line

  const saveTime = () => {
    console.log(Math.floor(elapsedTime / 1000) % 60);
  };

  const replay = () => {
    shuffleArrays();
    stopTimer();
    setElapsedTime(0);
  };

  const startTimer = () => {
    setStartTime(0);
    setIsTimerRunning(true);
  };

  const stopTimer = () => {
    setIsTimerRunning(false);
  };

  const formatTime = time => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 1000 / 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds}`;
  };

  const shuffleArray = array => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const useNavigate = useNavigation();

  const navigateWellDone = async () => {
    setFirstSelectedCard(null);
    setSecondSelectedCard(null);
    setThirdSelectedCard(null);

    const duration = Math.floor(elapsedTime / 1000) % 60;
    // await SaveGame(duration, true);

    useNavigate.navigate('WellDoneScreen', {
      data: Math.floor(elapsedTime / 1000) % 60,
      avg: 5,
      isWin: true,
    });
  };

  const shuffleArrays = () => {
    const shuffledCards = shuffleArray(cards);
    const placements = shuffledCards.map((card, index) => ({
      card,
      showImage: false,
    }));
    setCardPlacements(placements);
  };

  const toggleImage = index => {
    ClickSoundBtn();
    setCardPlacements(prevPlacements =>
      prevPlacements.map((placement, idx) => {
        if (idx === index) {
          return {
            ...placement,
            showImage: !placement.showImage,
          };
        }
        return placement;
      }),
    );

    const updatedCardPlacements = [...cardPlacements];
    updatedCardPlacements[index] = {
      ...updatedCardPlacements[index],
    };
    setCardPlacements(updatedCardPlacements);

    console.log(cardPlacements[index].card.imgSrc);

    if (firstSelectedCard === null) {
      if (cardPlacements[index].card.imgSrc === temp) {
        setFirstSelectedCard(cardPlacements[index].card.imgSrc);
      } else {
        alert('please select only parrot');
      }
    } else {
      if (secondSelectedCard === null) {
        if (cardPlacements[index].card.imgSrc === temp) {
          setSecondSelectedCard(cardPlacements[index].card.imgSrc);
        } else {
          alert('please select only parrot');
        }
      } else {
        if (thirdSelectedCard === null) {
          if (cardPlacements[index].card.imgSrc === temp) {
            setThirdSelectedCard(cardPlacements[index].card.imgSrc);
            stopTimer();
            navigateWellDone();
            saveTime();
          } else {
            alert('please select only parrot');
          }
        } else {
          setFirstSelectedCard(null);
          setSecondSelectedCard(null);
          setThirdSelectedCard(null);
        }
      }
    }
  };

  return (
    <ImageBackground
      imageStyle={[TM.w100, TM.h100, TM.justAlign]}
      style={[TM.w100, TM.h100, TM.justAlign]}
      source={require('../assets/img/background/bg-chose.jpg')}>
      <View style={[TM.h5]} />

      <View style={[TM.w100, TM.h93, TM.justAlign]}>
        <View style={[TM.w100, TM.h7, TM.justAlign, TM.flexDirRow]}>
          <TouchableOpacity style={[TM.w10, TM.h100, TM.justAlign, TM.ml2]}>
            <Image
              source={require('../assets/icons/angle-small-left.png')}
              style={[TM.w60, TM.h53]}
            />
          </TouchableOpacity>
          <View style={[TM.w60, TM.h100, TM.justAlign]}>
            <Text style={[TM.fBlack, TM.f20, TM.fBold, TM.fWhite]}>
              {MENU_LANGUAGES[lang][8]}
            </Text>
          </View>
          <View style={[TM.w30, TM.h100, TM.justifyCenter]}>
            <Image
              source={require('../assets/icons/parrot.png')}
              style={[styles.leftSide]}
            />
          </View>
        </View>
        <View style={[TM.w90, TM.h5, TM.bgTransparent, TM.justAlign]}></View>
        <View style={[TM.h2]} />
        <View style={[TM.w75, TM.h7, TM.justAlign, TM.flexDirRow]}>
          <View style={[TM.w48, TM.h100, TM.justAlign]}>
            <TouchableOpacity
              style={[
                TM.w100,
                TM.h100,
                TM.bgMain1,
                TM.borderRadius40,
                TM.justAlign,
              ]}
              onPress={startTimer}>
              <Text style={[TM.fWhite, TM.f17, TM.txtAlignCenter, TM.fBold]}>
                Start
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[TM.w2]} />
        </View>
        <View style={[TM.h30]} />
        <View style={[TM.w90, TM.h18, TM.bgTransparent, TM.justAlign]}>
          <View
            style={[
              TM.w100,
              TM.h100,
              TM.bgTransparent,
              TM.justAlign,
              TM.flexDirRow,
            ]}>
            <View style={[TM.w100, TM.h100, TM.justAlign, TM.bgTransparent]}>
              <View style={styles.cardsContainer}>
                {cardPlacements.slice(0, 3).map((placement, cardIndex) => (
                  <View key={cardIndex} style={styles.cardWrapper}>
                    <GameCard
                      IMG_URL={placement.card.imgSrc}
                      SHOW_IMG={placement.showImage}
                      ON_PRESS={() => toggleImage(cardIndex)}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.cardsContainer}>
                {cardPlacements.slice(3, 6).map((placement, cardIndex) => (
                  <View key={cardIndex} style={styles.cardWrapper}>
                    <GameCard
                      IMG_URL={placement.card.imgSrc}
                      SHOW_IMG={placement.showImage}
                      ON_PRESS={() => toggleImage(cardIndex + 3)}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.cardsContainer}>
                {cardPlacements.slice(6, 9).map((placement, cardIndex) => (
                  <View key={cardIndex} style={styles.cardWrapper}>
                    <GameCard
                      IMG_URL={placement.card.imgSrc}
                      SHOW_IMG={placement.showImage}
                      ON_PRESS={() => toggleImage(cardIndex + 6)}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.cardsContainer}>
                {cardPlacements.slice(9, 12).map((placement, cardIndex) => (
                  <View key={cardIndex} style={styles.cardWrapper}>
                    <GameCard
                      IMG_URL={placement.card.imgSrc}
                      SHOW_IMG={placement.showImage}
                      ON_PRESS={() => toggleImage(cardIndex + 9)}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.cardsContainer}>
                {cardPlacements.slice(12, 15).map((placement, cardIndex) => (
                  <View key={cardIndex} style={styles.cardWrapper}>
                    <GameCard
                      IMG_URL={placement.card.imgSrc}
                      SHOW_IMG={placement.showImage}
                      ON_PRESS={() => toggleImage(cardIndex + 12)}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={[TM.h28]} />
        <View style={[TM.w75, TM.h7, TM.justAlign, TM.flexDirRow]}></View>
        <View style={[TM.h5]} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    width: '25%',
    height: '85%',
    margin: 5,
  },
  timeText: {
    fontSize: 30,
  },
  leftSide: {
    width: 50,
    height: 50,
  },
});

export default GameLevel3Screen;
