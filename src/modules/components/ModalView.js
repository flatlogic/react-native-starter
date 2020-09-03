import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';

import Card from '../../components/Card';
import Button from '../../components/Button'

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  const [isModalVisible, setModalVisible] = React.useState(false)

  const toggleModal = () => {
    setModalVisible(prevState => !prevState)
  }

  const [isModalVisible2, setModalVisible2] = React.useState(false)

  const toggleModal2 = () => {
    setModalVisible2(prevState => !prevState)
  }

  const [isModalVisible3, setModalVisible3] = React.useState(false)

  const toggleModal3 = () => {
    setModalVisible3(prevState => !prevState)
  }

  const [isModalVisible4, setModalVisible4] = React.useState(false)

  const toggleModal4 = () => {
    setModalVisible4(prevState => !prevState)
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Default Modal'}>
        <View>
          <Text style={[styles.componentSectionTitle, {marginBottom: 10}]}>Default</Text>
          <Button
            primary
            caption="toggle modal"
            onPress={toggleModal}
            style={{flex: 1}}
          />

          <Modal isVisible={isModalVisible} backdropOpacity={0.5} backdropColor={"#666"}>
            <Card title={"Hello"}>
              <Button
                primary
                caption="toggle modal"
                onPress={toggleModal}
                style={{marginTop: 10}}
              />
            </Card>
          </Modal>
        </View>
      </Card>
      <Card title={'Styling'} style={{marginTop: 20}}>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Styled Modal</Text>
          <Button
            secondary
            caption="toggle modal"
            onPress={toggleModal2}
          />
          <Modal isVisible={isModalVisible2} backdropOpacity={0.5} backdropColor={"#666"}>
           <Card title={"Hello"}>
              <Button
                secondary
                caption="toggle modal"
                onPress={toggleModal2}
                style={{marginTop: 10}}
              />
            </Card>
          </Modal>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Styled Backdrop</Text>
          <Button
            primary
            bordered
            caption="toggle modal"
            onPress={toggleModal3}
          />
          <Modal isVisible={isModalVisible3} backdropOpacity={0.5} backdropColor={"#666"}>
            <Card title={<Text style={{color: '#fff'}}>Hello</Text>} style={{backgroundColor: colors.primary}}>
              <Button
                primary
                caption="toggle modal"
                onPress={toggleModal3}
                style={{marginTop: 10}}
                bgColor={'#fff'}
                textColor={"#5759CB"}
              />
            </Card>
          </Modal>
        </View>
        <View style={styles.demoInputContainer}>
          <Text style={styles.componentSectionTitle}>Custom Position</Text>
          <Button
            primary
            caption="toggle modal"
            onPress={toggleModal4}
          />
          <Modal isVisible={isModalVisible4} backdropOpacity={0.5} backdropColor={"#666"}>
            <View style={{flex: 1, marginTop: 100, alignItems: 'center'}}>
            <Card title={"Hello"}>
              <Button
                primary
                caption="toggle modal"
                onPress={toggleModal4}
                style={{marginTop: 10}}
              />
            </Card>
            </View>
          </Modal>
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
