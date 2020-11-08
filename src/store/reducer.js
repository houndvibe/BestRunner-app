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
    case ON_SORT:
      //сортируем список тренировок по дистанции
      if (action.payload === "distance") {
        let sortedState = { ...state };
        sortedState.workoutsList.sort((a, b) => b.wDistance - a.wDistance);
        return sortedState;
        //сортируем список тренировок по длинне комментария
      } else if (action.payload === "comment") {
        let sortedState = { ...state };
        sortedState.workoutsList.sort((a, b) =>
          a.wComment.length < b.wComment.length ? 1 : -1
        );
        return sortedState;
        //сортируем список тренировок по типу
      } else if (action.payload === "type") {
        let sortedState = { ...state };
        sortedState.workoutsList.sort((a, b) => (a.wType < b.wType ? 1 : -1));
        return sortedState;
        //сортируем список тренировок по дате
      } else if (action.payload === "date") {
        let sortedState = { ...state };
        sortedState.workoutsList.sort((a, b) => (+a.wDate > +b.wDate ? 1 : -1));
        return sortedState;
        //сортируем список тренировок по индексу
      } else if (action.payload === "index") {
        return state;
      }
      break;

    case ON_FILTER:
      return {
        ...state,
        filterBy: action.payload,
      };

    case ON_TYPE_CHANGE:
      let newState = { ...state };
      newState.workoutsList[action.payload2].wType = action.payload;
      return {
        ...newState,
      };

    case ON_COMMENT_CHANGE:
      let newCommentState = { ...state };
      newCommentState.workoutsList[action.payload2].wComment = action.payload;
      return {
        ...newCommentState,
      };

    case ON_DISTANCE_CHANGE:
      //регулярка для валидации инпута ввода дистанции, пропускающая только цифры
      let regEx = /^\d*\.?\d*$/;

      if (!action.payload.match(regEx)) {
        return {
          ...state,
        };
      }

      let newDistanceState = { ...state };
      newDistanceState.workoutsList[action.payload2].wDistance = action.payload;
      return {
        ...newDistanceState,
      };

    case ON_DATE_CHANGE:
      let newDateState = { ...state };
      let date = new Date(
        +newDateState.workoutsList[action.payload2].wDate * 1000
      );
      //обновляем  необходимый элемент даты
      switch (action.payload3) {
        case "date":
          date.setFullYear(date.getFullYear(), date.getMonth(), action.payload);
          break;
        case "month":
          date.setFullYear(date.getFullYear(), action.payload, date.getDate());
          break;
        case "year":
          date.setFullYear(action.payload, date.getMonth(), date.getDate());
          break;
        default:
          break;
      }
      newDateState.workoutsList[action.payload2].wDate = date.getTime() / 1000;
      return {
        ...newDateState,
      };

    case ON_WORKOUT_ADD:
      if (action.payload === "disabled") {
        action.payload = "running";
      }
      return {
        ...state,
        workoutsList: state.workoutsList.concat({
          wType: action.payload,
          wDate: Date.now() / 1000,
          wDistance: 0,
          wComment: "...",
        }),
      };
    //ON_ROW_MOUSE_ENTER и ON_ROW_MOUSE_LEAVE нужны для отображения кнопки удаления
    //при наведении на нужную тренировку.
    case ON_ROW_MOUSE_ENTER:
      let rowMouseEnterState = { ...state };
      rowMouseEnterState.workoutsList[action.payload].Xmark = true;
      return {
        ...rowMouseEnterState,
      };

    case ON_ROW_MOUSE_LEAVE:
      let rowMouseLeaveState = { ...state };
      rowMouseLeaveState.workoutsList[action.payload].Xmark = false;
      return {
        ...rowMouseLeaveState,
      };

    case ON_DELETE_HANDLER:
      let afterDeleteState = { ...state };
      afterDeleteState.workoutsList.splice(action.payload, 1);
      return {
        ...afterDeleteState,
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
