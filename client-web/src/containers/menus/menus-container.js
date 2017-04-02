import React, { PropTypes } from 'react';
// import { Switch, Route } from 'react-router-dom';


import { connect } from 'react-redux';

import ItemsContainer from '../common/items-container';

import {fetchItemsIfNeeded} from '../../actions/menus'

import MenusPage from './menu-list-page';
import AddMenuPage from './add-menu-page';

const MenusContainer = ({fetchItems, isFetching}) => (
  <ItemsContainer {...{fetchItems, isFetching}} itemsPage={MenusPage} addItemPage={AddMenuPage} itemsName="menus"/>
)

MenusContainer.propTypes = {
  fetchItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  isFetching: state.menus.isFetching,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchItems: () => dispatch(fetchItemsIfNeeded())
});

export default connect(mapStateToProps, mapDispatchToProps)(MenusContainer);