import {StyleSheet} from 'react-native';
import theme from '../../theme.json';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.dark,
    flex: 1,
  },
  list: {
    paddingHorizontal: 20,
  },
  listHeader: {
    backgroundColor: theme.dark,
    paddingVertical: 20,
  },
  title: {
    fontSize: 35,
    color: theme.light,
    fontWeight: '500',
  },
});
