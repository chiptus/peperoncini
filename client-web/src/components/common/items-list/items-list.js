import React, { PropTypes, Component } from 'react';
import { FlatButton, Dialog } from 'material-ui';
import { NavLink } from 'react-router-dom'

import Item from './item';

class ItemsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openDialog: false,
      idToDelete: '',
    }
  }

  handleClose = () => {
    this.setState({ openDialog: false });
  }

  handleOpen = (id) => {
    this.setState({ openDialog: true, idToDelete: id });
  }

  handleConfirm = () => {
    this.props.deleteItem(this.state.idToDelete);
    this.setState({
      openDialog: false,
      idToDelete: '',
    });
  }

  render() {
    const { items, editItem, newItemLink, children } = this.props;

    return (
      <div>
        <NavLink to={newItemLink}><FlatButton>הוסף פריט</FlatButton></NavLink>
        <div>
          {
            items.map(({name, id, ...item}) => (
              <Item
                key={id}
                name={name}
                onEdit={() => editItem(id)}
                onDelete={() => this.handleOpen(id)}>
                {children ? children(item) : null}
              </Item>
            ))
          }
        </div>

        <Dialog
          title="למחוק את הפריט?"
          actions={[
            <FlatButton
              label="ביטול"
              primary={true}
              onTouchTap={this.handleClose}
            />,
            <FlatButton
              label="אישור"
              primary={true}
              onTouchTap={this.handleConfirm}
            />,
          ]}
          modal={true}
          open={this.state.openDialog}
        />
      </div>
    );
  }
}



ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  newItemLink: PropTypes.string.isRequired,
  chilren: PropTypes.func,
};

export default ItemsList;