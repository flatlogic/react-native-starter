import React from 'react';
import PropTypes from 'prop-types';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View,
  Text,
} from 'react-native';

import { Colors } from '../constants';

class RNSDropDown extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelect: PropTypes.func.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    color: PropTypes.string,
    borderColor: PropTypes.string,
  };

  static defaultProps = {
    placeholder: 'Please Select...',
    selectedIndex: -1,
    color: Colors.primary,
    borderColor: Colors.primary,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);
  }

  _openModal() {
    this.setState({ isOpened: true });
  }

  _closeModal() {
    this.setState({ isOpened: false });
  }

  render() {
    return (
      <ModalDropdown
        options={this.props.items}
        onDropdownWillShow={this._openModal}
        onDropdownWillHide={this._closeModal}
        dropdownStyle={{
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowRadius: 5,
          shadowOpacity: 1.0,
        }}
        adjustFrame={(params) => {
          params.left = 0;
          params.right = 0;
          return params;
        }}
        renderRow={text => (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ color: this.props.color }}>{text}</Text>
          </View>
        )}
        onSelect={this.props.onSelect}
      >
        <View
          style={[styles.container, this.props.style && this.props.style, { borderColor: this.props.borderColor }]}
        >
          <Text style={{ color: this.props.color }}>
            {this.props.selectedIndex > -1 && this.props.items[this.props.selectedIndex] ?
              this.props.items[this.props.selectedIndex] : this.props.placeholder}
          </Text>
          <Icon name={this.state.isOpened ? 'angle-up' : 'angle-down'} color={this.props.color} size={20} style={styles.icon} />
        </View>
      </ModalDropdown>
    );
  }
}

const styles = {
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  icon: {
    marginLeft: 10,
  },
};

export default RNSDropDown;
