import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ControlPanel from "../components/ControlPanel.jsx";

class Calendar extends Component {
  render() {
    return (
      <Container>
        <ControlPanel />
      </Container>
    );
  }
}

export default Calendar;
