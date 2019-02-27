/**
 * @flow
 */
import { Typography, Colors, Assets } from 'react-native-ui-lib';
import { Dimensions, Platform } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import commonStyles from './common';

const { width } = Dimensions.get('window');

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth: number = 350;

Colors.loadColors(colors);

Typography.loadTypographies({
  title: {
    fontSize: 35,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  h1: {
    fontSize: 34,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  rubik18: {
    fontFamily: fonts.primary,
    fontSize: 18,
    lineHeight: 22,
  },
  rubik20Bold: {
    fontFamily: fonts.primary,
    fontSize: 20,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  rubik24Bold: {
    fontFamily: fonts.primary,
    fontSize: 24,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  h1Rubik: {
    fontSize: 28,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: '500',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  h2: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fonts.primaryBold,
  },
  h3: {
    fontSize: 16,
    lineHeight: 22,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fonts.primaryBold,
      },
    }),
  },
  h4: {
    fontSize: 14,
    lineHeight: 22,
    fontFamily: fonts.primary,
  },
  p: {
    fontSize: 14,
    lineHeight: 20,
    ...Platform.select({
      ios: {
        fontFamily: fonts.primary,
        fontWeight: '400',
      },
      android: {
        fontFamily: fonts.primaryAndroid,
      },
    }),
  },
  default: {
    fontFamily: fonts.primary,
    fontSize: 18,
  },
  defaultMedium: {
    fontFamily: fonts.primaryMedium,
    fontSize: 18,
  },
  defaultLight: {
    fontFamily: fonts.primary,
  },
});

Assets.loadAssetsGroup('images', {});

Assets.loadAssetsGroup('icons', {});

const scale = (size: number): number => (width / guidelineBaseWidth) * size;

export { colors, fonts, scale, commonStyles };
