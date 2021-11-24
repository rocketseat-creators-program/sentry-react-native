import types from './types';

export const setEvent = event => {
  return {type: types.SET_EVENT, event};
};
