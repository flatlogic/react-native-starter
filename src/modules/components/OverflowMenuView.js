import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Menu, Divider, Provider } from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';

import Card from '../../components/Card';
import Button from '../../components/Button'

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Default Overflow Menu'}>
          <Text style={[styles.componentSectionTitle, { marginBottom: 10 }]}>
            Default
          </Text>
          <View>
            <Provider>
              <View
                style={{
                  paddingTop: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Menu
                  visible={visible}
                  onDismiss={closeMenu}
                  anchor={<Button onPress={openMenu}><Text>Show menu</Text></Button>}>
                  <Menu.Item onPress={() => {}} title="Item 1" />
                  <Menu.Item onPress={() => {}} title="Item 2" />
                  <Divider />
                  <Menu.Item onPress={() => {}} title="Item 3" />
                </Menu>
              </View>
            </Provider>
            {/*<ModalDropdown*/}
            {/*  options={['kek', 'you', 'are']}*/}
            {/*  onDropdownWillShow={() => true}*/}
            {/*  onDropdownWillHide={() => true}*/}
            {/*  renderRow={text => (*/}
            {/*    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>*/}
            {/*      <Text>{text}</Text>*/}
            {/*    </View>*/}
            {/*  )}*/}
            {/*>*/}
            {/*  <View>*/}
            {/*    <Button caption={"show menu"} />*/}
            {/*  </View>*/}
            {/*</ModalDropdown>*/}
          </View>
      </Card>
      {/*<Card title={'Style'} style={{marginTop: 20}}>*/}
      {/*  <View style={styles.demoInputContainer}>*/}
      {/*  <Text style={[styles.componentSectionTitle, { flex: 1 }]}>*/}
      {/*    Styled Menu*/}
      {/*  </Text>*/}
      {/*  <Provider>*/}
      {/*    <View>*/}
      {/*      <Menu*/}
      {/*        visible={false}*/}
      {/*        onDismiss={closeMenu}*/}
      {/*        anchor={<Button secondary caption={"show menu"} />}>*/}
      {/*        <Menu.Item onPress={() => {}} title="Item 1" />*/}
      {/*        <Menu.Item onPress={() => {}} title="Item 2" />*/}
      {/*        <Divider />*/}
      {/*        <Menu.Item onPress={() => {}} title="Item 3" />*/}
      {/*      </Menu>*/}
      {/*    </View>*/}
      {/*  </Provider>*/}
      {/*  </View>*/}
      {/*  <View style={styles.demoInputContainer}>*/}
      {/*    <Text style={[styles.componentSectionTitle, { flex: 1 }]}>*/}
      {/*      Styled Backdrop*/}
      {/*    </Text>*/}
      {/*    <Provider>*/}
      {/*      <View>*/}
      {/*        <Menu*/}
      {/*          visible={false}*/}
      {/*          onDismiss={closeMenu}*/}
      {/*          anchor={<Button bgColor={"transparent"} textColor={colors.primary} caption={"show menu"} />}>*/}
      {/*          <Menu.Item onPress={() => {}} title="Item 1" />*/}
      {/*          <Menu.Item onPress={() => {}} title="Item 2" />*/}
      {/*          <Divider />*/}
      {/*          <Menu.Item onPress={() => {}} title="Item 3" />*/}
      {/*        </Menu>*/}
      {/*      </View>*/}
      {/*    </Provider>*/}
      {/*  </View>*/}
      {/*</Card>*/}

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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  componentSectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
  },
});
