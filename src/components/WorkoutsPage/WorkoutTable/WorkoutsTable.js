import React from "react";

import "./WorkoutsTable.css";

//timeConverter приобразовывает таймстамп в значение года/месяца/даты
function timeConverter(timestamp) {
  let d = new Date(timestamp * 1000);
  let year = d.getFullYear();
  let month = d.getMonth();
  let date = d.getDate();
  return {
    year,
    month,
    date,
  };
}

function WorkoutsTable(props) {
  const yearOptions = ["2017", "2018", "2019", "2020", "2021"];
  const monthOptions = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <table className="WorkoutsTable">
      <thead className="WorkoutsTable__Head">
        <tr>
          <td
            className="WorkoutsTable__Head__IndexCell"
            onClick={() => props.onSort("index")}
          >
            №
          </td>
          <td
            className="WorkoutsTable__Head__DateCell"
            onClick={() => props.onSort("date")}
          >
            Date
          </td>
          <td
            className="WorkoutsTable__Head__TypeCell"
            onClick={() => props.onSort("type")}
          >
            Type
          </td>
          <td
            className="WorkoutsTable__Head__DistanceCell"
            onClick={() => props.onSort("distance")}
          >
            Distance (km)
          </td>
          <td
            className="WorkoutsTable__Head__CommentCell"
            onClick={() => props.onSort("comment")}
          >
            Comment
          </td>
        </tr>
      </thead>
      <tbody className="WorkoutsTable__Body">
        {props.workoutsList.map((workout, index) => {
          //Вычисляем количество дней в месяце
          let date = new Date(workout.wDate * 1000);
          let date2 = new Date(workout.wDate * 1000);
          date.setMonth(date.getMonth() + 1);

          let daysInCurrentMonth =
            (date.getTime() - date2.getTime()) / 1000 / 60 / 60 / 24;
          let daysOptions = [];

          for (let i = 1; i <= daysInCurrentMonth; i++) {
            daysOptions.push(`${i}`);
          }

          return props.filterBy === workout.wType ||
            props.filterBy === "disabled" ? (
            <tr
              key={workout.wId}
              className={workout.wType}
              tabIndex="0"
              onMouseEnter={() => props.onRowMouseEnter(index)}
              onMouseLeave={() => props.onRowMouseLeave(index)}
            >
              <td className="WorkoutsTable__Body__IndexCell">
                {workout.Xmark ? (
                  <img
                    onClick={() => props.onDeleteHandler(index)}
                    className="WorkoutsTable__Body__IndexCell_BacketButton"
                    src="https://img2.pngio.com/delete-icon-transparent-png-clipart-free-download-yawd-delete-icon-png-980_980.png"
                    alt="delete"
                  />
                ) : (
                  index + 1
                )}
              </td>
              <td className="WorkoutsTable__Body__DateCell">
                <select
                  //Селектор даты
                  value={timeConverter(workout.wDate).date}
                  onChange={(event) =>
                    props.onDateChange(event.target.value, index, "date")
                  }
                >
                  {daysOptions.map((day) => {
                    return (
                      <option key={Math.random()} value={`${day}`}>
                        {day}
                      </option>
                    );
                  })}
                </select>

                <select
                  //Селектор месяца
                  value={timeConverter(workout.wDate).month}
                  onChange={(event) =>
                    props.onDateChange(event.target.value, index, "month")
                  }
                >
                  {monthOptions.map((month, index) => {
                    return (
                      <option key={Math.random()} value={`${index}`}>
                        {month}
                      </option>
                    );
                  })}
                </select>

                <select
                  //Селектор года
                  value={timeConverter(workout.wDate).year}
                  onChange={(event) =>
                    props.onDateChange(event.target.value, index, "year")
                  }
                >
                  {yearOptions.map((year) => {
                    return (
                      <option key={Math.random()} value={`${year}`}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </td>
              <td>
                <select
                  className="WorkoutsTable__Body__TypeCell"
                  value={workout.wType}
                  onChange={(event) =>
                    props.onTypeChange(event.target.value, index)
                  }
                >
                  <option value="walking">walking</option>
                  <option value="running">running</option>
                  <option value="swimming">swimming</option>
                  <option value="cycle">cycle </option>
                </select>
              </td>
              <td className="WorkoutsTable__Body__DistanceCell">
                <input
                  value={workout.wDistance}
                  onChange={(event) =>
                    props.onDistanceChange(event.target.value, index)
                  }
                ></input>
              </td>
              <td className="WorkoutsTable__Body__CommentCell">
                <textarea
                  value={workout.wComment}
                  onChange={(event) =>
                    props.onCommentChange(event.target.value, index)
                  }
                ></textarea>
              </td>
            </tr>
          ) : null;
        })}
      </tbody>
    </table>
  );
}
export default WorkoutsTable;
