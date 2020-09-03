import React from 'react';
import ModalDropdown from 'react-native-modal-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome';

import { View, Text } from 'react-native';
import Checkbox from '../components/Checkbox'

import { colors } from '../styles';

class RNSDropDown extends React.Component {
  static defaultProps = {
    placeholder: 'Please Select...',
    selectedIndex: -1,
    color: "#5759CB",
    borderColor: "#5759CB",
  };

  state = {
    isOpened: false,
  };

  _openModal = () => {
    this.setState({ isOpened: true });
  };

  _closeModal = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const {
      items,
      color,
      onSelect,
      style,
      borderColor,
      selectedIndex,
      placeholder,
      multiselect,
      ...restProps
    } = this.props;
    return this.props.multiselect ? (
      <ModalDropdown
        options={items}
        onDropdownWillShow={this._openModal}
        onDropdownWillHide={this._closeModal}
        adjustFrame={params => {
          // eslint-disable-next-line no-param-reassign
          params.left = 35;
          // eslint-disable-next-line no-param-reassign
          params.right = 35;
          return params;
        }}
        renderRow={text => (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row' }}>
            <Checkbox.Android status={"unchecked"} />
            <Text style={{ color: '#686868' }}>{text}</Text>
          </View>
        )}
        onSelect={onSelect}
        {...restProps}
      >
        <View style={[styles.container, style && style, { borderColor }, restProps.disabled && styles.disabled]}>
          <Text style={restProps.disabled ? {color: '#686868'} : {color}}>
            {selectedIndex > -1 && items[selectedIndex]
              ? items[selectedIndex]
              : placeholder}
          </Text>
          <Icon
            name={this.state.isOpened ? 'angle-up' : 'angle-down'}
            color={restProps.disabled ? {color: '#686868'} : color}
            size={20}
            style={styles.icon}
          />
        </View>
      </ModalDropdown>
      ) : (
      <ModalDropdown
        options={items}
        onDropdownWillShow={this._openModal}
        onDropdownWillHide={this._closeModal}
        adjustFrame={params => {
          // eslint-disable-next-line no-param-reassign
          params.left = 35;
          // eslint-disable-next-line no-param-reassign
          params.right = 35;
          return params;
        }}
        renderRow={text => (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ color: '#686868' }}>{text}</Text>
          </View>
        )}
        onSelect={onSelect}
        {...restProps}
      >
        <View style={[styles.container, style && style, { borderColor }, restProps.disabled && styles.disabled]}>
          <Text style={restProps.disabled ? {color: '#686868'} : {color}}>
            {selectedIndex > -1 && items[selectedIndex]
              ? items[selectedIndex]
              : placeholder}
          </Text>
          <Icon
            name={this.state.isOpened ? 'angle-up' : 'angle-down'}
            color={restProps.disabled ? {color: '#686868'} : color}
            size={20}
            style={styles.icon}
          />
        </View>
      </ModalDropdown>
    );
  }
}

const styles = {
  container: {
    height: 40,
    borderWidth: 1,
    borderColor: "#5759CB",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 5,
  },
  icon: {
    marginLeft: 10,
  },
  disabled: {
    backgroundColor: '#DDDDDD',
    borderColor: '#DDDDDD',
  }
};

export default RNSDropDown;
