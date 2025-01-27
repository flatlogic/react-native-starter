import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, Animated } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import * as Progress from 'react-native-progress';

import Card from '../../components/Card';

import { colors, fonts } from '../../styles';

export default function ComponentsScreen(props) {
  const [progress1, setProgress1] = React.useState(0)
  const [progress2, setProgress2] = React.useState(0)
  const [progress3, setProgress3] = React.useState(0)
  const [spinnerOpacity, setSpinnerOpacity] = React.useState(1)
  const [spinnerOpacity2, setSpinnerOpacity2] = React.useState(1)
  const [spinnerOpacity3, setSpinnerOpacity3] = React.useState(1)
  const [spinnerOpacity4, setSpinnerOpacity4] = React.useState(1)
  const [spinnerOpacity5, setSpinnerOpacity5] = React.useState(1)
  const [spinnerOpacity6, setSpinnerOpacity6] = React.useState(1)
  const [spinnerOpacity7, setSpinnerOpacity7] = React.useState(1)
  const [spinnerOpacity8, setSpinnerOpacity8] = React.useState(1)

  const animate = () => {
    let progress = 0;
    setTimeout(() => {
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        if (progress < .3) setProgress1( progress);
        if (progress < .6) setProgress2( progress);
        if (progress < .9) setProgress3( progress);
      }, 500);
    }, 1500);
  }

  React.useEffect(() => {
    let i = 1;
    animate();
    setInterval(() => {
      const op = .9, op2 = .7, op3 = .5, op4 = .3, op5 = .2;
      switch(i) {
        case 1:
          setSpinnerOpacity2(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity(op3)
          break;
        case 2:
          setSpinnerOpacity(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity2(op3)
          break;
        case 3:
          setSpinnerOpacity2(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity(1)
          setSpinnerOpacity3(op3)
          break;
        case 4:
          setSpinnerOpacity2(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity(1)
          setSpinnerOpacity4(op3)
          break;
        case 5:
          setSpinnerOpacity2(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity(1)
          setSpinnerOpacity5(op3)
          break;
        case 6:
          setSpinnerOpacity2(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity(1)
          setSpinnerOpacity6(op3)
          break;
        case 7:
          setSpinnerOpacity2(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity8(1)
          setSpinnerOpacity(1)
          setSpinnerOpacity7(op3)
          break;
        case 8:
          setSpinnerOpacity2(1)
          setSpinnerOpacity4(1)
          setSpinnerOpacity5(1)
          setSpinnerOpacity6(1)
          setSpinnerOpacity7(1)
          setSpinnerOpacity3(1)
          setSpinnerOpacity(1)
          setSpinnerOpacity8(op3)
      }
      ++i;
      if (i > 8) i = 1;
    }, 100)
  }, [])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Card title={'Color'}>
        <ProgressBar progress={0.5} color={colors.blue} />
        <View style={{ height: 10 }} />
        <ProgressBar progress={0.5} color={colors.secondary} />
        <View style={{ height: 10 }} />

        <ProgressBar progress={0.5} color={colors.green} />
      </Card>
      <Card title={'Indeterminate'} style={{ marginTop: 20 }}>
        <ProgressBar progress={0.5} indeterminate color={colors.blue} />
        <View style={{ height: 10 }} />
        <ProgressBar progress={0.5} indeterminate color={colors.secondary} />
        <View style={{ height: 10 }} />

        <ProgressBar progress={0.5} indeterminate color={colors.green} />
      </Card>
      <Card title={'Styling'} style={{ marginTop: 20 }}>
        <ProgressBar progress={0.5} indeterminate color={colors.blue} />
        <View style={{ height: 10 }} />
        <ProgressBar progress={0.5} indeterminate style={{borderRadius: 12}} color={colors.secondary} />
        <View style={{ height: 10 }} />
      </Card>
      <Card title={'Styling'} style={{ marginTop: 20 }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Progress.Circle size={60} indeterminate={false} showsText   textStyle={{fontSize: 13, color: colors.black}} progress={progress1} color={colors.primary} thickness={5}/>
          <Progress.Circle size={60} indeterminate={false} showsText   textStyle={{fontSize: 13, color: colors.black}} progress={progress2} color={colors.secondary} thickness={5}/>
          <Progress.Circle size={60} indeterminate={false} showsText   textStyle={{fontSize: 13, color: colors.black}} progress={progress3} color={colors.green} thickness={5}/>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 70}}>
          <View style={{width: 60, flexDirection: 'row', justifyContent: 'center', left: 13}}>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4 , opacity: spinnerOpacity}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, transform: [{ rotate: "45deg" }], left: -15, bottom: 5, opacity: spinnerOpacity2}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, transform: [{ rotate: "90deg" }], left: -25, bottom: 17, opacity: spinnerOpacity3}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, transform: [{ rotate: "135deg" }], left: -25, bottom: 30, opacity: spinnerOpacity4}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, left: -17, bottom: 35, opacity: spinnerOpacity5}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, transform: [{ rotate: "225deg" }], bottom: 30, left: -7, opacity: spinnerOpacity6}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, transform: [{ rotate: "90deg" }], bottom: 17, left: -7, opacity: spinnerOpacity7}}/>
            <View style={{height: 10, backgroundColor: colors.primary, width: 4, transform: [{ rotate: "-45deg" }], bottom: 5, left: -16, opacity: spinnerOpacity8}}/>
          </View>
          <View style={{width: 60, flexDirection: 'row', justifyContent: 'center', left: 13}}>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4 , opacity: spinnerOpacity}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, transform: [{ rotate: "45deg" }], left: -15, bottom: 5, opacity: spinnerOpacity2}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, transform: [{ rotate: "90deg" }], left: -25, bottom: 17, opacity: spinnerOpacity3}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, transform: [{ rotate: "135deg" }], left: -25, bottom: 30, opacity: spinnerOpacity4}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, left: -17, bottom: 35, opacity: spinnerOpacity5}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, transform: [{ rotate: "225deg" }], bottom: 30, left: -7, opacity: spinnerOpacity6}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, transform: [{ rotate: "90deg" }], bottom: 17, left: -7, opacity: spinnerOpacity7}}/>
            <View style={{height: 10, backgroundColor: colors.secondary, width: 4, transform: [{ rotate: "-45deg" }], bottom: 5, left: -16, opacity: spinnerOpacity8}}/>
          </View>
          <View style={{width: 60, flexDirection: 'row', justifyContent: 'center', left: 13}}>
            <View style={{height: 10, backgroundColor: colors.green, width: 4 , opacity: spinnerOpacity}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, transform: [{ rotate: "45deg" }], left: -15, bottom: 5, opacity: spinnerOpacity2}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, transform: [{ rotate: "90deg" }], left: -25, bottom: 17, opacity: spinnerOpacity3}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, transform: [{ rotate: "135deg" }], left: -25, bottom: 30, opacity: spinnerOpacity4}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, left: -17, bottom: 35, opacity: spinnerOpacity5}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, transform: [{ rotate: "225deg" }], bottom: 30, left: -7, opacity: spinnerOpacity6}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, transform: [{ rotate: "90deg" }], bottom: 17, left: -7, opacity: spinnerOpacity7}}/>
            <View style={{height: 10, backgroundColor: colors.green, width: 4, transform: [{ rotate: "-45deg" }], bottom: 5, left: -16, opacity: spinnerOpacity8}}/>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 70}}>
          <View style={{width: 60, flexDirection: 'row', justifyContent: 'center', left: 13}}>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6, borderRadius: 3, left: 7, opacity: spinnerOpacity }}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6, borderRadius: 3, transform: [{ rotate: "45deg" }], left: -10, bottom: 5, opacity: spinnerOpacity2}}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6,borderRadius: 3,  transform: [{ rotate: "90deg" }], left: -23, bottom: 16, opacity: spinnerOpacity3}}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6, borderRadius: 3, transform: [{ rotate: "135deg" }], left: -23, bottom: 29, opacity: spinnerOpacity4}}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6, borderRadius: 3, left: -17, bottom: 35, opacity: spinnerOpacity5}}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6,borderRadius: 3, transform: [{ rotate: "225deg" }], bottom: 29, left: -10, opacity: spinnerOpacity6}}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6,borderRadius: 3, transform: [{ rotate: "90deg" }], bottom: 16, left: -10, opacity: spinnerOpacity7}}/>
            <View style={{height: 6, backgroundColor: colors.primary, width: 6, borderRadius: 3, transform: [{ rotate: "-45deg" }], bottom: 5, left: -24, opacity: spinnerOpacity8}}/>
          </View>
          <View style={{width: 60, flexDirection: 'row', justifyContent: 'center', left: 13}}>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6, borderRadius: 3, left: 7, opacity: spinnerOpacity }}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6, borderRadius: 3, transform: [{ rotate: "45deg" }], left: -10, bottom: 5, opacity: spinnerOpacity2}}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6,borderRadius: 3,  transform: [{ rotate: "90deg" }], left: -23, bottom: 16, opacity: spinnerOpacity3}}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6, borderRadius: 3, transform: [{ rotate: "135deg" }], left: -23, bottom: 29, opacity: spinnerOpacity4}}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6, borderRadius: 3, left: -17, bottom: 35, opacity: spinnerOpacity5}}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6,borderRadius: 3, transform: [{ rotate: "225deg" }], bottom: 29, left: -10, opacity: spinnerOpacity6}}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6,borderRadius: 3, transform: [{ rotate: "90deg" }], bottom: 16, left: -10, opacity: spinnerOpacity7}}/>
            <View style={{height: 6, backgroundColor: colors.secondary, width: 6, borderRadius: 3, transform: [{ rotate: "-45deg" }], bottom: 5, left: -24, opacity: spinnerOpacity8}}/>
          </View>
          <View style={{width: 60, flexDirection: 'row', justifyContent: 'center', left: 13}}>
            <View style={{height: 6, backgroundColor: colors.green, width: 6, borderRadius: 3, left: 7, opacity: spinnerOpacity }}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6, borderRadius: 3, transform: [{ rotate: "45deg" }], left: -10, bottom: 5, opacity: spinnerOpacity2}}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6,borderRadius: 3,  transform: [{ rotate: "90deg" }], left: -23, bottom: 16, opacity: spinnerOpacity3}}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6, borderRadius: 3, transform: [{ rotate: "135deg" }], left: -23, bottom: 29, opacity: spinnerOpacity4}}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6, borderRadius: 3, left: -17, bottom: 35, opacity: spinnerOpacity5}}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6,borderRadius: 3, transform: [{ rotate: "225deg" }], bottom: 29, left: -10, opacity: spinnerOpacity6}}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6,borderRadius: 3, transform: [{ rotate: "90deg" }], bottom: 16, left: -10, opacity: spinnerOpacity7}}/>
            <View style={{height: 6, backgroundColor: colors.green, width: 6, borderRadius: 3, transform: [{ rotate: "-45deg" }], bottom: 5, left: -24, opacity: spinnerOpacity8}}/>
          </View>
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
