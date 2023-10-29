import AsyncStorage from '@react-native-async-storage/async-storage';

const ENDPOINT =
  'https://fa78-2402-d000-8100-df84-9d70-b320-6f8a-2e49.ngrok-free.app/';

export const ANY_ENDPOINT =
  'https://fa78-2402-d000-8100-df84-9d70-b320-6f8a-2e49.ngrok-free.app/';

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
