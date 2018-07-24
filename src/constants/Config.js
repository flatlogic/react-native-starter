// @flow
import { Platform } from 'react-native';

export default {
  rateUsUrl: Platform.OS === 'ios' ? 'https://apple.com' : 'https://google.com',
  contactUsUrl: 'mailto:support@flatlogic.con?subject=RNS',
};
