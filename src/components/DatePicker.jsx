import React from "react";
import { Row, Button } from "reactstrap";

const DatePicker = () => (
  <Row className="mt-3 ml-5">
    <Button className="mr-2" outline color="secondary" size="sm">
      <i class="fa fa-caret-left" />
    </Button>
    <h5>March 2013</h5>
    <Button className="ml-2" outline color="secondary" size="sm">
      <i class="fa fa-caret-right" />
    </Button>
  </Row>
);

export default DatePicker;
