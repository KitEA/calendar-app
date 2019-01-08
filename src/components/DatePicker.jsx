import React from "react";
import { Row, Button, Badge } from "reactstrap";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";

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
    <h5>{format(currentMonth, dateFormat, {locale: ru})}</h5>
    <Button
      className="ml-2"
      outline
      color="secondary"
      size="sm"
      onClick={() => nextMonth()}
    >
      <i className="fa fa-caret-right" />
    </Button>
    <h5 className="mt-1 ml-2"><Badge id="dayIndicator">Сегодня</Badge></h5>
  </Row>
);

export default DatePicker;
