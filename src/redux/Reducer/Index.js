import {combineReducers} from 'redux';
import { LOGOUT_SUCCESS } from '../action/Constant';
import authReducer from './AuthReducer';
import LangReducer from './LangReducer';
import themeReducer from './ThemeReducer';



const appReducer = combineReducers({
  auth: authReducer,
  theme: themeReducer,
  language: LangReducer,
  
  
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCCESS) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer;