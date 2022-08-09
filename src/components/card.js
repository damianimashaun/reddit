import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const s = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    paddingHorizontal: 10,
    fontSize: 16,
    paddingBottom: 20,
    paddingTop: 2,
  },
  time: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  user: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 5,
  },
});

const MiniCard = props => {
  const {title, time, author, description, img, onPress} = props;
  const d = new Date(time);

  return (
    <TouchableOpacity
      onPress={() => onPress({title, time, author, description, img})}>
      <View style={s.container}>
        <Text style={s.time}>{d.toDateString()}</Text>
        <Text style={s.title}>{title}</Text>
        <Text style={s.user}>{author}</Text>
        {/*
       Displaying the description in the flatlist makes it hard to use
      <Text>{description}</Text>
      */}
      </View>
    </TouchableOpacity>
  );
};

export {MiniCard};
