import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AxTheme from '../assets/theme/AxTheme';

const ChildInfoForm = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(5);
  const [gender, setGender] = useState('male');

  const SCREEN_WIDTH = Dimensions.get('screen').width;
  const SCREEN_HEIGHT = Dimensions.get('screen').height;
  const widthSize = {width: SCREEN_WIDTH * 0.9};

  const saveChildInfo = async () => {
    try {
      const childInfo = {name, age, gender};
      await AsyncStorage.setItem('childInfo', JSON.stringify(childInfo));
      console.log('Child information saved to AsyncStorage:', childInfo);
      navigation.navigate('AttentionScreen');
    } catch (error) {
      console.error('Error saving child information:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={[AxTheme.h10]}>
        <Text style={styles.title}>Fill You Information</Text>
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={[widthSize, styles.input]}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.label}>Age</Text>
      <Picker
        selectedValue={age}
        onValueChange={(itemValue, itemIndex) => setAge(itemValue)}
        style={[widthSize, styles.picker]}>
        <Picker.Item style={[widthSize, styles.item]} label="5" value={5} />
        <Picker.Item style={[widthSize, styles.item]} label="6" value={6} />
        <Picker.Item style={[widthSize, styles.item]} label="7" value={7} />
      </Picker>

      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        style={[widthSize, styles.picker]}>
        <Picker.Item
          style={[widthSize, styles.item]}
          label="Male"
          value="male"
        />
        <Picker.Item
          style={[widthSize, styles.item]}
          label="Female"
          value="female"
        />
      </Picker>
      <View style={[widthSize, styles.btn]}>
        <Button color="#9c0595" title="Next" onPress={saveChildInfo} />
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
  title: {
    fontSize: 23,
    color: '#9c0595',
  },
  input: {borderColor: '#e667df', borderWidth: 1, color: '#74106f'},
  cardStyles: {
    width: '100%',
    height: 165,
    alignItems: 'center',
  },
  label: {
    color: '#74106f',
    fontSize: 16,
    marginBottom: 5,
    marginTop: 20,
  },
  picker: {
    backgroundColor: '#e667df',
  },
  item: {},
  btn: {
    marginTop: 40,
    height: 35,
  },
});

export default ChildInfoForm;
