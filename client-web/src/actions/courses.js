// import request from 'superagent';

// import { SERVER_URL } from '../config';
// import { COURSES } from '../constants/actions';

// import saveCourse from './courses/save';

// export {saveCourse};

import { COURSES } from '../constants/actions';

import createActionCreators from './common';

const { addOrUpdateItem, fetchItemsIfNeeded, deleteItem } = createActionCreators('course', COURSES);
export { addOrUpdateItem, fetchItemsIfNeeded, deleteItem };


// export function fetchCoursesIfNeeded(){
//   console.log("fetch");
//   return (dispatch, getState) => {
//     if (shouldFetchCourses(getState())) {
//       return dispatch(fetchCourses())
//     }
//     return Promise.resolve();
//   }
// }

// function shouldFetchCourses(state) {
//   const courses = state.courses.items;
//   if (state.courses.isFetching) {
//     return false;
//   }
//   if (courses.length) {
//     return false;
//   }
//   return true;
// }

// function fetchCourses() {
//   return dispatch => {
//     dispatch(requestCourses());
//     return request.get(`${SERVER_URL}/api/course`)
//       .then(
//       result => dispatch(receivedCourses(result.body)),
//       err => dispatch(failedReceivingCourses(err))
//       );
//   }
// }

// export function failedReceivingCourses(error) {
//   return {
//     type: COURSES.RECEIVED_COURSES_FAILED,
//     payload: error,
//     error: true,
//   }
// }

// export function requestCourses() {
//   return {
//     type: COURSES.REQUEST_COURSES,
//   }
// }

// export function receivedCourses(courses) {
//   return {
//     type: COURSES.RECEIVED_COURSES,
//     payload: {
//       items: courses,
//       receivedAt: (new Date()).getTime(),
//     }
//   }
// }

// export function requestDeleteCourse() {
//   return {
//     type: COURSES.REQUEST_DELETE
//   }
// }

// export function deleteCourse(id) {
//   return dispatch => {
//     dispatch(requestDeleteCourse(id))
//     return request.delete(`${SERVER_URL}/api/course/${id}`)
//       .then(
//       () => dispatch(successDeleteCourse(id)),
//       error => dispatch(errorDeleteCourse(new Error(error))),
//     )
//   }
// }

// function successDeleteCourse(id) {
//   return {
//     type: COURSES.DELETE_COURSE,
//     payload: { id }
//   }
// }

// function errorDeleteCourse(error) {
//   console.error(error);
//   return {
//     type: COURSES.DELETE_COURSE_ERROR,
//     payload: error,
//   }
// }

// // export function fetchCourse(id) {
// //   return dispatch => {
// //     dispatch(requestFetchCourse(id));
// //     return request.get(`${SERVER_URL}/api/course/${id}`)
// //       .then(
// //         ({body: courseFromServer}) => {
// //           const course = {
// //             ingredients: [],
// //             ...courseFromServer
// //           }
// //           dispatch(addCourse(course));
// //           return course;
// //         },
// //         error => {
// //           dispatch(failedFetchCourse(id));
// //           return error;
// //         }
// //       )
// //   }
// // }

// // function requestFetchCourse(id) {
// //   return {
// //     type: COURSES.REQUEST_COURSE,
// //     payload: {id}
// //   }
// // }

// // function failedFetchCourse(error) {
// //   return {
// //     type: COURSES.REQUEST_COURSE,
// //     payload: error,
// //     error: true,
// //   }
// // }
