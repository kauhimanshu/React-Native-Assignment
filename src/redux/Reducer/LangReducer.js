import { languages } from "../../Localization/language";

const INITIAL_STATE = languages.english;
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'language_data':
      return action.payload;
    default: 
     return state;
  }
};