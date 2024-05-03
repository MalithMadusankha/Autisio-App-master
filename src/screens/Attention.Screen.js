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
import ReportCardComponent from '../components/ReportCardComponent';

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
        <View style={[Theme.w50, Theme.h100, Theme.justifyCenter]}>
          <Text style={[Theme.fWhite, Theme.f20, Theme.fBold]}>
            Attention Games
          </Text>
        </View>
        <View style={[Theme.w15, Theme.h100, Theme.justifyCenter]}>
          <Text style={[Theme.fWhite, Theme.f20, Theme.fBold]}>Eng</Text>
        </View>
        <View style={[Theme.w15, Theme.h100, Theme.justifyCenter]}>
          <Text style={[Theme.fWhite, Theme.f20, Theme.fBold]}>Sin</Text>
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
              GAME_ON_PRESS={() => navigation.navigate('GameLevelsScreen')}
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
              GAME_ON_PRESS={() =>
                navigation.navigate('SelectAnimalsSusScreen')
              }
            />

            <GameCardComponent
              GAME_TITLE={'Auditory Attention'}
              GAME_STYLE={[Theme.w70, Theme.h55]}
              GAME_IMG={require('../assets/img/others/boy-removebg-preview.png')}
              GAME_ON_PRESS={() => navigation.navigate('instructionsScreen')}
            />
            <ReportCardComponent
              GAME_TITLE={'Report Summary'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/report.png')}
              GAME_ON_PRESS={() => navigation.navigate('reportSummaryScreen3')}
            />
            <View style={[Theme.mb10]} />
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
