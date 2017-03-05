import {addCourse} from './save';

test('add course', () => {
  it('returns action', () => {
    expects(addCourse()).toEqual({action: undefined, payload: undefined});
  })
});