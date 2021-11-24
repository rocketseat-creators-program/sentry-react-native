import {StyleSheet, Dimensions} from 'react-native';
import theme from '../../theme.json';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.dark50,
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    flexDirection: 'row',
  },
  infoContainer: {
    // screen width - (cover width + all paddings)
    width: Dimensions.get('screen').width - (90 + 100),
  },
  cover: {
    width: 90,
    height: 90,
    borderRadius: 20,
    backgroundColor: theme.muted,
    marginRight: 20,
    overflow: 'hidden',
  },
  date: {
    fontWeight: '700',
    fontSize: 18,
    color: theme.primary,
    marginBottom: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: theme.light,
  },
});
