import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import ChildInfoForm from '../components/ChildInfoForm';

const GatherDataScreen = ({navigation}) => {
  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const [height, setHeight] = useState(0.7);

  return (
    <View style={[Theme.container, Theme.bgWelCome, Theme.w100, Theme.h100]}>
      <ChildInfoForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GatherDataScreen;
