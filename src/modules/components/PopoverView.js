import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import Card from '../../components/Card';
import Button from '../../components/Button';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(prevState => !prevState);
  };

  const [isModalVisible2, setModalVisible2] = React.useState(false);

  const toggleModal2 = () => {
    setModalVisible2(prevState => !prevState);
  };

  const [isModalVisible3, setModalVisible3] = React.useState(false);

  const toggleModal3 = () => {
    setModalVisible3(prevState => !prevState);
  };

  const [isModalVisible4, setModalVisible4] = React.useState(false);

  const toggleModal4 = () => {
    setModalVisible4(prevState => !prevState);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Default'}>
        <View>
          <Text style={[styles.componentSectionTitle, { marginBottom: 10 }]}>
            Default
          </Text>
          <Tooltip
            isVisible={isModalVisible}
            content={<Text style={{color: colors.gray}}>Check this out!</Text>}
            placement="bottom"
            onClose={toggleModal}
            backgroundColor={'transparent'}
            contentStyle={{ backgroundColor: '#fff' }}
            arrowStyle={{display: 'none'}}
            tooltipStyle={{paddingTop: 0}}
          >
            <Button
              primary
              caption="toggle popover"
              onPress={toggleModal}
              style={{ flex: 1 }}
            />
          </Tooltip>
        </View>
      </Card>
      <Card title={'Styling'} style={{ marginTop: 20 }}>
        <View>
          <Text style={[styles.componentSectionTitle, { marginBottom: 10 }]}>
            With Icon
          </Text>
          <Tooltip
            isVisible={isModalVisible2}
            content={
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <AntDesignIcon
                  name={'staro'}
                  size={20}
                  style={{ marginRight: 5, color: colors.gray }}
                />
                <Text style={{color: colors.gray}}>Check this out!</Text>
              </View>
            }
            placement="bottom"
            onClose={toggleModal2}
            backgroundColor={'transparent'}
            contentStyle={{ backgroundColor: '#fff' }}
            arrowStyle={{display: 'none'}}
            tooltipStyle={{paddingTop: 0}}
          >
            <Button secondary caption="toggle popover" onPress={toggleModal2} />
          </Tooltip>
        </View>
      </Card>
      <Card title={'Backdrop'} style={{ marginTop: 20 }}>
        <View>
          <Text style={[styles.componentSectionTitle, { marginBottom: 10 }]}>
            Styled backdrop
          </Text>
          <Tooltip
            isVisible={isModalVisible3}
            content={<Text style={{color: colors.gray}}>Check this out!</Text>}
            placement="bottom"
            onClose={toggleModal3}
            contentStyle={{ backgroundColor: '#fff' }}
            arrowStyle={{display: 'none'}}
            tooltipStyle={{paddingTop: 0}}
          >
            <Button
              primary
              bordered
              caption="toggle popover"
              onPress={toggleModal3}
            />
          </Tooltip>
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
