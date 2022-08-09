import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';

const s = StyleSheet.create({
  container: {
    margin: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    paddingHorizontal: 15,
    fontSize: 16,
    paddingBottom: 20,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    paddingHorizontal: 15,
  },
  user: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
  description: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  descriptionBox: {
    margin: 15,
    backgroundColor: '#fff',
  },
  authorBar: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  noImage: {
    paddingLeft: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  imageBox: {
    paddingBottom: 10,
  },
  commentBox: {
    paddingLeft: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
});

const Post = ({route}) => {
  const {title, time, author, description, img} = route.params;
  const d = new Date(time);
  const comments = [...Array(20).keys()];

  const renderComments = ({item}) => {
    return (
      <View style={s.commentBox}>
        <Text>this is comment {item + 1}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => {
          return (
            <ScrollView>
              <View style={s.authorBar}>
                <Text style={s.user}>{author}</Text>
                <Text style={s.time}>{d.toDateString()}</Text>
              </View>
              <View style={s.imageBox}>
                {!!img && <Image source={{uri: img}} />}
                {!img && <Text style={s.noImage}>No Image</Text>}
              </View>
              <Text style={s.title}>{title}</Text>
              <View style={s.descriptionBox}>
                <Text style={s.description}>{description || '. . . '}</Text>
              </View>
            </ScrollView>
          );
        }}
        data={comments}
        renderItem={renderComments}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export {Post};
