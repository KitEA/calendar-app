import React from "react";
import { Container, Row } from "reactstrap";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDay
} from "date-fns";
import CalendarCell from "../components/CalendarCell.jsx";

class CalendarBody extends React.Component {
  renderCalendarDays() {
    const daysOnCalendarPage = 35;
    const daysInWeek = 7;

    const monthStart = startOfMonth(this.props.currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
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

    for (let weekNumber = 0; weekNumber < weeksOfMonth.length; weekNumber++) {
      monthData.push(
        <Row key={weekNumber} id="calendarCells">
          {weeksOfMonth[weekNumber].map(day => (
            <CalendarCell
              key={day}
              day={day}
              weekNumber={weekNumber}
              currentMonth={monthStart}
            />
          ))}
        </Row>
      );
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
