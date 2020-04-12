import React from 'react';
import { View } from 'react-native';
import colors from '../../../../../styles/colors';

const ShowcaseContainer = ({ children }) => (
  <View style={{
    margin: 16,
    paddingHorizontal: 16,
    backgroundColor: colors,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    }}
  >
    {children}
  </View>
)

export default ShowcaseContainer;
