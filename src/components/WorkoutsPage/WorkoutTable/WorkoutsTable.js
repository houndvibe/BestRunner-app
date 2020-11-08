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
          return props.filterBy === workout.wType ||
            props.filterBy === "disabled" ? (
            <tr
              key={index}
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
                  value={timeConverter(workout.wDate).date}
                  onChange={(event) =>
                    props.onDateChange(event.target.value, index, "date")
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>

                <select
                  value={timeConverter(workout.wDate).month}
                  onChange={(event) =>
                    props.onDateChange(event.target.value, index, "month")
                  }
                >
                  <option value="1">Feb</option>
                  <option value="2">Mar</option>
                  <option value="3">Apr</option>
                  <option value="4">May</option>
                  <option value="5">Jun</option>
                  <option value="6">Jul</option>
                  <option value="7">Aug</option>
                  <option value="8">Sep</option>
                  <option value="9">Oct</option>
                  <option value="10">Nov</option>
                  <option value="11">Dec</option>
                  <option value="0">Jan</option>
                </select>

                <select
                  value={timeConverter(workout.wDate).year}
                  onChange={(event) =>
                    props.onDateChange(event.target.value, index, "year")
                  }
                >
                  <option value="2015">2015</option>
                  <option value="2016">2016</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
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
