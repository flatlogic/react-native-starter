/* eslint-disable class-methods-use-this */
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Agenda } from 'react-native-calendars';

import { colors, fonts } from '../../styles';

class CalendarScreen extends React.Component {
  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  }

  renderItem(item) {
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
              color: colors.primary,
              fontFamily: fonts.primaryRegular,
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <Text
            style={{ color: colors.white, fontFamily: fonts.primaryRegular }}
          >
            {item.time}
          </Text>
        </View>

        <View styleName="horizontal h-start">{labels}</View>
      </View>
    );
  }

  render() {
    const { items, loadItems } = this.props;

    return (
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        theme={{
          dotColor: colors.primaryLight,
          selectedDayBackgroundColor: colors.primaryLight,
          agendaDayTextColor: colors.primaryLight,
          agendaDayNumColor: colors.primaryLight,
          agendaTodayColor: '#4F44B6',
          backgroundColor: colors.background,
          calendarBackground: colors.backgroundLight,
          dayTextColor: colors.white,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundLight,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 10,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

export default CalendarScreen;
