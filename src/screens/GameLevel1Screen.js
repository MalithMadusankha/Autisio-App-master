import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import GameCard from '../components/GameCard';
import {useNavigation} from '@react-navigation/native';

const GameLevel1Screen = ({navigation}) => {
  const cards = [
    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/butterfly.png')},
    {imgSrc: require('../assets/icons/butterfly.png')},

    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},

    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},
    {imgSrc: require('../assets/icons/ladybug.png')},
  ];

  const [cardPlacements, setCardPlacements] = useState([]);
  const [firstSelectedCard, setFirstSelectedCard] = useState(null);
  const [secondSelectedCard, setSecondSelectedCard] = useState(null);
  const [thirdSelectedCard, setThirdSelectedCard] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [temp, setTemp] = useState(0);

  useEffect(() => {
    setTemp(require('../assets/icons/butterfly.png'));

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
  }, [isTimerRunning, startTime]);

  const saveTime = () => {
    console.log(formatTime(elapsedTime));
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

  const navigateGame2 = () => {
    setFirstSelectedCard(null);
    setSecondSelectedCard(null);
    setThirdSelectedCard(null);
    useNavigate.navigate('WellDoneScreen');
    setTimeout(() => {
      useNavigate.navigate('GameLevel2Screen');
    }, 3000);
  };

  const showAlert = () => {
    Alert.alert(
      'Next Level',
      'Are you sure you want to continue?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            navigateGame2();
          },
        },
      ],
      {cancelable: false},
    );
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

    if (firstSelectedCard === null) {
      if (cardPlacements[index].card.imgSrc === temp) {
        setFirstSelectedCard(cardPlacements[index].card.imgSrc);
      } else {
        alert('please select only butterfly');
      }
    } else {
      if (secondSelectedCard === null) {
        if (cardPlacements[index].card.imgSrc === temp) {
          setSecondSelectedCard(cardPlacements[index].card.imgSrc);
        } else {
          alert('please select only butterfly');
        }
      } else {
        if (thirdSelectedCard === null) {
          if (cardPlacements[index].card.imgSrc === temp) {
            setThirdSelectedCard(cardPlacements[index].card.imgSrc);
            alert('Your Won!');
            stopTimer();
            showAlert();
            saveTime();
          } else {
            alert('please select only butterfly');
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
      imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
      style={[Theme.w100, Theme.h100, Theme.justAlign]}
      source={require('../assets/img/background/bg_3.jpg')}>
      <View style={[Theme.h2]} />

      <View style={[Theme.w100, Theme.h8, Theme.flexDirRow]}>
        <TouchableOpacity
          style={[Theme.w15, Theme.h100, Theme.justAlign, Theme.ml2]}>
          <Image
            source={require('../assets/icons/angle-small-left.png')}
            style={[Theme.w60, Theme.h53]}
          />
        </TouchableOpacity>
      </View>

      <View style={[Theme.w100, Theme.h93, Theme.justAlign]}>
        <View
          style={[Theme.w100, Theme.h10, Theme.justAlign, Theme.flexDirRow]}>
          <View style={[Theme.w5]} />
          <View style={[Theme.w65, Theme.h100, Theme.justAlign]}>
            <Text style={[Theme.fBlack, Theme.f20, Theme.fBold]}>
              Choose this from below
            </Text>
          </View>
          <View style={[Theme.w30, Theme.h100, Theme.justifyCenter]}>
            <Image
              source={require('../assets/icons/butterfly.png')}
              style={[styles.leftSide]}
            />
          </View>
        </View>

        <View
          style={[Theme.w90, Theme.h7, Theme.bgTransparent, Theme.justAlign]}>
          <Text style={[styles.timeText, Theme.fMain1]}>
            {formatTime(elapsedTime)}
          </Text>
        </View>

        <View style={[Theme.h2]} />

        <View style={[Theme.w75, Theme.h7, Theme.justAlign, Theme.flexDirRow]}>
          <View style={[Theme.w48, Theme.h100, Theme.justAlign]}>
            <TouchableOpacity
              style={[
                Theme.w100,
                Theme.h100,
                Theme.bgMain1,
                Theme.borderRadius40,
                Theme.justAlign,
              ]}
              onPress={startTimer}>
              <Text
                style={[
                  Theme.fWhite,
                  Theme.f17,
                  Theme.txtAlignCenter,
                  Theme.fBold,
                ]}>
                Start
              </Text>
            </TouchableOpacity>
          </View>

          <View style={[Theme.w2]} />

          <View style={[Theme.w48, Theme.h100, Theme.justAlign]}>
            <TouchableOpacity
              style={[
                Theme.w100,
                Theme.h100,
                Theme.bgMain1,
                Theme.borderRadius40,
                Theme.justAlign,
              ]}
              onPress={stopTimer}>
              <Text
                style={[
                  Theme.fWhite,
                  Theme.f17,
                  Theme.txtAlignCenter,
                  Theme.fBold,
                ]}>
                Stop
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[Theme.h20]} />

        <View
          style={[Theme.w90, Theme.h18, Theme.bgTransparent, Theme.justAlign]}>
          {/*CARD CONTENT--------------------------------------------------------------------------------------------*/}
          <View
            style={[
              Theme.w100,
              Theme.h100,
              Theme.bgTransparent,
              Theme.justAlign,
              Theme.flexDirRow,
            ]}>
            <View
              style={[
                Theme.w100,
                Theme.h100,
                Theme.justAlign,
                Theme.bgTransparent,
              ]}>
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
            </View>
          </View>
        </View>

        <View style={[Theme.h15]} />

        <View style={[Theme.w75, Theme.h7, Theme.justAlign, Theme.flexDirRow]}>
          <TouchableOpacity
            style={[
              Theme.w60,
              Theme.h100,
              Theme.bgMain1,
              Theme.borderRadius40,
              Theme.justAlign,
            ]}
            onPress={replay}>
            <Text
              style={[
                Theme.fWhite,
                Theme.f17,
                Theme.txtAlignCenter,
                Theme.fBold,
              ]}>
              Repeat
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[Theme.h15]} />
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

export default GameLevel1Screen;
