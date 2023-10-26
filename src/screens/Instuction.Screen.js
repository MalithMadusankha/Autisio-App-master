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
import PlayCardComponent from '../components/PlayCardComponent';

const InstuctionScreen = ({navigation}) => {
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
            Instructions for Game
          </Text>
        </View>
      </View>
      <View style={[Theme.w100, Theme.h92]}>
        <SafeAreaView style={[Theme.w100, Theme.h100]}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <GameCardComponent
              GAME_TITLE={'This game play with father, mother and child.'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/monkey_jump.gif')}
            />
            <GameCardComponent
              GAME_TITLE={'Father should be sit on left side of child.'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/dog_run.gif')}
            />

            <GameCardComponent
              GAME_TITLE={'Mother should be sit on right side of child.'}
              GAME_STYLE={[Theme.w80, Theme.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/zebra_run.gif')}
            />

            <GameCardComponent
              GAME_TITLE={'When game start, child should be focus on screen.'}
              GAME_STYLE={[Theme.w90, Theme.h40]}
              GAME_IMG={require('../assets/img/animal_gifs/bird_flying.gif')}
            />

            <GameCardComponent
              GAME_TITLE={'Screen ask to speak father or Mother.'}
              GAME_STYLE={[Theme.w70, Theme.h55]}
              GAME_IMG={require('../assets/img/animal_gifs/zebra_run.gif')}
            />

            <GameCardComponent
              GAME_TITLE={
                'Game will detect child will response to father or mother.'
              }
              GAME_STYLE={[Theme.w90, Theme.h60]}
              GAME_IMG={require('../assets/img/animals/rabbit-removebg-preview.png')}
            />

            <PlayCardComponent
              GAME_STYLE={[Theme.w90, Theme.h90]}
              GAME_IMG={require('../assets/img/play.gif')}
              GAME_ON_PRESS={() => navigation.navigate('audioAttentionGame')}
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

export default InstuctionScreen;
