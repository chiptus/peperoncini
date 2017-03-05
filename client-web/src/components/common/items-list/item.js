import React from 'react';
import { Card, CardHeader, CardActions, IconButton, CardText } from 'material-ui';



const Item = ({name, onDelete, onEdit, children}) => {
  return (
    <Card>
      <CardHeader
        title={name}
        actAsExpander
      />
       <CardText expandable>
        {children}
      </CardText>
      <CardActions>
        <IconButton tooltip="Edit" iconClassName="fa fa-pencil" onTouchTap={onEdit} />
        <IconButton tooltip="Delete" iconClassName="fa fa-trash-o" onClick={onDelete} />
      </CardActions>
     
    </Card>
  );
};

Item.PropTypes = {
  // id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
}

export default Item;