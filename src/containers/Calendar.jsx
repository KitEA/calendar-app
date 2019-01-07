import React, { Component } from "react";
import ControlPanel from "../components/ControlPanel.jsx";
import DatePicker from "../components/DatePicker.jsx";
import CalendarBody from "../components/CalendarBody.jsx";

class Calendar extends Component {
  render() {
    return (
      <div>
        <ControlPanel />
        <DatePicker />
        <CalendarBody />
      </div>
    );
  }
}

export default Calendar;
