import React, {useEffect, useState} from 'react';
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
import LavelCardComponent from '../components/LavelCardComponent';
import SoundPlayer from '../components/SoundPlayer';
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES from '../util/LanguageConst';

const GameLevelsScreen = ({navigation}) => {
  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  useEffect(() => {
    getLang();
  }, []);

  return (
    <View style={[Theme.container, Theme.bgMain6, Theme.w100, Theme.h100]}>
      <SoundPlayer />
      <View style={[Theme.w90, Theme.h10]}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[Theme.w15, Theme.h100, Theme.justAlign]}>
          <Image
            source={require('../assets/icons/angle-circle-left.png')}
            style={[styles.leftSide]}
          />
        </TouchableOpacity>
      </View>
      <View style={[Theme.w100, Theme.h90]}>
        <SafeAreaView style={[Theme.w100, Theme.h100]}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <LavelCardComponent
              GAME_TITLE={`${MENU_LANGUAGES[lang][30]} 1`}
              LEVEL_LIMIT={`${MENU_LANGUAGES[lang][31]}`}
              GAME_STYLE={[Theme.w100, Theme.h50]}
              GAME_IMG={require('../assets/icons/butterfly.png')}
              GAME_ON_PRESS={() => navigation.navigate('GameLevel1Screen')}
            />

            <LavelCardComponent
              GAME_TITLE={`${MENU_LANGUAGES[lang][30]} 2`}
              LEVEL_LIMIT={`${MENU_LANGUAGES[lang][32]}`}
              GAME_STYLE={[Theme.w100, Theme.h60]}
              GAME_IMG={require('../assets/icons/bee.png')}
              GAME_ON_PRESS={() => navigation.navigate('GameLevel2Screen')}
            />

            <LavelCardComponent
              GAME_TITLE={`${MENU_LANGUAGES[lang][30]} 3`}
              LEVEL_LIMIT={`${MENU_LANGUAGES[lang][33]}`}
              GAME_STYLE={[Theme.w100, Theme.h60]}
              GAME_IMG={require('../assets/icons/parrot.png')}
              GAME_ON_PRESS={() => navigation.navigate('GameLevel3Screen')}
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

export default GameLevelsScreen;
