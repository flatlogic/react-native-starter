import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card'
import Button from '../../components/Button'
import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={"Default"}>
        <View style={styles.demoDrawerContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <Button caption={"toggle drawer"} style={{marginTop: 15}} onPress={() => props.navigation.toggleDrawer()}/>
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
    textTransform: 'uppercase'
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
  demoDrawerContainer: {
    flex: 1,
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#1C1C1C',
    fontSize: 16
  },
});
