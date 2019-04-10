import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// import components

export default class IndexLayout extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
          Rendering Index Layout
          </Col>
        </Row>
        <Row>
          <Col>
          Rendering Index Layout
          </Col>
        </Row>

      </Container>
    );
  }
}