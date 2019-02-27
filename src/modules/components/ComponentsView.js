import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';

export default function ComponentsScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Radio Group</Text>

        <RadioGroup
          style={styles.demoItem}
          items={['One', 'Two', 'Three']}
          selectedIndex={props.radioGroupsState[0]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 0: index })
          }
        />

        <View
          style={{
            height: 1,
            alignSelf: 'stretch',
            backgroundColor: colors.bluish,
          }}
        />

        <RadioGroup
          underline
          style={styles.demoItem}
          items={['One', 'Two', 'Tree', 'Four']}
          selectedIndex={props.radioGroupsState[1]}
          onChange={index =>
            props.setRadioGroupsState({ ...props.radioGroupsState, 1: index })
          }
        />
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Buttons</Text>

        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            primary
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            primary
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            primary
            bordered
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            bordered
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            primary
            bordered
            rounded
            caption="Button"
            onPress={() => {}}
          />
          <Button
            style={styles.demoButton}
            secondary
            bordered
            rounded
            caption="Button"
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Action Buttons</Text>

        <View style={styles.demoButtonsContainer}>
          <Button
            style={styles.demoButton}
            action
            bgColor="#958FDA"
            onPress={() => {}}
          >
            <Text>
              <Icon name="chevron-thin-right" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#4F44C1"
            onPress={() => {}}
          >
            <Text>
              <Icon name="controller-paus" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#3CD4A0"
            onPress={() => {}}
          >
            <Text>
              <Icon name="magnifying-glass" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#EF1F78"
            onPress={() => {}}
          >
            <Text>
              <Icon name="paper-plane" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#52B1F4"
            onPress={() => {}}
          >
            <Text>
              <Icon name="flash" size={20} color="white" />
            </Text>
          </Button>
          <Button
            style={styles.demoActionButton}
            action
            bgColor="#19D4E6"
            onPress={() => {}}
          >
            <Text>
              <Icon name="reply-all" size={20} color="white" />
            </Text>
          </Button>
        </View>
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Icons</Text>

        <View style={styles.demoIconsContainer}>
          <Icon
            style={styles.demoIcon}
            name="basecamp"
            size={25}
            color="#5759CB"
          />
          <Icon style={styles.demoIcon} name="note" size={25} color="#5759CB" />
          <Icon
            style={styles.demoIcon}
            name="flashlight"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={styles.demoIcon}
            name="app-store"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={styles.demoIcon}
            name="baidu"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={styles.demoIcon}
            name="facebook"
            size={25}
            color="#5759CB"
          />
        </View>
        <View style={styles.demoIconsContainer}>
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="bookmark"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="chat"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="behance"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="calendar"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="camera"
            size={25}
            color="#5759CB"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="flattr"
            size={25}
            color="#5759CB"
          />
        </View>
        <View style={styles.demoIconsContainer}>
          <Icon
            style={styles.demoIcon}
            name="colours"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="compass"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="credit"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="cycle"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="database"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={styles.demoIcon}
            name="flickr"
            size={25}
            color="#EF1F78"
          />
        </View>
        <View style={styles.demoIconsContainer}>
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="documents"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="download"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="dribbble"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="drop"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="erase"
            size={25}
            color="#EF1F78"
          />
          <Icon
            style={[styles.demoIcon, { opacity: 0.5 }]}
            name="foursquare"
            size={25}
            color="#EF1F78"
          />
        </View>

        <Button
          style={[styles.demoButton, { width: 200, alignSelf: 'center' }]}
          primary
          bordered
          caption="More Icons"
        />
      </View>

      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Dropdown</Text>

        <Dropdown
          style={{ width: 200, alignSelf: 'center' }}
          onSelect={() => {}}
          items={['option 1', 'option 2']}
        />
      </View>
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
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
});
