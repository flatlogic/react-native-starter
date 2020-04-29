import React from 'react';
import HTML from 'react-native-render-html';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

export default (props) => {
  const post = props.route.params.item;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <HTML
          html={post.content.rendered}
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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  helperText: {
    fontWeight: '100',
    fontSize: 15,
  },
});
