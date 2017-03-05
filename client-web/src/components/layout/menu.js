import React from 'react';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { NavLink } from 'react-router-dom';

const Main = ({openDrawer, toggleDrawer}) => {
  return (
    <Drawer open={openDrawer} docked={false}>
      <MenuItem secondaryText={'X'} onTouchTap={toggleDrawer}></MenuItem>
      <NavLink to="/courses" activeClassName="active"><MenuItem onTouchTap={toggleDrawer}>מנות</MenuItem></NavLink>
      <NavLink to="/menus" activeClassName="active"><MenuItem onTouchTap={toggleDrawer}>תפריטים</MenuItem></NavLink>
      <NavLink to="/events" activeClassName="active"><MenuItem onTouchTap={toggleDrawer}>אירועים</MenuItem></NavLink>
      <NavLink to="/ingredients" activeClassName="active"><MenuItem onTouchTap={toggleDrawer}>רכיבים</MenuItem></NavLink>
    </Drawer>
  );
};

Main.propTypes = {
  openDrawer: React.PropTypes.bool,
  toggleDrawer: React.PropTypes.func.isRequired,
}

Main.defaultProps = {
  openDrawer: false,
}

export default Main;