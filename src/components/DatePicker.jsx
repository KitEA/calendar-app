import React from "react";
import { Row, Button } from "reactstrap";
import { format } from "date-fns";

const DatePicker = ({ dateFormat, currentMonth, prevMonth, nextMonth }) => (
  <Row className="mt-3 ml-5">
    <Button
      className="mr-2"
      outline
      color="secondary"
      size="sm"
      onClick={() => prevMonth()}
    >
      <i className="fa fa-caret-left" />
    </Button>
    <h5>{format(currentMonth, dateFormat)}</h5>
    <Button
      className="ml-2"
      outline
      color="secondary"
      size="sm"
      onClick={() => nextMonth()}
    >
      <i className="fa fa-caret-right" />
    </Button>
  </Row>
);

export default DatePicker;
