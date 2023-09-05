import {
  Dimensions,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Theme from '../assets/theme/AxTheme';
import {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const TermsScreen = ({navigation}) => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      style={[{height: SCREEN_HEIGHT}]}>
      <View style={[{height: SCREEN_HEIGHT}]}>
        <View style={[Theme.container, Theme.bgMain1, Theme.w100, Theme.h100]}>
          <View style={[Theme.w90, Theme.h5]}>
            <TouchableOpacity style={[Theme.w15, Theme.h100, Theme.justAlign]}>
              <Image
                source={require('../assets/icons/angle-circle-left.png')}
                style={[styles.leftSide]}
              />
            </TouchableOpacity>
          </View>
          <View style={[Theme.h4]} />
          <View style={[Theme.w80, Theme.h40]}>
            <Text
              style={[
                Theme.fWhite,
                Theme.f20,
                Theme.fBold,
                Theme.txtAlignLeft,
              ]}>
              I acknowledge that I have reviewed and understood the app's terms
              and conditions. I voluntarily consent to use the app's services,
              recognizing its informational nature. I understand that the app is
              not a substitute for professional medical advice. The app's
              developers are not liable for any actions resulting from the app's
              information. My personal data will be handled as per the privacy
              policy. I can discontinue usage at any time. If in doubt, I will
              consult a qualified healthcare professional.
            </Text>
          </View>
          <View style={[Theme.h2]} />
          <View
            style={[Theme.w90, Theme.h10, Theme.justAlign, Theme.flexDirRow]}>
            <View style={[Theme.w10, Theme.h100, Theme.justAlign]}>
              <CheckBox
                disabled={false}
                tintColors={{true: 'white', false: 'white'}}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>
            <View style={[Theme.w70, Theme.h100, Theme.justifyCenter]}>
              <Text style={[Theme.fWhite, Theme.f15, Theme.txtAlignLeft]}>
                I hereby consent for proceeding
              </Text>
            </View>
          </View>
          <View style={[Theme.h4]} />
          <View style={[Theme.w80, Theme.h7, Theme.justAlign]}>
            <TouchableOpacity
              style={[
                Theme.w100,
                Theme.h100,
                Theme.bgMain0,
                Theme.justAlign,
                Theme.borderRadius10,
              ]}
              onPress={() => navigation.navigate('AttentionScreen')}>
              <Text
                style={[
                  Theme.fBlack,
                  Theme.f17,
                  Theme.fBold,
                  Theme.txtAlignLeft,
                ]}>
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[Theme.h18]} />
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

export default TermsScreen;
