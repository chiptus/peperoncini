import React from 'react';
import { Card, CardHeader, CardActions, IconButton } from 'material-ui';



const CourseItem = ({id, name, onDelete, onEdit}) => {
  return (
    <Card>
      <CardHeader
        title={name}
      />
      <CardActions>
        <IconButton tooltip="Edit" iconClassName="fa fa-pencil" onTouchTap={onEdit} />
        <IconButton tooltip="Delete" iconClassName="fa fa-trash-o" onClick={onDelete} />
      </CardActions>

      

    </Card>
  );
};

CourseItem.PropTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  onEdit: React.PropTypes.func.isRequired,
  onDelete: React.PropTypes.func.isRequired,
}

export default CourseItem;