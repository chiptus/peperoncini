export default {
  entities: {
    courses: {
      /*
      ids: {
        id,
        name,
        ingredients: [{id, quantity}]
      }
      */
    }
  },
  ingredients: [], //list of ingredients
  /*
    {
      id,
      name,
      unit,
      price      
    }
  */
  courses: {
    isFetching: false,
    items: [/*ids*/], //list of courses
    
  },
  menus: [], //list of menus
  /*
  {
    id,
    name,
    courses: [{id, quantity}]
  }
  */
  events: [], //list of events
  /*
    {
      id,
      name,
      menus: [{id, quantity}]
    }
  */

}