import React, { useEffect } from "react";
import WorkoutsTable from "../WorkoutsPage/WorkoutTable/WorkoutsTable";
import firebase from "../../firebase";
import { connect, useDispatch } from "react-redux";
import "./WorkoutsPage.css";
import {
  onSort,
  onFilter,
  onTypeChange,
  onCommentChange,
  onDistanceChange,
  onDateChange,
  onWorkoutAdd,
  onRowMouseEnter,
  onRowMouseLeave,
  onDeleteHandler,
  asyncSetState,
} from "../../store/actions";

const WorkoutsPage = ({
  onSort,
  onFilter,
  workoutsList,
  filterBy,
  onTypeChange,
  onCommentChange,
  onDistanceChange,
  onDateChange,
  onWorkoutAdd,
  onRowMouseEnter,
  onRowMouseLeave,
  onDeleteHandler,
}) => {
  const DatabaseURL = "https://bestrunnerapp.firebaseio.com/initialState.json";
  const dispatch = useDispatch();

  //Забираем данные с сервера при запуске/обновлении приложения.
  useEffect(() => {
    fetch(DatabaseURL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(asyncSetState(data));
      });
  }, [dispatch]);

  //Отправляем обновленные данные по тренировкам на сервер при каждом изменении массива WorkoutsList.
  useEffect(() => {
    firebase.database().ref("initialState/workoutsList/").set(workoutsList);
  }, [workoutsList]);

  return (
    <div className="WorkoutPage">
      <div className="Toolbar">
        <div className="Toolbar__Filter">
          Filter:{" "}
          <select
            className="Toolbar__Filter__Select Toolbar__UI"
            onChange={(event) => onFilter(event.target.value)}
            defaultValue="disabled"
          >
            <option value="disabled">all</option>
            <option value="swimming">swimming</option>
            <option value="running">running</option>
            <option value="walking">walking</option>
            <option value="cycle">cycle</option>
          </select>
        </div>
        <button
          className="Toolbar__Button Toolbar__UI"
          onClick={() => onWorkoutAdd(filterBy)}
        >
          Add workout
        </button>
      </div>
      <div className="Table">
        <div className="Table__Container">
          <WorkoutsTable
            filterBy={filterBy}
            workoutsList={workoutsList}
            onSort={(type) => onSort(type)}
            onTypeChange={(type, index) => onTypeChange(type, index)}
            onCommentChange={(comment, index) =>
              onCommentChange(comment, index)
            }
            onDistanceChange={(value, index) => onDistanceChange(value, index)}
            onDateChange={(date, index, position) =>
              onDateChange(date, index, position)
            }
            onRowMouseEnter={(index) => onRowMouseEnter(index)}
            onRowMouseLeave={(index) => onRowMouseLeave(index)}
            onDeleteHandler={(index) => onDeleteHandler(index)}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //workoutsList: Массив который содержит список тренировок в виде обьектов
  workoutsList: [...state.workoutsList],
  //filterBy: Определяет на основе какого фильтра отрисовывать таблицу тренировок
  filterBy: state.filterBy,
});

const mapDispatchToProps = (dispatch) => ({
  //Экшн запускается при попытке сортировки столбцов, принимая аргументом тип столбца.
  onSort: (type) => dispatch(onSort(type)),
  //Запускается при выборе типа фильтрации, принимая аргументом тип активности.
  onFilter: (value) => dispatch(onFilter(value)),
  //Запускается при редактировании типа активности у определенной тренировки,
  //принимая аргументами новый тип и индекс тренировки.
  onTypeChange: (type, index) => dispatch(onTypeChange(type, index)),
  //Запускается при редактировании комментария,
  //принимая аргументами новый текст комментария и индекс тренировки.
  onCommentChange: (comment, index) =>
    dispatch(onCommentChange(comment, index)),
  //Запускается при редактировании дистанции тренировки,
  //принимая аргументами новое расстояние и индекс тренировки.
  onDistanceChange: (value, index) => dispatch(onDistanceChange(value, index)),
  //Запускается при редактировании даты тренировки,
  //принимая аргументами новое значение, индекс тренировки и тип значения (дата/ месяц/ год).
  onDateChange: (date, index, position) =>
    dispatch(onDateChange(date, index, position)),
  //Запускается при добавлении новой тренировки.
  onWorkoutAdd: (type) => dispatch(onWorkoutAdd(type)),
  //Запускается при наведении мыши на строку тренировки.
  onRowMouseEnter: (index) => dispatch(onRowMouseEnter(index)),
  //Запускается при покидании мышью строки тренировки.
  onRowMouseLeave: (index) => dispatch(onRowMouseLeave(index)),
  //Запускается при удалении тренировки.
  onDeleteHandler: (index) => dispatch(onDeleteHandler(index)),
  //Запускается при начальном получении данных с сервера для отправки в стор.
  asyncSetState: (date) => dispatch(asyncSetState(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutsPage);
