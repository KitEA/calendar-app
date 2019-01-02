import React, { Component } from "react";
import { Jumbotron, Button, Input, Row, Col} from "reactstrap";

const ControlPanel = () => (
  <Jumbotron>
    <Row className="no-gutters">
      <Col className="mr-2" xs="auto">
        <Button color="primary">
          Добавить
        </Button>
      </Col>
      <Col xs="auto">
        <Button color="primary">Обновить</Button>
      </Col>
      <Col className="ml-auto" xs="3">
        <Input type="text" placeholder="Событие, дата или участник" />
      </Col>
    </Row>
  </Jumbotron>
);

export default ControlPanel;
