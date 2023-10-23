import React from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import GameCardComponent from '../components/GameCardComponent';

const AttentionScreen = ({navigation}) => {
  return (
    <View style={[Theme.container, Theme.bgMain6, Theme.w100, Theme.h100]}>
      <View style={[Theme.w100, Theme.h8, Theme.bgMain7, Theme.flexDirRow]}>
        <View style={[Theme.w15, Theme.h100, Theme.justAlign]}>
          <Image
            source={require('../assets/icons/menu-burger.png')}
            style={[styles.leftSide]}
          />
        </View>
        <View style={[Theme.w85, Theme.h100, Theme.justifyCenter]}>
          <Text style={[Theme.fWhite, Theme.f20, Theme.fBold]}>
            Attention Assessing Games
          </Text>
        </View>
      </View>
      <View style={[Theme.w100, Theme.h92]}>
        <SafeAreaView style={[Theme.w100, Theme.h100]}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <GameCardComponent
              GAME_TITLE={'Focused Attention Games'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animals/cartoon-cat.webp')}
              GAME_ON_PRESS={() => navigation.navigate('SelectAnimalsScreen')}
            />

            <GameCardComponent
              GAME_TITLE={'Selective Attention Games'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animals/dog.png')}
              GAME_ON_PRESS={() => navigation.navigate('GameLevel2Screen')}
            />

            <GameCardComponent
              GAME_TITLE={'Divided Attention Games'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/bird_flying.gif')}
              GAME_ON_PRESS={() =>
                navigation.navigate('SelectSimilarAnimalScreen')
              }
            />

            <GameCardComponent
              GAME_TITLE={'Sustained Attention Games'}
              GAME_STYLE={[Theme.w90, Theme.h40]}
              GAME_IMG={require('../assets/img/animals/fish.jpg')}
              GAME_ON_PRESS={() => navigation.navigate('SelectAnimalsScreen')}
            />

            <GameCardComponent
              GAME_TITLE={'Shifting Attention Games'}
              GAME_STYLE={[Theme.w90, Theme.h60]}
              GAME_IMG={require('../assets/img/animals/rabbit-removebg-preview.png')}
            />

            <GameCardComponent
              GAME_TITLE={'Gaze Analysing Games'}
              GAME_STYLE={[Theme.w70, Theme.h55]}
              GAME_IMG={require('../assets/img/others/boy-removebg-preview.png')}
            />

            <GameCardComponent
              GAME_TITLE={'Auditory Attention'}
              GAME_STYLE={[Theme.w70, Theme.h55]}
              GAME_IMG={require('../assets/img/others/boy-removebg-preview.png')}
            />

            <GameCardComponent
              GAME_TITLE={'Audio Attention Games'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/monkey_jump.gif')}
              GAME_ON_PRESS={() => navigation.navigate('instructionsScreen')}
            />
            <GameCardComponent
              GAME_TITLE={'Report Summary'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animals/cartoon-cat.webp')}
              GAME_ON_PRESS={() => navigation.navigate('reportSummaryScreen3')}
            />
          </ScrollView>
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    width: 30,
    height: 30,
  },
  scrollView: {
    marginHorizontal: 15,
  },
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  cardSpace: {
    height: 30,
  },
});

export default AttentionScreen;
