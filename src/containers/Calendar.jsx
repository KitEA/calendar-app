import React, { Component } from "react";
import ControlPanel from "../components/ControlPanel.jsx";
import DatePicker from "../components/DatePicker.jsx";
import CalendarBody from "./CalendarBody.jsx";
import { addMonths, subMonths } from "date-fns";

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMonth: new Date(),
      calendarEvents: Array(35).fill(null)
    };
  }

  nextMonth = () => {
    this.setState({
      currentMonth: addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    const dateFormat = "MMMM YYYY";

    return (
      <div>
        <ControlPanel />
        <DatePicker
          dateFormat={dateFormat}
          currentMonth={this.state.currentMonth}
          nextMonth={() => this.nextMonth()}
          prevMonth={() => this.prevMonth()}
        />
        <CalendarBody 
          currentMonth={this.state.currentMonth} 
          calendarEvents={this.state.calendarEvents}
        />
      </div>
    );
  }
}

export default Calendar;
