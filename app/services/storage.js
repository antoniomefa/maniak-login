import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem('@token', token);
  } catch (e) {
    console.log('Error al guardar el Token: ' + e);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    if (token !== null) {
      return token;
    }
  } catch (e) {
    console.log('Error al guardar el Token: ' + e);
  }
};

export const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem('@token');
  } catch (e) {
    console.log('Error al borrar el Token: ' + e);
  }
};
