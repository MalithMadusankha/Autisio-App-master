import React, {useEffect, useState} from 'react';
import Theme from '../assets/theme/AxTheme';
import {
  Dimensions,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CardComponent from '../components/CardComponent';
import ClickAnimalScreen from './ClickAnimal.Screen';
import {ReadLanguage} from '../constants/constants';
import MENU_LANGUAGES, {ANIMAL_LANGUAGES} from '../util/LanguageConst';

const SelectAnimalsSusScreen = ({navigation}) => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [lang, setLang] = useState(0);

  const getLang = async () => {
    const langNum = await ReadLanguage();
    setLang(langNum);
  };

  useEffect(() => {
    // getUser();
    getLang();
  }, []);

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      style={[{height: SCREEN_HEIGHT}]}>
      <View style={[{height: SCREEN_HEIGHT}]}>
        <View style={[Theme.container, Theme.bgMain1, Theme.w100, Theme.h100]}>
          <ImageBackground
            imageStyle={[Theme.w100, Theme.h100, Theme.justAlign]}
            style={[Theme.w100, Theme.h100, Theme.justAlign]}
            source={require('../assets/img/background/bg_2.png')}>
            <View style={[Theme.w90, Theme.h5]}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[Theme.w15, Theme.h100, Theme.justAlign]}>
                <Image
                  source={require('../assets/icons/angle-circle-left.png')}
                  style={[styles.leftSide]}
                />
              </TouchableOpacity>
            </View>
            <View style={[Theme.w60, Theme.h15, Theme.justAlign]}>
              <Text
                style={[
                  Theme.fBlack,
                  Theme.f27,
                  Theme.fBold,
                  Theme.txtAlignCenter,
                ]}>
                {MENU_LANGUAGES[lang][6]}
              </Text>
            </View>
            <View style={[Theme.w90, Theme.h25, Theme.flexDirRow]}>
              <View style={[Theme.w48, Theme.h100]}>
                <CardComponent
                  CARD_TITLE={ANIMAL_LANGUAGES[lang][0]}
                  CARD_IMG_STYLE={[Theme.w70, Theme.h70]}
                  CARD_ON_PRESS={() =>
                    navigation.navigate('TopBottomAnimalScreen', {
                      animal: 'b',
                    })
                  }
                  CARD_IMG={require('../assets/img/animals/bird.png')}
                  CARD_BG={[Theme.bgMain3, Theme.borderRadius20]}
                />
              </View>

              <View style={[Theme.w4]} />

              <View style={[Theme.w48, Theme.h100]}>
                <CardComponent
                  CARD_TITLE={ANIMAL_LANGUAGES[lang][1]}
                  CARD_IMG_STYLE={[Theme.w70, Theme.h70]}
                  CARD_IMG={require('../assets/img/animals/dog.png')}
                  CARD_BG={[Theme.bgMain2, Theme.borderRadius20]}
                  CARD_ON_PRESS={() =>
                    navigation.navigate('TopBottomAnimalScreen', {
                      animal: 'd',
                    })
                  }
                />
              </View>
            </View>
            <View style={[Theme.h2]} />
            <View style={[Theme.w90, Theme.h25, Theme.flexDirRow]}>
              <View style={[Theme.w48, Theme.h100]}>
                <CardComponent
                  CARD_TITLE={ANIMAL_LANGUAGES[lang][2]}
                  CARD_IMG_STYLE={[Theme.w70, Theme.h70]}
                  CARD_IMG={require('../assets/img/animals/monkey.png')}
                  CARD_BG={[Theme.bgMain4, Theme.borderRadius20]}
                  CARD_ON_PRESS={() =>
                    navigation.navigate('TopBottomAnimalScreen', {
                      animal: 'm',
                    })
                  }
                />
              </View>

              <View style={[Theme.w4]} />

              <View style={[Theme.w48, Theme.h100]}>
                <CardComponent
                  CARD_TITLE={ANIMAL_LANGUAGES[lang][3]}
                  CARD_IMG_STYLE={[Theme.w95, Theme.h70]}
                  CARD_IMG={require('../assets/img/animals/zebra.png')}
                  CARD_BG={[Theme.bgMain5, Theme.borderRadius20]}
                  CARD_ON_PRESS={() =>
                    navigation.navigate('TopBottomAnimalScreen', {
                      animal: 'z',
                    })
                  }
                />
              </View>
            </View>
            <View style={[Theme.h21]} />
          </ImageBackground>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    width: 30,
    height: 30,
  },
});

export default SelectAnimalsSusScreen;
