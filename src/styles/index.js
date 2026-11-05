/**
 * @flow
 */
import { Dimensions } from 'react-native';

import colors from './colors';
import fonts from './fonts';
import commonStyles from './common';

const { width } = Dimensions.get('window');
const guidelineBaseWidth: number = 350;
const scale = (size: number): number => (width / guidelineBaseWidth) * size;

export { colors, fonts, scale, commonStyles };
