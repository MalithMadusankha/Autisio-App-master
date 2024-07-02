import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import TM from '../assets/theme/AxTheme';
import GameCardComponent from '../components/GameCardComponent';
import ReportCardComponent from '../components/ReportCardComponent';

import LogOut from '../assets/img/logout.png';

const AttentionScreen = ({navigation}) => {
  const [selectLang, setSelectLang] = useState(0);

  const langHandler = num => {
    setSelectLang(num);
  };

  return (
    <View style={[TM.container, TM.bgMain6, TM.w100, TM.h100]}>
      <View style={[TM.w100, TM.h8, TM.bgMain7, TM.flexDirRow]}>
        <View style={[TM.w15, TM.h100, TM.justAlign]}>
          <Image
            source={require('../assets/icons/menu-burger.png')}
            style={[styles.leftSide]}
          />
        </View>
        <View style={[TM.w45, TM.h100, TM.justifyCenter]}>
          <Text style={[TM.fWhite, TM.f20, TM.fBold]}>Attention Games</Text>
        </View>
        <View style={[TM.w25, TM.h100, TM.justifyCenter]}>
          <View style={[TM.flexDirRow, TM.w100, TM.h80]}>
            <TouchableOpacity
              onPress={() => langHandler(1)}
              style={[
                TM.mt5,
                TM.w50,
                selectLang === 1 ? styles.bgBlue : TM.bgPurlLight,
                TM.borBotLeftRad20,
                TM.borTopLeftRad20,
                TM.justAlign,
              ]}>
              <Text style={[TM.txtAlignCenter, TM.f14, TM.fWhite]}>සිං</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => langHandler(0)}
              style={[
                TM.mt5,
                selectLang === 0 ? styles.bgBlue : TM.bgPurlLight,
                TM.borTopRightRad20,
                TM.w50,
                TM.borBotRightRad20,
                TM.justAlign,
              ]}>
              <Text style={[TM.txtAlignCenter, TM.f14, TM.fWhite]}>Eng</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={[TM.w5, TM.ml5, TM.h100, TM.justifyCenter]}>
          <Image style={{width: 30, height: 30}} source={LogOut} alt="logout" />
        </TouchableOpacity>
      </View>
      <View style={[TM.w100, TM.h92]}>
        <SafeAreaView style={[TM.w100, TM.h100]}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <GameCardComponent
              GAME_TITLE={'Focused Attention Games'}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/animals/cartoon-cat.webp')}
              GAME_ON_PRESS={() => navigation.navigate('SelectAnimalsScreen')}
            />

            <GameCardComponent
              GAME_TITLE={'Selective Attention Games'}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/animals/dog.png')}
              GAME_ON_PRESS={() => navigation.navigate('GameLevelsScreen')}
            />

            <GameCardComponent
              GAME_TITLE={'Divided Attention Games'}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/bird_flying.gif')}
              GAME_ON_PRESS={() =>
                navigation.navigate('SelectSimilarAnimalScreen')
              }
            />

            <GameCardComponent
              GAME_TITLE={'Sustained Attention Games'}
              GAME_STYLE={[TM.w90, TM.h40]}
              GAME_IMG={require('../assets/img/animals/fish.jpg')}
              GAME_ON_PRESS={() =>
                navigation.navigate('SelectAnimalsSusScreen')
              }
            />

            <GameCardComponent
              GAME_TITLE={'Auditory Attention'}
              GAME_STYLE={[TM.w70, TM.h55]}
              GAME_IMG={require('../assets/img/others/boy-removebg-preview.png')}
              GAME_ON_PRESS={() => navigation.navigate('instructionsScreen')}
            />
            <ReportCardComponent
              GAME_TITLE={'Report Summary'}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/report.png')}
              GAME_ON_PRESS={() => navigation.navigate('reportSummaryScreen3')}
            />
            <View style={[TM.mb10]} />
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
  bgBlue: {
    backgroundColor: '#0b0c61fb',
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
