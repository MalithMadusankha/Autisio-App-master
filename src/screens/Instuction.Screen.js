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
import TM from '../assets/theme/AxTheme';
import AudioGameCardComponent from '../components/AudioGameCardComponent';
import PlayCardComponent from '../components/PlayCardComponent';
import {ReadLanguage, SaveLanguage} from '../constants/constants';
import {AUDIO_GAME_LANG} from '../util/LanguageConst';

const InstuctionScreen = ({navigation}) => {
  const [lang, setLang] = useState(0);

  const langHandler = async num => {
    await SaveLanguage(num);
    setLang(num);
  };

  const getLanguage = async () => {
    const language = await ReadLanguage();
    console.log('LL', language);
    setLang(language);
  };

  useEffect(() => {
    getLanguage();
  }, []);

  return (
    <View style={[TM.container, TM.bgMain6, TM.w100, TM.h100]}>
      <View style={[TM.w100, TM.h8, TM.bgMain7, TM.flexDirRow]}>
        <View style={[TM.w15, TM.h100, TM.justAlign]}>
          <Image
            source={require('../assets/icons/menu-burger.png')}
            style={[styles.leftSide]}
          />
        </View>
        <View style={[TM.w58, TM.h100, TM.justifyCenter]}>
          <Text style={[TM.fWhite, TM.f20, TM.fBold]}>
            {AUDIO_GAME_LANG[lang][0]}
          </Text>
        </View>
        <View style={[TM.w25, TM.h100, TM.justifyCenter]}>
          <View style={[TM.flexDirRow, TM.w100, TM.h80]}>
            <TouchableOpacity
              onPress={() => langHandler(1)}
              style={[
                TM.mt5,
                TM.w50,
                lang === 1 ? styles.bgBlue : TM.bgPurlLight,
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
                lang === 0 ? styles.bgBlue : TM.bgPurlLight,
                TM.borTopRightRad20,
                TM.w50,
                TM.borBotRightRad20,
                TM.justAlign,
              ]}>
              <Text style={[TM.txtAlignCenter, TM.f14, TM.fWhite]}>Eng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[TM.w100, TM.h92]}>
        <SafeAreaView style={[TM.w100, TM.h100]}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <AudioGameCardComponent
              LANG_NUM={lang}
              LANG_INDEX={1}
              GAME_TITLE={AUDIO_GAME_LANG[lang][1]}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/monkey_jump.gif')}
            />
            <AudioGameCardComponent
              LANG_NUM={lang}
              LANG_INDEX={2}
              GAME_TITLE={AUDIO_GAME_LANG[lang][2]}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/dog_run.gif')}
            />

            <AudioGameCardComponent
              LANG_NUM={lang}
              LANG_INDEX={3}
              GAME_TITLE={AUDIO_GAME_LANG[lang][3]}
              GAME_STYLE={[TM.w80, TM.h60]}
              GAME_IMG={require('../assets/img/animal_gifs/zebra_run.gif')}
            />

            <AudioGameCardComponent
              LANG_NUM={lang}
              LANG_INDEX={4}
              GAME_TITLE={AUDIO_GAME_LANG[lang][4]}
              GAME_STYLE={[TM.w90, TM.h40]}
              GAME_IMG={require('../assets/img/animal_gifs/bird_flying.gif')}
            />

            <AudioGameCardComponent
              LANG_NUM={lang}
              LANG_INDEX={5}
              GAME_TITLE={AUDIO_GAME_LANG[lang][5]}
              GAME_STYLE={[TM.w70, TM.h55]}
              GAME_IMG={require('../assets/img/animal_gifs/zebra_run.gif')}
            />

            <AudioGameCardComponent
              LANG_NUM={lang}
              LANG_INDEX={6}
              GAME_TITLE={AUDIO_GAME_LANG[lang][6]}
              GAME_STYLE={[TM.w90, TM.h60]}
              GAME_IMG={require('../assets/img/animals/rabbit-removebg-preview.png')}
            />

            <PlayCardComponent
              GAME_STYLE={[TM.w90, TM.h90]}
              GAME_IMG={require('../assets/img/play.gif')}
              GAME_ON_PRESS={() => navigation.navigate('audioAttentionGame')}
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

export default InstuctionScreen;
