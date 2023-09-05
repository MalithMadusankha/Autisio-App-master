import React, {useState, useRef} from 'react';
import {Dimensions, Text, View, Image, Button} from 'react-native';
import Theme from '../assets/theme/AxTheme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AxButton from '../components/AxButton';
import ImagePicker from 'react-native-image-crop-picker';

const ChildFaceScreen = () => {
  const SCREEN_HEIGHT = Dimensions.get('screen').height;

  const [uri, setUri] = useState(null);

  const openCamera = () => {
    try {
      ImagePicker.openCamera({
        width: 1000,
        height: 1000,
        cropping: true,
      })
        .then(image => {
          setUri(image.path);
        })
        .catch(error => {
          console.log(error);
        });
      // const image = ImagePicker.openCamera({
      //   width: 1000,
      //   height: 1000,
      //   cropping: true,
      // });
      //
      // const formData = new FormData();
      // formData.append("file", {
      //   uri: image.path,
      //   type: "image/png",
      //   name: "image.png",
      // });
      //
      // const response = axios.post("", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });

      // console.log(response.data.message);
      // setUri(image.path);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAwareScrollView
      scrollEnabled={false}
      style={[{height: SCREEN_HEIGHT}]}>
      <View style={[{height: SCREEN_HEIGHT}]}>
        <View style={[Theme.container, Theme.bgWhite]}>
          <View
            style={[
              Theme.w100,
              Theme.h10,
              Theme.bgMain0,
              Theme.flexDirRow,
              Theme.justAlign,
            ]}>
            <Text style={[Theme.fBold, Theme.f20, Theme.fWhite, Theme.ml2]}>
              මුණ පෙන්නමු
            </Text>
          </View>

          <View style={[Theme.h5]} />

          <View
            style={[
              Theme.h300px,
              Theme.w300px,
              Theme.bgWhite,
              Theme.justAlign,
              Theme.elevation8,
              Theme.borderRadius_40px,
            ]}>
            {uri ? (
              <Image
                style={[Theme.w98, Theme.h98, Theme.borderRadius_40px]}
                source={{uri: uri}} // Use the uri state to display the image
              />
            ) : null}
          </View>

          <View style={[Theme.h4]} />

          <View style={[Theme.w80, Theme.h6]}>
            <AxButton ButtonName={'CAPTURE'} onPressButton={openCamera} />
            {/* <Button title="capture" onPress={openCamera} /> */}
          </View>

          <View style={[Theme.h4]} />

          <View
            style={[
              Theme.w85,
              Theme.h25,
              Theme.bgWhite,
              Theme.justAlign,
              Theme.elevation8,
              Theme.borderRadius20,
            ]}>
            <Text style={[Theme.fBold, Theme.f20, Theme.fMain0, Theme.ml2]}>
              HAPPY
            </Text>
          </View>
          <View style={[Theme.h11]} />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChildFaceScreen;
