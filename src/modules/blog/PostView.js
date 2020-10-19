import React, {useEffect} from 'react';
import HTML from 'react-native-render-html';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import Avatar from '../../components/Avatar'

export default (props) => {
  const [avatarUrl, setAvatarUrl] = React.useState(null);
  const post = props.route.params.item;

  useEffect(() => {
    const currentAuthor = post._links.author[0].href;
    fetch(currentAuthor)
      .then(res => res.json())
      .then(author => setAvatarUrl(author['yoast_head'].match(/https:\/\/secure.gravatar.com\/avatar\/[A-Za-z0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]+/)[0]))
    console.log('kek', avatarUrl)
  }, [avatarUrl])

  console.log(avatarUrl)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.author}>
          <Avatar style={{marginRight: 15}} src={{uri: `${avatarUrl}`}} lg />
          <Text style={{fontSize: 18, color: '#686868', textTransform: 'uppercase', fontWeight: 'bold', flex: 1}}>{post.title.rendered}</Text>
        </View>
        <HTML
          html={post.content.rendered}
          imagesMaxWidth={Dimensions.get('window').width}
          tagsStyles={{h2: {textTransform: 'uppercase', color: '#686868'}}}
          imagesInitialDimensions={{width: 200}}
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
    paddingTop: 0,
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
  author: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
