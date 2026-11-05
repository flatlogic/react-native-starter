import React, { useState } from 'react';
import { Modal, Pressable, View, Text, StyleSheet } from 'react-native';
import { ImageZoom } from '@likashefqet/react-native-image-zoom';

export default function ImageLightbox({ children }) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Pressable accessibilityLabel="Open image" onPress={() => setVisible(true)}>{children}</Pressable>
      <Modal visible={visible} onRequestClose={() => setVisible(false)} transparent={false}>
        <View style={styles.viewer}>
          <ImageZoom uri={children.props.source.uri} minScale={1} maxScale={5} isDoubleTapEnabled />
          <Pressable style={styles.close} accessibilityRole="button" accessibilityLabel="Close image" onPress={() => setVisible(false)}><Text style={styles.label}>Close</Text></Pressable>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  viewer: { flex: 1, backgroundColor: 'black' },
  close: { position: 'absolute', top: 60, right: 20, padding: 12 },
  label: { color: 'white', fontSize: 18 },
});
