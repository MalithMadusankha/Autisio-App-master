import AsyncStorage from '@react-native-async-storage/async-storage';
// video
const ENDPOINT =
  'https://3a7e-2402-d000-8100-1be7-11db-dbc1-8be3-f4e.ngrok-free.app/';
// analysis
export const ANY_ENDPOINT = 'https://eight-things-appear.loca.lt/';

export const ReadUser = async () => {
  try {
    const value = await AsyncStorage.getItem('childInfo');
    if (value !== null) {
      console.log('v ', value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const ReadLanguage = async () => {
  try {
    const value = await AsyncStorage.getItem('language');
    if (value !== null) {
      console.log('v ', value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
};

export const SaveLanguage = async num =>
  await AsyncStorage.setItem('language', JSON.stringify(num));

export default ENDPOINT;
