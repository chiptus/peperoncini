import React from 'react';
import { connect } from 'react-redux';

import { FlatButton, TextField } from 'material-ui';

const AddItemPage = (itemsName, addOrUpdateItem, fetchItemsIfNeeded) => {
  class AddItemPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        nameError: '',

        ...this.props.item,

      }
    }

    componentDidUpdate() {
      if (this.state._id) {
        return;
      }
      this.setState({
        ...this.props.item
      })
    }

    returnToList = () => {
      this.props.push(`/${itemsName}/`)
    }

    submit = () => {
      const { name, } = this.state
      const item = {
        id: this.props.item._id,
        name,
      }
      if (!item.name) {
        this.setState({ nameError: 'שדה זה הוא חובה' });
        return;
      }
      this.props.saveItem(item)
        .then(t => this.props.returnToList());
    }

    render() {
      const { name } = this.state;
      const { children } = this.props;
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
            {children}
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

  return connect(mapStateToProps, mapDispatchToProps)(AddItemPage);
}

export default AddItemPage;