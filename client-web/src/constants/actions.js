import createActionsConstants from './create-actions-constants';

export const COURSES = createActionsConstants('courses');

export const INGREDIENTS = createActionsConstants('ingredients');

export const MENUS = createActionsConstants('menus');

export const EVENTS = createActionsConstants('events');


export const AUTH = {
  LOGIN_REQUESTED: 'LOGIN_REQUESTED',
  LOGIN_AUTHORIZED: 'LOGIN_AUTHORIZED',
  LOGOUT_REQUESTED: 'LOGOUT_REQUESTED',
  LOGOUT: 'LOGOUT',
}

