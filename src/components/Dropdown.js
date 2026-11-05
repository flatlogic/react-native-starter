import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
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
      <SelectDropdown
        data={items}
        onFocus={this._openModal}
        onBlur={this._closeModal}
        renderItem={text => (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row' }}>
            <Checkbox status={"unchecked"} />
            <Text style={{ color: '#686868' }}>{text}</Text>
          </View>
        )}
        onSelect={(item, index) => onSelect(index, item)}
        {...restProps}
        renderButton={() => (
        <View style={[styles.container, style && style, { borderColor }, restProps.disabled && styles.disabled]}>
          <Text style={restProps.disabled ? {color: '#686868'} : {color}}>
            {selectedIndex > -1 && items[selectedIndex]
              ? items[selectedIndex]
              : placeholder}
          </Text>
          <Icon
            name={this.state.isOpened ? 'angle-up' : 'angle-down'}
            color={restProps.disabled ? '#686868' : color}
            size={20}
            style={styles.icon}
          />
        </View>
        )}
      />
      ) : (
      <SelectDropdown
        data={items}
        onFocus={this._openModal}
        onBlur={this._closeModal}
        renderItem={text => (
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text style={{ color: '#686868' }}>{text}</Text>
          </View>
        )}
        onSelect={(item, index) => onSelect(index, item)}
        {...restProps}
        renderButton={() => (
        <View style={[styles.container, style && style, { borderColor }, restProps.disabled && styles.disabled]}>
          <Text style={restProps.disabled ? {color: '#686868'} : {color}}>
            {selectedIndex > -1 && items[selectedIndex]
              ? items[selectedIndex]
              : placeholder}
          </Text>
          <Icon
            name={this.state.isOpened ? 'angle-up' : 'angle-down'}
            color={restProps.disabled ? '#686868' : color}
            size={20}
            style={styles.icon}
          />
        </View>
        )}
      />
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
