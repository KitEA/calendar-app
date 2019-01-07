import React from "react";
import { Button, Container, Row, Col } from "reactstrap";

const CalendarBody = () => (
  <Container fluid className="mt-3 mx-5">
    <Row id="calendarCells">
      <Col><Button id="cellAction"><p className="cell-content"><span>Monday, 25</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>Tuesday, 26</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>Wednesday, 27</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>Thursday, 28</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>Friday, 1</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>Saturday, 2</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>Sunday, 3</span></p></Button></Col>
    </Row>
    <Row id="calendarCells">
      <Col><Button id="cellAction"><p className="cell-content"><span>4</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>5</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>6</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>7</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>8</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>9</span><span>Drink</span><span>Peter, Mcihael</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>10</span></p></Button></Col>
    </Row>
    <Row id="calendarCells">
      <Col><Button id="cellAction"><p className="cell-content"><span>11</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>12</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>13</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>14</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>15</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>16</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>17</span></p></Button></Col>
    </Row>
    <Row id="calendarCells">
      <Col><Button id="cellAction"><p className="cell-content"><span>18</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>19</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>20</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>21</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>22</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>23</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>24</span></p></Button></Col>
    </Row>
    <Row id="calendarCells">
      <Col><Button id="cellAction"><p className="cell-content"><span>25</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>26</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>27</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>28</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>29</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>30</span></p></Button></Col>
      <Col><Button id="cellAction"><p className="cell-content"><span>31</span></p></Button></Col>
    </Row>
  </Container>
);

export default CalendarBody;
