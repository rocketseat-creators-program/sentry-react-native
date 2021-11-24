import {StyleSheet, Dimensions} from 'react-native';

import theme from '../../theme.json';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.dark,
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -50,
    paddingBottom: 150,
  },
  buttonContainer: {
    height: 200,
    justifyContent: 'flex-end',
    position: 'absolute',
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
    paddingBottom: 50,
    bottom: 0,
  },
  cover: {
    width: '100%',
    height: 300,
    opacity: 0.3,
  },
  eventItem: {
    zIndex: 99,
  },
  section: {
    title: {
      color: theme.muted,
      fontSize: 18,
      fontWeight: '700',
      marginVertical: 10,
    },
    text: {
      color: theme.light,
      fontSize: 15,
      marginBottom: 15,
    },
  },
  eventImage: {
    height: 200,
    backgroundColor: theme.dark50,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 15,
  },
});
