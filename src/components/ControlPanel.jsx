import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Button,
  Input,
  InputGroup,
  Col
} from "reactstrap";

const ControlPanel = () => (
  <Navbar className="align-items-end pb-4">
    <Nav>
      <NavItem className="ml-4 mr-3">
        <Button id="addPopover" color="primary" type="button">Add</Button>
      </NavItem>
      <NavItem>
        <Button color="primary">Update</Button>
      </NavItem>
    </Nav>
    <Col className="ml-auto" xs="3">
      <InputGroup>
        <i
          className="fa fa-search mr-2 my-auto"
          style={{ fontSize: "18px", color: "#A9A9A9" }}
        />
        <Input type="text" placeholder="Event, date or participant" />
      </InputGroup>
    </Col>
  </Navbar>
);

export default ControlPanel;
