import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDay
} from "date-fns";
import CalendarCell from "../components/CalendarCell.jsx";

class CalendarBody extends Component {
  renderCalendarDays() {
    const daysOnCalendarPage = 35;
    const daysInWeek = 7;

    const monthStart = startOfMonth(this.props.currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
    const eachDayOfMonth = eachDay(startDate, endDate);

    // Massive for storing cells and their coresponding rows
    let monthData = [];

    // Separate weeks for rows from whole month
    const weeksOfMonth = [];

    for (
      let firstDayOfWeek = 0;
      firstDayOfWeek < daysOnCalendarPage;
      firstDayOfWeek = firstDayOfWeek + daysInWeek
    ) {
      weeksOfMonth.push(
        eachDayOfMonth.slice(firstDayOfWeek, firstDayOfWeek + daysInWeek)
      );
    }

    let calendarEvents = this.props.calendarEvents;
    calendarEvents[12] = {
      EventName : "Напиться!",
      Participants : "Витя Костин, Пётр Михайлов."
    };
    calendarEvents[25] = {
      EventName : "ДР!",
      Participants : "Дима Малодцов"
    };

    // Transit for next week in array of cell
    let weekCountSaver = 0;

    for (let weekNumber = 0; weekNumber < weeksOfMonth.length; weekNumber++) {
      monthData.push(
        <Row key={weekNumber} id="calendarCells">
          {weeksOfMonth[weekNumber].map((day, index) => (
            <CalendarCell
              calendarEvent={
                calendarEvents[weekCountSaver + index + weekNumber]
              }
              key={day}
              day={day}
              weekNumber={weekNumber}
            />
          ))}
        </Row>
      );
      weekCountSaver += 6;
    }

    return (
      <Container fluid className="mt-3 mx-5">
        {monthData}
      </Container>
    );
  }

  render() {
    return <div>{this.renderCalendarDays()}</div>;
  }
}

export default CalendarBody;
