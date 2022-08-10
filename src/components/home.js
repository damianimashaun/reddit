import React, {useCallback} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useRedditPosts} from '../hooks/useRedditPosts';
import {MiniCard} from './card';

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '600',
    paddingVertical: 10,
  },
});

const Home = ({navigation}) => {
  const {posts, isLoading, retryFetchPosts} = useRedditPosts();

  const onPress = useCallback(
    data => {
      navigation.navigate('Post', {...data});
    },
    [navigation],
  );

  const RenderItem = useCallback(
    ({item}) => {
      const {title, created_utc, author, selftext, preview = {}} = item;

      const img =
        preview.images && preview.images.length
          ? preview.images[0]?.resolutions[0]?.url || ''
          : '';

      return (
        <MiniCard
          title={title}
          time={created_utc}
          author={author}
          description={selftext}
          img={img}
          onPress={onPress}
        />
      );
    },
    [onPress],
  );

  const canRetry = !isLoading && !posts.length;
  const canShowPosts = !isLoading && !!posts.length;

  return (
    <SafeAreaView style={styles.flexOne}>
      <StatusBar />
      <Text style={styles.title}>/r/ReactNative</Text>
      <View style={styles.home}>
        {isLoading && <ActivityIndicator size="large" />}
        {canRetry && (
          <TouchableOpacity onPress={retryFetchPosts}>
            <Text>Request failed. Tap to retry</Text>
          </TouchableOpacity>
        )}
        {canShowPosts && (
          <FlatList
            data={posts}
            renderItem={RenderItem}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export {Home};
