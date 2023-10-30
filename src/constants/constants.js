import AsyncStorage from '@react-native-async-storage/async-storage';

const ENDPOINT =
  'https://e647-2402-d000-8100-40a2-b019-63e8-7cf8-4483.ngrok-free.app/';

export const ANY_ENDPOINT =
  'https://e647-2402-d000-8100-40a2-b019-63e8-7cf8-4483.ngrok-free.app/';

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
