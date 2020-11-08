import {
  ON_SORT,
  ON_FILTER,
  ON_TYPE_CHANGE,
  ON_COMMENT_CHANGE,
  ON_DISTANCE_CHANGE,
  ON_DATE_CHANGE,
  ON_WORKOUT_ADD,
  ON_ROW_MOUSE_ENTER,
  ON_ROW_MOUSE_LEAVE,
  ON_DELETE_HANDLER,
  ON_SET,
} from "./actionTypes";

export function onSort(type) {
  return {
    type: ON_SORT,
    payload: type,
  };
}
export function onFilter(value) {
  return {
    type: ON_FILTER,
    payload: value,
  };
}
export function onTypeChange(type, index) {
  return {
    type: ON_TYPE_CHANGE,
    payload: type,
    payload2: index,
  };
}
export function onCommentChange(comment, index) {
  return {
    type: ON_COMMENT_CHANGE,
    payload: comment,
    payload2: index,
  };
}
export function onDistanceChange(value, index) {
  return {
    type: ON_DISTANCE_CHANGE,
    payload: value,
    payload2: index,
  };
}
export function onDateChange(date, index, position) {
  return {
    type: ON_DATE_CHANGE,
    payload: date,
    payload2: index,
    payload3: position,
  };
}
export function onWorkoutAdd(type) {
  return {
    type: ON_WORKOUT_ADD,
    payload: type,
  };
}
export function onRowMouseEnter(index) {
  return {
    type: ON_ROW_MOUSE_ENTER,
    payload: index,
  };
}
export function onRowMouseLeave(index) {
  return {
    type: ON_ROW_MOUSE_LEAVE,
    payload: index,
  };
}
export function onDeleteHandler(index) {
  return {
    type: ON_DELETE_HANDLER,
    payload: index,
  };
}
export function asyncSetState(data) {
  return (dispatch) => {
    dispatch({
      type: ON_SET,
      payload: data,
    });
  };
}
