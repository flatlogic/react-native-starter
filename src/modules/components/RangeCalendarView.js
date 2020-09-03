import React from 'react';
import { StyleSheet, Text, ScrollView, Platform, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import Card from '../../components/Card';
import { colors, fonts } from '../../styles';

export default function ComponentsScreen({ items, loadItems }) {
  const [days, setDays] = React.useState({});
  const daysObj = {};

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  const renderItem = item => {
    const labels =
      item.labels &&
      item.labels.map(label => (
        <View
          key={`label-${label}`}
          style={{
            padding: 5,
            backgroundColor:
              label === 'Urgent' ? colors.primary : colors.secondary,
            borderRadius: 3,
          }}
        >
          <Text style={{ color: 'white' }}>{label}</Text>
        </View>
      ));

    return (
      <View style={styles.item}>
        <View>
          <Text
            style={{
              color: '#48506B',
              fontFamily: fonts.primaryRegular,
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text style={{ color: '#9B9B9B', fontFamily: fonts.primaryRegular }}>
            {item.time}
          </Text>
        </View>

        <View styleName="horizontal h-start">{labels}</View>
      </View>
    );
  };

  const periodAddDay = day => {
    const currentDay = +day.dateString.split('-')[2],
      currentMonth = +day.dateString.split('-')[1];

    if (!Object.keys(days).length) {
      Object.assign(daysObj, {
        [day.dateString]: {
          startingDay: true,
          color: '#4F44B6',
          textColor: colors.white,
        },
      });
      setDays({
        [day.dateString]: {
          startingDay: true,
          color: '#4F44B6',
          textColor: colors.white,
        },
      });
    } else {
      // let i = 0;
      // for (let prop in daysObj) {
      //   ++i;
      //   if (i === 1) {
      //     continue;
      //   }
      //   delete daysObj[prop];
      // }
      let firstDate = +Object.keys(days)[0].split('-')[2];
      for (let i = ++firstDate; i <= currentDay; i++) {
        if (i === currentDay) {
          setDays({
            ...daysObj,
            [day.dateString.replace(
              /-[0-31]+$/,
              `-${i < 10 ? `0${i}` : `${i}`}`,
            )]: {
              endingDay: true,
              color: '#4F44B6',
              textColor: colors.white,
            },
          });
        } else {
          const date = day.dateString.replace(
            /-[0-9]+$/,
            `-${i < 10 ? `0${i}` : `${i}`}`,
          );
          Object.assign(daysObj, {
            ...days,
            [date]: {
              color: '#829BF8',
              textColor: colors.white,
            },
          });
        }
      }
    }
  };

  React.useEffect(() => {
    console.log(days);
  }, [days]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Text style={styles.title}>Default</Text>
      <Calendar
        markingType={'period'}
        onDayPress={day => periodAddDay(day)}
        markedDates={{
          '2020-07-28': { marked: true, dotColor: '#FF1358', },
          '2020-07-31': { marked: true, dotColor: '#3CD4A0', },
          '2020-08-09': { marked: true, dotColor: '#3CD4A0', },
          '2020-08-05': { marked: true, dotColor: '#FF1358', },
          '2020-08-14': { marked: true, dotColor: '#3CD4A0', },
          '2020-09-04': { marked: true, dotColor: '#FF1358', },
          ...days,
        }}
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
      {/*<Agenda*/}
      {/*  items={items}*/}
      {/*  loadItemsForMonth={loadItems}*/}
      {/*  renderItem={renderItem}*/}
      {/*  renderEmptyDate={renderEmptyDate}*/}
      {/*  rowHasChanged={rowHasChanged}*/}
      {/*  theme={{*/}
      {/*    dotColor: colors.primaryLight,*/}
      {/*    selectedDayBackgroundColor: colors.primaryLight,*/}
      {/*    agendaDayTextColor: colors.primaryLight,*/}
      {/*    agendaDayNumColor: colors.primaryLight,*/}
      {/*    agendaTodayColor: '#4F44B6',*/}
      {/*    backgroundColor: '#F1F1F8',*/}
      {/*  }}*/}
      {/*/>*/}
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
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: '#3CD4A0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  itemTwoContent: {
    padding: 20,
    position: 'relative',
    marginHorizontal: Platform.OS === 'ios' ? -15 : 0,
    height: 150,
  },
  itemTwoTitle: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
  },
});
