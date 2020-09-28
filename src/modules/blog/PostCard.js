import React from 'react';
import HTML from 'react-native-render-html';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';

const githubIcon = require('../../../assets/images/icons/github.png');
import twitterIcon from '../../../assets/images/icons/twitter.png';
import facebookIcon from '../../../assets/images/icons/facebook.png';

const getPostImg = (post) => {
  const postImg = post['yoast_head'];
  return postImg.match(/https:\/\/\w+.\w+\/blog\/wp-content\/uploads\/[A-Za-z0-9-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]+.\w+/)[0];
}


export default ({ post, onPress }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.title}>
      {post.title.rendered || 'Unknown Deal'}
    </Text>
    <View style={{alignSelf: 'stretch', flexDirection: 'row', justifyContent: 'center'}}>
      <Image resizeMode="contain" source={{ uri: getPostImg(post)}} style={styles.canvas}/>
      <View style={{justifyContent: 'center', width: '30%', alignItems: 'center'}}>
        <Image source={githubIcon} style={{marginBottom: 20}}/>
        <Image source={twitterIcon} style={{marginBottom: 20}}/>
        <Image source={facebookIcon}/>
      </View>
    </View>
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
      tagsStyles={{'p': {margin: 0}}}
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
    fontSize: 18,
    fontWeight: '700',
    color: '#686868',
    textTransform: 'uppercase',
  },
  canvas: {
    width: '60%',
    height: 200
  },
});
