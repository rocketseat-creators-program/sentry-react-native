import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, ScrollView, View, ImageBackground} from 'react-native';

import style from './style';

import EventItem from '../../components/EventItem';
import Button from '../../components/Button';

import gradientBackground from '../../assets/gradient-bg.png';

export default EventPage = () => {
  const route = useRoute();

  const {event} = route.params;

  return (
    <View style={style.container}>
      <ScrollView style={style.container}>
        <ImageBackground
          style={style.cover}
          source={{
            uri: event?.cover,
          }}
        />

        <View style={style.innerContainer}>
          <View>
            <EventItem style={style.eventItem} event={event} />
            <Text style={style.section.title}>SOBRE O EVENTO</Text>
            <Text style={style.section.text}>{event?.about}</Text>
          </View>

          {event?.photos?.map((uri, index) => (
            <ImageBackground
              key={index}
              style={style.eventImage}
              source={{
                uri,
              }}
            />
          ))}
        </View>
      </ScrollView>
      <ImageBackground
        source={gradientBackground}
        style={style.buttonContainer}
        resizeMode="stretch">
        <Button />
      </ImageBackground>
    </View>
  );
};
