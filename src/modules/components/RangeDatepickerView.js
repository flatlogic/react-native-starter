import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';

import Card from '../../components/Card';
import Input from '../../components/TextInput';
import Icon from 'react-native-vector-icons/AntDesign';

import { colors, fonts } from '../../styles';
import { Calendar } from 'react-native-calendars';

export default function ComponentsScreen(props) {
  const [isCalendarVisible, setCalendarVisible] = React.useState("none")
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Default'}>
        <View style={styles.demoInputContainer}>
          <Input
            dark
            placeholder={'dd/mm/yyyy'}
            onChangeText={e => setCalendarVisible("flex")}
          />
          <View style={{display: isCalendarVisible}}>
            <Calendar
              markedDates={{
                '2020-07-28': { marked: true, dotColor: '#FF1358', },
                '2020-07-31': { marked: true, dotColor: '#3CD4A0', },
                '2020-08-09': { marked: true, dotColor: '#3CD4A0', },
                '2020-08-05': { marked: true, dotColor: '#FF1358', },
                '2020-08-14': { marked: true, dotColor: '#3CD4A0', },
                '2020-09-04': { marked: true, dotColor: '#FF1358', },
              }}
              onDayPress={day => console.log(day)}
              theme={{
                'stylesheet.day.period': {
                  base: {
                    width: 38,
                    height: 34,
                    alignItems: 'center',
                    borderRadius: 50,
                  },
                  leftFiller: {
                    height: 34,
                    flex: 1,
                    backgroundColor: '#829BF8',
                  },
                },
                textMonthFontWeight: '700',
                monthTextColor: '#4F44B6',
                arrowColor: '#829BF8',
                'stylesheet.calendar.header': {
                  header: {
                    borderBottomWidth: 1,
                    borderBottomColor: '#E6E6E6',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 4,
                    marginHorizontal: -5,
                    flex: 1,
                  },
                },
                'stylesheet.calendar.main': {
                  container: {
                    paddingLeft: 5,
                    paddingRight: 5,
                    backgroundColor: '#fff',
                    paddingTop: 20,
                    paddingBottom: 24,
                  },
                },
              }}
            />
          </View>
        </View>
      </Card>
      <Card title={'Accessories'} style={{ marginTop: 20 }}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Icon Left</Text>
          <Input
            dark
            placeholder={'dd/mm/yyyy'}
            type={'bordered'}
            style={{marginTop: 15}}
            iconLeft={<Icon name={'staro'} size={18} color={colors.primary} />}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Icon Right</Text>
          <Input
            dark
            placeholder={'dd/mm/yyyy'}
            type={'bordered'}
            style={{marginTop: 15}}
            iconRight={<Icon name={'staro'} size={18} color={colors.primary} />}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={[styles.componentSectionTitle, {marginBottom: 15}]}>Label</Text>
          <Input
            dark
            placeholder={'dd/mm/yyyy'}
            type={'bordered'}
            label={'Place your text'}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Caption</Text>
          <Input
            dark
            placeholder={'dd/mm/yyyy'}
            type={'bordered'}
            caption={'Place your text'}
            style={{marginTop: 15}}
          />
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Caption Icon</Text>
          <Input
            dark
            placeholder={'dd/mm/yyyy'}
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
