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

export const onFilter = (type) => (dispatch) => {
  dispatch({
    type: ON_FILTER,
    payload: type,
  });
};
export const onSort = (value) => (dispatch, getState) => {
  let sortedState = { ...getState() };
  if (value === "distance") {
    sortedState.workoutsList.sort((a, b) => b.wDistance - a.wDistance);
    //сортируем список тренировок по длинне комментария
  } else if (value === "comment") {
    sortedState.workoutsList.sort((a, b) =>
      a.wComment.length < b.wComment.length ? 1 : -1
    );
    //сортируем список тренировок по типу
  } else if (value === "type") {
    sortedState.workoutsList.sort((a, b) => (a.wType < b.wType ? 1 : -1));
    //сортируем список тренировок по дате
  } else if (value === "date") {
    sortedState.workoutsList.sort((a, b) => (+a.wDate > +b.wDate ? 1 : -1));
    //сортируем список тренировок по индексу
  } else if (value === "index") {
    sortedState = { ...getState() };
  }
  dispatch({
    type: ON_SORT,
    payload: sortedState,
  });
};

export const onTypeChange = (type, index) => (dispatch, getState) => {
  let newState = { ...getState() };
  newState.workoutsList[index].wType = type;
  dispatch({
    type: ON_TYPE_CHANGE,
    payload: newState,
  });
};

export const onCommentChange = (comment, index) => (dispatch, getState) => {
  let newCommentState = { ...getState() };
  newCommentState.workoutsList[index].wComment = comment;
  dispatch({
    type: ON_COMMENT_CHANGE,
    payload: newCommentState,
  });
};

export const onDistanceChange = (value, index) => (dispatch, getState) => {
  //регулярка для валидации инпута ввода дистанции, пропускающая только цифры
  let regEx = /^\d*\.?\d*$/;

  if (!value.match(regEx)) {
    return;
  } else {
    let newDistanceState = { ...getState() };
    newDistanceState.workoutsList[index].wDistance = value;

    dispatch({
      type: ON_DISTANCE_CHANGE,
      payload: newDistanceState,
    });
  }
};

export const onDateChange = (newDate, index, position) => (
  dispatch,
  getState
) => {
  let newDateState = { ...getState() };
  let date = new Date(+newDateState.workoutsList[index].wDate * 1000);
  switch (position) {
    case "date":
      date.setFullYear(date.getFullYear(), date.getMonth(), newDate);
      break;
    case "month":
      date.setFullYear(date.getFullYear(), newDate, date.getDate());
      break;
    case "year":
      date.setFullYear(newDate, date.getMonth(), date.getDate());
      break;
    default:
      break;
  }
  newDateState.workoutsList[index].wDate = date.getTime() / 1000;

  dispatch({
    type: ON_DATE_CHANGE,
    payload: newDateState,
  });
};

export const onWorkoutAdd = (type) => (dispatch, getState) => {
  if (type === "disabled") {
    type = "running";
  }

  let workoutsList = getState().workoutsList.concat({
    wType: type,
    wDate: Date.now() / 1000,
    wDistance: 0,
    wComment: "...",
    wId: +getState().workoutsList.length,
  });

  dispatch({ type: ON_WORKOUT_ADD, payload: workoutsList });
};

//ON_ROW_MOUSE_ENTER и ON_ROW_MOUSE_LEAVE нужны для отображения кнопки удаления
//при наведении на нужную тренировку.

export const onRowMouseEnter = (index) => (dispatch, getState) => {
  let rowMouseEnterState = { ...getState() };
  rowMouseEnterState.workoutsList[index].Xmark = true;
  dispatch({
    type: ON_ROW_MOUSE_ENTER,
    payload: rowMouseEnterState,
  });
};

export const onRowMouseLeave = (index) => (dispatch, getState) => {
  let rowMouseLeaveState = { ...getState() };
  rowMouseLeaveState.workoutsList[index].Xmark = false;
  dispatch({
    type: ON_ROW_MOUSE_LEAVE,
    payload: rowMouseLeaveState,
  });
};

export const onDeleteHandler = (index) => (dispatch, getState) => {
  let afterDeleteState = { ...getState() };
  afterDeleteState.workoutsList.splice(index, 1);
  dispatch({
    type: ON_DELETE_HANDLER,
    payload: afterDeleteState,
  });
};

export const asyncSetState = (data) => {
  return (dispatch) => {
    dispatch({
      type: ON_SET,
      payload: data,
    });
  };
};
