import React from 'react';
import {Text, View, ImageBackground} from 'react-native';
import TM from '../../assets/theme/AxTheme';
import ChildInfoForm from '../../components/ChildInfoForm';

const GatherDataScreen = ({navigation}) => {
  return (
    <ImageBackground
      imageStyle={[TM.w100, TM.h100, TM.justAlign]}
      style={[TM.w100, TM.h100, TM.justAlign]}
      source={require('../../assets/img/background/login.jpg')}>
      <View style={[TM.h5, TM.justAlign]}>
        <Text style={[TM.f20]}>Register Here </Text>
      </View>

      <View style={[TM.bgWhiteT, TM.borderRadius20, TM.px3, TM.h90, TM.w85]}>
        <ChildInfoForm navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default GatherDataScreen;
