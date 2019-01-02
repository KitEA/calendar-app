import React, { Component } from "react";
import { Nav, NavItem, Button, Navbar, Input, Form } from "reactstrap";

const ControlPanel = () => (
  <div>
    <Navbar color="light" expand="md">
      <Nav>
        <NavItem>
          <Button className="mr-3" color="primary">
            Добавить
          </Button>
        </NavItem>
        <NavItem>
          <Button color="primary">Обновить</Button>
        </NavItem>
      </Nav>
      <Form className="ml-auto mr-3">
        <Input type="text" placeholder="Событие, дата или участник" />
      </Form>
    </Navbar>
  </div>
);

export default ControlPanel;
