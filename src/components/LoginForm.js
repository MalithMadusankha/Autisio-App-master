import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TM from '../assets/theme/AxTheme';
import {SaveLanguage} from '../constants/constants';

const LoginForm = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(5);
  const [gender, setGender] = useState('male');
  const [selectLang, setSelectLang] = useState(0);

  const validateEmail = text => {
    setEmail(text);
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(text)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const langHandler = async num => {
    await SaveLanguage(num);
    setSelectLang(num);
  };

  const saveChildInfo = async () => {
    try {
      const childInfo = {email, age, gender};
      await AsyncStorage.setItem('childInfo', JSON.stringify(childInfo));
      console.log('Child information saved to AsyncStorage:', childInfo);
      if (email && password) {
        navigation.navigate('AttentionScreen');
      } else {
        setEmailError('Please enter valide email and password');
      }
    } catch (error) {
      console.error('Error saving child information:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={[TM.w100, styles.input, TM.borderRadius20]}
        value={email}
        onChangeText={validateEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={[TM.w100, styles.input, TM.borderRadius20]}
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />

      <Text style={styles.label}>Age</Text>
      <View style={[TM.w100, TM.px3, TM.bgBlack, styles.pickerContainer]}>
        <Picker
          selectedValue={age}
          onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
          style={[styles.picker]}>
          <Picker.Item label="5" value={5} />
          <Picker.Item label="6" value={6} />
          <Picker.Item label="7" value={7} />
        </Picker>
      </View>

      <Text style={styles.label}>Gender</Text>
      <View style={[TM.w100, TM.px3, TM.bgBlack, styles.pickerContainer]}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
          style={[TM.w100, styles.picker, TM.borderRadius20]}>
          <Picker.Item
            style={[TM.w100, styles.item, TM.borderRadius20]}
            label="Male"
            value="male"
          />
          <Picker.Item
            style={[TM.w100, styles.item, TM.borderRadius20]}
            label="Female"
            value="female"
          />
        </Picker>
      </View>
      <TouchableOpacity
        style={[
          TM.p3,
          styles.bgBlue,
          TM.justAlign,
          styles.btn,
          TM.w100,
          TM.borderRadius20,
        ]}
        onPress={saveChildInfo}>
        <Text style={[TM.fWhite]}> LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('RegisterScreen')}
        style={[TM.h4, TM.mt5]}>
        <Text style={[styles.reg, TM.txtAlignCenter]}>
          If you don't have account Register
        </Text>
      </TouchableOpacity>
      <View style={[TM.flexDirRow, TM.h12]}>
        <TouchableOpacity
          onPress={() => langHandler(1)}
          style={[
            TM.mt5,
            TM.w20,
            selectLang === 1 ? styles.bgBlue : TM.bgPurlLight,
            TM.borBotLeftRad20,
            TM.borTopLeftRad20,
            TM.justAlign,
          ]}>
          <Text style={[TM.txtAlignCenter, TM.f20, TM.fWhite]}>සිං</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => langHandler(0)}
          style={[
            TM.mt5,
            TM.w20,
            selectLang === 0 ? styles.bgBlue : TM.bgPurlLight,
            TM.borTopRightRad20,
            TM.borBotRightRad20,
            TM.justAlign,
          ]}>
          <Text style={[TM.txtAlignCenter, TM.f20, TM.fWhite]}>Eng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#0b0c6198',
  },
  picker: {
    width: '100%',
    height: 60,
    color: '#fff',
  },
  title: {
    fontSize: 23,
    color: '#1f1d1c',
    fontWeight: '500',
  },
  input: {borderColor: '#0b0c61', borderWidth: 1, color: '#0c0c0c'},
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  label: {
    color: '#1a1074',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 0,
    marginBottom: 2,
  },
  reg: {
    color: '#0f6ae0',
    fontSize: 16,
    fontWeight: '600',
  },
  labelT: {
    color: '#1a1074',
    fontSize: 16,
    marginBottom: 5,
  },
  bgBlue: {
    backgroundColor: '#0b0c61fb',
  },
  btn: {
    marginTop: 20,
    height: 60,
  },
});

export default LoginForm;
