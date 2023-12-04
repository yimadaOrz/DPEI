import {
    ENGLISH,
    CHINESE
    } from '../actions/type';
    
    const initState = {
        isEnglish:false,
        isChinese:true
    };
    
    export default function ( state = initState, action){
      switch(action.type){
        case ENGLISH:
          return {
            ...state,
            isEnglish:true,
            isChinese:false
          };
          case CHINESE:
            return {
              ...state,
              isChinese:true,
              isEnglish:false,
            };
          default:
            return state;    
    }
      }
     