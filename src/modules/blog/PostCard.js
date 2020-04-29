import React from 'react';
import HTML from 'react-native-render-html';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

export default ({ post, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.title}>
      {post.title.rendered || 'Unknown Deal'}
    </Text>
    <HTML
      html={post.excerpt.rendered}
      imagesMaxWidth={Dimensions.get('window').width}
      ignoreNodesFunction={node => {
        if (
          node &&
          node.attribs &&
          node.attribs.class &&
          node.attribs.class.includes('share')
        ) {
          return true;
        }

        return false;
      }}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    marginVertical: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});
