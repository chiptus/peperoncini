import React, { PropTypes } from 'react';

import ItemsList from '../../common/items-list';
import ItemContent from './menu-list-item';


const MenusList = ({menus, editItem, deleteItem}) => {
  return (
    <ItemsList
      items={menus}
      {...{editItem, deleteItem}}
      newItemLink="/menus/add">
      {item => <ItemContent {...item} />}
    </ItemsList>
  );
};

MenusList.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape()),
  editItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default MenusList;