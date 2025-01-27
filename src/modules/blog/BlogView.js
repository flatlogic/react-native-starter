import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import { colors, fonts } from '../../styles';

import PostCard from './PostCard';

const PostsView = ({
  posts,
  isPostsLoading,
  postsLoadingError,
  loadPosts,
  loadNextPosts,
  navigation,
  isPostsSubloading,
}) => {
  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostCard
            key={item.id}
            post={item}
            onPress={() =>
              navigation.navigate('Post', {
                item,
              })
            }
          />
        )}
        keyExtractor={item => '' + item.id}
        ListEmptyComponent={
          <View style={styles.noPostsContainer}>
            <Text style={styles.noPostsText}>No Posts Yet</Text>
          </View>
        }
        refreshing={isPostsLoading}
        onRefresh={() => loadPosts()}
        showsVerticalScrollIndicator={false}
        onEndReached={loadNextPosts}
        ListFooterComponent={
          <View style={styles.footer}>
            {isPostsSubloading && (
              <ActivityIndicator color="grey" size="large" />
            )}
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: { flex: 1, marginHorizontal: 20},
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  header: {
    fontSize: 25,
  },
  noPostsContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  noPostsText: {},
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});

export default PostsView;
