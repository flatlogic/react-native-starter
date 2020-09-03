import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { colors, fonts } from '../styles';

export default function RNSCard ({ children, title, description, header, footer, style }) {
  return (
    <View style={[styles.card, style]}>
      { header ? (
        <View>{header}</View>
        ) : title && (
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
            {description && (
              <Text style={styles.headerDescription}>{description}</Text>
            )}
          </View>
        )
      }
      <View style={[styles.content, !title && !description && !header && {paddingTop: 20}]}>
        {children}
      </View>
      <View>{footer}</View>
    </View>
  )
}



const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
  },
  header: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
  headerDescription: {
    fontFamily: fonts.primaryRegular,
    color: '#7B7B7B',
    fontSize: 14,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  }
})
