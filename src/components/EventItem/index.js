import React from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import style from './style';

export default EventItem = ({event}) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={style.container}
      onPress={() => navigate('Event', {event})}>
      <ImageBackground source={{uri: event?.cover}} style={style.cover} />
      <View style={style.infoContainer}>
        <Text style={style.date}>{event?.headline}</Text>
        <Text style={style.title}>{event?.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
