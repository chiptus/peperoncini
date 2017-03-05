import { CURRENT_COURSE } from '../constants/actions';

export function saveCourse(id, name, ingredients) {
  return {
    type: CURRENT_COURSE.SAVE_COURSE,
    id,
    name,
    ingredients,
  }
}