import React from "react";
import { Button, Col } from "reactstrap";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

const CalendarCell = ({ day, weekNumber}) => (
  <Col>
    <Button id="cellAction">
      <p className="cell-content">
        <span>
          {weekNumber == 0
            ? format(day, "dddd", {locale: ru}) + ", " + format(day, "D")
            : format(day, "D")}
        </span>
      </p>
    </Button>
  </Col>
);

export default CalendarCell;
