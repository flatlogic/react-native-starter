import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card';
import Input from '../../components/TextInput';
import Icon from 'react-native-vector-icons/AntDesign';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'State'}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <Input
            dark
            placeholder={'Place your Text'}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            disabled
          />
        </View>
      </Card>
      <Card title={'State'} style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Default</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            type={"bordered"}
            style={{marginTop: 15}}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Disabled</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            disabled
            type={"bordered"}
            style={{marginTop: 15}}
          />
        </View>
      </Card>
      <Card title={'Accessories'} style={{ marginTop: 20 }}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Icon Left</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            type={'bordered'}
            style={{marginTop: 15}}
            iconLeft={<Icon name={'staro'} size={18} color={colors.primary} />}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Icon Right</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            type={'bordered'}
            style={{marginTop: 15}}
            iconRight={<Icon name={'staro'} size={18} color={colors.primary} />}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={[styles.componentSectionTitle, {marginBottom: 15}]}>Label</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            type={'bordered'}
            label={'Place your text'}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Caption</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            type={'bordered'}
            caption={'Place your text'}
            style={{marginTop: 15}}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Caption Icon</Text>
          <Input
            dark
            placeholder={'Place your Text'}
            type={'bordered'}
            style={{marginTop: 15}}
            caption={
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <Icon name={'staro'} color={"#686868"} style={{paddingRight: 5}}/>
                <Text style={{ fontSize: 12, color: '#686868' }}>Place your text</Text>
              </View>
            }
          />
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
    flex: 1,
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#1C1C1C',
    fontSize: 16
  },
});
