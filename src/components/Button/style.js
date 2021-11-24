import {StyleSheet} from 'react-native';

import theme from '../../theme.json';

export default StyleSheet.create({
  button: {
    backgroundColor: theme.primary,
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.light,
    alignSelf: 'center',
    fontSize: 18,
  },
});
