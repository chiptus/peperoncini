import request from 'superagent';


import { COURSES } from '../../constants/actions';
import { SERVER_URL } from '../../config';

export default function saveCourse(course) {
  console.log(course.id);
  return dispatch => {
    dispatch(requestSaveCourse(course));
    return new Promise((resolve, reject) =>
      request.post(`${SERVER_URL}/api/course/${course.id || ''}`)
        .send(course)
        .set('Accept', 'application/json')
        .then(
        ({ body }) => {
          dispatch(addOrUpdate(course.id, body));
          resolve(body);
        },
        error => {
          const errorObj = new Error(error);
          dispatch(requestSaveCourseFailed(errorObj));
          reject(errorObj);
        },
      )
    )
  }

}

export function requestSaveCourse(course) {
  return {
    type: COURSES.REQUEST_SAVE,
    payload: course,
  }
}

export function requestSaveCourseFailed(error) {
  return {
    type: COURSES.REQUEST_SAVE_FAIL,
    payload: error,
    error: true,
  }
}

export function addOrUpdate(id, course) {
  return id ? updateCourse(course) : addCourse(course);
}

export function addCourse(course) {
  return {
    type: COURSES.ADD_COURSE,
    payload: course,
  }
}

export function updateCourse(course) {
  return {
    type: COURSES.UPDATE_COURSE,
    payload: course,
  }
}