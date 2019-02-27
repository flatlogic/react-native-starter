/* eslint-disable no-undef,import/no-extraneous-dependencies */
import { NativeModules } from 'react-native';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

NativeModules.StatusBarManager = { getHeight: jest.fn() };

jest.mock('react-native-languages', () => ({
  RNLanguages: {
    language: 'en',
    languages: ['en']
  }
}));
