import {Alert} from 'react-native';
import {URL} from '../utils/routes';
//import { savePlace } from './storage/placeStorage';

export const service = async (method, path, payload, isLogin) => {
  const requestBody = JSON.stringify(payload);

  var headers = {
    'Content-Type': 'application/json',
  };

  if (!isLogin) {
    const token = ''; //await getToken();
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  var requestConfig = {
    method,
    headers,
  };

  if (method === 'POST' || method === 'PUT') {
    requestConfig = {
      ...requestConfig,
      body: requestBody,
    };
  }

  const response = await fetch(`${URL}/${path}`, requestConfig);
  const json = await response.json();

  if (response.ok) {
    // Devuelve true si el status está entre 200 y 299

    if (json.token) {
      //saveToken(json.jwt);
    }

    return {
      status: response.ok,
      body: json,
    };
  } else {
    switch (response.status) {
      case 401: {
        Alert.alert('Sesion finalizada');
        deleteToken();
        break;
      }
      case 403: {
        Alert.alert('Acceso no autorizado');
        deleteToken();
        break;
      }
      default:
        break;
    }
    if (json.error) {
      console.log(`Error: ${json.error}`);
      if (json.message) {
        if (Array.isArray(json.message)) {
          if (
            json.message[0].messages[0].message === 'Username already taken'
          ) {
            Alert.alert('El nombre de usuario o correo ya existe');
          }
          if (json.message[0].messages[0].message === 'Email already taken') {
            Alert.alert('El nombre de usuario o correo ya existe');
          }
          return {
            status: response.ok, // false
            //body: json
          };
        }
      }
      return {
        status: response.ok, // false
        body: json,
      };
    }
  }
};
