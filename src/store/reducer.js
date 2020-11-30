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

const initialState = {
  filterBy: "disabled",
  workoutsList: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ON_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };

    case ON_SORT:
      return action.payload;

    case ON_TYPE_CHANGE:
      return {
        ...action.payload,
      };

    case ON_COMMENT_CHANGE:
      return {
        ...action.payload,
      };

    case ON_DISTANCE_CHANGE:
      return {
        ...action.payload,
      };

    case ON_DATE_CHANGE:
      return {
        ...action.payload,
      };

    case ON_WORKOUT_ADD:
      return {
        ...state,
        workoutsList: action.payload,
      };

    case ON_ROW_MOUSE_ENTER:
      return {
        ...action.payload,
      };

    case ON_ROW_MOUSE_LEAVE:
      return {
        ...action.payload,
      };

    case ON_DELETE_HANDLER:
      return {
        ...action.payload,
      };

    case ON_SET:
      if (!action.payload.workoutsList) {
        return {
          ...state,
        };
      } else {
        return {
          ...action.payload,
        };
      }

    default:
      return state;
  }
}
