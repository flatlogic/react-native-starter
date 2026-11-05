// @flow
import { compose } from 'redux';
import withState from '../../utils/withState';
import { connect } from 'react-redux';

import ArticleView from './ArticleView';

export default compose(
  connect(),
  withState('selectedSizeIndex', 'setSelectedSizeIndex', -1),
  withState('selectedQuantityIndex', 'setSelectedQuantityIndex', -1),
)(ArticleView);
