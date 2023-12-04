import axios from 'axios';

import {
  ENGLISH,
  CHINESE
} from '../actions/type';



export const setEnglish = (payload) => {
    return {
      type: ENGLISH,
      payload: payload
    };
  };


  export const setChinese = (payload) => {
    return {
      type: CHINESE,
      payload: payload
    };
  };

