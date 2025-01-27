import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Card from '../../components/Card';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.title}>CATEGORY</Text>
      <Card>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>H1 Headline</Text>
          <Text style={{fontSize: 40}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>H2 Headline</Text>
          <Text style={{fontSize: 36}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>H3 Headline</Text>
          <Text style={{fontSize: 32}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>H4 Headline</Text>
          <Text style={{fontSize: 28}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>H5 Headline</Text>
          <Text style={{fontSize: 24}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>H6 Headline</Text>
          <Text style={{fontSize: 20}}>Text</Text>
        </View>
      </Card>
      <Card style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>S1 Subtitle</Text>
          <Text style={{fontSize: 16}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>S2 Subtitle</Text>
          <Text style={{fontSize: 14}}>Text</Text>
        </View>
      </Card>
      <Card style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>P1 Paragraph</Text>
          <Text style={{fontSize: 16}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>P2 Paragraph</Text>
          <Text style={{fontSize: 14}}>Text</Text>
        </View>
      </Card>
      <Card style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>C1 Caption</Text>
          <Text style={{fontSize: 12}}>Text</Text>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>C2 Caption</Text>
          <Text style={{fontSize: 12}}>Text</Text>
        </View>
      </Card>
      <Card style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Label</Text>
          <Text style={{fontSize: 12}}>Text</Text>
        </View>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 18,
    paddingBottom: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  headerTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
  },
  headerImg: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  footerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    flex: 1,
  },
  demoInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#1C1C1C',
    fontSize: 16
  },
});
