import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card'
import Button from '../../components/Button'
import { colors, fonts } from '../../styles';

const headerImg = require('../../../assets/images/avatar.png')


export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.title}>Default</Text>
      <Card>
        <Text>Today we are going to provide you with excellent articles to read in December. Enjoy fresh ideas, tips, and tricks from the JavaScript world.</Text>
      </Card>
      <Text style={[styles.title, {paddingTop: 20}]}>Header</Text>
      <Card title={'Title'} description={"Description"}>
        <Text>Today we are going to provide you with excellent articles to read in December. Enjoy fresh ideas, tips, and tricks from the JavaScript world.</Text>
      </Card>
      <Text style={[styles.title, {paddingTop: 20}]}>Custom Header</Text>
      <Card header={<View><View><Image source={headerImg} style={styles.headerImg}/></View><View style={{padding: 20}}><Text style={styles.headerTitle}>Title</Text></View></View>}>
        <Text>Today we are going to provide you with excellent articles to read in December. Enjoy fresh ideas, tips, and tricks from the JavaScript world.</Text>
      </Card>
      <Text style={[styles.title, {paddingTop: 20}]}>Footer</Text>
      <Card footer={<View style={styles.footerContainer}><Button style={{marginRight: 10, flex: 1}} caption={"Cancel"} bordered primary /><Button primary caption={"Apply"} style={{flex: 1}} /></View>}>
        <Text>Today we are going to provide you with excellent articles to read in December. Enjoy fresh ideas, tips, and tricks from the JavaScript world.</Text>
      </Card>
      <Text style={[styles.title, {paddingTop: 20}]}>Footer & Header</Text>
      <Card title={"Title"} description={"Description"} footer={<View style={styles.footerContainer}><Button style={{marginRight: 10, flex: 1}} caption={"Cancel"} bordered primary /><Button primary caption={"Apply"} style={{flex: 1}} /></View>} style={{marginBottom: 20}}>
        <Text>Today we are going to provide you with excellent articles to read in December. Enjoy fresh ideas, tips, and tricks from the JavaScript world.</Text>
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
  }
});
