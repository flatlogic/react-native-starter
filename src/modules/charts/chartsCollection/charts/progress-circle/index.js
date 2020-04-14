import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import colors from '../../../../../styles/colors';

class ProgressCircleExample extends React.PureComponent {

  render() {

    return (
      <ProgressCircle
        style={ { height: 200 } }
        progress={ 0.7 }
        progressColor={colors.blue}
        { ...this.props }
      />
    )
  }
}

export default ProgressCircleExample
