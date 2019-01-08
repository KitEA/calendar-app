import React from "react";
import { Button, Col } from "reactstrap";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

const CalendarCell = ({ day, weekNumber, calendarEvent }) => (
  <Col>
    <Button id="cellAction">
      <p className="cell-content">
        <span>
          {weekNumber == 0
            ? format(day, "dddd", { locale: ru }) + ", " + format(day, "D")
            : format(day, "D")}
        </span>
        <span>{calendarEvent != null ? calendarEvent["EventName"] : null}</span>
        <span>
          {calendarEvent != null ? calendarEvent["Participants"] : null}
        </span>
      </p>
    </Button>
  </Col>
);

export default CalendarCell;
