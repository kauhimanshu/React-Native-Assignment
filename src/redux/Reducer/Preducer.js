import {LOADING_START, LOADING_STOP} from '../action/Constant';

const initialState = {
  loading: false,
};

const loader = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case LOADING_START:
      return {
        loading: true,
      };
    case LOADING_STOP:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default loader;
