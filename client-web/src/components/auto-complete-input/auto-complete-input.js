import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DebounceInput from 'react-debounce-input';

class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  onKeyUp = ({ target: { value }, keyCode, ...e }) => {
    if (keyCode !== 13) {
      return;
    }
    const { list } = this.props;
    const listOfName = list.map(i => i.name);

    const ingsToAdd = value
      .split(',')
      .map(i => i.match(/(\d+(\.\d)?) ((.*) )?(.*)/))
      .filter(m => m && m.length)
      .map(([, value, , , unit, name]) => ({
        value: +value,
        unit,
        name,
      }))
      .filter(({ value, unit, name }) => value && unit && name)
      .map(({ value, unit, name }) => {
        const index = listOfName.indexOf(name);
        if (index > -1) {
          const { _id } = list[index];
          return { _id, value };
        }
        return;
      })
      .filter(i => i);
    if (!ingsToAdd.length) {
      return;
    }
    this.props.add(ingsToAdd);
    this.setState({ value: '' });
  };

  render() {
    // const { list } = this.props;

    return (
      <div>
        <input
          value={this.state.value}
          onKeyUp={this.onKeyUp}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

componentName.propTypes = {};

export default componentName;
