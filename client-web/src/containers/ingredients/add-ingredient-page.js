import React from 'react';

import { connect } from 'react-redux';

import { FlatButton, TextField } from 'material-ui';

import { addOrUpdateItem, fetchItemsIfNeeded } from '../actions/ingredients';


const itemsName = 'ingredients'

class AddItemPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameError: '',
      ...this.props.item,
    }
  }


  componentDidUpdate() {
    if (this.props.item._id && !this.state._id) {
      this.setState({
        ...this.props.item
      });
    }
  }

  returnToList = () => {
    this.props.push(`/${itemsName}/`)
  }

  submit = () => {
    const { name, unit, price } = this.state
    const item = {
      id: this.props.item._id,
      name,
      unit,
      price,
    }
    if (!item.name) {
      this.setState({ nameError: 'שדה זה הוא חובה' });
      return;
    }
    this.props.saveItem(item)
      .then(t => this.props.returnToList());
  }

  render() {
    const { name, unit, price } = this.state;
    return (
      <div>
        <form>
          <div>
            <TextField
              value={name || ""}
              onChange={({ target: { value } }) => this.setState({ name: value })}
              floatingLabelText={"שם"}
              errorText={this.state.nameError}
            />
          </div>
          <div>
            <TextField
              value={unit || ""}
              onChange={({ target: { value } }) => this.setState({ unit: value })}

              floatingLabelText="יחידה"
            />
          </div>
          <div>
            <TextField
              value={price || ""}
              onChange={({ target: { value } }) => this.setState({ price: value })}
              type="number"
              floatingLabelText="מחיר"
            />
          </div>
          <FlatButton onClick={this.submit}>שמור</FlatButton>
          <FlatButton onClick={() => this.props.returnToList()}>ביטול</FlatButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let item = (ownProps.id) && state.entities[itemsName][ownProps.id];
  item = Object.assign({}, { name: '', unit: '', price: '' }, item)
  return { item };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveItem: (item) => { //async
    return dispatch(addOrUpdateItem(item));
  },
  returnToList: () => {
    ownProps.push(`/${itemsName}`);
  },
  fetchItems: () => {
    return dispatch(fetchItemsIfNeeded());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddItemPage);