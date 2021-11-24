import React from 'react';
import {FlatList, Text, SafeAreaView, View} from 'react-native';
import {useSelector} from 'react-redux';

import EventItem from '../../components/EventItem';
import style from './style';

export default Home = () => {
  const {events} = useSelector(state => state.event);

  return (
    <SafeAreaView style={style.container}>
      <FlatList
        style={style.list}
        ListHeaderComponent={() => (
          <View style={style.listHeader}>
            <Text style={style.title}>Eventos Populares</Text>
          </View>
        )}
        stickyHeaderIndices={[0]}
        data={events}
        renderItem={({item}) => <EventItem event={item} />}
      />
    </SafeAreaView>
  );
};
