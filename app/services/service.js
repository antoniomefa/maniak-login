import {URL} from '../utils/routes';
//import { savePlace } from './storage/placeStorage';

export const service = async (method, path, payload, isLogin) => {
  const requestBody = JSON.stringify(payload);

  var headers = {
    'Content-Type': 'application/json',
  };

  if (!isLogin) {
    const token = 'FXxqzkVb4yPgpufkHZxLNkfX2vpFdTbzwWnQ36'; //await getToken();
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  var requestConfig = {
    method,
    headers,
  };

  if (method === 'POST') {
    requestConfig = {
      ...requestConfig,
      body: requestBody,
    };
  }

  const response = await fetch(`${URL}${path}`, requestConfig);
  try {
    const json = await response.json();
    // response.ok devuelve true si el status está entre 200 y 299
    if (response.ok) {
      if (json.token) {
        //saveToken(json.jwt);
      }
      return {
        status: response.ok,
        body: json,
      };
    } else {
      return {
        status: response.ok,
        body: response.status,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
