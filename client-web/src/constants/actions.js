import createActionsConstants from './create-actions-constants';

export const COURSES = createActionsConstants('courses');

export const INGREDIENTS = createActionsConstants('ingredients');

export const MENUS = createActionsConstants('menus');

export const EVENTS = createActionsConstants('events');

export const AUTH = {
  AUTH_SET_TOKEN: 'AUTH_SET_TOKEN',
  AUTH_DISCARD_TOKEN: 'AUTH_DISCARD_TOKEN',
  AUTH_SET_USER: 'AUTH_SET_USER',
  REQUEST_LOGIN: 'REQUEST_LOGIN',
};
