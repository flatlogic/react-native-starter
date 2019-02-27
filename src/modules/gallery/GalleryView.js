import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from 'react-native';
import Lightbox from 'react-native-lightbox';

import { colors } from '../../styles';
import { GridRow } from '../../components';

export default function GalleryScreen(props) {
  const _keyExtractor = item =>
    item.id ? `${item.id}` : `${item[0] && item[0].id}`;

  const _renderItem = ({ item, index }) => {
    console.log(item);
    if (index === 0) {
      return (
        <Lightbox key={item[0].id}>
          <Image style={styles.topImage} source={{ uri: item[0].link }} />
        </Lightbox>
      );
    }

    return (
      <View key={item[0].id} style={styles.imagesRow}>
        {item.map(singleItem => (
          <View key={singleItem.id} style={styles.imageContainer}>
            <Lightbox>
              <Image style={styles.image} source={{ uri: singleItem.link }} />
            </Lightbox>
          </View>
        ))}
      </View>
    );
  };

  let isFirstArticle = true;
  const groupedData = GridRow.groupByRows(props.images, 3, () => {
    if (isFirstArticle) {
      isFirstArticle = false;
      return 3;
    }

    return 1;
  });

  return (
    <FlatList
      style={styles.container}
      onRefresh={props.refreshImages}
      refreshing={props.images.length === 0 && props.isLoading}
      data={groupedData}
      keyExtractor={_keyExtractor}
      renderItem={_renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topImage: {
    flex: 1,
    height: 200,
    margin: 5,
    borderRadius: 5,
  },
  imagesRow: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 1,
    padding: 5,
  },
  image: {
    flex: 1,
    height: 100,
    borderRadius: 5,
  },
});
