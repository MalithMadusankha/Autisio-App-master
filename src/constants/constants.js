import AsyncStorage from '@react-native-async-storage/async-storage';

const ENDPOINT =
  'https://8234-2402-d000-8100-40a2-35fc-b3ab-cefe-cb93.ngrok-free.app/';

export const ANY_ENDPOINT =
  'https://8234-2402-d000-8100-40a2-35fc-b3ab-cefe-cb93.ngrok-free.app/';

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

export default ENDPOINT;
